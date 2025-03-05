import { type ReactNode } from 'react';
import { convert } from '@/utils/convert';

interface Props<T, V> {
  value: T;
  formatter: (value: NonNullable<T>) => V;
  defaultValue?: ReactNode;
}
function Convert<T, V extends ReactNode>({ value, formatter, defaultValue }: Props<T, V>): ReactNode {
  return convert(value, formatter) ?? defaultValue;
}

export default Convert;
