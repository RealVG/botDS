const Discord = require('discord.js')
const client = new Discord.Client(
    {intents:['GUILDS','GUILD_MEMBERS','GUILD_BANS','GUILD_EMOJIS_AND_STICKERS','GUILD_INTEGRATIONS','GUILD_WEBHOOKS','GUILD_INVITES','GUILD_VOICE_STATES','GUILD_PRESENCES','GUILD_MESSAGES','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING','DIRECT_MESSAGES','DIRECT_MESSAGE_REACTIONS','DIRECT_MESSAGE_TYPING','GUILD_SCHEDULED_EVENTS']})
client.login(process.env.token)


client.on('message', message=>{
    if(message.content=="!startticket"){
        message.channel.send('clicca sulla reazione per aprire un ticket')
        .then(msg=>msg.react('✉️'))
    }



})
