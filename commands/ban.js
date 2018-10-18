const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {
    let prefix = ">";
         
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this person. If you think this is an error, contact server Administrators.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned.");
     let banEmbed = new discord.RichEmbed()
    .setDescription("~New Ban~")
    .setColor("#8B0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
     let banChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!banChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
    message.delete().catch(O_o=>{});
    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
    if(banChannel) return message.channel.send(`User <@${bUser.id}> banned.`)
    

}

module.exports.help = {
    name: "ban"

}
