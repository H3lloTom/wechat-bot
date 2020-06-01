import { Message, Wechaty, Contact, UrlLink, FileBox } from 'wechaty';
import { delay } from '../tools';

const helperTmp = () =>
  ` --帮助手册--
  回复【订单】查看最近购买记录
  回复【余额】查看当前余额
  回复【提现】提现购物的返利余额
`;

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
      }
      case '提现': {
        const link = new UrlLink({
          description: '提现',
          title: '金额记录',
          url: 'http://119.45.38.142:8080/cash',
          thumbnailUrl:
            'https://assets.souche.com/assets/sccimg/SaaS/common_button_detailedit_3x.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '订单': {
        const link = new UrlLink({
          description: '订单详情',
          title: '订单记录',
          url: 'http://119.45.38.142:8080/cash',
          thumbnailUrl:
            'https://assets.souche.com/assets/sccimg/SaaS/common_button_detailedit_3x.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '钱包': {
        const link = new UrlLink({
          description: '钱包',
          title: '钱包信息',
          url: 'http://119.45.38.142:8080/wallet',
          thumbnailUrl:
            'https://assets.souche.com/assets/sccimg/SaaS/common_button_detailedit_3x.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      case '账单': {
        const link = new UrlLink({
          description: '账单',
          title: '账单记录',
          url: 'http://119.45.38.142:8080/bill',
          thumbnailUrl:
            'https://assets.souche.com/assets/sccimg/SaaS/common_button_detailedit_3x.png',
        });
        await delay(1000);
        msg.say(link);
        return;
      }
      default:
        break;
    }
}
