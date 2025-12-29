let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    if (checkWinner()) {
        statusText.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X's turn";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}