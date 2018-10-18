const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let prefix = ">";
    let helpEmbed = new discord.RichEmbed()
    .setTitle("Help")
    .addField("User commands", `${prefix}help, ${prefix}report [@user#0001] {reason}, ${prefix}info`)
    .addField("Mod commands", `${prefix}kick [@user#0001] {reason}, ${prefix}ban [@user#0001] {reason}`)
    .addField("Admin commands", `${prefix}setup`)
    .setColor("#bf42f4")

    message.channel.send(helpEmbed);

}

module.exports.help = {
    name: "help"

}