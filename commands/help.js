const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send("\
A bot that helps spread Positivity! \n\n\
**!encourage** - sends you a little message \n\n\
**!wholesome** - sends you a wholesome meme from the subreddit r/wholesomememes \n\n\
**!uplifting** - responds with a happy news report about the world! \n\n\
**!resources** - immediately deletes the message you sent asking for this and sends\
  you a private message with resources around campus like the Counseling Center and Frost House!"
  );

};

module.exports.help = {
  name: "help",
  aliases: []
};