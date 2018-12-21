const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "Y";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Hi YouTube`,"https://www.twitch.tv/esseli00")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

var prefix = "*"
client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'leave'){
    if(message.author.id === 'ايدي صاحب البوت'){
        if (!args) {
            message.channel.send("leave <server id>");
            return;
        }

        let server = client.guilds.get(args)
        if (!server){
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('مالقيت سيرفر بنفس الايدي ',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;
        }else{
        server.leave()
                    let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('طلعت من ',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;

        }

    }
    }
});
client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('-quran')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=9-oGnGaI9Ps&t=8009s', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('-stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});
cssclient.on("ready", () => {
  function blue() {
    client.guilds.get('475064825890734085').roles.find("name", "R̷a̷i̷n̷b̷o̷w̷").setColor("RANDOM");
  };
  setInterval(blue, 3000);
});
client.login(process.env.BOT_TOKEN); 
