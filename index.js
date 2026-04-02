require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const { buildResponse, buildWaveringResponse } = require("./responses");
const {
  recordUsage,
  getUserUsage,
  getUserProfile,
  resetUserMemory
} = require("./memoryStore");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

function getResponseStyle(usageSnapshot) {
  const {
    totalCount,
    sameCategoryStreak,
    recentUsesInTenMinutes
  } = usageSnapshot;

  if (sameCategoryStreak >= 3) {
    return "sameCategorySpam";
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

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "mia") {
      const topic = interaction.options.getString("topic", true);
      const mode = interaction.options.getString("mode", false);

      const usageSnapshot = recordUsage(interaction.user.id, topic);
      const responseStyle = getResponseStyle(usageSnapshot);

      const response = buildResponse({
        category: topic,
        mode,
        responseStyle
      });

      await interaction.reply({
        content: response,
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "wavering") {
      await interaction.reply({
        content: buildWaveringResponse(),
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miareset") {
      resetUserMemory(interaction.user.id);

      await interaction.reply({
        content: "okay, reset done. fresh slate, pretty mind, less spiraling.",
        ephemeral: true
      });
      return;
    }

    if (interaction.commandName === "miastats") {
      const usage = getUserUsage(interaction.user.id);
      const profile = getUserProfile(interaction.user.id);

      const favorite = profile.favoriteCategory || "none yet";

      await interaction.reply({
        content:
          `**m.i.a. stats**\n` +
          `total uses: ${usage.totalCount}\n` +
          `last category: ${usage.lastCategory || "none"}\n` +
          `same category streak: ${usage.sameCategoryStreak}\n` +
          `favorite category: ${favorite}`,
        ephemeral: true
      });
      return;
    }
  } catch (error) {
    console.error("interaction error:", error);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "something broke a little. check the console and try again.",
        ephemeral: true
      });
    }
  }
});

client.login(process.env.TOKEN);
