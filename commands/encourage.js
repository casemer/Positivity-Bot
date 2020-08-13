const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	var replies = [
		"You got this!",
		"I believe in you!",
		"I love you",
		"You are loved.",
		"You are beautiful!",
		"You truly light up a room",
		"Choose joy",
		"Brighter days are coming",
		"Be yourself, everyone else is taken",
		"Smile! you got this!",
		"You look fantastic today!",
		"You are more than enough just as you are!",
		"You have the best view on campus! take a break from what you're doing and just enjoy the view!",
		//"Fuck Keene State!",
		"Usually, the difference between winning and losing, is quitting",
        "In every situation, there is always a positive",
        "Stress and being overwhelmed is normal, take a deep breath and remember you've gotten this far!",
        "It's okay to be just okay"
	]

var result = replies[Math.floor(Math.random() * replies.length)];

  return message.channel.send(result);

};

module.exports.help = {
  name: "encourage",
  aliases: []
};