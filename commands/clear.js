const discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (message.deletable) message.delete();
    message.channel.fetchMessages().then(message => message.forEach(m => m.delete().catch(error => {})));

  }