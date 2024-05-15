let screen = document.getElementById('calculator-screen');
let screenValue = screen.textContent;
let firstValue = 0;
let previousOperator = null;
let waitingForSecodnValue = false;

function inputDigit(digit) {
  if (waitingForSecodnValue) {
    waitingForSecodnValue = false;
    screenValue = digit;
  } else {
    screenValue = screenValue === '0' ? digit : screenValue + digit;
  }
  updateScreenDisplay();
}

function inputDecimal() {
  if (! screenValue.includes('.')) {
    screenValue = screenValue + '.';
  }
  updateScreenDisplay();
}

function toggleSign() {
  screenValue = screenValue * -1;
  updateScreenDisplay();
}

function clearEntry() {
  screenValue = screenValue.slice(0, -1);
  if (screenValue.length === 0) {
    screenValue = '0';
  }
  updateScreenDisplay();
}

function allClear(){
  screenValue = '0';
  updateScreenDisplay();
}

function handleOperator(currentOperator) {
firstValue = calculate(firstValue, previousOperator, parseFloat(screenValue));
screen = firstValue;
previousOperator = currentOperator;
waitingForSecodnValue = true;
updateScreenDisplay();
}

function calculate(first, operator, second){
  if (operator === '+') return first + second;
  if (operator === '-') return first - second;
  if (operator === '*') return first * second;
  if (operator === '/') return first / second;

  return second;
}

function updateScreenDisplay() {
  screen.textContent = screenValue;

}