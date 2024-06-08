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
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNumber(array) {
//   const sum = [];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     sum.push(array[i] + array[i + 1]);
//   }
//   return sum;
// }
// console.log(sumNumber(someArr));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//   let calc = 0;
//   let counter = 0;
//   for (const element of arguments) {
//     if (typeof element === "number") {
//       calc += element;
//       counter += 1;
//     }
//   }
//   return calc / counter || 0;
// }

// console.log(caclculateAverage("String", true));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy"
// user.hobby = "skydiving"
// user.premium = false

// const keys = Object.keys(user)

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта
// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
// ];


// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity
//     }
//   }
//   return sum
// }

// console.log(calcTotalPrice(fruits, "Апельси"));


//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)


// const calculator = {
//     read(a, b) {
//         this.valueA = a;
//         this.valueB = b; 
//     },
//     sum() {
//         if (this.valueA && this.valueB) {
//             return this.valueA + this.valueB;
//         }
//         return 'Value not found!';
//     },
//     mult() {
//         if (this.valueA && this.valueB) {
//             return this.valueA * this.valueB;
//         }
//         return 'Value not found!';
//     }
// }

// // calculator.read(12, 34)
// console.log(calculator.sum());
// console.log(calculator.mult());



// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;
const phonebook = {
  contacts: [],
    add(data) {
        const newContact = {
            name: data.name,
            email: data.email,
            category: data.category ?? 'default',
            id: this.generateId(),
            createdAt: this.getDate(),
        }
        this.contacts.push(newContact);
  },
    list() {
        console.table(contacts);
  },
  filtered(category) {},
  delete(name) {},
    updateName(oldName, newName) {
        for (const contact of this.contacts) {
            if (contact.name === oldName) {
                contact.name = newName;
          }
      }
  },
  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  category: "friends",
});
phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});
phonebook.add({
  name: "Katy",
  email: "katy@hotmail.com",
  category: "friends",
});
phonebook.updateName("Poly", "Sara");

console.log(phonebook);

// Home Work
// // Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// // undefined, null, false, '', 0, NaN
// // const array = [
// //   1,
// //   0,
// //   54,
// //   "doc",
// //   null,
// //   "jpg",
// //   undefined,
// //   "",
// //   "png",
// //   "exe",
// //   false,
// //   "mp4",
// //   NaN,
// //   "hbs",
// // ];
// // Напишіть функцію, яка перевіряє, чи є
// // рядок (без урахування регістра) паліндромом.
// // Паліндром — це слово, число, фраза або інша
// // послідовність символів, яка читається як
// // в обратному, так і в прямому напрямку, наприклад,
// // madam або racecar
// // console.log(isPalindrome("Abba"), true);
// // console.log(isPalindrome("hello"), false));
// //2. У нас є об'єкт, в якому зберігаються зарплати
// //нашої команди
// //Напишіть код для додавання усіх зарплат та
// //збережіть його результат в змінній sum.
// //Якщо об'єкт salaries пустий, то результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };






