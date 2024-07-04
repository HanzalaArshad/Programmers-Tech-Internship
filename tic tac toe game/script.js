let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Assuming boxes is an array of DOM elements or a NodeList

  const resetGame =()=>{
    turnO =true;
    enabledboxes();
    msgContainer.forEach(container => {container.classList.add("hide")});

    
    
  }

boxes.forEach(box => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        if (turnO) {
            box.innerText = "0";
            turnO = false;
            box.disabled = true;
        } else {
            box.innerText = "X";
            turnO = true;
            box.disabled = true;
        }
        checkWinner();
    });
});

const disabledboxes =()=>{
    for (box of boxes){
        box.disabled=true;
    }
}

const enabledboxes =()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.forEach(container => {container.classList.remove("hide")});

    disabledboxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText.trim();
        let pos2 = boxes[pattern[1]].innerText.trim();
        let pos3 = boxes[pattern[2]].innerText.trim();
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("winner", pos1);

                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);