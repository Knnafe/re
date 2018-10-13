const Discord = module.require("discord.js");

let ccreator = ("MKxRay ᴰᵉᵛ ⚒#1224");

let ccommunity = ("The entire beautiful community!");

let chosting = ("MKxRay.");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Maker:", ccreator)
        .addField("Idea's:", ccommunity)
        .addField("Bot Hosting", chosting)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}