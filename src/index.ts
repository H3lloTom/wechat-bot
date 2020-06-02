import { config } from 'dotenv';
config();

import { Contact, Message, Wechaty } from 'wechaty';
import { ScanStatus } from 'wechaty-puppet';
import { PuppetPadplus } from 'wechaty-puppet-padplus';
import QrcodeTerminal from 'qrcode-terminal';
import './service/';
import onFriendship from './handler/friendship';
import onMessage from './handler/message';

async function bootstrap() {
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

bootstrap();
