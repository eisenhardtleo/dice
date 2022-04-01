let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

console.log(randomNumber1);

let img1 = document.querySelector(".img1");
img1.setAttribute("src", `images/dice${randomNumber1}.png`);
let img1src = img1.getAttribute("src");

let img2 = document.querySelector(".img2");
img2.setAttribute("src", `images/dice${randomNumber2}.png`);
let img2src = img2.getAttribute("src");

if (img1src > img2src) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}
if (img1src === img2src) {
    document.querySelector("h1").textContent = "Draw!";
}
