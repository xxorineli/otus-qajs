// Определяет функцию для создания пользователя
async function createUser(userName, password) {
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  return response
}

// Определяет набор тестов
describe('bookstore.demoqa API tests with Jest', () => {
  // Тест кейс на создание пользователя с ошибкой: логин уже используется
  test('should fail to create a user with a username that already exists', async () => {
    // Определяет пользовательские данные с уже используемым логином
    // Заменить актуальным логином, который уже используется
    // Заменить желаемым паролем
    const response = await createUser('existing_user', 'Password123!')
    // Ожидает ответа со статус кодом 406 (Not Acceptable) или иным кодом ошибки,
    // обозначающим, что логин уже используется
    expect(response.status).toBe(406)
    // Определяет полученные в ответе на POST /Account/v1/User данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.code).toBe('1204')
    expect(body.message).toBe('User exists!')
  })
})
