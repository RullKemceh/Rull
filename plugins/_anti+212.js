let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '265')) {
   	db.data.users[m.sender].banned = true
   }
    }

export default handler