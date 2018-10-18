const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You're not an admin...")
    let setupEmbed = new discord.RichEmbed()
    .setTitle("~Setup~")
    .addField("Channels", "Create two channels only visible to moderators + on the server. These channels __need__ to be called `reports` and `mod-logs`. `reports` will show any user reports and `mod-logs` will log punishments such as bans, kicks and mutes.")
    .setColor("#696969")

    return message.channel.send(setupEmbed);

}

module.exports.help = {
    name: "setup"

}