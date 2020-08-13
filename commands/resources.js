const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  return message.author.send(
 "\
 Your message to call me has been deleted! This message has been sent privately. \n\
 Please, if you have any questions or concerns, reach out to Case, your CA. \n\
 Or one of these resources on campus!\
 \n\
 \n\
 __***Counseling Center***__ -  Call **603-535-2461**, they are open *8am-4pm on weekdays* \n\
 but you can call anytime and leave a voicemail. They will get back to you as soon as \n\
 possible. They are not just for those with depression or severe anxiety, \n\
 they are not just for long term use. They are not doing in-person sessions this \n\
 semester *however*, they are doing zoom sessions and are working on a private room \n\
 for you to have that meeting if you cannot find privacy in your room.\
 \n\
 \n\
 __***Title XI and Sexual Assult/Harrassment***__ -  Call the Frost House at: **603-535-2206** \n\
 or email the Title XI Coordinator, Janette Wiggett at jtwiggett@plymouth.edu. She is a very caring person \n\
 Plymouth should be an environment free of all forms of sex-based discrimination including sexual harassment \n\
 and sexual violence. If you know of any sort of sex-based discrimination, you should report it here. They are confidential\
 \n\
 \n\
 __***Voices Against Violence***__ -  Call **603-536-5999** or the 24/7 hotline: **1-877-221-6176**, \n\
 This is a crisis services agency located in Plymouth. they support and provide information to victims, \n\
 their friends and families, community members, and professionals around domestic violence, \n\
 children who witness domestic violence, sexual violence, and harassment, stalking, human trafficking and bullying \n\
 If you have seen or experienced anything listed above or anything remotely similar these people are a fantastic \n\
 and confidential resource!\
 \n\
 \n\
 __***National Suicide Prevention Hotline***__ -  Please Call **1-800-273-8255**\
 \n\
 __***UPD (University Police Department)***__ -  Please Call **603-535-2330** or **911**\
 "
);

};

module.exports.help = {
  name: "resources",
  aliases: []
};