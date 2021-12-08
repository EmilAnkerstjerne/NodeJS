require("dotenv").config();

const eliza = require("./elizabot.js")

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.login(process.env.BOT_TOKEN);

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    
    // console.log(message.content);
    message.content;
    if(message.content.toLowerCase().includes("bot")){
        await message.channel.send(message.content.replace(/bot/ig, "human"));
    }else if (message.content.toLowerCase().includes("ping")) {
        console.log("inside");
        await message.channel.send("Pong!");
    } else {
        await message.channel.send(eliza.reply(message.content));
    }
});

client.on("interactionCreate", reaction => {
    console.log(reaction);

});

