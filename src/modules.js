export function greet(name) {
  return `Hello, ${name}`
}

export const farewell = name => {
  return `Goodbye, ${name}` 
}

export function kolobok(character) {
  switch (character) {
    case 'Дедушка':
      return 'Я от дедушки ушел';
    case 'Заяц':
      return 'Я от зайца ушел';
    case 'Лиса':
      return 'Меня съели';
    default:
      return 'Неизвестный персонаж';
      // throw new Error ('Неизвестный персонаж');
  }
}
