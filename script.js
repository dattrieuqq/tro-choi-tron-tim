const board = document.getElementById("board");
const status = document.getElementById("status");
const heart = document.getElementById("heart");
let correctCell = Math.floor(Math.random() * 9);
let wrongTries = 0;

for (let i = 0; i < 9; i++) {
  const btn = document.createElement("button");
  btn.innerText = "?";
  btn.onclick = () => {
    if (i === correctCell) {
      status.innerText = "🎉 Bạn đã tìm đúng!";
    } else {
      wrongTries++;
      btn.disabled = true;
      btn.innerText = "❌";
      if (wrongTries >= 3) {
        status.innerText = "💔 Sai 3 lần rồi! Chơi lại nhé.";
        heart.style.display = "inline";
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  };
  board.appendChild(btn);
}
