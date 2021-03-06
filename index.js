const discord = require("discord.js");
const bot = new discord.Client();
const fs = require ("fs");
token = process.env.token
bot.commands = new discord.Collection
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");

    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready to go...`);
    bot.user.setActivity("The QuantumMC Discord! || '>help'", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = '>';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot,message,args);

});


bot.login(token);
