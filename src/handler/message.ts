import { Message, Wechaty, Contact } from "wechaty";

const helperTmp = () => 
` --帮助手册--
  回复【订单】查看最近购买记录
  回复【余额】查看当前余额
  回复【提现】提现购物的返利余额
`;

const orderTmp = () => ``;

const balanceTmp = () => ``;

const extractTmp = () => ``;

export default async function handler(this: Wechaty, msg: Message) {
  const contact = msg.from();
  const text = msg.text();
  const room = msg.room();
  const type = contact.type();

  if (room) {
    // 如果是微信群消息
    return;
  }

  if (type === Contact.Type.Official) {
    // 如果是公众号消息
    return;
  }

  if (contact.type())
    switch (text) {
      case "帮助":
        msg.say(helperTmp());
        return;
      case "订单":
        return;
      case "余额":
        return;
      case "提现":
        return;
      default:
        break;
    }
}
