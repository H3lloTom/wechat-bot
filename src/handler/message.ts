import { Message, Wechaty, Contact, UrlLink } from 'wechaty';
import { delay } from '../tools';

const helperTmp = () =>
  ` --帮助手册--
  回复【订单】查看最近购买记录
  回复【余额】查看当前余额
  回复【提现】提现购物的返利余额
`;

const orderTmp = () =>
  ` --订单信息--
  最近订单成交数：
  最近邀请好友订单成交数：
`;

const balanceTmp = () =>
  ` --余额信息--
  余额：
  提现记录：
`;

const extractTmp = () => ``;

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
      case '帮助':
        await delay(1000);
        msg.say(helperTmp());
        return;
      case '订单':
        await delay(1000);
        msg.say(orderTmp());
        return;
      case '余额':
        await delay(1000);
        msg.say(balanceTmp());
        return;
      case '提现':
        return;
      case '链接':
        const link = new UrlLink({
          description: '描述',
          title: '标题',
          url: 'https://www.xuyanqi.com',
          thumbnailUrl:
            'https://assets.souche.com/assets/sccimg/SaaS/common_button_detailedit_3x.png',
        });
        delay(1000);
        msg.say(link);
      default:
        break;
    }
}
