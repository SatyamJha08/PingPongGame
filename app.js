const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1score = 0;
let winningScore = 0;
let isGameOver = false;
player1.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
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
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2score;
    }
})

function reset(){
    isGameOver = false;
    p1score =0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset)