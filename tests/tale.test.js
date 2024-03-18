import { kolobok, newYear } from '../src/modules.js'

describe('kolobok function', () => {
  it('should return the correct response for Дедушка', () => {
    const result = kolobok('Дедушка')
    expect(result).toBe('Я от дедушки ушел')
  })

  it('should return the correct response for Заяц', () => {
    const result = kolobok('Заяц')
    expect(result).toBe('Я от зайца ушел')
  })

  it('should return the correct response for Лиса', () => {
    const result = kolobok('Лиса')
    expect(result).toBe('Меня съели')
  })
  // Ловим ошибки с Jest'ом
  it('should throw error for unknown character', () => {
    expect(() => {
      kolobok('Неизвестный')
    }).toThrow('Я встретил кого-то неизвестного')
  })
  // Ловим ошибки без Jest'а (условия в тестах считаеются плохой практикой)
  // для функции где есть throw new Error('...')
  try { kolobok('Неизвестный')
  // проверяем ошибку на соответствие спецификации
  // error.message = текст из throw new Error
  } catch (error) { expect(error.message).toBe('Я встретил кого-то неизвестного')
  // и вызываем (например, убрать прелоадер на морде)
  } finally { console.log('Будет выполнено всегда') }
})

describe('newYear function', () => {
  it('should return the correct response for Дед Мороз', () => {
    const result = newYear('Дед Мороз')
    expect(result).toBe('Дед Мороз! Дед Мороз! Дед Мороз!')
  })

  it('should return the correct response for Снегурочка', () => {
    const result = newYear('Снегурочка')
    expect(result).toBe('Снегурочка! Снегурочка! Снегурочка!')
  })

  it('should return a default response for unknown character', () => {
    expect(() => {
      newYear('Неизвестный')
    }).toThrow('Неизвестный персонаж')
  })
})

// Parametrized test (function)