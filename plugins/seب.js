let handler = async (m, { conn, text }) => {
  if (!text) throw `لم يتم اكتشاف رمز...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`تم تغيير البادئة إلى  *${text}*`)
}

handler.help = ['بو'].map(v => v + ' [البادئة]')
handler.tags = ['new']
handler.command = /^(بو|بر)$/i
handler.owner = true

export default handler
