import { mapObject } from '..'

test('mapObject', () => {
    const test = {
        a: 1,
        b: 2,
        c: 3,
    }
    expect(mapObject(test, (value, key) => value.toString())).toEqual({
        a: '1',
        b: '2',
        c: '3',
    })
})
