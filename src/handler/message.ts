import { Message, Wechaty, Contact, UrlLink, FileBox } from 'wechaty';
import { delay } from '../tools';

const helperTmp = () =>
  ` --帮助手册--
  回复【订单】查看最近购买记录
  回复【钱包】查看钱包信息
  回复【提现】提现购物的返利余额
  回复【账单】查看返利账单
`;

const host = process.env.LANDING_HOST;

export default async function handler(bot: Wechaty, msg: Message) {
  const room = msg.room();

  if (room) {
    // 如果是微信群消息
    return;
  }

  const contact = msg.from();
  const text = msg.text();
  const type = contact.type();

  if (type === Contact.Type.Official) {
    // 如果是公众号消息
    return;
  }

  if (contact.type() === bot.Contact.Type.Personal)
    switch (text) {
      case '帮助': {
        await delay(1000);
        msg.say(helperTmp());
        return;
      }
      case '绑定用户': {
        await delay(1000);
        msg.say(FileBox.fromQRCode(`${host}/wallet`));
      }
      case '提现': {
        const link = new UrlLink({
          description: '提现',
          title: '金额记录',
          url: `${host}/cash`,
          thumbnailUrl: 'https://s1.ax1x.com/2020/06/02/ttu8Ds.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '订单': {
        const link = new UrlLink({
          description: '订单详情',
          title: '订单记录',
          url: `${host}/record`,
          thumbnailUrl: 'https://s1.ax1x.com/2020/06/02/ttuYEq.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '钱包': {
        const link = new UrlLink({
          description: '钱包',
          title: '钱包信息',
          url: `${host}/wallet`,
          thumbnailUrl: 'https://s1.ax1x.com/2020/06/02/ttuGbn.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '账单': {
        const link = new UrlLink({
          description: '账单',
          title: '账单记录',
          url: `${host}/bill`,
          thumbnailUrl: 'https://s1.ax1x.com/2020/06/02/ttu3uj.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      default:
        break;
    }
}

// https://s1.ax1x.com/2020/06/02/ttuYEq.png  订单
// https://s1.ax1x.com/2020/06/02/ttuGbn.png  钱包
// https://s1.ax1x.com/2020/06/02/ttu8Ds.png  提现
// https://s1.ax1x.com/2020/06/02/ttu3uj.png  账单
