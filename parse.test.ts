import { expect, test, describe } from "bun:test";
import { main } from ".";



const parsingCommandAndSubObjectEqualsTo = {
    name: "fun",
    description: "Replies with Pong!",
    choices: [],
    options: [],
    subcommand: [
      {
        name: "user3",
        description: "Info about a user TAGEUL",
        choices: [],
        options: [
          {
            name: "image",
            type: "attachment",
            description: "The image to dither",
            choices: [],
            required: true,
            channelType: undefined,
            locDesc: {},
            locName: {},
            maxLength: undefined,
            minLength: undefined,
            maxValue: undefined,
            minValue: undefined,
          }, {
            name: "input",
            type: "string",
            description: "The input to echo back",
            choices: [
              {
                name: "Funny",
                value: "gif_funny",
              }, {
                name: "Meme",
                value: "gif_meme",
              }, {
                name: "Movie",
                value: "gif_movie",
              }
            ],
            required: false,
            channelType: undefined,
            locDesc: {
              pl: "Rasa psa",
              de: "Hunderasse",
            },
            locName: {
              pl: "rasa",
              de: "rasse",
            },
            maxLength: 2000,
            minLength: 2000,
            maxValue: undefined,
            minValue: undefined,
          }, {
            name: "channel",
            type: "channel",
            description: "The channel to echo into",
            choices: [],
            required: false,
            channelType: undefined,
            locDesc: {},
            locName: {},
            maxLength: undefined,
            minLength: undefined,
            maxValue: undefined,
            minValue: undefined,
          }, {
            name: "embed",
            type: "boolean",
            description: "Whether or not the echo should be embedded",
            choices: [],
            required: false,
            channelType: undefined,
            locDesc: {},
            locName: {},
            maxLength: undefined,
            minLength: undefined,
            maxValue: undefined,
            minValue: undefined,
          }, {
            name: "target",
            type: "user",
            description: "The user",
            choices: [],
            required: false,
            channelType: undefined,
            locDesc: {},
            locName: {},
            maxLength: undefined,
            minLength: undefined,
            maxValue: undefined,
            minValue: undefined,
          }
        ],
      }
    ],
  }

const test1Input = `module.exports = {
    data: new SlashCommandBuilder()
      .setName("fun")
      .setDescription("Replies with Pong!")
      .addSubcommand((subcommand) =>
        subcommand
          .setName("user3")
          .setDescription("Info about a user TAGEUL")
          .addUserOption((option: any) =>
            option.setName("target").setDescription("The user")        
          )
          .addBooleanOption(option =>
            option.setName('embed')
            .setDescription('Whether or not the echo should be embedded'))
          .addChannelOption(option =>
            option.setName('channel')
              .setDescription('The channel to echo into')
              // Ensure the user can only select a TextChannel for output
              .addChannelTypes(ChannelType.GuildText))
          .addStringOption(option =>
            option.setName('input')
              .setDescription('The input to echo back')
              .addChoices(
                { name: 'Funny', value: 'gif_funny' },
                { name: 'Meme', value: 'gif_meme' },
                { name: 'Movie', value: 'gif_movie' },
              )
              .setNameLocalizations({
                pl: 'rasa',
                de: 'rasse',
              })
              .setDescriptionLocalizations({
                pl: 'Rasa psa',
                de: 'Hunderasse',
              })
              .setMaxLength(2000)
              .setMinLength(2000))
          .addAttachmentOption((option) => option
              .setRequired(true)
              .setName("image")
              .setDescription("The image to dither"))
              ),
    async execute(interaction: any, hi: any, lol: any, d: any, idk: any, g: any) {
      await interaction.reply("Pong!");
      // I am a comment
      const random = {}
      for (const [key, value] of Object.entries(random)) {
      }

      await interaction.reply("Pong'-j!");
      await interaction.reply("Pongjz'a(-jza'-j!");
      await interaction.reply("Ponzergzegajajag!");
      await interaction.reply("Pong!");
    }
  };`
describe("Parsing DJS commands", () => {

    test("parsing command and subcommand", async () => {
       const processed =  await main(test1Input);
       expect(processed).toEqual(parsingCommandAndSubObjectEqualsTo)

    });


    test('parsing command only', async () => {
        //const processed = await main();

       // expect(processed).toEqual(parsingCommandAndSubObjectEqualsTo)
    })
})