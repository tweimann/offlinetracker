var settings = require('./settings.json');
var Discord = require('discord.js');
var shell = require('shelljs');
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
	if (msg.startsWith(prefix + 'START')) {
		shell.cd(settings.startdir);
		shell.exec(settings.startfile);
		message.channel.send('Done!');
		return
	}
	if (msg.startsWith(prefix + 'KILL')) {
		shell.exec('screen -X -S ' + msg.substring(6).toLowerCase() + ' quit', (code, output) => {
			message.channel.send(output);
		});
		return
	}
	if (msg.startsWith(prefix + 'KALL')) {
		shell.exec('killall screen', (code, output) => {
			message.channel.send(output);
		});
		return
	}
});

bot.on('presenceUpdate', (oldPresence, newPresence) => {
	if (newPresence.status == 'offline') {
		settings.tracker.forEach(function(id){
			if (newPresence.member.id == id) {
				bot.channels.cache.find(channel => channel.name == settings.channelname)
				.send('<@' + settings.mention + '> <@' + newPresence.member.id + '> is offline!');
				return
			}
		});
		return
	}
});