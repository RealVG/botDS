const Discord = require('discord.js')
const client = new Discord.Client( 
    {partials:['MESSAGE','CHANNEL','REACTION'],intents:['GUILDS','GUILD_MEMBERS','GUILD_BANS','GUILD_EMOJIS_AND_STICKERS','GUILD_INTEGRATIONS','GUILD_WEBHOOKS','GUILD_INVITES','GUILD_VOICE_STATES','GUILD_PRESENCES','GUILD_MESSAGES','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING','DIRECT_MESSAGES','DIRECT_MESSAGE_REACTIONS','DIRECT_MESSAGE_TYPING','GUILD_SCHEDULED_EVENTS']} 
)

client.login(process.env.token)
client.on("ready",() => {
    console.log('IMMA READY!');
})

client.on("messageCreate",(message) =>{
     //comando base
   if(message.content=="ciao amici"){
        message.channel.send("puttana tua madre")
   }

   if(message.content == "chi è gay?"){
        message.channel.send("@blxcksh2dow#8893")
   }

   if(message.content == "!debb"){
        message.channel.send("sise ama debb ma sise non glielo vuole dire, perciò mandi nudes?")
   }

   
})

client.on("message",(message)=>{
     //inviare in privato un messaggio tramite il comando !comando
     if(message.content=="!comando"){
          message.author.send("hey ciao");
     }
     //inviare un messaggio privato a uno specifico utente tutte le volte
     if(message.content=="!comando2"){
          var utente = client.users.cache.get(/*id dell'utente tra virgolette*/)
          message.author.send("ciao"+message.author.toString());
          message.author.send("ciao <@IDUTENTE>"); //PER TAGGARE

          //INVIARE UN FILE TRAMITE IL BOT
          message.channel.send("descrizione del file",{files:["immagine1.jpg","file2.pdf"]})
          

          //Creare un embed

          var embed = new Discord.MessageEmbed()//si puo mettere fuori
          .setColor("#ff0000")
          .setTitle("titolo")
          .setURL("sito per il testo precedente")
          .setDescription("ciao")
          .addField("titolo","cotenuto","true")//true o false per farlo mettere in linea al field precedente
          .setThumbnail("immagine url")
          .setTimestamp();

          //mess casuale
          var mgss=["ciao","coglione","come stai?","basta"];
          var random = Math.floor(Math.random()* mgss.length/*lunghezza della variabile mgss */)
          message.channel.send(mgss[random])
          
     }
     




})