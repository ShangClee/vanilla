// import "./test.css";
const body = document.querySelector("body");
const head = document.querySelector("head");
const footer = document.querySelector("footer");
const divDocu= document.createElement("div");
const divBody = body.createElement("div");

divBody.innerHTML = body.innerHTML + "Text in divBody from javascript<br>";
body.appendChild(divBody);
body.innerHTML = body.innerHTML + "Text from javascript<br>";
// head.innerHTML = body.innerHTML + "Text from javascript";
// footer.innerHTML = body.innerHTML + "Text from javascript";
// why ?? body는 되는데, head or footer has problem of null matter;
document.write("writing from javascript");
divDocu.innerHTML = `Hello divDocu at innnerHTML<br>`;
body.style.backgroundColor = "red";
body.className = "cBlue";
divBody.innerHTML = `Hello divBody at innnerHTML<br>`;
body.style.backgroundColor ="red";
divMain.style.backgroundColor = "blue";

const li = document.createElement("li");
const span= document.createElement("span");
span.innerHTML = "hello from span in js";
li.appendChild(span);
body.appendChild(li);
