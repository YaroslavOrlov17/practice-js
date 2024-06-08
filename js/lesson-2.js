// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// const index = styles.indexOf('Блюз');

// styles[index] = 'Класика';

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles)

// // Напиши функцію, яка перебирає масив логінів і перевіряє
// // чи є ім'я введене в інпут у цьому масиві і у разі,
// // якщо є - виводить повідомлення "Доступ дозволено"
// // в іншому випадку - "Користувач не знайден"
// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogins(array) {
//     const login = prompt("Введіть логін, будь ласка!");
//     // Варіант 1

//     // for (const element of array) {
//     //     if (element === login) {
//     //         return 'Доступ дозволено';
//     //     }
//     // }
//     // return 'Користувач не знайден';

//     // Варіант 2

//     // if (array.includes(login)) {
//     //     return 'Доступ дозволено';
//     // }
//     // return 'Користувач не знайден';

//     // Варіант 3

//     return array.includes(login) ? 'Доступ дозволено' : 'Користувач не знайден';

// }

// console.log(checkLogins(logins));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumNumber(array) {
  const sum = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    sum.push(array[i] + array[i + 1]);
  }
  return sum;
}
console.log(sumNumber(someArr));
