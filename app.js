// declaratie van variabelen om de getallen en de operator voor de bewerking te bevatten
let num1;
let operator;
let num2;
let shouldResetScreen = false;

// Nodelist
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

// Tag clear button
const clearButton = document.getElementById('clearButton');

// Tag current operation screen
const currentOperationScreen = document.getElementById('currentOperationScreen')

// call clearScreen function when clearButton is clicked
clearButton.addEventListener('click', clearScreen)

// numberButton Listener
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

// operatorButton Listener
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => console.log("test"))
);

// To append a number
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentOperationScreen.textContent += number
}

// Reset the screen
function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clearScreen() {
    currentOperationScreen.textContent = '0'
    // lastOperationScreen.textContent = ''
    // firstOperand = ''
    // secondOperand = ''
    // currentOperation = null
}

// Deze functie voert een bewerking uit (toevoegen, aftrekken, vermenigvuldigen, delen) op twee getallen, afhankelijk van de operator
function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) return null;
            else return divide(num1, num2);
        default:
            return null;
    }
};

// Functie die twee getallen bij elkaar optelt
function add(num1, num2) {
    return num1 + num2;
};
// Functie die het tweede getal van het eerste aftrekt
function subtract(num1, num2) {
    return num1 - num2;
};
// Functie die twee getallen vermenigvuldigt
function multiply(num1, num2) {
    return num1 * num2;
};
// Functie die het eerste getal door het tweede deelt
function divide(num1, num2) {
    return num1 / num2;
};