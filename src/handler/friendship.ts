import { Friendship, Wechaty } from 'wechaty';
import { delay } from '../tools';

export default async function handler(bot: Wechaty, friendship: Friendship) {
  const contact = friendship.contact();
  const type = friendship.type();
  const name = contact.name();
  await friendship.ready();
  const payload = JSON.parse(friendship.toJSON());

  if (type === bot.Friendship.Type.Confirm) {
    // 二次确认状态
  }
  if (type === bot.Friendship.Type.Receive) {
    try {
      await delay(60000);
      // 接收到好友请求
      await API.customer.postCreate.request(
        {},
        {
          userId: contact.id,
          invited: false,
        },
      );
      await friendship.accept();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(`payload: ${friendship.toJSON()}`);
  console.log(`received friend event from ${name}`);
  console.log(`received friend event type ${type}`);
}
