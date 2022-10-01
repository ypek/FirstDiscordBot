const db = require('quick.db')
module.exports = {
    name: 'matheuzin',
    aliases: [],
    execute(client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        embed.setTitle('Diagnóstico 🧾​')
        embed.setDescription(`**Pênis Curto Com Lesões 🍆**`)

        embed.setImage('https://cdn.discordapp.com/attachments/328240362886004738/1025540631516430337/matheusin.jpg')
        embed.setColor('RANDOM')
        message.reply({
            embeds: [embed]
        })
    }
}
