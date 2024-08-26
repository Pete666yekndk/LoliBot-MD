let handler = async (m, { conn, participants, groupMetadata, args }) => {
    // جلب صورة البروفايل للمجموعة أو صورة افتراضية إذا لم تكن الصورة موجودة
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png';
    
    // تصفية قائمة الأعضاء للحصول على المسؤولين فقط
    const groupAdmins = participants.filter(p => p.admin);
    
    // إعداد قائمة المسؤولين
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥  ');
    
    // جلب معرف المالك
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split('-')[0] + '@s.whatsapp.net';
    
    // النص المراد إرساله
    let text = `•══✪〘 *فريق العمل* 〙✪══•

> *إذا كنت بحاجة إلى وجود مسؤول*

*• المجموعة:* _${groupMetadata.subject}_

*• المسؤولين:*
${listAdmin}

> [ ⚠ ️] *استخدم هذا الأمر فقط عندما تكون هناك حالة طوارئ*
`.trim();
    
    // إرسال الملف والنص
    conn.sendFile(m.chat, pp, 'staff.png', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] });
};

handler.help = ['staff'];
handler.tags = ['group'];
handler.command = ['staff', 'admins', 'listadmin'];
handler.group = true;
handler.register = true;

export default handler;
