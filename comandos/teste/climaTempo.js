const db = require('quick.db')
const {
    data
} = require('../../slash/teste/teste')
module.exports = {
    name: 'clima',
    aliases: [],
    execute(client, message, args) {
        if (args[0] == null) {
            message.reply('**você precisa colocar o nome de uma cidade 🌆​**')
        }
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        const cityname = args.join(" ")
        const apikey = '626efe0bed1a3124db622a5a2c4e1077'
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
        const fetch = require('node-fetch');
        
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                data.main.temp = data.main.temp - 273.15
                embed.setTitle('Clima 🌥️​')
                embed.addField('Temperatura 🌡️​', data.main.temp.toFixed(2) + '°C')
                // if temp < 20 show img cold
                if (data.main.temp < 20) {
                    embed.setImage('https://cdn.discordapp.com/attachments/833740044584878126/1025599904757846147/frio.jpg')
                }
                // if temp > 20 show img hot
                if (data.main.temp > 28) {
                    embed.setImage('https://cdn.discordapp.com/attachments/833740044584878126/1025602373709725807/calor.jpg')
                }
                //if tem >= 20 img normal
                if (data.main.temp >= 20 && data.main.temp <= 28) {
                    embed.setImage('https://cdn.discordapp.com/attachments/833740044584878126/1025604251357020241/cosmos-em-campo-com-por-do-sol_29084-2310.jpg')
                }
                embed.setColor('RANDOM')
                embed.setDescription(`Temperatura Na Cidade ${cityname} 🌆`)
                message.reply({
                    embeds: [embed]
                })
            })
    }
}