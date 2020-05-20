import { config } from 'dotenv';
import { Contact, Message, Wechaty } from 'wechaty';
import { ScanStatus } from 'wechaty-puppet';
import { PuppetPadplus } from 'wechaty-puppet-padplus';
import QrcodeTerminal from 'qrcode-terminal';
import hotImport from 'hot-import';

config();

export default async function bootstrap() {
  const onFriendship = await hotImport('./handler/friendship');
  const onMessage = await hotImport('./handler/message');
  const token = process.env.WECHATY_TOKEN;

  const puppet = new PuppetPadplus({
    token,
  });

  const name = 'wechat-bot';

  const bot = new Wechaty({
    puppet,
    name,
  });

  bot
    .on('scan', (qrcode, status) => {
      if (status === ScanStatus.Waiting) {
        QrcodeTerminal.generate(qrcode, {
          small: true,
        });
      }
    })
    .on('login', (user: Contact) => {
      console.log(`login success, user: ${user}`);
    })
    .on('logout', (user: Contact, reason: string) => {
      console.log(`logout user: ${user}, reason : ${reason}`);
    })
    .on('message', (msg) => onMessage(bot, msg))
    .on('friendship', (friendship) => onFriendship(bot, friendship))
    .start();
}
