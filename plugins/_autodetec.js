
let WAMessageStubType = (await import(global.baileys)).default;
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from  fs ;
import path from  path ;

export async function before(m, { conn, participants, groupMetadata }) {
    if (!m.messageStubType || !m.isGroup) return;

    let pp = await conn.profilePictureUrl(m.messageStubParameters[0],  image )
        .catch(_ =>  https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg );
    let img = await (await fetch(pp)).buffer();
    let usuario = `@${m.sender.split( @ )[0]}`;
    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split( @ )[0]}:${m.sender.split( @ )[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    let chat = global.db.data.chats[m.chat];
    let users = participants.map(u => conn.decodeJid(u.id));
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split( @ )[0]}*`).join( \n );

    if (chat.detect && m.messageStubType == 21) {
        await this.sendMessage(m.chat, {
            text: `${usuario} \`𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀́ 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘼:\`\n\n> *${m.messageStubParameters[0]}*`,
            mentions: [m.sender, ...groupAdmins.map(v => v.id)]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 22) {
        await this.sendMessage(m.chat, {
            text: `${usuario} \`𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼𝙎 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\``,
            mentions: [m.sender]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 24) {
        await this.sendMessage(m.chat, {
            text: `${usuario} 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:\n\n${m.messageStubParameters[0]}`,
            mentions: [m.sender]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 25) {
        await this.sendMessage(m.chat, {
            text: `🔒 𝘼𝙃𝙊𝙍𝘼 *${m.messageStubParameters[0] ==  on  ?  𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎  :  𝙏𝙊𝘿𝙊𝙎 }* 𝙋𝙐𝙀𝘿𝙀 𝙀𝘿𝙄𝙏𝘼𝙍 𝙇𝘼 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`,
            mentions: [m.sender]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 26) {
        await this.sendMessage(m.chat, {
            text: `𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 *${m.messageStubParameters[0] ==  on  ?  𝙀𝙎𝙏𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 🔒  :  𝙀𝙎𝙏𝘼 𝘼𝘽𝙄𝙀𝙍𝙏𝙊 🔓 }*\n ${m.messageStubParameters[0] ==  on  ?  𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍  :  𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 } 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`,
            mentions: [m.sender]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 29) {
        await this.sendMessage(m.chat, {
            text: `@${m.messageStubParameters[0].split( @ )[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n😼🫵 𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuario}`,
            mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
        }, {
            quoted: fkontak,
            ephemeralExpiration: 24 * 60 * 1000,
            disappearingMessagesInChat: 24 * 60 * 1000
        });
    } else if (chat.detect && m.messageStubType == 30) {
        await this.sendMessage(m.chat, {
            text: `@${m.messageStubParameters[0].split( @ )[0]} 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n😼🫵 𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuario}`,
            mentions: [m.sender, m.messageStub
