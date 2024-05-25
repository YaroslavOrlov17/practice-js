//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?")

// console.log(answer);

// alert(answer === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!");

// if (answer === "ECMAScript") {
//     alert("Вірно!")
// }
// else {
//     alert("Не знаєте? ECMAScript!"
//     )
// }

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const number = prompt("Enter number");
// let hours = parseInt(number / 60);
// let minutes = number % 60;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");

// console.log(`${hours}:${minutes}`);

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 100;
// const min = 50;
// let sum = 0;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

function count(max, min) {
  let sum = 0;
  for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(count(99, 50));
