const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },

  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// *зробити функцію універсальною, щоб вона повертала
// масив значень будь-якої заданої властивості

// function getUserNames(users) {
//   return users.map((user) => user.name);
// }

// console.log(getUserNames(users));

// function getUserRandomProps(users, prop) {
//   for (const user of users) {
//     if (user[prop] === undefined) {
//       return "Prop not found";
//     }
//   }
//   return users.map((user) => user[prop]);
// }

// console.log(getUserRandomProps(users, "gend"));

// Отримати масив імен користувачів по статі (властивість gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// function getUsersWithGender(users, gender) {
// 1)
// return users.filter((user) => user.gender === gender).map((user) => user.name)
// 2)
// return users.reduce((names, user) => {
//   if (user.gender === gender) {
//     names.push(user.name)
//   }
//   return names
// }, [])
// 3)

//   return users.reduce((names, user) => user.gender === gender ? [...names, user.name] : names, [])

// }

// console.log(getUsersWithGender(users, 'male'));

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(users) {
//   return users
//     .flatMap((user) => user.skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// console.log(getSortedUniqueSkills(users));

//Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function statTweets(tweets) {
//   const stats = {};
//   tweets
//     .flatMap((tweet) => tweet.tags)
//     .forEach((tag) => {
//       console.log(tag, stats[tag]);
//       stats[tag] ? (stats[tag] += 1) : (stats[tag] = 1);
//       console.log(stats);
//     });

//   return stats;

// 2)
// return tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce(
//     (stats, tag) => ({ ...stats, [tag]: stats[tag] ? stats[tag] + 1 : 1 }),
//     {}
//   );
// }
// console.log(statTweets(tweets));

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGHT: "hight",
    MIDDLE: "middle",
    LOW: "low",
  };
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }

  removeNote(noteText) {
    this.items = this.items.filter((note) => note.text !== noteText);
  }

  updatePriority(noteText, newPriority) {
    const note = this.items.find((note) => note.text === noteText);
    if (note) {
      note.priority = newPriority;
    }
  }
}

const note = new Notes();
note.addNote({ text: "Note1", priority: Notes.Priority.LOW });
note.addNote({ text: "Note2", priority: Notes.Priority.LOW });
note.addNote({ text: "Note3", priority: Notes.Priority.HIGHT });
note.updatePriority({ text: "Note2", newPriority: Notes.Priority.MIDDLE });
note.updatePriority({ text: "Note3", newPriority: Notes.Priority.MIDDLE });
note.removeNote("Note1");

console.log(note);

const note2 = new Notes();
console.log(note2);
