const { inr, stickersearch, truecaller } = require("../lib");
const inRl = require("../config");
const got = require('got');


inrl(
  {
    pattern: ["git"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    await client.sendMessage(message.from,{ text : inRl.GIT }, { quoted: message });
});
inrl(
  {
    pattern: ["search"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client, match) => {
if(match){
if(match.match("sticker")){
let data = await stickersearch(match.replace("sticker","")
    await client.sendMessage(message.from,{ text : data }, { quoted: message });
    }
  }
});
inrl(
	   {
		pattern: ['true'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
if(match){
let True = match.includes('@') ? match.split('@')[1] : match;
let rslt = await got(`https://inrl-web.vercel.app/api/truecaller?number=${True}`);
let msg = await truecaller(rslt);
		return await client.sendMessage( message.from, { text: msg }, { quoted: message })
                }
        }
);
