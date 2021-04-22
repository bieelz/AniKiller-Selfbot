const Discord = require('discord.js'),
  config = require("../config.json");

module.exports.run = (client, message) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Anikiller - Selfbot 卐', message.author.displayAvatarURL)
    .addField('nuke', ' ``Nuke the all server channels and roles.``', true)
    .addField('chn', ' ``Create the raid channels.``', true)
    .addField('everyones', ' ``Make an everyones flood.``', true)
	.addField('banall', ' ``Ban members all.``', true)
    .addField('purge', ' ``Remove the inactive members (1 day).``', true)
    .setFooter('Dont trust, die, its your destiny!')
    .setColor("#0498FF")
    .setImage('https://www.metal-archives.com/images/3/5/4/0/3540422508_logo.jpg?5011')

    message.channel.send(embed);
}
