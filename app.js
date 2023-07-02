// declaratie van variabelen om de getallen en de operator voor de bewerking te bevatten
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

// Nodelist
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

// Tag clear button
const clearButton = document.getElementById('clearButton');
// Tag equals button
const equalsButton = document.getElementById('equalsButton');
// Tag dot button
const dotButton = document.getElementById('dotButton');
// Tag last operation screen
const lastOperationScreen = document.getElementById('lastOperationScreen');
// Tag current operation screen
const currentOperationScreen = document.getElementById('currentOperationScreen');

// call clearScren function when clearButton is clicked
clearButton.addEventListener('click', clearScreen);
// call evaluate function when equalsButton is clicked
equalsButton.addEventListener('click', evaluate);
// Test for the dot button
dotButton.addEventListener('click', appendDot);

// numberButton Listener
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

// operatorButton Listener
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

// To append a number
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number
};

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`;
    shouldResetScreen = true;
};

function evaluate() {

    if (currentOperator === '/' && currentOperationScreen.textContent === '0') {
        alert("You can't divide by zero!");
        return;
    };
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = roundResult(
        operate(firstOperand, secondOperand, currentOperator)
    );
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
};

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
};

function clearScreen() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
};

function appendDot() {
    if (shouldResetScreen) resetScreen();
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    };
    if (currentOperationScreen.textContent.includes('.')) {
        return;
    };
    currentOperationScreen.textContent += '.';
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
};

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