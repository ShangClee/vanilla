// import "./test.css";
let myDebugging = true;
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
h2.className="cClock";

const head = document.querySelector("head");
const headLink = head.querySelector("link");
const footer = document.createElement("footer");
const footerH = document.querySelector("footer h");
body.appendChild(footer);

const divDocu= document.createElement("div");
divDocu.innerHTML = `Hello divDocu at innnerHTML<br>`;
body.appendChild(divDocu);

// head.innerHTML = body.innerHTML + "Text from javascript";
// footer.innerHTML = body.innerHTML + "Text from javascript";
// why ?? body는 되는데, head or footer has problem of null matter;
// documnet.write() and write() is very different
// document.write() is rather recommaned.  
// if use write("hello<br>") then disappear a lot 
document.write("1.writing from javascript<br>");
document.write(`2.headLink.outerHTML: ${headLink.outerHTML}<br>`);

body.style.backgroundColor = "lightblue";
document.write(`3.body backgroundColor : ${body.style.backgroundColor}<br>`)
divDocu.style.backgroundColor = "lightgreen";

// const li = document.createElement("li");
// const span= document.createElement("span");
// span.innerHTML = "hello from span in js";
// li.appendChild(span);
// body.appendChild(li);
/* login form begin */
const loginForm = document.querySelector("#ilogin-form")
const loginInput = document.querySelector("#ilogin-form input");
const loginButton = document.querySelector("#ilogin-form button");
const displayP = document.querySelector("p");
const greetingH2 = document.querySelector("#igreetingH2");

function loginFormSubmit(event) {
    // display.innerHTML = `4.loginButton is clicked`;
    event.preventDefault();
    if (false && myDebugging) {
        console.dir(event);
        console.dir(loginForm);
        document.write(`4.loginButton is clicked ${loginInput.value}<br>`);
        displayP.innerHTML = `4.loginButton is clicked ${loginInput.value}<br>`;
        footer.innerTEXT= `4.loginButton is clicked ${loginInput.value}<br>`;
        console.dir(footer);
    }
    const username = loginInput.value;
    loginForm.classList.add("cHidden");
    greetingH2.innerHTML = `Loged in: Hello ${username}`;
    greetingH2.classList.remove("cHidden");
}
// loginButton.addEventListener("click", loginBtnClick);
loginForm.addEventListener("submit", loginFormSubmit);
/* login form end */
function showClock() {
    const strDate = Date();
    const colon = strDate.indexOf(":");
    const hhmmss = strDate.slice(colon-2, colon+6);
    h2.innerHTML = `${hhmmss}`
}
function showTodos() {
    const p = body.querySelector("p");
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
setInterval(showClock,1000);
showTodos();

