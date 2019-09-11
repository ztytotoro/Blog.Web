import { Dispatch, useState } from 'react';

export type Dictionary = { [key: string]: unknown };

export type ComposedState<T extends Dictionary> = {
  [P in keyof T]: {
    value: T[P];
    update: Dispatch<T[P]>;
  };
};

export type DeComposedState<T extends ComposedState<Dictionary>> = {
  [P in keyof T]: T[P]['value'];
};

export function composedState<T extends Dictionary>(any: T) {
  const result = {} as ComposedState<T>;
  Object.keys(any).forEach((key: keyof T) => {
    const [value, update] = useState(any[key]);
    result[key] = {
      value,
      update
    };
  });
  return result;
}

export function deComposedState<T extends ComposedState<Dictionary>>(any: T) {
  const result = {} as DeComposedState<T>;
  Object.keys(any).forEach((key: keyof T) => {
    result[key] = any[key].value;
  });
  return result;
}
