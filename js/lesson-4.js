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


const btn = document.querySelector("#swapButton")

const leftSwapInput = document.querySelector("#leftSwapInput")
const rightSwapInput = document.querySelector("#rightSwapInput")


function handleClick(event) {
  const leftInputValue = leftSwapInput.value
  const rightSwapInputValue = rightSwapInput.value

  leftSwapInput.value = rightSwapInputValue
  rightSwapInput.value = leftInputValue



}

btn.addEventListener("click", handleClick)

