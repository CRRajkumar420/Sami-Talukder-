module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.postimg.cc/xdNhdjDw/received-1835241860272152.jpg",
"https://i.postimg.cc/rw0Q1hnW/received-911404057432777.jpg"];
  
var callback = () => api.sendMessage({body:`DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐃 𝐒𝐚𝐦𝐢 𝐓𝐚𝐥𝐮𝐤𝐝𝐞𝐫 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐏𝐑𝐈𝐍𝐂𝐄 𝐂𝐑 𝐑𝐚𝐣𝐤𝐮𝐦𝐚𝐫
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐲𝐥𝐡𝐞𝐭, 𝐌𝐨𝐮𝐥𝐨𝐯𝐢𝐛𝐚𝐳𝐚𝐫, 𝐑𝐚𝐣𝐧𝐚𝐠𝐚𝐫
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐤𝐨𝐦𝐮 𝐧𝐚
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏7++
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : imdsamiul477@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+01753446232
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/𝐌𝐝 𝐒𝐚𝐦𝐢 𝐓𝐚𝐥𝐮𝐤𝐝𝐞𝐫
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100077152772373
 https://www.facebook.com/profile.php?id=100077152772373
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
