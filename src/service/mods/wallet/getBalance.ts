/**
 * @desc 获取微信用户钱包余额
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 用户id */
  userId: string;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/wallet/balance', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
