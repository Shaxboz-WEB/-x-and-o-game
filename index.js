let currentPlayer = "X";
let moves = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.innerText = currentPlayer;
        moves++;

        if (checkWinner()) {
            document.getElementById("result").innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (moves === 9) {
            document.getElementById("result").innerText = "..draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    currentPlayer = "X";
    moves = 0;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById("result").innerText = "";
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.innerText = "";
    });
}
