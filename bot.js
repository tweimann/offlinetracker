var auth = require('./auth.json');
var Discord = require('discord.js');
var publicIp = require('public-ip');
var bot = new Discord.Client();

bot.once('ready', () => {
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: ' ',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/montanablack88'
		}
	});
	console.log('Ready!');
});

bot.login(auth.token);

bot.on('message', message => {
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '>';
    
	if (msg === prefix + 'PING') {
		message.reply('Pong!').then(reply => {reply.delete({timeout: 5000})}).catch();
		console.log('>>> Pinged ' + message.member.user.tag);
		return
	}
});

bot.on('presenceUpdate', (oldPresence, newPresence) => {
});
