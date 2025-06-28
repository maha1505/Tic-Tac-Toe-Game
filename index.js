let cells = document.querySelectorAll(".cell");
let turnIndicator = document.querySelector(".container .turn_indicator");
let preContainer = document.querySelector(".container .pre-container");
let resultBox = document.querySelector(".container .result-box");
let winnerMsg = document.querySelector(".container .result-box .winner-msg");
let changeturn = false;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (changeturn == false) {
            cell.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            cell.style.pointerEvents = "none";
            cell.id = "X";
            turnIndicator.style.marginLeft = "150px";
            changeturn = true;
        } else {
            cell.innerHTML = `<i class="fa-solid fa-o"></i>`;
            cell.style.pointerEvents = "none";
            cell.id = "O";
            turnIndicator.style.marginLeft = "0px";
            changeturn = false;
        }
        winning();  // Check for winner
        Draw();     // Check for draw
    });
});

let wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

let winning = () => {
    for (let a = 0; a < 8; a++) {  // Loop through all win combos
        let b = wincombo[a];
        if (cells[b[0]].id == "" || cells[b[1]].id == "" || cells[b[2]].id == "") {
            continue;  // Skip incomplete combinations
        }
        if (cells[b[0]].id == "X" && cells[b[1]].id == "X" && cells[b[2]].id == "X") {
            resultBox.style.display = "block";
            preContainer.style.display = "none";
            winnerMsg.innerHTML = "Player X won the game!";
            break;
        } else if (cells[b[0]].id == "O" && cells[b[1]].id == "O" && cells[b[2]].id == "O") {
            resultBox.style.display = "block";
            preContainer.style.display = "none";
            winnerMsg.innerHTML = "Player O won the game!";
            break;
        }
    }
};

let Draw = () => {
    let allFilled = Array.from(cells).every(cell => cell.id !== "");
    if (allFilled) {
        resultBox.style.display = "block";
        preContainer.style.display = "none";
        winnerMsg.innerHTML = "Match has been drawn!";
    }
};
