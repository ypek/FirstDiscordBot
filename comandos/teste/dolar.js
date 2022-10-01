const db = require('quick.db')
module.exports = {
    name: 'cotacao',
    aliases: [],
    execute(client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        const apiUrl = 'http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL';
        const fetch = require('node-fetch');
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                embed.setTitle('Dólar 🇺🇸 💵')
                embed.setDescription('**Cotação Internacional HJ! 🌐**')
                embed.addField('Dólar 🇺🇸', data.USDBRL.high)
                embed.addField('Euro 🇪🇺', data.EURBRL.high)
                embed.addField('Bitcoin 🪙', data.BTCBRL.high + ' USD')
                console.log(data)
                embed.setColor('RANDOM')
                message.reply({
                    embeds: [embed]
                })
            })
    }
}