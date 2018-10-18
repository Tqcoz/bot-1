
const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {
    let prefix = ">";
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick this person. If you think this is an error, contact server Administrators.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked.");
     let kickEmbed = new discord.RichEmbed()
    .setDescription("~New Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
     let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
    message.delete().catch(O_o=>{});
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    if(kickChannel) return message.channel.send(`User <@${kUser.id}> kicked.`)

}

module.exports.help = {
    name: "kick"

}