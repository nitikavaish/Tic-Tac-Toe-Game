let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // o=true , x=false
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  cnt=0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
let cnt=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO == true) {
      box.innerText = "O";
      box.style.color = "#2C0703";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#890620";
      turnO = true;
    }
    box.disabled = true;
    cnt++;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText,
      pos2val = boxes[pattern[1]].innerText,
      pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("Winner ", pos1val);
        showWinner(pos1val);
        return ;
      }
    }
     if (cnt === 9) {
      showTie();
    }
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showTie = () => {
  msg.innerText = `It's a Tie!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

