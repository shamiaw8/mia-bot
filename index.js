require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const {
  normalizeInput,
  isTopicInCategory,
  buildResponse,
  buildWaveringResponse,
  buildFixResponse,
  buildSituationResponse
} = require("./responses");

const {
  recordUsage,
  incrementSpamCallout,
  resetSpamCalloutCount,
  getUserUsage,
  getUserProfile,
  resetUserMemory,
  addCustomAffirmation,
  getCustomAffirmations,
  deleteCustomAffirmation
} = require("./memoryStore");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

function getResponseStyle(usageSnapshot) {
  const {
    totalCount,
    sameTopicStreak,
    recentUsesInTenMinutes
  } = usageSnapshot;

  if (sameTopicStreak >= 3) {
    return "sameTopicSpam";
  }

  if (recentUsesInTenMinutes >= 5) {
    return "generalSpam";
  }

  if (totalCount > 5) {
    return "generalSpam";
  }

  return "standard";
}

client.once("ready", () => {
  console.log(`${process.env.BOT_NAME || "m.i.a."} is online as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "mia") {
      const rawCategory = interaction.options.getString("category", true);
      const rawTopic = interaction.options.getString("topic", true);
      const mode = interaction.options.getString("mode", false);

      const category = normalizeInput(rawCategory);
      const topic = normalizeInput(rawTopic);

      if (!isTopicInCategory(category, topic)) {
        await interaction.reply({
          content:
            `that topic doesn’t belong in **${category}**.\n` +
            `pick a matching topic and try again. don’t make this weird.`,
          ephemeral: true
        });
        return;
      }

      const usageSnapshot = recordUsage(interaction.user.id, category, topic);
      const responseStyle = getResponseStyle(usageSnapshot);

      let harsher = false;

      if (responseStyle === "sameTopicSpam" || responseStyle === "generalSpam") {
        const spamCount = incrementSpamCallout(interaction.user.id);
        harsher = spamCount > 1;
      } else {
        resetSpamCalloutCount(interaction.user.id);
      }

      const response = buildResponse({
        topic,
        mode,
        responseStyle,
        harsher
      });

      await interaction.reply({
        content: response
      });
      return;
    }

    if (interaction.commandName === "wavering") {
      await interaction.reply({
        content: buildWaveringResponse()
      });
      return;
    }

    if (interaction.commandName === "miafix") {
      const thought = interaction.options.getString("thought", true);

      await interaction.reply({
        content: buildFixResponse(thought)
      });
      return;
    }

    if (interaction.commandName === "miasituation") {
      const text = interaction.options.getString("text", true);

      await interaction.reply({
        content: buildSituationResponse(text)
      });
      return;
    }

    if (interaction.commandName === "miasaveaffirm") {
      const text = interaction.options.getString("text", true).trim();

      if (text.length < 3) {
        await interaction.reply({
          content: "that affirmation is too flimsy. give me something with a spine.",
          ephemeral: true
        });
        return;
      }

      const affirmations = addCustomAffirmation(interaction.user.id, text);

      await interaction.reply({
        content: `saved. you now have ${affirmations.length} custom affirmation${affirmations.length === 1 ? "" : "s"}.`,
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miamyaffirm") {
      const affirmations = getCustomAffirmations(interaction.user.id);

      if (!affirmations || affirmations.length === 0) {
        await interaction.reply({
          content: "you don’t have any custom affirmations saved yet. go write something useful instead of staring into space.",
          ephemeral: true
        });
        return;
      }

      const formatted = affirmations
        .map((item, index) => `${index + 1}. ${item}`)
        .join("\n");

      await interaction.reply({
        content: `**your custom affirmations**\n${formatted}`,
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miadeleteaffirm") {
      const number = interaction.options.getInteger("number", true);
      const result = deleteCustomAffirmation(interaction.user.id, number - 1);

      if (!result.success) {
        await interaction.reply({
          content: "that number doesn’t exist. dramatic, but incorrect.",
          ephemeral: true
        });
        return;
      }

      await interaction.reply({
        content: `deleted: "${result.removed}"`,
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miareset") {
      resetUserMemory(interaction.user.id);

      await interaction.reply({
        content: "fine. your history is wiped. try not to use me like a panic button this time.",
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miastats") {
      const usage = getUserUsage(interaction.user.id);
      const profile = getUserProfile(interaction.user.id);

      const favoriteTopic = profile.favoriteTopic || "none yet";
      const favoriteCategory = profile.favoriteCategory || "none yet";
      const customAffirmCount = Array.isArray(profile.customAffirmations)
        ? profile.customAffirmations.length
        : 0;

      await interaction.reply({
        content:
          `**m.i.a. stats**\n` +
          `total uses: ${usage.totalCount}\n` +
          `last category: ${usage.lastCategory || "none"}\n` +
          `last topic: ${usage.lastTopic || "none"}\n` +
          `same topic streak: ${usage.sameTopicStreak}\n` +
          `same category streak: ${usage.sameCategoryStreak}\n` +
          `favorite category: ${favoriteCategory}\n` +
          `favorite topic: ${favoriteTopic}\n` +
          `saved affirmations: ${customAffirmCount}`,
        ephemeral: true
      });
      return;
    }
  } catch (error) {
    console.error("interaction error:", error);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "something broke. tragic. check the console.",
        ephemeral: true
      });
    }
  }
});

client.login(process.env.TOKEN);
