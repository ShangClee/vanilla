body = document.querySelector("body");

h1 = document.createElement("h1");
h1.innerHTML = "the created h1 shows clock 00:00:00";
body.appendChild(h1);

div = document.createElement("div");
div.innerHTML = "<br>hello from created div";
span = document.createElement("span");
span.innerHTML = "<br>hello in span";
div.appendChild(span);
body.appendChild(div);

p = document.createElement("p");
p.innerHTML = "hello from created P";
body.appendChild(p);

function showClock() {
    const strDate = Date();
    const colon = strDate.indexOf(":");
    const hhmmss = strDate.slice(colon-2, colon+6);
    h1.innerHTML = `${hhmmss}`
    // h1.innerHTML = `${hhmmss}<br>${strDate}, ${colon}`;
}

setInterval(showClock,1000);
