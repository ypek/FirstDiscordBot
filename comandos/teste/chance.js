const db = require('quick.db')
module.exports = {
    name: 'chance',
    aliases: [],
    execute(client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        const randomChance = Math.floor(Math.random() * 100) + 1;
        const imageRandomApi = 'https://picsum.photos/1280/720';
        text = args.join(" ")
        embed.setTitle(`Chance de ${text}%`)
        embed.setDescription(`**A chance ${text} é de ${randomChance}%**`)
        embed.setImage(imageRandomApi)
        embed.setColor('RANDOM')
        message.reply({
            embeds: [embed]
        })
    }
}