
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
 * Model AudioChunk
 * 
 */
export type AudioChunk = $Result.DefaultSelection<Prisma.$AudioChunkPayload>
/**
 * Model FullRecording
 * 
 */
export type FullRecording = $Result.DefaultSelection<Prisma.$FullRecordingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AudioChunks
 * const audioChunks = await prisma.audioChunk.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more AudioChunks
   * const audioChunks = await prisma.audioChunk.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.audioChunk`: Exposes CRUD operations for the **AudioChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioChunks
    * const audioChunks = await prisma.audioChunk.findMany()
    * ```
    */
  get audioChunk(): Prisma.AudioChunkDelegate<ExtArgs>;

  /**
   * `prisma.fullRecording`: Exposes CRUD operations for the **FullRecording** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FullRecordings
    * const fullRecordings = await prisma.fullRecording.findMany()
    * ```
    */
  get fullRecording(): Prisma.FullRecordingDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    AudioChunk: 'AudioChunk',
    FullRecording: 'FullRecording'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'audioChunk' | 'fullRecording'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      AudioChunk: {
        payload: Prisma.$AudioChunkPayload<ExtArgs>
        fields: Prisma.AudioChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioChunkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioChunkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          findFirst: {
            args: Prisma.AudioChunkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioChunkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          findMany: {
            args: Prisma.AudioChunkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>[]
          }
          create: {
            args: Prisma.AudioChunkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          createMany: {
            args: Prisma.AudioChunkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioChunkCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>[]
          }
          delete: {
            args: Prisma.AudioChunkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          update: {
            args: Prisma.AudioChunkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          deleteMany: {
            args: Prisma.AudioChunkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AudioChunkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AudioChunkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioChunkPayload>
          }
          aggregate: {
            args: Prisma.AudioChunkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAudioChunk>
          }
          groupBy: {
            args: Prisma.AudioChunkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AudioChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioChunkCountArgs<ExtArgs>,
            result: $Utils.Optional<AudioChunkCountAggregateOutputType> | number
          }
        }
      }
      FullRecording: {
        payload: Prisma.$FullRecordingPayload<ExtArgs>
        fields: Prisma.FullRecordingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FullRecordingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FullRecordingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          findFirst: {
            args: Prisma.FullRecordingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FullRecordingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          findMany: {
            args: Prisma.FullRecordingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>[]
          }
          create: {
            args: Prisma.FullRecordingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          createMany: {
            args: Prisma.FullRecordingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FullRecordingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>[]
          }
          delete: {
            args: Prisma.FullRecordingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          update: {
            args: Prisma.FullRecordingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          deleteMany: {
            args: Prisma.FullRecordingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FullRecordingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FullRecordingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FullRecordingPayload>
          }
          aggregate: {
            args: Prisma.FullRecordingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFullRecording>
          }
          groupBy: {
            args: Prisma.FullRecordingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FullRecordingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FullRecordingCountArgs<ExtArgs>,
            result: $Utils.Optional<FullRecordingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model AudioChunk
   */

  export type AggregateAudioChunk = {
    _count: AudioChunkCountAggregateOutputType | null
    _avg: AudioChunkAvgAggregateOutputType | null
    _sum: AudioChunkSumAggregateOutputType | null
    _min: AudioChunkMinAggregateOutputType | null
    _max: AudioChunkMaxAggregateOutputType | null
  }

  export type AudioChunkAvgAggregateOutputType = {
    id: number | null
  }

  export type AudioChunkSumAggregateOutputType = {
    id: number | null
  }

  export type AudioChunkMinAggregateOutputType = {
    id: number | null
    data: Buffer | null
    createdAt: Date | null
  }

  export type AudioChunkMaxAggregateOutputType = {
    id: number | null
    data: Buffer | null
    createdAt: Date | null
  }

  export type AudioChunkCountAggregateOutputType = {
    id: number
    data: number
    createdAt: number
    _all: number
  }


  export type AudioChunkAvgAggregateInputType = {
    id?: true
  }

  export type AudioChunkSumAggregateInputType = {
    id?: true
  }

  export type AudioChunkMinAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
  }

  export type AudioChunkMaxAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
  }

  export type AudioChunkCountAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type AudioChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioChunk to aggregate.
     */
    where?: AudioChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioChunks to fetch.
     */
    orderBy?: AudioChunkOrderByWithRelationInput | AudioChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioChunks
    **/
    _count?: true | AudioChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioChunkMaxAggregateInputType
  }

  export type GetAudioChunkAggregateType<T extends AudioChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioChunk[P]>
      : GetScalarType<T[P], AggregateAudioChunk[P]>
  }




  export type AudioChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioChunkWhereInput
    orderBy?: AudioChunkOrderByWithAggregationInput | AudioChunkOrderByWithAggregationInput[]
    by: AudioChunkScalarFieldEnum[] | AudioChunkScalarFieldEnum
    having?: AudioChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioChunkCountAggregateInputType | true
    _avg?: AudioChunkAvgAggregateInputType
    _sum?: AudioChunkSumAggregateInputType
    _min?: AudioChunkMinAggregateInputType
    _max?: AudioChunkMaxAggregateInputType
  }

  export type AudioChunkGroupByOutputType = {
    id: number
    data: Buffer
    createdAt: Date
    _count: AudioChunkCountAggregateOutputType | null
    _avg: AudioChunkAvgAggregateOutputType | null
    _sum: AudioChunkSumAggregateOutputType | null
    _min: AudioChunkMinAggregateOutputType | null
    _max: AudioChunkMaxAggregateOutputType | null
  }

  type GetAudioChunkGroupByPayload<T extends AudioChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioChunkGroupByOutputType[P]>
            : GetScalarType<T[P], AudioChunkGroupByOutputType[P]>
        }
      >
    >


  export type AudioChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["audioChunk"]>

  export type AudioChunkSelectScalar = {
    id?: boolean
    data?: boolean
    createdAt?: boolean
  }



  export type $AudioChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioChunk"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Buffer
      createdAt: Date
    }, ExtArgs["result"]["audioChunk"]>
    composites: {}
  }


  type AudioChunkGetPayload<S extends boolean | null | undefined | AudioChunkDefaultArgs> = $Result.GetResult<Prisma.$AudioChunkPayload, S>

  type AudioChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudioChunkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudioChunkCountAggregateInputType | true
    }

  export interface AudioChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioChunk'], meta: { name: 'AudioChunk' } }
    /**
     * Find zero or one AudioChunk that matches the filter.
     * @param {AudioChunkFindUniqueArgs} args - Arguments to find a AudioChunk
     * @example
     * // Get one AudioChunk
     * const audioChunk = await prisma.audioChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AudioChunkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkFindUniqueArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AudioChunk that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudioChunkFindUniqueOrThrowArgs} args - Arguments to find a AudioChunk
     * @example
     * // Get one AudioChunk
     * const audioChunk = await prisma.audioChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AudioChunkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AudioChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkFindFirstArgs} args - Arguments to find a AudioChunk
     * @example
     * // Get one AudioChunk
     * const audioChunk = await prisma.audioChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AudioChunkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkFindFirstArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AudioChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkFindFirstOrThrowArgs} args - Arguments to find a AudioChunk
     * @example
     * // Get one AudioChunk
     * const audioChunk = await prisma.audioChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AudioChunkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AudioChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioChunks
     * const audioChunks = await prisma.audioChunk.findMany()
     * 
     * // Get first 10 AudioChunks
     * const audioChunks = await prisma.audioChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioChunkWithIdOnly = await prisma.audioChunk.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AudioChunkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AudioChunk.
     * @param {AudioChunkCreateArgs} args - Arguments to create a AudioChunk.
     * @example
     * // Create one AudioChunk
     * const AudioChunk = await prisma.audioChunk.create({
     *   data: {
     *     // ... data to create a AudioChunk
     *   }
     * })
     * 
    **/
    create<T extends AudioChunkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkCreateArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AudioChunks.
     * @param {AudioChunkCreateManyArgs} args - Arguments to create many AudioChunks.
     * @example
     * // Create many AudioChunks
     * const audioChunk = await prisma.audioChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AudioChunkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioChunks and returns the data saved in the database.
     * @param {AudioChunkCreateManyAndReturnArgs} args - Arguments to create many AudioChunks.
     * @example
     * // Create many AudioChunks
     * const audioChunk = await prisma.audioChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioChunks and only return the `id`
     * const audioChunkWithIdOnly = await prisma.audioChunk.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AudioChunkCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AudioChunk.
     * @param {AudioChunkDeleteArgs} args - Arguments to delete one AudioChunk.
     * @example
     * // Delete one AudioChunk
     * const AudioChunk = await prisma.audioChunk.delete({
     *   where: {
     *     // ... filter to delete one AudioChunk
     *   }
     * })
     * 
    **/
    delete<T extends AudioChunkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkDeleteArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AudioChunk.
     * @param {AudioChunkUpdateArgs} args - Arguments to update one AudioChunk.
     * @example
     * // Update one AudioChunk
     * const audioChunk = await prisma.audioChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AudioChunkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkUpdateArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AudioChunks.
     * @param {AudioChunkDeleteManyArgs} args - Arguments to filter AudioChunks to delete.
     * @example
     * // Delete a few AudioChunks
     * const { count } = await prisma.audioChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AudioChunkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioChunkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioChunks
     * const audioChunk = await prisma.audioChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AudioChunkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioChunk.
     * @param {AudioChunkUpsertArgs} args - Arguments to update or create a AudioChunk.
     * @example
     * // Update or create a AudioChunk
     * const audioChunk = await prisma.audioChunk.upsert({
     *   create: {
     *     // ... data to create a AudioChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioChunk we want to update
     *   }
     * })
    **/
    upsert<T extends AudioChunkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AudioChunkUpsertArgs<ExtArgs>>
    ): Prisma__AudioChunkClient<$Result.GetResult<Prisma.$AudioChunkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AudioChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkCountArgs} args - Arguments to filter AudioChunks to count.
     * @example
     * // Count the number of AudioChunks
     * const count = await prisma.audioChunk.count({
     *   where: {
     *     // ... the filter for the AudioChunks we want to count
     *   }
     * })
    **/
    count<T extends AudioChunkCountArgs>(
      args?: Subset<T, AudioChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioChunkAggregateArgs>(args: Subset<T, AudioChunkAggregateArgs>): Prisma.PrismaPromise<GetAudioChunkAggregateType<T>>

    /**
     * Group by AudioChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioChunkGroupByArgs} args - Group by arguments.
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
      T extends AudioChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioChunkGroupByArgs['orderBy'] }
        : { orderBy?: AudioChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioChunk model
   */
  readonly fields: AudioChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AudioChunk model
   */ 
  interface AudioChunkFieldRefs {
    readonly id: FieldRef<"AudioChunk", 'Int'>
    readonly data: FieldRef<"AudioChunk", 'Bytes'>
    readonly createdAt: FieldRef<"AudioChunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioChunk findUnique
   */
  export type AudioChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter, which AudioChunk to fetch.
     */
    where: AudioChunkWhereUniqueInput
  }

  /**
   * AudioChunk findUniqueOrThrow
   */
  export type AudioChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter, which AudioChunk to fetch.
     */
    where: AudioChunkWhereUniqueInput
  }

  /**
   * AudioChunk findFirst
   */
  export type AudioChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter, which AudioChunk to fetch.
     */
    where?: AudioChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioChunks to fetch.
     */
    orderBy?: AudioChunkOrderByWithRelationInput | AudioChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioChunks.
     */
    cursor?: AudioChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioChunks.
     */
    distinct?: AudioChunkScalarFieldEnum | AudioChunkScalarFieldEnum[]
  }

  /**
   * AudioChunk findFirstOrThrow
   */
  export type AudioChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter, which AudioChunk to fetch.
     */
    where?: AudioChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioChunks to fetch.
     */
    orderBy?: AudioChunkOrderByWithRelationInput | AudioChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioChunks.
     */
    cursor?: AudioChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioChunks.
     */
    distinct?: AudioChunkScalarFieldEnum | AudioChunkScalarFieldEnum[]
  }

  /**
   * AudioChunk findMany
   */
  export type AudioChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter, which AudioChunks to fetch.
     */
    where?: AudioChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioChunks to fetch.
     */
    orderBy?: AudioChunkOrderByWithRelationInput | AudioChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioChunks.
     */
    cursor?: AudioChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioChunks.
     */
    skip?: number
    distinct?: AudioChunkScalarFieldEnum | AudioChunkScalarFieldEnum[]
  }

  /**
   * AudioChunk create
   */
  export type AudioChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * The data needed to create a AudioChunk.
     */
    data: XOR<AudioChunkCreateInput, AudioChunkUncheckedCreateInput>
  }

  /**
   * AudioChunk createMany
   */
  export type AudioChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioChunks.
     */
    data: AudioChunkCreateManyInput | AudioChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioChunk createManyAndReturn
   */
  export type AudioChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * The data used to create many AudioChunks.
     */
    data: AudioChunkCreateManyInput | AudioChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioChunk update
   */
  export type AudioChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * The data needed to update a AudioChunk.
     */
    data: XOR<AudioChunkUpdateInput, AudioChunkUncheckedUpdateInput>
    /**
     * Choose, which AudioChunk to update.
     */
    where: AudioChunkWhereUniqueInput
  }

  /**
   * AudioChunk updateMany
   */
  export type AudioChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioChunks.
     */
    data: XOR<AudioChunkUpdateManyMutationInput, AudioChunkUncheckedUpdateManyInput>
    /**
     * Filter which AudioChunks to update
     */
    where?: AudioChunkWhereInput
  }

  /**
   * AudioChunk upsert
   */
  export type AudioChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * The filter to search for the AudioChunk to update in case it exists.
     */
    where: AudioChunkWhereUniqueInput
    /**
     * In case the AudioChunk found by the `where` argument doesn't exist, create a new AudioChunk with this data.
     */
    create: XOR<AudioChunkCreateInput, AudioChunkUncheckedCreateInput>
    /**
     * In case the AudioChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioChunkUpdateInput, AudioChunkUncheckedUpdateInput>
  }

  /**
   * AudioChunk delete
   */
  export type AudioChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
    /**
     * Filter which AudioChunk to delete.
     */
    where: AudioChunkWhereUniqueInput
  }

  /**
   * AudioChunk deleteMany
   */
  export type AudioChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioChunks to delete
     */
    where?: AudioChunkWhereInput
  }

  /**
   * AudioChunk without action
   */
  export type AudioChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioChunk
     */
    select?: AudioChunkSelect<ExtArgs> | null
  }


  /**
   * Model FullRecording
   */

  export type AggregateFullRecording = {
    _count: FullRecordingCountAggregateOutputType | null
    _avg: FullRecordingAvgAggregateOutputType | null
    _sum: FullRecordingSumAggregateOutputType | null
    _min: FullRecordingMinAggregateOutputType | null
    _max: FullRecordingMaxAggregateOutputType | null
  }

  export type FullRecordingAvgAggregateOutputType = {
    id: number | null
  }

  export type FullRecordingSumAggregateOutputType = {
    id: number | null
  }

  export type FullRecordingMinAggregateOutputType = {
    id: number | null
    data: Buffer | null
    createdAt: Date | null
  }

  export type FullRecordingMaxAggregateOutputType = {
    id: number | null
    data: Buffer | null
    createdAt: Date | null
  }

  export type FullRecordingCountAggregateOutputType = {
    id: number
    data: number
    createdAt: number
    _all: number
  }


  export type FullRecordingAvgAggregateInputType = {
    id?: true
  }

  export type FullRecordingSumAggregateInputType = {
    id?: true
  }

  export type FullRecordingMinAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
  }

  export type FullRecordingMaxAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
  }

  export type FullRecordingCountAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type FullRecordingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FullRecording to aggregate.
     */
    where?: FullRecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullRecordings to fetch.
     */
    orderBy?: FullRecordingOrderByWithRelationInput | FullRecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FullRecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullRecordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullRecordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FullRecordings
    **/
    _count?: true | FullRecordingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FullRecordingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FullRecordingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FullRecordingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FullRecordingMaxAggregateInputType
  }

  export type GetFullRecordingAggregateType<T extends FullRecordingAggregateArgs> = {
        [P in keyof T & keyof AggregateFullRecording]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFullRecording[P]>
      : GetScalarType<T[P], AggregateFullRecording[P]>
  }




  export type FullRecordingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FullRecordingWhereInput
    orderBy?: FullRecordingOrderByWithAggregationInput | FullRecordingOrderByWithAggregationInput[]
    by: FullRecordingScalarFieldEnum[] | FullRecordingScalarFieldEnum
    having?: FullRecordingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FullRecordingCountAggregateInputType | true
    _avg?: FullRecordingAvgAggregateInputType
    _sum?: FullRecordingSumAggregateInputType
    _min?: FullRecordingMinAggregateInputType
    _max?: FullRecordingMaxAggregateInputType
  }

  export type FullRecordingGroupByOutputType = {
    id: number
    data: Buffer
    createdAt: Date
    _count: FullRecordingCountAggregateOutputType | null
    _avg: FullRecordingAvgAggregateOutputType | null
    _sum: FullRecordingSumAggregateOutputType | null
    _min: FullRecordingMinAggregateOutputType | null
    _max: FullRecordingMaxAggregateOutputType | null
  }

  type GetFullRecordingGroupByPayload<T extends FullRecordingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FullRecordingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FullRecordingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FullRecordingGroupByOutputType[P]>
            : GetScalarType<T[P], FullRecordingGroupByOutputType[P]>
        }
      >
    >


  export type FullRecordingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fullRecording"]>

  export type FullRecordingSelectScalar = {
    id?: boolean
    data?: boolean
    createdAt?: boolean
  }



  export type $FullRecordingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FullRecording"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Buffer
      createdAt: Date
    }, ExtArgs["result"]["fullRecording"]>
    composites: {}
  }


  type FullRecordingGetPayload<S extends boolean | null | undefined | FullRecordingDefaultArgs> = $Result.GetResult<Prisma.$FullRecordingPayload, S>

  type FullRecordingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FullRecordingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FullRecordingCountAggregateInputType | true
    }

  export interface FullRecordingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FullRecording'], meta: { name: 'FullRecording' } }
    /**
     * Find zero or one FullRecording that matches the filter.
     * @param {FullRecordingFindUniqueArgs} args - Arguments to find a FullRecording
     * @example
     * // Get one FullRecording
     * const fullRecording = await prisma.fullRecording.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FullRecordingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingFindUniqueArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FullRecording that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FullRecordingFindUniqueOrThrowArgs} args - Arguments to find a FullRecording
     * @example
     * // Get one FullRecording
     * const fullRecording = await prisma.fullRecording.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FullRecordingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FullRecording that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingFindFirstArgs} args - Arguments to find a FullRecording
     * @example
     * // Get one FullRecording
     * const fullRecording = await prisma.fullRecording.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FullRecordingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingFindFirstArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FullRecording that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingFindFirstOrThrowArgs} args - Arguments to find a FullRecording
     * @example
     * // Get one FullRecording
     * const fullRecording = await prisma.fullRecording.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FullRecordingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FullRecordings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FullRecordings
     * const fullRecordings = await prisma.fullRecording.findMany()
     * 
     * // Get first 10 FullRecordings
     * const fullRecordings = await prisma.fullRecording.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fullRecordingWithIdOnly = await prisma.fullRecording.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FullRecordingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FullRecording.
     * @param {FullRecordingCreateArgs} args - Arguments to create a FullRecording.
     * @example
     * // Create one FullRecording
     * const FullRecording = await prisma.fullRecording.create({
     *   data: {
     *     // ... data to create a FullRecording
     *   }
     * })
     * 
    **/
    create<T extends FullRecordingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingCreateArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FullRecordings.
     * @param {FullRecordingCreateManyArgs} args - Arguments to create many FullRecordings.
     * @example
     * // Create many FullRecordings
     * const fullRecording = await prisma.fullRecording.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FullRecordingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FullRecordings and returns the data saved in the database.
     * @param {FullRecordingCreateManyAndReturnArgs} args - Arguments to create many FullRecordings.
     * @example
     * // Create many FullRecordings
     * const fullRecording = await prisma.fullRecording.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FullRecordings and only return the `id`
     * const fullRecordingWithIdOnly = await prisma.fullRecording.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends FullRecordingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a FullRecording.
     * @param {FullRecordingDeleteArgs} args - Arguments to delete one FullRecording.
     * @example
     * // Delete one FullRecording
     * const FullRecording = await prisma.fullRecording.delete({
     *   where: {
     *     // ... filter to delete one FullRecording
     *   }
     * })
     * 
    **/
    delete<T extends FullRecordingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingDeleteArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FullRecording.
     * @param {FullRecordingUpdateArgs} args - Arguments to update one FullRecording.
     * @example
     * // Update one FullRecording
     * const fullRecording = await prisma.fullRecording.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FullRecordingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingUpdateArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FullRecordings.
     * @param {FullRecordingDeleteManyArgs} args - Arguments to filter FullRecordings to delete.
     * @example
     * // Delete a few FullRecordings
     * const { count } = await prisma.fullRecording.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FullRecordingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FullRecordingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FullRecordings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FullRecordings
     * const fullRecording = await prisma.fullRecording.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FullRecordingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FullRecording.
     * @param {FullRecordingUpsertArgs} args - Arguments to update or create a FullRecording.
     * @example
     * // Update or create a FullRecording
     * const fullRecording = await prisma.fullRecording.upsert({
     *   create: {
     *     // ... data to create a FullRecording
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FullRecording we want to update
     *   }
     * })
    **/
    upsert<T extends FullRecordingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FullRecordingUpsertArgs<ExtArgs>>
    ): Prisma__FullRecordingClient<$Result.GetResult<Prisma.$FullRecordingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FullRecordings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingCountArgs} args - Arguments to filter FullRecordings to count.
     * @example
     * // Count the number of FullRecordings
     * const count = await prisma.fullRecording.count({
     *   where: {
     *     // ... the filter for the FullRecordings we want to count
     *   }
     * })
    **/
    count<T extends FullRecordingCountArgs>(
      args?: Subset<T, FullRecordingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FullRecordingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FullRecording.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FullRecordingAggregateArgs>(args: Subset<T, FullRecordingAggregateArgs>): Prisma.PrismaPromise<GetFullRecordingAggregateType<T>>

    /**
     * Group by FullRecording.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullRecordingGroupByArgs} args - Group by arguments.
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
      T extends FullRecordingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FullRecordingGroupByArgs['orderBy'] }
        : { orderBy?: FullRecordingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FullRecordingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFullRecordingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FullRecording model
   */
  readonly fields: FullRecordingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FullRecording.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FullRecordingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FullRecording model
   */ 
  interface FullRecordingFieldRefs {
    readonly id: FieldRef<"FullRecording", 'Int'>
    readonly data: FieldRef<"FullRecording", 'Bytes'>
    readonly createdAt: FieldRef<"FullRecording", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FullRecording findUnique
   */
  export type FullRecordingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter, which FullRecording to fetch.
     */
    where: FullRecordingWhereUniqueInput
  }

  /**
   * FullRecording findUniqueOrThrow
   */
  export type FullRecordingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter, which FullRecording to fetch.
     */
    where: FullRecordingWhereUniqueInput
  }

  /**
   * FullRecording findFirst
   */
  export type FullRecordingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter, which FullRecording to fetch.
     */
    where?: FullRecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullRecordings to fetch.
     */
    orderBy?: FullRecordingOrderByWithRelationInput | FullRecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FullRecordings.
     */
    cursor?: FullRecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullRecordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullRecordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FullRecordings.
     */
    distinct?: FullRecordingScalarFieldEnum | FullRecordingScalarFieldEnum[]
  }

  /**
   * FullRecording findFirstOrThrow
   */
  export type FullRecordingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter, which FullRecording to fetch.
     */
    where?: FullRecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullRecordings to fetch.
     */
    orderBy?: FullRecordingOrderByWithRelationInput | FullRecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FullRecordings.
     */
    cursor?: FullRecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullRecordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullRecordings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FullRecordings.
     */
    distinct?: FullRecordingScalarFieldEnum | FullRecordingScalarFieldEnum[]
  }

  /**
   * FullRecording findMany
   */
  export type FullRecordingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter, which FullRecordings to fetch.
     */
    where?: FullRecordingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullRecordings to fetch.
     */
    orderBy?: FullRecordingOrderByWithRelationInput | FullRecordingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FullRecordings.
     */
    cursor?: FullRecordingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullRecordings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullRecordings.
     */
    skip?: number
    distinct?: FullRecordingScalarFieldEnum | FullRecordingScalarFieldEnum[]
  }

  /**
   * FullRecording create
   */
  export type FullRecordingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * The data needed to create a FullRecording.
     */
    data: XOR<FullRecordingCreateInput, FullRecordingUncheckedCreateInput>
  }

  /**
   * FullRecording createMany
   */
  export type FullRecordingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FullRecordings.
     */
    data: FullRecordingCreateManyInput | FullRecordingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FullRecording createManyAndReturn
   */
  export type FullRecordingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * The data used to create many FullRecordings.
     */
    data: FullRecordingCreateManyInput | FullRecordingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FullRecording update
   */
  export type FullRecordingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * The data needed to update a FullRecording.
     */
    data: XOR<FullRecordingUpdateInput, FullRecordingUncheckedUpdateInput>
    /**
     * Choose, which FullRecording to update.
     */
    where: FullRecordingWhereUniqueInput
  }

  /**
   * FullRecording updateMany
   */
  export type FullRecordingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FullRecordings.
     */
    data: XOR<FullRecordingUpdateManyMutationInput, FullRecordingUncheckedUpdateManyInput>
    /**
     * Filter which FullRecordings to update
     */
    where?: FullRecordingWhereInput
  }

  /**
   * FullRecording upsert
   */
  export type FullRecordingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * The filter to search for the FullRecording to update in case it exists.
     */
    where: FullRecordingWhereUniqueInput
    /**
     * In case the FullRecording found by the `where` argument doesn't exist, create a new FullRecording with this data.
     */
    create: XOR<FullRecordingCreateInput, FullRecordingUncheckedCreateInput>
    /**
     * In case the FullRecording was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FullRecordingUpdateInput, FullRecordingUncheckedUpdateInput>
  }

  /**
   * FullRecording delete
   */
  export type FullRecordingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
    /**
     * Filter which FullRecording to delete.
     */
    where: FullRecordingWhereUniqueInput
  }

  /**
   * FullRecording deleteMany
   */
  export type FullRecordingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FullRecordings to delete
     */
    where?: FullRecordingWhereInput
  }

  /**
   * FullRecording without action
   */
  export type FullRecordingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullRecording
     */
    select?: FullRecordingSelect<ExtArgs> | null
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


  export const AudioChunkScalarFieldEnum: {
    id: 'id',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type AudioChunkScalarFieldEnum = (typeof AudioChunkScalarFieldEnum)[keyof typeof AudioChunkScalarFieldEnum]


  export const FullRecordingScalarFieldEnum: {
    id: 'id',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type FullRecordingScalarFieldEnum = (typeof FullRecordingScalarFieldEnum)[keyof typeof FullRecordingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AudioChunkWhereInput = {
    AND?: AudioChunkWhereInput | AudioChunkWhereInput[]
    OR?: AudioChunkWhereInput[]
    NOT?: AudioChunkWhereInput | AudioChunkWhereInput[]
    id?: IntFilter<"AudioChunk"> | number
    data?: BytesFilter<"AudioChunk"> | Buffer
    createdAt?: DateTimeFilter<"AudioChunk"> | Date | string
  }

  export type AudioChunkOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AudioChunkWhereInput | AudioChunkWhereInput[]
    OR?: AudioChunkWhereInput[]
    NOT?: AudioChunkWhereInput | AudioChunkWhereInput[]
    data?: BytesFilter<"AudioChunk"> | Buffer
    createdAt?: DateTimeFilter<"AudioChunk"> | Date | string
  }, "id">

  export type AudioChunkOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: AudioChunkCountOrderByAggregateInput
    _avg?: AudioChunkAvgOrderByAggregateInput
    _max?: AudioChunkMaxOrderByAggregateInput
    _min?: AudioChunkMinOrderByAggregateInput
    _sum?: AudioChunkSumOrderByAggregateInput
  }

  export type AudioChunkScalarWhereWithAggregatesInput = {
    AND?: AudioChunkScalarWhereWithAggregatesInput | AudioChunkScalarWhereWithAggregatesInput[]
    OR?: AudioChunkScalarWhereWithAggregatesInput[]
    NOT?: AudioChunkScalarWhereWithAggregatesInput | AudioChunkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AudioChunk"> | number
    data?: BytesWithAggregatesFilter<"AudioChunk"> | Buffer
    createdAt?: DateTimeWithAggregatesFilter<"AudioChunk"> | Date | string
  }

  export type FullRecordingWhereInput = {
    AND?: FullRecordingWhereInput | FullRecordingWhereInput[]
    OR?: FullRecordingWhereInput[]
    NOT?: FullRecordingWhereInput | FullRecordingWhereInput[]
    id?: IntFilter<"FullRecording"> | number
    data?: BytesFilter<"FullRecording"> | Buffer
    createdAt?: DateTimeFilter<"FullRecording"> | Date | string
  }

  export type FullRecordingOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type FullRecordingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FullRecordingWhereInput | FullRecordingWhereInput[]
    OR?: FullRecordingWhereInput[]
    NOT?: FullRecordingWhereInput | FullRecordingWhereInput[]
    data?: BytesFilter<"FullRecording"> | Buffer
    createdAt?: DateTimeFilter<"FullRecording"> | Date | string
  }, "id">

  export type FullRecordingOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: FullRecordingCountOrderByAggregateInput
    _avg?: FullRecordingAvgOrderByAggregateInput
    _max?: FullRecordingMaxOrderByAggregateInput
    _min?: FullRecordingMinOrderByAggregateInput
    _sum?: FullRecordingSumOrderByAggregateInput
  }

  export type FullRecordingScalarWhereWithAggregatesInput = {
    AND?: FullRecordingScalarWhereWithAggregatesInput | FullRecordingScalarWhereWithAggregatesInput[]
    OR?: FullRecordingScalarWhereWithAggregatesInput[]
    NOT?: FullRecordingScalarWhereWithAggregatesInput | FullRecordingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FullRecording"> | number
    data?: BytesWithAggregatesFilter<"FullRecording"> | Buffer
    createdAt?: DateTimeWithAggregatesFilter<"FullRecording"> | Date | string
  }

  export type AudioChunkCreateInput = {
    data: Buffer
    createdAt?: Date | string
  }

  export type AudioChunkUncheckedCreateInput = {
    id?: number
    data: Buffer
    createdAt?: Date | string
  }

  export type AudioChunkUpdateInput = {
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioChunkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioChunkCreateManyInput = {
    id?: number
    data: Buffer
    createdAt?: Date | string
  }

  export type AudioChunkUpdateManyMutationInput = {
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioChunkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullRecordingCreateInput = {
    data: Buffer
    createdAt?: Date | string
  }

  export type FullRecordingUncheckedCreateInput = {
    id?: number
    data: Buffer
    createdAt?: Date | string
  }

  export type FullRecordingUpdateInput = {
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullRecordingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullRecordingCreateManyInput = {
    id?: number
    data: Buffer
    createdAt?: Date | string
  }

  export type FullRecordingUpdateManyMutationInput = {
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullRecordingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
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

  export type AudioChunkCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioChunkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AudioChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioChunkMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioChunkSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type FullRecordingCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type FullRecordingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FullRecordingMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type FullRecordingMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type FullRecordingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AudioChunkDefaultArgs instead
     */
    export type AudioChunkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioChunkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FullRecordingDefaultArgs instead
     */
    export type FullRecordingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FullRecordingDefaultArgs<ExtArgs>

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