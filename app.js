const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1score = 0;
let winningScore = 5;
let isGameOver = false;
player1.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1score;
    }
})

let p2score = 0;
player2.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2score;
    }
})