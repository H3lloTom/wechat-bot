type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class CustomerCreateBody {
    /** 是否是被推广 */
    invited: boolean;

    /** 分享人微信id，wx_开头 */
    inviterId?: string;

    /** 微信用户id，wx_开头 */
    userId: string;
  }

  export class WalletInfoRes {
    /** 余额 */
    balance: number;

    /** 链接 */
    link: string;
  }
}

declare namespace API {
  /**
   *
   */
  export namespace customer {
    /**
     * 添加好友时，在数据库内添加用户
     * /customer/create
     */
    export namespace postCreate {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CustomerCreateBody,
      ): Promise<any>;
    }
  }

  /**
   *
   */
  export namespace goods {
    /**
     * 根据淘口令获取商品返利信息
     * /goods/tkl/transform
     */
    export namespace getTransform {
      export class Params {
        /** 淘口令 */
        tkl: string;
        /** 微信id,wx_开头 */
        userId: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }
  }

  /**
   *
   */
  export namespace wallet {
    /**
     * 获取微信用户钱包地址
     * /wallet/address
     */
    export namespace getAddress {
      export class Params {
        /** 用户id */
        userId: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * 获取微信用户钱包余额
     * /wallet/balance
     */
    export namespace getBalance {
      export class Params {
        /** 用户id */
        userId: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * 提现
     * /wallet/cash
     */
    export namespace postCash {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * 获取微信用户钱包（消息体格式，带有标题、内容、链接地址）
     * /wallet/info
     */
    export namespace getInfo {
      export class Params {
        /** 用户id */
        userId: string;
      }

      export type Response = defs.WalletInfoRes;
      export const init: Response;
      export function request(params: Params): Promise<defs.WalletInfoRes>;
    }

    /**
     * 校验token是否有效
     * /wallet/verify/token
     */
    export namespace getVerifyToken {
      export class Params {
        /** 用户id */
        userId: string;
        /** token */
        token: string;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }
  }
}
