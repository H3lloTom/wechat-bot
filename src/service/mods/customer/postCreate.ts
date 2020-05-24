/**
 * @desc 添加好友时，在数据库内添加用户
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(pontCore.getUrl('/customer/create', params, 'POST'), {
    method: 'POST',
    body: bodyParams,
  });
}
