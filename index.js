// Player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Player 2 dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Winner announcement
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
