import * as customer from './customer';
import * as goods from './goods';
import * as wallet from './wallet';

(global as any).API = {
  customer,
  goods,
  wallet,
};
