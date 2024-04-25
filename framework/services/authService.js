import { config } from '../config'

// Определяет функцию для авторизации пользователя
const authorized = async ({ userName, password }) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  return {
    headers: response.headers,
    status: response.status,
    body: await response.json(),
  }
}

export default {
  authorized,
}
