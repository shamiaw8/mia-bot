require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");
const { categories, modes } = require("./responses");

const topicChoices = Object.keys(categories).map(key => ({
  name: key,
  value: key
}));

const modeChoices = modes.map(mode => ({
  name: mode,
  value: mode
}));

const commands = [
  new SlashCommandBuilder()
    .setName("mia")
    .setDescription("get a manifestation identity architect response")
    .addStringOption(option =>
      option
        .setName("topic")
        .setDescription("choose a topic")
        .setRequired(true)
        .addChoices(...topicChoices)
    )
    .addStringOption(option =>
      option
        .setName("mode")
        .setDescription("choose a response mode")
        .setRequired(false)
        .addChoices(...modeChoices)
    ),

  new SlashCommandBuilder()
    .setName("wavering")
    .setDescription("m.i.a. explains why wavering is not real"),

  new SlashCommandBuilder()
    .setName("miafix")
    .setDescription("m.i.a. rewrites a bad thought")
    .addStringOption(option =>
      option
        .setName("thought")
        .setDescription("the thought you want fixed")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("miasituation")
    .setDescription("m.i.a. interprets a situation")
    .addStringOption(option =>
      option
        .setName("text")
        .setDescription("describe the situation")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("miasaveaffirm")
    .setDescription("save a custom affirmation")
    .addStringOption(option =>
      option
        .setName("text")
        .setDescription("the affirmation to save")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("miamyaffirm")
    .setDescription("show your saved affirmations"),

  new SlashCommandBuilder()
    .setName("miadeleteaffirm")
    .setDescription("delete one saved affirmation by its number")
    .addIntegerOption(option =>
      option
        .setName("number")
        .setDescription("the number from your affirmation list")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("miareset")
    .setDescription("reset your m.i.a. memory and usage history"),

  new SlashCommandBuilder()
    .setName("miastats")
    .setDescription("see your m.i.a. usage stats")
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("slash commands registered.");
  } catch (error) {
    console.error("failed to register commands:", error);
  }
})();