/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", () => {
//   console.log(input.value);
// });

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btn = document.querySelector("#swapButton")

// const leftSwapInput = document.querySelector("#leftSwapInput")
// const rightSwapInput = document.querySelector("#rightSwapInput")

// function handleClick(event) {
//   const leftInputValue = leftSwapInput.value
//   const rightSwapInputValue = rightSwapInput.value

//   leftSwapInput.value = rightSwapInputValue
//   rightSwapInput.value = leftInputValue

// }

// btn.addEventListener("click", handleClick)

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// btn.addEventListener("click", () => {
//   if (input.type === "text") {
//     input.setAttribute("type", "password");
//     btn.textContent = "Розкрити";
//   } else {
//     input.setAttribute("type", "text");
//     btn.textContent = "Приховати";
//   }
//   // console.log(input.type);
// });

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
/*



Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const box = document.querySelector("#box")

// const decreaseBtn = document.querySelector("#decrease")
// const increaseBtn = document.querySelector("#increase")

// function handleClickdecrease(event) {
//   boxWidth -= 10
//   boxHeight -= 10
//   box.style.width = `${boxWidth}px`
//   box.style.height = `${boxHeight}px`
// }

// function handleClickincrease(event) {
//   boxWidth += 10
//   boxHeight += 10
//   box.style.width = `${boxWidth}px`
//   box.style.height = `${boxHeight}px`
// }

// decreaseBtn.addEventListener("click", handleClickdecrease)

// increaseBtn.addEventListener("click", handleClickincrease)

// let boxWidth = parseInt(getComputedStyle(box).width)
// let boxHeight = parseInt(getComputedStyle(box).height)

// Завдання 5
// При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

// const circle = document.querySelector(".outerCircle");

// function onMouseMove(event) {
//   let left = event.pageX;
//   let top = event.pageY;

//   circle.style.left = `${left - 15}px`;
//   circle.style.top = `${top - 15}px`;
// }

// circle.addEventListener("click", () => {
//   if (circle.style.position === "absolute") {
//     circle.style.position = "static";
//     window.removeEventListener("mousemove", onMouseMove);
//     return;
//   }
//   circle.style.position = "absolute";
//   window.addEventListener("mousemove", onMouseMove);
// });


/*
Задача 6
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/


const grid = document.querySelector(".grid")


grid.addEventListener("mouseover", (event) => {
  const mouseOn = event.target
  if (!mouseOn.classList.contains("gridItem")) {
    return
  }

  mouseOn.style.opacity = "0"

})

grid.addEventListener("mouseout", (event) => {
  const mouseOn = event.target
  if (!mouseOn.classList.contains("gridItem")) {
    return
  }
  mouseOn.style.opacity = "1"

})




