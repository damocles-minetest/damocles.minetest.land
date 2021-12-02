module.exports = {
	"remotes": [{
		"name": "IRC",
		"type": "irc",
		"host": "irc.libera.chat",
		"username": "damoclesbot",
		"password": process.env.BEERCHAT_IRC_PASSWORD,
		"debug": false,
		"system_channel": "main",
		"channels": {
			"main": "damocles"
		}
	},{
		"name": "Discord",
		"type": "discord",
		"debug": false,
		"token": process.env.BEERCHAT_DISCORD_TOKEN,
		"system_channel": "main",
		"channels": {
			"main": "main"
		}
	}]
};
