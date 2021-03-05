const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const p = container.querySelectorAll("p");
const link = container.querySelector("a");

h1.style.color = "#ff0000";
h1.style.fontSize = "20px";

container.style.cssText = "width: 600px; margin: 0 auto;";

for(let i = 0; i < p.length; i++) {
    p[i].style.lineHeight = "30px";
}

link.style.display = "block";
// link.style.display = "";

console.log(link.style.color);

console.log(window.getComputedStyle(link).fontSize);
