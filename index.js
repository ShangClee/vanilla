const body = document.querySelector("body");
// createdH1 = document.createElement("h1 id='ih1'");
const h1 = document.createElement("h1");
h1.innerHTML =  "00:00:00";
body.appendChild(h1);

function showClock() {
    const strDate = Date();
    const colon = strDate.indexOf(":");
    const hhmmss = strDate.slice(colon-2, colon+6);
    h1.innerHTML = `${hhmmss}`
}
setInterval(showClock,1000);