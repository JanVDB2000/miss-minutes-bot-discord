require('dotenv').config()

const { Client } = require('discord.js'); //import discord.js

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); //create new client

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content === '!Time')  {

        const messages = ["Time is Running", "Time Fly", "Time is money", "Time to TimeTravel", "For all time always"];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        msg.reply(randomMessage);
    }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token

