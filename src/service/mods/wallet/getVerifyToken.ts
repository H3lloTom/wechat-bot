/**
 * @desc 校验token是否有效
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 用户id */
  userId: string;
  /** token */
  token: string;
}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/wallet/verify/token', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
