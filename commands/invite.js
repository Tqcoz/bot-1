const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let inviteEmbed = new discord.RichEmbed()
    .setTitle("Quantum Server Invite")
    .setURL("https://invite.gg/zanity")
    .setColor("#696969");

    return message.channel.send(inviteEmbed)
}

module.exports.help = {
    name: "invite"

}