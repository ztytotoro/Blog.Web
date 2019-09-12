import { DictionaryLike } from './types'

type Mapper<T> = (value: T[keyof T], key: keyof T) => unknown

export function mapObject<T>(item: T, mapper: Mapper<T>) {
    const result = {}
    Object.keys(item).forEach(k => {
        result[k] = mapper(item[k], k as keyof T)
    })
    return result as DictionaryLike<T>
}
