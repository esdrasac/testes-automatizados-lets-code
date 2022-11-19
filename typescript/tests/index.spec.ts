import soma from '../src/index'

test('it should work', () => {
    const response = soma(2, 2)

    expect(response).toBe(4)
})