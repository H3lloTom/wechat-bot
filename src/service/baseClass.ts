export class CustomerCreateBody {
  /** 是否是被推广 */
  invited = false;

  /** 分享人微信id，wx_开头 */
  inviterId = '';

  /** 微信用户id，wx_开头 */
  userId = '';
}

export class WalletInfoRes {
  /** 余额 */
  balance = undefined;

  /** 链接 */
  link = '';
}
