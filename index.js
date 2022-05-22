const myDebugging = true;
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const buttoni = document.querySelector("#ibutton");

function colorButton() {
//   event.preventDefault();
  const chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)];
  buttoni.innerHTML = `${chosenColor1},${chosenColor2}`;
  if (chosenColor1 === chosenColor2) {
      return colorButton();
  }
  body.style.background = `linear-gradient(to right,${chosenColor1},${chosenColor2})`;
}

function showClock() {
    const strDate = Date();
    const colon = strDate.indexOf(":");
    const hhmmss = strDate.slice(colon-2, colon+6);
    h2.innerHTML = `${hhmmss}`
}
body.style.backgroundColor = "lightblue";
showTodos();
setInterval(showClock,1000);
buttoni.addEventListener("click", colorButton);

function showTodos() {
    const p = document.querySelector("p");
    let header = "Templates Literals";
    let tags = ["template literals", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    // document.getElementById("demo").innerHTML = html;
    p.className = "cTodos";
    p.innerHTML = html;
}

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "cHidden";
const loginForm = document.querySelector("#ilogin-form")
const loginInput = document.querySelector("#ilogin-form input");
const greetingH2 = document.querySelector("#igreetingH2");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username) {
    greetingH2.innerHTML = `Loged in: Hello ${username}`;
    greetingH2.classList.remove("cHidden");
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src=`./img/${chosenImage}`;
document.body.appendChild(bgImage);

const todoForm = document.querySelector("#itodo-form");
const todoInput = document.querySelector("#itodo-form input");
const todoList = document.querySelector("#itodo-list");
let toDos =[];
const TODOS_KEY = "todos";

function saveTodos() {
    // localStorage.setItem(TODOS_KEY, toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteTodo(event) {
    if (true && myDebugging) {
        console.log(event.target.parentElement);
    }
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveTodos();

}
function paintTodo(aTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = aTodo.text;
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    todoInput.value = "";
    // toDos.push(newTodo); ==> save Obj instead of string
    toDos.push(newTodoObj);
    if (true  && myDebugging) {
        console.log(toDos);
    }
    // paintTodo(newTodo);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY,)
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}