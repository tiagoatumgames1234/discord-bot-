const Discord = require('discord.js');
const { prefix,  token} = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    console.log(message.content);
});

client.login('NzgyOTQ1MjE4Njc2MjYwODc0.X8Tkjg.2F3n0RpJIGvROsG5s3uPSUx6IEo);