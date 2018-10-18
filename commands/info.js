const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let prefix = ">";
    let bavatar = bot.user.displayAvatarURL;
    let botembed = new discord.RichEmbed()
    .setTitle("**Quantum Bot**")
    .addField("Credits", "This bot was created by `pvpar#0001`.")
    .addField("Date", "Quantum Bot was created on " + bot.user.createdAt)
    .addField("Prefix", `The default prefix is ${prefix}.`)
    .setColor("#bf42f4")
    .setThumbnail(bavatar)

    return message.channel.send(botembed);

}

module.exports.help = {
    name: "info"

}