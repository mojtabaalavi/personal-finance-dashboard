
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AssetHistory
 * 
 */
export type AssetHistory = $Result.DefaultSelection<Prisma.$AssetHistoryPayload>
/**
 * Model Liability
 * 
 */
export type Liability = $Result.DefaultSelection<Prisma.$LiabilityPayload>
/**
 * Model LiabilityHistory
 * 
 */
export type LiabilityHistory = $Result.DefaultSelection<Prisma.$LiabilityHistoryPayload>
/**
 * Model Insurance
 * 
 */
export type Insurance = $Result.DefaultSelection<Prisma.$InsurancePayload>
/**
 * Model RentalAgreement
 * 
 */
export type RentalAgreement = $Result.DefaultSelection<Prisma.$RentalAgreementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssetType: {
  PROPERTY_OWN: 'PROPERTY_OWN',
  PROPERTY_RENTAL: 'PROPERTY_RENTAL',
  VEHICLE: 'VEHICLE',
  CASH: 'CASH',
  SUPERANNUATION: 'SUPERANNUATION',
  CONTENTS: 'CONTENTS'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]

}

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assets
 * const assets = await prisma.asset.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Assets
   * const assets = await prisma.asset.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetHistory`: Exposes CRUD operations for the **AssetHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetHistories
    * const assetHistories = await prisma.assetHistory.findMany()
    * ```
    */
  get assetHistory(): Prisma.AssetHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liability`: Exposes CRUD operations for the **Liability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Liabilities
    * const liabilities = await prisma.liability.findMany()
    * ```
    */
  get liability(): Prisma.LiabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liabilityHistory`: Exposes CRUD operations for the **LiabilityHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiabilityHistories
    * const liabilityHistories = await prisma.liabilityHistory.findMany()
    * ```
    */
  get liabilityHistory(): Prisma.LiabilityHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insurance`: Exposes CRUD operations for the **Insurance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insurances
    * const insurances = await prisma.insurance.findMany()
    * ```
    */
  get insurance(): Prisma.InsuranceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalAgreement`: Exposes CRUD operations for the **RentalAgreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalAgreements
    * const rentalAgreements = await prisma.rentalAgreement.findMany()
    * ```
    */
  get rentalAgreement(): Prisma.RentalAgreementDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Asset: 'Asset',
    AssetHistory: 'AssetHistory',
    Liability: 'Liability',
    LiabilityHistory: 'LiabilityHistory',
    Insurance: 'Insurance',
    RentalAgreement: 'RentalAgreement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "asset" | "assetHistory" | "liability" | "liabilityHistory" | "insurance" | "rentalAgreement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AssetHistory: {
        payload: Prisma.$AssetHistoryPayload<ExtArgs>
        fields: Prisma.AssetHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          findFirst: {
            args: Prisma.AssetHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          findMany: {
            args: Prisma.AssetHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>[]
          }
          create: {
            args: Prisma.AssetHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          createMany: {
            args: Prisma.AssetHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>[]
          }
          delete: {
            args: Prisma.AssetHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          update: {
            args: Prisma.AssetHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AssetHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AssetHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          aggregate: {
            args: Prisma.AssetHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetHistory>
          }
          groupBy: {
            args: Prisma.AssetHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AssetHistoryCountAggregateOutputType> | number
          }
        }
      }
      Liability: {
        payload: Prisma.$LiabilityPayload<ExtArgs>
        fields: Prisma.LiabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          findFirst: {
            args: Prisma.LiabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          findMany: {
            args: Prisma.LiabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>[]
          }
          create: {
            args: Prisma.LiabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          createMany: {
            args: Prisma.LiabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>[]
          }
          delete: {
            args: Prisma.LiabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          update: {
            args: Prisma.LiabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          deleteMany: {
            args: Prisma.LiabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>[]
          }
          upsert: {
            args: Prisma.LiabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityPayload>
          }
          aggregate: {
            args: Prisma.LiabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiability>
          }
          groupBy: {
            args: Prisma.LiabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiabilityCountArgs<ExtArgs>
            result: $Utils.Optional<LiabilityCountAggregateOutputType> | number
          }
        }
      }
      LiabilityHistory: {
        payload: Prisma.$LiabilityHistoryPayload<ExtArgs>
        fields: Prisma.LiabilityHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiabilityHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiabilityHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          findFirst: {
            args: Prisma.LiabilityHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiabilityHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          findMany: {
            args: Prisma.LiabilityHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>[]
          }
          create: {
            args: Prisma.LiabilityHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          createMany: {
            args: Prisma.LiabilityHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiabilityHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>[]
          }
          delete: {
            args: Prisma.LiabilityHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          update: {
            args: Prisma.LiabilityHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LiabilityHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiabilityHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiabilityHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LiabilityHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiabilityHistoryPayload>
          }
          aggregate: {
            args: Prisma.LiabilityHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiabilityHistory>
          }
          groupBy: {
            args: Prisma.LiabilityHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiabilityHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiabilityHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LiabilityHistoryCountAggregateOutputType> | number
          }
        }
      }
      Insurance: {
        payload: Prisma.$InsurancePayload<ExtArgs>
        fields: Prisma.InsuranceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsuranceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsuranceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          findFirst: {
            args: Prisma.InsuranceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsuranceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          findMany: {
            args: Prisma.InsuranceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[]
          }
          create: {
            args: Prisma.InsuranceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          createMany: {
            args: Prisma.InsuranceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsuranceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[]
          }
          delete: {
            args: Prisma.InsuranceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          update: {
            args: Prisma.InsuranceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          deleteMany: {
            args: Prisma.InsuranceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsuranceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsuranceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>[]
          }
          upsert: {
            args: Prisma.InsuranceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurancePayload>
          }
          aggregate: {
            args: Prisma.InsuranceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsurance>
          }
          groupBy: {
            args: Prisma.InsuranceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsuranceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsuranceCountArgs<ExtArgs>
            result: $Utils.Optional<InsuranceCountAggregateOutputType> | number
          }
        }
      }
      RentalAgreement: {
        payload: Prisma.$RentalAgreementPayload<ExtArgs>
        fields: Prisma.RentalAgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalAgreementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalAgreementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          findFirst: {
            args: Prisma.RentalAgreementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalAgreementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          findMany: {
            args: Prisma.RentalAgreementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          create: {
            args: Prisma.RentalAgreementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          createMany: {
            args: Prisma.RentalAgreementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalAgreementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          delete: {
            args: Prisma.RentalAgreementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          update: {
            args: Prisma.RentalAgreementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          deleteMany: {
            args: Prisma.RentalAgreementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalAgreementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalAgreementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          upsert: {
            args: Prisma.RentalAgreementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          aggregate: {
            args: Prisma.RentalAgreementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalAgreement>
          }
          groupBy: {
            args: Prisma.RentalAgreementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalAgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalAgreementCountArgs<ExtArgs>
            result: $Utils.Optional<RentalAgreementCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    asset?: AssetOmit
    assetHistory?: AssetHistoryOmit
    liability?: LiabilityOmit
    liabilityHistory?: LiabilityHistoryOmit
    insurance?: InsuranceOmit
    rentalAgreement?: RentalAgreementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    liabilities: number
    insurances: number
    agreements: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liabilities?: boolean | AssetCountOutputTypeCountLiabilitiesArgs
    insurances?: boolean | AssetCountOutputTypeCountInsurancesArgs
    agreements?: boolean | AssetCountOutputTypeCountAgreementsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountLiabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiabilityWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountInsurancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuranceWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalAgreementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type AssetSumAggregateOutputType = {
    value: Decimal | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AssetType | null
    value: Decimal | null
    owner: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AssetType | null
    value: Decimal | null
    owner: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    name: number
    type: number
    value: number
    owner: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    value?: true
  }

  export type AssetSumAggregateInputType = {
    value?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    owner?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    owner?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    owner?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    name: string
    type: $Enums.AssetType
    value: Decimal
    owner: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    owner?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    liabilities?: boolean | Asset$liabilitiesArgs<ExtArgs>
    insurances?: boolean | Asset$insurancesArgs<ExtArgs>
    agreements?: boolean | Asset$agreementsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    owner?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    owner?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    owner?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "value" | "owner" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liabilities?: boolean | Asset$liabilitiesArgs<ExtArgs>
    insurances?: boolean | Asset$insurancesArgs<ExtArgs>
    agreements?: boolean | Asset$agreementsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      liabilities: Prisma.$LiabilityPayload<ExtArgs>[]
      insurances: Prisma.$InsurancePayload<ExtArgs>[]
      agreements: Prisma.$RentalAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.AssetType
      value: Prisma.Decimal
      owner: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liabilities<T extends Asset$liabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$liabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    insurances<T extends Asset$insurancesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$insurancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agreements<T extends Asset$agreementsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$agreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly type: FieldRef<"Asset", 'AssetType'>
    readonly value: FieldRef<"Asset", 'Decimal'>
    readonly owner: FieldRef<"Asset", 'String'>
    readonly address: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.liabilities
   */
  export type Asset$liabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    where?: LiabilityWhereInput
    orderBy?: LiabilityOrderByWithRelationInput | LiabilityOrderByWithRelationInput[]
    cursor?: LiabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiabilityScalarFieldEnum | LiabilityScalarFieldEnum[]
  }

  /**
   * Asset.insurances
   */
  export type Asset$insurancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    where?: InsuranceWhereInput
    orderBy?: InsuranceOrderByWithRelationInput | InsuranceOrderByWithRelationInput[]
    cursor?: InsuranceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[]
  }

  /**
   * Asset.agreements
   */
  export type Asset$agreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    where?: RentalAgreementWhereInput
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    cursor?: RentalAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model AssetHistory
   */

  export type AggregateAssetHistory = {
    _count: AssetHistoryCountAggregateOutputType | null
    _avg: AssetHistoryAvgAggregateOutputType | null
    _sum: AssetHistorySumAggregateOutputType | null
    _min: AssetHistoryMinAggregateOutputType | null
    _max: AssetHistoryMaxAggregateOutputType | null
  }

  export type AssetHistoryAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type AssetHistorySumAggregateOutputType = {
    value: Decimal | null
  }

  export type AssetHistoryMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    value: Decimal | null
    changedAt: Date | null
    changedBy: string | null
  }

  export type AssetHistoryMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    value: Decimal | null
    changedAt: Date | null
    changedBy: string | null
  }

  export type AssetHistoryCountAggregateOutputType = {
    id: number
    assetId: number
    value: number
    changedAt: number
    changedBy: number
    _all: number
  }


  export type AssetHistoryAvgAggregateInputType = {
    value?: true
  }

  export type AssetHistorySumAggregateInputType = {
    value?: true
  }

  export type AssetHistoryMinAggregateInputType = {
    id?: true
    assetId?: true
    value?: true
    changedAt?: true
    changedBy?: true
  }

  export type AssetHistoryMaxAggregateInputType = {
    id?: true
    assetId?: true
    value?: true
    changedAt?: true
    changedBy?: true
  }

  export type AssetHistoryCountAggregateInputType = {
    id?: true
    assetId?: true
    value?: true
    changedAt?: true
    changedBy?: true
    _all?: true
  }

  export type AssetHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetHistory to aggregate.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetHistories
    **/
    _count?: true | AssetHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetHistoryMaxAggregateInputType
  }

  export type GetAssetHistoryAggregateType<T extends AssetHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetHistory[P]>
      : GetScalarType<T[P], AggregateAssetHistory[P]>
  }




  export type AssetHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetHistoryWhereInput
    orderBy?: AssetHistoryOrderByWithAggregationInput | AssetHistoryOrderByWithAggregationInput[]
    by: AssetHistoryScalarFieldEnum[] | AssetHistoryScalarFieldEnum
    having?: AssetHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetHistoryCountAggregateInputType | true
    _avg?: AssetHistoryAvgAggregateInputType
    _sum?: AssetHistorySumAggregateInputType
    _min?: AssetHistoryMinAggregateInputType
    _max?: AssetHistoryMaxAggregateInputType
  }

  export type AssetHistoryGroupByOutputType = {
    id: string
    assetId: string
    value: Decimal
    changedAt: Date
    changedBy: string | null
    _count: AssetHistoryCountAggregateOutputType | null
    _avg: AssetHistoryAvgAggregateOutputType | null
    _sum: AssetHistorySumAggregateOutputType | null
    _min: AssetHistoryMinAggregateOutputType | null
    _max: AssetHistoryMaxAggregateOutputType | null
  }

  type GetAssetHistoryGroupByPayload<T extends AssetHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AssetHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AssetHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    value?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["assetHistory"]>

  export type AssetHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    value?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["assetHistory"]>

  export type AssetHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    value?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["assetHistory"]>

  export type AssetHistorySelectScalar = {
    id?: boolean
    assetId?: boolean
    value?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }

  export type AssetHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId" | "value" | "changedAt" | "changedBy", ExtArgs["result"]["assetHistory"]>

  export type $AssetHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      value: Prisma.Decimal
      changedAt: Date
      changedBy: string | null
    }, ExtArgs["result"]["assetHistory"]>
    composites: {}
  }

  type AssetHistoryGetPayload<S extends boolean | null | undefined | AssetHistoryDefaultArgs> = $Result.GetResult<Prisma.$AssetHistoryPayload, S>

  type AssetHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetHistoryCountAggregateInputType | true
    }

  export interface AssetHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetHistory'], meta: { name: 'AssetHistory' } }
    /**
     * Find zero or one AssetHistory that matches the filter.
     * @param {AssetHistoryFindUniqueArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetHistoryFindUniqueArgs>(args: SelectSubset<T, AssetHistoryFindUniqueArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetHistoryFindUniqueOrThrowArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindFirstArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetHistoryFindFirstArgs>(args?: SelectSubset<T, AssetHistoryFindFirstArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindFirstOrThrowArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetHistories
     * const assetHistories = await prisma.assetHistory.findMany()
     * 
     * // Get first 10 AssetHistories
     * const assetHistories = await prisma.assetHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetHistoryWithIdOnly = await prisma.assetHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetHistoryFindManyArgs>(args?: SelectSubset<T, AssetHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetHistory.
     * @param {AssetHistoryCreateArgs} args - Arguments to create a AssetHistory.
     * @example
     * // Create one AssetHistory
     * const AssetHistory = await prisma.assetHistory.create({
     *   data: {
     *     // ... data to create a AssetHistory
     *   }
     * })
     * 
     */
    create<T extends AssetHistoryCreateArgs>(args: SelectSubset<T, AssetHistoryCreateArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetHistories.
     * @param {AssetHistoryCreateManyArgs} args - Arguments to create many AssetHistories.
     * @example
     * // Create many AssetHistories
     * const assetHistory = await prisma.assetHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetHistoryCreateManyArgs>(args?: SelectSubset<T, AssetHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetHistories and returns the data saved in the database.
     * @param {AssetHistoryCreateManyAndReturnArgs} args - Arguments to create many AssetHistories.
     * @example
     * // Create many AssetHistories
     * const assetHistory = await prisma.assetHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetHistories and only return the `id`
     * const assetHistoryWithIdOnly = await prisma.assetHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetHistory.
     * @param {AssetHistoryDeleteArgs} args - Arguments to delete one AssetHistory.
     * @example
     * // Delete one AssetHistory
     * const AssetHistory = await prisma.assetHistory.delete({
     *   where: {
     *     // ... filter to delete one AssetHistory
     *   }
     * })
     * 
     */
    delete<T extends AssetHistoryDeleteArgs>(args: SelectSubset<T, AssetHistoryDeleteArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetHistory.
     * @param {AssetHistoryUpdateArgs} args - Arguments to update one AssetHistory.
     * @example
     * // Update one AssetHistory
     * const assetHistory = await prisma.assetHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetHistoryUpdateArgs>(args: SelectSubset<T, AssetHistoryUpdateArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetHistories.
     * @param {AssetHistoryDeleteManyArgs} args - Arguments to filter AssetHistories to delete.
     * @example
     * // Delete a few AssetHistories
     * const { count } = await prisma.assetHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetHistoryDeleteManyArgs>(args?: SelectSubset<T, AssetHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetHistories
     * const assetHistory = await prisma.assetHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetHistoryUpdateManyArgs>(args: SelectSubset<T, AssetHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetHistories and returns the data updated in the database.
     * @param {AssetHistoryUpdateManyAndReturnArgs} args - Arguments to update many AssetHistories.
     * @example
     * // Update many AssetHistories
     * const assetHistory = await prisma.assetHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetHistories and only return the `id`
     * const assetHistoryWithIdOnly = await prisma.assetHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetHistory.
     * @param {AssetHistoryUpsertArgs} args - Arguments to update or create a AssetHistory.
     * @example
     * // Update or create a AssetHistory
     * const assetHistory = await prisma.assetHistory.upsert({
     *   create: {
     *     // ... data to create a AssetHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetHistory we want to update
     *   }
     * })
     */
    upsert<T extends AssetHistoryUpsertArgs>(args: SelectSubset<T, AssetHistoryUpsertArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryCountArgs} args - Arguments to filter AssetHistories to count.
     * @example
     * // Count the number of AssetHistories
     * const count = await prisma.assetHistory.count({
     *   where: {
     *     // ... the filter for the AssetHistories we want to count
     *   }
     * })
    **/
    count<T extends AssetHistoryCountArgs>(
      args?: Subset<T, AssetHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetHistoryAggregateArgs>(args: Subset<T, AssetHistoryAggregateArgs>): Prisma.PrismaPromise<GetAssetHistoryAggregateType<T>>

    /**
     * Group by AssetHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryGroupByArgs} args - Group by arguments.
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
      T extends AssetHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AssetHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetHistory model
   */
  readonly fields: AssetHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AssetHistory model
   */
  interface AssetHistoryFieldRefs {
    readonly id: FieldRef<"AssetHistory", 'String'>
    readonly assetId: FieldRef<"AssetHistory", 'String'>
    readonly value: FieldRef<"AssetHistory", 'Decimal'>
    readonly changedAt: FieldRef<"AssetHistory", 'DateTime'>
    readonly changedBy: FieldRef<"AssetHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssetHistory findUnique
   */
  export type AssetHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory findUniqueOrThrow
   */
  export type AssetHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory findFirst
   */
  export type AssetHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetHistories.
     */
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory findFirstOrThrow
   */
  export type AssetHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetHistories.
     */
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory findMany
   */
  export type AssetHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistories to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory create
   */
  export type AssetHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a AssetHistory.
     */
    data: XOR<AssetHistoryCreateInput, AssetHistoryUncheckedCreateInput>
  }

  /**
   * AssetHistory createMany
   */
  export type AssetHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetHistories.
     */
    data: AssetHistoryCreateManyInput | AssetHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetHistory createManyAndReturn
   */
  export type AssetHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AssetHistories.
     */
    data: AssetHistoryCreateManyInput | AssetHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetHistory update
   */
  export type AssetHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a AssetHistory.
     */
    data: XOR<AssetHistoryUpdateInput, AssetHistoryUncheckedUpdateInput>
    /**
     * Choose, which AssetHistory to update.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory updateMany
   */
  export type AssetHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetHistories.
     */
    data: XOR<AssetHistoryUpdateManyMutationInput, AssetHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetHistories to update
     */
    where?: AssetHistoryWhereInput
    /**
     * Limit how many AssetHistories to update.
     */
    limit?: number
  }

  /**
   * AssetHistory updateManyAndReturn
   */
  export type AssetHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AssetHistories.
     */
    data: XOR<AssetHistoryUpdateManyMutationInput, AssetHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetHistories to update
     */
    where?: AssetHistoryWhereInput
    /**
     * Limit how many AssetHistories to update.
     */
    limit?: number
  }

  /**
   * AssetHistory upsert
   */
  export type AssetHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the AssetHistory to update in case it exists.
     */
    where: AssetHistoryWhereUniqueInput
    /**
     * In case the AssetHistory found by the `where` argument doesn't exist, create a new AssetHistory with this data.
     */
    create: XOR<AssetHistoryCreateInput, AssetHistoryUncheckedCreateInput>
    /**
     * In case the AssetHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetHistoryUpdateInput, AssetHistoryUncheckedUpdateInput>
  }

  /**
   * AssetHistory delete
   */
  export type AssetHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter which AssetHistory to delete.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory deleteMany
   */
  export type AssetHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetHistories to delete
     */
    where?: AssetHistoryWhereInput
    /**
     * Limit how many AssetHistories to delete.
     */
    limit?: number
  }

  /**
   * AssetHistory without action
   */
  export type AssetHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Liability
   */

  export type AggregateLiability = {
    _count: LiabilityCountAggregateOutputType | null
    _avg: LiabilityAvgAggregateOutputType | null
    _sum: LiabilitySumAggregateOutputType | null
    _min: LiabilityMinAggregateOutputType | null
    _max: LiabilityMaxAggregateOutputType | null
  }

  export type LiabilityAvgAggregateOutputType = {
    amount: Decimal | null
    interestRate: Decimal | null
  }

  export type LiabilitySumAggregateOutputType = {
    amount: Decimal | null
    interestRate: Decimal | null
  }

  export type LiabilityMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    amount: Decimal | null
    interestRate: Decimal | null
    fixExpiry: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiabilityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    amount: Decimal | null
    interestRate: Decimal | null
    fixExpiry: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiabilityCountAggregateOutputType = {
    id: number
    name: number
    type: number
    amount: number
    interestRate: number
    fixExpiry: number
    assetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LiabilityAvgAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type LiabilitySumAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type LiabilityMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    interestRate?: true
    fixExpiry?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiabilityMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    interestRate?: true
    fixExpiry?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiabilityCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    interestRate?: true
    fixExpiry?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LiabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Liability to aggregate.
     */
    where?: LiabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liabilities to fetch.
     */
    orderBy?: LiabilityOrderByWithRelationInput | LiabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Liabilities
    **/
    _count?: true | LiabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiabilityMaxAggregateInputType
  }

  export type GetLiabilityAggregateType<T extends LiabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateLiability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiability[P]>
      : GetScalarType<T[P], AggregateLiability[P]>
  }




  export type LiabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiabilityWhereInput
    orderBy?: LiabilityOrderByWithAggregationInput | LiabilityOrderByWithAggregationInput[]
    by: LiabilityScalarFieldEnum[] | LiabilityScalarFieldEnum
    having?: LiabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiabilityCountAggregateInputType | true
    _avg?: LiabilityAvgAggregateInputType
    _sum?: LiabilitySumAggregateInputType
    _min?: LiabilityMinAggregateInputType
    _max?: LiabilityMaxAggregateInputType
  }

  export type LiabilityGroupByOutputType = {
    id: string
    name: string
    type: string
    amount: Decimal
    interestRate: Decimal | null
    fixExpiry: Date | null
    assetId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LiabilityCountAggregateOutputType | null
    _avg: LiabilityAvgAggregateOutputType | null
    _sum: LiabilitySumAggregateOutputType | null
    _min: LiabilityMinAggregateOutputType | null
    _max: LiabilityMaxAggregateOutputType | null
  }

  type GetLiabilityGroupByPayload<T extends LiabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiabilityGroupByOutputType[P]>
            : GetScalarType<T[P], LiabilityGroupByOutputType[P]>
        }
      >
    >


  export type LiabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    interestRate?: boolean
    fixExpiry?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }, ExtArgs["result"]["liability"]>

  export type LiabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    interestRate?: boolean
    fixExpiry?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }, ExtArgs["result"]["liability"]>

  export type LiabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    interestRate?: boolean
    fixExpiry?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }, ExtArgs["result"]["liability"]>

  export type LiabilitySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    interestRate?: boolean
    fixExpiry?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LiabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "amount" | "interestRate" | "fixExpiry" | "assetId" | "createdAt" | "updatedAt", ExtArgs["result"]["liability"]>
  export type LiabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }
  export type LiabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }
  export type LiabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Liability$assetArgs<ExtArgs>
  }

  export type $LiabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Liability"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      amount: Prisma.Decimal
      interestRate: Prisma.Decimal | null
      fixExpiry: Date | null
      assetId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["liability"]>
    composites: {}
  }

  type LiabilityGetPayload<S extends boolean | null | undefined | LiabilityDefaultArgs> = $Result.GetResult<Prisma.$LiabilityPayload, S>

  type LiabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiabilityCountAggregateInputType | true
    }

  export interface LiabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Liability'], meta: { name: 'Liability' } }
    /**
     * Find zero or one Liability that matches the filter.
     * @param {LiabilityFindUniqueArgs} args - Arguments to find a Liability
     * @example
     * // Get one Liability
     * const liability = await prisma.liability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiabilityFindUniqueArgs>(args: SelectSubset<T, LiabilityFindUniqueArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Liability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiabilityFindUniqueOrThrowArgs} args - Arguments to find a Liability
     * @example
     * // Get one Liability
     * const liability = await prisma.liability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, LiabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Liability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityFindFirstArgs} args - Arguments to find a Liability
     * @example
     * // Get one Liability
     * const liability = await prisma.liability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiabilityFindFirstArgs>(args?: SelectSubset<T, LiabilityFindFirstArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Liability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityFindFirstOrThrowArgs} args - Arguments to find a Liability
     * @example
     * // Get one Liability
     * const liability = await prisma.liability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, LiabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Liabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Liabilities
     * const liabilities = await prisma.liability.findMany()
     * 
     * // Get first 10 Liabilities
     * const liabilities = await prisma.liability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liabilityWithIdOnly = await prisma.liability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiabilityFindManyArgs>(args?: SelectSubset<T, LiabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Liability.
     * @param {LiabilityCreateArgs} args - Arguments to create a Liability.
     * @example
     * // Create one Liability
     * const Liability = await prisma.liability.create({
     *   data: {
     *     // ... data to create a Liability
     *   }
     * })
     * 
     */
    create<T extends LiabilityCreateArgs>(args: SelectSubset<T, LiabilityCreateArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Liabilities.
     * @param {LiabilityCreateManyArgs} args - Arguments to create many Liabilities.
     * @example
     * // Create many Liabilities
     * const liability = await prisma.liability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiabilityCreateManyArgs>(args?: SelectSubset<T, LiabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Liabilities and returns the data saved in the database.
     * @param {LiabilityCreateManyAndReturnArgs} args - Arguments to create many Liabilities.
     * @example
     * // Create many Liabilities
     * const liability = await prisma.liability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Liabilities and only return the `id`
     * const liabilityWithIdOnly = await prisma.liability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, LiabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Liability.
     * @param {LiabilityDeleteArgs} args - Arguments to delete one Liability.
     * @example
     * // Delete one Liability
     * const Liability = await prisma.liability.delete({
     *   where: {
     *     // ... filter to delete one Liability
     *   }
     * })
     * 
     */
    delete<T extends LiabilityDeleteArgs>(args: SelectSubset<T, LiabilityDeleteArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Liability.
     * @param {LiabilityUpdateArgs} args - Arguments to update one Liability.
     * @example
     * // Update one Liability
     * const liability = await prisma.liability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiabilityUpdateArgs>(args: SelectSubset<T, LiabilityUpdateArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Liabilities.
     * @param {LiabilityDeleteManyArgs} args - Arguments to filter Liabilities to delete.
     * @example
     * // Delete a few Liabilities
     * const { count } = await prisma.liability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiabilityDeleteManyArgs>(args?: SelectSubset<T, LiabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Liabilities
     * const liability = await prisma.liability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiabilityUpdateManyArgs>(args: SelectSubset<T, LiabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liabilities and returns the data updated in the database.
     * @param {LiabilityUpdateManyAndReturnArgs} args - Arguments to update many Liabilities.
     * @example
     * // Update many Liabilities
     * const liability = await prisma.liability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Liabilities and only return the `id`
     * const liabilityWithIdOnly = await prisma.liability.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, LiabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Liability.
     * @param {LiabilityUpsertArgs} args - Arguments to update or create a Liability.
     * @example
     * // Update or create a Liability
     * const liability = await prisma.liability.upsert({
     *   create: {
     *     // ... data to create a Liability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Liability we want to update
     *   }
     * })
     */
    upsert<T extends LiabilityUpsertArgs>(args: SelectSubset<T, LiabilityUpsertArgs<ExtArgs>>): Prisma__LiabilityClient<$Result.GetResult<Prisma.$LiabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Liabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityCountArgs} args - Arguments to filter Liabilities to count.
     * @example
     * // Count the number of Liabilities
     * const count = await prisma.liability.count({
     *   where: {
     *     // ... the filter for the Liabilities we want to count
     *   }
     * })
    **/
    count<T extends LiabilityCountArgs>(
      args?: Subset<T, LiabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Liability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiabilityAggregateArgs>(args: Subset<T, LiabilityAggregateArgs>): Prisma.PrismaPromise<GetLiabilityAggregateType<T>>

    /**
     * Group by Liability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityGroupByArgs} args - Group by arguments.
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
      T extends LiabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiabilityGroupByArgs['orderBy'] }
        : { orderBy?: LiabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Liability model
   */
  readonly fields: LiabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Liability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends Liability$assetArgs<ExtArgs> = {}>(args?: Subset<T, Liability$assetArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Liability model
   */
  interface LiabilityFieldRefs {
    readonly id: FieldRef<"Liability", 'String'>
    readonly name: FieldRef<"Liability", 'String'>
    readonly type: FieldRef<"Liability", 'String'>
    readonly amount: FieldRef<"Liability", 'Decimal'>
    readonly interestRate: FieldRef<"Liability", 'Decimal'>
    readonly fixExpiry: FieldRef<"Liability", 'DateTime'>
    readonly assetId: FieldRef<"Liability", 'String'>
    readonly createdAt: FieldRef<"Liability", 'DateTime'>
    readonly updatedAt: FieldRef<"Liability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Liability findUnique
   */
  export type LiabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter, which Liability to fetch.
     */
    where: LiabilityWhereUniqueInput
  }

  /**
   * Liability findUniqueOrThrow
   */
  export type LiabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter, which Liability to fetch.
     */
    where: LiabilityWhereUniqueInput
  }

  /**
   * Liability findFirst
   */
  export type LiabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter, which Liability to fetch.
     */
    where?: LiabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liabilities to fetch.
     */
    orderBy?: LiabilityOrderByWithRelationInput | LiabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liabilities.
     */
    cursor?: LiabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liabilities.
     */
    distinct?: LiabilityScalarFieldEnum | LiabilityScalarFieldEnum[]
  }

  /**
   * Liability findFirstOrThrow
   */
  export type LiabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter, which Liability to fetch.
     */
    where?: LiabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liabilities to fetch.
     */
    orderBy?: LiabilityOrderByWithRelationInput | LiabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liabilities.
     */
    cursor?: LiabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liabilities.
     */
    distinct?: LiabilityScalarFieldEnum | LiabilityScalarFieldEnum[]
  }

  /**
   * Liability findMany
   */
  export type LiabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter, which Liabilities to fetch.
     */
    where?: LiabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liabilities to fetch.
     */
    orderBy?: LiabilityOrderByWithRelationInput | LiabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Liabilities.
     */
    cursor?: LiabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liabilities.
     */
    skip?: number
    distinct?: LiabilityScalarFieldEnum | LiabilityScalarFieldEnum[]
  }

  /**
   * Liability create
   */
  export type LiabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Liability.
     */
    data: XOR<LiabilityCreateInput, LiabilityUncheckedCreateInput>
  }

  /**
   * Liability createMany
   */
  export type LiabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Liabilities.
     */
    data: LiabilityCreateManyInput | LiabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Liability createManyAndReturn
   */
  export type LiabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Liabilities.
     */
    data: LiabilityCreateManyInput | LiabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Liability update
   */
  export type LiabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Liability.
     */
    data: XOR<LiabilityUpdateInput, LiabilityUncheckedUpdateInput>
    /**
     * Choose, which Liability to update.
     */
    where: LiabilityWhereUniqueInput
  }

  /**
   * Liability updateMany
   */
  export type LiabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Liabilities.
     */
    data: XOR<LiabilityUpdateManyMutationInput, LiabilityUncheckedUpdateManyInput>
    /**
     * Filter which Liabilities to update
     */
    where?: LiabilityWhereInput
    /**
     * Limit how many Liabilities to update.
     */
    limit?: number
  }

  /**
   * Liability updateManyAndReturn
   */
  export type LiabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * The data used to update Liabilities.
     */
    data: XOR<LiabilityUpdateManyMutationInput, LiabilityUncheckedUpdateManyInput>
    /**
     * Filter which Liabilities to update
     */
    where?: LiabilityWhereInput
    /**
     * Limit how many Liabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Liability upsert
   */
  export type LiabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Liability to update in case it exists.
     */
    where: LiabilityWhereUniqueInput
    /**
     * In case the Liability found by the `where` argument doesn't exist, create a new Liability with this data.
     */
    create: XOR<LiabilityCreateInput, LiabilityUncheckedCreateInput>
    /**
     * In case the Liability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiabilityUpdateInput, LiabilityUncheckedUpdateInput>
  }

  /**
   * Liability delete
   */
  export type LiabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
    /**
     * Filter which Liability to delete.
     */
    where: LiabilityWhereUniqueInput
  }

  /**
   * Liability deleteMany
   */
  export type LiabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Liabilities to delete
     */
    where?: LiabilityWhereInput
    /**
     * Limit how many Liabilities to delete.
     */
    limit?: number
  }

  /**
   * Liability.asset
   */
  export type Liability$assetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
  }

  /**
   * Liability without action
   */
  export type LiabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liability
     */
    select?: LiabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liability
     */
    omit?: LiabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiabilityInclude<ExtArgs> | null
  }


  /**
   * Model LiabilityHistory
   */

  export type AggregateLiabilityHistory = {
    _count: LiabilityHistoryCountAggregateOutputType | null
    _avg: LiabilityHistoryAvgAggregateOutputType | null
    _sum: LiabilityHistorySumAggregateOutputType | null
    _min: LiabilityHistoryMinAggregateOutputType | null
    _max: LiabilityHistoryMaxAggregateOutputType | null
  }

  export type LiabilityHistoryAvgAggregateOutputType = {
    amount: Decimal | null
    interestRate: Decimal | null
  }

  export type LiabilityHistorySumAggregateOutputType = {
    amount: Decimal | null
    interestRate: Decimal | null
  }

  export type LiabilityHistoryMinAggregateOutputType = {
    id: string | null
    liabilityId: string | null
    amount: Decimal | null
    interestRate: Decimal | null
    changedAt: Date | null
    changedBy: string | null
  }

  export type LiabilityHistoryMaxAggregateOutputType = {
    id: string | null
    liabilityId: string | null
    amount: Decimal | null
    interestRate: Decimal | null
    changedAt: Date | null
    changedBy: string | null
  }

  export type LiabilityHistoryCountAggregateOutputType = {
    id: number
    liabilityId: number
    amount: number
    interestRate: number
    changedAt: number
    changedBy: number
    _all: number
  }


  export type LiabilityHistoryAvgAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type LiabilityHistorySumAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type LiabilityHistoryMinAggregateInputType = {
    id?: true
    liabilityId?: true
    amount?: true
    interestRate?: true
    changedAt?: true
    changedBy?: true
  }

  export type LiabilityHistoryMaxAggregateInputType = {
    id?: true
    liabilityId?: true
    amount?: true
    interestRate?: true
    changedAt?: true
    changedBy?: true
  }

  export type LiabilityHistoryCountAggregateInputType = {
    id?: true
    liabilityId?: true
    amount?: true
    interestRate?: true
    changedAt?: true
    changedBy?: true
    _all?: true
  }

  export type LiabilityHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiabilityHistory to aggregate.
     */
    where?: LiabilityHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiabilityHistories to fetch.
     */
    orderBy?: LiabilityHistoryOrderByWithRelationInput | LiabilityHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiabilityHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiabilityHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiabilityHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiabilityHistories
    **/
    _count?: true | LiabilityHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiabilityHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiabilityHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiabilityHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiabilityHistoryMaxAggregateInputType
  }

  export type GetLiabilityHistoryAggregateType<T extends LiabilityHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLiabilityHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiabilityHistory[P]>
      : GetScalarType<T[P], AggregateLiabilityHistory[P]>
  }




  export type LiabilityHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiabilityHistoryWhereInput
    orderBy?: LiabilityHistoryOrderByWithAggregationInput | LiabilityHistoryOrderByWithAggregationInput[]
    by: LiabilityHistoryScalarFieldEnum[] | LiabilityHistoryScalarFieldEnum
    having?: LiabilityHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiabilityHistoryCountAggregateInputType | true
    _avg?: LiabilityHistoryAvgAggregateInputType
    _sum?: LiabilityHistorySumAggregateInputType
    _min?: LiabilityHistoryMinAggregateInputType
    _max?: LiabilityHistoryMaxAggregateInputType
  }

  export type LiabilityHistoryGroupByOutputType = {
    id: string
    liabilityId: string
    amount: Decimal
    interestRate: Decimal | null
    changedAt: Date
    changedBy: string | null
    _count: LiabilityHistoryCountAggregateOutputType | null
    _avg: LiabilityHistoryAvgAggregateOutputType | null
    _sum: LiabilityHistorySumAggregateOutputType | null
    _min: LiabilityHistoryMinAggregateOutputType | null
    _max: LiabilityHistoryMaxAggregateOutputType | null
  }

  type GetLiabilityHistoryGroupByPayload<T extends LiabilityHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiabilityHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiabilityHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiabilityHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LiabilityHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LiabilityHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liabilityId?: boolean
    amount?: boolean
    interestRate?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["liabilityHistory"]>

  export type LiabilityHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liabilityId?: boolean
    amount?: boolean
    interestRate?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["liabilityHistory"]>

  export type LiabilityHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liabilityId?: boolean
    amount?: boolean
    interestRate?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }, ExtArgs["result"]["liabilityHistory"]>

  export type LiabilityHistorySelectScalar = {
    id?: boolean
    liabilityId?: boolean
    amount?: boolean
    interestRate?: boolean
    changedAt?: boolean
    changedBy?: boolean
  }

  export type LiabilityHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "liabilityId" | "amount" | "interestRate" | "changedAt" | "changedBy", ExtArgs["result"]["liabilityHistory"]>

  export type $LiabilityHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiabilityHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liabilityId: string
      amount: Prisma.Decimal
      interestRate: Prisma.Decimal | null
      changedAt: Date
      changedBy: string | null
    }, ExtArgs["result"]["liabilityHistory"]>
    composites: {}
  }

  type LiabilityHistoryGetPayload<S extends boolean | null | undefined | LiabilityHistoryDefaultArgs> = $Result.GetResult<Prisma.$LiabilityHistoryPayload, S>

  type LiabilityHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiabilityHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiabilityHistoryCountAggregateInputType | true
    }

  export interface LiabilityHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiabilityHistory'], meta: { name: 'LiabilityHistory' } }
    /**
     * Find zero or one LiabilityHistory that matches the filter.
     * @param {LiabilityHistoryFindUniqueArgs} args - Arguments to find a LiabilityHistory
     * @example
     * // Get one LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiabilityHistoryFindUniqueArgs>(args: SelectSubset<T, LiabilityHistoryFindUniqueArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiabilityHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiabilityHistoryFindUniqueOrThrowArgs} args - Arguments to find a LiabilityHistory
     * @example
     * // Get one LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiabilityHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LiabilityHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiabilityHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryFindFirstArgs} args - Arguments to find a LiabilityHistory
     * @example
     * // Get one LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiabilityHistoryFindFirstArgs>(args?: SelectSubset<T, LiabilityHistoryFindFirstArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiabilityHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryFindFirstOrThrowArgs} args - Arguments to find a LiabilityHistory
     * @example
     * // Get one LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiabilityHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LiabilityHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiabilityHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiabilityHistories
     * const liabilityHistories = await prisma.liabilityHistory.findMany()
     * 
     * // Get first 10 LiabilityHistories
     * const liabilityHistories = await prisma.liabilityHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liabilityHistoryWithIdOnly = await prisma.liabilityHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiabilityHistoryFindManyArgs>(args?: SelectSubset<T, LiabilityHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiabilityHistory.
     * @param {LiabilityHistoryCreateArgs} args - Arguments to create a LiabilityHistory.
     * @example
     * // Create one LiabilityHistory
     * const LiabilityHistory = await prisma.liabilityHistory.create({
     *   data: {
     *     // ... data to create a LiabilityHistory
     *   }
     * })
     * 
     */
    create<T extends LiabilityHistoryCreateArgs>(args: SelectSubset<T, LiabilityHistoryCreateArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiabilityHistories.
     * @param {LiabilityHistoryCreateManyArgs} args - Arguments to create many LiabilityHistories.
     * @example
     * // Create many LiabilityHistories
     * const liabilityHistory = await prisma.liabilityHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiabilityHistoryCreateManyArgs>(args?: SelectSubset<T, LiabilityHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiabilityHistories and returns the data saved in the database.
     * @param {LiabilityHistoryCreateManyAndReturnArgs} args - Arguments to create many LiabilityHistories.
     * @example
     * // Create many LiabilityHistories
     * const liabilityHistory = await prisma.liabilityHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiabilityHistories and only return the `id`
     * const liabilityHistoryWithIdOnly = await prisma.liabilityHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiabilityHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LiabilityHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiabilityHistory.
     * @param {LiabilityHistoryDeleteArgs} args - Arguments to delete one LiabilityHistory.
     * @example
     * // Delete one LiabilityHistory
     * const LiabilityHistory = await prisma.liabilityHistory.delete({
     *   where: {
     *     // ... filter to delete one LiabilityHistory
     *   }
     * })
     * 
     */
    delete<T extends LiabilityHistoryDeleteArgs>(args: SelectSubset<T, LiabilityHistoryDeleteArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiabilityHistory.
     * @param {LiabilityHistoryUpdateArgs} args - Arguments to update one LiabilityHistory.
     * @example
     * // Update one LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiabilityHistoryUpdateArgs>(args: SelectSubset<T, LiabilityHistoryUpdateArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiabilityHistories.
     * @param {LiabilityHistoryDeleteManyArgs} args - Arguments to filter LiabilityHistories to delete.
     * @example
     * // Delete a few LiabilityHistories
     * const { count } = await prisma.liabilityHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiabilityHistoryDeleteManyArgs>(args?: SelectSubset<T, LiabilityHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiabilityHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiabilityHistories
     * const liabilityHistory = await prisma.liabilityHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiabilityHistoryUpdateManyArgs>(args: SelectSubset<T, LiabilityHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiabilityHistories and returns the data updated in the database.
     * @param {LiabilityHistoryUpdateManyAndReturnArgs} args - Arguments to update many LiabilityHistories.
     * @example
     * // Update many LiabilityHistories
     * const liabilityHistory = await prisma.liabilityHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiabilityHistories and only return the `id`
     * const liabilityHistoryWithIdOnly = await prisma.liabilityHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiabilityHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LiabilityHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiabilityHistory.
     * @param {LiabilityHistoryUpsertArgs} args - Arguments to update or create a LiabilityHistory.
     * @example
     * // Update or create a LiabilityHistory
     * const liabilityHistory = await prisma.liabilityHistory.upsert({
     *   create: {
     *     // ... data to create a LiabilityHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiabilityHistory we want to update
     *   }
     * })
     */
    upsert<T extends LiabilityHistoryUpsertArgs>(args: SelectSubset<T, LiabilityHistoryUpsertArgs<ExtArgs>>): Prisma__LiabilityHistoryClient<$Result.GetResult<Prisma.$LiabilityHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiabilityHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryCountArgs} args - Arguments to filter LiabilityHistories to count.
     * @example
     * // Count the number of LiabilityHistories
     * const count = await prisma.liabilityHistory.count({
     *   where: {
     *     // ... the filter for the LiabilityHistories we want to count
     *   }
     * })
    **/
    count<T extends LiabilityHistoryCountArgs>(
      args?: Subset<T, LiabilityHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiabilityHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiabilityHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiabilityHistoryAggregateArgs>(args: Subset<T, LiabilityHistoryAggregateArgs>): Prisma.PrismaPromise<GetLiabilityHistoryAggregateType<T>>

    /**
     * Group by LiabilityHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiabilityHistoryGroupByArgs} args - Group by arguments.
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
      T extends LiabilityHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiabilityHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LiabilityHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiabilityHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiabilityHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiabilityHistory model
   */
  readonly fields: LiabilityHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiabilityHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiabilityHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiabilityHistory model
   */
  interface LiabilityHistoryFieldRefs {
    readonly id: FieldRef<"LiabilityHistory", 'String'>
    readonly liabilityId: FieldRef<"LiabilityHistory", 'String'>
    readonly amount: FieldRef<"LiabilityHistory", 'Decimal'>
    readonly interestRate: FieldRef<"LiabilityHistory", 'Decimal'>
    readonly changedAt: FieldRef<"LiabilityHistory", 'DateTime'>
    readonly changedBy: FieldRef<"LiabilityHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LiabilityHistory findUnique
   */
  export type LiabilityHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter, which LiabilityHistory to fetch.
     */
    where: LiabilityHistoryWhereUniqueInput
  }

  /**
   * LiabilityHistory findUniqueOrThrow
   */
  export type LiabilityHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter, which LiabilityHistory to fetch.
     */
    where: LiabilityHistoryWhereUniqueInput
  }

  /**
   * LiabilityHistory findFirst
   */
  export type LiabilityHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter, which LiabilityHistory to fetch.
     */
    where?: LiabilityHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiabilityHistories to fetch.
     */
    orderBy?: LiabilityHistoryOrderByWithRelationInput | LiabilityHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiabilityHistories.
     */
    cursor?: LiabilityHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiabilityHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiabilityHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiabilityHistories.
     */
    distinct?: LiabilityHistoryScalarFieldEnum | LiabilityHistoryScalarFieldEnum[]
  }

  /**
   * LiabilityHistory findFirstOrThrow
   */
  export type LiabilityHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter, which LiabilityHistory to fetch.
     */
    where?: LiabilityHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiabilityHistories to fetch.
     */
    orderBy?: LiabilityHistoryOrderByWithRelationInput | LiabilityHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiabilityHistories.
     */
    cursor?: LiabilityHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiabilityHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiabilityHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiabilityHistories.
     */
    distinct?: LiabilityHistoryScalarFieldEnum | LiabilityHistoryScalarFieldEnum[]
  }

  /**
   * LiabilityHistory findMany
   */
  export type LiabilityHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter, which LiabilityHistories to fetch.
     */
    where?: LiabilityHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiabilityHistories to fetch.
     */
    orderBy?: LiabilityHistoryOrderByWithRelationInput | LiabilityHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiabilityHistories.
     */
    cursor?: LiabilityHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiabilityHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiabilityHistories.
     */
    skip?: number
    distinct?: LiabilityHistoryScalarFieldEnum | LiabilityHistoryScalarFieldEnum[]
  }

  /**
   * LiabilityHistory create
   */
  export type LiabilityHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a LiabilityHistory.
     */
    data: XOR<LiabilityHistoryCreateInput, LiabilityHistoryUncheckedCreateInput>
  }

  /**
   * LiabilityHistory createMany
   */
  export type LiabilityHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiabilityHistories.
     */
    data: LiabilityHistoryCreateManyInput | LiabilityHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiabilityHistory createManyAndReturn
   */
  export type LiabilityHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LiabilityHistories.
     */
    data: LiabilityHistoryCreateManyInput | LiabilityHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiabilityHistory update
   */
  export type LiabilityHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a LiabilityHistory.
     */
    data: XOR<LiabilityHistoryUpdateInput, LiabilityHistoryUncheckedUpdateInput>
    /**
     * Choose, which LiabilityHistory to update.
     */
    where: LiabilityHistoryWhereUniqueInput
  }

  /**
   * LiabilityHistory updateMany
   */
  export type LiabilityHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiabilityHistories.
     */
    data: XOR<LiabilityHistoryUpdateManyMutationInput, LiabilityHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LiabilityHistories to update
     */
    where?: LiabilityHistoryWhereInput
    /**
     * Limit how many LiabilityHistories to update.
     */
    limit?: number
  }

  /**
   * LiabilityHistory updateManyAndReturn
   */
  export type LiabilityHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LiabilityHistories.
     */
    data: XOR<LiabilityHistoryUpdateManyMutationInput, LiabilityHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LiabilityHistories to update
     */
    where?: LiabilityHistoryWhereInput
    /**
     * Limit how many LiabilityHistories to update.
     */
    limit?: number
  }

  /**
   * LiabilityHistory upsert
   */
  export type LiabilityHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the LiabilityHistory to update in case it exists.
     */
    where: LiabilityHistoryWhereUniqueInput
    /**
     * In case the LiabilityHistory found by the `where` argument doesn't exist, create a new LiabilityHistory with this data.
     */
    create: XOR<LiabilityHistoryCreateInput, LiabilityHistoryUncheckedCreateInput>
    /**
     * In case the LiabilityHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiabilityHistoryUpdateInput, LiabilityHistoryUncheckedUpdateInput>
  }

  /**
   * LiabilityHistory delete
   */
  export type LiabilityHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
    /**
     * Filter which LiabilityHistory to delete.
     */
    where: LiabilityHistoryWhereUniqueInput
  }

  /**
   * LiabilityHistory deleteMany
   */
  export type LiabilityHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiabilityHistories to delete
     */
    where?: LiabilityHistoryWhereInput
    /**
     * Limit how many LiabilityHistories to delete.
     */
    limit?: number
  }

  /**
   * LiabilityHistory without action
   */
  export type LiabilityHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiabilityHistory
     */
    select?: LiabilityHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiabilityHistory
     */
    omit?: LiabilityHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Insurance
   */

  export type AggregateInsurance = {
    _count: InsuranceCountAggregateOutputType | null
    _avg: InsuranceAvgAggregateOutputType | null
    _sum: InsuranceSumAggregateOutputType | null
    _min: InsuranceMinAggregateOutputType | null
    _max: InsuranceMaxAggregateOutputType | null
  }

  export type InsuranceAvgAggregateOutputType = {
    premium: Decimal | null
    coverage: Decimal | null
    excess: Decimal | null
  }

  export type InsuranceSumAggregateOutputType = {
    premium: Decimal | null
    coverage: Decimal | null
    excess: Decimal | null
  }

  export type InsuranceMinAggregateOutputType = {
    id: string | null
    provider: string | null
    policyNumber: string | null
    premium: Decimal | null
    coverage: Decimal | null
    excess: Decimal | null
    renewalDate: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsuranceMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    policyNumber: string | null
    premium: Decimal | null
    coverage: Decimal | null
    excess: Decimal | null
    renewalDate: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsuranceCountAggregateOutputType = {
    id: number
    provider: number
    policyNumber: number
    premium: number
    coverage: number
    excess: number
    renewalDate: number
    assetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InsuranceAvgAggregateInputType = {
    premium?: true
    coverage?: true
    excess?: true
  }

  export type InsuranceSumAggregateInputType = {
    premium?: true
    coverage?: true
    excess?: true
  }

  export type InsuranceMinAggregateInputType = {
    id?: true
    provider?: true
    policyNumber?: true
    premium?: true
    coverage?: true
    excess?: true
    renewalDate?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsuranceMaxAggregateInputType = {
    id?: true
    provider?: true
    policyNumber?: true
    premium?: true
    coverage?: true
    excess?: true
    renewalDate?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsuranceCountAggregateInputType = {
    id?: true
    provider?: true
    policyNumber?: true
    premium?: true
    coverage?: true
    excess?: true
    renewalDate?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InsuranceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insurance to aggregate.
     */
    where?: InsuranceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurances to fetch.
     */
    orderBy?: InsuranceOrderByWithRelationInput | InsuranceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsuranceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insurances
    **/
    _count?: true | InsuranceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsuranceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsuranceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsuranceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsuranceMaxAggregateInputType
  }

  export type GetInsuranceAggregateType<T extends InsuranceAggregateArgs> = {
        [P in keyof T & keyof AggregateInsurance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance[P]>
      : GetScalarType<T[P], AggregateInsurance[P]>
  }




  export type InsuranceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuranceWhereInput
    orderBy?: InsuranceOrderByWithAggregationInput | InsuranceOrderByWithAggregationInput[]
    by: InsuranceScalarFieldEnum[] | InsuranceScalarFieldEnum
    having?: InsuranceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsuranceCountAggregateInputType | true
    _avg?: InsuranceAvgAggregateInputType
    _sum?: InsuranceSumAggregateInputType
    _min?: InsuranceMinAggregateInputType
    _max?: InsuranceMaxAggregateInputType
  }

  export type InsuranceGroupByOutputType = {
    id: string
    provider: string
    policyNumber: string
    premium: Decimal
    coverage: Decimal
    excess: Decimal
    renewalDate: Date
    assetId: string | null
    createdAt: Date
    updatedAt: Date
    _count: InsuranceCountAggregateOutputType | null
    _avg: InsuranceAvgAggregateOutputType | null
    _sum: InsuranceSumAggregateOutputType | null
    _min: InsuranceMinAggregateOutputType | null
    _max: InsuranceMaxAggregateOutputType | null
  }

  type GetInsuranceGroupByPayload<T extends InsuranceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsuranceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsuranceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsuranceGroupByOutputType[P]>
            : GetScalarType<T[P], InsuranceGroupByOutputType[P]>
        }
      >
    >


  export type InsuranceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    policyNumber?: boolean
    premium?: boolean
    coverage?: boolean
    excess?: boolean
    renewalDate?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }, ExtArgs["result"]["insurance"]>

  export type InsuranceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    policyNumber?: boolean
    premium?: boolean
    coverage?: boolean
    excess?: boolean
    renewalDate?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }, ExtArgs["result"]["insurance"]>

  export type InsuranceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    policyNumber?: boolean
    premium?: boolean
    coverage?: boolean
    excess?: boolean
    renewalDate?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }, ExtArgs["result"]["insurance"]>

  export type InsuranceSelectScalar = {
    id?: boolean
    provider?: boolean
    policyNumber?: boolean
    premium?: boolean
    coverage?: boolean
    excess?: boolean
    renewalDate?: boolean
    assetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InsuranceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "policyNumber" | "premium" | "coverage" | "excess" | "renewalDate" | "assetId" | "createdAt" | "updatedAt", ExtArgs["result"]["insurance"]>
  export type InsuranceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }
  export type InsuranceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }
  export type InsuranceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | Insurance$assetArgs<ExtArgs>
  }

  export type $InsurancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insurance"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      policyNumber: string
      premium: Prisma.Decimal
      coverage: Prisma.Decimal
      excess: Prisma.Decimal
      renewalDate: Date
      assetId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["insurance"]>
    composites: {}
  }

  type InsuranceGetPayload<S extends boolean | null | undefined | InsuranceDefaultArgs> = $Result.GetResult<Prisma.$InsurancePayload, S>

  type InsuranceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsuranceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsuranceCountAggregateInputType | true
    }

  export interface InsuranceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insurance'], meta: { name: 'Insurance' } }
    /**
     * Find zero or one Insurance that matches the filter.
     * @param {InsuranceFindUniqueArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsuranceFindUniqueArgs>(args: SelectSubset<T, InsuranceFindUniqueArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insurance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsuranceFindUniqueOrThrowArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsuranceFindUniqueOrThrowArgs>(args: SelectSubset<T, InsuranceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insurance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindFirstArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsuranceFindFirstArgs>(args?: SelectSubset<T, InsuranceFindFirstArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insurance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindFirstOrThrowArgs} args - Arguments to find a Insurance
     * @example
     * // Get one Insurance
     * const insurance = await prisma.insurance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsuranceFindFirstOrThrowArgs>(args?: SelectSubset<T, InsuranceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insurances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurances
     * const insurances = await prisma.insurance.findMany()
     * 
     * // Get first 10 Insurances
     * const insurances = await prisma.insurance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insuranceWithIdOnly = await prisma.insurance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsuranceFindManyArgs>(args?: SelectSubset<T, InsuranceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insurance.
     * @param {InsuranceCreateArgs} args - Arguments to create a Insurance.
     * @example
     * // Create one Insurance
     * const Insurance = await prisma.insurance.create({
     *   data: {
     *     // ... data to create a Insurance
     *   }
     * })
     * 
     */
    create<T extends InsuranceCreateArgs>(args: SelectSubset<T, InsuranceCreateArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insurances.
     * @param {InsuranceCreateManyArgs} args - Arguments to create many Insurances.
     * @example
     * // Create many Insurances
     * const insurance = await prisma.insurance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsuranceCreateManyArgs>(args?: SelectSubset<T, InsuranceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insurances and returns the data saved in the database.
     * @param {InsuranceCreateManyAndReturnArgs} args - Arguments to create many Insurances.
     * @example
     * // Create many Insurances
     * const insurance = await prisma.insurance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insurances and only return the `id`
     * const insuranceWithIdOnly = await prisma.insurance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsuranceCreateManyAndReturnArgs>(args?: SelectSubset<T, InsuranceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insurance.
     * @param {InsuranceDeleteArgs} args - Arguments to delete one Insurance.
     * @example
     * // Delete one Insurance
     * const Insurance = await prisma.insurance.delete({
     *   where: {
     *     // ... filter to delete one Insurance
     *   }
     * })
     * 
     */
    delete<T extends InsuranceDeleteArgs>(args: SelectSubset<T, InsuranceDeleteArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insurance.
     * @param {InsuranceUpdateArgs} args - Arguments to update one Insurance.
     * @example
     * // Update one Insurance
     * const insurance = await prisma.insurance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsuranceUpdateArgs>(args: SelectSubset<T, InsuranceUpdateArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insurances.
     * @param {InsuranceDeleteManyArgs} args - Arguments to filter Insurances to delete.
     * @example
     * // Delete a few Insurances
     * const { count } = await prisma.insurance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsuranceDeleteManyArgs>(args?: SelectSubset<T, InsuranceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurances
     * const insurance = await prisma.insurance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsuranceUpdateManyArgs>(args: SelectSubset<T, InsuranceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurances and returns the data updated in the database.
     * @param {InsuranceUpdateManyAndReturnArgs} args - Arguments to update many Insurances.
     * @example
     * // Update many Insurances
     * const insurance = await prisma.insurance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insurances and only return the `id`
     * const insuranceWithIdOnly = await prisma.insurance.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsuranceUpdateManyAndReturnArgs>(args: SelectSubset<T, InsuranceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insurance.
     * @param {InsuranceUpsertArgs} args - Arguments to update or create a Insurance.
     * @example
     * // Update or create a Insurance
     * const insurance = await prisma.insurance.upsert({
     *   create: {
     *     // ... data to create a Insurance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance we want to update
     *   }
     * })
     */
    upsert<T extends InsuranceUpsertArgs>(args: SelectSubset<T, InsuranceUpsertArgs<ExtArgs>>): Prisma__InsuranceClient<$Result.GetResult<Prisma.$InsurancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insurances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceCountArgs} args - Arguments to filter Insurances to count.
     * @example
     * // Count the number of Insurances
     * const count = await prisma.insurance.count({
     *   where: {
     *     // ... the filter for the Insurances we want to count
     *   }
     * })
    **/
    count<T extends InsuranceCountArgs>(
      args?: Subset<T, InsuranceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsuranceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insurance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsuranceAggregateArgs>(args: Subset<T, InsuranceAggregateArgs>): Prisma.PrismaPromise<GetInsuranceAggregateType<T>>

    /**
     * Group by Insurance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuranceGroupByArgs} args - Group by arguments.
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
      T extends InsuranceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsuranceGroupByArgs['orderBy'] }
        : { orderBy?: InsuranceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsuranceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsuranceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insurance model
   */
  readonly fields: InsuranceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insurance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsuranceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends Insurance$assetArgs<ExtArgs> = {}>(args?: Subset<T, Insurance$assetArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Insurance model
   */
  interface InsuranceFieldRefs {
    readonly id: FieldRef<"Insurance", 'String'>
    readonly provider: FieldRef<"Insurance", 'String'>
    readonly policyNumber: FieldRef<"Insurance", 'String'>
    readonly premium: FieldRef<"Insurance", 'Decimal'>
    readonly coverage: FieldRef<"Insurance", 'Decimal'>
    readonly excess: FieldRef<"Insurance", 'Decimal'>
    readonly renewalDate: FieldRef<"Insurance", 'DateTime'>
    readonly assetId: FieldRef<"Insurance", 'String'>
    readonly createdAt: FieldRef<"Insurance", 'DateTime'>
    readonly updatedAt: FieldRef<"Insurance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insurance findUnique
   */
  export type InsuranceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter, which Insurance to fetch.
     */
    where: InsuranceWhereUniqueInput
  }

  /**
   * Insurance findUniqueOrThrow
   */
  export type InsuranceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter, which Insurance to fetch.
     */
    where: InsuranceWhereUniqueInput
  }

  /**
   * Insurance findFirst
   */
  export type InsuranceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter, which Insurance to fetch.
     */
    where?: InsuranceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurances to fetch.
     */
    orderBy?: InsuranceOrderByWithRelationInput | InsuranceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurances.
     */
    cursor?: InsuranceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurances.
     */
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[]
  }

  /**
   * Insurance findFirstOrThrow
   */
  export type InsuranceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter, which Insurance to fetch.
     */
    where?: InsuranceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurances to fetch.
     */
    orderBy?: InsuranceOrderByWithRelationInput | InsuranceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurances.
     */
    cursor?: InsuranceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurances.
     */
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[]
  }

  /**
   * Insurance findMany
   */
  export type InsuranceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter, which Insurances to fetch.
     */
    where?: InsuranceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurances to fetch.
     */
    orderBy?: InsuranceOrderByWithRelationInput | InsuranceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insurances.
     */
    cursor?: InsuranceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurances.
     */
    skip?: number
    distinct?: InsuranceScalarFieldEnum | InsuranceScalarFieldEnum[]
  }

  /**
   * Insurance create
   */
  export type InsuranceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * The data needed to create a Insurance.
     */
    data: XOR<InsuranceCreateInput, InsuranceUncheckedCreateInput>
  }

  /**
   * Insurance createMany
   */
  export type InsuranceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insurances.
     */
    data: InsuranceCreateManyInput | InsuranceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insurance createManyAndReturn
   */
  export type InsuranceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * The data used to create many Insurances.
     */
    data: InsuranceCreateManyInput | InsuranceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insurance update
   */
  export type InsuranceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * The data needed to update a Insurance.
     */
    data: XOR<InsuranceUpdateInput, InsuranceUncheckedUpdateInput>
    /**
     * Choose, which Insurance to update.
     */
    where: InsuranceWhereUniqueInput
  }

  /**
   * Insurance updateMany
   */
  export type InsuranceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insurances.
     */
    data: XOR<InsuranceUpdateManyMutationInput, InsuranceUncheckedUpdateManyInput>
    /**
     * Filter which Insurances to update
     */
    where?: InsuranceWhereInput
    /**
     * Limit how many Insurances to update.
     */
    limit?: number
  }

  /**
   * Insurance updateManyAndReturn
   */
  export type InsuranceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * The data used to update Insurances.
     */
    data: XOR<InsuranceUpdateManyMutationInput, InsuranceUncheckedUpdateManyInput>
    /**
     * Filter which Insurances to update
     */
    where?: InsuranceWhereInput
    /**
     * Limit how many Insurances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insurance upsert
   */
  export type InsuranceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * The filter to search for the Insurance to update in case it exists.
     */
    where: InsuranceWhereUniqueInput
    /**
     * In case the Insurance found by the `where` argument doesn't exist, create a new Insurance with this data.
     */
    create: XOR<InsuranceCreateInput, InsuranceUncheckedCreateInput>
    /**
     * In case the Insurance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsuranceUpdateInput, InsuranceUncheckedUpdateInput>
  }

  /**
   * Insurance delete
   */
  export type InsuranceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
    /**
     * Filter which Insurance to delete.
     */
    where: InsuranceWhereUniqueInput
  }

  /**
   * Insurance deleteMany
   */
  export type InsuranceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insurances to delete
     */
    where?: InsuranceWhereInput
    /**
     * Limit how many Insurances to delete.
     */
    limit?: number
  }

  /**
   * Insurance.asset
   */
  export type Insurance$assetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
  }

  /**
   * Insurance without action
   */
  export type InsuranceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurance
     */
    select?: InsuranceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurance
     */
    omit?: InsuranceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuranceInclude<ExtArgs> | null
  }


  /**
   * Model RentalAgreement
   */

  export type AggregateRentalAgreement = {
    _count: RentalAgreementCountAggregateOutputType | null
    _avg: RentalAgreementAvgAggregateOutputType | null
    _sum: RentalAgreementSumAggregateOutputType | null
    _min: RentalAgreementMinAggregateOutputType | null
    _max: RentalAgreementMaxAggregateOutputType | null
  }

  export type RentalAgreementAvgAggregateOutputType = {
    rentAmount: Decimal | null
  }

  export type RentalAgreementSumAggregateOutputType = {
    rentAmount: Decimal | null
  }

  export type RentalAgreementMinAggregateOutputType = {
    id: string | null
    tenantName: string | null
    rentAmount: Decimal | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalAgreementMaxAggregateOutputType = {
    id: string | null
    tenantName: string | null
    rentAmount: Decimal | null
    frequency: string | null
    startDate: Date | null
    endDate: Date | null
    assetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalAgreementCountAggregateOutputType = {
    id: number
    tenantName: number
    rentAmount: number
    frequency: number
    startDate: number
    endDate: number
    assetId: number
    matchKeywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalAgreementAvgAggregateInputType = {
    rentAmount?: true
  }

  export type RentalAgreementSumAggregateInputType = {
    rentAmount?: true
  }

  export type RentalAgreementMinAggregateInputType = {
    id?: true
    tenantName?: true
    rentAmount?: true
    frequency?: true
    startDate?: true
    endDate?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalAgreementMaxAggregateInputType = {
    id?: true
    tenantName?: true
    rentAmount?: true
    frequency?: true
    startDate?: true
    endDate?: true
    assetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalAgreementCountAggregateInputType = {
    id?: true
    tenantName?: true
    rentAmount?: true
    frequency?: true
    startDate?: true
    endDate?: true
    assetId?: true
    matchKeywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalAgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalAgreement to aggregate.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalAgreements
    **/
    _count?: true | RentalAgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAgreementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalAgreementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalAgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalAgreementMaxAggregateInputType
  }

  export type GetRentalAgreementAggregateType<T extends RentalAgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalAgreement[P]>
      : GetScalarType<T[P], AggregateRentalAgreement[P]>
  }




  export type RentalAgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalAgreementWhereInput
    orderBy?: RentalAgreementOrderByWithAggregationInput | RentalAgreementOrderByWithAggregationInput[]
    by: RentalAgreementScalarFieldEnum[] | RentalAgreementScalarFieldEnum
    having?: RentalAgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalAgreementCountAggregateInputType | true
    _avg?: RentalAgreementAvgAggregateInputType
    _sum?: RentalAgreementSumAggregateInputType
    _min?: RentalAgreementMinAggregateInputType
    _max?: RentalAgreementMaxAggregateInputType
  }

  export type RentalAgreementGroupByOutputType = {
    id: string
    tenantName: string
    rentAmount: Decimal
    frequency: string
    startDate: Date
    endDate: Date | null
    assetId: string
    matchKeywords: string[]
    createdAt: Date
    updatedAt: Date
    _count: RentalAgreementCountAggregateOutputType | null
    _avg: RentalAgreementAvgAggregateOutputType | null
    _sum: RentalAgreementSumAggregateOutputType | null
    _min: RentalAgreementMinAggregateOutputType | null
    _max: RentalAgreementMaxAggregateOutputType | null
  }

  type GetRentalAgreementGroupByPayload<T extends RentalAgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalAgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalAgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalAgreementGroupByOutputType[P]>
            : GetScalarType<T[P], RentalAgreementGroupByOutputType[P]>
        }
      >
    >


  export type RentalAgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantName?: boolean
    rentAmount?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    assetId?: boolean
    matchKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantName?: boolean
    rentAmount?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    assetId?: boolean
    matchKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantName?: boolean
    rentAmount?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    assetId?: boolean
    matchKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectScalar = {
    id?: boolean
    tenantName?: boolean
    rentAmount?: boolean
    frequency?: boolean
    startDate?: boolean
    endDate?: boolean
    assetId?: boolean
    matchKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalAgreementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantName" | "rentAmount" | "frequency" | "startDate" | "endDate" | "assetId" | "matchKeywords" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalAgreement"]>
  export type RentalAgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type RentalAgreementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type RentalAgreementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $RentalAgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalAgreement"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantName: string
      rentAmount: Prisma.Decimal
      frequency: string
      startDate: Date
      endDate: Date | null
      assetId: string
      matchKeywords: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalAgreement"]>
    composites: {}
  }

  type RentalAgreementGetPayload<S extends boolean | null | undefined | RentalAgreementDefaultArgs> = $Result.GetResult<Prisma.$RentalAgreementPayload, S>

  type RentalAgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalAgreementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalAgreementCountAggregateInputType | true
    }

  export interface RentalAgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalAgreement'], meta: { name: 'RentalAgreement' } }
    /**
     * Find zero or one RentalAgreement that matches the filter.
     * @param {RentalAgreementFindUniqueArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalAgreementFindUniqueArgs>(args: SelectSubset<T, RentalAgreementFindUniqueArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalAgreement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalAgreementFindUniqueOrThrowArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalAgreementFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalAgreementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalAgreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindFirstArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalAgreementFindFirstArgs>(args?: SelectSubset<T, RentalAgreementFindFirstArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalAgreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindFirstOrThrowArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalAgreementFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalAgreementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalAgreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalAgreements
     * const rentalAgreements = await prisma.rentalAgreement.findMany()
     * 
     * // Get first 10 RentalAgreements
     * const rentalAgreements = await prisma.rentalAgreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalAgreementFindManyArgs>(args?: SelectSubset<T, RentalAgreementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalAgreement.
     * @param {RentalAgreementCreateArgs} args - Arguments to create a RentalAgreement.
     * @example
     * // Create one RentalAgreement
     * const RentalAgreement = await prisma.rentalAgreement.create({
     *   data: {
     *     // ... data to create a RentalAgreement
     *   }
     * })
     * 
     */
    create<T extends RentalAgreementCreateArgs>(args: SelectSubset<T, RentalAgreementCreateArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalAgreements.
     * @param {RentalAgreementCreateManyArgs} args - Arguments to create many RentalAgreements.
     * @example
     * // Create many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalAgreementCreateManyArgs>(args?: SelectSubset<T, RentalAgreementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalAgreements and returns the data saved in the database.
     * @param {RentalAgreementCreateManyAndReturnArgs} args - Arguments to create many RentalAgreements.
     * @example
     * // Create many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalAgreements and only return the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalAgreementCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalAgreementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalAgreement.
     * @param {RentalAgreementDeleteArgs} args - Arguments to delete one RentalAgreement.
     * @example
     * // Delete one RentalAgreement
     * const RentalAgreement = await prisma.rentalAgreement.delete({
     *   where: {
     *     // ... filter to delete one RentalAgreement
     *   }
     * })
     * 
     */
    delete<T extends RentalAgreementDeleteArgs>(args: SelectSubset<T, RentalAgreementDeleteArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalAgreement.
     * @param {RentalAgreementUpdateArgs} args - Arguments to update one RentalAgreement.
     * @example
     * // Update one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalAgreementUpdateArgs>(args: SelectSubset<T, RentalAgreementUpdateArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalAgreements.
     * @param {RentalAgreementDeleteManyArgs} args - Arguments to filter RentalAgreements to delete.
     * @example
     * // Delete a few RentalAgreements
     * const { count } = await prisma.rentalAgreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalAgreementDeleteManyArgs>(args?: SelectSubset<T, RentalAgreementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalAgreementUpdateManyArgs>(args: SelectSubset<T, RentalAgreementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalAgreements and returns the data updated in the database.
     * @param {RentalAgreementUpdateManyAndReturnArgs} args - Arguments to update many RentalAgreements.
     * @example
     * // Update many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalAgreements and only return the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentalAgreementUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalAgreementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalAgreement.
     * @param {RentalAgreementUpsertArgs} args - Arguments to update or create a RentalAgreement.
     * @example
     * // Update or create a RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.upsert({
     *   create: {
     *     // ... data to create a RentalAgreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalAgreement we want to update
     *   }
     * })
     */
    upsert<T extends RentalAgreementUpsertArgs>(args: SelectSubset<T, RentalAgreementUpsertArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementCountArgs} args - Arguments to filter RentalAgreements to count.
     * @example
     * // Count the number of RentalAgreements
     * const count = await prisma.rentalAgreement.count({
     *   where: {
     *     // ... the filter for the RentalAgreements we want to count
     *   }
     * })
    **/
    count<T extends RentalAgreementCountArgs>(
      args?: Subset<T, RentalAgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalAgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAgreementAggregateArgs>(args: Subset<T, RentalAgreementAggregateArgs>): Prisma.PrismaPromise<GetRentalAgreementAggregateType<T>>

    /**
     * Group by RentalAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementGroupByArgs} args - Group by arguments.
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
      T extends RentalAgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalAgreementGroupByArgs['orderBy'] }
        : { orderBy?: RentalAgreementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalAgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalAgreement model
   */
  readonly fields: RentalAgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalAgreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalAgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RentalAgreement model
   */
  interface RentalAgreementFieldRefs {
    readonly id: FieldRef<"RentalAgreement", 'String'>
    readonly tenantName: FieldRef<"RentalAgreement", 'String'>
    readonly rentAmount: FieldRef<"RentalAgreement", 'Decimal'>
    readonly frequency: FieldRef<"RentalAgreement", 'String'>
    readonly startDate: FieldRef<"RentalAgreement", 'DateTime'>
    readonly endDate: FieldRef<"RentalAgreement", 'DateTime'>
    readonly assetId: FieldRef<"RentalAgreement", 'String'>
    readonly matchKeywords: FieldRef<"RentalAgreement", 'String[]'>
    readonly createdAt: FieldRef<"RentalAgreement", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalAgreement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalAgreement findUnique
   */
  export type RentalAgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement findUniqueOrThrow
   */
  export type RentalAgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement findFirst
   */
  export type RentalAgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalAgreements.
     */
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement findFirstOrThrow
   */
  export type RentalAgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalAgreements.
     */
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement findMany
   */
  export type RentalAgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreements to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement create
   */
  export type RentalAgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalAgreement.
     */
    data: XOR<RentalAgreementCreateInput, RentalAgreementUncheckedCreateInput>
  }

  /**
   * RentalAgreement createMany
   */
  export type RentalAgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalAgreements.
     */
    data: RentalAgreementCreateManyInput | RentalAgreementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalAgreement createManyAndReturn
   */
  export type RentalAgreementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * The data used to create many RentalAgreements.
     */
    data: RentalAgreementCreateManyInput | RentalAgreementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalAgreement update
   */
  export type RentalAgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalAgreement.
     */
    data: XOR<RentalAgreementUpdateInput, RentalAgreementUncheckedUpdateInput>
    /**
     * Choose, which RentalAgreement to update.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement updateMany
   */
  export type RentalAgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalAgreements.
     */
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyInput>
    /**
     * Filter which RentalAgreements to update
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to update.
     */
    limit?: number
  }

  /**
   * RentalAgreement updateManyAndReturn
   */
  export type RentalAgreementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * The data used to update RentalAgreements.
     */
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyInput>
    /**
     * Filter which RentalAgreements to update
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalAgreement upsert
   */
  export type RentalAgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalAgreement to update in case it exists.
     */
    where: RentalAgreementWhereUniqueInput
    /**
     * In case the RentalAgreement found by the `where` argument doesn't exist, create a new RentalAgreement with this data.
     */
    create: XOR<RentalAgreementCreateInput, RentalAgreementUncheckedCreateInput>
    /**
     * In case the RentalAgreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalAgreementUpdateInput, RentalAgreementUncheckedUpdateInput>
  }

  /**
   * RentalAgreement delete
   */
  export type RentalAgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter which RentalAgreement to delete.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement deleteMany
   */
  export type RentalAgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalAgreements to delete
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to delete.
     */
    limit?: number
  }

  /**
   * RentalAgreement without action
   */
  export type RentalAgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
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


  export const AssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    value: 'value',
    owner: 'owner',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetHistoryScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId',
    value: 'value',
    changedAt: 'changedAt',
    changedBy: 'changedBy'
  };

  export type AssetHistoryScalarFieldEnum = (typeof AssetHistoryScalarFieldEnum)[keyof typeof AssetHistoryScalarFieldEnum]


  export const LiabilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    amount: 'amount',
    interestRate: 'interestRate',
    fixExpiry: 'fixExpiry',
    assetId: 'assetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LiabilityScalarFieldEnum = (typeof LiabilityScalarFieldEnum)[keyof typeof LiabilityScalarFieldEnum]


  export const LiabilityHistoryScalarFieldEnum: {
    id: 'id',
    liabilityId: 'liabilityId',
    amount: 'amount',
    interestRate: 'interestRate',
    changedAt: 'changedAt',
    changedBy: 'changedBy'
  };

  export type LiabilityHistoryScalarFieldEnum = (typeof LiabilityHistoryScalarFieldEnum)[keyof typeof LiabilityHistoryScalarFieldEnum]


  export const InsuranceScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    policyNumber: 'policyNumber',
    premium: 'premium',
    coverage: 'coverage',
    excess: 'excess',
    renewalDate: 'renewalDate',
    assetId: 'assetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InsuranceScalarFieldEnum = (typeof InsuranceScalarFieldEnum)[keyof typeof InsuranceScalarFieldEnum]


  export const RentalAgreementScalarFieldEnum: {
    id: 'id',
    tenantName: 'tenantName',
    rentAmount: 'rentAmount',
    frequency: 'frequency',
    startDate: 'startDate',
    endDate: 'endDate',
    assetId: 'assetId',
    matchKeywords: 'matchKeywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalAgreementScalarFieldEnum = (typeof RentalAgreementScalarFieldEnum)[keyof typeof RentalAgreementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    value?: DecimalFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    owner?: StringFilter<"Asset"> | string
    address?: StringNullableFilter<"Asset"> | string | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    liabilities?: LiabilityListRelationFilter
    insurances?: InsuranceListRelationFilter
    agreements?: RentalAgreementListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    owner?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    liabilities?: LiabilityOrderByRelationAggregateInput
    insurances?: InsuranceOrderByRelationAggregateInput
    agreements?: RentalAgreementOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    name?: StringFilter<"Asset"> | string
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    value?: DecimalFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    owner?: StringFilter<"Asset"> | string
    address?: StringNullableFilter<"Asset"> | string | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    liabilities?: LiabilityListRelationFilter
    insurances?: InsuranceListRelationFilter
    agreements?: RentalAgreementListRelationFilter
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    owner?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    type?: EnumAssetTypeWithAggregatesFilter<"Asset"> | $Enums.AssetType
    value?: DecimalWithAggregatesFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    owner?: StringWithAggregatesFilter<"Asset"> | string
    address?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type AssetHistoryWhereInput = {
    AND?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    OR?: AssetHistoryWhereInput[]
    NOT?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    id?: StringFilter<"AssetHistory"> | string
    assetId?: StringFilter<"AssetHistory"> | string
    value?: DecimalFilter<"AssetHistory"> | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFilter<"AssetHistory"> | Date | string
    changedBy?: StringNullableFilter<"AssetHistory"> | string | null
  }

  export type AssetHistoryOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    value?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrderInput | SortOrder
  }

  export type AssetHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    OR?: AssetHistoryWhereInput[]
    NOT?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    assetId?: StringFilter<"AssetHistory"> | string
    value?: DecimalFilter<"AssetHistory"> | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFilter<"AssetHistory"> | Date | string
    changedBy?: StringNullableFilter<"AssetHistory"> | string | null
  }, "id">

  export type AssetHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    value?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    _count?: AssetHistoryCountOrderByAggregateInput
    _avg?: AssetHistoryAvgOrderByAggregateInput
    _max?: AssetHistoryMaxOrderByAggregateInput
    _min?: AssetHistoryMinOrderByAggregateInput
    _sum?: AssetHistorySumOrderByAggregateInput
  }

  export type AssetHistoryScalarWhereWithAggregatesInput = {
    AND?: AssetHistoryScalarWhereWithAggregatesInput | AssetHistoryScalarWhereWithAggregatesInput[]
    OR?: AssetHistoryScalarWhereWithAggregatesInput[]
    NOT?: AssetHistoryScalarWhereWithAggregatesInput | AssetHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetHistory"> | string
    assetId?: StringWithAggregatesFilter<"AssetHistory"> | string
    value?: DecimalWithAggregatesFilter<"AssetHistory"> | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeWithAggregatesFilter<"AssetHistory"> | Date | string
    changedBy?: StringNullableWithAggregatesFilter<"AssetHistory"> | string | null
  }

  export type LiabilityWhereInput = {
    AND?: LiabilityWhereInput | LiabilityWhereInput[]
    OR?: LiabilityWhereInput[]
    NOT?: LiabilityWhereInput | LiabilityWhereInput[]
    id?: StringFilter<"Liability"> | string
    name?: StringFilter<"Liability"> | string
    type?: StringFilter<"Liability"> | string
    amount?: DecimalFilter<"Liability"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableFilter<"Liability"> | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: DateTimeNullableFilter<"Liability"> | Date | string | null
    assetId?: StringNullableFilter<"Liability"> | string | null
    createdAt?: DateTimeFilter<"Liability"> | Date | string
    updatedAt?: DateTimeFilter<"Liability"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
  }

  export type LiabilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    fixExpiry?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type LiabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiabilityWhereInput | LiabilityWhereInput[]
    OR?: LiabilityWhereInput[]
    NOT?: LiabilityWhereInput | LiabilityWhereInput[]
    name?: StringFilter<"Liability"> | string
    type?: StringFilter<"Liability"> | string
    amount?: DecimalFilter<"Liability"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableFilter<"Liability"> | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: DateTimeNullableFilter<"Liability"> | Date | string | null
    assetId?: StringNullableFilter<"Liability"> | string | null
    createdAt?: DateTimeFilter<"Liability"> | Date | string
    updatedAt?: DateTimeFilter<"Liability"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
  }, "id">

  export type LiabilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    fixExpiry?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LiabilityCountOrderByAggregateInput
    _avg?: LiabilityAvgOrderByAggregateInput
    _max?: LiabilityMaxOrderByAggregateInput
    _min?: LiabilityMinOrderByAggregateInput
    _sum?: LiabilitySumOrderByAggregateInput
  }

  export type LiabilityScalarWhereWithAggregatesInput = {
    AND?: LiabilityScalarWhereWithAggregatesInput | LiabilityScalarWhereWithAggregatesInput[]
    OR?: LiabilityScalarWhereWithAggregatesInput[]
    NOT?: LiabilityScalarWhereWithAggregatesInput | LiabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Liability"> | string
    name?: StringWithAggregatesFilter<"Liability"> | string
    type?: StringWithAggregatesFilter<"Liability"> | string
    amount?: DecimalWithAggregatesFilter<"Liability"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableWithAggregatesFilter<"Liability"> | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: DateTimeNullableWithAggregatesFilter<"Liability"> | Date | string | null
    assetId?: StringNullableWithAggregatesFilter<"Liability"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Liability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Liability"> | Date | string
  }

  export type LiabilityHistoryWhereInput = {
    AND?: LiabilityHistoryWhereInput | LiabilityHistoryWhereInput[]
    OR?: LiabilityHistoryWhereInput[]
    NOT?: LiabilityHistoryWhereInput | LiabilityHistoryWhereInput[]
    id?: StringFilter<"LiabilityHistory"> | string
    liabilityId?: StringFilter<"LiabilityHistory"> | string
    amount?: DecimalFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFilter<"LiabilityHistory"> | Date | string
    changedBy?: StringNullableFilter<"LiabilityHistory"> | string | null
  }

  export type LiabilityHistoryOrderByWithRelationInput = {
    id?: SortOrder
    liabilityId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrderInput | SortOrder
  }

  export type LiabilityHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiabilityHistoryWhereInput | LiabilityHistoryWhereInput[]
    OR?: LiabilityHistoryWhereInput[]
    NOT?: LiabilityHistoryWhereInput | LiabilityHistoryWhereInput[]
    liabilityId?: StringFilter<"LiabilityHistory"> | string
    amount?: DecimalFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFilter<"LiabilityHistory"> | Date | string
    changedBy?: StringNullableFilter<"LiabilityHistory"> | string | null
  }, "id">

  export type LiabilityHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    liabilityId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrderInput | SortOrder
    _count?: LiabilityHistoryCountOrderByAggregateInput
    _avg?: LiabilityHistoryAvgOrderByAggregateInput
    _max?: LiabilityHistoryMaxOrderByAggregateInput
    _min?: LiabilityHistoryMinOrderByAggregateInput
    _sum?: LiabilityHistorySumOrderByAggregateInput
  }

  export type LiabilityHistoryScalarWhereWithAggregatesInput = {
    AND?: LiabilityHistoryScalarWhereWithAggregatesInput | LiabilityHistoryScalarWhereWithAggregatesInput[]
    OR?: LiabilityHistoryScalarWhereWithAggregatesInput[]
    NOT?: LiabilityHistoryScalarWhereWithAggregatesInput | LiabilityHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiabilityHistory"> | string
    liabilityId?: StringWithAggregatesFilter<"LiabilityHistory"> | string
    amount?: DecimalWithAggregatesFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableWithAggregatesFilter<"LiabilityHistory"> | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeWithAggregatesFilter<"LiabilityHistory"> | Date | string
    changedBy?: StringNullableWithAggregatesFilter<"LiabilityHistory"> | string | null
  }

  export type InsuranceWhereInput = {
    AND?: InsuranceWhereInput | InsuranceWhereInput[]
    OR?: InsuranceWhereInput[]
    NOT?: InsuranceWhereInput | InsuranceWhereInput[]
    id?: StringFilter<"Insurance"> | string
    provider?: StringFilter<"Insurance"> | string
    policyNumber?: StringFilter<"Insurance"> | string
    premium?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    excess?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFilter<"Insurance"> | Date | string
    assetId?: StringNullableFilter<"Insurance"> | string | null
    createdAt?: DateTimeFilter<"Insurance"> | Date | string
    updatedAt?: DateTimeFilter<"Insurance"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
  }

  export type InsuranceOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    policyNumber?: SortOrder
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
    renewalDate?: SortOrder
    assetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type InsuranceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InsuranceWhereInput | InsuranceWhereInput[]
    OR?: InsuranceWhereInput[]
    NOT?: InsuranceWhereInput | InsuranceWhereInput[]
    provider?: StringFilter<"Insurance"> | string
    policyNumber?: StringFilter<"Insurance"> | string
    premium?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    excess?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFilter<"Insurance"> | Date | string
    assetId?: StringNullableFilter<"Insurance"> | string | null
    createdAt?: DateTimeFilter<"Insurance"> | Date | string
    updatedAt?: DateTimeFilter<"Insurance"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
  }, "id">

  export type InsuranceOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    policyNumber?: SortOrder
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
    renewalDate?: SortOrder
    assetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InsuranceCountOrderByAggregateInput
    _avg?: InsuranceAvgOrderByAggregateInput
    _max?: InsuranceMaxOrderByAggregateInput
    _min?: InsuranceMinOrderByAggregateInput
    _sum?: InsuranceSumOrderByAggregateInput
  }

  export type InsuranceScalarWhereWithAggregatesInput = {
    AND?: InsuranceScalarWhereWithAggregatesInput | InsuranceScalarWhereWithAggregatesInput[]
    OR?: InsuranceScalarWhereWithAggregatesInput[]
    NOT?: InsuranceScalarWhereWithAggregatesInput | InsuranceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insurance"> | string
    provider?: StringWithAggregatesFilter<"Insurance"> | string
    policyNumber?: StringWithAggregatesFilter<"Insurance"> | string
    premium?: DecimalWithAggregatesFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    coverage?: DecimalWithAggregatesFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    excess?: DecimalWithAggregatesFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeWithAggregatesFilter<"Insurance"> | Date | string
    assetId?: StringNullableWithAggregatesFilter<"Insurance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Insurance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Insurance"> | Date | string
  }

  export type RentalAgreementWhereInput = {
    AND?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    OR?: RentalAgreementWhereInput[]
    NOT?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    id?: StringFilter<"RentalAgreement"> | string
    tenantName?: StringFilter<"RentalAgreement"> | string
    rentAmount?: DecimalFilter<"RentalAgreement"> | Decimal | DecimalJsLike | number | string
    frequency?: StringFilter<"RentalAgreement"> | string
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    assetId?: StringFilter<"RentalAgreement"> | string
    matchKeywords?: StringNullableListFilter<"RentalAgreement">
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type RentalAgreementOrderByWithRelationInput = {
    id?: SortOrder
    tenantName?: SortOrder
    rentAmount?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    assetId?: SortOrder
    matchKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type RentalAgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    OR?: RentalAgreementWhereInput[]
    NOT?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    tenantName?: StringFilter<"RentalAgreement"> | string
    rentAmount?: DecimalFilter<"RentalAgreement"> | Decimal | DecimalJsLike | number | string
    frequency?: StringFilter<"RentalAgreement"> | string
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    assetId?: StringFilter<"RentalAgreement"> | string
    matchKeywords?: StringNullableListFilter<"RentalAgreement">
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type RentalAgreementOrderByWithAggregationInput = {
    id?: SortOrder
    tenantName?: SortOrder
    rentAmount?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    assetId?: SortOrder
    matchKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalAgreementCountOrderByAggregateInput
    _avg?: RentalAgreementAvgOrderByAggregateInput
    _max?: RentalAgreementMaxOrderByAggregateInput
    _min?: RentalAgreementMinOrderByAggregateInput
    _sum?: RentalAgreementSumOrderByAggregateInput
  }

  export type RentalAgreementScalarWhereWithAggregatesInput = {
    AND?: RentalAgreementScalarWhereWithAggregatesInput | RentalAgreementScalarWhereWithAggregatesInput[]
    OR?: RentalAgreementScalarWhereWithAggregatesInput[]
    NOT?: RentalAgreementScalarWhereWithAggregatesInput | RentalAgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalAgreement"> | string
    tenantName?: StringWithAggregatesFilter<"RentalAgreement"> | string
    rentAmount?: DecimalWithAggregatesFilter<"RentalAgreement"> | Decimal | DecimalJsLike | number | string
    frequency?: StringWithAggregatesFilter<"RentalAgreement"> | string
    startDate?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"RentalAgreement"> | Date | string | null
    assetId?: StringWithAggregatesFilter<"RentalAgreement"> | string
    matchKeywords?: StringNullableListFilter<"RentalAgreement">
    createdAt?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityCreateNestedManyWithoutAssetInput
    insurances?: InsuranceCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityUncheckedCreateNestedManyWithoutAssetInput
    insurances?: InsuranceUncheckedCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUpdateManyWithoutAssetNestedInput
    insurances?: InsuranceUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUncheckedUpdateManyWithoutAssetNestedInput
    insurances?: InsuranceUncheckedUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetHistoryCreateInput = {
    id?: string
    assetId: string
    value: Decimal | DecimalJsLike | number | string
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type AssetHistoryUncheckedCreateInput = {
    id?: string
    assetId: string
    value: Decimal | DecimalJsLike | number | string
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type AssetHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetHistoryCreateManyInput = {
    id?: string
    assetId: string
    value: Decimal | DecimalJsLike | number | string
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type AssetHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LiabilityCreateInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    asset?: AssetCreateNestedOneWithoutLiabilitiesInput
  }

  export type LiabilityUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    assetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneWithoutLiabilitiesNestedInput
  }

  export type LiabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiabilityCreateManyInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    assetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiabilityHistoryCreateInput = {
    id?: string
    liabilityId: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type LiabilityHistoryUncheckedCreateInput = {
    id?: string
    liabilityId: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type LiabilityHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liabilityId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LiabilityHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liabilityId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LiabilityHistoryCreateManyInput = {
    id?: string
    liabilityId: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    changedAt?: Date | string
    changedBy?: string | null
  }

  export type LiabilityHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    liabilityId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LiabilityHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liabilityId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InsuranceCreateInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    asset?: AssetCreateNestedOneWithoutInsurancesInput
  }

  export type InsuranceUncheckedCreateInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    assetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuranceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneWithoutInsurancesNestedInput
  }

  export type InsuranceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuranceCreateManyInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    assetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuranceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuranceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementCreateInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    asset: AssetCreateNestedOneWithoutAgreementsInput
  }

  export type RentalAgreementUncheckedCreateInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    assetId: string
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutAgreementsNestedInput
  }

  export type RentalAgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetId?: StringFieldUpdateOperationsInput | string
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementCreateManyInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    assetId: string
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetId?: StringFieldUpdateOperationsInput | string
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type LiabilityListRelationFilter = {
    every?: LiabilityWhereInput
    some?: LiabilityWhereInput
    none?: LiabilityWhereInput
  }

  export type InsuranceListRelationFilter = {
    every?: InsuranceWhereInput
    some?: InsuranceWhereInput
    none?: InsuranceWhereInput
  }

  export type RentalAgreementListRelationFilter = {
    every?: RentalAgreementWhereInput
    some?: RentalAgreementWhereInput
    none?: RentalAgreementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LiabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsuranceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalAgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    owner?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    owner?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    owner?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    value?: SortOrder
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

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type AssetHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    value?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type AssetHistoryAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AssetHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    value?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type AssetHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    value?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type AssetHistorySumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type AssetNullableScalarRelationFilter = {
    is?: AssetWhereInput | null
    isNot?: AssetWhereInput | null
  }

  export type LiabilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    fixExpiry?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiabilityAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type LiabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    fixExpiry?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiabilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    fixExpiry?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiabilitySumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type LiabilityHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    liabilityId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type LiabilityHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type LiabilityHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    liabilityId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type LiabilityHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    liabilityId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    changedAt?: SortOrder
    changedBy?: SortOrder
  }

  export type LiabilityHistorySumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type InsuranceCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    policyNumber?: SortOrder
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
    renewalDate?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuranceAvgOrderByAggregateInput = {
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
  }

  export type InsuranceMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    policyNumber?: SortOrder
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
    renewalDate?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuranceMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    policyNumber?: SortOrder
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
    renewalDate?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuranceSumOrderByAggregateInput = {
    premium?: SortOrder
    coverage?: SortOrder
    excess?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type RentalAgreementCountOrderByAggregateInput = {
    id?: SortOrder
    tenantName?: SortOrder
    rentAmount?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    assetId?: SortOrder
    matchKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementAvgOrderByAggregateInput = {
    rentAmount?: SortOrder
  }

  export type RentalAgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantName?: SortOrder
    rentAmount?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementMinOrderByAggregateInput = {
    id?: SortOrder
    tenantName?: SortOrder
    rentAmount?: SortOrder
    frequency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    assetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementSumOrderByAggregateInput = {
    rentAmount?: SortOrder
  }

  export type LiabilityCreateNestedManyWithoutAssetInput = {
    create?: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput> | LiabilityCreateWithoutAssetInput[] | LiabilityUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: LiabilityCreateOrConnectWithoutAssetInput | LiabilityCreateOrConnectWithoutAssetInput[]
    createMany?: LiabilityCreateManyAssetInputEnvelope
    connect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
  }

  export type InsuranceCreateNestedManyWithoutAssetInput = {
    create?: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput> | InsuranceCreateWithoutAssetInput[] | InsuranceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: InsuranceCreateOrConnectWithoutAssetInput | InsuranceCreateOrConnectWithoutAssetInput[]
    createMany?: InsuranceCreateManyAssetInputEnvelope
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
  }

  export type RentalAgreementCreateNestedManyWithoutAssetInput = {
    create?: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput> | RentalAgreementCreateWithoutAssetInput[] | RentalAgreementUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutAssetInput | RentalAgreementCreateOrConnectWithoutAssetInput[]
    createMany?: RentalAgreementCreateManyAssetInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type LiabilityUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput> | LiabilityCreateWithoutAssetInput[] | LiabilityUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: LiabilityCreateOrConnectWithoutAssetInput | LiabilityCreateOrConnectWithoutAssetInput[]
    createMany?: LiabilityCreateManyAssetInputEnvelope
    connect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
  }

  export type InsuranceUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput> | InsuranceCreateWithoutAssetInput[] | InsuranceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: InsuranceCreateOrConnectWithoutAssetInput | InsuranceCreateOrConnectWithoutAssetInput[]
    createMany?: InsuranceCreateManyAssetInputEnvelope
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
  }

  export type RentalAgreementUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput> | RentalAgreementCreateWithoutAssetInput[] | RentalAgreementUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutAssetInput | RentalAgreementCreateOrConnectWithoutAssetInput[]
    createMany?: RentalAgreementCreateManyAssetInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LiabilityUpdateManyWithoutAssetNestedInput = {
    create?: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput> | LiabilityCreateWithoutAssetInput[] | LiabilityUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: LiabilityCreateOrConnectWithoutAssetInput | LiabilityCreateOrConnectWithoutAssetInput[]
    upsert?: LiabilityUpsertWithWhereUniqueWithoutAssetInput | LiabilityUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: LiabilityCreateManyAssetInputEnvelope
    set?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    disconnect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    delete?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    connect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    update?: LiabilityUpdateWithWhereUniqueWithoutAssetInput | LiabilityUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: LiabilityUpdateManyWithWhereWithoutAssetInput | LiabilityUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: LiabilityScalarWhereInput | LiabilityScalarWhereInput[]
  }

  export type InsuranceUpdateManyWithoutAssetNestedInput = {
    create?: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput> | InsuranceCreateWithoutAssetInput[] | InsuranceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: InsuranceCreateOrConnectWithoutAssetInput | InsuranceCreateOrConnectWithoutAssetInput[]
    upsert?: InsuranceUpsertWithWhereUniqueWithoutAssetInput | InsuranceUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: InsuranceCreateManyAssetInputEnvelope
    set?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    disconnect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    delete?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    update?: InsuranceUpdateWithWhereUniqueWithoutAssetInput | InsuranceUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: InsuranceUpdateManyWithWhereWithoutAssetInput | InsuranceUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[]
  }

  export type RentalAgreementUpdateManyWithoutAssetNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput> | RentalAgreementCreateWithoutAssetInput[] | RentalAgreementUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutAssetInput | RentalAgreementCreateOrConnectWithoutAssetInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutAssetInput | RentalAgreementUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: RentalAgreementCreateManyAssetInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutAssetInput | RentalAgreementUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutAssetInput | RentalAgreementUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type LiabilityUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput> | LiabilityCreateWithoutAssetInput[] | LiabilityUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: LiabilityCreateOrConnectWithoutAssetInput | LiabilityCreateOrConnectWithoutAssetInput[]
    upsert?: LiabilityUpsertWithWhereUniqueWithoutAssetInput | LiabilityUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: LiabilityCreateManyAssetInputEnvelope
    set?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    disconnect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    delete?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    connect?: LiabilityWhereUniqueInput | LiabilityWhereUniqueInput[]
    update?: LiabilityUpdateWithWhereUniqueWithoutAssetInput | LiabilityUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: LiabilityUpdateManyWithWhereWithoutAssetInput | LiabilityUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: LiabilityScalarWhereInput | LiabilityScalarWhereInput[]
  }

  export type InsuranceUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput> | InsuranceCreateWithoutAssetInput[] | InsuranceUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: InsuranceCreateOrConnectWithoutAssetInput | InsuranceCreateOrConnectWithoutAssetInput[]
    upsert?: InsuranceUpsertWithWhereUniqueWithoutAssetInput | InsuranceUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: InsuranceCreateManyAssetInputEnvelope
    set?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    disconnect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    delete?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    connect?: InsuranceWhereUniqueInput | InsuranceWhereUniqueInput[]
    update?: InsuranceUpdateWithWhereUniqueWithoutAssetInput | InsuranceUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: InsuranceUpdateManyWithWhereWithoutAssetInput | InsuranceUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[]
  }

  export type RentalAgreementUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput> | RentalAgreementCreateWithoutAssetInput[] | RentalAgreementUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutAssetInput | RentalAgreementCreateOrConnectWithoutAssetInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutAssetInput | RentalAgreementUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: RentalAgreementCreateManyAssetInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutAssetInput | RentalAgreementUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutAssetInput | RentalAgreementUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutLiabilitiesInput = {
    create?: XOR<AssetCreateWithoutLiabilitiesInput, AssetUncheckedCreateWithoutLiabilitiesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutLiabilitiesInput
    connect?: AssetWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AssetUpdateOneWithoutLiabilitiesNestedInput = {
    create?: XOR<AssetCreateWithoutLiabilitiesInput, AssetUncheckedCreateWithoutLiabilitiesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutLiabilitiesInput
    upsert?: AssetUpsertWithoutLiabilitiesInput
    disconnect?: AssetWhereInput | boolean
    delete?: AssetWhereInput | boolean
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutLiabilitiesInput, AssetUpdateWithoutLiabilitiesInput>, AssetUncheckedUpdateWithoutLiabilitiesInput>
  }

  export type AssetCreateNestedOneWithoutInsurancesInput = {
    create?: XOR<AssetCreateWithoutInsurancesInput, AssetUncheckedCreateWithoutInsurancesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutInsurancesInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneWithoutInsurancesNestedInput = {
    create?: XOR<AssetCreateWithoutInsurancesInput, AssetUncheckedCreateWithoutInsurancesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutInsurancesInput
    upsert?: AssetUpsertWithoutInsurancesInput
    disconnect?: AssetWhereInput | boolean
    delete?: AssetWhereInput | boolean
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutInsurancesInput, AssetUpdateWithoutInsurancesInput>, AssetUncheckedUpdateWithoutInsurancesInput>
  }

  export type RentalAgreementCreatematchKeywordsInput = {
    set: string[]
  }

  export type AssetCreateNestedOneWithoutAgreementsInput = {
    create?: XOR<AssetCreateWithoutAgreementsInput, AssetUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAgreementsInput
    connect?: AssetWhereUniqueInput
  }

  export type RentalAgreementUpdatematchKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AssetUpdateOneRequiredWithoutAgreementsNestedInput = {
    create?: XOR<AssetCreateWithoutAgreementsInput, AssetUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutAgreementsInput
    upsert?: AssetUpsertWithoutAgreementsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutAgreementsInput, AssetUpdateWithoutAgreementsInput>, AssetUncheckedUpdateWithoutAgreementsInput>
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

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type LiabilityCreateWithoutAssetInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiabilityUncheckedCreateWithoutAssetInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiabilityCreateOrConnectWithoutAssetInput = {
    where: LiabilityWhereUniqueInput
    create: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput>
  }

  export type LiabilityCreateManyAssetInputEnvelope = {
    data: LiabilityCreateManyAssetInput | LiabilityCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type InsuranceCreateWithoutAssetInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuranceUncheckedCreateWithoutAssetInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuranceCreateOrConnectWithoutAssetInput = {
    where: InsuranceWhereUniqueInput
    create: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput>
  }

  export type InsuranceCreateManyAssetInputEnvelope = {
    data: InsuranceCreateManyAssetInput | InsuranceCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type RentalAgreementCreateWithoutAssetInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementUncheckedCreateWithoutAssetInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementCreateOrConnectWithoutAssetInput = {
    where: RentalAgreementWhereUniqueInput
    create: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput>
  }

  export type RentalAgreementCreateManyAssetInputEnvelope = {
    data: RentalAgreementCreateManyAssetInput | RentalAgreementCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type LiabilityUpsertWithWhereUniqueWithoutAssetInput = {
    where: LiabilityWhereUniqueInput
    update: XOR<LiabilityUpdateWithoutAssetInput, LiabilityUncheckedUpdateWithoutAssetInput>
    create: XOR<LiabilityCreateWithoutAssetInput, LiabilityUncheckedCreateWithoutAssetInput>
  }

  export type LiabilityUpdateWithWhereUniqueWithoutAssetInput = {
    where: LiabilityWhereUniqueInput
    data: XOR<LiabilityUpdateWithoutAssetInput, LiabilityUncheckedUpdateWithoutAssetInput>
  }

  export type LiabilityUpdateManyWithWhereWithoutAssetInput = {
    where: LiabilityScalarWhereInput
    data: XOR<LiabilityUpdateManyMutationInput, LiabilityUncheckedUpdateManyWithoutAssetInput>
  }

  export type LiabilityScalarWhereInput = {
    AND?: LiabilityScalarWhereInput | LiabilityScalarWhereInput[]
    OR?: LiabilityScalarWhereInput[]
    NOT?: LiabilityScalarWhereInput | LiabilityScalarWhereInput[]
    id?: StringFilter<"Liability"> | string
    name?: StringFilter<"Liability"> | string
    type?: StringFilter<"Liability"> | string
    amount?: DecimalFilter<"Liability"> | Decimal | DecimalJsLike | number | string
    interestRate?: DecimalNullableFilter<"Liability"> | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: DateTimeNullableFilter<"Liability"> | Date | string | null
    assetId?: StringNullableFilter<"Liability"> | string | null
    createdAt?: DateTimeFilter<"Liability"> | Date | string
    updatedAt?: DateTimeFilter<"Liability"> | Date | string
  }

  export type InsuranceUpsertWithWhereUniqueWithoutAssetInput = {
    where: InsuranceWhereUniqueInput
    update: XOR<InsuranceUpdateWithoutAssetInput, InsuranceUncheckedUpdateWithoutAssetInput>
    create: XOR<InsuranceCreateWithoutAssetInput, InsuranceUncheckedCreateWithoutAssetInput>
  }

  export type InsuranceUpdateWithWhereUniqueWithoutAssetInput = {
    where: InsuranceWhereUniqueInput
    data: XOR<InsuranceUpdateWithoutAssetInput, InsuranceUncheckedUpdateWithoutAssetInput>
  }

  export type InsuranceUpdateManyWithWhereWithoutAssetInput = {
    where: InsuranceScalarWhereInput
    data: XOR<InsuranceUpdateManyMutationInput, InsuranceUncheckedUpdateManyWithoutAssetInput>
  }

  export type InsuranceScalarWhereInput = {
    AND?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[]
    OR?: InsuranceScalarWhereInput[]
    NOT?: InsuranceScalarWhereInput | InsuranceScalarWhereInput[]
    id?: StringFilter<"Insurance"> | string
    provider?: StringFilter<"Insurance"> | string
    policyNumber?: StringFilter<"Insurance"> | string
    premium?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    excess?: DecimalFilter<"Insurance"> | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFilter<"Insurance"> | Date | string
    assetId?: StringNullableFilter<"Insurance"> | string | null
    createdAt?: DateTimeFilter<"Insurance"> | Date | string
    updatedAt?: DateTimeFilter<"Insurance"> | Date | string
  }

  export type RentalAgreementUpsertWithWhereUniqueWithoutAssetInput = {
    where: RentalAgreementWhereUniqueInput
    update: XOR<RentalAgreementUpdateWithoutAssetInput, RentalAgreementUncheckedUpdateWithoutAssetInput>
    create: XOR<RentalAgreementCreateWithoutAssetInput, RentalAgreementUncheckedCreateWithoutAssetInput>
  }

  export type RentalAgreementUpdateWithWhereUniqueWithoutAssetInput = {
    where: RentalAgreementWhereUniqueInput
    data: XOR<RentalAgreementUpdateWithoutAssetInput, RentalAgreementUncheckedUpdateWithoutAssetInput>
  }

  export type RentalAgreementUpdateManyWithWhereWithoutAssetInput = {
    where: RentalAgreementScalarWhereInput
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyWithoutAssetInput>
  }

  export type RentalAgreementScalarWhereInput = {
    AND?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
    OR?: RentalAgreementScalarWhereInput[]
    NOT?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
    id?: StringFilter<"RentalAgreement"> | string
    tenantName?: StringFilter<"RentalAgreement"> | string
    rentAmount?: DecimalFilter<"RentalAgreement"> | Decimal | DecimalJsLike | number | string
    frequency?: StringFilter<"RentalAgreement"> | string
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    assetId?: StringFilter<"RentalAgreement"> | string
    matchKeywords?: StringNullableListFilter<"RentalAgreement">
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
  }

  export type AssetCreateWithoutLiabilitiesInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insurances?: InsuranceCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutLiabilitiesInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insurances?: InsuranceUncheckedCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutLiabilitiesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutLiabilitiesInput, AssetUncheckedCreateWithoutLiabilitiesInput>
  }

  export type AssetUpsertWithoutLiabilitiesInput = {
    update: XOR<AssetUpdateWithoutLiabilitiesInput, AssetUncheckedUpdateWithoutLiabilitiesInput>
    create: XOR<AssetCreateWithoutLiabilitiesInput, AssetUncheckedCreateWithoutLiabilitiesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutLiabilitiesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutLiabilitiesInput, AssetUncheckedUpdateWithoutLiabilitiesInput>
  }

  export type AssetUpdateWithoutLiabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insurances?: InsuranceUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutLiabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insurances?: InsuranceUncheckedUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutInsurancesInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutInsurancesInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityUncheckedCreateNestedManyWithoutAssetInput
    agreements?: RentalAgreementUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutInsurancesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutInsurancesInput, AssetUncheckedCreateWithoutInsurancesInput>
  }

  export type AssetUpsertWithoutInsurancesInput = {
    update: XOR<AssetUpdateWithoutInsurancesInput, AssetUncheckedUpdateWithoutInsurancesInput>
    create: XOR<AssetCreateWithoutInsurancesInput, AssetUncheckedCreateWithoutInsurancesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutInsurancesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutInsurancesInput, AssetUncheckedUpdateWithoutInsurancesInput>
  }

  export type AssetUpdateWithoutInsurancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutInsurancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUncheckedUpdateManyWithoutAssetNestedInput
    agreements?: RentalAgreementUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutAgreementsInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityCreateNestedManyWithoutAssetInput
    insurances?: InsuranceCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutAgreementsInput = {
    id?: string
    name: string
    type: $Enums.AssetType
    value: Decimal | DecimalJsLike | number | string
    owner: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    liabilities?: LiabilityUncheckedCreateNestedManyWithoutAssetInput
    insurances?: InsuranceUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutAgreementsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutAgreementsInput, AssetUncheckedCreateWithoutAgreementsInput>
  }

  export type AssetUpsertWithoutAgreementsInput = {
    update: XOR<AssetUpdateWithoutAgreementsInput, AssetUncheckedUpdateWithoutAgreementsInput>
    create: XOR<AssetCreateWithoutAgreementsInput, AssetUncheckedCreateWithoutAgreementsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutAgreementsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutAgreementsInput, AssetUncheckedUpdateWithoutAgreementsInput>
  }

  export type AssetUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUpdateManyWithoutAssetNestedInput
    insurances?: InsuranceUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    owner?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liabilities?: LiabilityUncheckedUpdateManyWithoutAssetNestedInput
    insurances?: InsuranceUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type LiabilityCreateManyAssetInput = {
    id?: string
    name: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    interestRate?: Decimal | DecimalJsLike | number | string | null
    fixExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuranceCreateManyAssetInput = {
    id?: string
    provider: string
    policyNumber: string
    premium: Decimal | DecimalJsLike | number | string
    coverage: Decimal | DecimalJsLike | number | string
    excess: Decimal | DecimalJsLike | number | string
    renewalDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementCreateManyAssetInput = {
    id?: string
    tenantName: string
    rentAmount: Decimal | DecimalJsLike | number | string
    frequency: string
    startDate: Date | string
    endDate?: Date | string | null
    matchKeywords?: RentalAgreementCreatematchKeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiabilityUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiabilityUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiabilityUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fixExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuranceUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuranceUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuranceUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    premium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    excess?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantName?: StringFieldUpdateOperationsInput | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchKeywords?: RentalAgreementUpdatematchKeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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