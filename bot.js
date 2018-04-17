const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	var serverSize = client.guilds.size;
	var playerSize = client.users.filter(user => !user.bot).size
	client.user.setActivity(`PUBG with ${playerSize} ${playerSize == 1 ? `player` : `players`} on ${serverSize} ${serverSize == 1 ? `server` : `servers`}!`);
});

client.on('message', async msg => {
	if(msg.author.bot) return;
	if(msg.content.indexOf(prefix) !== 0) return;
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		const m = await msg.channel.send("ping??");
		m.edit(`pong boiiiii!!!\nLatency = ${m.createdTimestamp - msg.createdTimestamp}ms\nAPI Latency = ${Math.round(client.ping)}ms`);
	}
	
	if (command === "stats") {
		//to do
	}
});

client.login(process.env.DISCORD_TOKEN);