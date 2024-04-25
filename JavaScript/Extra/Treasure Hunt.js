document.addEventListener("DOMContentLoaded", function () {
  let grid = document.getElementById("grid");
  let scoreDisplay = document.getElementById("score");
  let movesDisplay = document.getElementById("moves");
  let score = 0;
  let moves = 20;
  let rows = 10;
  let cols = 10;
  let gameBoard = [];

  function createGrid() {
    for (let i = 0; i < rows; i++) {
      let boardRow = [];
      for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        boardRow.push(cell);
      }
      gameBoard.push(boardRow);
    }

    placeItems("treasure", 5, gameBoard);
    placeItems("trap", 3, gameBoard);

    gameBoard[0][0].classList.add("player");
  }

  function placeItems(type, count, gameBoard) {
    let placed = 0;
    while (placed < count) {
      let randomRow = Math.floor(Math.random() * rows);
      let randomCol = Math.floor(Math.random() * cols);
      if (
        !gameBoard[randomRow][randomCol].classList.contains("treasure") &&
        !gameBoard[randomRow][randomCol].classList.contains("trap")
      ) {
        gameBoard[randomRow][randomCol].classList.add(type);
        placed++;
      }
    }
  }

  function movePlayer(direction) {
    if (moves <= 0) {
      alert("No more moves left!");
      return;
    }

    let currentIndex = findPlayer(gameBoard);
    if (!currentIndex) return;
    let newRow = currentIndex.row;
    let newCol = currentIndex.col;

    switch (direction) {
      case "up":
        newRow = Math.max(0, newRow - 1);
        break;
      case "down":
        newRow = Math.min(rows - 1, newRow + 1);
        break;
      case "left":
        newCol = Math.max(0, newCol - 1);
        break;
      case "right":
        newCol = Math.min(cols - 1, newCol + 1);
        break;
    }

    if (newRow !== currentIndex.row || newCol !== currentIndex.col) {
      gameBoard[currentIndex.row][currentIndex.col].classList.remove("player");
      gameBoard[newRow][newCol].classList.add("player");
      checkCell(newRow, newCol);
      moves--;
      movesDisplay.textContent = moves;
    }
  }

  function findPlayer(gameBoard) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (gameBoard[i][j].classList.contains("player")) {
          return { row: i, col: j };
        }
      }
    }
    return null;
  }

  function checkCell(row, col) {
    let cell = gameBoard[row][col];
    if (cell.classList.contains("treasure")) {
      score += 1;
      cell.classList.remove("treasure");
      alert("Treasure found :)");
    } else if (cell.classList.contains("trap")) {
      score -= 1;
      cell.classList.remove("trap");
      alert("Fell into a trap :(");
    }
    scoreDisplay.textContent = score;
  }

  createGrid();
  window.movePlayer = movePlayer;
});
