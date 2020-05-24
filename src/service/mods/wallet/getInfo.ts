/**
 * @desc 获取微信用户钱包（消息体格式，带有标题、内容、链接地址）
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 用户id */
  userId: string;
}

export const init = new defs.WalletInfoRes();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/wallet/info', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
