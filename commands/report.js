const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Mention a user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new discord.RichEmbed()
    .setTitle("**New Report**")
    .addField("Reported User", `${rUser} with user ID: ${rUser.id}.`)
    .setColor("#bf42f4")
    .addField("Reported By", `${message.author} with user ID ${message.author.id}.`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't locate a reports channel. Please contact a server manager. The channel must be named: `reports`.")

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed)
        if(reportschannel) return message.channel.send("User reported, thanks!")

}

module.exports.help = {
    name: "report"

}