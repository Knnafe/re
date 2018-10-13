const Discord = module.require("discord.js");

let ccreator = ("[ונלש רתאה](https://rematch.co.il/)");

let ccommunity = ("[ןאב סרוס](http://bans.rematch.co.il/)");

let chosting = ("[יפ יא יו תיינקל](https://www.paypal.com/donate/?token=VRHCP-OLNW51o0eickS1ALLH_Iie0jYwK-r-WCqWwlf8kvh-UirkfVX5exG9_hi2JSMqy0&country.x=IL&locale.x=)");

let cccommunity = ("[םיטס](https://steamcommunity.com/groups/rematchisrael)");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Our Site", ccreator)
        .addField("Source Ban:", ccommunity)
        .addField("To Buy V.I.P:", chosting)
        .addField("Steam Group:", cccommunity)

        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "links"
}