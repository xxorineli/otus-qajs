import config from '../framework/config/config'
import authService from '../framework/services/authService'

// Определяет набор тестов
describe('bookstore.demoqa API tests with Jest - authorized', () => {
  // Тест кейс на успешную аторизацию: корректные учетные данные
  test('should pass to authorize a user with correct credentials', async () => {
    // Определяет пользователя с верными учетными данными
    const response = await authService.authorized({
      userName: config.userName,
      password: config.password,
    })
    // Определяет заголовки ответа на наличие конкретных данных
    // Зависит от актуальности API и формата headers
    expect(response.headers.get('x-powered-by')).toBe('Express')
    // Ожидает ответа со статус кодом 200 (OK) или иным кодом,
    // обозначающим, что учетные данные верны
    expect(response.status).toBe(200)
    // Определяет тело ответа на наличие конкретного message
    // Зависит от актуальности API и формата message
    expect(response.body).toBe(true)
  })
  // Тест кейс на неуспешную аторизацию: отсутствуют учетные данные
  test('should fail to authorize a user without credentials', async () => {
    // Определяет пользователя без учетных данных
    const response = await authService.authorized({
      userName: config.userNameEmpty,
      password: config.passwordEmpty,
    })
    // Определяет заголовки ответа на наличие конкретных данных
    // Зависит от актуальности API и формата headers
    expect(response.headers.get('content-type')).toBe(
      'application/json; charset=utf-8',
    )
    // Ожидает ответа со статус кодом 400 (Bad Request),
    // обозначающим, что учетные данные неверны
    expect(response.status).toBe(400)
    // Определяет тело ответа на наличие конкретного message
    // Зависит от актуальности API и формата message
    expect(response.body.code).toBe('1200')
    expect(response.body.message).toBe('UserName and Password required.')
  })
  // Тест кейс на неуспешную аторизацию: некорректные учетные данные
  test('should fail to authorize a user with incorrect credentials', async () => {
    // Определяет пользователя с неверными учетными данными
    const response = await authService.authorized({
      userName: config.userNameIncorrect,
      password: config.passwordIncorrect,
    })
    // Определяет заголовки ответа на наличие конкретных данных
    // Зависит от актуальности API и формата headers
    expect(response.headers.get('content-type')).toBe(
      'application/json; charset=utf-8',
    )
    // Ожидает ответа со статус кодом 404 (Not Found),
    // обозначающим, что учетные данные не найдены
    expect(response.status).toBe(404)
    // Определяет тело ответа на наличие конкретного message
    // Зависит от актуальности API и формата message
    expect(response.body.code).toBe('1207')
    expect(response.body.message).toBe('User not found!')
  })
})
