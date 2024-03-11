function kolobok(character) {
  switch (character) {
    case 'Дедушка':
      return 'Я от дедушки ушел';
    case 'Заяц':
      return 'Я от зайца ушел';
    case 'Лиса':
      return 'Меня съели';
    default:
      return 'Неизвестный персонаж';
  }
}

console.log(kolobok('Дедушка'));
console.log(kolobok('Заяц'));
console.log(kolobok('Лиса'));


function newYear(name) {
  switch (name) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${name}! ${name}! ${name}!`;
    default:
      return 'Неизвестный персонаж';
  }
}

console.log(newYear("Дед Мороз"));
console.log(newYear("Снегурочка"));
