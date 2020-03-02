const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "["
let mon = 'Art, Science, Language, PE, Islamiat, Geography.'
let tue = 'History, Geography, Sci, Math, ICT, Urdu.'
let wed = 'Language(Library), Urdu, Math, Literature, Islamiat, History.'
let thur = 'PE, Science, Literature, Art, Urdu, Math.'
let fri = 'Language, Literature, Science, History, Math.'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'mon') {
      msg.reply(mon);
    }
  });

client.login(auth.token);
client.on('message', msg => {
    if (msg.content === prefix + 'tue') {
      msg.reply(tue);
    }
  });

client.login(auth.token);
client.on('message', msg => {
    if (msg.content === prefix + 'wed') {
      msg.reply(wed);
    }
  });

  client.login(auth.token);
client.on('message', msg => {
    if (msg.content === prefix + 'thur') {
      msg.reply(thur);
    }
  });

  client.login(auth.token);
client.on('message', msg => {
    if (msg.content === prefix + 'fri') {
      msg.reply(fri)
    }
  });