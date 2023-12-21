const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const dotBtn = document.querySelector(".dot-btn");

function appendCharacter(char) {
  if (currentOperand.innerText[0] == undefined && (char == "0" || char == "00" || char == "000")) {
    return null;
  } else if (char == "." && currentOperand.innerText.includes(".")) {
    return null;
  } else {
    currentOperand.innerHTML += char;
  }
}

function clearAll() {
  currentOperand.innerText = "";
  previousOperand.innerText = "";
}

function deleteLastCharacter() {
  currentOperand.innerText = currentOperand.innerText.slice(0, -1);
}
function operation(char) {
  if (
    currentOperand.innerText == "" ||
    currentOperand.innerText.charAt(currentOperand.innerText.length - 1) == "."
  ) {
    if (
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "/" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "*" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "-" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "+"
    ) {
    }
  } else {
    previousOperand.innerText += currentOperand.innerText + char;
    currentOperand.innerText = "";
  }
}
// console.log(currentOperand[0]);
function compute() {
  if (
    ((previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "/" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "*" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "-" ||
      previousOperand.innerText.charAt(previousOperand.innerText.length - 1) == "+") &&
      currentOperand.innerText == "") ||
    currentOperand.innerText == "" ||
    currentOperand.innerText.charAt(currentOperand.innerText.length - 1) == "."
  ) {
  } else {
    try {
      previousOperand.innerText += currentOperand.innerText;
      let result = eval(previousOperand.innerText);
      currentOperand.innerText = "";
      previousOperand.innerText = "";
      currentOperand.innerText = result;
    } catch (error) {
      currentOperand.innerText = "Error";
    }
  }
}
