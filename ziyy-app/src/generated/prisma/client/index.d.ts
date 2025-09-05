
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Couple
 * 
 */
export type Couple = $Result.DefaultSelection<Prisma.$CouplePayload>
/**
 * Model MemberArrival
 * 
 */
export type MemberArrival = $Result.DefaultSelection<Prisma.$MemberArrivalPayload>
/**
 * Model Incidentile
 * 
 */
export type Incidentile = $Result.DefaultSelection<Prisma.$IncidentilePayload>
/**
 * Model TxFo
 * 
 */
export type TxFo = $Result.DefaultSelection<Prisma.$TxFoPayload>
/**
 * Model TxCanteen
 * 
 */
export type TxCanteen = $Result.DefaultSelection<Prisma.$TxCanteenPayload>
/**
 * Model TxAccounting
 * 
 */
export type TxAccounting = $Result.DefaultSelection<Prisma.$TxAccountingPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model ActivityMarketing
 * 
 */
export type ActivityMarketing = $Result.DefaultSelection<Prisma.$ActivityMarketingPayload>
/**
 * Model CanteenItem
 * 
 */
export type CanteenItem = $Result.DefaultSelection<Prisma.$CanteenItemPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserActions
 * 
 */
export type UserActions = $Result.DefaultSelection<Prisma.$UserActionsPayload>
/**
 * Model MonthlyReport
 * 
 */
export type MonthlyReport = $Result.DefaultSelection<Prisma.$MonthlyReportPayload>
/**
 * Model SaunaUsage
 * 
 */
export type SaunaUsage = $Result.DefaultSelection<Prisma.$SaunaUsagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentMethod: {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
  DEBIT_BRI: 'DEBIT_BRI',
  QRIS_BRI: 'QRIS_BRI',
  TRANSFER_BRI: 'TRANSFER_BRI',
  DEBIT_MANDIRI: 'DEBIT_MANDIRI',
  QRIS_MANDIRI: 'QRIS_MANDIRI',
  EDC_MANDIRI: 'EDC_MANDIRI',
  TRANSFER_MANDIRI: 'TRANSFER_MANDIRI'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const MembershipType: {
  PERSONAL: 'PERSONAL',
  COUPLE: 'COUPLE',
  MUAY_THAI_MEMBER: 'MUAY_THAI_MEMBER',
  MUAY_THAI_PRIVATE: 'MUAY_THAI_PRIVATE'
};

export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  NEAR_EXPIRY: 'NEAR_EXPIRY',
  EXPIRED: 'EXPIRED'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


export const ArrivalType: {
  GYM: 'GYM',
  GYM_PT: 'GYM_PT'
};

export type ArrivalType = (typeof ArrivalType)[keyof typeof ArrivalType]


export const IncidentileType: {
  GYM: 'GYM',
  KELAS: 'KELAS',
  SAUNA: 'SAUNA',
  PT: 'PT'
};

export type IncidentileType = (typeof IncidentileType)[keyof typeof IncidentileType]


export const IncidentileClass: {
  ZUMBA: 'ZUMBA',
  BODY_FAT: 'BODY_FAT',
  AEROBIC: 'AEROBIC',
  MUAY_THAI: 'MUAY_THAI',
  POUND_FIT: 'POUND_FIT',
  STRONG_NATION: 'STRONG_NATION',
  YOGA: 'YOGA'
};

export type IncidentileClass = (typeof IncidentileClass)[keyof typeof IncidentileClass]


export const TransactionType: {
  PEMASUKAN: 'PEMASUKAN',
  PENGELUARAN: 'PENGELUARAN'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const UserRole: {
  ADMIN: 'ADMIN',
  SUPERVISOR: 'SUPERVISOR',
  FRONT_OFFICE: 'FRONT_OFFICE',
  CANTEEN: 'CANTEEN',
  ACCOUNTING: 'ACCOUNTING',
  MARKETING: 'MARKETING'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ReportStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type MembershipType = $Enums.MembershipType

export const MembershipType: typeof $Enums.MembershipType

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

export type ArrivalType = $Enums.ArrivalType

export const ArrivalType: typeof $Enums.ArrivalType

export type IncidentileType = $Enums.IncidentileType

export const IncidentileType: typeof $Enums.IncidentileType

export type IncidentileClass = $Enums.IncidentileClass

export const IncidentileClass: typeof $Enums.IncidentileClass

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couple`: Exposes CRUD operations for the **Couple** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couples
    * const couples = await prisma.couple.findMany()
    * ```
    */
  get couple(): Prisma.CoupleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberArrival`: Exposes CRUD operations for the **MemberArrival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberArrivals
    * const memberArrivals = await prisma.memberArrival.findMany()
    * ```
    */
  get memberArrival(): Prisma.MemberArrivalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentile`: Exposes CRUD operations for the **Incidentile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidentiles
    * const incidentiles = await prisma.incidentile.findMany()
    * ```
    */
  get incidentile(): Prisma.IncidentileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.txFo`: Exposes CRUD operations for the **TxFo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TxFos
    * const txFos = await prisma.txFo.findMany()
    * ```
    */
  get txFo(): Prisma.TxFoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.txCanteen`: Exposes CRUD operations for the **TxCanteen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TxCanteens
    * const txCanteens = await prisma.txCanteen.findMany()
    * ```
    */
  get txCanteen(): Prisma.TxCanteenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.txAccounting`: Exposes CRUD operations for the **TxAccounting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TxAccountings
    * const txAccountings = await prisma.txAccounting.findMany()
    * ```
    */
  get txAccounting(): Prisma.TxAccountingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityMarketing`: Exposes CRUD operations for the **ActivityMarketing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityMarketings
    * const activityMarketings = await prisma.activityMarketing.findMany()
    * ```
    */
  get activityMarketing(): Prisma.ActivityMarketingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canteenItem`: Exposes CRUD operations for the **CanteenItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CanteenItems
    * const canteenItems = await prisma.canteenItem.findMany()
    * ```
    */
  get canteenItem(): Prisma.CanteenItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userActions`: Exposes CRUD operations for the **UserActions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActions
    * const userActions = await prisma.userActions.findMany()
    * ```
    */
  get userActions(): Prisma.UserActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyReport`: Exposes CRUD operations for the **MonthlyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyReports
    * const monthlyReports = await prisma.monthlyReport.findMany()
    * ```
    */
  get monthlyReport(): Prisma.MonthlyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saunaUsage`: Exposes CRUD operations for the **SaunaUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaunaUsages
    * const saunaUsages = await prisma.saunaUsage.findMany()
    * ```
    */
  get saunaUsage(): Prisma.SaunaUsageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Member: 'Member',
    Couple: 'Couple',
    MemberArrival: 'MemberArrival',
    Incidentile: 'Incidentile',
    TxFo: 'TxFo',
    TxCanteen: 'TxCanteen',
    TxAccounting: 'TxAccounting',
    Campaign: 'Campaign',
    ActivityMarketing: 'ActivityMarketing',
    CanteenItem: 'CanteenItem',
    User: 'User',
    UserActions: 'UserActions',
    MonthlyReport: 'MonthlyReport',
    SaunaUsage: 'SaunaUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "member" | "couple" | "memberArrival" | "incidentile" | "txFo" | "txCanteen" | "txAccounting" | "campaign" | "activityMarketing" | "canteenItem" | "user" | "userActions" | "monthlyReport" | "saunaUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Couple: {
        payload: Prisma.$CouplePayload<ExtArgs>
        fields: Prisma.CoupleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoupleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoupleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findFirst: {
            args: Prisma.CoupleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoupleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findMany: {
            args: Prisma.CoupleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          create: {
            args: Prisma.CoupleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          createMany: {
            args: Prisma.CoupleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoupleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          delete: {
            args: Prisma.CoupleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          update: {
            args: Prisma.CoupleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          deleteMany: {
            args: Prisma.CoupleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoupleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoupleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          upsert: {
            args: Prisma.CoupleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          aggregate: {
            args: Prisma.CoupleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouple>
          }
          groupBy: {
            args: Prisma.CoupleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoupleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoupleCountArgs<ExtArgs>
            result: $Utils.Optional<CoupleCountAggregateOutputType> | number
          }
        }
      }
      MemberArrival: {
        payload: Prisma.$MemberArrivalPayload<ExtArgs>
        fields: Prisma.MemberArrivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberArrivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberArrivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          findFirst: {
            args: Prisma.MemberArrivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberArrivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          findMany: {
            args: Prisma.MemberArrivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>[]
          }
          create: {
            args: Prisma.MemberArrivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          createMany: {
            args: Prisma.MemberArrivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberArrivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>[]
          }
          delete: {
            args: Prisma.MemberArrivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          update: {
            args: Prisma.MemberArrivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          deleteMany: {
            args: Prisma.MemberArrivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberArrivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberArrivalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>[]
          }
          upsert: {
            args: Prisma.MemberArrivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberArrivalPayload>
          }
          aggregate: {
            args: Prisma.MemberArrivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberArrival>
          }
          groupBy: {
            args: Prisma.MemberArrivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberArrivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberArrivalCountArgs<ExtArgs>
            result: $Utils.Optional<MemberArrivalCountAggregateOutputType> | number
          }
        }
      }
      Incidentile: {
        payload: Prisma.$IncidentilePayload<ExtArgs>
        fields: Prisma.IncidentileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          findFirst: {
            args: Prisma.IncidentileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          findMany: {
            args: Prisma.IncidentileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>[]
          }
          create: {
            args: Prisma.IncidentileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          createMany: {
            args: Prisma.IncidentileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>[]
          }
          delete: {
            args: Prisma.IncidentileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          update: {
            args: Prisma.IncidentileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          deleteMany: {
            args: Prisma.IncidentileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>[]
          }
          upsert: {
            args: Prisma.IncidentileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentilePayload>
          }
          aggregate: {
            args: Prisma.IncidentileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentile>
          }
          groupBy: {
            args: Prisma.IncidentileGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentileGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentileCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentileCountAggregateOutputType> | number
          }
        }
      }
      TxFo: {
        payload: Prisma.$TxFoPayload<ExtArgs>
        fields: Prisma.TxFoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TxFoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TxFoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          findFirst: {
            args: Prisma.TxFoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TxFoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          findMany: {
            args: Prisma.TxFoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>[]
          }
          create: {
            args: Prisma.TxFoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          createMany: {
            args: Prisma.TxFoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TxFoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>[]
          }
          delete: {
            args: Prisma.TxFoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          update: {
            args: Prisma.TxFoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          deleteMany: {
            args: Prisma.TxFoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TxFoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TxFoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>[]
          }
          upsert: {
            args: Prisma.TxFoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxFoPayload>
          }
          aggregate: {
            args: Prisma.TxFoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTxFo>
          }
          groupBy: {
            args: Prisma.TxFoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TxFoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TxFoCountArgs<ExtArgs>
            result: $Utils.Optional<TxFoCountAggregateOutputType> | number
          }
        }
      }
      TxCanteen: {
        payload: Prisma.$TxCanteenPayload<ExtArgs>
        fields: Prisma.TxCanteenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TxCanteenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TxCanteenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          findFirst: {
            args: Prisma.TxCanteenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TxCanteenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          findMany: {
            args: Prisma.TxCanteenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>[]
          }
          create: {
            args: Prisma.TxCanteenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          createMany: {
            args: Prisma.TxCanteenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TxCanteenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>[]
          }
          delete: {
            args: Prisma.TxCanteenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          update: {
            args: Prisma.TxCanteenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          deleteMany: {
            args: Prisma.TxCanteenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TxCanteenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TxCanteenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>[]
          }
          upsert: {
            args: Prisma.TxCanteenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxCanteenPayload>
          }
          aggregate: {
            args: Prisma.TxCanteenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTxCanteen>
          }
          groupBy: {
            args: Prisma.TxCanteenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TxCanteenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TxCanteenCountArgs<ExtArgs>
            result: $Utils.Optional<TxCanteenCountAggregateOutputType> | number
          }
        }
      }
      TxAccounting: {
        payload: Prisma.$TxAccountingPayload<ExtArgs>
        fields: Prisma.TxAccountingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TxAccountingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TxAccountingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          findFirst: {
            args: Prisma.TxAccountingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TxAccountingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          findMany: {
            args: Prisma.TxAccountingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>[]
          }
          create: {
            args: Prisma.TxAccountingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          createMany: {
            args: Prisma.TxAccountingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TxAccountingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>[]
          }
          delete: {
            args: Prisma.TxAccountingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          update: {
            args: Prisma.TxAccountingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          deleteMany: {
            args: Prisma.TxAccountingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TxAccountingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TxAccountingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>[]
          }
          upsert: {
            args: Prisma.TxAccountingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxAccountingPayload>
          }
          aggregate: {
            args: Prisma.TxAccountingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTxAccounting>
          }
          groupBy: {
            args: Prisma.TxAccountingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TxAccountingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TxAccountingCountArgs<ExtArgs>
            result: $Utils.Optional<TxAccountingCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      ActivityMarketing: {
        payload: Prisma.$ActivityMarketingPayload<ExtArgs>
        fields: Prisma.ActivityMarketingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityMarketingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityMarketingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          findFirst: {
            args: Prisma.ActivityMarketingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityMarketingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          findMany: {
            args: Prisma.ActivityMarketingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>[]
          }
          create: {
            args: Prisma.ActivityMarketingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          createMany: {
            args: Prisma.ActivityMarketingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityMarketingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>[]
          }
          delete: {
            args: Prisma.ActivityMarketingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          update: {
            args: Prisma.ActivityMarketingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          deleteMany: {
            args: Prisma.ActivityMarketingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityMarketingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityMarketingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>[]
          }
          upsert: {
            args: Prisma.ActivityMarketingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMarketingPayload>
          }
          aggregate: {
            args: Prisma.ActivityMarketingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityMarketing>
          }
          groupBy: {
            args: Prisma.ActivityMarketingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityMarketingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityMarketingCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityMarketingCountAggregateOutputType> | number
          }
        }
      }
      CanteenItem: {
        payload: Prisma.$CanteenItemPayload<ExtArgs>
        fields: Prisma.CanteenItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanteenItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanteenItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          findFirst: {
            args: Prisma.CanteenItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanteenItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          findMany: {
            args: Prisma.CanteenItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>[]
          }
          create: {
            args: Prisma.CanteenItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          createMany: {
            args: Prisma.CanteenItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanteenItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>[]
          }
          delete: {
            args: Prisma.CanteenItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          update: {
            args: Prisma.CanteenItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          deleteMany: {
            args: Prisma.CanteenItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanteenItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanteenItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>[]
          }
          upsert: {
            args: Prisma.CanteenItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanteenItemPayload>
          }
          aggregate: {
            args: Prisma.CanteenItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanteenItem>
          }
          groupBy: {
            args: Prisma.CanteenItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanteenItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanteenItemCountArgs<ExtArgs>
            result: $Utils.Optional<CanteenItemCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserActions: {
        payload: Prisma.$UserActionsPayload<ExtArgs>
        fields: Prisma.UserActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          findFirst: {
            args: Prisma.UserActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          findMany: {
            args: Prisma.UserActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>[]
          }
          create: {
            args: Prisma.UserActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          createMany: {
            args: Prisma.UserActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>[]
          }
          delete: {
            args: Prisma.UserActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          update: {
            args: Prisma.UserActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          deleteMany: {
            args: Prisma.UserActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserActionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>[]
          }
          upsert: {
            args: Prisma.UserActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionsPayload>
          }
          aggregate: {
            args: Prisma.UserActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActions>
          }
          groupBy: {
            args: Prisma.UserActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActionsCountArgs<ExtArgs>
            result: $Utils.Optional<UserActionsCountAggregateOutputType> | number
          }
        }
      }
      MonthlyReport: {
        payload: Prisma.$MonthlyReportPayload<ExtArgs>
        fields: Prisma.MonthlyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findFirst: {
            args: Prisma.MonthlyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findMany: {
            args: Prisma.MonthlyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          create: {
            args: Prisma.MonthlyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          createMany: {
            args: Prisma.MonthlyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          delete: {
            args: Prisma.MonthlyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          update: {
            args: Prisma.MonthlyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          aggregate: {
            args: Prisma.MonthlyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyReport>
          }
          groupBy: {
            args: Prisma.MonthlyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportCountAggregateOutputType> | number
          }
        }
      }
      SaunaUsage: {
        payload: Prisma.$SaunaUsagePayload<ExtArgs>
        fields: Prisma.SaunaUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaunaUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaunaUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          findFirst: {
            args: Prisma.SaunaUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaunaUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          findMany: {
            args: Prisma.SaunaUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>[]
          }
          create: {
            args: Prisma.SaunaUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          createMany: {
            args: Prisma.SaunaUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaunaUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>[]
          }
          delete: {
            args: Prisma.SaunaUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          update: {
            args: Prisma.SaunaUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          deleteMany: {
            args: Prisma.SaunaUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaunaUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaunaUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>[]
          }
          upsert: {
            args: Prisma.SaunaUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaunaUsagePayload>
          }
          aggregate: {
            args: Prisma.SaunaUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaunaUsage>
          }
          groupBy: {
            args: Prisma.SaunaUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaunaUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaunaUsageCountArgs<ExtArgs>
            result: $Utils.Optional<SaunaUsageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    member?: MemberOmit
    couple?: CoupleOmit
    memberArrival?: MemberArrivalOmit
    incidentile?: IncidentileOmit
    txFo?: TxFoOmit
    txCanteen?: TxCanteenOmit
    txAccounting?: TxAccountingOmit
    campaign?: CampaignOmit
    activityMarketing?: ActivityMarketingOmit
    canteenItem?: CanteenItemOmit
    user?: UserOmit
    userActions?: UserActionsOmit
    monthlyReport?: MonthlyReportOmit
    saunaUsage?: SaunaUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    couples1: number
    couples2: number
    arrivals: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couples1?: boolean | MemberCountOutputTypeCountCouples1Args
    couples2?: boolean | MemberCountOutputTypeCountCouples2Args
    arrivals?: boolean | MemberCountOutputTypeCountArrivalsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCouples1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountCouples2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountArrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberArrivalWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    activities: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | CampaignCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityMarketingWhereInput
  }


  /**
   * Count Type CanteenItemCountOutputType
   */

  export type CanteenItemCountOutputType = {
    txCanteens: number
  }

  export type CanteenItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    txCanteens?: boolean | CanteenItemCountOutputTypeCountTxCanteensArgs
  }

  // Custom InputTypes
  /**
   * CanteenItemCountOutputType without action
   */
  export type CanteenItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItemCountOutputType
     */
    select?: CanteenItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanteenItemCountOutputType without action
   */
  export type CanteenItemCountOutputTypeCountTxCanteensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxCanteenWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    actions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | UserCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    ptAmount: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    ptAmount: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    nik: string | null
    phone: string | null
    membership: $Enums.MembershipType | null
    ptAmount: number | null
    joinDate: Date | null
    expiryDate: Date | null
    status: $Enums.MemberStatus | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nik: string | null
    phone: string | null
    membership: $Enums.MembershipType | null
    ptAmount: number | null
    joinDate: Date | null
    expiryDate: Date | null
    status: $Enums.MemberStatus | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    nik: number
    phone: number
    membership: number
    ptAmount: number
    joinDate: number
    expiryDate: number
    status: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    ptAmount?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    ptAmount?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    nik?: true
    phone?: true
    membership?: true
    ptAmount?: true
    joinDate?: true
    expiryDate?: true
    status?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    nik?: true
    phone?: true
    membership?: true
    ptAmount?: true
    joinDate?: true
    expiryDate?: true
    status?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    nik?: true
    phone?: true
    membership?: true
    ptAmount?: true
    joinDate?: true
    expiryDate?: true
    status?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount: number | null
    joinDate: Date
    expiryDate: Date
    status: $Enums.MemberStatus
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nik?: boolean
    phone?: boolean
    membership?: boolean
    ptAmount?: boolean
    joinDate?: boolean
    expiryDate?: boolean
    status?: boolean
    couples1?: boolean | Member$couples1Args<ExtArgs>
    couples2?: boolean | Member$couples2Args<ExtArgs>
    arrivals?: boolean | Member$arrivalsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nik?: boolean
    phone?: boolean
    membership?: boolean
    ptAmount?: boolean
    joinDate?: boolean
    expiryDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nik?: boolean
    phone?: boolean
    membership?: boolean
    ptAmount?: boolean
    joinDate?: boolean
    expiryDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    nik?: boolean
    phone?: boolean
    membership?: boolean
    ptAmount?: boolean
    joinDate?: boolean
    expiryDate?: boolean
    status?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nik" | "phone" | "membership" | "ptAmount" | "joinDate" | "expiryDate" | "status", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couples1?: boolean | Member$couples1Args<ExtArgs>
    couples2?: boolean | Member$couples2Args<ExtArgs>
    arrivals?: boolean | Member$arrivalsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      couples1: Prisma.$CouplePayload<ExtArgs>[]
      couples2: Prisma.$CouplePayload<ExtArgs>[]
      arrivals: Prisma.$MemberArrivalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nik: string
      phone: string
      membership: $Enums.MembershipType
      ptAmount: number | null
      joinDate: Date
      expiryDate: Date
      status: $Enums.MemberStatus
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couples1<T extends Member$couples1Args<ExtArgs> = {}>(args?: Subset<T, Member$couples1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    couples2<T extends Member$couples2Args<ExtArgs> = {}>(args?: Subset<T, Member$couples2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arrivals<T extends Member$arrivalsArgs<ExtArgs> = {}>(args?: Subset<T, Member$arrivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly name: FieldRef<"Member", 'String'>
    readonly nik: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly membership: FieldRef<"Member", 'MembershipType'>
    readonly ptAmount: FieldRef<"Member", 'Int'>
    readonly joinDate: FieldRef<"Member", 'DateTime'>
    readonly expiryDate: FieldRef<"Member", 'DateTime'>
    readonly status: FieldRef<"Member", 'MemberStatus'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.couples1
   */
  export type Member$couples1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Member.couples2
   */
  export type Member$couples2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Member.arrivals
   */
  export type Member$arrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    where?: MemberArrivalWhereInput
    orderBy?: MemberArrivalOrderByWithRelationInput | MemberArrivalOrderByWithRelationInput[]
    cursor?: MemberArrivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberArrivalScalarFieldEnum | MemberArrivalScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Couple
   */

  export type AggregateCouple = {
    _count: CoupleCountAggregateOutputType | null
    _avg: CoupleAvgAggregateOutputType | null
    _sum: CoupleSumAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  export type CoupleAvgAggregateOutputType = {
    id: number | null
    member1Id: number | null
    member2Id: number | null
  }

  export type CoupleSumAggregateOutputType = {
    id: number | null
    member1Id: number | null
    member2Id: number | null
  }

  export type CoupleMinAggregateOutputType = {
    id: number | null
    member1Id: number | null
    member2Id: number | null
  }

  export type CoupleMaxAggregateOutputType = {
    id: number | null
    member1Id: number | null
    member2Id: number | null
  }

  export type CoupleCountAggregateOutputType = {
    id: number
    member1Id: number
    member2Id: number
    _all: number
  }


  export type CoupleAvgAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
  }

  export type CoupleSumAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
  }

  export type CoupleMinAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
  }

  export type CoupleMaxAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
  }

  export type CoupleCountAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
    _all?: true
  }

  export type CoupleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couple to aggregate.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couples
    **/
    _count?: true | CoupleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoupleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoupleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoupleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoupleMaxAggregateInputType
  }

  export type GetCoupleAggregateType<T extends CoupleAggregateArgs> = {
        [P in keyof T & keyof AggregateCouple]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouple[P]>
      : GetScalarType<T[P], AggregateCouple[P]>
  }




  export type CoupleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithAggregationInput | CoupleOrderByWithAggregationInput[]
    by: CoupleScalarFieldEnum[] | CoupleScalarFieldEnum
    having?: CoupleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoupleCountAggregateInputType | true
    _avg?: CoupleAvgAggregateInputType
    _sum?: CoupleSumAggregateInputType
    _min?: CoupleMinAggregateInputType
    _max?: CoupleMaxAggregateInputType
  }

  export type CoupleGroupByOutputType = {
    id: number
    member1Id: number
    member2Id: number
    _count: CoupleCountAggregateOutputType | null
    _avg: CoupleAvgAggregateOutputType | null
    _sum: CoupleSumAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  type GetCoupleGroupByPayload<T extends CoupleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoupleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoupleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoupleGroupByOutputType[P]>
            : GetScalarType<T[P], CoupleGroupByOutputType[P]>
        }
      >
    >


  export type CoupleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couple"]>

  export type CoupleSelectScalar = {
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
  }

  export type CoupleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member1Id" | "member2Id", ExtArgs["result"]["couple"]>
  export type CoupleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type CoupleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type CoupleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member1?: boolean | MemberDefaultArgs<ExtArgs>
    member2?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $CouplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Couple"
    objects: {
      member1: Prisma.$MemberPayload<ExtArgs>
      member2: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member1Id: number
      member2Id: number
    }, ExtArgs["result"]["couple"]>
    composites: {}
  }

  type CoupleGetPayload<S extends boolean | null | undefined | CoupleDefaultArgs> = $Result.GetResult<Prisma.$CouplePayload, S>

  type CoupleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoupleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoupleCountAggregateInputType | true
    }

  export interface CoupleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Couple'], meta: { name: 'Couple' } }
    /**
     * Find zero or one Couple that matches the filter.
     * @param {CoupleFindUniqueArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoupleFindUniqueArgs>(args: SelectSubset<T, CoupleFindUniqueArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Couple that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoupleFindUniqueOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoupleFindUniqueOrThrowArgs>(args: SelectSubset<T, CoupleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoupleFindFirstArgs>(args?: SelectSubset<T, CoupleFindFirstArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoupleFindFirstOrThrowArgs>(args?: SelectSubset<T, CoupleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couples
     * const couples = await prisma.couple.findMany()
     * 
     * // Get first 10 Couples
     * const couples = await prisma.couple.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coupleWithIdOnly = await prisma.couple.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoupleFindManyArgs>(args?: SelectSubset<T, CoupleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Couple.
     * @param {CoupleCreateArgs} args - Arguments to create a Couple.
     * @example
     * // Create one Couple
     * const Couple = await prisma.couple.create({
     *   data: {
     *     // ... data to create a Couple
     *   }
     * })
     * 
     */
    create<T extends CoupleCreateArgs>(args: SelectSubset<T, CoupleCreateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Couples.
     * @param {CoupleCreateManyArgs} args - Arguments to create many Couples.
     * @example
     * // Create many Couples
     * const couple = await prisma.couple.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoupleCreateManyArgs>(args?: SelectSubset<T, CoupleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Couples and returns the data saved in the database.
     * @param {CoupleCreateManyAndReturnArgs} args - Arguments to create many Couples.
     * @example
     * // Create many Couples
     * const couple = await prisma.couple.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Couples and only return the `id`
     * const coupleWithIdOnly = await prisma.couple.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoupleCreateManyAndReturnArgs>(args?: SelectSubset<T, CoupleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Couple.
     * @param {CoupleDeleteArgs} args - Arguments to delete one Couple.
     * @example
     * // Delete one Couple
     * const Couple = await prisma.couple.delete({
     *   where: {
     *     // ... filter to delete one Couple
     *   }
     * })
     * 
     */
    delete<T extends CoupleDeleteArgs>(args: SelectSubset<T, CoupleDeleteArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Couple.
     * @param {CoupleUpdateArgs} args - Arguments to update one Couple.
     * @example
     * // Update one Couple
     * const couple = await prisma.couple.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoupleUpdateArgs>(args: SelectSubset<T, CoupleUpdateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Couples.
     * @param {CoupleDeleteManyArgs} args - Arguments to filter Couples to delete.
     * @example
     * // Delete a few Couples
     * const { count } = await prisma.couple.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoupleDeleteManyArgs>(args?: SelectSubset<T, CoupleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couples
     * const couple = await prisma.couple.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoupleUpdateManyArgs>(args: SelectSubset<T, CoupleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couples and returns the data updated in the database.
     * @param {CoupleUpdateManyAndReturnArgs} args - Arguments to update many Couples.
     * @example
     * // Update many Couples
     * const couple = await prisma.couple.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Couples and only return the `id`
     * const coupleWithIdOnly = await prisma.couple.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoupleUpdateManyAndReturnArgs>(args: SelectSubset<T, CoupleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Couple.
     * @param {CoupleUpsertArgs} args - Arguments to update or create a Couple.
     * @example
     * // Update or create a Couple
     * const couple = await prisma.couple.upsert({
     *   create: {
     *     // ... data to create a Couple
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Couple we want to update
     *   }
     * })
     */
    upsert<T extends CoupleUpsertArgs>(args: SelectSubset<T, CoupleUpsertArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleCountArgs} args - Arguments to filter Couples to count.
     * @example
     * // Count the number of Couples
     * const count = await prisma.couple.count({
     *   where: {
     *     // ... the filter for the Couples we want to count
     *   }
     * })
    **/
    count<T extends CoupleCountArgs>(
      args?: Subset<T, CoupleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoupleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoupleAggregateArgs>(args: Subset<T, CoupleAggregateArgs>): Prisma.PrismaPromise<GetCoupleAggregateType<T>>

    /**
     * Group by Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoupleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoupleGroupByArgs['orderBy'] }
        : { orderBy?: CoupleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoupleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Couple model
   */
  readonly fields: CoupleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Couple.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoupleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member1<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member2<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Couple model
   */
  interface CoupleFieldRefs {
    readonly id: FieldRef<"Couple", 'Int'>
    readonly member1Id: FieldRef<"Couple", 'Int'>
    readonly member2Id: FieldRef<"Couple", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Couple findUnique
   */
  export type CoupleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findUniqueOrThrow
   */
  export type CoupleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findFirst
   */
  export type CoupleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findFirstOrThrow
   */
  export type CoupleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findMany
   */
  export type CoupleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couples to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple create
   */
  export type CoupleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to create a Couple.
     */
    data: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
  }

  /**
   * Couple createMany
   */
  export type CoupleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couples.
     */
    data: CoupleCreateManyInput | CoupleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Couple createManyAndReturn
   */
  export type CoupleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * The data used to create many Couples.
     */
    data: CoupleCreateManyInput | CoupleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Couple update
   */
  export type CoupleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to update a Couple.
     */
    data: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
    /**
     * Choose, which Couple to update.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple updateMany
   */
  export type CoupleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couples.
     */
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyInput>
    /**
     * Filter which Couples to update
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to update.
     */
    limit?: number
  }

  /**
   * Couple updateManyAndReturn
   */
  export type CoupleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * The data used to update Couples.
     */
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyInput>
    /**
     * Filter which Couples to update
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Couple upsert
   */
  export type CoupleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The filter to search for the Couple to update in case it exists.
     */
    where: CoupleWhereUniqueInput
    /**
     * In case the Couple found by the `where` argument doesn't exist, create a new Couple with this data.
     */
    create: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
    /**
     * In case the Couple was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
  }

  /**
   * Couple delete
   */
  export type CoupleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter which Couple to delete.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple deleteMany
   */
  export type CoupleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couples to delete
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to delete.
     */
    limit?: number
  }

  /**
   * Couple without action
   */
  export type CoupleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
  }


  /**
   * Model MemberArrival
   */

  export type AggregateMemberArrival = {
    _count: MemberArrivalCountAggregateOutputType | null
    _avg: MemberArrivalAvgAggregateOutputType | null
    _sum: MemberArrivalSumAggregateOutputType | null
    _min: MemberArrivalMinAggregateOutputType | null
    _max: MemberArrivalMaxAggregateOutputType | null
  }

  export type MemberArrivalAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type MemberArrivalSumAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type MemberArrivalMinAggregateOutputType = {
    id: number | null
    memberId: number | null
    arrivalDate: Date | null
    arrivalType: $Enums.ArrivalType | null
    namaPt: string | null
  }

  export type MemberArrivalMaxAggregateOutputType = {
    id: number | null
    memberId: number | null
    arrivalDate: Date | null
    arrivalType: $Enums.ArrivalType | null
    namaPt: string | null
  }

  export type MemberArrivalCountAggregateOutputType = {
    id: number
    memberId: number
    arrivalDate: number
    arrivalType: number
    namaPt: number
    _all: number
  }


  export type MemberArrivalAvgAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type MemberArrivalSumAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type MemberArrivalMinAggregateInputType = {
    id?: true
    memberId?: true
    arrivalDate?: true
    arrivalType?: true
    namaPt?: true
  }

  export type MemberArrivalMaxAggregateInputType = {
    id?: true
    memberId?: true
    arrivalDate?: true
    arrivalType?: true
    namaPt?: true
  }

  export type MemberArrivalCountAggregateInputType = {
    id?: true
    memberId?: true
    arrivalDate?: true
    arrivalType?: true
    namaPt?: true
    _all?: true
  }

  export type MemberArrivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberArrival to aggregate.
     */
    where?: MemberArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberArrivals to fetch.
     */
    orderBy?: MemberArrivalOrderByWithRelationInput | MemberArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberArrivals
    **/
    _count?: true | MemberArrivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberArrivalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberArrivalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberArrivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberArrivalMaxAggregateInputType
  }

  export type GetMemberArrivalAggregateType<T extends MemberArrivalAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberArrival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberArrival[P]>
      : GetScalarType<T[P], AggregateMemberArrival[P]>
  }




  export type MemberArrivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberArrivalWhereInput
    orderBy?: MemberArrivalOrderByWithAggregationInput | MemberArrivalOrderByWithAggregationInput[]
    by: MemberArrivalScalarFieldEnum[] | MemberArrivalScalarFieldEnum
    having?: MemberArrivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberArrivalCountAggregateInputType | true
    _avg?: MemberArrivalAvgAggregateInputType
    _sum?: MemberArrivalSumAggregateInputType
    _min?: MemberArrivalMinAggregateInputType
    _max?: MemberArrivalMaxAggregateInputType
  }

  export type MemberArrivalGroupByOutputType = {
    id: number
    memberId: number
    arrivalDate: Date
    arrivalType: $Enums.ArrivalType
    namaPt: string | null
    _count: MemberArrivalCountAggregateOutputType | null
    _avg: MemberArrivalAvgAggregateOutputType | null
    _sum: MemberArrivalSumAggregateOutputType | null
    _min: MemberArrivalMinAggregateOutputType | null
    _max: MemberArrivalMaxAggregateOutputType | null
  }

  type GetMemberArrivalGroupByPayload<T extends MemberArrivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberArrivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberArrivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberArrivalGroupByOutputType[P]>
            : GetScalarType<T[P], MemberArrivalGroupByOutputType[P]>
        }
      >
    >


  export type MemberArrivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    arrivalDate?: boolean
    arrivalType?: boolean
    namaPt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberArrival"]>

  export type MemberArrivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    arrivalDate?: boolean
    arrivalType?: boolean
    namaPt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberArrival"]>

  export type MemberArrivalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    arrivalDate?: boolean
    arrivalType?: boolean
    namaPt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberArrival"]>

  export type MemberArrivalSelectScalar = {
    id?: boolean
    memberId?: boolean
    arrivalDate?: boolean
    arrivalType?: boolean
    namaPt?: boolean
  }

  export type MemberArrivalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "arrivalDate" | "arrivalType" | "namaPt", ExtArgs["result"]["memberArrival"]>
  export type MemberArrivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberArrivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type MemberArrivalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MemberArrivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberArrival"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memberId: number
      arrivalDate: Date
      arrivalType: $Enums.ArrivalType
      namaPt: string | null
    }, ExtArgs["result"]["memberArrival"]>
    composites: {}
  }

  type MemberArrivalGetPayload<S extends boolean | null | undefined | MemberArrivalDefaultArgs> = $Result.GetResult<Prisma.$MemberArrivalPayload, S>

  type MemberArrivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberArrivalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberArrivalCountAggregateInputType | true
    }

  export interface MemberArrivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberArrival'], meta: { name: 'MemberArrival' } }
    /**
     * Find zero or one MemberArrival that matches the filter.
     * @param {MemberArrivalFindUniqueArgs} args - Arguments to find a MemberArrival
     * @example
     * // Get one MemberArrival
     * const memberArrival = await prisma.memberArrival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberArrivalFindUniqueArgs>(args: SelectSubset<T, MemberArrivalFindUniqueArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberArrival that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberArrivalFindUniqueOrThrowArgs} args - Arguments to find a MemberArrival
     * @example
     * // Get one MemberArrival
     * const memberArrival = await prisma.memberArrival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberArrivalFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberArrivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberArrival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalFindFirstArgs} args - Arguments to find a MemberArrival
     * @example
     * // Get one MemberArrival
     * const memberArrival = await prisma.memberArrival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberArrivalFindFirstArgs>(args?: SelectSubset<T, MemberArrivalFindFirstArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberArrival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalFindFirstOrThrowArgs} args - Arguments to find a MemberArrival
     * @example
     * // Get one MemberArrival
     * const memberArrival = await prisma.memberArrival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberArrivalFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberArrivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberArrivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberArrivals
     * const memberArrivals = await prisma.memberArrival.findMany()
     * 
     * // Get first 10 MemberArrivals
     * const memberArrivals = await prisma.memberArrival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberArrivalWithIdOnly = await prisma.memberArrival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberArrivalFindManyArgs>(args?: SelectSubset<T, MemberArrivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberArrival.
     * @param {MemberArrivalCreateArgs} args - Arguments to create a MemberArrival.
     * @example
     * // Create one MemberArrival
     * const MemberArrival = await prisma.memberArrival.create({
     *   data: {
     *     // ... data to create a MemberArrival
     *   }
     * })
     * 
     */
    create<T extends MemberArrivalCreateArgs>(args: SelectSubset<T, MemberArrivalCreateArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberArrivals.
     * @param {MemberArrivalCreateManyArgs} args - Arguments to create many MemberArrivals.
     * @example
     * // Create many MemberArrivals
     * const memberArrival = await prisma.memberArrival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberArrivalCreateManyArgs>(args?: SelectSubset<T, MemberArrivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberArrivals and returns the data saved in the database.
     * @param {MemberArrivalCreateManyAndReturnArgs} args - Arguments to create many MemberArrivals.
     * @example
     * // Create many MemberArrivals
     * const memberArrival = await prisma.memberArrival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberArrivals and only return the `id`
     * const memberArrivalWithIdOnly = await prisma.memberArrival.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberArrivalCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberArrivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberArrival.
     * @param {MemberArrivalDeleteArgs} args - Arguments to delete one MemberArrival.
     * @example
     * // Delete one MemberArrival
     * const MemberArrival = await prisma.memberArrival.delete({
     *   where: {
     *     // ... filter to delete one MemberArrival
     *   }
     * })
     * 
     */
    delete<T extends MemberArrivalDeleteArgs>(args: SelectSubset<T, MemberArrivalDeleteArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberArrival.
     * @param {MemberArrivalUpdateArgs} args - Arguments to update one MemberArrival.
     * @example
     * // Update one MemberArrival
     * const memberArrival = await prisma.memberArrival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberArrivalUpdateArgs>(args: SelectSubset<T, MemberArrivalUpdateArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberArrivals.
     * @param {MemberArrivalDeleteManyArgs} args - Arguments to filter MemberArrivals to delete.
     * @example
     * // Delete a few MemberArrivals
     * const { count } = await prisma.memberArrival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberArrivalDeleteManyArgs>(args?: SelectSubset<T, MemberArrivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberArrivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberArrivals
     * const memberArrival = await prisma.memberArrival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberArrivalUpdateManyArgs>(args: SelectSubset<T, MemberArrivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberArrivals and returns the data updated in the database.
     * @param {MemberArrivalUpdateManyAndReturnArgs} args - Arguments to update many MemberArrivals.
     * @example
     * // Update many MemberArrivals
     * const memberArrival = await prisma.memberArrival.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberArrivals and only return the `id`
     * const memberArrivalWithIdOnly = await prisma.memberArrival.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberArrivalUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberArrivalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberArrival.
     * @param {MemberArrivalUpsertArgs} args - Arguments to update or create a MemberArrival.
     * @example
     * // Update or create a MemberArrival
     * const memberArrival = await prisma.memberArrival.upsert({
     *   create: {
     *     // ... data to create a MemberArrival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberArrival we want to update
     *   }
     * })
     */
    upsert<T extends MemberArrivalUpsertArgs>(args: SelectSubset<T, MemberArrivalUpsertArgs<ExtArgs>>): Prisma__MemberArrivalClient<$Result.GetResult<Prisma.$MemberArrivalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberArrivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalCountArgs} args - Arguments to filter MemberArrivals to count.
     * @example
     * // Count the number of MemberArrivals
     * const count = await prisma.memberArrival.count({
     *   where: {
     *     // ... the filter for the MemberArrivals we want to count
     *   }
     * })
    **/
    count<T extends MemberArrivalCountArgs>(
      args?: Subset<T, MemberArrivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberArrivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberArrival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberArrivalAggregateArgs>(args: Subset<T, MemberArrivalAggregateArgs>): Prisma.PrismaPromise<GetMemberArrivalAggregateType<T>>

    /**
     * Group by MemberArrival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberArrivalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberArrivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberArrivalGroupByArgs['orderBy'] }
        : { orderBy?: MemberArrivalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberArrivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberArrivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberArrival model
   */
  readonly fields: MemberArrivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberArrival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberArrivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberArrival model
   */
  interface MemberArrivalFieldRefs {
    readonly id: FieldRef<"MemberArrival", 'Int'>
    readonly memberId: FieldRef<"MemberArrival", 'Int'>
    readonly arrivalDate: FieldRef<"MemberArrival", 'DateTime'>
    readonly arrivalType: FieldRef<"MemberArrival", 'ArrivalType'>
    readonly namaPt: FieldRef<"MemberArrival", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberArrival findUnique
   */
  export type MemberArrivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter, which MemberArrival to fetch.
     */
    where: MemberArrivalWhereUniqueInput
  }

  /**
   * MemberArrival findUniqueOrThrow
   */
  export type MemberArrivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter, which MemberArrival to fetch.
     */
    where: MemberArrivalWhereUniqueInput
  }

  /**
   * MemberArrival findFirst
   */
  export type MemberArrivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter, which MemberArrival to fetch.
     */
    where?: MemberArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberArrivals to fetch.
     */
    orderBy?: MemberArrivalOrderByWithRelationInput | MemberArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberArrivals.
     */
    cursor?: MemberArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberArrivals.
     */
    distinct?: MemberArrivalScalarFieldEnum | MemberArrivalScalarFieldEnum[]
  }

  /**
   * MemberArrival findFirstOrThrow
   */
  export type MemberArrivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter, which MemberArrival to fetch.
     */
    where?: MemberArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberArrivals to fetch.
     */
    orderBy?: MemberArrivalOrderByWithRelationInput | MemberArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberArrivals.
     */
    cursor?: MemberArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberArrivals.
     */
    distinct?: MemberArrivalScalarFieldEnum | MemberArrivalScalarFieldEnum[]
  }

  /**
   * MemberArrival findMany
   */
  export type MemberArrivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter, which MemberArrivals to fetch.
     */
    where?: MemberArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberArrivals to fetch.
     */
    orderBy?: MemberArrivalOrderByWithRelationInput | MemberArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberArrivals.
     */
    cursor?: MemberArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberArrivals.
     */
    skip?: number
    distinct?: MemberArrivalScalarFieldEnum | MemberArrivalScalarFieldEnum[]
  }

  /**
   * MemberArrival create
   */
  export type MemberArrivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberArrival.
     */
    data: XOR<MemberArrivalCreateInput, MemberArrivalUncheckedCreateInput>
  }

  /**
   * MemberArrival createMany
   */
  export type MemberArrivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberArrivals.
     */
    data: MemberArrivalCreateManyInput | MemberArrivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberArrival createManyAndReturn
   */
  export type MemberArrivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * The data used to create many MemberArrivals.
     */
    data: MemberArrivalCreateManyInput | MemberArrivalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberArrival update
   */
  export type MemberArrivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberArrival.
     */
    data: XOR<MemberArrivalUpdateInput, MemberArrivalUncheckedUpdateInput>
    /**
     * Choose, which MemberArrival to update.
     */
    where: MemberArrivalWhereUniqueInput
  }

  /**
   * MemberArrival updateMany
   */
  export type MemberArrivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberArrivals.
     */
    data: XOR<MemberArrivalUpdateManyMutationInput, MemberArrivalUncheckedUpdateManyInput>
    /**
     * Filter which MemberArrivals to update
     */
    where?: MemberArrivalWhereInput
    /**
     * Limit how many MemberArrivals to update.
     */
    limit?: number
  }

  /**
   * MemberArrival updateManyAndReturn
   */
  export type MemberArrivalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * The data used to update MemberArrivals.
     */
    data: XOR<MemberArrivalUpdateManyMutationInput, MemberArrivalUncheckedUpdateManyInput>
    /**
     * Filter which MemberArrivals to update
     */
    where?: MemberArrivalWhereInput
    /**
     * Limit how many MemberArrivals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberArrival upsert
   */
  export type MemberArrivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberArrival to update in case it exists.
     */
    where: MemberArrivalWhereUniqueInput
    /**
     * In case the MemberArrival found by the `where` argument doesn't exist, create a new MemberArrival with this data.
     */
    create: XOR<MemberArrivalCreateInput, MemberArrivalUncheckedCreateInput>
    /**
     * In case the MemberArrival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberArrivalUpdateInput, MemberArrivalUncheckedUpdateInput>
  }

  /**
   * MemberArrival delete
   */
  export type MemberArrivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
    /**
     * Filter which MemberArrival to delete.
     */
    where: MemberArrivalWhereUniqueInput
  }

  /**
   * MemberArrival deleteMany
   */
  export type MemberArrivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberArrivals to delete
     */
    where?: MemberArrivalWhereInput
    /**
     * Limit how many MemberArrivals to delete.
     */
    limit?: number
  }

  /**
   * MemberArrival without action
   */
  export type MemberArrivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberArrival
     */
    select?: MemberArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberArrival
     */
    omit?: MemberArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberArrivalInclude<ExtArgs> | null
  }


  /**
   * Model Incidentile
   */

  export type AggregateIncidentile = {
    _count: IncidentileCountAggregateOutputType | null
    _avg: IncidentileAvgAggregateOutputType | null
    _sum: IncidentileSumAggregateOutputType | null
    _min: IncidentileMinAggregateOutputType | null
    _max: IncidentileMaxAggregateOutputType | null
  }

  export type IncidentileAvgAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type IncidentileSumAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type IncidentileMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    type: $Enums.IncidentileType | null
    class: $Enums.IncidentileClass | null
    namaPt: string | null
    pt: boolean | null
    sauna: boolean | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
  }

  export type IncidentileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    type: $Enums.IncidentileType | null
    class: $Enums.IncidentileClass | null
    namaPt: string | null
    pt: boolean | null
    sauna: boolean | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
  }

  export type IncidentileCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    type: number
    class: number
    namaPt: number
    pt: number
    sauna: number
    paymentMethod: number
    paymentAmount: number
    date: number
    _all: number
  }


  export type IncidentileAvgAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type IncidentileSumAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type IncidentileMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    type?: true
    class?: true
    namaPt?: true
    pt?: true
    sauna?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
  }

  export type IncidentileMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    type?: true
    class?: true
    namaPt?: true
    pt?: true
    sauna?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
  }

  export type IncidentileCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    type?: true
    class?: true
    namaPt?: true
    pt?: true
    sauna?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    _all?: true
  }

  export type IncidentileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidentile to aggregate.
     */
    where?: IncidentileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentiles to fetch.
     */
    orderBy?: IncidentileOrderByWithRelationInput | IncidentileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidentiles
    **/
    _count?: true | IncidentileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentileMaxAggregateInputType
  }

  export type GetIncidentileAggregateType<T extends IncidentileAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentile[P]>
      : GetScalarType<T[P], AggregateIncidentile[P]>
  }




  export type IncidentileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentileWhereInput
    orderBy?: IncidentileOrderByWithAggregationInput | IncidentileOrderByWithAggregationInput[]
    by: IncidentileScalarFieldEnum[] | IncidentileScalarFieldEnum
    having?: IncidentileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentileCountAggregateInputType | true
    _avg?: IncidentileAvgAggregateInputType
    _sum?: IncidentileSumAggregateInputType
    _min?: IncidentileMinAggregateInputType
    _max?: IncidentileMaxAggregateInputType
  }

  export type IncidentileGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    type: $Enums.IncidentileType
    class: $Enums.IncidentileClass | null
    namaPt: string | null
    pt: boolean
    sauna: boolean
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date
    _count: IncidentileCountAggregateOutputType | null
    _avg: IncidentileAvgAggregateOutputType | null
    _sum: IncidentileSumAggregateOutputType | null
    _min: IncidentileMinAggregateOutputType | null
    _max: IncidentileMaxAggregateOutputType | null
  }

  type GetIncidentileGroupByPayload<T extends IncidentileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentileGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentileGroupByOutputType[P]>
        }
      >
    >


  export type IncidentileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    type?: boolean
    class?: boolean
    namaPt?: boolean
    pt?: boolean
    sauna?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
  }, ExtArgs["result"]["incidentile"]>

  export type IncidentileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    type?: boolean
    class?: boolean
    namaPt?: boolean
    pt?: boolean
    sauna?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
  }, ExtArgs["result"]["incidentile"]>

  export type IncidentileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    type?: boolean
    class?: boolean
    namaPt?: boolean
    pt?: boolean
    sauna?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
  }, ExtArgs["result"]["incidentile"]>

  export type IncidentileSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    type?: boolean
    class?: boolean
    namaPt?: boolean
    pt?: boolean
    sauna?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
  }

  export type IncidentileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "type" | "class" | "namaPt" | "pt" | "sauna" | "paymentMethod" | "paymentAmount" | "date", ExtArgs["result"]["incidentile"]>

  export type $IncidentilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incidentile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      type: $Enums.IncidentileType
      class: $Enums.IncidentileClass | null
      namaPt: string | null
      pt: boolean
      sauna: boolean
      paymentMethod: $Enums.PaymentMethod
      paymentAmount: number
      date: Date
    }, ExtArgs["result"]["incidentile"]>
    composites: {}
  }

  type IncidentileGetPayload<S extends boolean | null | undefined | IncidentileDefaultArgs> = $Result.GetResult<Prisma.$IncidentilePayload, S>

  type IncidentileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentileCountAggregateInputType | true
    }

  export interface IncidentileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incidentile'], meta: { name: 'Incidentile' } }
    /**
     * Find zero or one Incidentile that matches the filter.
     * @param {IncidentileFindUniqueArgs} args - Arguments to find a Incidentile
     * @example
     * // Get one Incidentile
     * const incidentile = await prisma.incidentile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentileFindUniqueArgs>(args: SelectSubset<T, IncidentileFindUniqueArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incidentile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentileFindUniqueOrThrowArgs} args - Arguments to find a Incidentile
     * @example
     * // Get one Incidentile
     * const incidentile = await prisma.incidentile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentileFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidentile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileFindFirstArgs} args - Arguments to find a Incidentile
     * @example
     * // Get one Incidentile
     * const incidentile = await prisma.incidentile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentileFindFirstArgs>(args?: SelectSubset<T, IncidentileFindFirstArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidentile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileFindFirstOrThrowArgs} args - Arguments to find a Incidentile
     * @example
     * // Get one Incidentile
     * const incidentile = await prisma.incidentile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentileFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentileFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidentiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidentiles
     * const incidentiles = await prisma.incidentile.findMany()
     * 
     * // Get first 10 Incidentiles
     * const incidentiles = await prisma.incidentile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentileWithIdOnly = await prisma.incidentile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentileFindManyArgs>(args?: SelectSubset<T, IncidentileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incidentile.
     * @param {IncidentileCreateArgs} args - Arguments to create a Incidentile.
     * @example
     * // Create one Incidentile
     * const Incidentile = await prisma.incidentile.create({
     *   data: {
     *     // ... data to create a Incidentile
     *   }
     * })
     * 
     */
    create<T extends IncidentileCreateArgs>(args: SelectSubset<T, IncidentileCreateArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidentiles.
     * @param {IncidentileCreateManyArgs} args - Arguments to create many Incidentiles.
     * @example
     * // Create many Incidentiles
     * const incidentile = await prisma.incidentile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentileCreateManyArgs>(args?: SelectSubset<T, IncidentileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidentiles and returns the data saved in the database.
     * @param {IncidentileCreateManyAndReturnArgs} args - Arguments to create many Incidentiles.
     * @example
     * // Create many Incidentiles
     * const incidentile = await prisma.incidentile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidentiles and only return the `id`
     * const incidentileWithIdOnly = await prisma.incidentile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentileCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incidentile.
     * @param {IncidentileDeleteArgs} args - Arguments to delete one Incidentile.
     * @example
     * // Delete one Incidentile
     * const Incidentile = await prisma.incidentile.delete({
     *   where: {
     *     // ... filter to delete one Incidentile
     *   }
     * })
     * 
     */
    delete<T extends IncidentileDeleteArgs>(args: SelectSubset<T, IncidentileDeleteArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incidentile.
     * @param {IncidentileUpdateArgs} args - Arguments to update one Incidentile.
     * @example
     * // Update one Incidentile
     * const incidentile = await prisma.incidentile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentileUpdateArgs>(args: SelectSubset<T, IncidentileUpdateArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidentiles.
     * @param {IncidentileDeleteManyArgs} args - Arguments to filter Incidentiles to delete.
     * @example
     * // Delete a few Incidentiles
     * const { count } = await prisma.incidentile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentileDeleteManyArgs>(args?: SelectSubset<T, IncidentileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidentiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidentiles
     * const incidentile = await prisma.incidentile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentileUpdateManyArgs>(args: SelectSubset<T, IncidentileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidentiles and returns the data updated in the database.
     * @param {IncidentileUpdateManyAndReturnArgs} args - Arguments to update many Incidentiles.
     * @example
     * // Update many Incidentiles
     * const incidentile = await prisma.incidentile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidentiles and only return the `id`
     * const incidentileWithIdOnly = await prisma.incidentile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentileUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incidentile.
     * @param {IncidentileUpsertArgs} args - Arguments to update or create a Incidentile.
     * @example
     * // Update or create a Incidentile
     * const incidentile = await prisma.incidentile.upsert({
     *   create: {
     *     // ... data to create a Incidentile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incidentile we want to update
     *   }
     * })
     */
    upsert<T extends IncidentileUpsertArgs>(args: SelectSubset<T, IncidentileUpsertArgs<ExtArgs>>): Prisma__IncidentileClient<$Result.GetResult<Prisma.$IncidentilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidentiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileCountArgs} args - Arguments to filter Incidentiles to count.
     * @example
     * // Count the number of Incidentiles
     * const count = await prisma.incidentile.count({
     *   where: {
     *     // ... the filter for the Incidentiles we want to count
     *   }
     * })
    **/
    count<T extends IncidentileCountArgs>(
      args?: Subset<T, IncidentileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incidentile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentileAggregateArgs>(args: Subset<T, IncidentileAggregateArgs>): Prisma.PrismaPromise<GetIncidentileAggregateType<T>>

    /**
     * Group by Incidentile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentileGroupByArgs['orderBy'] }
        : { orderBy?: IncidentileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incidentile model
   */
  readonly fields: IncidentileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incidentile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incidentile model
   */
  interface IncidentileFieldRefs {
    readonly id: FieldRef<"Incidentile", 'Int'>
    readonly name: FieldRef<"Incidentile", 'String'>
    readonly phone: FieldRef<"Incidentile", 'String'>
    readonly type: FieldRef<"Incidentile", 'IncidentileType'>
    readonly class: FieldRef<"Incidentile", 'IncidentileClass'>
    readonly namaPt: FieldRef<"Incidentile", 'String'>
    readonly pt: FieldRef<"Incidentile", 'Boolean'>
    readonly sauna: FieldRef<"Incidentile", 'Boolean'>
    readonly paymentMethod: FieldRef<"Incidentile", 'PaymentMethod'>
    readonly paymentAmount: FieldRef<"Incidentile", 'Int'>
    readonly date: FieldRef<"Incidentile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incidentile findUnique
   */
  export type IncidentileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter, which Incidentile to fetch.
     */
    where: IncidentileWhereUniqueInput
  }

  /**
   * Incidentile findUniqueOrThrow
   */
  export type IncidentileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter, which Incidentile to fetch.
     */
    where: IncidentileWhereUniqueInput
  }

  /**
   * Incidentile findFirst
   */
  export type IncidentileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter, which Incidentile to fetch.
     */
    where?: IncidentileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentiles to fetch.
     */
    orderBy?: IncidentileOrderByWithRelationInput | IncidentileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidentiles.
     */
    cursor?: IncidentileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidentiles.
     */
    distinct?: IncidentileScalarFieldEnum | IncidentileScalarFieldEnum[]
  }

  /**
   * Incidentile findFirstOrThrow
   */
  export type IncidentileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter, which Incidentile to fetch.
     */
    where?: IncidentileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentiles to fetch.
     */
    orderBy?: IncidentileOrderByWithRelationInput | IncidentileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidentiles.
     */
    cursor?: IncidentileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidentiles.
     */
    distinct?: IncidentileScalarFieldEnum | IncidentileScalarFieldEnum[]
  }

  /**
   * Incidentile findMany
   */
  export type IncidentileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter, which Incidentiles to fetch.
     */
    where?: IncidentileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentiles to fetch.
     */
    orderBy?: IncidentileOrderByWithRelationInput | IncidentileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidentiles.
     */
    cursor?: IncidentileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentiles.
     */
    skip?: number
    distinct?: IncidentileScalarFieldEnum | IncidentileScalarFieldEnum[]
  }

  /**
   * Incidentile create
   */
  export type IncidentileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * The data needed to create a Incidentile.
     */
    data: XOR<IncidentileCreateInput, IncidentileUncheckedCreateInput>
  }

  /**
   * Incidentile createMany
   */
  export type IncidentileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidentiles.
     */
    data: IncidentileCreateManyInput | IncidentileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incidentile createManyAndReturn
   */
  export type IncidentileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * The data used to create many Incidentiles.
     */
    data: IncidentileCreateManyInput | IncidentileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incidentile update
   */
  export type IncidentileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * The data needed to update a Incidentile.
     */
    data: XOR<IncidentileUpdateInput, IncidentileUncheckedUpdateInput>
    /**
     * Choose, which Incidentile to update.
     */
    where: IncidentileWhereUniqueInput
  }

  /**
   * Incidentile updateMany
   */
  export type IncidentileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidentiles.
     */
    data: XOR<IncidentileUpdateManyMutationInput, IncidentileUncheckedUpdateManyInput>
    /**
     * Filter which Incidentiles to update
     */
    where?: IncidentileWhereInput
    /**
     * Limit how many Incidentiles to update.
     */
    limit?: number
  }

  /**
   * Incidentile updateManyAndReturn
   */
  export type IncidentileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * The data used to update Incidentiles.
     */
    data: XOR<IncidentileUpdateManyMutationInput, IncidentileUncheckedUpdateManyInput>
    /**
     * Filter which Incidentiles to update
     */
    where?: IncidentileWhereInput
    /**
     * Limit how many Incidentiles to update.
     */
    limit?: number
  }

  /**
   * Incidentile upsert
   */
  export type IncidentileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * The filter to search for the Incidentile to update in case it exists.
     */
    where: IncidentileWhereUniqueInput
    /**
     * In case the Incidentile found by the `where` argument doesn't exist, create a new Incidentile with this data.
     */
    create: XOR<IncidentileCreateInput, IncidentileUncheckedCreateInput>
    /**
     * In case the Incidentile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentileUpdateInput, IncidentileUncheckedUpdateInput>
  }

  /**
   * Incidentile delete
   */
  export type IncidentileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
    /**
     * Filter which Incidentile to delete.
     */
    where: IncidentileWhereUniqueInput
  }

  /**
   * Incidentile deleteMany
   */
  export type IncidentileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidentiles to delete
     */
    where?: IncidentileWhereInput
    /**
     * Limit how many Incidentiles to delete.
     */
    limit?: number
  }

  /**
   * Incidentile without action
   */
  export type IncidentileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidentile
     */
    select?: IncidentileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidentile
     */
    omit?: IncidentileOmit<ExtArgs> | null
  }


  /**
   * Model TxFo
   */

  export type AggregateTxFo = {
    _count: TxFoCountAggregateOutputType | null
    _avg: TxFoAvgAggregateOutputType | null
    _sum: TxFoSumAggregateOutputType | null
    _min: TxFoMinAggregateOutputType | null
    _max: TxFoMaxAggregateOutputType | null
  }

  export type TxFoAvgAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type TxFoSumAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type TxFoMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxFoMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxFoCountAggregateOutputType = {
    id: number
    type: number
    title: number
    note: number
    paymentMethod: number
    paymentAmount: number
    date: number
    billId: number
    _all: number
  }


  export type TxFoAvgAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type TxFoSumAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type TxFoMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxFoMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxFoCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
    _all?: true
  }

  export type TxFoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxFo to aggregate.
     */
    where?: TxFoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxFos to fetch.
     */
    orderBy?: TxFoOrderByWithRelationInput | TxFoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TxFoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxFos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxFos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TxFos
    **/
    _count?: true | TxFoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TxFoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TxFoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TxFoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TxFoMaxAggregateInputType
  }

  export type GetTxFoAggregateType<T extends TxFoAggregateArgs> = {
        [P in keyof T & keyof AggregateTxFo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTxFo[P]>
      : GetScalarType<T[P], AggregateTxFo[P]>
  }




  export type TxFoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxFoWhereInput
    orderBy?: TxFoOrderByWithAggregationInput | TxFoOrderByWithAggregationInput[]
    by: TxFoScalarFieldEnum[] | TxFoScalarFieldEnum
    having?: TxFoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TxFoCountAggregateInputType | true
    _avg?: TxFoAvgAggregateInputType
    _sum?: TxFoSumAggregateInputType
    _min?: TxFoMinAggregateInputType
    _max?: TxFoMaxAggregateInputType
  }

  export type TxFoGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    title: string | null
    note: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date
    billId: string | null
    _count: TxFoCountAggregateOutputType | null
    _avg: TxFoAvgAggregateOutputType | null
    _sum: TxFoSumAggregateOutputType | null
    _min: TxFoMinAggregateOutputType | null
    _max: TxFoMaxAggregateOutputType | null
  }

  type GetTxFoGroupByPayload<T extends TxFoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TxFoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TxFoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TxFoGroupByOutputType[P]>
            : GetScalarType<T[P], TxFoGroupByOutputType[P]>
        }
      >
    >


  export type TxFoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txFo"]>

  export type TxFoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txFo"]>

  export type TxFoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txFo"]>

  export type TxFoSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }

  export type TxFoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "note" | "paymentMethod" | "paymentAmount" | "date" | "billId", ExtArgs["result"]["txFo"]>

  export type $TxFoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TxFo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      title: string | null
      note: string | null
      paymentMethod: $Enums.PaymentMethod
      paymentAmount: number
      date: Date
      billId: string | null
    }, ExtArgs["result"]["txFo"]>
    composites: {}
  }

  type TxFoGetPayload<S extends boolean | null | undefined | TxFoDefaultArgs> = $Result.GetResult<Prisma.$TxFoPayload, S>

  type TxFoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TxFoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TxFoCountAggregateInputType | true
    }

  export interface TxFoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TxFo'], meta: { name: 'TxFo' } }
    /**
     * Find zero or one TxFo that matches the filter.
     * @param {TxFoFindUniqueArgs} args - Arguments to find a TxFo
     * @example
     * // Get one TxFo
     * const txFo = await prisma.txFo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TxFoFindUniqueArgs>(args: SelectSubset<T, TxFoFindUniqueArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TxFo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TxFoFindUniqueOrThrowArgs} args - Arguments to find a TxFo
     * @example
     * // Get one TxFo
     * const txFo = await prisma.txFo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TxFoFindUniqueOrThrowArgs>(args: SelectSubset<T, TxFoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxFo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoFindFirstArgs} args - Arguments to find a TxFo
     * @example
     * // Get one TxFo
     * const txFo = await prisma.txFo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TxFoFindFirstArgs>(args?: SelectSubset<T, TxFoFindFirstArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxFo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoFindFirstOrThrowArgs} args - Arguments to find a TxFo
     * @example
     * // Get one TxFo
     * const txFo = await prisma.txFo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TxFoFindFirstOrThrowArgs>(args?: SelectSubset<T, TxFoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TxFos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TxFos
     * const txFos = await prisma.txFo.findMany()
     * 
     * // Get first 10 TxFos
     * const txFos = await prisma.txFo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const txFoWithIdOnly = await prisma.txFo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TxFoFindManyArgs>(args?: SelectSubset<T, TxFoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TxFo.
     * @param {TxFoCreateArgs} args - Arguments to create a TxFo.
     * @example
     * // Create one TxFo
     * const TxFo = await prisma.txFo.create({
     *   data: {
     *     // ... data to create a TxFo
     *   }
     * })
     * 
     */
    create<T extends TxFoCreateArgs>(args: SelectSubset<T, TxFoCreateArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TxFos.
     * @param {TxFoCreateManyArgs} args - Arguments to create many TxFos.
     * @example
     * // Create many TxFos
     * const txFo = await prisma.txFo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TxFoCreateManyArgs>(args?: SelectSubset<T, TxFoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TxFos and returns the data saved in the database.
     * @param {TxFoCreateManyAndReturnArgs} args - Arguments to create many TxFos.
     * @example
     * // Create many TxFos
     * const txFo = await prisma.txFo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TxFos and only return the `id`
     * const txFoWithIdOnly = await prisma.txFo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TxFoCreateManyAndReturnArgs>(args?: SelectSubset<T, TxFoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TxFo.
     * @param {TxFoDeleteArgs} args - Arguments to delete one TxFo.
     * @example
     * // Delete one TxFo
     * const TxFo = await prisma.txFo.delete({
     *   where: {
     *     // ... filter to delete one TxFo
     *   }
     * })
     * 
     */
    delete<T extends TxFoDeleteArgs>(args: SelectSubset<T, TxFoDeleteArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TxFo.
     * @param {TxFoUpdateArgs} args - Arguments to update one TxFo.
     * @example
     * // Update one TxFo
     * const txFo = await prisma.txFo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TxFoUpdateArgs>(args: SelectSubset<T, TxFoUpdateArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TxFos.
     * @param {TxFoDeleteManyArgs} args - Arguments to filter TxFos to delete.
     * @example
     * // Delete a few TxFos
     * const { count } = await prisma.txFo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TxFoDeleteManyArgs>(args?: SelectSubset<T, TxFoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxFos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TxFos
     * const txFo = await prisma.txFo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TxFoUpdateManyArgs>(args: SelectSubset<T, TxFoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxFos and returns the data updated in the database.
     * @param {TxFoUpdateManyAndReturnArgs} args - Arguments to update many TxFos.
     * @example
     * // Update many TxFos
     * const txFo = await prisma.txFo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TxFos and only return the `id`
     * const txFoWithIdOnly = await prisma.txFo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TxFoUpdateManyAndReturnArgs>(args: SelectSubset<T, TxFoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TxFo.
     * @param {TxFoUpsertArgs} args - Arguments to update or create a TxFo.
     * @example
     * // Update or create a TxFo
     * const txFo = await prisma.txFo.upsert({
     *   create: {
     *     // ... data to create a TxFo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TxFo we want to update
     *   }
     * })
     */
    upsert<T extends TxFoUpsertArgs>(args: SelectSubset<T, TxFoUpsertArgs<ExtArgs>>): Prisma__TxFoClient<$Result.GetResult<Prisma.$TxFoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TxFos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoCountArgs} args - Arguments to filter TxFos to count.
     * @example
     * // Count the number of TxFos
     * const count = await prisma.txFo.count({
     *   where: {
     *     // ... the filter for the TxFos we want to count
     *   }
     * })
    **/
    count<T extends TxFoCountArgs>(
      args?: Subset<T, TxFoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TxFoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TxFo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TxFoAggregateArgs>(args: Subset<T, TxFoAggregateArgs>): Prisma.PrismaPromise<GetTxFoAggregateType<T>>

    /**
     * Group by TxFo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxFoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TxFoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TxFoGroupByArgs['orderBy'] }
        : { orderBy?: TxFoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TxFoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTxFoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TxFo model
   */
  readonly fields: TxFoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TxFo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TxFoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TxFo model
   */
  interface TxFoFieldRefs {
    readonly id: FieldRef<"TxFo", 'Int'>
    readonly type: FieldRef<"TxFo", 'TransactionType'>
    readonly title: FieldRef<"TxFo", 'String'>
    readonly note: FieldRef<"TxFo", 'String'>
    readonly paymentMethod: FieldRef<"TxFo", 'PaymentMethod'>
    readonly paymentAmount: FieldRef<"TxFo", 'Int'>
    readonly date: FieldRef<"TxFo", 'DateTime'>
    readonly billId: FieldRef<"TxFo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TxFo findUnique
   */
  export type TxFoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter, which TxFo to fetch.
     */
    where: TxFoWhereUniqueInput
  }

  /**
   * TxFo findUniqueOrThrow
   */
  export type TxFoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter, which TxFo to fetch.
     */
    where: TxFoWhereUniqueInput
  }

  /**
   * TxFo findFirst
   */
  export type TxFoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter, which TxFo to fetch.
     */
    where?: TxFoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxFos to fetch.
     */
    orderBy?: TxFoOrderByWithRelationInput | TxFoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxFos.
     */
    cursor?: TxFoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxFos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxFos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxFos.
     */
    distinct?: TxFoScalarFieldEnum | TxFoScalarFieldEnum[]
  }

  /**
   * TxFo findFirstOrThrow
   */
  export type TxFoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter, which TxFo to fetch.
     */
    where?: TxFoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxFos to fetch.
     */
    orderBy?: TxFoOrderByWithRelationInput | TxFoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxFos.
     */
    cursor?: TxFoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxFos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxFos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxFos.
     */
    distinct?: TxFoScalarFieldEnum | TxFoScalarFieldEnum[]
  }

  /**
   * TxFo findMany
   */
  export type TxFoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter, which TxFos to fetch.
     */
    where?: TxFoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxFos to fetch.
     */
    orderBy?: TxFoOrderByWithRelationInput | TxFoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TxFos.
     */
    cursor?: TxFoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxFos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxFos.
     */
    skip?: number
    distinct?: TxFoScalarFieldEnum | TxFoScalarFieldEnum[]
  }

  /**
   * TxFo create
   */
  export type TxFoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * The data needed to create a TxFo.
     */
    data: XOR<TxFoCreateInput, TxFoUncheckedCreateInput>
  }

  /**
   * TxFo createMany
   */
  export type TxFoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TxFos.
     */
    data: TxFoCreateManyInput | TxFoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxFo createManyAndReturn
   */
  export type TxFoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * The data used to create many TxFos.
     */
    data: TxFoCreateManyInput | TxFoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxFo update
   */
  export type TxFoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * The data needed to update a TxFo.
     */
    data: XOR<TxFoUpdateInput, TxFoUncheckedUpdateInput>
    /**
     * Choose, which TxFo to update.
     */
    where: TxFoWhereUniqueInput
  }

  /**
   * TxFo updateMany
   */
  export type TxFoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TxFos.
     */
    data: XOR<TxFoUpdateManyMutationInput, TxFoUncheckedUpdateManyInput>
    /**
     * Filter which TxFos to update
     */
    where?: TxFoWhereInput
    /**
     * Limit how many TxFos to update.
     */
    limit?: number
  }

  /**
   * TxFo updateManyAndReturn
   */
  export type TxFoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * The data used to update TxFos.
     */
    data: XOR<TxFoUpdateManyMutationInput, TxFoUncheckedUpdateManyInput>
    /**
     * Filter which TxFos to update
     */
    where?: TxFoWhereInput
    /**
     * Limit how many TxFos to update.
     */
    limit?: number
  }

  /**
   * TxFo upsert
   */
  export type TxFoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * The filter to search for the TxFo to update in case it exists.
     */
    where: TxFoWhereUniqueInput
    /**
     * In case the TxFo found by the `where` argument doesn't exist, create a new TxFo with this data.
     */
    create: XOR<TxFoCreateInput, TxFoUncheckedCreateInput>
    /**
     * In case the TxFo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TxFoUpdateInput, TxFoUncheckedUpdateInput>
  }

  /**
   * TxFo delete
   */
  export type TxFoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
    /**
     * Filter which TxFo to delete.
     */
    where: TxFoWhereUniqueInput
  }

  /**
   * TxFo deleteMany
   */
  export type TxFoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxFos to delete
     */
    where?: TxFoWhereInput
    /**
     * Limit how many TxFos to delete.
     */
    limit?: number
  }

  /**
   * TxFo without action
   */
  export type TxFoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxFo
     */
    select?: TxFoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxFo
     */
    omit?: TxFoOmit<ExtArgs> | null
  }


  /**
   * Model TxCanteen
   */

  export type AggregateTxCanteen = {
    _count: TxCanteenCountAggregateOutputType | null
    _avg: TxCanteenAvgAggregateOutputType | null
    _sum: TxCanteenSumAggregateOutputType | null
    _min: TxCanteenMinAggregateOutputType | null
    _max: TxCanteenMaxAggregateOutputType | null
  }

  export type TxCanteenAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    itemAmount: number | null
    paymentAmount: number | null
  }

  export type TxCanteenSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    itemAmount: number | null
    paymentAmount: number | null
  }

  export type TxCanteenMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    itemId: number | null
    itemAmount: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxCanteenMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    itemId: number | null
    itemAmount: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxCanteenCountAggregateOutputType = {
    id: number
    type: number
    title: number
    note: number
    itemId: number
    itemAmount: number
    paymentMethod: number
    paymentAmount: number
    date: number
    billId: number
    _all: number
  }


  export type TxCanteenAvgAggregateInputType = {
    id?: true
    itemId?: true
    itemAmount?: true
    paymentAmount?: true
  }

  export type TxCanteenSumAggregateInputType = {
    id?: true
    itemId?: true
    itemAmount?: true
    paymentAmount?: true
  }

  export type TxCanteenMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    itemId?: true
    itemAmount?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxCanteenMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    itemId?: true
    itemAmount?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxCanteenCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    itemId?: true
    itemAmount?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
    _all?: true
  }

  export type TxCanteenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxCanteen to aggregate.
     */
    where?: TxCanteenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxCanteens to fetch.
     */
    orderBy?: TxCanteenOrderByWithRelationInput | TxCanteenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TxCanteenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxCanteens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxCanteens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TxCanteens
    **/
    _count?: true | TxCanteenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TxCanteenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TxCanteenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TxCanteenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TxCanteenMaxAggregateInputType
  }

  export type GetTxCanteenAggregateType<T extends TxCanteenAggregateArgs> = {
        [P in keyof T & keyof AggregateTxCanteen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTxCanteen[P]>
      : GetScalarType<T[P], AggregateTxCanteen[P]>
  }




  export type TxCanteenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxCanteenWhereInput
    orderBy?: TxCanteenOrderByWithAggregationInput | TxCanteenOrderByWithAggregationInput[]
    by: TxCanteenScalarFieldEnum[] | TxCanteenScalarFieldEnum
    having?: TxCanteenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TxCanteenCountAggregateInputType | true
    _avg?: TxCanteenAvgAggregateInputType
    _sum?: TxCanteenSumAggregateInputType
    _min?: TxCanteenMinAggregateInputType
    _max?: TxCanteenMaxAggregateInputType
  }

  export type TxCanteenGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    title: string | null
    note: string | null
    itemId: number | null
    itemAmount: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date
    billId: string | null
    _count: TxCanteenCountAggregateOutputType | null
    _avg: TxCanteenAvgAggregateOutputType | null
    _sum: TxCanteenSumAggregateOutputType | null
    _min: TxCanteenMinAggregateOutputType | null
    _max: TxCanteenMaxAggregateOutputType | null
  }

  type GetTxCanteenGroupByPayload<T extends TxCanteenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TxCanteenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TxCanteenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TxCanteenGroupByOutputType[P]>
            : GetScalarType<T[P], TxCanteenGroupByOutputType[P]>
        }
      >
    >


  export type TxCanteenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    itemId?: boolean
    itemAmount?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }, ExtArgs["result"]["txCanteen"]>

  export type TxCanteenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    itemId?: boolean
    itemAmount?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }, ExtArgs["result"]["txCanteen"]>

  export type TxCanteenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    itemId?: boolean
    itemAmount?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }, ExtArgs["result"]["txCanteen"]>

  export type TxCanteenSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    itemId?: boolean
    itemAmount?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }

  export type TxCanteenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "note" | "itemId" | "itemAmount" | "paymentMethod" | "paymentAmount" | "date" | "billId", ExtArgs["result"]["txCanteen"]>
  export type TxCanteenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }
  export type TxCanteenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }
  export type TxCanteenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | TxCanteen$itemArgs<ExtArgs>
  }

  export type $TxCanteenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TxCanteen"
    objects: {
      item: Prisma.$CanteenItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      title: string | null
      note: string | null
      itemId: number | null
      itemAmount: number | null
      paymentMethod: $Enums.PaymentMethod
      paymentAmount: number
      date: Date
      billId: string | null
    }, ExtArgs["result"]["txCanteen"]>
    composites: {}
  }

  type TxCanteenGetPayload<S extends boolean | null | undefined | TxCanteenDefaultArgs> = $Result.GetResult<Prisma.$TxCanteenPayload, S>

  type TxCanteenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TxCanteenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TxCanteenCountAggregateInputType | true
    }

  export interface TxCanteenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TxCanteen'], meta: { name: 'TxCanteen' } }
    /**
     * Find zero or one TxCanteen that matches the filter.
     * @param {TxCanteenFindUniqueArgs} args - Arguments to find a TxCanteen
     * @example
     * // Get one TxCanteen
     * const txCanteen = await prisma.txCanteen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TxCanteenFindUniqueArgs>(args: SelectSubset<T, TxCanteenFindUniqueArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TxCanteen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TxCanteenFindUniqueOrThrowArgs} args - Arguments to find a TxCanteen
     * @example
     * // Get one TxCanteen
     * const txCanteen = await prisma.txCanteen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TxCanteenFindUniqueOrThrowArgs>(args: SelectSubset<T, TxCanteenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxCanteen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenFindFirstArgs} args - Arguments to find a TxCanteen
     * @example
     * // Get one TxCanteen
     * const txCanteen = await prisma.txCanteen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TxCanteenFindFirstArgs>(args?: SelectSubset<T, TxCanteenFindFirstArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxCanteen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenFindFirstOrThrowArgs} args - Arguments to find a TxCanteen
     * @example
     * // Get one TxCanteen
     * const txCanteen = await prisma.txCanteen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TxCanteenFindFirstOrThrowArgs>(args?: SelectSubset<T, TxCanteenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TxCanteens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TxCanteens
     * const txCanteens = await prisma.txCanteen.findMany()
     * 
     * // Get first 10 TxCanteens
     * const txCanteens = await prisma.txCanteen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const txCanteenWithIdOnly = await prisma.txCanteen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TxCanteenFindManyArgs>(args?: SelectSubset<T, TxCanteenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TxCanteen.
     * @param {TxCanteenCreateArgs} args - Arguments to create a TxCanteen.
     * @example
     * // Create one TxCanteen
     * const TxCanteen = await prisma.txCanteen.create({
     *   data: {
     *     // ... data to create a TxCanteen
     *   }
     * })
     * 
     */
    create<T extends TxCanteenCreateArgs>(args: SelectSubset<T, TxCanteenCreateArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TxCanteens.
     * @param {TxCanteenCreateManyArgs} args - Arguments to create many TxCanteens.
     * @example
     * // Create many TxCanteens
     * const txCanteen = await prisma.txCanteen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TxCanteenCreateManyArgs>(args?: SelectSubset<T, TxCanteenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TxCanteens and returns the data saved in the database.
     * @param {TxCanteenCreateManyAndReturnArgs} args - Arguments to create many TxCanteens.
     * @example
     * // Create many TxCanteens
     * const txCanteen = await prisma.txCanteen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TxCanteens and only return the `id`
     * const txCanteenWithIdOnly = await prisma.txCanteen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TxCanteenCreateManyAndReturnArgs>(args?: SelectSubset<T, TxCanteenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TxCanteen.
     * @param {TxCanteenDeleteArgs} args - Arguments to delete one TxCanteen.
     * @example
     * // Delete one TxCanteen
     * const TxCanteen = await prisma.txCanteen.delete({
     *   where: {
     *     // ... filter to delete one TxCanteen
     *   }
     * })
     * 
     */
    delete<T extends TxCanteenDeleteArgs>(args: SelectSubset<T, TxCanteenDeleteArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TxCanteen.
     * @param {TxCanteenUpdateArgs} args - Arguments to update one TxCanteen.
     * @example
     * // Update one TxCanteen
     * const txCanteen = await prisma.txCanteen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TxCanteenUpdateArgs>(args: SelectSubset<T, TxCanteenUpdateArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TxCanteens.
     * @param {TxCanteenDeleteManyArgs} args - Arguments to filter TxCanteens to delete.
     * @example
     * // Delete a few TxCanteens
     * const { count } = await prisma.txCanteen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TxCanteenDeleteManyArgs>(args?: SelectSubset<T, TxCanteenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxCanteens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TxCanteens
     * const txCanteen = await prisma.txCanteen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TxCanteenUpdateManyArgs>(args: SelectSubset<T, TxCanteenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxCanteens and returns the data updated in the database.
     * @param {TxCanteenUpdateManyAndReturnArgs} args - Arguments to update many TxCanteens.
     * @example
     * // Update many TxCanteens
     * const txCanteen = await prisma.txCanteen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TxCanteens and only return the `id`
     * const txCanteenWithIdOnly = await prisma.txCanteen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TxCanteenUpdateManyAndReturnArgs>(args: SelectSubset<T, TxCanteenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TxCanteen.
     * @param {TxCanteenUpsertArgs} args - Arguments to update or create a TxCanteen.
     * @example
     * // Update or create a TxCanteen
     * const txCanteen = await prisma.txCanteen.upsert({
     *   create: {
     *     // ... data to create a TxCanteen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TxCanteen we want to update
     *   }
     * })
     */
    upsert<T extends TxCanteenUpsertArgs>(args: SelectSubset<T, TxCanteenUpsertArgs<ExtArgs>>): Prisma__TxCanteenClient<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TxCanteens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenCountArgs} args - Arguments to filter TxCanteens to count.
     * @example
     * // Count the number of TxCanteens
     * const count = await prisma.txCanteen.count({
     *   where: {
     *     // ... the filter for the TxCanteens we want to count
     *   }
     * })
    **/
    count<T extends TxCanteenCountArgs>(
      args?: Subset<T, TxCanteenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TxCanteenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TxCanteen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TxCanteenAggregateArgs>(args: Subset<T, TxCanteenAggregateArgs>): Prisma.PrismaPromise<GetTxCanteenAggregateType<T>>

    /**
     * Group by TxCanteen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxCanteenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TxCanteenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TxCanteenGroupByArgs['orderBy'] }
        : { orderBy?: TxCanteenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TxCanteenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTxCanteenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TxCanteen model
   */
  readonly fields: TxCanteenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TxCanteen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TxCanteenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends TxCanteen$itemArgs<ExtArgs> = {}>(args?: Subset<T, TxCanteen$itemArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TxCanteen model
   */
  interface TxCanteenFieldRefs {
    readonly id: FieldRef<"TxCanteen", 'Int'>
    readonly type: FieldRef<"TxCanteen", 'TransactionType'>
    readonly title: FieldRef<"TxCanteen", 'String'>
    readonly note: FieldRef<"TxCanteen", 'String'>
    readonly itemId: FieldRef<"TxCanteen", 'Int'>
    readonly itemAmount: FieldRef<"TxCanteen", 'Int'>
    readonly paymentMethod: FieldRef<"TxCanteen", 'PaymentMethod'>
    readonly paymentAmount: FieldRef<"TxCanteen", 'Int'>
    readonly date: FieldRef<"TxCanteen", 'DateTime'>
    readonly billId: FieldRef<"TxCanteen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TxCanteen findUnique
   */
  export type TxCanteenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter, which TxCanteen to fetch.
     */
    where: TxCanteenWhereUniqueInput
  }

  /**
   * TxCanteen findUniqueOrThrow
   */
  export type TxCanteenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter, which TxCanteen to fetch.
     */
    where: TxCanteenWhereUniqueInput
  }

  /**
   * TxCanteen findFirst
   */
  export type TxCanteenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter, which TxCanteen to fetch.
     */
    where?: TxCanteenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxCanteens to fetch.
     */
    orderBy?: TxCanteenOrderByWithRelationInput | TxCanteenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxCanteens.
     */
    cursor?: TxCanteenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxCanteens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxCanteens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxCanteens.
     */
    distinct?: TxCanteenScalarFieldEnum | TxCanteenScalarFieldEnum[]
  }

  /**
   * TxCanteen findFirstOrThrow
   */
  export type TxCanteenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter, which TxCanteen to fetch.
     */
    where?: TxCanteenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxCanteens to fetch.
     */
    orderBy?: TxCanteenOrderByWithRelationInput | TxCanteenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxCanteens.
     */
    cursor?: TxCanteenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxCanteens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxCanteens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxCanteens.
     */
    distinct?: TxCanteenScalarFieldEnum | TxCanteenScalarFieldEnum[]
  }

  /**
   * TxCanteen findMany
   */
  export type TxCanteenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter, which TxCanteens to fetch.
     */
    where?: TxCanteenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxCanteens to fetch.
     */
    orderBy?: TxCanteenOrderByWithRelationInput | TxCanteenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TxCanteens.
     */
    cursor?: TxCanteenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxCanteens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxCanteens.
     */
    skip?: number
    distinct?: TxCanteenScalarFieldEnum | TxCanteenScalarFieldEnum[]
  }

  /**
   * TxCanteen create
   */
  export type TxCanteenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * The data needed to create a TxCanteen.
     */
    data: XOR<TxCanteenCreateInput, TxCanteenUncheckedCreateInput>
  }

  /**
   * TxCanteen createMany
   */
  export type TxCanteenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TxCanteens.
     */
    data: TxCanteenCreateManyInput | TxCanteenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxCanteen createManyAndReturn
   */
  export type TxCanteenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * The data used to create many TxCanteens.
     */
    data: TxCanteenCreateManyInput | TxCanteenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TxCanteen update
   */
  export type TxCanteenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * The data needed to update a TxCanteen.
     */
    data: XOR<TxCanteenUpdateInput, TxCanteenUncheckedUpdateInput>
    /**
     * Choose, which TxCanteen to update.
     */
    where: TxCanteenWhereUniqueInput
  }

  /**
   * TxCanteen updateMany
   */
  export type TxCanteenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TxCanteens.
     */
    data: XOR<TxCanteenUpdateManyMutationInput, TxCanteenUncheckedUpdateManyInput>
    /**
     * Filter which TxCanteens to update
     */
    where?: TxCanteenWhereInput
    /**
     * Limit how many TxCanteens to update.
     */
    limit?: number
  }

  /**
   * TxCanteen updateManyAndReturn
   */
  export type TxCanteenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * The data used to update TxCanteens.
     */
    data: XOR<TxCanteenUpdateManyMutationInput, TxCanteenUncheckedUpdateManyInput>
    /**
     * Filter which TxCanteens to update
     */
    where?: TxCanteenWhereInput
    /**
     * Limit how many TxCanteens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TxCanteen upsert
   */
  export type TxCanteenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * The filter to search for the TxCanteen to update in case it exists.
     */
    where: TxCanteenWhereUniqueInput
    /**
     * In case the TxCanteen found by the `where` argument doesn't exist, create a new TxCanteen with this data.
     */
    create: XOR<TxCanteenCreateInput, TxCanteenUncheckedCreateInput>
    /**
     * In case the TxCanteen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TxCanteenUpdateInput, TxCanteenUncheckedUpdateInput>
  }

  /**
   * TxCanteen delete
   */
  export type TxCanteenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    /**
     * Filter which TxCanteen to delete.
     */
    where: TxCanteenWhereUniqueInput
  }

  /**
   * TxCanteen deleteMany
   */
  export type TxCanteenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxCanteens to delete
     */
    where?: TxCanteenWhereInput
    /**
     * Limit how many TxCanteens to delete.
     */
    limit?: number
  }

  /**
   * TxCanteen.item
   */
  export type TxCanteen$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    where?: CanteenItemWhereInput
  }

  /**
   * TxCanteen without action
   */
  export type TxCanteenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
  }


  /**
   * Model TxAccounting
   */

  export type AggregateTxAccounting = {
    _count: TxAccountingCountAggregateOutputType | null
    _avg: TxAccountingAvgAggregateOutputType | null
    _sum: TxAccountingSumAggregateOutputType | null
    _min: TxAccountingMinAggregateOutputType | null
    _max: TxAccountingMaxAggregateOutputType | null
  }

  export type TxAccountingAvgAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type TxAccountingSumAggregateOutputType = {
    id: number | null
    paymentAmount: number | null
  }

  export type TxAccountingMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxAccountingMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    title: string | null
    note: string | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentAmount: number | null
    date: Date | null
    billId: string | null
  }

  export type TxAccountingCountAggregateOutputType = {
    id: number
    type: number
    title: number
    note: number
    paymentMethod: number
    paymentAmount: number
    date: number
    billId: number
    _all: number
  }


  export type TxAccountingAvgAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type TxAccountingSumAggregateInputType = {
    id?: true
    paymentAmount?: true
  }

  export type TxAccountingMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxAccountingMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
  }

  export type TxAccountingCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    note?: true
    paymentMethod?: true
    paymentAmount?: true
    date?: true
    billId?: true
    _all?: true
  }

  export type TxAccountingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxAccounting to aggregate.
     */
    where?: TxAccountingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxAccountings to fetch.
     */
    orderBy?: TxAccountingOrderByWithRelationInput | TxAccountingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TxAccountingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxAccountings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxAccountings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TxAccountings
    **/
    _count?: true | TxAccountingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TxAccountingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TxAccountingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TxAccountingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TxAccountingMaxAggregateInputType
  }

  export type GetTxAccountingAggregateType<T extends TxAccountingAggregateArgs> = {
        [P in keyof T & keyof AggregateTxAccounting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTxAccounting[P]>
      : GetScalarType<T[P], AggregateTxAccounting[P]>
  }




  export type TxAccountingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxAccountingWhereInput
    orderBy?: TxAccountingOrderByWithAggregationInput | TxAccountingOrderByWithAggregationInput[]
    by: TxAccountingScalarFieldEnum[] | TxAccountingScalarFieldEnum
    having?: TxAccountingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TxAccountingCountAggregateInputType | true
    _avg?: TxAccountingAvgAggregateInputType
    _sum?: TxAccountingSumAggregateInputType
    _min?: TxAccountingMinAggregateInputType
    _max?: TxAccountingMaxAggregateInputType
  }

  export type TxAccountingGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    title: string
    note: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date
    billId: string | null
    _count: TxAccountingCountAggregateOutputType | null
    _avg: TxAccountingAvgAggregateOutputType | null
    _sum: TxAccountingSumAggregateOutputType | null
    _min: TxAccountingMinAggregateOutputType | null
    _max: TxAccountingMaxAggregateOutputType | null
  }

  type GetTxAccountingGroupByPayload<T extends TxAccountingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TxAccountingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TxAccountingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TxAccountingGroupByOutputType[P]>
            : GetScalarType<T[P], TxAccountingGroupByOutputType[P]>
        }
      >
    >


  export type TxAccountingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txAccounting"]>

  export type TxAccountingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txAccounting"]>

  export type TxAccountingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }, ExtArgs["result"]["txAccounting"]>

  export type TxAccountingSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    note?: boolean
    paymentMethod?: boolean
    paymentAmount?: boolean
    date?: boolean
    billId?: boolean
  }

  export type TxAccountingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "note" | "paymentMethod" | "paymentAmount" | "date" | "billId", ExtArgs["result"]["txAccounting"]>

  export type $TxAccountingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TxAccounting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      title: string
      note: string | null
      paymentMethod: $Enums.PaymentMethod
      paymentAmount: number
      date: Date
      billId: string | null
    }, ExtArgs["result"]["txAccounting"]>
    composites: {}
  }

  type TxAccountingGetPayload<S extends boolean | null | undefined | TxAccountingDefaultArgs> = $Result.GetResult<Prisma.$TxAccountingPayload, S>

  type TxAccountingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TxAccountingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TxAccountingCountAggregateInputType | true
    }

  export interface TxAccountingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TxAccounting'], meta: { name: 'TxAccounting' } }
    /**
     * Find zero or one TxAccounting that matches the filter.
     * @param {TxAccountingFindUniqueArgs} args - Arguments to find a TxAccounting
     * @example
     * // Get one TxAccounting
     * const txAccounting = await prisma.txAccounting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TxAccountingFindUniqueArgs>(args: SelectSubset<T, TxAccountingFindUniqueArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TxAccounting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TxAccountingFindUniqueOrThrowArgs} args - Arguments to find a TxAccounting
     * @example
     * // Get one TxAccounting
     * const txAccounting = await prisma.txAccounting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TxAccountingFindUniqueOrThrowArgs>(args: SelectSubset<T, TxAccountingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxAccounting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingFindFirstArgs} args - Arguments to find a TxAccounting
     * @example
     * // Get one TxAccounting
     * const txAccounting = await prisma.txAccounting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TxAccountingFindFirstArgs>(args?: SelectSubset<T, TxAccountingFindFirstArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxAccounting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingFindFirstOrThrowArgs} args - Arguments to find a TxAccounting
     * @example
     * // Get one TxAccounting
     * const txAccounting = await prisma.txAccounting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TxAccountingFindFirstOrThrowArgs>(args?: SelectSubset<T, TxAccountingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TxAccountings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TxAccountings
     * const txAccountings = await prisma.txAccounting.findMany()
     * 
     * // Get first 10 TxAccountings
     * const txAccountings = await prisma.txAccounting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const txAccountingWithIdOnly = await prisma.txAccounting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TxAccountingFindManyArgs>(args?: SelectSubset<T, TxAccountingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TxAccounting.
     * @param {TxAccountingCreateArgs} args - Arguments to create a TxAccounting.
     * @example
     * // Create one TxAccounting
     * const TxAccounting = await prisma.txAccounting.create({
     *   data: {
     *     // ... data to create a TxAccounting
     *   }
     * })
     * 
     */
    create<T extends TxAccountingCreateArgs>(args: SelectSubset<T, TxAccountingCreateArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TxAccountings.
     * @param {TxAccountingCreateManyArgs} args - Arguments to create many TxAccountings.
     * @example
     * // Create many TxAccountings
     * const txAccounting = await prisma.txAccounting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TxAccountingCreateManyArgs>(args?: SelectSubset<T, TxAccountingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TxAccountings and returns the data saved in the database.
     * @param {TxAccountingCreateManyAndReturnArgs} args - Arguments to create many TxAccountings.
     * @example
     * // Create many TxAccountings
     * const txAccounting = await prisma.txAccounting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TxAccountings and only return the `id`
     * const txAccountingWithIdOnly = await prisma.txAccounting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TxAccountingCreateManyAndReturnArgs>(args?: SelectSubset<T, TxAccountingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TxAccounting.
     * @param {TxAccountingDeleteArgs} args - Arguments to delete one TxAccounting.
     * @example
     * // Delete one TxAccounting
     * const TxAccounting = await prisma.txAccounting.delete({
     *   where: {
     *     // ... filter to delete one TxAccounting
     *   }
     * })
     * 
     */
    delete<T extends TxAccountingDeleteArgs>(args: SelectSubset<T, TxAccountingDeleteArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TxAccounting.
     * @param {TxAccountingUpdateArgs} args - Arguments to update one TxAccounting.
     * @example
     * // Update one TxAccounting
     * const txAccounting = await prisma.txAccounting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TxAccountingUpdateArgs>(args: SelectSubset<T, TxAccountingUpdateArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TxAccountings.
     * @param {TxAccountingDeleteManyArgs} args - Arguments to filter TxAccountings to delete.
     * @example
     * // Delete a few TxAccountings
     * const { count } = await prisma.txAccounting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TxAccountingDeleteManyArgs>(args?: SelectSubset<T, TxAccountingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxAccountings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TxAccountings
     * const txAccounting = await prisma.txAccounting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TxAccountingUpdateManyArgs>(args: SelectSubset<T, TxAccountingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxAccountings and returns the data updated in the database.
     * @param {TxAccountingUpdateManyAndReturnArgs} args - Arguments to update many TxAccountings.
     * @example
     * // Update many TxAccountings
     * const txAccounting = await prisma.txAccounting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TxAccountings and only return the `id`
     * const txAccountingWithIdOnly = await prisma.txAccounting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TxAccountingUpdateManyAndReturnArgs>(args: SelectSubset<T, TxAccountingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TxAccounting.
     * @param {TxAccountingUpsertArgs} args - Arguments to update or create a TxAccounting.
     * @example
     * // Update or create a TxAccounting
     * const txAccounting = await prisma.txAccounting.upsert({
     *   create: {
     *     // ... data to create a TxAccounting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TxAccounting we want to update
     *   }
     * })
     */
    upsert<T extends TxAccountingUpsertArgs>(args: SelectSubset<T, TxAccountingUpsertArgs<ExtArgs>>): Prisma__TxAccountingClient<$Result.GetResult<Prisma.$TxAccountingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TxAccountings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingCountArgs} args - Arguments to filter TxAccountings to count.
     * @example
     * // Count the number of TxAccountings
     * const count = await prisma.txAccounting.count({
     *   where: {
     *     // ... the filter for the TxAccountings we want to count
     *   }
     * })
    **/
    count<T extends TxAccountingCountArgs>(
      args?: Subset<T, TxAccountingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TxAccountingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TxAccounting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TxAccountingAggregateArgs>(args: Subset<T, TxAccountingAggregateArgs>): Prisma.PrismaPromise<GetTxAccountingAggregateType<T>>

    /**
     * Group by TxAccounting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxAccountingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TxAccountingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TxAccountingGroupByArgs['orderBy'] }
        : { orderBy?: TxAccountingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TxAccountingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTxAccountingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TxAccounting model
   */
  readonly fields: TxAccountingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TxAccounting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TxAccountingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TxAccounting model
   */
  interface TxAccountingFieldRefs {
    readonly id: FieldRef<"TxAccounting", 'Int'>
    readonly type: FieldRef<"TxAccounting", 'TransactionType'>
    readonly title: FieldRef<"TxAccounting", 'String'>
    readonly note: FieldRef<"TxAccounting", 'String'>
    readonly paymentMethod: FieldRef<"TxAccounting", 'PaymentMethod'>
    readonly paymentAmount: FieldRef<"TxAccounting", 'Int'>
    readonly date: FieldRef<"TxAccounting", 'DateTime'>
    readonly billId: FieldRef<"TxAccounting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TxAccounting findUnique
   */
  export type TxAccountingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter, which TxAccounting to fetch.
     */
    where: TxAccountingWhereUniqueInput
  }

  /**
   * TxAccounting findUniqueOrThrow
   */
  export type TxAccountingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter, which TxAccounting to fetch.
     */
    where: TxAccountingWhereUniqueInput
  }

  /**
   * TxAccounting findFirst
   */
  export type TxAccountingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter, which TxAccounting to fetch.
     */
    where?: TxAccountingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxAccountings to fetch.
     */
    orderBy?: TxAccountingOrderByWithRelationInput | TxAccountingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxAccountings.
     */
    cursor?: TxAccountingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxAccountings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxAccountings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxAccountings.
     */
    distinct?: TxAccountingScalarFieldEnum | TxAccountingScalarFieldEnum[]
  }

  /**
   * TxAccounting findFirstOrThrow
   */
  export type TxAccountingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter, which TxAccounting to fetch.
     */
    where?: TxAccountingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxAccountings to fetch.
     */
    orderBy?: TxAccountingOrderByWithRelationInput | TxAccountingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxAccountings.
     */
    cursor?: TxAccountingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxAccountings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxAccountings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxAccountings.
     */
    distinct?: TxAccountingScalarFieldEnum | TxAccountingScalarFieldEnum[]
  }

  /**
   * TxAccounting findMany
   */
  export type TxAccountingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter, which TxAccountings to fetch.
     */
    where?: TxAccountingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxAccountings to fetch.
     */
    orderBy?: TxAccountingOrderByWithRelationInput | TxAccountingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TxAccountings.
     */
    cursor?: TxAccountingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxAccountings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxAccountings.
     */
    skip?: number
    distinct?: TxAccountingScalarFieldEnum | TxAccountingScalarFieldEnum[]
  }

  /**
   * TxAccounting create
   */
  export type TxAccountingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * The data needed to create a TxAccounting.
     */
    data: XOR<TxAccountingCreateInput, TxAccountingUncheckedCreateInput>
  }

  /**
   * TxAccounting createMany
   */
  export type TxAccountingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TxAccountings.
     */
    data: TxAccountingCreateManyInput | TxAccountingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxAccounting createManyAndReturn
   */
  export type TxAccountingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * The data used to create many TxAccountings.
     */
    data: TxAccountingCreateManyInput | TxAccountingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxAccounting update
   */
  export type TxAccountingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * The data needed to update a TxAccounting.
     */
    data: XOR<TxAccountingUpdateInput, TxAccountingUncheckedUpdateInput>
    /**
     * Choose, which TxAccounting to update.
     */
    where: TxAccountingWhereUniqueInput
  }

  /**
   * TxAccounting updateMany
   */
  export type TxAccountingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TxAccountings.
     */
    data: XOR<TxAccountingUpdateManyMutationInput, TxAccountingUncheckedUpdateManyInput>
    /**
     * Filter which TxAccountings to update
     */
    where?: TxAccountingWhereInput
    /**
     * Limit how many TxAccountings to update.
     */
    limit?: number
  }

  /**
   * TxAccounting updateManyAndReturn
   */
  export type TxAccountingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * The data used to update TxAccountings.
     */
    data: XOR<TxAccountingUpdateManyMutationInput, TxAccountingUncheckedUpdateManyInput>
    /**
     * Filter which TxAccountings to update
     */
    where?: TxAccountingWhereInput
    /**
     * Limit how many TxAccountings to update.
     */
    limit?: number
  }

  /**
   * TxAccounting upsert
   */
  export type TxAccountingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * The filter to search for the TxAccounting to update in case it exists.
     */
    where: TxAccountingWhereUniqueInput
    /**
     * In case the TxAccounting found by the `where` argument doesn't exist, create a new TxAccounting with this data.
     */
    create: XOR<TxAccountingCreateInput, TxAccountingUncheckedCreateInput>
    /**
     * In case the TxAccounting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TxAccountingUpdateInput, TxAccountingUncheckedUpdateInput>
  }

  /**
   * TxAccounting delete
   */
  export type TxAccountingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
    /**
     * Filter which TxAccounting to delete.
     */
    where: TxAccountingWhereUniqueInput
  }

  /**
   * TxAccounting deleteMany
   */
  export type TxAccountingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxAccountings to delete
     */
    where?: TxAccountingWhereInput
    /**
     * Limit how many TxAccountings to delete.
     */
    limit?: number
  }

  /**
   * TxAccounting without action
   */
  export type TxAccountingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxAccounting
     */
    select?: TxAccountingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxAccounting
     */
    omit?: TxAccountingOmit<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    kpi: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    kpi: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    title: number
    description: number
    kpi: number
    startDate: number
    endDate: number
    status: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    kpi?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    kpi?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    kpi?: true
    startDate?: true
    endDate?: true
    status?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    title: string
    description: string | null
    kpi: string | null
    startDate: Date
    endDate: Date
    status: string
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    kpi?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    activities?: boolean | Campaign$activitiesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    kpi?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    kpi?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    kpi?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "kpi" | "startDate" | "endDate" | "status", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Campaign$activitiesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      activities: Prisma.$ActivityMarketingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      kpi: string | null
      startDate: Date
      endDate: Date
      status: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends Campaign$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly kpi: FieldRef<"Campaign", 'String'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly status: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.activities
   */
  export type Campaign$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    where?: ActivityMarketingWhereInput
    orderBy?: ActivityMarketingOrderByWithRelationInput | ActivityMarketingOrderByWithRelationInput[]
    cursor?: ActivityMarketingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityMarketingScalarFieldEnum | ActivityMarketingScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model ActivityMarketing
   */

  export type AggregateActivityMarketing = {
    _count: ActivityMarketingCountAggregateOutputType | null
    _avg: ActivityMarketingAvgAggregateOutputType | null
    _sum: ActivityMarketingSumAggregateOutputType | null
    _min: ActivityMarketingMinAggregateOutputType | null
    _max: ActivityMarketingMaxAggregateOutputType | null
  }

  export type ActivityMarketingAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type ActivityMarketingSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type ActivityMarketingMinAggregateOutputType = {
    id: number | null
    username: string | null
    campaignId: number | null
    title: string | null
    description: string | null
    date: Date | null
  }

  export type ActivityMarketingMaxAggregateOutputType = {
    id: number | null
    username: string | null
    campaignId: number | null
    title: string | null
    description: string | null
    date: Date | null
  }

  export type ActivityMarketingCountAggregateOutputType = {
    id: number
    username: number
    campaignId: number
    title: number
    description: number
    date: number
    _all: number
  }


  export type ActivityMarketingAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type ActivityMarketingSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type ActivityMarketingMinAggregateInputType = {
    id?: true
    username?: true
    campaignId?: true
    title?: true
    description?: true
    date?: true
  }

  export type ActivityMarketingMaxAggregateInputType = {
    id?: true
    username?: true
    campaignId?: true
    title?: true
    description?: true
    date?: true
  }

  export type ActivityMarketingCountAggregateInputType = {
    id?: true
    username?: true
    campaignId?: true
    title?: true
    description?: true
    date?: true
    _all?: true
  }

  export type ActivityMarketingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityMarketing to aggregate.
     */
    where?: ActivityMarketingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMarketings to fetch.
     */
    orderBy?: ActivityMarketingOrderByWithRelationInput | ActivityMarketingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityMarketingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMarketings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMarketings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityMarketings
    **/
    _count?: true | ActivityMarketingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityMarketingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityMarketingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMarketingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMarketingMaxAggregateInputType
  }

  export type GetActivityMarketingAggregateType<T extends ActivityMarketingAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityMarketing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityMarketing[P]>
      : GetScalarType<T[P], AggregateActivityMarketing[P]>
  }




  export type ActivityMarketingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityMarketingWhereInput
    orderBy?: ActivityMarketingOrderByWithAggregationInput | ActivityMarketingOrderByWithAggregationInput[]
    by: ActivityMarketingScalarFieldEnum[] | ActivityMarketingScalarFieldEnum
    having?: ActivityMarketingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityMarketingCountAggregateInputType | true
    _avg?: ActivityMarketingAvgAggregateInputType
    _sum?: ActivityMarketingSumAggregateInputType
    _min?: ActivityMarketingMinAggregateInputType
    _max?: ActivityMarketingMaxAggregateInputType
  }

  export type ActivityMarketingGroupByOutputType = {
    id: number
    username: string
    campaignId: number | null
    title: string
    description: string | null
    date: Date
    _count: ActivityMarketingCountAggregateOutputType | null
    _avg: ActivityMarketingAvgAggregateOutputType | null
    _sum: ActivityMarketingSumAggregateOutputType | null
    _min: ActivityMarketingMinAggregateOutputType | null
    _max: ActivityMarketingMaxAggregateOutputType | null
  }

  type GetActivityMarketingGroupByPayload<T extends ActivityMarketingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityMarketingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityMarketingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityMarketingGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityMarketingGroupByOutputType[P]>
        }
      >
    >


  export type ActivityMarketingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    campaignId?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["activityMarketing"]>

  export type ActivityMarketingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    campaignId?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["activityMarketing"]>

  export type ActivityMarketingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    campaignId?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["activityMarketing"]>

  export type ActivityMarketingSelectScalar = {
    id?: boolean
    username?: boolean
    campaignId?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
  }

  export type ActivityMarketingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "campaignId" | "title" | "description" | "date", ExtArgs["result"]["activityMarketing"]>
  export type ActivityMarketingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }
  export type ActivityMarketingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }
  export type ActivityMarketingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ActivityMarketing$campaignArgs<ExtArgs>
  }

  export type $ActivityMarketingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityMarketing"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      campaignId: number | null
      title: string
      description: string | null
      date: Date
    }, ExtArgs["result"]["activityMarketing"]>
    composites: {}
  }

  type ActivityMarketingGetPayload<S extends boolean | null | undefined | ActivityMarketingDefaultArgs> = $Result.GetResult<Prisma.$ActivityMarketingPayload, S>

  type ActivityMarketingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityMarketingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityMarketingCountAggregateInputType | true
    }

  export interface ActivityMarketingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityMarketing'], meta: { name: 'ActivityMarketing' } }
    /**
     * Find zero or one ActivityMarketing that matches the filter.
     * @param {ActivityMarketingFindUniqueArgs} args - Arguments to find a ActivityMarketing
     * @example
     * // Get one ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityMarketingFindUniqueArgs>(args: SelectSubset<T, ActivityMarketingFindUniqueArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityMarketing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityMarketingFindUniqueOrThrowArgs} args - Arguments to find a ActivityMarketing
     * @example
     * // Get one ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityMarketingFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityMarketingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityMarketing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingFindFirstArgs} args - Arguments to find a ActivityMarketing
     * @example
     * // Get one ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityMarketingFindFirstArgs>(args?: SelectSubset<T, ActivityMarketingFindFirstArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityMarketing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingFindFirstOrThrowArgs} args - Arguments to find a ActivityMarketing
     * @example
     * // Get one ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityMarketingFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityMarketingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityMarketings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityMarketings
     * const activityMarketings = await prisma.activityMarketing.findMany()
     * 
     * // Get first 10 ActivityMarketings
     * const activityMarketings = await prisma.activityMarketing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityMarketingWithIdOnly = await prisma.activityMarketing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityMarketingFindManyArgs>(args?: SelectSubset<T, ActivityMarketingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityMarketing.
     * @param {ActivityMarketingCreateArgs} args - Arguments to create a ActivityMarketing.
     * @example
     * // Create one ActivityMarketing
     * const ActivityMarketing = await prisma.activityMarketing.create({
     *   data: {
     *     // ... data to create a ActivityMarketing
     *   }
     * })
     * 
     */
    create<T extends ActivityMarketingCreateArgs>(args: SelectSubset<T, ActivityMarketingCreateArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityMarketings.
     * @param {ActivityMarketingCreateManyArgs} args - Arguments to create many ActivityMarketings.
     * @example
     * // Create many ActivityMarketings
     * const activityMarketing = await prisma.activityMarketing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityMarketingCreateManyArgs>(args?: SelectSubset<T, ActivityMarketingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityMarketings and returns the data saved in the database.
     * @param {ActivityMarketingCreateManyAndReturnArgs} args - Arguments to create many ActivityMarketings.
     * @example
     * // Create many ActivityMarketings
     * const activityMarketing = await prisma.activityMarketing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityMarketings and only return the `id`
     * const activityMarketingWithIdOnly = await prisma.activityMarketing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityMarketingCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityMarketingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityMarketing.
     * @param {ActivityMarketingDeleteArgs} args - Arguments to delete one ActivityMarketing.
     * @example
     * // Delete one ActivityMarketing
     * const ActivityMarketing = await prisma.activityMarketing.delete({
     *   where: {
     *     // ... filter to delete one ActivityMarketing
     *   }
     * })
     * 
     */
    delete<T extends ActivityMarketingDeleteArgs>(args: SelectSubset<T, ActivityMarketingDeleteArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityMarketing.
     * @param {ActivityMarketingUpdateArgs} args - Arguments to update one ActivityMarketing.
     * @example
     * // Update one ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityMarketingUpdateArgs>(args: SelectSubset<T, ActivityMarketingUpdateArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityMarketings.
     * @param {ActivityMarketingDeleteManyArgs} args - Arguments to filter ActivityMarketings to delete.
     * @example
     * // Delete a few ActivityMarketings
     * const { count } = await prisma.activityMarketing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityMarketingDeleteManyArgs>(args?: SelectSubset<T, ActivityMarketingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityMarketings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityMarketings
     * const activityMarketing = await prisma.activityMarketing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityMarketingUpdateManyArgs>(args: SelectSubset<T, ActivityMarketingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityMarketings and returns the data updated in the database.
     * @param {ActivityMarketingUpdateManyAndReturnArgs} args - Arguments to update many ActivityMarketings.
     * @example
     * // Update many ActivityMarketings
     * const activityMarketing = await prisma.activityMarketing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityMarketings and only return the `id`
     * const activityMarketingWithIdOnly = await prisma.activityMarketing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityMarketingUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityMarketingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityMarketing.
     * @param {ActivityMarketingUpsertArgs} args - Arguments to update or create a ActivityMarketing.
     * @example
     * // Update or create a ActivityMarketing
     * const activityMarketing = await prisma.activityMarketing.upsert({
     *   create: {
     *     // ... data to create a ActivityMarketing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityMarketing we want to update
     *   }
     * })
     */
    upsert<T extends ActivityMarketingUpsertArgs>(args: SelectSubset<T, ActivityMarketingUpsertArgs<ExtArgs>>): Prisma__ActivityMarketingClient<$Result.GetResult<Prisma.$ActivityMarketingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityMarketings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingCountArgs} args - Arguments to filter ActivityMarketings to count.
     * @example
     * // Count the number of ActivityMarketings
     * const count = await prisma.activityMarketing.count({
     *   where: {
     *     // ... the filter for the ActivityMarketings we want to count
     *   }
     * })
    **/
    count<T extends ActivityMarketingCountArgs>(
      args?: Subset<T, ActivityMarketingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityMarketingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityMarketing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityMarketingAggregateArgs>(args: Subset<T, ActivityMarketingAggregateArgs>): Prisma.PrismaPromise<GetActivityMarketingAggregateType<T>>

    /**
     * Group by ActivityMarketing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMarketingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityMarketingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityMarketingGroupByArgs['orderBy'] }
        : { orderBy?: ActivityMarketingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityMarketingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityMarketingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityMarketing model
   */
  readonly fields: ActivityMarketingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityMarketing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityMarketingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends ActivityMarketing$campaignArgs<ExtArgs> = {}>(args?: Subset<T, ActivityMarketing$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityMarketing model
   */
  interface ActivityMarketingFieldRefs {
    readonly id: FieldRef<"ActivityMarketing", 'Int'>
    readonly username: FieldRef<"ActivityMarketing", 'String'>
    readonly campaignId: FieldRef<"ActivityMarketing", 'Int'>
    readonly title: FieldRef<"ActivityMarketing", 'String'>
    readonly description: FieldRef<"ActivityMarketing", 'String'>
    readonly date: FieldRef<"ActivityMarketing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityMarketing findUnique
   */
  export type ActivityMarketingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMarketing to fetch.
     */
    where: ActivityMarketingWhereUniqueInput
  }

  /**
   * ActivityMarketing findUniqueOrThrow
   */
  export type ActivityMarketingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMarketing to fetch.
     */
    where: ActivityMarketingWhereUniqueInput
  }

  /**
   * ActivityMarketing findFirst
   */
  export type ActivityMarketingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMarketing to fetch.
     */
    where?: ActivityMarketingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMarketings to fetch.
     */
    orderBy?: ActivityMarketingOrderByWithRelationInput | ActivityMarketingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityMarketings.
     */
    cursor?: ActivityMarketingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMarketings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMarketings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityMarketings.
     */
    distinct?: ActivityMarketingScalarFieldEnum | ActivityMarketingScalarFieldEnum[]
  }

  /**
   * ActivityMarketing findFirstOrThrow
   */
  export type ActivityMarketingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMarketing to fetch.
     */
    where?: ActivityMarketingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMarketings to fetch.
     */
    orderBy?: ActivityMarketingOrderByWithRelationInput | ActivityMarketingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityMarketings.
     */
    cursor?: ActivityMarketingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMarketings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMarketings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityMarketings.
     */
    distinct?: ActivityMarketingScalarFieldEnum | ActivityMarketingScalarFieldEnum[]
  }

  /**
   * ActivityMarketing findMany
   */
  export type ActivityMarketingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMarketings to fetch.
     */
    where?: ActivityMarketingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMarketings to fetch.
     */
    orderBy?: ActivityMarketingOrderByWithRelationInput | ActivityMarketingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityMarketings.
     */
    cursor?: ActivityMarketingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMarketings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMarketings.
     */
    skip?: number
    distinct?: ActivityMarketingScalarFieldEnum | ActivityMarketingScalarFieldEnum[]
  }

  /**
   * ActivityMarketing create
   */
  export type ActivityMarketingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityMarketing.
     */
    data: XOR<ActivityMarketingCreateInput, ActivityMarketingUncheckedCreateInput>
  }

  /**
   * ActivityMarketing createMany
   */
  export type ActivityMarketingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityMarketings.
     */
    data: ActivityMarketingCreateManyInput | ActivityMarketingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityMarketing createManyAndReturn
   */
  export type ActivityMarketingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityMarketings.
     */
    data: ActivityMarketingCreateManyInput | ActivityMarketingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityMarketing update
   */
  export type ActivityMarketingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityMarketing.
     */
    data: XOR<ActivityMarketingUpdateInput, ActivityMarketingUncheckedUpdateInput>
    /**
     * Choose, which ActivityMarketing to update.
     */
    where: ActivityMarketingWhereUniqueInput
  }

  /**
   * ActivityMarketing updateMany
   */
  export type ActivityMarketingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityMarketings.
     */
    data: XOR<ActivityMarketingUpdateManyMutationInput, ActivityMarketingUncheckedUpdateManyInput>
    /**
     * Filter which ActivityMarketings to update
     */
    where?: ActivityMarketingWhereInput
    /**
     * Limit how many ActivityMarketings to update.
     */
    limit?: number
  }

  /**
   * ActivityMarketing updateManyAndReturn
   */
  export type ActivityMarketingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * The data used to update ActivityMarketings.
     */
    data: XOR<ActivityMarketingUpdateManyMutationInput, ActivityMarketingUncheckedUpdateManyInput>
    /**
     * Filter which ActivityMarketings to update
     */
    where?: ActivityMarketingWhereInput
    /**
     * Limit how many ActivityMarketings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityMarketing upsert
   */
  export type ActivityMarketingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityMarketing to update in case it exists.
     */
    where: ActivityMarketingWhereUniqueInput
    /**
     * In case the ActivityMarketing found by the `where` argument doesn't exist, create a new ActivityMarketing with this data.
     */
    create: XOR<ActivityMarketingCreateInput, ActivityMarketingUncheckedCreateInput>
    /**
     * In case the ActivityMarketing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityMarketingUpdateInput, ActivityMarketingUncheckedUpdateInput>
  }

  /**
   * ActivityMarketing delete
   */
  export type ActivityMarketingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
    /**
     * Filter which ActivityMarketing to delete.
     */
    where: ActivityMarketingWhereUniqueInput
  }

  /**
   * ActivityMarketing deleteMany
   */
  export type ActivityMarketingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityMarketings to delete
     */
    where?: ActivityMarketingWhereInput
    /**
     * Limit how many ActivityMarketings to delete.
     */
    limit?: number
  }

  /**
   * ActivityMarketing.campaign
   */
  export type ActivityMarketing$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * ActivityMarketing without action
   */
  export type ActivityMarketingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMarketing
     */
    select?: ActivityMarketingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMarketing
     */
    omit?: ActivityMarketingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMarketingInclude<ExtArgs> | null
  }


  /**
   * Model CanteenItem
   */

  export type AggregateCanteenItem = {
    _count: CanteenItemCountAggregateOutputType | null
    _avg: CanteenItemAvgAggregateOutputType | null
    _sum: CanteenItemSumAggregateOutputType | null
    _min: CanteenItemMinAggregateOutputType | null
    _max: CanteenItemMaxAggregateOutputType | null
  }

  export type CanteenItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type CanteenItemSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type CanteenItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanteenItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CanteenItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CanteenItemAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type CanteenItemSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type CanteenItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanteenItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CanteenItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CanteenItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanteenItem to aggregate.
     */
    where?: CanteenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenItems to fetch.
     */
    orderBy?: CanteenItemOrderByWithRelationInput | CanteenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanteenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CanteenItems
    **/
    _count?: true | CanteenItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CanteenItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CanteenItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanteenItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanteenItemMaxAggregateInputType
  }

  export type GetCanteenItemAggregateType<T extends CanteenItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCanteenItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanteenItem[P]>
      : GetScalarType<T[P], AggregateCanteenItem[P]>
  }




  export type CanteenItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanteenItemWhereInput
    orderBy?: CanteenItemOrderByWithAggregationInput | CanteenItemOrderByWithAggregationInput[]
    by: CanteenItemScalarFieldEnum[] | CanteenItemScalarFieldEnum
    having?: CanteenItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanteenItemCountAggregateInputType | true
    _avg?: CanteenItemAvgAggregateInputType
    _sum?: CanteenItemSumAggregateInputType
    _min?: CanteenItemMinAggregateInputType
    _max?: CanteenItemMaxAggregateInputType
  }

  export type CanteenItemGroupByOutputType = {
    id: number
    name: string
    price: number
    stock: number
    createdAt: Date
    updatedAt: Date
    _count: CanteenItemCountAggregateOutputType | null
    _avg: CanteenItemAvgAggregateOutputType | null
    _sum: CanteenItemSumAggregateOutputType | null
    _min: CanteenItemMinAggregateOutputType | null
    _max: CanteenItemMaxAggregateOutputType | null
  }

  type GetCanteenItemGroupByPayload<T extends CanteenItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanteenItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanteenItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanteenItemGroupByOutputType[P]>
            : GetScalarType<T[P], CanteenItemGroupByOutputType[P]>
        }
      >
    >


  export type CanteenItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    txCanteens?: boolean | CanteenItem$txCanteensArgs<ExtArgs>
    _count?: boolean | CanteenItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canteenItem"]>

  export type CanteenItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["canteenItem"]>

  export type CanteenItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["canteenItem"]>

  export type CanteenItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CanteenItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "stock" | "createdAt" | "updatedAt", ExtArgs["result"]["canteenItem"]>
  export type CanteenItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    txCanteens?: boolean | CanteenItem$txCanteensArgs<ExtArgs>
    _count?: boolean | CanteenItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CanteenItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CanteenItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CanteenItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CanteenItem"
    objects: {
      txCanteens: Prisma.$TxCanteenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      stock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["canteenItem"]>
    composites: {}
  }

  type CanteenItemGetPayload<S extends boolean | null | undefined | CanteenItemDefaultArgs> = $Result.GetResult<Prisma.$CanteenItemPayload, S>

  type CanteenItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanteenItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanteenItemCountAggregateInputType | true
    }

  export interface CanteenItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CanteenItem'], meta: { name: 'CanteenItem' } }
    /**
     * Find zero or one CanteenItem that matches the filter.
     * @param {CanteenItemFindUniqueArgs} args - Arguments to find a CanteenItem
     * @example
     * // Get one CanteenItem
     * const canteenItem = await prisma.canteenItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanteenItemFindUniqueArgs>(args: SelectSubset<T, CanteenItemFindUniqueArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CanteenItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanteenItemFindUniqueOrThrowArgs} args - Arguments to find a CanteenItem
     * @example
     * // Get one CanteenItem
     * const canteenItem = await prisma.canteenItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanteenItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CanteenItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanteenItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemFindFirstArgs} args - Arguments to find a CanteenItem
     * @example
     * // Get one CanteenItem
     * const canteenItem = await prisma.canteenItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanteenItemFindFirstArgs>(args?: SelectSubset<T, CanteenItemFindFirstArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanteenItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemFindFirstOrThrowArgs} args - Arguments to find a CanteenItem
     * @example
     * // Get one CanteenItem
     * const canteenItem = await prisma.canteenItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanteenItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CanteenItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CanteenItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CanteenItems
     * const canteenItems = await prisma.canteenItem.findMany()
     * 
     * // Get first 10 CanteenItems
     * const canteenItems = await prisma.canteenItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const canteenItemWithIdOnly = await prisma.canteenItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CanteenItemFindManyArgs>(args?: SelectSubset<T, CanteenItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CanteenItem.
     * @param {CanteenItemCreateArgs} args - Arguments to create a CanteenItem.
     * @example
     * // Create one CanteenItem
     * const CanteenItem = await prisma.canteenItem.create({
     *   data: {
     *     // ... data to create a CanteenItem
     *   }
     * })
     * 
     */
    create<T extends CanteenItemCreateArgs>(args: SelectSubset<T, CanteenItemCreateArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CanteenItems.
     * @param {CanteenItemCreateManyArgs} args - Arguments to create many CanteenItems.
     * @example
     * // Create many CanteenItems
     * const canteenItem = await prisma.canteenItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanteenItemCreateManyArgs>(args?: SelectSubset<T, CanteenItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CanteenItems and returns the data saved in the database.
     * @param {CanteenItemCreateManyAndReturnArgs} args - Arguments to create many CanteenItems.
     * @example
     * // Create many CanteenItems
     * const canteenItem = await prisma.canteenItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CanteenItems and only return the `id`
     * const canteenItemWithIdOnly = await prisma.canteenItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanteenItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CanteenItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CanteenItem.
     * @param {CanteenItemDeleteArgs} args - Arguments to delete one CanteenItem.
     * @example
     * // Delete one CanteenItem
     * const CanteenItem = await prisma.canteenItem.delete({
     *   where: {
     *     // ... filter to delete one CanteenItem
     *   }
     * })
     * 
     */
    delete<T extends CanteenItemDeleteArgs>(args: SelectSubset<T, CanteenItemDeleteArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CanteenItem.
     * @param {CanteenItemUpdateArgs} args - Arguments to update one CanteenItem.
     * @example
     * // Update one CanteenItem
     * const canteenItem = await prisma.canteenItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanteenItemUpdateArgs>(args: SelectSubset<T, CanteenItemUpdateArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CanteenItems.
     * @param {CanteenItemDeleteManyArgs} args - Arguments to filter CanteenItems to delete.
     * @example
     * // Delete a few CanteenItems
     * const { count } = await prisma.canteenItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanteenItemDeleteManyArgs>(args?: SelectSubset<T, CanteenItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanteenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CanteenItems
     * const canteenItem = await prisma.canteenItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanteenItemUpdateManyArgs>(args: SelectSubset<T, CanteenItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanteenItems and returns the data updated in the database.
     * @param {CanteenItemUpdateManyAndReturnArgs} args - Arguments to update many CanteenItems.
     * @example
     * // Update many CanteenItems
     * const canteenItem = await prisma.canteenItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CanteenItems and only return the `id`
     * const canteenItemWithIdOnly = await prisma.canteenItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CanteenItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CanteenItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CanteenItem.
     * @param {CanteenItemUpsertArgs} args - Arguments to update or create a CanteenItem.
     * @example
     * // Update or create a CanteenItem
     * const canteenItem = await prisma.canteenItem.upsert({
     *   create: {
     *     // ... data to create a CanteenItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CanteenItem we want to update
     *   }
     * })
     */
    upsert<T extends CanteenItemUpsertArgs>(args: SelectSubset<T, CanteenItemUpsertArgs<ExtArgs>>): Prisma__CanteenItemClient<$Result.GetResult<Prisma.$CanteenItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CanteenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemCountArgs} args - Arguments to filter CanteenItems to count.
     * @example
     * // Count the number of CanteenItems
     * const count = await prisma.canteenItem.count({
     *   where: {
     *     // ... the filter for the CanteenItems we want to count
     *   }
     * })
    **/
    count<T extends CanteenItemCountArgs>(
      args?: Subset<T, CanteenItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanteenItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CanteenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanteenItemAggregateArgs>(args: Subset<T, CanteenItemAggregateArgs>): Prisma.PrismaPromise<GetCanteenItemAggregateType<T>>

    /**
     * Group by CanteenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanteenItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CanteenItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanteenItemGroupByArgs['orderBy'] }
        : { orderBy?: CanteenItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CanteenItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanteenItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CanteenItem model
   */
  readonly fields: CanteenItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CanteenItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanteenItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    txCanteens<T extends CanteenItem$txCanteensArgs<ExtArgs> = {}>(args?: Subset<T, CanteenItem$txCanteensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxCanteenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CanteenItem model
   */
  interface CanteenItemFieldRefs {
    readonly id: FieldRef<"CanteenItem", 'Int'>
    readonly name: FieldRef<"CanteenItem", 'String'>
    readonly price: FieldRef<"CanteenItem", 'Int'>
    readonly stock: FieldRef<"CanteenItem", 'Int'>
    readonly createdAt: FieldRef<"CanteenItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CanteenItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CanteenItem findUnique
   */
  export type CanteenItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter, which CanteenItem to fetch.
     */
    where: CanteenItemWhereUniqueInput
  }

  /**
   * CanteenItem findUniqueOrThrow
   */
  export type CanteenItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter, which CanteenItem to fetch.
     */
    where: CanteenItemWhereUniqueInput
  }

  /**
   * CanteenItem findFirst
   */
  export type CanteenItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter, which CanteenItem to fetch.
     */
    where?: CanteenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenItems to fetch.
     */
    orderBy?: CanteenItemOrderByWithRelationInput | CanteenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanteenItems.
     */
    cursor?: CanteenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanteenItems.
     */
    distinct?: CanteenItemScalarFieldEnum | CanteenItemScalarFieldEnum[]
  }

  /**
   * CanteenItem findFirstOrThrow
   */
  export type CanteenItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter, which CanteenItem to fetch.
     */
    where?: CanteenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenItems to fetch.
     */
    orderBy?: CanteenItemOrderByWithRelationInput | CanteenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanteenItems.
     */
    cursor?: CanteenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanteenItems.
     */
    distinct?: CanteenItemScalarFieldEnum | CanteenItemScalarFieldEnum[]
  }

  /**
   * CanteenItem findMany
   */
  export type CanteenItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter, which CanteenItems to fetch.
     */
    where?: CanteenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanteenItems to fetch.
     */
    orderBy?: CanteenItemOrderByWithRelationInput | CanteenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CanteenItems.
     */
    cursor?: CanteenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanteenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanteenItems.
     */
    skip?: number
    distinct?: CanteenItemScalarFieldEnum | CanteenItemScalarFieldEnum[]
  }

  /**
   * CanteenItem create
   */
  export type CanteenItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CanteenItem.
     */
    data: XOR<CanteenItemCreateInput, CanteenItemUncheckedCreateInput>
  }

  /**
   * CanteenItem createMany
   */
  export type CanteenItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CanteenItems.
     */
    data: CanteenItemCreateManyInput | CanteenItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CanteenItem createManyAndReturn
   */
  export type CanteenItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * The data used to create many CanteenItems.
     */
    data: CanteenItemCreateManyInput | CanteenItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CanteenItem update
   */
  export type CanteenItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CanteenItem.
     */
    data: XOR<CanteenItemUpdateInput, CanteenItemUncheckedUpdateInput>
    /**
     * Choose, which CanteenItem to update.
     */
    where: CanteenItemWhereUniqueInput
  }

  /**
   * CanteenItem updateMany
   */
  export type CanteenItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CanteenItems.
     */
    data: XOR<CanteenItemUpdateManyMutationInput, CanteenItemUncheckedUpdateManyInput>
    /**
     * Filter which CanteenItems to update
     */
    where?: CanteenItemWhereInput
    /**
     * Limit how many CanteenItems to update.
     */
    limit?: number
  }

  /**
   * CanteenItem updateManyAndReturn
   */
  export type CanteenItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * The data used to update CanteenItems.
     */
    data: XOR<CanteenItemUpdateManyMutationInput, CanteenItemUncheckedUpdateManyInput>
    /**
     * Filter which CanteenItems to update
     */
    where?: CanteenItemWhereInput
    /**
     * Limit how many CanteenItems to update.
     */
    limit?: number
  }

  /**
   * CanteenItem upsert
   */
  export type CanteenItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CanteenItem to update in case it exists.
     */
    where: CanteenItemWhereUniqueInput
    /**
     * In case the CanteenItem found by the `where` argument doesn't exist, create a new CanteenItem with this data.
     */
    create: XOR<CanteenItemCreateInput, CanteenItemUncheckedCreateInput>
    /**
     * In case the CanteenItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanteenItemUpdateInput, CanteenItemUncheckedUpdateInput>
  }

  /**
   * CanteenItem delete
   */
  export type CanteenItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
    /**
     * Filter which CanteenItem to delete.
     */
    where: CanteenItemWhereUniqueInput
  }

  /**
   * CanteenItem deleteMany
   */
  export type CanteenItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanteenItems to delete
     */
    where?: CanteenItemWhereInput
    /**
     * Limit how many CanteenItems to delete.
     */
    limit?: number
  }

  /**
   * CanteenItem.txCanteens
   */
  export type CanteenItem$txCanteensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxCanteen
     */
    select?: TxCanteenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxCanteen
     */
    omit?: TxCanteenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxCanteenInclude<ExtArgs> | null
    where?: TxCanteenWhereInput
    orderBy?: TxCanteenOrderByWithRelationInput | TxCanteenOrderByWithRelationInput[]
    cursor?: TxCanteenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TxCanteenScalarFieldEnum | TxCanteenScalarFieldEnum[]
  }

  /**
   * CanteenItem without action
   */
  export type CanteenItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanteenItem
     */
    select?: CanteenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanteenItem
     */
    omit?: CanteenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanteenItemInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    lastLogin: Date | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    lastLogin: Date | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    role: number
    createdAt: number
    lastLogin: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    username: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    lastLogin: Date | null
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    name?: boolean
    actions?: boolean | User$actionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "role" | "createdAt" | "lastLogin" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | User$actionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      actions: Prisma.$UserActionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      username: string | null
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      lastLogin: Date | null
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends User$actionsArgs<ExtArgs> = {}>(args?: Subset<T, User$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.actions
   */
  export type User$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    where?: UserActionsWhereInput
    orderBy?: UserActionsOrderByWithRelationInput | UserActionsOrderByWithRelationInput[]
    cursor?: UserActionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActionsScalarFieldEnum | UserActionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserActions
   */

  export type AggregateUserActions = {
    _count: UserActionsCountAggregateOutputType | null
    _avg: UserActionsAvgAggregateOutputType | null
    _sum: UserActionsSumAggregateOutputType | null
    _min: UserActionsMinAggregateOutputType | null
    _max: UserActionsMaxAggregateOutputType | null
  }

  export type UserActionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserActionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserActionsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    time: Date | null
    description: string | null
  }

  export type UserActionsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    time: Date | null
    description: string | null
  }

  export type UserActionsCountAggregateOutputType = {
    id: number
    userId: number
    time: number
    description: number
    _all: number
  }


  export type UserActionsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserActionsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserActionsMinAggregateInputType = {
    id?: true
    userId?: true
    time?: true
    description?: true
  }

  export type UserActionsMaxAggregateInputType = {
    id?: true
    userId?: true
    time?: true
    description?: true
  }

  export type UserActionsCountAggregateInputType = {
    id?: true
    userId?: true
    time?: true
    description?: true
    _all?: true
  }

  export type UserActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActions to aggregate.
     */
    where?: UserActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionsOrderByWithRelationInput | UserActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActions
    **/
    _count?: true | UserActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserActionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserActionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActionsMaxAggregateInputType
  }

  export type GetUserActionsAggregateType<T extends UserActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActions[P]>
      : GetScalarType<T[P], AggregateUserActions[P]>
  }




  export type UserActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActionsWhereInput
    orderBy?: UserActionsOrderByWithAggregationInput | UserActionsOrderByWithAggregationInput[]
    by: UserActionsScalarFieldEnum[] | UserActionsScalarFieldEnum
    having?: UserActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActionsCountAggregateInputType | true
    _avg?: UserActionsAvgAggregateInputType
    _sum?: UserActionsSumAggregateInputType
    _min?: UserActionsMinAggregateInputType
    _max?: UserActionsMaxAggregateInputType
  }

  export type UserActionsGroupByOutputType = {
    id: number
    userId: number
    time: Date
    description: string
    _count: UserActionsCountAggregateOutputType | null
    _avg: UserActionsAvgAggregateOutputType | null
    _sum: UserActionsSumAggregateOutputType | null
    _min: UserActionsMinAggregateOutputType | null
    _max: UserActionsMaxAggregateOutputType | null
  }

  type GetUserActionsGroupByPayload<T extends UserActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActionsGroupByOutputType[P]>
            : GetScalarType<T[P], UserActionsGroupByOutputType[P]>
        }
      >
    >


  export type UserActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    time?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActions"]>

  export type UserActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    time?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActions"]>

  export type UserActionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    time?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActions"]>

  export type UserActionsSelectScalar = {
    id?: boolean
    userId?: boolean
    time?: boolean
    description?: boolean
  }

  export type UserActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "time" | "description", ExtArgs["result"]["userActions"]>
  export type UserActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserActionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserActions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      time: Date
      description: string
    }, ExtArgs["result"]["userActions"]>
    composites: {}
  }

  type UserActionsGetPayload<S extends boolean | null | undefined | UserActionsDefaultArgs> = $Result.GetResult<Prisma.$UserActionsPayload, S>

  type UserActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActionsCountAggregateInputType | true
    }

  export interface UserActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserActions'], meta: { name: 'UserActions' } }
    /**
     * Find zero or one UserActions that matches the filter.
     * @param {UserActionsFindUniqueArgs} args - Arguments to find a UserActions
     * @example
     * // Get one UserActions
     * const userActions = await prisma.userActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActionsFindUniqueArgs>(args: SelectSubset<T, UserActionsFindUniqueArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserActionsFindUniqueOrThrowArgs} args - Arguments to find a UserActions
     * @example
     * // Get one UserActions
     * const userActions = await prisma.userActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsFindFirstArgs} args - Arguments to find a UserActions
     * @example
     * // Get one UserActions
     * const userActions = await prisma.userActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActionsFindFirstArgs>(args?: SelectSubset<T, UserActionsFindFirstArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsFindFirstOrThrowArgs} args - Arguments to find a UserActions
     * @example
     * // Get one UserActions
     * const userActions = await prisma.userActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActions
     * const userActions = await prisma.userActions.findMany()
     * 
     * // Get first 10 UserActions
     * const userActions = await prisma.userActions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActionsWithIdOnly = await prisma.userActions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserActionsFindManyArgs>(args?: SelectSubset<T, UserActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserActions.
     * @param {UserActionsCreateArgs} args - Arguments to create a UserActions.
     * @example
     * // Create one UserActions
     * const UserActions = await prisma.userActions.create({
     *   data: {
     *     // ... data to create a UserActions
     *   }
     * })
     * 
     */
    create<T extends UserActionsCreateArgs>(args: SelectSubset<T, UserActionsCreateArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActions.
     * @param {UserActionsCreateManyArgs} args - Arguments to create many UserActions.
     * @example
     * // Create many UserActions
     * const userActions = await prisma.userActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActionsCreateManyArgs>(args?: SelectSubset<T, UserActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserActions and returns the data saved in the database.
     * @param {UserActionsCreateManyAndReturnArgs} args - Arguments to create many UserActions.
     * @example
     * // Create many UserActions
     * const userActions = await prisma.userActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserActions and only return the `id`
     * const userActionsWithIdOnly = await prisma.userActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserActions.
     * @param {UserActionsDeleteArgs} args - Arguments to delete one UserActions.
     * @example
     * // Delete one UserActions
     * const UserActions = await prisma.userActions.delete({
     *   where: {
     *     // ... filter to delete one UserActions
     *   }
     * })
     * 
     */
    delete<T extends UserActionsDeleteArgs>(args: SelectSubset<T, UserActionsDeleteArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserActions.
     * @param {UserActionsUpdateArgs} args - Arguments to update one UserActions.
     * @example
     * // Update one UserActions
     * const userActions = await prisma.userActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActionsUpdateArgs>(args: SelectSubset<T, UserActionsUpdateArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActions.
     * @param {UserActionsDeleteManyArgs} args - Arguments to filter UserActions to delete.
     * @example
     * // Delete a few UserActions
     * const { count } = await prisma.userActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActionsDeleteManyArgs>(args?: SelectSubset<T, UserActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActions
     * const userActions = await prisma.userActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActionsUpdateManyArgs>(args: SelectSubset<T, UserActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActions and returns the data updated in the database.
     * @param {UserActionsUpdateManyAndReturnArgs} args - Arguments to update many UserActions.
     * @example
     * // Update many UserActions
     * const userActions = await prisma.userActions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserActions and only return the `id`
     * const userActionsWithIdOnly = await prisma.userActions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserActionsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserActionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserActions.
     * @param {UserActionsUpsertArgs} args - Arguments to update or create a UserActions.
     * @example
     * // Update or create a UserActions
     * const userActions = await prisma.userActions.upsert({
     *   create: {
     *     // ... data to create a UserActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActions we want to update
     *   }
     * })
     */
    upsert<T extends UserActionsUpsertArgs>(args: SelectSubset<T, UserActionsUpsertArgs<ExtArgs>>): Prisma__UserActionsClient<$Result.GetResult<Prisma.$UserActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsCountArgs} args - Arguments to filter UserActions to count.
     * @example
     * // Count the number of UserActions
     * const count = await prisma.userActions.count({
     *   where: {
     *     // ... the filter for the UserActions we want to count
     *   }
     * })
    **/
    count<T extends UserActionsCountArgs>(
      args?: Subset<T, UserActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserActionsAggregateArgs>(args: Subset<T, UserActionsAggregateArgs>): Prisma.PrismaPromise<GetUserActionsAggregateType<T>>

    /**
     * Group by UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActionsGroupByArgs['orderBy'] }
        : { orderBy?: UserActionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserActions model
   */
  readonly fields: UserActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserActions model
   */
  interface UserActionsFieldRefs {
    readonly id: FieldRef<"UserActions", 'Int'>
    readonly userId: FieldRef<"UserActions", 'Int'>
    readonly time: FieldRef<"UserActions", 'DateTime'>
    readonly description: FieldRef<"UserActions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserActions findUnique
   */
  export type UserActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where: UserActionsWhereUniqueInput
  }

  /**
   * UserActions findUniqueOrThrow
   */
  export type UserActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where: UserActionsWhereUniqueInput
  }

  /**
   * UserActions findFirst
   */
  export type UserActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where?: UserActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionsOrderByWithRelationInput | UserActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActions.
     */
    cursor?: UserActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActions.
     */
    distinct?: UserActionsScalarFieldEnum | UserActionsScalarFieldEnum[]
  }

  /**
   * UserActions findFirstOrThrow
   */
  export type UserActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where?: UserActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionsOrderByWithRelationInput | UserActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActions.
     */
    cursor?: UserActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActions.
     */
    distinct?: UserActionsScalarFieldEnum | UserActionsScalarFieldEnum[]
  }

  /**
   * UserActions findMany
   */
  export type UserActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where?: UserActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionsOrderByWithRelationInput | UserActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActions.
     */
    cursor?: UserActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    distinct?: UserActionsScalarFieldEnum | UserActionsScalarFieldEnum[]
  }

  /**
   * UserActions create
   */
  export type UserActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserActions.
     */
    data: XOR<UserActionsCreateInput, UserActionsUncheckedCreateInput>
  }

  /**
   * UserActions createMany
   */
  export type UserActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActions.
     */
    data: UserActionsCreateManyInput | UserActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserActions createManyAndReturn
   */
  export type UserActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * The data used to create many UserActions.
     */
    data: UserActionsCreateManyInput | UserActionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActions update
   */
  export type UserActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserActions.
     */
    data: XOR<UserActionsUpdateInput, UserActionsUncheckedUpdateInput>
    /**
     * Choose, which UserActions to update.
     */
    where: UserActionsWhereUniqueInput
  }

  /**
   * UserActions updateMany
   */
  export type UserActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActions.
     */
    data: XOR<UserActionsUpdateManyMutationInput, UserActionsUncheckedUpdateManyInput>
    /**
     * Filter which UserActions to update
     */
    where?: UserActionsWhereInput
    /**
     * Limit how many UserActions to update.
     */
    limit?: number
  }

  /**
   * UserActions updateManyAndReturn
   */
  export type UserActionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * The data used to update UserActions.
     */
    data: XOR<UserActionsUpdateManyMutationInput, UserActionsUncheckedUpdateManyInput>
    /**
     * Filter which UserActions to update
     */
    where?: UserActionsWhereInput
    /**
     * Limit how many UserActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActions upsert
   */
  export type UserActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserActions to update in case it exists.
     */
    where: UserActionsWhereUniqueInput
    /**
     * In case the UserActions found by the `where` argument doesn't exist, create a new UserActions with this data.
     */
    create: XOR<UserActionsCreateInput, UserActionsUncheckedCreateInput>
    /**
     * In case the UserActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActionsUpdateInput, UserActionsUncheckedUpdateInput>
  }

  /**
   * UserActions delete
   */
  export type UserActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
    /**
     * Filter which UserActions to delete.
     */
    where: UserActionsWhereUniqueInput
  }

  /**
   * UserActions deleteMany
   */
  export type UserActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActions to delete
     */
    where?: UserActionsWhereInput
    /**
     * Limit how many UserActions to delete.
     */
    limit?: number
  }

  /**
   * UserActions without action
   */
  export type UserActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActions
     */
    select?: UserActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActions
     */
    omit?: UserActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionsInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyReport
   */

  export type AggregateMonthlyReport = {
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  export type MonthlyReportAvgAggregateOutputType = {
    id: number | null
    totalMembers: number | null
    activeMembers: number | null
    expiredMembers: number | null
    newMembers: number | null
    renewals: number | null
    incidentiles: number | null
    incidentilesGym: number | null
    incidentilesClass: number | null
    finishedCampaigns: number | null
    foTotalIncome: number | null
    canteenTotalIncome: number | null
    accountingTotalIncome: number | null
    foTotalExpenses: number | null
    canteenTotalExpenses: number | null
    accountingTotalExpenses: number | null
    netIncome: number | null
    cashBalance: number | null
  }

  export type MonthlyReportSumAggregateOutputType = {
    id: number | null
    totalMembers: number | null
    activeMembers: number | null
    expiredMembers: number | null
    newMembers: number | null
    renewals: number | null
    incidentiles: number | null
    incidentilesGym: number | null
    incidentilesClass: number | null
    finishedCampaigns: number | null
    foTotalIncome: bigint | null
    canteenTotalIncome: bigint | null
    accountingTotalIncome: bigint | null
    foTotalExpenses: bigint | null
    canteenTotalExpenses: bigint | null
    accountingTotalExpenses: bigint | null
    netIncome: bigint | null
    cashBalance: bigint | null
  }

  export type MonthlyReportMinAggregateOutputType = {
    id: number | null
    period: string | null
    displayName: string | null
    totalMembers: number | null
    activeMembers: number | null
    expiredMembers: number | null
    newMembers: number | null
    renewals: number | null
    incidentiles: number | null
    incidentilesGym: number | null
    incidentilesClass: number | null
    finishedCampaigns: number | null
    foTotalIncome: bigint | null
    canteenTotalIncome: bigint | null
    accountingTotalIncome: bigint | null
    foTotalExpenses: bigint | null
    canteenTotalExpenses: bigint | null
    accountingTotalExpenses: bigint | null
    netIncome: bigint | null
    cashBalance: bigint | null
    status: $Enums.ReportStatus | null
    generatedAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyReportMaxAggregateOutputType = {
    id: number | null
    period: string | null
    displayName: string | null
    totalMembers: number | null
    activeMembers: number | null
    expiredMembers: number | null
    newMembers: number | null
    renewals: number | null
    incidentiles: number | null
    incidentilesGym: number | null
    incidentilesClass: number | null
    finishedCampaigns: number | null
    foTotalIncome: bigint | null
    canteenTotalIncome: bigint | null
    accountingTotalIncome: bigint | null
    foTotalExpenses: bigint | null
    canteenTotalExpenses: bigint | null
    accountingTotalExpenses: bigint | null
    netIncome: bigint | null
    cashBalance: bigint | null
    status: $Enums.ReportStatus | null
    generatedAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyReportCountAggregateOutputType = {
    id: number
    period: number
    displayName: number
    totalMembers: number
    activeMembers: number
    expiredMembers: number
    newMembers: number
    renewals: number
    incidentiles: number
    incidentilesGym: number
    incidentilesClass: number
    canteenItemsSold: number
    finishedCampaigns: number
    finishedCampaignNames: number
    finishedCampaignActivities: number
    foTotalIncome: number
    canteenTotalIncome: number
    accountingTotalIncome: number
    foTotalExpenses: number
    canteenTotalExpenses: number
    accountingTotalExpenses: number
    netIncome: number
    cashBalance: number
    status: number
    generatedAt: number
    updatedAt: number
    incClassChartData: number
    incGymChartData: number
    memberChartData: number
    _all: number
  }


  export type MonthlyReportAvgAggregateInputType = {
    id?: true
    totalMembers?: true
    activeMembers?: true
    expiredMembers?: true
    newMembers?: true
    renewals?: true
    incidentiles?: true
    incidentilesGym?: true
    incidentilesClass?: true
    finishedCampaigns?: true
    foTotalIncome?: true
    canteenTotalIncome?: true
    accountingTotalIncome?: true
    foTotalExpenses?: true
    canteenTotalExpenses?: true
    accountingTotalExpenses?: true
    netIncome?: true
    cashBalance?: true
  }

  export type MonthlyReportSumAggregateInputType = {
    id?: true
    totalMembers?: true
    activeMembers?: true
    expiredMembers?: true
    newMembers?: true
    renewals?: true
    incidentiles?: true
    incidentilesGym?: true
    incidentilesClass?: true
    finishedCampaigns?: true
    foTotalIncome?: true
    canteenTotalIncome?: true
    accountingTotalIncome?: true
    foTotalExpenses?: true
    canteenTotalExpenses?: true
    accountingTotalExpenses?: true
    netIncome?: true
    cashBalance?: true
  }

  export type MonthlyReportMinAggregateInputType = {
    id?: true
    period?: true
    displayName?: true
    totalMembers?: true
    activeMembers?: true
    expiredMembers?: true
    newMembers?: true
    renewals?: true
    incidentiles?: true
    incidentilesGym?: true
    incidentilesClass?: true
    finishedCampaigns?: true
    foTotalIncome?: true
    canteenTotalIncome?: true
    accountingTotalIncome?: true
    foTotalExpenses?: true
    canteenTotalExpenses?: true
    accountingTotalExpenses?: true
    netIncome?: true
    cashBalance?: true
    status?: true
    generatedAt?: true
    updatedAt?: true
  }

  export type MonthlyReportMaxAggregateInputType = {
    id?: true
    period?: true
    displayName?: true
    totalMembers?: true
    activeMembers?: true
    expiredMembers?: true
    newMembers?: true
    renewals?: true
    incidentiles?: true
    incidentilesGym?: true
    incidentilesClass?: true
    finishedCampaigns?: true
    foTotalIncome?: true
    canteenTotalIncome?: true
    accountingTotalIncome?: true
    foTotalExpenses?: true
    canteenTotalExpenses?: true
    accountingTotalExpenses?: true
    netIncome?: true
    cashBalance?: true
    status?: true
    generatedAt?: true
    updatedAt?: true
  }

  export type MonthlyReportCountAggregateInputType = {
    id?: true
    period?: true
    displayName?: true
    totalMembers?: true
    activeMembers?: true
    expiredMembers?: true
    newMembers?: true
    renewals?: true
    incidentiles?: true
    incidentilesGym?: true
    incidentilesClass?: true
    canteenItemsSold?: true
    finishedCampaigns?: true
    finishedCampaignNames?: true
    finishedCampaignActivities?: true
    foTotalIncome?: true
    canteenTotalIncome?: true
    accountingTotalIncome?: true
    foTotalExpenses?: true
    canteenTotalExpenses?: true
    accountingTotalExpenses?: true
    netIncome?: true
    cashBalance?: true
    status?: true
    generatedAt?: true
    updatedAt?: true
    incClassChartData?: true
    incGymChartData?: true
    memberChartData?: true
    _all?: true
  }

  export type MonthlyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReport to aggregate.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyReports
    **/
    _count?: true | MonthlyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type GetMonthlyReportAggregateType<T extends MonthlyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyReport[P]>
      : GetScalarType<T[P], AggregateMonthlyReport[P]>
  }




  export type MonthlyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithAggregationInput | MonthlyReportOrderByWithAggregationInput[]
    by: MonthlyReportScalarFieldEnum[] | MonthlyReportScalarFieldEnum
    having?: MonthlyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyReportCountAggregateInputType | true
    _avg?: MonthlyReportAvgAggregateInputType
    _sum?: MonthlyReportSumAggregateInputType
    _min?: MonthlyReportMinAggregateInputType
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type MonthlyReportGroupByOutputType = {
    id: number
    period: string
    displayName: string
    totalMembers: number
    activeMembers: number
    expiredMembers: number
    newMembers: number
    renewals: number
    incidentiles: number
    incidentilesGym: number
    incidentilesClass: number
    canteenItemsSold: JsonValue
    finishedCampaigns: number
    finishedCampaignNames: string[]
    finishedCampaignActivities: string[]
    foTotalIncome: bigint
    canteenTotalIncome: bigint
    accountingTotalIncome: bigint
    foTotalExpenses: bigint
    canteenTotalExpenses: bigint
    accountingTotalExpenses: bigint
    netIncome: bigint
    cashBalance: bigint
    status: $Enums.ReportStatus
    generatedAt: Date
    updatedAt: Date
    incClassChartData: JsonValue
    incGymChartData: JsonValue
    memberChartData: JsonValue
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  type GetMonthlyReportGroupByPayload<T extends MonthlyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    displayName?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    expiredMembers?: boolean
    newMembers?: boolean
    renewals?: boolean
    incidentiles?: boolean
    incidentilesGym?: boolean
    incidentilesClass?: boolean
    canteenItemsSold?: boolean
    finishedCampaigns?: boolean
    finishedCampaignNames?: boolean
    finishedCampaignActivities?: boolean
    foTotalIncome?: boolean
    canteenTotalIncome?: boolean
    accountingTotalIncome?: boolean
    foTotalExpenses?: boolean
    canteenTotalExpenses?: boolean
    accountingTotalExpenses?: boolean
    netIncome?: boolean
    cashBalance?: boolean
    status?: boolean
    generatedAt?: boolean
    updatedAt?: boolean
    incClassChartData?: boolean
    incGymChartData?: boolean
    memberChartData?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    displayName?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    expiredMembers?: boolean
    newMembers?: boolean
    renewals?: boolean
    incidentiles?: boolean
    incidentilesGym?: boolean
    incidentilesClass?: boolean
    canteenItemsSold?: boolean
    finishedCampaigns?: boolean
    finishedCampaignNames?: boolean
    finishedCampaignActivities?: boolean
    foTotalIncome?: boolean
    canteenTotalIncome?: boolean
    accountingTotalIncome?: boolean
    foTotalExpenses?: boolean
    canteenTotalExpenses?: boolean
    accountingTotalExpenses?: boolean
    netIncome?: boolean
    cashBalance?: boolean
    status?: boolean
    generatedAt?: boolean
    updatedAt?: boolean
    incClassChartData?: boolean
    incGymChartData?: boolean
    memberChartData?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    displayName?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    expiredMembers?: boolean
    newMembers?: boolean
    renewals?: boolean
    incidentiles?: boolean
    incidentilesGym?: boolean
    incidentilesClass?: boolean
    canteenItemsSold?: boolean
    finishedCampaigns?: boolean
    finishedCampaignNames?: boolean
    finishedCampaignActivities?: boolean
    foTotalIncome?: boolean
    canteenTotalIncome?: boolean
    accountingTotalIncome?: boolean
    foTotalExpenses?: boolean
    canteenTotalExpenses?: boolean
    accountingTotalExpenses?: boolean
    netIncome?: boolean
    cashBalance?: boolean
    status?: boolean
    generatedAt?: boolean
    updatedAt?: boolean
    incClassChartData?: boolean
    incGymChartData?: boolean
    memberChartData?: boolean
  }, ExtArgs["result"]["monthlyReport"]>

  export type MonthlyReportSelectScalar = {
    id?: boolean
    period?: boolean
    displayName?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    expiredMembers?: boolean
    newMembers?: boolean
    renewals?: boolean
    incidentiles?: boolean
    incidentilesGym?: boolean
    incidentilesClass?: boolean
    canteenItemsSold?: boolean
    finishedCampaigns?: boolean
    finishedCampaignNames?: boolean
    finishedCampaignActivities?: boolean
    foTotalIncome?: boolean
    canteenTotalIncome?: boolean
    accountingTotalIncome?: boolean
    foTotalExpenses?: boolean
    canteenTotalExpenses?: boolean
    accountingTotalExpenses?: boolean
    netIncome?: boolean
    cashBalance?: boolean
    status?: boolean
    generatedAt?: boolean
    updatedAt?: boolean
    incClassChartData?: boolean
    incGymChartData?: boolean
    memberChartData?: boolean
  }

  export type MonthlyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "period" | "displayName" | "totalMembers" | "activeMembers" | "expiredMembers" | "newMembers" | "renewals" | "incidentiles" | "incidentilesGym" | "incidentilesClass" | "canteenItemsSold" | "finishedCampaigns" | "finishedCampaignNames" | "finishedCampaignActivities" | "foTotalIncome" | "canteenTotalIncome" | "accountingTotalIncome" | "foTotalExpenses" | "canteenTotalExpenses" | "accountingTotalExpenses" | "netIncome" | "cashBalance" | "status" | "generatedAt" | "updatedAt" | "incClassChartData" | "incGymChartData" | "memberChartData", ExtArgs["result"]["monthlyReport"]>

  export type $MonthlyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      period: string
      displayName: string
      totalMembers: number
      activeMembers: number
      expiredMembers: number
      newMembers: number
      renewals: number
      incidentiles: number
      incidentilesGym: number
      incidentilesClass: number
      canteenItemsSold: Prisma.JsonValue
      finishedCampaigns: number
      finishedCampaignNames: string[]
      finishedCampaignActivities: string[]
      foTotalIncome: bigint
      canteenTotalIncome: bigint
      accountingTotalIncome: bigint
      foTotalExpenses: bigint
      canteenTotalExpenses: bigint
      accountingTotalExpenses: bigint
      netIncome: bigint
      cashBalance: bigint
      status: $Enums.ReportStatus
      generatedAt: Date
      updatedAt: Date
      incClassChartData: Prisma.JsonValue
      incGymChartData: Prisma.JsonValue
      memberChartData: Prisma.JsonValue
    }, ExtArgs["result"]["monthlyReport"]>
    composites: {}
  }

  type MonthlyReportGetPayload<S extends boolean | null | undefined | MonthlyReportDefaultArgs> = $Result.GetResult<Prisma.$MonthlyReportPayload, S>

  type MonthlyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyReportCountAggregateInputType | true
    }

  export interface MonthlyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyReport'], meta: { name: 'MonthlyReport' } }
    /**
     * Find zero or one MonthlyReport that matches the filter.
     * @param {MonthlyReportFindUniqueArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyReportFindUniqueArgs>(args: SelectSubset<T, MonthlyReportFindUniqueArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyReportFindUniqueOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyReportFindFirstArgs>(args?: SelectSubset<T, MonthlyReportFindFirstArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany()
     * 
     * // Get first 10 MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyReportFindManyArgs>(args?: SelectSubset<T, MonthlyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyReport.
     * @param {MonthlyReportCreateArgs} args - Arguments to create a MonthlyReport.
     * @example
     * // Create one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.create({
     *   data: {
     *     // ... data to create a MonthlyReport
     *   }
     * })
     * 
     */
    create<T extends MonthlyReportCreateArgs>(args: SelectSubset<T, MonthlyReportCreateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyReports.
     * @param {MonthlyReportCreateManyArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyReportCreateManyArgs>(args?: SelectSubset<T, MonthlyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyReports and returns the data saved in the database.
     * @param {MonthlyReportCreateManyAndReturnArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyReports and only return the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyReport.
     * @param {MonthlyReportDeleteArgs} args - Arguments to delete one MonthlyReport.
     * @example
     * // Delete one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.delete({
     *   where: {
     *     // ... filter to delete one MonthlyReport
     *   }
     * })
     * 
     */
    delete<T extends MonthlyReportDeleteArgs>(args: SelectSubset<T, MonthlyReportDeleteArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyReport.
     * @param {MonthlyReportUpdateArgs} args - Arguments to update one MonthlyReport.
     * @example
     * // Update one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyReportUpdateArgs>(args: SelectSubset<T, MonthlyReportUpdateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyReports.
     * @param {MonthlyReportDeleteManyArgs} args - Arguments to filter MonthlyReports to delete.
     * @example
     * // Delete a few MonthlyReports
     * const { count } = await prisma.monthlyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyReportDeleteManyArgs>(args?: SelectSubset<T, MonthlyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyReportUpdateManyArgs>(args: SelectSubset<T, MonthlyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports and returns the data updated in the database.
     * @param {MonthlyReportUpdateManyAndReturnArgs} args - Arguments to update many MonthlyReports.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyReports and only return the `id`
     * const monthlyReportWithIdOnly = await prisma.monthlyReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyReport.
     * @param {MonthlyReportUpsertArgs} args - Arguments to update or create a MonthlyReport.
     * @example
     * // Update or create a MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.upsert({
     *   create: {
     *     // ... data to create a MonthlyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyReportUpsertArgs>(args: SelectSubset<T, MonthlyReportUpsertArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportCountArgs} args - Arguments to filter MonthlyReports to count.
     * @example
     * // Count the number of MonthlyReports
     * const count = await prisma.monthlyReport.count({
     *   where: {
     *     // ... the filter for the MonthlyReports we want to count
     *   }
     * })
    **/
    count<T extends MonthlyReportCountArgs>(
      args?: Subset<T, MonthlyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyReportAggregateArgs>(args: Subset<T, MonthlyReportAggregateArgs>): Prisma.PrismaPromise<GetMonthlyReportAggregateType<T>>

    /**
     * Group by MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyReport model
   */
  readonly fields: MonthlyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyReport model
   */
  interface MonthlyReportFieldRefs {
    readonly id: FieldRef<"MonthlyReport", 'Int'>
    readonly period: FieldRef<"MonthlyReport", 'String'>
    readonly displayName: FieldRef<"MonthlyReport", 'String'>
    readonly totalMembers: FieldRef<"MonthlyReport", 'Int'>
    readonly activeMembers: FieldRef<"MonthlyReport", 'Int'>
    readonly expiredMembers: FieldRef<"MonthlyReport", 'Int'>
    readonly newMembers: FieldRef<"MonthlyReport", 'Int'>
    readonly renewals: FieldRef<"MonthlyReport", 'Int'>
    readonly incidentiles: FieldRef<"MonthlyReport", 'Int'>
    readonly incidentilesGym: FieldRef<"MonthlyReport", 'Int'>
    readonly incidentilesClass: FieldRef<"MonthlyReport", 'Int'>
    readonly canteenItemsSold: FieldRef<"MonthlyReport", 'Json'>
    readonly finishedCampaigns: FieldRef<"MonthlyReport", 'Int'>
    readonly finishedCampaignNames: FieldRef<"MonthlyReport", 'String[]'>
    readonly finishedCampaignActivities: FieldRef<"MonthlyReport", 'String[]'>
    readonly foTotalIncome: FieldRef<"MonthlyReport", 'BigInt'>
    readonly canteenTotalIncome: FieldRef<"MonthlyReport", 'BigInt'>
    readonly accountingTotalIncome: FieldRef<"MonthlyReport", 'BigInt'>
    readonly foTotalExpenses: FieldRef<"MonthlyReport", 'BigInt'>
    readonly canteenTotalExpenses: FieldRef<"MonthlyReport", 'BigInt'>
    readonly accountingTotalExpenses: FieldRef<"MonthlyReport", 'BigInt'>
    readonly netIncome: FieldRef<"MonthlyReport", 'BigInt'>
    readonly cashBalance: FieldRef<"MonthlyReport", 'BigInt'>
    readonly status: FieldRef<"MonthlyReport", 'ReportStatus'>
    readonly generatedAt: FieldRef<"MonthlyReport", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyReport", 'DateTime'>
    readonly incClassChartData: FieldRef<"MonthlyReport", 'Json'>
    readonly incGymChartData: FieldRef<"MonthlyReport", 'Json'>
    readonly memberChartData: FieldRef<"MonthlyReport", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyReport findUnique
   */
  export type MonthlyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findUniqueOrThrow
   */
  export type MonthlyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findFirst
   */
  export type MonthlyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findFirstOrThrow
   */
  export type MonthlyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findMany
   */
  export type MonthlyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyReports to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport create
   */
  export type MonthlyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data needed to create a MonthlyReport.
     */
    data: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
  }

  /**
   * MonthlyReport createMany
   */
  export type MonthlyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport createManyAndReturn
   */
  export type MonthlyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport update
   */
  export type MonthlyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data needed to update a MonthlyReport.
     */
    data: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
    /**
     * Choose, which MonthlyReport to update.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport updateMany
   */
  export type MonthlyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyReport updateManyAndReturn
   */
  export type MonthlyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyReport upsert
   */
  export type MonthlyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * The filter to search for the MonthlyReport to update in case it exists.
     */
    where: MonthlyReportWhereUniqueInput
    /**
     * In case the MonthlyReport found by the `where` argument doesn't exist, create a new MonthlyReport with this data.
     */
    create: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
    /**
     * In case the MonthlyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
  }

  /**
   * MonthlyReport delete
   */
  export type MonthlyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Filter which MonthlyReport to delete.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport deleteMany
   */
  export type MonthlyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReports to delete
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to delete.
     */
    limit?: number
  }

  /**
   * MonthlyReport without action
   */
  export type MonthlyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
  }


  /**
   * Model SaunaUsage
   */

  export type AggregateSaunaUsage = {
    _count: SaunaUsageCountAggregateOutputType | null
    _avg: SaunaUsageAvgAggregateOutputType | null
    _sum: SaunaUsageSumAggregateOutputType | null
    _min: SaunaUsageMinAggregateOutputType | null
    _max: SaunaUsageMaxAggregateOutputType | null
  }

  export type SaunaUsageAvgAggregateOutputType = {
    id: number | null
  }

  export type SaunaUsageSumAggregateOutputType = {
    id: number | null
  }

  export type SaunaUsageMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SaunaUsageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SaunaUsageCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    startTime: number
    endTime: number
    _all: number
  }


  export type SaunaUsageAvgAggregateInputType = {
    id?: true
  }

  export type SaunaUsageSumAggregateInputType = {
    id?: true
  }

  export type SaunaUsageMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    startTime?: true
    endTime?: true
  }

  export type SaunaUsageMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    startTime?: true
    endTime?: true
  }

  export type SaunaUsageCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type SaunaUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaunaUsage to aggregate.
     */
    where?: SaunaUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaunaUsages to fetch.
     */
    orderBy?: SaunaUsageOrderByWithRelationInput | SaunaUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaunaUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaunaUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaunaUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaunaUsages
    **/
    _count?: true | SaunaUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaunaUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaunaUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaunaUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaunaUsageMaxAggregateInputType
  }

  export type GetSaunaUsageAggregateType<T extends SaunaUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateSaunaUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaunaUsage[P]>
      : GetScalarType<T[P], AggregateSaunaUsage[P]>
  }




  export type SaunaUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaunaUsageWhereInput
    orderBy?: SaunaUsageOrderByWithAggregationInput | SaunaUsageOrderByWithAggregationInput[]
    by: SaunaUsageScalarFieldEnum[] | SaunaUsageScalarFieldEnum
    having?: SaunaUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaunaUsageCountAggregateInputType | true
    _avg?: SaunaUsageAvgAggregateInputType
    _sum?: SaunaUsageSumAggregateInputType
    _min?: SaunaUsageMinAggregateInputType
    _max?: SaunaUsageMaxAggregateInputType
  }

  export type SaunaUsageGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    startTime: Date | null
    endTime: Date | null
    _count: SaunaUsageCountAggregateOutputType | null
    _avg: SaunaUsageAvgAggregateOutputType | null
    _sum: SaunaUsageSumAggregateOutputType | null
    _min: SaunaUsageMinAggregateOutputType | null
    _max: SaunaUsageMaxAggregateOutputType | null
  }

  type GetSaunaUsageGroupByPayload<T extends SaunaUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaunaUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaunaUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaunaUsageGroupByOutputType[P]>
            : GetScalarType<T[P], SaunaUsageGroupByOutputType[P]>
        }
      >
    >


  export type SaunaUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["saunaUsage"]>

  export type SaunaUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["saunaUsage"]>

  export type SaunaUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["saunaUsage"]>

  export type SaunaUsageSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type SaunaUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "startTime" | "endTime", ExtArgs["result"]["saunaUsage"]>

  export type $SaunaUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaunaUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      startTime: Date | null
      endTime: Date | null
    }, ExtArgs["result"]["saunaUsage"]>
    composites: {}
  }

  type SaunaUsageGetPayload<S extends boolean | null | undefined | SaunaUsageDefaultArgs> = $Result.GetResult<Prisma.$SaunaUsagePayload, S>

  type SaunaUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaunaUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaunaUsageCountAggregateInputType | true
    }

  export interface SaunaUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaunaUsage'], meta: { name: 'SaunaUsage' } }
    /**
     * Find zero or one SaunaUsage that matches the filter.
     * @param {SaunaUsageFindUniqueArgs} args - Arguments to find a SaunaUsage
     * @example
     * // Get one SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaunaUsageFindUniqueArgs>(args: SelectSubset<T, SaunaUsageFindUniqueArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaunaUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaunaUsageFindUniqueOrThrowArgs} args - Arguments to find a SaunaUsage
     * @example
     * // Get one SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaunaUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, SaunaUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaunaUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageFindFirstArgs} args - Arguments to find a SaunaUsage
     * @example
     * // Get one SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaunaUsageFindFirstArgs>(args?: SelectSubset<T, SaunaUsageFindFirstArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaunaUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageFindFirstOrThrowArgs} args - Arguments to find a SaunaUsage
     * @example
     * // Get one SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaunaUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, SaunaUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaunaUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaunaUsages
     * const saunaUsages = await prisma.saunaUsage.findMany()
     * 
     * // Get first 10 SaunaUsages
     * const saunaUsages = await prisma.saunaUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saunaUsageWithIdOnly = await prisma.saunaUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaunaUsageFindManyArgs>(args?: SelectSubset<T, SaunaUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaunaUsage.
     * @param {SaunaUsageCreateArgs} args - Arguments to create a SaunaUsage.
     * @example
     * // Create one SaunaUsage
     * const SaunaUsage = await prisma.saunaUsage.create({
     *   data: {
     *     // ... data to create a SaunaUsage
     *   }
     * })
     * 
     */
    create<T extends SaunaUsageCreateArgs>(args: SelectSubset<T, SaunaUsageCreateArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaunaUsages.
     * @param {SaunaUsageCreateManyArgs} args - Arguments to create many SaunaUsages.
     * @example
     * // Create many SaunaUsages
     * const saunaUsage = await prisma.saunaUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaunaUsageCreateManyArgs>(args?: SelectSubset<T, SaunaUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaunaUsages and returns the data saved in the database.
     * @param {SaunaUsageCreateManyAndReturnArgs} args - Arguments to create many SaunaUsages.
     * @example
     * // Create many SaunaUsages
     * const saunaUsage = await prisma.saunaUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaunaUsages and only return the `id`
     * const saunaUsageWithIdOnly = await prisma.saunaUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaunaUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, SaunaUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaunaUsage.
     * @param {SaunaUsageDeleteArgs} args - Arguments to delete one SaunaUsage.
     * @example
     * // Delete one SaunaUsage
     * const SaunaUsage = await prisma.saunaUsage.delete({
     *   where: {
     *     // ... filter to delete one SaunaUsage
     *   }
     * })
     * 
     */
    delete<T extends SaunaUsageDeleteArgs>(args: SelectSubset<T, SaunaUsageDeleteArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaunaUsage.
     * @param {SaunaUsageUpdateArgs} args - Arguments to update one SaunaUsage.
     * @example
     * // Update one SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaunaUsageUpdateArgs>(args: SelectSubset<T, SaunaUsageUpdateArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaunaUsages.
     * @param {SaunaUsageDeleteManyArgs} args - Arguments to filter SaunaUsages to delete.
     * @example
     * // Delete a few SaunaUsages
     * const { count } = await prisma.saunaUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaunaUsageDeleteManyArgs>(args?: SelectSubset<T, SaunaUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaunaUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaunaUsages
     * const saunaUsage = await prisma.saunaUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaunaUsageUpdateManyArgs>(args: SelectSubset<T, SaunaUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaunaUsages and returns the data updated in the database.
     * @param {SaunaUsageUpdateManyAndReturnArgs} args - Arguments to update many SaunaUsages.
     * @example
     * // Update many SaunaUsages
     * const saunaUsage = await prisma.saunaUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaunaUsages and only return the `id`
     * const saunaUsageWithIdOnly = await prisma.saunaUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaunaUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, SaunaUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaunaUsage.
     * @param {SaunaUsageUpsertArgs} args - Arguments to update or create a SaunaUsage.
     * @example
     * // Update or create a SaunaUsage
     * const saunaUsage = await prisma.saunaUsage.upsert({
     *   create: {
     *     // ... data to create a SaunaUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaunaUsage we want to update
     *   }
     * })
     */
    upsert<T extends SaunaUsageUpsertArgs>(args: SelectSubset<T, SaunaUsageUpsertArgs<ExtArgs>>): Prisma__SaunaUsageClient<$Result.GetResult<Prisma.$SaunaUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaunaUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageCountArgs} args - Arguments to filter SaunaUsages to count.
     * @example
     * // Count the number of SaunaUsages
     * const count = await prisma.saunaUsage.count({
     *   where: {
     *     // ... the filter for the SaunaUsages we want to count
     *   }
     * })
    **/
    count<T extends SaunaUsageCountArgs>(
      args?: Subset<T, SaunaUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaunaUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaunaUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaunaUsageAggregateArgs>(args: Subset<T, SaunaUsageAggregateArgs>): Prisma.PrismaPromise<GetSaunaUsageAggregateType<T>>

    /**
     * Group by SaunaUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaunaUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaunaUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaunaUsageGroupByArgs['orderBy'] }
        : { orderBy?: SaunaUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaunaUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaunaUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaunaUsage model
   */
  readonly fields: SaunaUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaunaUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaunaUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaunaUsage model
   */
  interface SaunaUsageFieldRefs {
    readonly id: FieldRef<"SaunaUsage", 'Int'>
    readonly name: FieldRef<"SaunaUsage", 'String'>
    readonly phone: FieldRef<"SaunaUsage", 'String'>
    readonly startTime: FieldRef<"SaunaUsage", 'DateTime'>
    readonly endTime: FieldRef<"SaunaUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaunaUsage findUnique
   */
  export type SaunaUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter, which SaunaUsage to fetch.
     */
    where: SaunaUsageWhereUniqueInput
  }

  /**
   * SaunaUsage findUniqueOrThrow
   */
  export type SaunaUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter, which SaunaUsage to fetch.
     */
    where: SaunaUsageWhereUniqueInput
  }

  /**
   * SaunaUsage findFirst
   */
  export type SaunaUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter, which SaunaUsage to fetch.
     */
    where?: SaunaUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaunaUsages to fetch.
     */
    orderBy?: SaunaUsageOrderByWithRelationInput | SaunaUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaunaUsages.
     */
    cursor?: SaunaUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaunaUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaunaUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaunaUsages.
     */
    distinct?: SaunaUsageScalarFieldEnum | SaunaUsageScalarFieldEnum[]
  }

  /**
   * SaunaUsage findFirstOrThrow
   */
  export type SaunaUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter, which SaunaUsage to fetch.
     */
    where?: SaunaUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaunaUsages to fetch.
     */
    orderBy?: SaunaUsageOrderByWithRelationInput | SaunaUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaunaUsages.
     */
    cursor?: SaunaUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaunaUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaunaUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaunaUsages.
     */
    distinct?: SaunaUsageScalarFieldEnum | SaunaUsageScalarFieldEnum[]
  }

  /**
   * SaunaUsage findMany
   */
  export type SaunaUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter, which SaunaUsages to fetch.
     */
    where?: SaunaUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaunaUsages to fetch.
     */
    orderBy?: SaunaUsageOrderByWithRelationInput | SaunaUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaunaUsages.
     */
    cursor?: SaunaUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaunaUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaunaUsages.
     */
    skip?: number
    distinct?: SaunaUsageScalarFieldEnum | SaunaUsageScalarFieldEnum[]
  }

  /**
   * SaunaUsage create
   */
  export type SaunaUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * The data needed to create a SaunaUsage.
     */
    data: XOR<SaunaUsageCreateInput, SaunaUsageUncheckedCreateInput>
  }

  /**
   * SaunaUsage createMany
   */
  export type SaunaUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaunaUsages.
     */
    data: SaunaUsageCreateManyInput | SaunaUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaunaUsage createManyAndReturn
   */
  export type SaunaUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * The data used to create many SaunaUsages.
     */
    data: SaunaUsageCreateManyInput | SaunaUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaunaUsage update
   */
  export type SaunaUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * The data needed to update a SaunaUsage.
     */
    data: XOR<SaunaUsageUpdateInput, SaunaUsageUncheckedUpdateInput>
    /**
     * Choose, which SaunaUsage to update.
     */
    where: SaunaUsageWhereUniqueInput
  }

  /**
   * SaunaUsage updateMany
   */
  export type SaunaUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaunaUsages.
     */
    data: XOR<SaunaUsageUpdateManyMutationInput, SaunaUsageUncheckedUpdateManyInput>
    /**
     * Filter which SaunaUsages to update
     */
    where?: SaunaUsageWhereInput
    /**
     * Limit how many SaunaUsages to update.
     */
    limit?: number
  }

  /**
   * SaunaUsage updateManyAndReturn
   */
  export type SaunaUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * The data used to update SaunaUsages.
     */
    data: XOR<SaunaUsageUpdateManyMutationInput, SaunaUsageUncheckedUpdateManyInput>
    /**
     * Filter which SaunaUsages to update
     */
    where?: SaunaUsageWhereInput
    /**
     * Limit how many SaunaUsages to update.
     */
    limit?: number
  }

  /**
   * SaunaUsage upsert
   */
  export type SaunaUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * The filter to search for the SaunaUsage to update in case it exists.
     */
    where: SaunaUsageWhereUniqueInput
    /**
     * In case the SaunaUsage found by the `where` argument doesn't exist, create a new SaunaUsage with this data.
     */
    create: XOR<SaunaUsageCreateInput, SaunaUsageUncheckedCreateInput>
    /**
     * In case the SaunaUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaunaUsageUpdateInput, SaunaUsageUncheckedUpdateInput>
  }

  /**
   * SaunaUsage delete
   */
  export type SaunaUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
    /**
     * Filter which SaunaUsage to delete.
     */
    where: SaunaUsageWhereUniqueInput
  }

  /**
   * SaunaUsage deleteMany
   */
  export type SaunaUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaunaUsages to delete
     */
    where?: SaunaUsageWhereInput
    /**
     * Limit how many SaunaUsages to delete.
     */
    limit?: number
  }

  /**
   * SaunaUsage without action
   */
  export type SaunaUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaunaUsage
     */
    select?: SaunaUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaunaUsage
     */
    omit?: SaunaUsageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nik: 'nik',
    phone: 'phone',
    membership: 'membership',
    ptAmount: 'ptAmount',
    joinDate: 'joinDate',
    expiryDate: 'expiryDate',
    status: 'status'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const CoupleScalarFieldEnum: {
    id: 'id',
    member1Id: 'member1Id',
    member2Id: 'member2Id'
  };

  export type CoupleScalarFieldEnum = (typeof CoupleScalarFieldEnum)[keyof typeof CoupleScalarFieldEnum]


  export const MemberArrivalScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    arrivalDate: 'arrivalDate',
    arrivalType: 'arrivalType',
    namaPt: 'namaPt'
  };

  export type MemberArrivalScalarFieldEnum = (typeof MemberArrivalScalarFieldEnum)[keyof typeof MemberArrivalScalarFieldEnum]


  export const IncidentileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    type: 'type',
    class: 'class',
    namaPt: 'namaPt',
    pt: 'pt',
    sauna: 'sauna',
    paymentMethod: 'paymentMethod',
    paymentAmount: 'paymentAmount',
    date: 'date'
  };

  export type IncidentileScalarFieldEnum = (typeof IncidentileScalarFieldEnum)[keyof typeof IncidentileScalarFieldEnum]


  export const TxFoScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    note: 'note',
    paymentMethod: 'paymentMethod',
    paymentAmount: 'paymentAmount',
    date: 'date',
    billId: 'billId'
  };

  export type TxFoScalarFieldEnum = (typeof TxFoScalarFieldEnum)[keyof typeof TxFoScalarFieldEnum]


  export const TxCanteenScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    note: 'note',
    itemId: 'itemId',
    itemAmount: 'itemAmount',
    paymentMethod: 'paymentMethod',
    paymentAmount: 'paymentAmount',
    date: 'date',
    billId: 'billId'
  };

  export type TxCanteenScalarFieldEnum = (typeof TxCanteenScalarFieldEnum)[keyof typeof TxCanteenScalarFieldEnum]


  export const TxAccountingScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    note: 'note',
    paymentMethod: 'paymentMethod',
    paymentAmount: 'paymentAmount',
    date: 'date',
    billId: 'billId'
  };

  export type TxAccountingScalarFieldEnum = (typeof TxAccountingScalarFieldEnum)[keyof typeof TxAccountingScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    kpi: 'kpi',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const ActivityMarketingScalarFieldEnum: {
    id: 'id',
    username: 'username',
    campaignId: 'campaignId',
    title: 'title',
    description: 'description',
    date: 'date'
  };

  export type ActivityMarketingScalarFieldEnum = (typeof ActivityMarketingScalarFieldEnum)[keyof typeof ActivityMarketingScalarFieldEnum]


  export const CanteenItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CanteenItemScalarFieldEnum = (typeof CanteenItemScalarFieldEnum)[keyof typeof CanteenItemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserActionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    time: 'time',
    description: 'description'
  };

  export type UserActionsScalarFieldEnum = (typeof UserActionsScalarFieldEnum)[keyof typeof UserActionsScalarFieldEnum]


  export const MonthlyReportScalarFieldEnum: {
    id: 'id',
    period: 'period',
    displayName: 'displayName',
    totalMembers: 'totalMembers',
    activeMembers: 'activeMembers',
    expiredMembers: 'expiredMembers',
    newMembers: 'newMembers',
    renewals: 'renewals',
    incidentiles: 'incidentiles',
    incidentilesGym: 'incidentilesGym',
    incidentilesClass: 'incidentilesClass',
    canteenItemsSold: 'canteenItemsSold',
    finishedCampaigns: 'finishedCampaigns',
    finishedCampaignNames: 'finishedCampaignNames',
    finishedCampaignActivities: 'finishedCampaignActivities',
    foTotalIncome: 'foTotalIncome',
    canteenTotalIncome: 'canteenTotalIncome',
    accountingTotalIncome: 'accountingTotalIncome',
    foTotalExpenses: 'foTotalExpenses',
    canteenTotalExpenses: 'canteenTotalExpenses',
    accountingTotalExpenses: 'accountingTotalExpenses',
    netIncome: 'netIncome',
    cashBalance: 'cashBalance',
    status: 'status',
    generatedAt: 'generatedAt',
    updatedAt: 'updatedAt',
    incClassChartData: 'incClassChartData',
    incGymChartData: 'incGymChartData',
    memberChartData: 'memberChartData'
  };

  export type MonthlyReportScalarFieldEnum = (typeof MonthlyReportScalarFieldEnum)[keyof typeof MonthlyReportScalarFieldEnum]


  export const SaunaUsageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type SaunaUsageScalarFieldEnum = (typeof SaunaUsageScalarFieldEnum)[keyof typeof SaunaUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'MembershipType'
   */
  export type EnumMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipType'>
    


  /**
   * Reference to a field of type 'MembershipType[]'
   */
  export type ListEnumMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus[]'>
    


  /**
   * Reference to a field of type 'ArrivalType'
   */
  export type EnumArrivalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArrivalType'>
    


  /**
   * Reference to a field of type 'ArrivalType[]'
   */
  export type ListEnumArrivalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArrivalType[]'>
    


  /**
   * Reference to a field of type 'IncidentileType'
   */
  export type EnumIncidentileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentileType'>
    


  /**
   * Reference to a field of type 'IncidentileType[]'
   */
  export type ListEnumIncidentileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentileType[]'>
    


  /**
   * Reference to a field of type 'IncidentileClass'
   */
  export type EnumIncidentileClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentileClass'>
    


  /**
   * Reference to a field of type 'IncidentileClass[]'
   */
  export type ListEnumIncidentileClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentileClass[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    name?: StringFilter<"Member"> | string
    nik?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    membership?: EnumMembershipTypeFilter<"Member"> | $Enums.MembershipType
    ptAmount?: IntNullableFilter<"Member"> | number | null
    joinDate?: DateTimeFilter<"Member"> | Date | string
    expiryDate?: DateTimeFilter<"Member"> | Date | string
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    couples1?: CoupleListRelationFilter
    couples2?: CoupleListRelationFilter
    arrivals?: MemberArrivalListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    membership?: SortOrder
    ptAmount?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    couples1?: CoupleOrderByRelationAggregateInput
    couples2?: CoupleOrderByRelationAggregateInput
    arrivals?: MemberArrivalOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    nik?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    membership?: EnumMembershipTypeFilter<"Member"> | $Enums.MembershipType
    ptAmount?: IntNullableFilter<"Member"> | number | null
    joinDate?: DateTimeFilter<"Member"> | Date | string
    expiryDate?: DateTimeFilter<"Member"> | Date | string
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    couples1?: CoupleListRelationFilter
    couples2?: CoupleListRelationFilter
    arrivals?: MemberArrivalListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    membership?: SortOrder
    ptAmount?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    name?: StringWithAggregatesFilter<"Member"> | string
    nik?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringWithAggregatesFilter<"Member"> | string
    membership?: EnumMembershipTypeWithAggregatesFilter<"Member"> | $Enums.MembershipType
    ptAmount?: IntNullableWithAggregatesFilter<"Member"> | number | null
    joinDate?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    status?: EnumMemberStatusWithAggregatesFilter<"Member"> | $Enums.MemberStatus
  }

  export type CoupleWhereInput = {
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    id?: IntFilter<"Couple"> | number
    member1Id?: IntFilter<"Couple"> | number
    member2Id?: IntFilter<"Couple"> | number
    member1?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    member2?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type CoupleOrderByWithRelationInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    member1?: MemberOrderByWithRelationInput
    member2?: MemberOrderByWithRelationInput
  }

  export type CoupleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    member1Id?: IntFilter<"Couple"> | number
    member2Id?: IntFilter<"Couple"> | number
    member1?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    member2?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type CoupleOrderByWithAggregationInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    _count?: CoupleCountOrderByAggregateInput
    _avg?: CoupleAvgOrderByAggregateInput
    _max?: CoupleMaxOrderByAggregateInput
    _min?: CoupleMinOrderByAggregateInput
    _sum?: CoupleSumOrderByAggregateInput
  }

  export type CoupleScalarWhereWithAggregatesInput = {
    AND?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    OR?: CoupleScalarWhereWithAggregatesInput[]
    NOT?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Couple"> | number
    member1Id?: IntWithAggregatesFilter<"Couple"> | number
    member2Id?: IntWithAggregatesFilter<"Couple"> | number
  }

  export type MemberArrivalWhereInput = {
    AND?: MemberArrivalWhereInput | MemberArrivalWhereInput[]
    OR?: MemberArrivalWhereInput[]
    NOT?: MemberArrivalWhereInput | MemberArrivalWhereInput[]
    id?: IntFilter<"MemberArrival"> | number
    memberId?: IntFilter<"MemberArrival"> | number
    arrivalDate?: DateTimeFilter<"MemberArrival"> | Date | string
    arrivalType?: EnumArrivalTypeFilter<"MemberArrival"> | $Enums.ArrivalType
    namaPt?: StringNullableFilter<"MemberArrival"> | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MemberArrivalOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    arrivalDate?: SortOrder
    arrivalType?: SortOrder
    namaPt?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type MemberArrivalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberArrivalWhereInput | MemberArrivalWhereInput[]
    OR?: MemberArrivalWhereInput[]
    NOT?: MemberArrivalWhereInput | MemberArrivalWhereInput[]
    memberId?: IntFilter<"MemberArrival"> | number
    arrivalDate?: DateTimeFilter<"MemberArrival"> | Date | string
    arrivalType?: EnumArrivalTypeFilter<"MemberArrival"> | $Enums.ArrivalType
    namaPt?: StringNullableFilter<"MemberArrival"> | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type MemberArrivalOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    arrivalDate?: SortOrder
    arrivalType?: SortOrder
    namaPt?: SortOrderInput | SortOrder
    _count?: MemberArrivalCountOrderByAggregateInput
    _avg?: MemberArrivalAvgOrderByAggregateInput
    _max?: MemberArrivalMaxOrderByAggregateInput
    _min?: MemberArrivalMinOrderByAggregateInput
    _sum?: MemberArrivalSumOrderByAggregateInput
  }

  export type MemberArrivalScalarWhereWithAggregatesInput = {
    AND?: MemberArrivalScalarWhereWithAggregatesInput | MemberArrivalScalarWhereWithAggregatesInput[]
    OR?: MemberArrivalScalarWhereWithAggregatesInput[]
    NOT?: MemberArrivalScalarWhereWithAggregatesInput | MemberArrivalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MemberArrival"> | number
    memberId?: IntWithAggregatesFilter<"MemberArrival"> | number
    arrivalDate?: DateTimeWithAggregatesFilter<"MemberArrival"> | Date | string
    arrivalType?: EnumArrivalTypeWithAggregatesFilter<"MemberArrival"> | $Enums.ArrivalType
    namaPt?: StringNullableWithAggregatesFilter<"MemberArrival"> | string | null
  }

  export type IncidentileWhereInput = {
    AND?: IncidentileWhereInput | IncidentileWhereInput[]
    OR?: IncidentileWhereInput[]
    NOT?: IncidentileWhereInput | IncidentileWhereInput[]
    id?: IntFilter<"Incidentile"> | number
    name?: StringFilter<"Incidentile"> | string
    phone?: StringNullableFilter<"Incidentile"> | string | null
    type?: EnumIncidentileTypeFilter<"Incidentile"> | $Enums.IncidentileType
    class?: EnumIncidentileClassNullableFilter<"Incidentile"> | $Enums.IncidentileClass | null
    namaPt?: StringNullableFilter<"Incidentile"> | string | null
    pt?: BoolFilter<"Incidentile"> | boolean
    sauna?: BoolFilter<"Incidentile"> | boolean
    paymentMethod?: EnumPaymentMethodFilter<"Incidentile"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"Incidentile"> | number
    date?: DateTimeFilter<"Incidentile"> | Date | string
  }

  export type IncidentileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    type?: SortOrder
    class?: SortOrderInput | SortOrder
    namaPt?: SortOrderInput | SortOrder
    pt?: SortOrder
    sauna?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
  }

  export type IncidentileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentileWhereInput | IncidentileWhereInput[]
    OR?: IncidentileWhereInput[]
    NOT?: IncidentileWhereInput | IncidentileWhereInput[]
    name?: StringFilter<"Incidentile"> | string
    phone?: StringNullableFilter<"Incidentile"> | string | null
    type?: EnumIncidentileTypeFilter<"Incidentile"> | $Enums.IncidentileType
    class?: EnumIncidentileClassNullableFilter<"Incidentile"> | $Enums.IncidentileClass | null
    namaPt?: StringNullableFilter<"Incidentile"> | string | null
    pt?: BoolFilter<"Incidentile"> | boolean
    sauna?: BoolFilter<"Incidentile"> | boolean
    paymentMethod?: EnumPaymentMethodFilter<"Incidentile"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"Incidentile"> | number
    date?: DateTimeFilter<"Incidentile"> | Date | string
  }, "id">

  export type IncidentileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    type?: SortOrder
    class?: SortOrderInput | SortOrder
    namaPt?: SortOrderInput | SortOrder
    pt?: SortOrder
    sauna?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    _count?: IncidentileCountOrderByAggregateInput
    _avg?: IncidentileAvgOrderByAggregateInput
    _max?: IncidentileMaxOrderByAggregateInput
    _min?: IncidentileMinOrderByAggregateInput
    _sum?: IncidentileSumOrderByAggregateInput
  }

  export type IncidentileScalarWhereWithAggregatesInput = {
    AND?: IncidentileScalarWhereWithAggregatesInput | IncidentileScalarWhereWithAggregatesInput[]
    OR?: IncidentileScalarWhereWithAggregatesInput[]
    NOT?: IncidentileScalarWhereWithAggregatesInput | IncidentileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Incidentile"> | number
    name?: StringWithAggregatesFilter<"Incidentile"> | string
    phone?: StringNullableWithAggregatesFilter<"Incidentile"> | string | null
    type?: EnumIncidentileTypeWithAggregatesFilter<"Incidentile"> | $Enums.IncidentileType
    class?: EnumIncidentileClassNullableWithAggregatesFilter<"Incidentile"> | $Enums.IncidentileClass | null
    namaPt?: StringNullableWithAggregatesFilter<"Incidentile"> | string | null
    pt?: BoolWithAggregatesFilter<"Incidentile"> | boolean
    sauna?: BoolWithAggregatesFilter<"Incidentile"> | boolean
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Incidentile"> | $Enums.PaymentMethod
    paymentAmount?: IntWithAggregatesFilter<"Incidentile"> | number
    date?: DateTimeWithAggregatesFilter<"Incidentile"> | Date | string
  }

  export type TxFoWhereInput = {
    AND?: TxFoWhereInput | TxFoWhereInput[]
    OR?: TxFoWhereInput[]
    NOT?: TxFoWhereInput | TxFoWhereInput[]
    id?: IntFilter<"TxFo"> | number
    type?: EnumTransactionTypeFilter<"TxFo"> | $Enums.TransactionType
    title?: StringNullableFilter<"TxFo"> | string | null
    note?: StringNullableFilter<"TxFo"> | string | null
    paymentMethod?: EnumPaymentMethodFilter<"TxFo"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxFo"> | number
    date?: DateTimeFilter<"TxFo"> | Date | string
    billId?: StringNullableFilter<"TxFo"> | string | null
  }

  export type TxFoOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
  }

  export type TxFoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TxFoWhereInput | TxFoWhereInput[]
    OR?: TxFoWhereInput[]
    NOT?: TxFoWhereInput | TxFoWhereInput[]
    type?: EnumTransactionTypeFilter<"TxFo"> | $Enums.TransactionType
    title?: StringNullableFilter<"TxFo"> | string | null
    note?: StringNullableFilter<"TxFo"> | string | null
    paymentMethod?: EnumPaymentMethodFilter<"TxFo"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxFo"> | number
    date?: DateTimeFilter<"TxFo"> | Date | string
    billId?: StringNullableFilter<"TxFo"> | string | null
  }, "id">

  export type TxFoOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
    _count?: TxFoCountOrderByAggregateInput
    _avg?: TxFoAvgOrderByAggregateInput
    _max?: TxFoMaxOrderByAggregateInput
    _min?: TxFoMinOrderByAggregateInput
    _sum?: TxFoSumOrderByAggregateInput
  }

  export type TxFoScalarWhereWithAggregatesInput = {
    AND?: TxFoScalarWhereWithAggregatesInput | TxFoScalarWhereWithAggregatesInput[]
    OR?: TxFoScalarWhereWithAggregatesInput[]
    NOT?: TxFoScalarWhereWithAggregatesInput | TxFoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TxFo"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"TxFo"> | $Enums.TransactionType
    title?: StringNullableWithAggregatesFilter<"TxFo"> | string | null
    note?: StringNullableWithAggregatesFilter<"TxFo"> | string | null
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"TxFo"> | $Enums.PaymentMethod
    paymentAmount?: IntWithAggregatesFilter<"TxFo"> | number
    date?: DateTimeWithAggregatesFilter<"TxFo"> | Date | string
    billId?: StringNullableWithAggregatesFilter<"TxFo"> | string | null
  }

  export type TxCanteenWhereInput = {
    AND?: TxCanteenWhereInput | TxCanteenWhereInput[]
    OR?: TxCanteenWhereInput[]
    NOT?: TxCanteenWhereInput | TxCanteenWhereInput[]
    id?: IntFilter<"TxCanteen"> | number
    type?: EnumTransactionTypeFilter<"TxCanteen"> | $Enums.TransactionType
    title?: StringNullableFilter<"TxCanteen"> | string | null
    note?: StringNullableFilter<"TxCanteen"> | string | null
    itemId?: IntNullableFilter<"TxCanteen"> | number | null
    itemAmount?: IntNullableFilter<"TxCanteen"> | number | null
    paymentMethod?: EnumPaymentMethodFilter<"TxCanteen"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxCanteen"> | number
    date?: DateTimeFilter<"TxCanteen"> | Date | string
    billId?: StringNullableFilter<"TxCanteen"> | string | null
    item?: XOR<CanteenItemNullableScalarRelationFilter, CanteenItemWhereInput> | null
  }

  export type TxCanteenOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    itemAmount?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
    item?: CanteenItemOrderByWithRelationInput
  }

  export type TxCanteenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TxCanteenWhereInput | TxCanteenWhereInput[]
    OR?: TxCanteenWhereInput[]
    NOT?: TxCanteenWhereInput | TxCanteenWhereInput[]
    type?: EnumTransactionTypeFilter<"TxCanteen"> | $Enums.TransactionType
    title?: StringNullableFilter<"TxCanteen"> | string | null
    note?: StringNullableFilter<"TxCanteen"> | string | null
    itemId?: IntNullableFilter<"TxCanteen"> | number | null
    itemAmount?: IntNullableFilter<"TxCanteen"> | number | null
    paymentMethod?: EnumPaymentMethodFilter<"TxCanteen"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxCanteen"> | number
    date?: DateTimeFilter<"TxCanteen"> | Date | string
    billId?: StringNullableFilter<"TxCanteen"> | string | null
    item?: XOR<CanteenItemNullableScalarRelationFilter, CanteenItemWhereInput> | null
  }, "id">

  export type TxCanteenOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    itemAmount?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
    _count?: TxCanteenCountOrderByAggregateInput
    _avg?: TxCanteenAvgOrderByAggregateInput
    _max?: TxCanteenMaxOrderByAggregateInput
    _min?: TxCanteenMinOrderByAggregateInput
    _sum?: TxCanteenSumOrderByAggregateInput
  }

  export type TxCanteenScalarWhereWithAggregatesInput = {
    AND?: TxCanteenScalarWhereWithAggregatesInput | TxCanteenScalarWhereWithAggregatesInput[]
    OR?: TxCanteenScalarWhereWithAggregatesInput[]
    NOT?: TxCanteenScalarWhereWithAggregatesInput | TxCanteenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TxCanteen"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"TxCanteen"> | $Enums.TransactionType
    title?: StringNullableWithAggregatesFilter<"TxCanteen"> | string | null
    note?: StringNullableWithAggregatesFilter<"TxCanteen"> | string | null
    itemId?: IntNullableWithAggregatesFilter<"TxCanteen"> | number | null
    itemAmount?: IntNullableWithAggregatesFilter<"TxCanteen"> | number | null
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"TxCanteen"> | $Enums.PaymentMethod
    paymentAmount?: IntWithAggregatesFilter<"TxCanteen"> | number
    date?: DateTimeWithAggregatesFilter<"TxCanteen"> | Date | string
    billId?: StringNullableWithAggregatesFilter<"TxCanteen"> | string | null
  }

  export type TxAccountingWhereInput = {
    AND?: TxAccountingWhereInput | TxAccountingWhereInput[]
    OR?: TxAccountingWhereInput[]
    NOT?: TxAccountingWhereInput | TxAccountingWhereInput[]
    id?: IntFilter<"TxAccounting"> | number
    type?: EnumTransactionTypeFilter<"TxAccounting"> | $Enums.TransactionType
    title?: StringFilter<"TxAccounting"> | string
    note?: StringNullableFilter<"TxAccounting"> | string | null
    paymentMethod?: EnumPaymentMethodFilter<"TxAccounting"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxAccounting"> | number
    date?: DateTimeFilter<"TxAccounting"> | Date | string
    billId?: StringNullableFilter<"TxAccounting"> | string | null
  }

  export type TxAccountingOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
  }

  export type TxAccountingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TxAccountingWhereInput | TxAccountingWhereInput[]
    OR?: TxAccountingWhereInput[]
    NOT?: TxAccountingWhereInput | TxAccountingWhereInput[]
    type?: EnumTransactionTypeFilter<"TxAccounting"> | $Enums.TransactionType
    title?: StringFilter<"TxAccounting"> | string
    note?: StringNullableFilter<"TxAccounting"> | string | null
    paymentMethod?: EnumPaymentMethodFilter<"TxAccounting"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxAccounting"> | number
    date?: DateTimeFilter<"TxAccounting"> | Date | string
    billId?: StringNullableFilter<"TxAccounting"> | string | null
  }, "id">

  export type TxAccountingOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrderInput | SortOrder
    _count?: TxAccountingCountOrderByAggregateInput
    _avg?: TxAccountingAvgOrderByAggregateInput
    _max?: TxAccountingMaxOrderByAggregateInput
    _min?: TxAccountingMinOrderByAggregateInput
    _sum?: TxAccountingSumOrderByAggregateInput
  }

  export type TxAccountingScalarWhereWithAggregatesInput = {
    AND?: TxAccountingScalarWhereWithAggregatesInput | TxAccountingScalarWhereWithAggregatesInput[]
    OR?: TxAccountingScalarWhereWithAggregatesInput[]
    NOT?: TxAccountingScalarWhereWithAggregatesInput | TxAccountingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TxAccounting"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"TxAccounting"> | $Enums.TransactionType
    title?: StringWithAggregatesFilter<"TxAccounting"> | string
    note?: StringNullableWithAggregatesFilter<"TxAccounting"> | string | null
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"TxAccounting"> | $Enums.PaymentMethod
    paymentAmount?: IntWithAggregatesFilter<"TxAccounting"> | number
    date?: DateTimeWithAggregatesFilter<"TxAccounting"> | Date | string
    billId?: StringNullableWithAggregatesFilter<"TxAccounting"> | string | null
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    kpi?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    status?: StringFilter<"Campaign"> | string
    activities?: ActivityMarketingListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    kpi?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    activities?: ActivityMarketingOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    title?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    kpi?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    status?: StringFilter<"Campaign"> | string
    activities?: ActivityMarketingListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    kpi?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    kpi?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    status?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type ActivityMarketingWhereInput = {
    AND?: ActivityMarketingWhereInput | ActivityMarketingWhereInput[]
    OR?: ActivityMarketingWhereInput[]
    NOT?: ActivityMarketingWhereInput | ActivityMarketingWhereInput[]
    id?: IntFilter<"ActivityMarketing"> | number
    username?: StringFilter<"ActivityMarketing"> | string
    campaignId?: IntNullableFilter<"ActivityMarketing"> | number | null
    title?: StringFilter<"ActivityMarketing"> | string
    description?: StringNullableFilter<"ActivityMarketing"> | string | null
    date?: DateTimeFilter<"ActivityMarketing"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }

  export type ActivityMarketingOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type ActivityMarketingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityMarketingWhereInput | ActivityMarketingWhereInput[]
    OR?: ActivityMarketingWhereInput[]
    NOT?: ActivityMarketingWhereInput | ActivityMarketingWhereInput[]
    username?: StringFilter<"ActivityMarketing"> | string
    campaignId?: IntNullableFilter<"ActivityMarketing"> | number | null
    title?: StringFilter<"ActivityMarketing"> | string
    description?: StringNullableFilter<"ActivityMarketing"> | string | null
    date?: DateTimeFilter<"ActivityMarketing"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }, "id">

  export type ActivityMarketingOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: ActivityMarketingCountOrderByAggregateInput
    _avg?: ActivityMarketingAvgOrderByAggregateInput
    _max?: ActivityMarketingMaxOrderByAggregateInput
    _min?: ActivityMarketingMinOrderByAggregateInput
    _sum?: ActivityMarketingSumOrderByAggregateInput
  }

  export type ActivityMarketingScalarWhereWithAggregatesInput = {
    AND?: ActivityMarketingScalarWhereWithAggregatesInput | ActivityMarketingScalarWhereWithAggregatesInput[]
    OR?: ActivityMarketingScalarWhereWithAggregatesInput[]
    NOT?: ActivityMarketingScalarWhereWithAggregatesInput | ActivityMarketingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityMarketing"> | number
    username?: StringWithAggregatesFilter<"ActivityMarketing"> | string
    campaignId?: IntNullableWithAggregatesFilter<"ActivityMarketing"> | number | null
    title?: StringWithAggregatesFilter<"ActivityMarketing"> | string
    description?: StringNullableWithAggregatesFilter<"ActivityMarketing"> | string | null
    date?: DateTimeWithAggregatesFilter<"ActivityMarketing"> | Date | string
  }

  export type CanteenItemWhereInput = {
    AND?: CanteenItemWhereInput | CanteenItemWhereInput[]
    OR?: CanteenItemWhereInput[]
    NOT?: CanteenItemWhereInput | CanteenItemWhereInput[]
    id?: IntFilter<"CanteenItem"> | number
    name?: StringFilter<"CanteenItem"> | string
    price?: IntFilter<"CanteenItem"> | number
    stock?: IntFilter<"CanteenItem"> | number
    createdAt?: DateTimeFilter<"CanteenItem"> | Date | string
    updatedAt?: DateTimeFilter<"CanteenItem"> | Date | string
    txCanteens?: TxCanteenListRelationFilter
  }

  export type CanteenItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    txCanteens?: TxCanteenOrderByRelationAggregateInput
  }

  export type CanteenItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_price?: CanteenItemNamePriceCompoundUniqueInput
    AND?: CanteenItemWhereInput | CanteenItemWhereInput[]
    OR?: CanteenItemWhereInput[]
    NOT?: CanteenItemWhereInput | CanteenItemWhereInput[]
    name?: StringFilter<"CanteenItem"> | string
    price?: IntFilter<"CanteenItem"> | number
    stock?: IntFilter<"CanteenItem"> | number
    createdAt?: DateTimeFilter<"CanteenItem"> | Date | string
    updatedAt?: DateTimeFilter<"CanteenItem"> | Date | string
    txCanteens?: TxCanteenListRelationFilter
  }, "id" | "name_price">

  export type CanteenItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CanteenItemCountOrderByAggregateInput
    _avg?: CanteenItemAvgOrderByAggregateInput
    _max?: CanteenItemMaxOrderByAggregateInput
    _min?: CanteenItemMinOrderByAggregateInput
    _sum?: CanteenItemSumOrderByAggregateInput
  }

  export type CanteenItemScalarWhereWithAggregatesInput = {
    AND?: CanteenItemScalarWhereWithAggregatesInput | CanteenItemScalarWhereWithAggregatesInput[]
    OR?: CanteenItemScalarWhereWithAggregatesInput[]
    NOT?: CanteenItemScalarWhereWithAggregatesInput | CanteenItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CanteenItem"> | number
    name?: StringWithAggregatesFilter<"CanteenItem"> | string
    price?: IntWithAggregatesFilter<"CanteenItem"> | number
    stock?: IntWithAggregatesFilter<"CanteenItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CanteenItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CanteenItem"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    actions?: UserActionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    actions?: UserActionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    actions?: UserActionsListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserActionsWhereInput = {
    AND?: UserActionsWhereInput | UserActionsWhereInput[]
    OR?: UserActionsWhereInput[]
    NOT?: UserActionsWhereInput | UserActionsWhereInput[]
    id?: IntFilter<"UserActions"> | number
    userId?: IntFilter<"UserActions"> | number
    time?: DateTimeFilter<"UserActions"> | Date | string
    description?: StringFilter<"UserActions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserActionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    time?: SortOrder
    description?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserActionsWhereInput | UserActionsWhereInput[]
    OR?: UserActionsWhereInput[]
    NOT?: UserActionsWhereInput | UserActionsWhereInput[]
    userId?: IntFilter<"UserActions"> | number
    time?: DateTimeFilter<"UserActions"> | Date | string
    description?: StringFilter<"UserActions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserActionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    time?: SortOrder
    description?: SortOrder
    _count?: UserActionsCountOrderByAggregateInput
    _avg?: UserActionsAvgOrderByAggregateInput
    _max?: UserActionsMaxOrderByAggregateInput
    _min?: UserActionsMinOrderByAggregateInput
    _sum?: UserActionsSumOrderByAggregateInput
  }

  export type UserActionsScalarWhereWithAggregatesInput = {
    AND?: UserActionsScalarWhereWithAggregatesInput | UserActionsScalarWhereWithAggregatesInput[]
    OR?: UserActionsScalarWhereWithAggregatesInput[]
    NOT?: UserActionsScalarWhereWithAggregatesInput | UserActionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserActions"> | number
    userId?: IntWithAggregatesFilter<"UserActions"> | number
    time?: DateTimeWithAggregatesFilter<"UserActions"> | Date | string
    description?: StringWithAggregatesFilter<"UserActions"> | string
  }

  export type MonthlyReportWhereInput = {
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    id?: IntFilter<"MonthlyReport"> | number
    period?: StringFilter<"MonthlyReport"> | string
    displayName?: StringFilter<"MonthlyReport"> | string
    totalMembers?: IntFilter<"MonthlyReport"> | number
    activeMembers?: IntFilter<"MonthlyReport"> | number
    expiredMembers?: IntFilter<"MonthlyReport"> | number
    newMembers?: IntFilter<"MonthlyReport"> | number
    renewals?: IntFilter<"MonthlyReport"> | number
    incidentiles?: IntFilter<"MonthlyReport"> | number
    incidentilesGym?: IntFilter<"MonthlyReport"> | number
    incidentilesClass?: IntFilter<"MonthlyReport"> | number
    canteenItemsSold?: JsonFilter<"MonthlyReport">
    finishedCampaigns?: IntFilter<"MonthlyReport"> | number
    finishedCampaignNames?: StringNullableListFilter<"MonthlyReport">
    finishedCampaignActivities?: StringNullableListFilter<"MonthlyReport">
    foTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    canteenTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    accountingTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    foTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    canteenTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    accountingTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    netIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    cashBalance?: BigIntFilter<"MonthlyReport"> | bigint | number
    status?: EnumReportStatusFilter<"MonthlyReport"> | $Enums.ReportStatus
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    incClassChartData?: JsonFilter<"MonthlyReport">
    incGymChartData?: JsonFilter<"MonthlyReport">
    memberChartData?: JsonFilter<"MonthlyReport">
  }

  export type MonthlyReportOrderByWithRelationInput = {
    id?: SortOrder
    period?: SortOrder
    displayName?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    canteenItemsSold?: SortOrder
    finishedCampaigns?: SortOrder
    finishedCampaignNames?: SortOrder
    finishedCampaignActivities?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    updatedAt?: SortOrder
    incClassChartData?: SortOrder
    incGymChartData?: SortOrder
    memberChartData?: SortOrder
  }

  export type MonthlyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    period?: string
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    displayName?: StringFilter<"MonthlyReport"> | string
    totalMembers?: IntFilter<"MonthlyReport"> | number
    activeMembers?: IntFilter<"MonthlyReport"> | number
    expiredMembers?: IntFilter<"MonthlyReport"> | number
    newMembers?: IntFilter<"MonthlyReport"> | number
    renewals?: IntFilter<"MonthlyReport"> | number
    incidentiles?: IntFilter<"MonthlyReport"> | number
    incidentilesGym?: IntFilter<"MonthlyReport"> | number
    incidentilesClass?: IntFilter<"MonthlyReport"> | number
    canteenItemsSold?: JsonFilter<"MonthlyReport">
    finishedCampaigns?: IntFilter<"MonthlyReport"> | number
    finishedCampaignNames?: StringNullableListFilter<"MonthlyReport">
    finishedCampaignActivities?: StringNullableListFilter<"MonthlyReport">
    foTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    canteenTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    accountingTotalIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    foTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    canteenTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    accountingTotalExpenses?: BigIntFilter<"MonthlyReport"> | bigint | number
    netIncome?: BigIntFilter<"MonthlyReport"> | bigint | number
    cashBalance?: BigIntFilter<"MonthlyReport"> | bigint | number
    status?: EnumReportStatusFilter<"MonthlyReport"> | $Enums.ReportStatus
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    incClassChartData?: JsonFilter<"MonthlyReport">
    incGymChartData?: JsonFilter<"MonthlyReport">
    memberChartData?: JsonFilter<"MonthlyReport">
  }, "id" | "period">

  export type MonthlyReportOrderByWithAggregationInput = {
    id?: SortOrder
    period?: SortOrder
    displayName?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    canteenItemsSold?: SortOrder
    finishedCampaigns?: SortOrder
    finishedCampaignNames?: SortOrder
    finishedCampaignActivities?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    updatedAt?: SortOrder
    incClassChartData?: SortOrder
    incGymChartData?: SortOrder
    memberChartData?: SortOrder
    _count?: MonthlyReportCountOrderByAggregateInput
    _avg?: MonthlyReportAvgOrderByAggregateInput
    _max?: MonthlyReportMaxOrderByAggregateInput
    _min?: MonthlyReportMinOrderByAggregateInput
    _sum?: MonthlyReportSumOrderByAggregateInput
  }

  export type MonthlyReportScalarWhereWithAggregatesInput = {
    AND?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    OR?: MonthlyReportScalarWhereWithAggregatesInput[]
    NOT?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlyReport"> | number
    period?: StringWithAggregatesFilter<"MonthlyReport"> | string
    displayName?: StringWithAggregatesFilter<"MonthlyReport"> | string
    totalMembers?: IntWithAggregatesFilter<"MonthlyReport"> | number
    activeMembers?: IntWithAggregatesFilter<"MonthlyReport"> | number
    expiredMembers?: IntWithAggregatesFilter<"MonthlyReport"> | number
    newMembers?: IntWithAggregatesFilter<"MonthlyReport"> | number
    renewals?: IntWithAggregatesFilter<"MonthlyReport"> | number
    incidentiles?: IntWithAggregatesFilter<"MonthlyReport"> | number
    incidentilesGym?: IntWithAggregatesFilter<"MonthlyReport"> | number
    incidentilesClass?: IntWithAggregatesFilter<"MonthlyReport"> | number
    canteenItemsSold?: JsonWithAggregatesFilter<"MonthlyReport">
    finishedCampaigns?: IntWithAggregatesFilter<"MonthlyReport"> | number
    finishedCampaignNames?: StringNullableListFilter<"MonthlyReport">
    finishedCampaignActivities?: StringNullableListFilter<"MonthlyReport">
    foTotalIncome?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    canteenTotalIncome?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    accountingTotalIncome?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    foTotalExpenses?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    canteenTotalExpenses?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    accountingTotalExpenses?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    netIncome?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    cashBalance?: BigIntWithAggregatesFilter<"MonthlyReport"> | bigint | number
    status?: EnumReportStatusWithAggregatesFilter<"MonthlyReport"> | $Enums.ReportStatus
    generatedAt?: DateTimeWithAggregatesFilter<"MonthlyReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyReport"> | Date | string
    incClassChartData?: JsonWithAggregatesFilter<"MonthlyReport">
    incGymChartData?: JsonWithAggregatesFilter<"MonthlyReport">
    memberChartData?: JsonWithAggregatesFilter<"MonthlyReport">
  }

  export type SaunaUsageWhereInput = {
    AND?: SaunaUsageWhereInput | SaunaUsageWhereInput[]
    OR?: SaunaUsageWhereInput[]
    NOT?: SaunaUsageWhereInput | SaunaUsageWhereInput[]
    id?: IntFilter<"SaunaUsage"> | number
    name?: StringFilter<"SaunaUsage"> | string
    phone?: StringNullableFilter<"SaunaUsage"> | string | null
    startTime?: DateTimeNullableFilter<"SaunaUsage"> | Date | string | null
    endTime?: DateTimeNullableFilter<"SaunaUsage"> | Date | string | null
  }

  export type SaunaUsageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
  }

  export type SaunaUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaunaUsageWhereInput | SaunaUsageWhereInput[]
    OR?: SaunaUsageWhereInput[]
    NOT?: SaunaUsageWhereInput | SaunaUsageWhereInput[]
    name?: StringFilter<"SaunaUsage"> | string
    phone?: StringNullableFilter<"SaunaUsage"> | string | null
    startTime?: DateTimeNullableFilter<"SaunaUsage"> | Date | string | null
    endTime?: DateTimeNullableFilter<"SaunaUsage"> | Date | string | null
  }, "id">

  export type SaunaUsageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: SaunaUsageCountOrderByAggregateInput
    _avg?: SaunaUsageAvgOrderByAggregateInput
    _max?: SaunaUsageMaxOrderByAggregateInput
    _min?: SaunaUsageMinOrderByAggregateInput
    _sum?: SaunaUsageSumOrderByAggregateInput
  }

  export type SaunaUsageScalarWhereWithAggregatesInput = {
    AND?: SaunaUsageScalarWhereWithAggregatesInput | SaunaUsageScalarWhereWithAggregatesInput[]
    OR?: SaunaUsageScalarWhereWithAggregatesInput[]
    NOT?: SaunaUsageScalarWhereWithAggregatesInput | SaunaUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaunaUsage"> | number
    name?: StringWithAggregatesFilter<"SaunaUsage"> | string
    phone?: StringNullableWithAggregatesFilter<"SaunaUsage"> | string | null
    startTime?: DateTimeNullableWithAggregatesFilter<"SaunaUsage"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"SaunaUsage"> | Date | string | null
  }

  export type MemberCreateInput = {
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleCreateNestedManyWithoutMember1Input
    couples2?: CoupleCreateNestedManyWithoutMember2Input
    arrivals?: MemberArrivalCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    couples2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    arrivals?: MemberArrivalUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUpdateManyWithoutMember1NestedInput
    couples2?: CoupleUpdateManyWithoutMember2NestedInput
    arrivals?: MemberArrivalUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    couples2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    arrivals?: MemberArrivalUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
  }

  export type MemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
  }

  export type CoupleCreateInput = {
    member1: MemberCreateNestedOneWithoutCouples1Input
    member2: MemberCreateNestedOneWithoutCouples2Input
  }

  export type CoupleUncheckedCreateInput = {
    id?: number
    member1Id: number
    member2Id: number
  }

  export type CoupleUpdateInput = {
    member1?: MemberUpdateOneRequiredWithoutCouples1NestedInput
    member2?: MemberUpdateOneRequiredWithoutCouples2NestedInput
  }

  export type CoupleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    member1Id?: IntFieldUpdateOperationsInput | number
    member2Id?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleCreateManyInput = {
    id?: number
    member1Id: number
    member2Id: number
  }

  export type CoupleUpdateManyMutationInput = {

  }

  export type CoupleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    member1Id?: IntFieldUpdateOperationsInput | number
    member2Id?: IntFieldUpdateOperationsInput | number
  }

  export type MemberArrivalCreateInput = {
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
    member: MemberCreateNestedOneWithoutArrivalsInput
  }

  export type MemberArrivalUncheckedCreateInput = {
    id?: number
    memberId: number
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
  }

  export type MemberArrivalUpdateInput = {
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
    member?: MemberUpdateOneRequiredWithoutArrivalsNestedInput
  }

  export type MemberArrivalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberArrivalCreateManyInput = {
    id?: number
    memberId: number
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
  }

  export type MemberArrivalUpdateManyMutationInput = {
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberArrivalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentileCreateInput = {
    name: string
    phone?: string | null
    type: $Enums.IncidentileType
    class?: $Enums.IncidentileClass | null
    namaPt?: string | null
    pt: boolean
    sauna: boolean
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
  }

  export type IncidentileUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    type: $Enums.IncidentileType
    class?: $Enums.IncidentileClass | null
    namaPt?: string | null
    pt: boolean
    sauna: boolean
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
  }

  export type IncidentileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIncidentileTypeFieldUpdateOperationsInput | $Enums.IncidentileType
    class?: NullableEnumIncidentileClassFieldUpdateOperationsInput | $Enums.IncidentileClass | null
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
    pt?: BoolFieldUpdateOperationsInput | boolean
    sauna?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIncidentileTypeFieldUpdateOperationsInput | $Enums.IncidentileType
    class?: NullableEnumIncidentileClassFieldUpdateOperationsInput | $Enums.IncidentileClass | null
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
    pt?: BoolFieldUpdateOperationsInput | boolean
    sauna?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentileCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    type: $Enums.IncidentileType
    class?: $Enums.IncidentileClass | null
    namaPt?: string | null
    pt: boolean
    sauna: boolean
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
  }

  export type IncidentileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIncidentileTypeFieldUpdateOperationsInput | $Enums.IncidentileType
    class?: NullableEnumIncidentileClassFieldUpdateOperationsInput | $Enums.IncidentileClass | null
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
    pt?: BoolFieldUpdateOperationsInput | boolean
    sauna?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIncidentileTypeFieldUpdateOperationsInput | $Enums.IncidentileType
    class?: NullableEnumIncidentileClassFieldUpdateOperationsInput | $Enums.IncidentileClass | null
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
    pt?: BoolFieldUpdateOperationsInput | boolean
    sauna?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxFoCreateInput = {
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxFoUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxFoUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxFoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxFoCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxFoUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxFoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxCanteenCreateInput = {
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
    item?: CanteenItemCreateNestedOneWithoutTxCanteensInput
  }

  export type TxCanteenUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemId?: number | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxCanteenUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
    item?: CanteenItemUpdateOneWithoutTxCanteensNestedInput
  }

  export type TxCanteenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxCanteenCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemId?: number | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxCanteenUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxCanteenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxAccountingCreateInput = {
    type: $Enums.TransactionType
    title: string
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxAccountingUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    title: string
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxAccountingUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxAccountingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxAccountingCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    title: string
    note?: string | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxAccountingUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxAccountingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignCreateInput = {
    title: string
    description?: string | null
    kpi?: string | null
    startDate: Date | string
    endDate: Date | string
    status: string
    activities?: ActivityMarketingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    kpi?: string | null
    startDate: Date | string
    endDate: Date | string
    status: string
    activities?: ActivityMarketingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    activities?: ActivityMarketingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    activities?: ActivityMarketingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    kpi?: string | null
    startDate: Date | string
    endDate: Date | string
    status: string
  }

  export type CampaignUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityMarketingCreateInput = {
    username: string
    title: string
    description?: string | null
    date: Date | string
    campaign?: CampaignCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityMarketingUncheckedCreateInput = {
    id?: number
    username: string
    campaignId?: number | null
    title: string
    description?: string | null
    date: Date | string
  }

  export type ActivityMarketingUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityMarketingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMarketingCreateManyInput = {
    id?: number
    username: string
    campaignId?: number | null
    title: string
    description?: string | null
    date: Date | string
  }

  export type ActivityMarketingUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMarketingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenItemCreateInput = {
    name: string
    price: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    txCanteens?: TxCanteenCreateNestedManyWithoutItemInput
  }

  export type CanteenItemUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    txCanteens?: TxCanteenUncheckedCreateNestedManyWithoutItemInput
  }

  export type CanteenItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txCanteens?: TxCanteenUpdateManyWithoutItemNestedInput
  }

  export type CanteenItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    txCanteens?: TxCanteenUncheckedUpdateManyWithoutItemNestedInput
  }

  export type CanteenItemCreateManyInput = {
    id?: number
    name: string
    price: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanteenItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    name?: string | null
    actions?: UserActionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    name?: string | null
    actions?: UserActionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: UserActionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: UserActionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserActionsCreateInput = {
    time?: Date | string
    description: string
    user: UserCreateNestedOneWithoutActionsInput
  }

  export type UserActionsUncheckedCreateInput = {
    id?: number
    userId: number
    time?: Date | string
    description: string
  }

  export type UserActionsUpdateInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type UserActionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserActionsCreateManyInput = {
    id?: number
    userId: number
    time?: Date | string
    description: string
  }

  export type UserActionsUpdateManyMutationInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserActionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyReportCreateInput = {
    period: string
    displayName?: string
    totalMembers?: number
    activeMembers?: number
    expiredMembers?: number
    newMembers?: number
    renewals?: number
    incidentiles?: number
    incidentilesGym?: number
    incidentilesClass?: number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: number
    finishedCampaignNames?: MonthlyReportCreatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportCreatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: bigint | number
    canteenTotalIncome?: bigint | number
    accountingTotalIncome?: bigint | number
    foTotalExpenses?: bigint | number
    canteenTotalExpenses?: bigint | number
    accountingTotalExpenses?: bigint | number
    netIncome?: bigint | number
    cashBalance?: bigint | number
    status: $Enums.ReportStatus
    generatedAt?: Date | string
    updatedAt?: Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportUncheckedCreateInput = {
    id?: number
    period: string
    displayName?: string
    totalMembers?: number
    activeMembers?: number
    expiredMembers?: number
    newMembers?: number
    renewals?: number
    incidentiles?: number
    incidentilesGym?: number
    incidentilesClass?: number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: number
    finishedCampaignNames?: MonthlyReportCreatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportCreatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: bigint | number
    canteenTotalIncome?: bigint | number
    accountingTotalIncome?: bigint | number
    foTotalExpenses?: bigint | number
    canteenTotalExpenses?: bigint | number
    accountingTotalExpenses?: bigint | number
    netIncome?: bigint | number
    cashBalance?: bigint | number
    status: $Enums.ReportStatus
    generatedAt?: Date | string
    updatedAt?: Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportUpdateInput = {
    period?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    expiredMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    renewals?: IntFieldUpdateOperationsInput | number
    incidentiles?: IntFieldUpdateOperationsInput | number
    incidentilesGym?: IntFieldUpdateOperationsInput | number
    incidentilesClass?: IntFieldUpdateOperationsInput | number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: IntFieldUpdateOperationsInput | number
    finishedCampaignNames?: MonthlyReportUpdatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportUpdatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    foTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    netIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    cashBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    expiredMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    renewals?: IntFieldUpdateOperationsInput | number
    incidentiles?: IntFieldUpdateOperationsInput | number
    incidentilesGym?: IntFieldUpdateOperationsInput | number
    incidentilesClass?: IntFieldUpdateOperationsInput | number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: IntFieldUpdateOperationsInput | number
    finishedCampaignNames?: MonthlyReportUpdatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportUpdatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    foTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    netIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    cashBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportCreateManyInput = {
    id?: number
    period: string
    displayName?: string
    totalMembers?: number
    activeMembers?: number
    expiredMembers?: number
    newMembers?: number
    renewals?: number
    incidentiles?: number
    incidentilesGym?: number
    incidentilesClass?: number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: number
    finishedCampaignNames?: MonthlyReportCreatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportCreatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: bigint | number
    canteenTotalIncome?: bigint | number
    accountingTotalIncome?: bigint | number
    foTotalExpenses?: bigint | number
    canteenTotalExpenses?: bigint | number
    accountingTotalExpenses?: bigint | number
    netIncome?: bigint | number
    cashBalance?: bigint | number
    status: $Enums.ReportStatus
    generatedAt?: Date | string
    updatedAt?: Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportUpdateManyMutationInput = {
    period?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    expiredMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    renewals?: IntFieldUpdateOperationsInput | number
    incidentiles?: IntFieldUpdateOperationsInput | number
    incidentilesGym?: IntFieldUpdateOperationsInput | number
    incidentilesClass?: IntFieldUpdateOperationsInput | number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: IntFieldUpdateOperationsInput | number
    finishedCampaignNames?: MonthlyReportUpdatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportUpdatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    foTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    netIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    cashBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type MonthlyReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    expiredMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    renewals?: IntFieldUpdateOperationsInput | number
    incidentiles?: IntFieldUpdateOperationsInput | number
    incidentilesGym?: IntFieldUpdateOperationsInput | number
    incidentilesClass?: IntFieldUpdateOperationsInput | number
    canteenItemsSold?: JsonNullValueInput | InputJsonValue
    finishedCampaigns?: IntFieldUpdateOperationsInput | number
    finishedCampaignNames?: MonthlyReportUpdatefinishedCampaignNamesInput | string[]
    finishedCampaignActivities?: MonthlyReportUpdatefinishedCampaignActivitiesInput | string[]
    foTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    foTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    canteenTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    accountingTotalExpenses?: BigIntFieldUpdateOperationsInput | bigint | number
    netIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    cashBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incClassChartData?: JsonNullValueInput | InputJsonValue
    incGymChartData?: JsonNullValueInput | InputJsonValue
    memberChartData?: JsonNullValueInput | InputJsonValue
  }

  export type SaunaUsageCreateInput = {
    name: string
    phone?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type SaunaUsageUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type SaunaUsageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaunaUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaunaUsageCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
  }

  export type SaunaUsageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaunaUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeFilter<$PrismaModel> | $Enums.MembershipType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type CoupleListRelationFilter = {
    every?: CoupleWhereInput
    some?: CoupleWhereInput
    none?: CoupleWhereInput
  }

  export type MemberArrivalListRelationFilter = {
    every?: MemberArrivalWhereInput
    some?: MemberArrivalWhereInput
    none?: MemberArrivalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoupleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberArrivalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    membership?: SortOrder
    ptAmount?: SortOrder
    joinDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
    ptAmount?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    membership?: SortOrder
    ptAmount?: SortOrder
    joinDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    membership?: SortOrder
    ptAmount?: SortOrder
    joinDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
    ptAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.MembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumMembershipTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type CoupleCountOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
  }

  export type CoupleAvgOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
  }

  export type CoupleMaxOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
  }

  export type CoupleMinOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
  }

  export type CoupleSumOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
  }

  export type EnumArrivalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrivalType | EnumArrivalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrivalTypeFilter<$PrismaModel> | $Enums.ArrivalType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MemberArrivalCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    arrivalDate?: SortOrder
    arrivalType?: SortOrder
    namaPt?: SortOrder
  }

  export type MemberArrivalAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type MemberArrivalMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    arrivalDate?: SortOrder
    arrivalType?: SortOrder
    namaPt?: SortOrder
  }

  export type MemberArrivalMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    arrivalDate?: SortOrder
    arrivalType?: SortOrder
    namaPt?: SortOrder
  }

  export type MemberArrivalSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type EnumArrivalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrivalType | EnumArrivalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrivalTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArrivalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArrivalTypeFilter<$PrismaModel>
    _max?: NestedEnumArrivalTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumIncidentileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileType | EnumIncidentileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentileTypeFilter<$PrismaModel> | $Enums.IncidentileType
  }

  export type EnumIncidentileClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileClass | EnumIncidentileClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentileClassNullableFilter<$PrismaModel> | $Enums.IncidentileClass | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type IncidentileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    class?: SortOrder
    namaPt?: SortOrder
    pt?: SortOrder
    sauna?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
  }

  export type IncidentileAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type IncidentileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    class?: SortOrder
    namaPt?: SortOrder
    pt?: SortOrder
    sauna?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
  }

  export type IncidentileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    class?: SortOrder
    namaPt?: SortOrder
    pt?: SortOrder
    sauna?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
  }

  export type IncidentileSumOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type EnumIncidentileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileType | EnumIncidentileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentileTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentileTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentileTypeFilter<$PrismaModel>
  }

  export type EnumIncidentileClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileClass | EnumIncidentileClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentileClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncidentileClass | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncidentileClassNullableFilter<$PrismaModel>
    _max?: NestedEnumIncidentileClassNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type TxFoCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxFoAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type TxFoMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxFoMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxFoSumOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type CanteenItemNullableScalarRelationFilter = {
    is?: CanteenItemWhereInput | null
    isNot?: CanteenItemWhereInput | null
  }

  export type TxCanteenCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    itemId?: SortOrder
    itemAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxCanteenAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemAmount?: SortOrder
    paymentAmount?: SortOrder
  }

  export type TxCanteenMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    itemId?: SortOrder
    itemAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxCanteenMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    itemId?: SortOrder
    itemAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxCanteenSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    itemAmount?: SortOrder
    paymentAmount?: SortOrder
  }

  export type TxAccountingCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxAccountingAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type TxAccountingMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxAccountingMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    paymentMethod?: SortOrder
    paymentAmount?: SortOrder
    date?: SortOrder
    billId?: SortOrder
  }

  export type TxAccountingSumOrderByAggregateInput = {
    id?: SortOrder
    paymentAmount?: SortOrder
  }

  export type ActivityMarketingListRelationFilter = {
    every?: ActivityMarketingWhereInput
    some?: ActivityMarketingWhereInput
    none?: ActivityMarketingWhereInput
  }

  export type ActivityMarketingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    kpi?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    kpi?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    kpi?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type ActivityMarketingCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    campaignId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ActivityMarketingAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type ActivityMarketingMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    campaignId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ActivityMarketingMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    campaignId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type ActivityMarketingSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type TxCanteenListRelationFilter = {
    every?: TxCanteenWhereInput
    some?: TxCanteenWhereInput
    none?: TxCanteenWhereInput
  }

  export type TxCanteenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CanteenItemNamePriceCompoundUniqueInput = {
    name: string
    price: number
  }

  export type CanteenItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanteenItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type CanteenItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanteenItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CanteenItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserActionsListRelationFilter = {
    every?: UserActionsWhereInput
    some?: UserActionsWhereInput
    none?: UserActionsWhereInput
  }

  export type UserActionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserActionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    time?: SortOrder
    description?: SortOrder
  }

  export type UserActionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    time?: SortOrder
    description?: SortOrder
  }

  export type UserActionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    time?: SortOrder
    description?: SortOrder
  }

  export type UserActionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type MonthlyReportCountOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    displayName?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    canteenItemsSold?: SortOrder
    finishedCampaigns?: SortOrder
    finishedCampaignNames?: SortOrder
    finishedCampaignActivities?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    updatedAt?: SortOrder
    incClassChartData?: SortOrder
    incGymChartData?: SortOrder
    memberChartData?: SortOrder
  }

  export type MonthlyReportAvgOrderByAggregateInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    finishedCampaigns?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
  }

  export type MonthlyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    displayName?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    finishedCampaigns?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyReportMinOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    displayName?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    finishedCampaigns?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
    status?: SortOrder
    generatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyReportSumOrderByAggregateInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    expiredMembers?: SortOrder
    newMembers?: SortOrder
    renewals?: SortOrder
    incidentiles?: SortOrder
    incidentilesGym?: SortOrder
    incidentilesClass?: SortOrder
    finishedCampaigns?: SortOrder
    foTotalIncome?: SortOrder
    canteenTotalIncome?: SortOrder
    accountingTotalIncome?: SortOrder
    foTotalExpenses?: SortOrder
    canteenTotalExpenses?: SortOrder
    accountingTotalExpenses?: SortOrder
    netIncome?: SortOrder
    cashBalance?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type SaunaUsageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SaunaUsageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SaunaUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SaunaUsageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SaunaUsageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoupleCreateNestedManyWithoutMember1Input = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleCreateNestedManyWithoutMember2Input = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type MemberArrivalCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput> | MemberArrivalCreateWithoutMemberInput[] | MemberArrivalUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberArrivalCreateOrConnectWithoutMemberInput | MemberArrivalCreateOrConnectWithoutMemberInput[]
    createMany?: MemberArrivalCreateManyMemberInputEnvelope
    connect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutMember1Input = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutMember2Input = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type MemberArrivalUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput> | MemberArrivalCreateWithoutMemberInput[] | MemberArrivalUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberArrivalCreateOrConnectWithoutMemberInput | MemberArrivalCreateOrConnectWithoutMemberInput[]
    createMany?: MemberArrivalCreateManyMemberInputEnvelope
    connect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumMembershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.MembershipType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type CoupleUpdateManyWithoutMember1NestedInput = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember1Input | CoupleUpsertWithWhereUniqueWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember1Input | CoupleUpdateWithWhereUniqueWithoutMember1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember1Input | CoupleUpdateManyWithWhereWithoutMember1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUpdateManyWithoutMember2NestedInput = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember2Input | CoupleUpsertWithWhereUniqueWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember2Input | CoupleUpdateWithWhereUniqueWithoutMember2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember2Input | CoupleUpdateManyWithWhereWithoutMember2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type MemberArrivalUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput> | MemberArrivalCreateWithoutMemberInput[] | MemberArrivalUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberArrivalCreateOrConnectWithoutMemberInput | MemberArrivalCreateOrConnectWithoutMemberInput[]
    upsert?: MemberArrivalUpsertWithWhereUniqueWithoutMemberInput | MemberArrivalUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberArrivalCreateManyMemberInputEnvelope
    set?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    disconnect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    delete?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    connect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    update?: MemberArrivalUpdateWithWhereUniqueWithoutMemberInput | MemberArrivalUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberArrivalUpdateManyWithWhereWithoutMemberInput | MemberArrivalUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberArrivalScalarWhereInput | MemberArrivalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoupleUncheckedUpdateManyWithoutMember1NestedInput = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember1Input | CoupleUpsertWithWhereUniqueWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember1Input | CoupleUpdateWithWhereUniqueWithoutMember1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember1Input | CoupleUpdateManyWithWhereWithoutMember1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUncheckedUpdateManyWithoutMember2NestedInput = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember2Input | CoupleUpsertWithWhereUniqueWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember2Input | CoupleUpdateWithWhereUniqueWithoutMember2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember2Input | CoupleUpdateManyWithWhereWithoutMember2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type MemberArrivalUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput> | MemberArrivalCreateWithoutMemberInput[] | MemberArrivalUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberArrivalCreateOrConnectWithoutMemberInput | MemberArrivalCreateOrConnectWithoutMemberInput[]
    upsert?: MemberArrivalUpsertWithWhereUniqueWithoutMemberInput | MemberArrivalUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberArrivalCreateManyMemberInputEnvelope
    set?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    disconnect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    delete?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    connect?: MemberArrivalWhereUniqueInput | MemberArrivalWhereUniqueInput[]
    update?: MemberArrivalUpdateWithWhereUniqueWithoutMemberInput | MemberArrivalUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberArrivalUpdateManyWithWhereWithoutMemberInput | MemberArrivalUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberArrivalScalarWhereInput | MemberArrivalScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutCouples1Input = {
    create?: XOR<MemberCreateWithoutCouples1Input, MemberUncheckedCreateWithoutCouples1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutCouples1Input
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutCouples2Input = {
    create?: XOR<MemberCreateWithoutCouples2Input, MemberUncheckedCreateWithoutCouples2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutCouples2Input
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutCouples1NestedInput = {
    create?: XOR<MemberCreateWithoutCouples1Input, MemberUncheckedCreateWithoutCouples1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutCouples1Input
    upsert?: MemberUpsertWithoutCouples1Input
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCouples1Input, MemberUpdateWithoutCouples1Input>, MemberUncheckedUpdateWithoutCouples1Input>
  }

  export type MemberUpdateOneRequiredWithoutCouples2NestedInput = {
    create?: XOR<MemberCreateWithoutCouples2Input, MemberUncheckedCreateWithoutCouples2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutCouples2Input
    upsert?: MemberUpsertWithoutCouples2Input
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCouples2Input, MemberUpdateWithoutCouples2Input>, MemberUncheckedUpdateWithoutCouples2Input>
  }

  export type MemberCreateNestedOneWithoutArrivalsInput = {
    create?: XOR<MemberCreateWithoutArrivalsInput, MemberUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutArrivalsInput
    connect?: MemberWhereUniqueInput
  }

  export type EnumArrivalTypeFieldUpdateOperationsInput = {
    set?: $Enums.ArrivalType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MemberUpdateOneRequiredWithoutArrivalsNestedInput = {
    create?: XOR<MemberCreateWithoutArrivalsInput, MemberUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutArrivalsInput
    upsert?: MemberUpsertWithoutArrivalsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutArrivalsInput, MemberUpdateWithoutArrivalsInput>, MemberUncheckedUpdateWithoutArrivalsInput>
  }

  export type EnumIncidentileTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentileType
  }

  export type NullableEnumIncidentileClassFieldUpdateOperationsInput = {
    set?: $Enums.IncidentileClass | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type CanteenItemCreateNestedOneWithoutTxCanteensInput = {
    create?: XOR<CanteenItemCreateWithoutTxCanteensInput, CanteenItemUncheckedCreateWithoutTxCanteensInput>
    connectOrCreate?: CanteenItemCreateOrConnectWithoutTxCanteensInput
    connect?: CanteenItemWhereUniqueInput
  }

  export type CanteenItemUpdateOneWithoutTxCanteensNestedInput = {
    create?: XOR<CanteenItemCreateWithoutTxCanteensInput, CanteenItemUncheckedCreateWithoutTxCanteensInput>
    connectOrCreate?: CanteenItemCreateOrConnectWithoutTxCanteensInput
    upsert?: CanteenItemUpsertWithoutTxCanteensInput
    disconnect?: CanteenItemWhereInput | boolean
    delete?: CanteenItemWhereInput | boolean
    connect?: CanteenItemWhereUniqueInput
    update?: XOR<XOR<CanteenItemUpdateToOneWithWhereWithoutTxCanteensInput, CanteenItemUpdateWithoutTxCanteensInput>, CanteenItemUncheckedUpdateWithoutTxCanteensInput>
  }

  export type ActivityMarketingCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput> | ActivityMarketingCreateWithoutCampaignInput[] | ActivityMarketingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ActivityMarketingCreateOrConnectWithoutCampaignInput | ActivityMarketingCreateOrConnectWithoutCampaignInput[]
    createMany?: ActivityMarketingCreateManyCampaignInputEnvelope
    connect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
  }

  export type ActivityMarketingUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput> | ActivityMarketingCreateWithoutCampaignInput[] | ActivityMarketingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ActivityMarketingCreateOrConnectWithoutCampaignInput | ActivityMarketingCreateOrConnectWithoutCampaignInput[]
    createMany?: ActivityMarketingCreateManyCampaignInputEnvelope
    connect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
  }

  export type ActivityMarketingUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput> | ActivityMarketingCreateWithoutCampaignInput[] | ActivityMarketingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ActivityMarketingCreateOrConnectWithoutCampaignInput | ActivityMarketingCreateOrConnectWithoutCampaignInput[]
    upsert?: ActivityMarketingUpsertWithWhereUniqueWithoutCampaignInput | ActivityMarketingUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ActivityMarketingCreateManyCampaignInputEnvelope
    set?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    disconnect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    delete?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    connect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    update?: ActivityMarketingUpdateWithWhereUniqueWithoutCampaignInput | ActivityMarketingUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ActivityMarketingUpdateManyWithWhereWithoutCampaignInput | ActivityMarketingUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ActivityMarketingScalarWhereInput | ActivityMarketingScalarWhereInput[]
  }

  export type ActivityMarketingUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput> | ActivityMarketingCreateWithoutCampaignInput[] | ActivityMarketingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ActivityMarketingCreateOrConnectWithoutCampaignInput | ActivityMarketingCreateOrConnectWithoutCampaignInput[]
    upsert?: ActivityMarketingUpsertWithWhereUniqueWithoutCampaignInput | ActivityMarketingUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ActivityMarketingCreateManyCampaignInputEnvelope
    set?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    disconnect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    delete?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    connect?: ActivityMarketingWhereUniqueInput | ActivityMarketingWhereUniqueInput[]
    update?: ActivityMarketingUpdateWithWhereUniqueWithoutCampaignInput | ActivityMarketingUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ActivityMarketingUpdateManyWithWhereWithoutCampaignInput | ActivityMarketingUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ActivityMarketingScalarWhereInput | ActivityMarketingScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<CampaignCreateWithoutActivitiesInput, CampaignUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutActivitiesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<CampaignCreateWithoutActivitiesInput, CampaignUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutActivitiesInput
    upsert?: CampaignUpsertWithoutActivitiesInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutActivitiesInput, CampaignUpdateWithoutActivitiesInput>, CampaignUncheckedUpdateWithoutActivitiesInput>
  }

  export type TxCanteenCreateNestedManyWithoutItemInput = {
    create?: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput> | TxCanteenCreateWithoutItemInput[] | TxCanteenUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TxCanteenCreateOrConnectWithoutItemInput | TxCanteenCreateOrConnectWithoutItemInput[]
    createMany?: TxCanteenCreateManyItemInputEnvelope
    connect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
  }

  export type TxCanteenUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput> | TxCanteenCreateWithoutItemInput[] | TxCanteenUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TxCanteenCreateOrConnectWithoutItemInput | TxCanteenCreateOrConnectWithoutItemInput[]
    createMany?: TxCanteenCreateManyItemInputEnvelope
    connect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
  }

  export type TxCanteenUpdateManyWithoutItemNestedInput = {
    create?: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput> | TxCanteenCreateWithoutItemInput[] | TxCanteenUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TxCanteenCreateOrConnectWithoutItemInput | TxCanteenCreateOrConnectWithoutItemInput[]
    upsert?: TxCanteenUpsertWithWhereUniqueWithoutItemInput | TxCanteenUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TxCanteenCreateManyItemInputEnvelope
    set?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    disconnect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    delete?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    connect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    update?: TxCanteenUpdateWithWhereUniqueWithoutItemInput | TxCanteenUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TxCanteenUpdateManyWithWhereWithoutItemInput | TxCanteenUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TxCanteenScalarWhereInput | TxCanteenScalarWhereInput[]
  }

  export type TxCanteenUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput> | TxCanteenCreateWithoutItemInput[] | TxCanteenUncheckedCreateWithoutItemInput[]
    connectOrCreate?: TxCanteenCreateOrConnectWithoutItemInput | TxCanteenCreateOrConnectWithoutItemInput[]
    upsert?: TxCanteenUpsertWithWhereUniqueWithoutItemInput | TxCanteenUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: TxCanteenCreateManyItemInputEnvelope
    set?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    disconnect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    delete?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    connect?: TxCanteenWhereUniqueInput | TxCanteenWhereUniqueInput[]
    update?: TxCanteenUpdateWithWhereUniqueWithoutItemInput | TxCanteenUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: TxCanteenUpdateManyWithWhereWithoutItemInput | TxCanteenUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: TxCanteenScalarWhereInput | TxCanteenScalarWhereInput[]
  }

  export type UserActionsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput> | UserActionsCreateWithoutUserInput[] | UserActionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionsCreateOrConnectWithoutUserInput | UserActionsCreateOrConnectWithoutUserInput[]
    createMany?: UserActionsCreateManyUserInputEnvelope
    connect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
  }

  export type UserActionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput> | UserActionsCreateWithoutUserInput[] | UserActionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionsCreateOrConnectWithoutUserInput | UserActionsCreateOrConnectWithoutUserInput[]
    createMany?: UserActionsCreateManyUserInputEnvelope
    connect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserActionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput> | UserActionsCreateWithoutUserInput[] | UserActionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionsCreateOrConnectWithoutUserInput | UserActionsCreateOrConnectWithoutUserInput[]
    upsert?: UserActionsUpsertWithWhereUniqueWithoutUserInput | UserActionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActionsCreateManyUserInputEnvelope
    set?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    disconnect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    delete?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    connect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    update?: UserActionsUpdateWithWhereUniqueWithoutUserInput | UserActionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActionsUpdateManyWithWhereWithoutUserInput | UserActionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActionsScalarWhereInput | UserActionsScalarWhereInput[]
  }

  export type UserActionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput> | UserActionsCreateWithoutUserInput[] | UserActionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionsCreateOrConnectWithoutUserInput | UserActionsCreateOrConnectWithoutUserInput[]
    upsert?: UserActionsUpsertWithWhereUniqueWithoutUserInput | UserActionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActionsCreateManyUserInputEnvelope
    set?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    disconnect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    delete?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    connect?: UserActionsWhereUniqueInput | UserActionsWhereUniqueInput[]
    update?: UserActionsUpdateWithWhereUniqueWithoutUserInput | UserActionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActionsUpdateManyWithWhereWithoutUserInput | UserActionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActionsScalarWhereInput | UserActionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActionsInput = {
    create?: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActionsInput
    upsert?: UserUpsertWithoutActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActionsInput, UserUpdateWithoutActionsInput>, UserUncheckedUpdateWithoutActionsInput>
  }

  export type MonthlyReportCreatefinishedCampaignNamesInput = {
    set: string[]
  }

  export type MonthlyReportCreatefinishedCampaignActivitiesInput = {
    set: string[]
  }

  export type MonthlyReportUpdatefinishedCampaignNamesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MonthlyReportUpdatefinishedCampaignActivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeFilter<$PrismaModel> | $Enums.MembershipType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.MembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumMembershipTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type NestedEnumArrivalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrivalType | EnumArrivalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrivalTypeFilter<$PrismaModel> | $Enums.ArrivalType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumArrivalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrivalType | EnumArrivalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrivalType[] | ListEnumArrivalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrivalTypeWithAggregatesFilter<$PrismaModel> | $Enums.ArrivalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArrivalTypeFilter<$PrismaModel>
    _max?: NestedEnumArrivalTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumIncidentileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileType | EnumIncidentileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentileTypeFilter<$PrismaModel> | $Enums.IncidentileType
  }

  export type NestedEnumIncidentileClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileClass | EnumIncidentileClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentileClassNullableFilter<$PrismaModel> | $Enums.IncidentileClass | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumIncidentileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileType | EnumIncidentileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentileType[] | ListEnumIncidentileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentileTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentileTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentileTypeFilter<$PrismaModel>
  }

  export type NestedEnumIncidentileClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentileClass | EnumIncidentileClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentileClass[] | ListEnumIncidentileClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentileClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncidentileClass | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncidentileClassNullableFilter<$PrismaModel>
    _max?: NestedEnumIncidentileClassNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type CoupleCreateWithoutMember1Input = {
    member2: MemberCreateNestedOneWithoutCouples2Input
  }

  export type CoupleUncheckedCreateWithoutMember1Input = {
    id?: number
    member2Id: number
  }

  export type CoupleCreateOrConnectWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input>
  }

  export type CoupleCreateManyMember1InputEnvelope = {
    data: CoupleCreateManyMember1Input | CoupleCreateManyMember1Input[]
    skipDuplicates?: boolean
  }

  export type CoupleCreateWithoutMember2Input = {
    member1: MemberCreateNestedOneWithoutCouples1Input
  }

  export type CoupleUncheckedCreateWithoutMember2Input = {
    id?: number
    member1Id: number
  }

  export type CoupleCreateOrConnectWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input>
  }

  export type CoupleCreateManyMember2InputEnvelope = {
    data: CoupleCreateManyMember2Input | CoupleCreateManyMember2Input[]
    skipDuplicates?: boolean
  }

  export type MemberArrivalCreateWithoutMemberInput = {
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
  }

  export type MemberArrivalUncheckedCreateWithoutMemberInput = {
    id?: number
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
  }

  export type MemberArrivalCreateOrConnectWithoutMemberInput = {
    where: MemberArrivalWhereUniqueInput
    create: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput>
  }

  export type MemberArrivalCreateManyMemberInputEnvelope = {
    data: MemberArrivalCreateManyMemberInput | MemberArrivalCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CoupleUpsertWithWhereUniqueWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutMember1Input, CoupleUncheckedUpdateWithoutMember1Input>
    create: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutMember1Input, CoupleUncheckedUpdateWithoutMember1Input>
  }

  export type CoupleUpdateManyWithWhereWithoutMember1Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutMember1Input>
  }

  export type CoupleScalarWhereInput = {
    AND?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
    OR?: CoupleScalarWhereInput[]
    NOT?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
    id?: IntFilter<"Couple"> | number
    member1Id?: IntFilter<"Couple"> | number
    member2Id?: IntFilter<"Couple"> | number
  }

  export type CoupleUpsertWithWhereUniqueWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutMember2Input, CoupleUncheckedUpdateWithoutMember2Input>
    create: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutMember2Input, CoupleUncheckedUpdateWithoutMember2Input>
  }

  export type CoupleUpdateManyWithWhereWithoutMember2Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutMember2Input>
  }

  export type MemberArrivalUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberArrivalWhereUniqueInput
    update: XOR<MemberArrivalUpdateWithoutMemberInput, MemberArrivalUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberArrivalCreateWithoutMemberInput, MemberArrivalUncheckedCreateWithoutMemberInput>
  }

  export type MemberArrivalUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberArrivalWhereUniqueInput
    data: XOR<MemberArrivalUpdateWithoutMemberInput, MemberArrivalUncheckedUpdateWithoutMemberInput>
  }

  export type MemberArrivalUpdateManyWithWhereWithoutMemberInput = {
    where: MemberArrivalScalarWhereInput
    data: XOR<MemberArrivalUpdateManyMutationInput, MemberArrivalUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberArrivalScalarWhereInput = {
    AND?: MemberArrivalScalarWhereInput | MemberArrivalScalarWhereInput[]
    OR?: MemberArrivalScalarWhereInput[]
    NOT?: MemberArrivalScalarWhereInput | MemberArrivalScalarWhereInput[]
    id?: IntFilter<"MemberArrival"> | number
    memberId?: IntFilter<"MemberArrival"> | number
    arrivalDate?: DateTimeFilter<"MemberArrival"> | Date | string
    arrivalType?: EnumArrivalTypeFilter<"MemberArrival"> | $Enums.ArrivalType
    namaPt?: StringNullableFilter<"MemberArrival"> | string | null
  }

  export type MemberCreateWithoutCouples1Input = {
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples2?: CoupleCreateNestedManyWithoutMember2Input
    arrivals?: MemberArrivalCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCouples1Input = {
    id?: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    arrivals?: MemberArrivalUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCouples1Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCouples1Input, MemberUncheckedCreateWithoutCouples1Input>
  }

  export type MemberCreateWithoutCouples2Input = {
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleCreateNestedManyWithoutMember1Input
    arrivals?: MemberArrivalCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCouples2Input = {
    id?: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    arrivals?: MemberArrivalUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCouples2Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCouples2Input, MemberUncheckedCreateWithoutCouples2Input>
  }

  export type MemberUpsertWithoutCouples1Input = {
    update: XOR<MemberUpdateWithoutCouples1Input, MemberUncheckedUpdateWithoutCouples1Input>
    create: XOR<MemberCreateWithoutCouples1Input, MemberUncheckedCreateWithoutCouples1Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCouples1Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCouples1Input, MemberUncheckedUpdateWithoutCouples1Input>
  }

  export type MemberUpdateWithoutCouples1Input = {
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples2?: CoupleUpdateManyWithoutMember2NestedInput
    arrivals?: MemberArrivalUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCouples1Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    arrivals?: MemberArrivalUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUpsertWithoutCouples2Input = {
    update: XOR<MemberUpdateWithoutCouples2Input, MemberUncheckedUpdateWithoutCouples2Input>
    create: XOR<MemberCreateWithoutCouples2Input, MemberUncheckedCreateWithoutCouples2Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCouples2Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCouples2Input, MemberUncheckedUpdateWithoutCouples2Input>
  }

  export type MemberUpdateWithoutCouples2Input = {
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUpdateManyWithoutMember1NestedInput
    arrivals?: MemberArrivalUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCouples2Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    arrivals?: MemberArrivalUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutArrivalsInput = {
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleCreateNestedManyWithoutMember1Input
    couples2?: CoupleCreateNestedManyWithoutMember2Input
  }

  export type MemberUncheckedCreateWithoutArrivalsInput = {
    id?: number
    name: string
    nik: string
    phone: string
    membership: $Enums.MembershipType
    ptAmount?: number | null
    joinDate: Date | string
    expiryDate: Date | string
    status: $Enums.MemberStatus
    couples1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    couples2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
  }

  export type MemberCreateOrConnectWithoutArrivalsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutArrivalsInput, MemberUncheckedCreateWithoutArrivalsInput>
  }

  export type MemberUpsertWithoutArrivalsInput = {
    update: XOR<MemberUpdateWithoutArrivalsInput, MemberUncheckedUpdateWithoutArrivalsInput>
    create: XOR<MemberCreateWithoutArrivalsInput, MemberUncheckedCreateWithoutArrivalsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutArrivalsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutArrivalsInput, MemberUncheckedUpdateWithoutArrivalsInput>
  }

  export type MemberUpdateWithoutArrivalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUpdateManyWithoutMember1NestedInput
    couples2?: CoupleUpdateManyWithoutMember2NestedInput
  }

  export type MemberUncheckedUpdateWithoutArrivalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membership?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    ptAmount?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    couples1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    couples2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
  }

  export type CanteenItemCreateWithoutTxCanteensInput = {
    name: string
    price: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanteenItemUncheckedCreateWithoutTxCanteensInput = {
    id?: number
    name: string
    price: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CanteenItemCreateOrConnectWithoutTxCanteensInput = {
    where: CanteenItemWhereUniqueInput
    create: XOR<CanteenItemCreateWithoutTxCanteensInput, CanteenItemUncheckedCreateWithoutTxCanteensInput>
  }

  export type CanteenItemUpsertWithoutTxCanteensInput = {
    update: XOR<CanteenItemUpdateWithoutTxCanteensInput, CanteenItemUncheckedUpdateWithoutTxCanteensInput>
    create: XOR<CanteenItemCreateWithoutTxCanteensInput, CanteenItemUncheckedCreateWithoutTxCanteensInput>
    where?: CanteenItemWhereInput
  }

  export type CanteenItemUpdateToOneWithWhereWithoutTxCanteensInput = {
    where?: CanteenItemWhereInput
    data: XOR<CanteenItemUpdateWithoutTxCanteensInput, CanteenItemUncheckedUpdateWithoutTxCanteensInput>
  }

  export type CanteenItemUpdateWithoutTxCanteensInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanteenItemUncheckedUpdateWithoutTxCanteensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMarketingCreateWithoutCampaignInput = {
    username: string
    title: string
    description?: string | null
    date: Date | string
  }

  export type ActivityMarketingUncheckedCreateWithoutCampaignInput = {
    id?: number
    username: string
    title: string
    description?: string | null
    date: Date | string
  }

  export type ActivityMarketingCreateOrConnectWithoutCampaignInput = {
    where: ActivityMarketingWhereUniqueInput
    create: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput>
  }

  export type ActivityMarketingCreateManyCampaignInputEnvelope = {
    data: ActivityMarketingCreateManyCampaignInput | ActivityMarketingCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type ActivityMarketingUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ActivityMarketingWhereUniqueInput
    update: XOR<ActivityMarketingUpdateWithoutCampaignInput, ActivityMarketingUncheckedUpdateWithoutCampaignInput>
    create: XOR<ActivityMarketingCreateWithoutCampaignInput, ActivityMarketingUncheckedCreateWithoutCampaignInput>
  }

  export type ActivityMarketingUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ActivityMarketingWhereUniqueInput
    data: XOR<ActivityMarketingUpdateWithoutCampaignInput, ActivityMarketingUncheckedUpdateWithoutCampaignInput>
  }

  export type ActivityMarketingUpdateManyWithWhereWithoutCampaignInput = {
    where: ActivityMarketingScalarWhereInput
    data: XOR<ActivityMarketingUpdateManyMutationInput, ActivityMarketingUncheckedUpdateManyWithoutCampaignInput>
  }

  export type ActivityMarketingScalarWhereInput = {
    AND?: ActivityMarketingScalarWhereInput | ActivityMarketingScalarWhereInput[]
    OR?: ActivityMarketingScalarWhereInput[]
    NOT?: ActivityMarketingScalarWhereInput | ActivityMarketingScalarWhereInput[]
    id?: IntFilter<"ActivityMarketing"> | number
    username?: StringFilter<"ActivityMarketing"> | string
    campaignId?: IntNullableFilter<"ActivityMarketing"> | number | null
    title?: StringFilter<"ActivityMarketing"> | string
    description?: StringNullableFilter<"ActivityMarketing"> | string | null
    date?: DateTimeFilter<"ActivityMarketing"> | Date | string
  }

  export type CampaignCreateWithoutActivitiesInput = {
    title: string
    description?: string | null
    kpi?: string | null
    startDate: Date | string
    endDate: Date | string
    status: string
  }

  export type CampaignUncheckedCreateWithoutActivitiesInput = {
    id?: number
    title: string
    description?: string | null
    kpi?: string | null
    startDate: Date | string
    endDate: Date | string
    status: string
  }

  export type CampaignCreateOrConnectWithoutActivitiesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutActivitiesInput, CampaignUncheckedCreateWithoutActivitiesInput>
  }

  export type CampaignUpsertWithoutActivitiesInput = {
    update: XOR<CampaignUpdateWithoutActivitiesInput, CampaignUncheckedUpdateWithoutActivitiesInput>
    create: XOR<CampaignCreateWithoutActivitiesInput, CampaignUncheckedCreateWithoutActivitiesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutActivitiesInput, CampaignUncheckedUpdateWithoutActivitiesInput>
  }

  export type CampaignUpdateWithoutActivitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    kpi?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TxCanteenCreateWithoutItemInput = {
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxCanteenUncheckedCreateWithoutItemInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxCanteenCreateOrConnectWithoutItemInput = {
    where: TxCanteenWhereUniqueInput
    create: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput>
  }

  export type TxCanteenCreateManyItemInputEnvelope = {
    data: TxCanteenCreateManyItemInput | TxCanteenCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type TxCanteenUpsertWithWhereUniqueWithoutItemInput = {
    where: TxCanteenWhereUniqueInput
    update: XOR<TxCanteenUpdateWithoutItemInput, TxCanteenUncheckedUpdateWithoutItemInput>
    create: XOR<TxCanteenCreateWithoutItemInput, TxCanteenUncheckedCreateWithoutItemInput>
  }

  export type TxCanteenUpdateWithWhereUniqueWithoutItemInput = {
    where: TxCanteenWhereUniqueInput
    data: XOR<TxCanteenUpdateWithoutItemInput, TxCanteenUncheckedUpdateWithoutItemInput>
  }

  export type TxCanteenUpdateManyWithWhereWithoutItemInput = {
    where: TxCanteenScalarWhereInput
    data: XOR<TxCanteenUpdateManyMutationInput, TxCanteenUncheckedUpdateManyWithoutItemInput>
  }

  export type TxCanteenScalarWhereInput = {
    AND?: TxCanteenScalarWhereInput | TxCanteenScalarWhereInput[]
    OR?: TxCanteenScalarWhereInput[]
    NOT?: TxCanteenScalarWhereInput | TxCanteenScalarWhereInput[]
    id?: IntFilter<"TxCanteen"> | number
    type?: EnumTransactionTypeFilter<"TxCanteen"> | $Enums.TransactionType
    title?: StringNullableFilter<"TxCanteen"> | string | null
    note?: StringNullableFilter<"TxCanteen"> | string | null
    itemId?: IntNullableFilter<"TxCanteen"> | number | null
    itemAmount?: IntNullableFilter<"TxCanteen"> | number | null
    paymentMethod?: EnumPaymentMethodFilter<"TxCanteen"> | $Enums.PaymentMethod
    paymentAmount?: IntFilter<"TxCanteen"> | number
    date?: DateTimeFilter<"TxCanteen"> | Date | string
    billId?: StringNullableFilter<"TxCanteen"> | string | null
  }

  export type UserActionsCreateWithoutUserInput = {
    time?: Date | string
    description: string
  }

  export type UserActionsUncheckedCreateWithoutUserInput = {
    id?: number
    time?: Date | string
    description: string
  }

  export type UserActionsCreateOrConnectWithoutUserInput = {
    where: UserActionsWhereUniqueInput
    create: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput>
  }

  export type UserActionsCreateManyUserInputEnvelope = {
    data: UserActionsCreateManyUserInput | UserActionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserActionsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserActionsWhereUniqueInput
    update: XOR<UserActionsUpdateWithoutUserInput, UserActionsUncheckedUpdateWithoutUserInput>
    create: XOR<UserActionsCreateWithoutUserInput, UserActionsUncheckedCreateWithoutUserInput>
  }

  export type UserActionsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserActionsWhereUniqueInput
    data: XOR<UserActionsUpdateWithoutUserInput, UserActionsUncheckedUpdateWithoutUserInput>
  }

  export type UserActionsUpdateManyWithWhereWithoutUserInput = {
    where: UserActionsScalarWhereInput
    data: XOR<UserActionsUpdateManyMutationInput, UserActionsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserActionsScalarWhereInput = {
    AND?: UserActionsScalarWhereInput | UserActionsScalarWhereInput[]
    OR?: UserActionsScalarWhereInput[]
    NOT?: UserActionsScalarWhereInput | UserActionsScalarWhereInput[]
    id?: IntFilter<"UserActions"> | number
    userId?: IntFilter<"UserActions"> | number
    time?: DateTimeFilter<"UserActions"> | Date | string
    description?: StringFilter<"UserActions"> | string
  }

  export type UserCreateWithoutActionsInput = {
    email?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    name?: string | null
  }

  export type UserUncheckedCreateWithoutActionsInput = {
    id?: number
    email?: string | null
    username?: string | null
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    name?: string | null
  }

  export type UserCreateOrConnectWithoutActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
  }

  export type UserUpsertWithoutActionsInput = {
    update: XOR<UserUpdateWithoutActionsInput, UserUncheckedUpdateWithoutActionsInput>
    create: XOR<UserCreateWithoutActionsInput, UserUncheckedCreateWithoutActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActionsInput, UserUncheckedUpdateWithoutActionsInput>
  }

  export type UserUpdateWithoutActionsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoupleCreateManyMember1Input = {
    id?: number
    member2Id: number
  }

  export type CoupleCreateManyMember2Input = {
    id?: number
    member1Id: number
  }

  export type MemberArrivalCreateManyMemberInput = {
    id?: number
    arrivalDate: Date | string
    arrivalType: $Enums.ArrivalType
    namaPt?: string | null
  }

  export type CoupleUpdateWithoutMember1Input = {
    member2?: MemberUpdateOneRequiredWithoutCouples2NestedInput
  }

  export type CoupleUncheckedUpdateWithoutMember1Input = {
    id?: IntFieldUpdateOperationsInput | number
    member2Id?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleUncheckedUpdateManyWithoutMember1Input = {
    id?: IntFieldUpdateOperationsInput | number
    member2Id?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleUpdateWithoutMember2Input = {
    member1?: MemberUpdateOneRequiredWithoutCouples1NestedInput
  }

  export type CoupleUncheckedUpdateWithoutMember2Input = {
    id?: IntFieldUpdateOperationsInput | number
    member1Id?: IntFieldUpdateOperationsInput | number
  }

  export type CoupleUncheckedUpdateManyWithoutMember2Input = {
    id?: IntFieldUpdateOperationsInput | number
    member1Id?: IntFieldUpdateOperationsInput | number
  }

  export type MemberArrivalUpdateWithoutMemberInput = {
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberArrivalUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberArrivalUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalType?: EnumArrivalTypeFieldUpdateOperationsInput | $Enums.ArrivalType
    namaPt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityMarketingCreateManyCampaignInput = {
    id?: number
    username: string
    title: string
    description?: string | null
    date: Date | string
  }

  export type ActivityMarketingUpdateWithoutCampaignInput = {
    username?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMarketingUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMarketingUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxCanteenCreateManyItemInput = {
    id?: number
    type: $Enums.TransactionType
    title?: string | null
    note?: string | null
    itemAmount?: number | null
    paymentMethod: $Enums.PaymentMethod
    paymentAmount: number
    date: Date | string
    billId?: string | null
  }

  export type TxCanteenUpdateWithoutItemInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxCanteenUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TxCanteenUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    itemAmount?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentAmount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserActionsCreateManyUserInput = {
    id?: number
    time?: Date | string
    description: string
  }

  export type UserActionsUpdateWithoutUserInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserActionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserActionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}