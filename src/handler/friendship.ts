import { Friendship, Wechaty } from 'wechaty';

export default async function handler(bot: Wechaty, friendship: Friendship) {
  const contact = friendship.contact();
  const type = friendship.type();
  const name = contact.name();
  await friendship.ready();
  console.log(`payload: ${friendship.toJSON()}`);
  console.log(`received friend event from ${name}`);
  console.log(`received friend event type ${type}`);
}
