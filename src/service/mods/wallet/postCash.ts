/**
 * @desc 提现
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/wallet/cash', params, 'POST'), {
    method: 'POST',
    body: null,
  });
}
