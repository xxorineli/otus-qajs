import { farewell, greet } from '../src/modules.js'

describe('greet', () => {
  // For TDD approach
  // it('is function', () => {
  //   expect(typeof greet).toBe('function')
  // })
  
  it('should greet Eli', () => {
    // Using Arrange-Act-Assert pattern
    const username = 'Eli' // arrange
    const result = greet(username) // act
    expect(result).toBe('Hello, Eli') // assert
  })

  it('should work correct with empty string', () => {
    expect(greet('')).toBe('Hello, ')
  })
})


describe('farewell', () => {
  it('should farewell Eli', () => {
    expect(farewell('Eli')).toBe('Goodbye, Eli')
  })

  it('should work correct with empty string', () => {
    expect(farewell('')).toBe('Goodbye, ')
  })
})


describe('kolobok', () => {
  it('can see strange', () => {
    expect(farewell('Дед Мороз')).toBe('Я встретил кого-то неизвестного')
  })
})
