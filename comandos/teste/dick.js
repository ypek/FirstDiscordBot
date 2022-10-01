const db = require('quick.db')
module.exports = {
    name: 'rola',
    aliases: [],
    execute(client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        //show the user's dick size
        let user = message.mentions.users.first() || message.author;
        //random dick size
        let dick = Math.floor(Math.random() * 15) + 1;
        if (dick === null) dick = 0; //if no dick is found, return 0
        embed.setTitle('Tamanho do pênis 🍆​')
        embed.setDescription(`**O tamanho do pênis de ${user} é ${dick}cm**`)
        //show eggplant photo
        embed.setImage('https://cdn.discordapp.com/attachments/328240362886004738/1025531807157981254/55574fec851da206bf8e76599127f889.jpg')
        embed.setColor('RANDOM')
        message.reply({
            embeds: [embed]
        })
    }
}
