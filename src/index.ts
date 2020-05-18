import { config } from "dotenv";
import { Contact, Message, Wechaty } from "wechaty";
import { ScanStatus } from "wechaty-puppet";
import { PuppetPadplus } from "wechaty-puppet-padplus";
import QrcodeTerminal from "qrcode-terminal";

import onFriendship from "./handler/friendship";
import onMessage from "./handler/message";

config();

const token = process.env.WECHATY_TOKEN;

const puppet = new PuppetPadplus({
  token,
});

const name = "wechat-bot";

const bot = new Wechaty({
  puppet,
  name, // generate xxxx.memory-card.json and save login data for the next login
});

bot
  .on("scan", (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true,
      });
    }
  })
  .on("login", (user: Contact) => {
    console.log(`login success, user: ${user}`);
  })
  .on("logout", (user: Contact, reason: string) => {
    console.log(`logout user: ${user}, reason : ${reason}`);
  })
  .on("message", onMessage.bind(bot))
  .on("friendship", onFriendship.bind(bot))
  .start();
