const reset = document.querySelector(".resetBtn");
const buttons = document.querySelector(".buttons");
const firstOutput = document.querySelector("#first_output");
const secondOutput = document.querySelector("#second_output");
const generateBtn = document.querySelector(".generate");
const input = document.querySelector(".buttonNr");

let buttonCnt = 3;
let winnerId = WinnerButton(buttonCnt);
let btn = new Array(buttonCnt + 1);

createButtons(buttonCnt);

function WinnerButton(buttonCnt) {
    let Winner = Math.ceil(Math.random() * buttonCnt);
    return Winner;
}

function createButtons(buttonCnt) { 
    for (let i = 1; i <= buttonCnt; ++i) {
        btn[i] = document.createElement("button");
        buttons.append(btn[i]);
        btn[i].setAttribute("class", "button");    
        btn[i].onclick = function () {handleClick(i)};
    }
}

function handleClick(x) {
    secondOutput.style.display = "none";
    firstOutput.style.display = "block";
    if (x === winnerId) {
        firstOutput.innerText = "                        FELICITĂRI! \n AI GĂSIT BUTONUL CÂȘTIGĂTOR.";
        firstOutput.style.backgroundColor = 'rgb(236, 236, 0)';
        setGameOver();
    } else {
        firstOutput.innerText = "                      MAI ÎNCEARCĂ";
        firstOutput.style.backgroundColor = 'rgb(255, 125, 0)';
    }
}

function setGameOver() {
    for (let i = 1; i <= buttonCnt; ++i) {
        btn[i].disabled = true;
    }
    const startAgain = document.createElement("button");
    startAgain.setAttribute("class", "reset");
    startAgain.innerText = "INCEPE DIN NOU"
    reset.append(startAgain);
    startAgain.addEventListener("click", resetGame);
}

function resetGame() {
    window.location.reload();
    startAgain.remove();
}

function generateButtons() {
    firstOutput.style.display = "none";
    secondOutput.style.display = "none";
    reset.innerHTML = "";
    if (Number(input.value) > 0) {
        deleteButtons();
        buttonCnt = Number(input.value);
        createButtons(buttonCnt);
        winnerId = WinnerButton(buttonCnt);
    } else {
        secondOutput.style.display = "block";
        secondOutput.style.backgroundColor = 'rgb(255, 125, 0)';
        secondOutput.innerText = " TREBUIE SĂ INTRODUCI O VALOARE POZITIVĂ";
    }
}


function deleteButtons() {
    for (let i = 1; i <= buttonCnt; ++i) {
        btn[i].remove();
    }
}

generateBtn.addEventListener('click', generateButtons);

