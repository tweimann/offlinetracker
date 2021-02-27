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

bot.on('presenceUpdate', (oldPresence, newPresence) => {
	if (newPresence.status == 'offline') {
		if (newPresence.member.id == settings.tracker1) {
			bot.channels.cache.find(channel => channel.name == settings.channelname)
			.send('<@' + settings.mention + '> ' + newPresence.member.name + ' is offline!');
			return
		}
		if (newPresence.member.id == settings.tracker2) {
			bot.channels.cache.find(channel => channel.name == settings.channelname)
			.send('<@' + settings.mention + '> ' + newPresence.member.name + ' is offline!');
			return
		}
	}
});
