import { getType } from '../_internal/getType';
import getObjectKeys from '../getObjectKeys';
import { isMap, isSet, isPrimitiveType, isTypedArray, isRegExp } from '../is';

/**
 * Performs a deep comparison between the first and second arguments to determine if they are equal.
 *
 * If `isEqual` returns `true`, the type of the first argument is considered to be the same as the type of the second argument.
 *
 * @example
 * ```ts
 * type Foo = { a: number; b?: string };
 * const obj1 = { a: 1 };
 * const obj2: Foo = { a: 1 };
 *
 * if (isEqual(obj1, obj2)) {
 *   // obj1 is inferred as type Foo.
 * }
 * ```
 */
export function isEqual<T>(a: any, b: T): a is T {
  if (getType(a) !== getType(b)) {
    return false;
  }

  if (isPrimitiveType(a) && isPrimitiveType(b)) {
    return Object.is(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = a.length; i--; i !== 0) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (isTypedArray(a) && isTypedArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = a.length; i--; i !== 0) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  if (isMap(a) && isMap(b)) {
    if (a.size !== b.size) {
      return false;
    }

    for (const i of a.entries()) {
      if (b.has(i[0]) === false) {
        return false;
      }
    }

    for (const i of a.entries()) {
      if (!isEqual(i[1], b.get(i[0]))) {
        return false;
      }
    }

    return true;
  }

  if (isSet(a) && isSet(b)) {
    if (a.size !== b.size) {
      return false;
    }

    for (const i of a.entries()) {
      if (b.has(i[0]) === false) {
        return false;
      }
    }

    return true;
  }

  if (isRegExp(a) && isRegExp(b)) {
    return a.source === b.source && a.flags === b.flags;
  }

  const objectPrototype = Object.prototype;
  if (a.valueOf !== objectPrototype.valueOf) {
    return a.valueOf() === (b as any).valueOf();
  }
  if (a.toString !== objectPrototype.toString) {
    return a.toString() === (b as any).toString();
  }

  const keys = getObjectKeys(a);
  const keysLength = keys.length;
  if (keysLength !== getObjectKeys(b as object).length) {
    return false;
  }

  for (let i = keysLength; i--; i !== 0) {
    if (!objectPrototype.hasOwnProperty.call(b, keys[i])) {
      return false;
    }
  }

  for (let i = keysLength; i--; i !== 0) {
    const key = keys[i];
    if (!isEqual(a[key], (b as any)[key])) {
      return false;
    }
  }

  return true;
}
