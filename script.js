const board = document.getElementById("game-board");
const result = document.getElementById("result");

let totalCells = 9;
let hiddenIndex;
let wrongGuesses = 0;

function setupGame() {
  // Xóa ô cũ nếu có
  board.innerHTML = "";
  result.textContent = "";

  // Reset biến
  wrongGuesses = 0;
  hiddenIndex = Math.floor(Math.random() * totalCells);

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;

    cell.addEventListener("click", () => {
      if (parseInt(cell.dataset.index) === hiddenIndex) {
        cell.style.backgroundColor = "lightgreen";
        cell.textContent = "🎯";
        result.textContent = "🎉 Bạn đã tìm thấy người đang trốn!";
        // Vô hiệu hóa tất cả ô
        disableAllCells();
      } else {
        if (cell.style.backgroundColor === "lightcoral") return; // không cho click lại cùng ô
        cell.style.backgroundColor = "lightcoral";
        wrongGuesses++;
        result.textContent = `❌ Sai rồi (${wrongGuesses}/3).`;

        if (wrongGuesses >= 3) {
          result.textContent = "💥 Bạn đã hết lượt! Game sẽ chơi lại sau 2 giây.";
          disableAllCells();
          setTimeout(setupGame, 2000);
        }
      }
    });

    board.appendChild(cell);
  }
}

function disableAllCells() {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach(cell => {
    cell.style.pointerEvents = "none"; // vô hiệu hóa click
  });
}

// Bắt đầu game
setupGame();
