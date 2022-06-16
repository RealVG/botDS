const Discord = require('discord.js')
const client = new Discord.Client( 
    {partials:['MESSAGE','CHANNEL','REACTION'],intents:['GUILDS','GUILD_MEMBERS','GUILD_BANS','GUILD_EMOJIS_AND_STICKERS','GUILD_INTEGRATIONS','GUILD_WEBHOOKS','GUILD_INVITES','GUILD_VOICE_STATES','GUILD_PRESENCES','GUILD_MESSAGES','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING','DIRECT_MESSAGES','DIRECT_MESSAGE_REACTIONS','DIRECT_MESSAGE_TYPING','GUILD_SCHEDULED_EVENTS']} 
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

   if(message.content == "!debb"){
        message.channel.send("sise ama debb ma sise non glielo vuole dire, perciò mandi nudes?")
   }

   
}) 


//tickets

//messaggio per inizializzare i ticket
client.on('message', message=>{
     if(message.content=="!startticket"){
         message.channel.send('clicca sulla reazione per aprire un ticket')
         .then(msg=>msg.react('✉️'))
     }
})

//sistema ticket

client.on("messageReactionAdd",async function(messageReaction,user){

     if(user.bot) return

     if(messageReaction.message.partial)await messageReaction.message.fetch();

     if(messageReaction._emoji.name == "✉️"){
          if(messageReaction.message.channel.id =='986894236513349642')
          messageReaction.users.remove(user);
          var server = messageReaction.message.channel.guild;
          if(server.channel.cache.find(canale => canale.topic ==`User ID: ${user.id}`)){
               user.send("hai gia un ticket aperto!").catch(()=>{ })
               return
          }
          server.channel.create(user.username,{
               type:"text"
          }).then(canale =>{
               canale.setTopic(`User ID: ${user.id}`);
               canale.setParent("986902625842774017")
               canale.overwritePermissions([
                    {
                         id:server.id,
                         deny:["VIEW_CHANNEL"]
                    },
                    {
                         id:user.id,
                         allow:["VIEW_CHANNEL"]
                    }
               ])
               canale.send('ecco il tuo ticket, spiega il tuo problema')
          })
     }


})