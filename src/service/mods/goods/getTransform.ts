/**
 * @desc 根据淘口令获取商品返利信息
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 淘口令 */
  tkl: string;
  /** 微信id,wx_开头 */
  userId: string;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/goods/tkl/transform', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
