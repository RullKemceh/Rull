import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*Nyari Apa Bang🤨📸*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '',
body: '',         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `🧐📸`}}})
}
handler.command = ['sc','script'] 
handler.help = ['sc']
handler.tags = ['general']
export default handler
