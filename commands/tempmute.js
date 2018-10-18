const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  let mReason = args.join(" ").slice(22);
  let muteEmbed = new discord.RichEmbed()
  .setDescription("~New Mute~")
  .setColor("#8B0000")
  .addField("Muted User", `${tomute} with ID ${tomute.id}`)
  .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Muted In", message.channel)
  .addField("Time Of Mute", message.createdAt)
  .addField("Length Of Mute", mutetime)
  .addField("Reason", mReason);
   let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!muteChannel) return message.channel.send(`Can't find mod-logs channel. Run ${prefix}setup for help.`);
  message.delete().catch(O_o=>{});
  muteChannel.send(muteEmbed);
//end of module
}

module.exports.help = {
  name: "tempmute"
}