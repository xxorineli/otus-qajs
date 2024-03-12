import {kolobok} from '../src/modules.js'

describe('kolobok', () => {
  it('can see stranger', () => {
    expect(kolobok('Дед Мороз')).toBe('Неизвестный персонаж')
  })
})
