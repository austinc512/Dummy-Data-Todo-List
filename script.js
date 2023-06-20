// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

const orderedList = document.getElementById("todo-list");
let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  orderedList.innerHTML = "";
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const item = document.createElement("li");
    const textNode = `userId: ${arrayOfTodos[i].userId} <br> 
      title: ${arrayOfTodos[i].title}`;
    item.innerHTML = textNode;
    // console.log(item);
    orderedList.appendChild(item);
  }
};

// console.log(checkSum(50, 12)); // => true
// checkSum(10, 11); // => false
// checkSum(26, 24); // => true
// checkSum(49, 2); // => false

// function checkSum(a, b) {
//   if (a + b > 50) {
//     return true;
//   } else return false;
// }

/*

Prompt 1: withinLimits - Given two numbers, say x and y, write a program that determines if the numbers are between the ranges of 0-20 or 80-100, which includes the edges of the limit: 0, 20, 80, and 100.

    withinLimits(10, 99) // => true
    withinLimits(21, 81) // => false


return false when at least one of the numbers is greater than 20 and less than 80

*/

// function withinLimits(a, b) {
//   if (
//     (a > 20 && a < 80) ||
//     (b > 20 && b < 80) ||
//     a > 100 ||
//     b > 100 ||
//     a < 0 ||
//     b < 0
//   ) {
//     return false;
//   } else return true;
// }

// console.log(withinLimits(10, 99)); // => true
// console.log(withinLimits(21, 81)); // => false

// NOT !weekday || vacation
// console.log(`hello world`);

// const fetchTodos = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => (arrayOfTodos = json));
// };

// console.log(`new branch stuff:`);
// fetchTodos()
//   .then((response) => (asyncVariable = response))
//   .then(console.log(response));
// console.log(arrayOfTodos);
// let asyncVariable;

// const fetchTodos2 = () => {
//   // do something
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => (asyncVariable = json))
//     .then(console.log(asyncVariable));
// };

// console.log(arrayOfTodos.filter((arr) => arr.userId > 5));

// function fetchTodos2() {
//   const value = Number(testNumber.value);
//   console.log(value, typeof value);
//   // let currentArray = arrayOfTodos; <-- I added this line, which isn't needed in the original code.
//   console.log(arrayOfTodos.filter((arr) => arr.userId > value));
//   arrayOfTodos = arrayOfTodos.filter((arr) => arr.userId > value);
//   orderedList.innerHTML = "";
//   populateTodos();
// }

const testNumber = document.getElementById("testNumber");
const submitButton = document.getElementById("submit-button");
let currentArray;

function fetchTodos2() {
  const value = Number(testNumber.value);
  // console.log(value, typeof value);
  // console.log(arrayOfTodos.filter((arr) => arr.userId > value));
  currentArray = arrayOfTodos.filter((arr) => arr.userId === value);
  orderedList.innerHTML = "";
  // populateTodos(); need to modify using currentArray
  for (let i = 0; i < currentArray.length; i++) {
    const item = document.createElement("li");
    const textNode = `userId: ${currentArray[i].userId} <br>   
      title: ${currentArray[i].title}`;
    item.innerHTML = textNode;
    orderedList.appendChild(item);
  }
}
submitButton.addEventListener("click", fetchTodos2);

// clear button
const clearbtn = document.getElementById("clear");
function clear() {
  orderedList.innerHTML = "";
}
clearbtn.addEventListener("click", clear);

// completed filter
const completedBtn = document.getElementById("completed");
function filterComplete() {
  // if currentArray is undefined, filter arrayOfTodos
  // else use currentArray
  if (!currentArray || currentArray.length < 1) {
    currentArray = arrayOfTodos.filter(
      (arr) => Boolean(arr.completed) === true
    );
    orderedList.innerHTML = "";
    // populateTodos(); need to modify using currentArray
    for (let i = 0; i < currentArray.length; i++) {
      const item = document.createElement("li");
      const textNode = `userId: ${currentArray[i].userId} <br>   
        title: ${currentArray[i].title}`;
      item.innerHTML = textNode;
      orderedList.appendChild(item);
    }
    return;
  }

  currentArray = currentArray.filter((arr) => Boolean(arr.completed) === true);
  orderedList.innerHTML = "";
  for (let i = 0; i < currentArray.length; i++) {
    const item = document.createElement("li");
    const textNode = `userId: ${currentArray[i].userId} <br>   
      title: ${currentArray[i].title}`;
    item.innerHTML = textNode;
    orderedList.appendChild(item);
  }
}

completedBtn.addEventListener("click", filterComplete);
