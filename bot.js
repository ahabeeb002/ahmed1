const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("536511173143560194")
setInterval(function() {
channel.send(`DEathGun by ahmed habeeb`);
}, 30)
})

client.login(process.env.BOT_TOKEN);