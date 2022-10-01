const db = require('quick.db')
module.exports = {
    name: 'gatinho',
    aliases: [],
    execute(client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        const apiUrl = 'https://api.thecatapi.com/v1/images/search';
        const fetch = require('node-fetch');
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                embed.setTitle('Gatinho 🐈​​')
                embed.setDescription('**Gatinho aleatório 😸**')
                embed.setImage(data[0].url)
                embed.setColor('RANDOM')
                message.reply({
                    embeds: [embed]
                })
            })
    }
}