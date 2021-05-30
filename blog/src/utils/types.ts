export type Dictionary = { [key: string]: unknown }

export type DictionaryLike<T> = { [P in keyof T]: unknown }
