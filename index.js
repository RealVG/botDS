const Discord = require('discord.js')
const client = new Discord.Client(
    {intents:['GUILDS','GUILD_MEMBERS','GUILD_BANS','GUILD_EMOJIS_AND_STICKERS','GUILD_INTEGRATIONS','GUILD_WEBHOOKS','GUILD_INVITES','GUILD_VOICE_STATES','GUILD_PRESENCES','GUILD_MESSAGES','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING','DIRECT_MESSAGES','DIRECT_MESSAGE_REACTIONS','DIRECT_MESSAGE_TYPING','GUILD_SCHEDULED_EVENTS']}    
)

client.login(process.env.token)
client.on("ready",() => {
    console.log('IMMA READY!');
})

client.on("messageCreate",(message) =>{
   if(message.content=="ciao amici"){
        message.channel.send("puttana tua madre")
   }

   if(message.content == "!embed"){
        var embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} è coglione`)
        .setDescription("descrizione madonna")
        .setThumbnail("https://cdn.discordapp.com/attachments/914313562846027807/986713329663897600/unknown.png")
        message.channel.send({embeds:[embed]})
   }

   if(message.content == "chi è gay?"){
        message.channel.send("@blxcksh2dow#8893")
   }
})