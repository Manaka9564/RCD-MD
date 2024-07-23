//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94768376487";
global.owner = process.env.OWNER_NUMBER || "94768376487";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/60ded799e389e114edd6d.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK053VUc5djNHdTVYZW80V2RHS0grM2dFY3kzTXBQYnBGZ09CRkcwWFVWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlVpS3BMeEZRbk5ZTGpodGpJWDdSWFBpY0J5SWZHQUpzU21tTHMvVmppbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TzkxZEZ2MXF4L3VHU0Z1aE8zM0tjYkF5WW52SExNQjdvUllRbDhFNldFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbHFSejI3YnZNbG15eEQ5RXpmRXJ3bmtSc05zVVRsU0N1M0FlbERQeXdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMYy9KTGx2WjEzTnNXdk9RLy85eCszdTh5Zzc4dTBvM1hvVWRQQWpqVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ5djRON2xwZnQxQ0hBT3VHaE1XdERJWU5KVE1majJ0MWNtdW9xQjc1Z0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5aVk9yVHF0MXR4OTRyenBCUVV6RTIwb1dRWEJwL2ZqYWR3S3B6TWlVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM01lQjM5cHBkNmpLbkNYV1hGWHE5ZHVPQmFIRm1aMG03UVg0MVNHMUQzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4VCtETGMzSUtnTC8rbEM3eENaeFYrWHp2WnZTRDFLcTk2bkhuSmsrMzdiMG1wWVp0dXptTTA3eTBOVnpQRVNWdnZZN25NSXkzb3R6eFZWRS9uVERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiI5TERWSkxIT3U4ajdzWURydmthdW9qK3BSejN3L09jYStsOEJCSVB0dy9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsR0FuQnBCbFFSNmNIM1BzUmhJOWdRIiwicGhvbmVJZCI6IjlmYWIyNDI0LTY3NzYtNGYwMC1iOTM5LTIzMGIxYjdjMDJlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyelJMQVhDaHh2M1dZSlU4Um9aZlJzVzNmcTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3pweldhYUZsc2c5dDRwTFlvSmhZZlBlMW1nPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxU0dUREFSIiwibWUiOnsiaWQiOiI5NDc2ODM3NjQ4Nzo0MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSVE1DICB0eXBpbmcuLi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015UDBjd0RFSjJwOUxRR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhLNjFSd3U5M0swaGhzZ2RZMGl5ZU0ydnZycFhoSjRtd0F0Uk05VXdEaWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd0MkZDMXdEem5zOWl0bUo1V1A0V09HK0NYTEFwMTVIQkt5Y0R1bFNiZ0gwSnN0WWlPUXNEV0hKcS9mbWZneGtrSDdUaWNYbWpNQVZ3dTd3SUN0ZEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWL3R4Z0dSYXExZS9rdFg3cWdrdGNLN1NzaVUvRmgwcDYyb3VhQ3BFSUp5UXFIU1lEQlNhZVoyU2w1b0R1ZEo5SSs0OVpUNVBxWmVNOFExVHRYRE5DZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY4Mzc2NDg3OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ5dXRVY0x2ZHl0SVliSUhXTklzbmpOcjc2NlY0U2VKc0FMVVRQVk1BNG4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1NzA0NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTJGIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
