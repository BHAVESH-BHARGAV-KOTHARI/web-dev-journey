const block = document.getElementById("block");
const title = document.getElementById("title");

const scoreElt = document.getElementById("value");
const timerElt = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let score = 0;
let time = 15;
let gameOver = true;
let countdown;

// Place block beside title
function placeInitialBlock() {

    const rect = title.getBoundingClientRect();

    block.style.left = `${rect.right + 20}px`;

    // Vertically center with the title
    block.style.top =
        `${rect.top + (rect.height - block.offsetHeight) / 2}px`;
}

// Move block randomly
function change() {

    if(gameOver) return;

    score++;
    scoreElt.textContent = score;

    const headerHeight = document.querySelector("header").offsetHeight;

    const maxX = window.innerWidth - block.offsetWidth;
    const maxY = window.innerHeight - block.offsetHeight - headerHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY + headerHeight;

    block.style.left = `${randomX}px`;
    block.style.top = `${randomY}px`;
}

block.addEventListener("mouseenter", change);
placeInitialBlock();


// Start Game
function startGame(){

    clearInterval(countdown);

    score = 0;
    time = 10;
    gameOver = false;

    scoreElt.textContent = score;
    timerElt.textContent = time;

    block.style.display = "block";
    startBtn.style.display = "none";

    placeInitialBlock();

    countdown = setInterval(() => {

        time--;
        timerElt.textContent = time;

        if(time <= 0){

            clearInterval(countdown);
            placeInitialBlock();

            gameOver = true;

            block.style.display = "none";
            startBtn.style.display = "block";

            alert(`Game Over!\n\nFinal Score: ${score}`);
            startBtn.style.display = "block";
        }

    },1000);
}

startBtn.addEventListener("click", startGame);