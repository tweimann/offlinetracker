var settings = require('./settings.json');
var Discord = require('discord.js');
var bot = new Discord.Client();

bot.once('ready', () => {
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: ' ',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/xqcow'
		}
	});
	console.log('Ready!');
});

bot.login(settings.token);

bot.on('message', message => {
	var sender = message.author;
	var msg = message.content.toUpperCase();
	var prefix = settings.prefix;
    
	if (msg === prefix + 'PING') {
		message.reply('Pong!').then(reply => {reply.delete({timeout: 5000})}).catch();
		console.log('>>> Pinged ' + message.member.user.tag);
		return
	}
});

setInterval(function() {

	bot.guilds.cache.find().then(member => {
		bot.channels.cache.find(channel => channel.name === 'surveillance').send(member);
	});

}, settings.interval);

bot.on('presenceUpdate', (oldPresence, newPresence) => {
	bot.channels.cache.find(channel => channel.name === 'surveillance').send('test');
	newPresence.guild.channels.find(channel => channel.name === 'chat').send('lol');
	console.log('test' + oldPresence + newPresence);
	return
});
