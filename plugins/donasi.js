let handler =  m => m.reply(`
╭─「 Donasi 」
│ • Dana      [ 082365089294 ]
  • Telkomsel [ 082365089294 ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
