// Variabelen voor de operanden en operator
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

// Selecteer alle nummer- en operator knoppen
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

// Selecteer specifieke knoppen op basis van hun id
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');
const dotButton = document.getElementById('dotButton');
const deleteButton = document.getElementById('deleteButton');

// Selecteer schermen voor de laatste en huidige bewerking
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// Voeg event listeners toe aan de specifieke knoppen
clearButton.addEventListener('click', clearScreen);
equalsButton.addEventListener('click', evaluate);
dotButton.addEventListener('click', appendDot);
deleteButton.addEventListener('click', deleteInput);

// Voor elke nummerknop, voeg een event listener toe die het getal aan het scherm toevoegt
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

// Voor elke operator knop, voeg een event listener toe die de operator instelt
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

// Functie om een nummer aan het scherm toe te voegen
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number;
};

// Functie om een operator in te stellen
function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`;
    shouldResetScreen = true;
};

// Functie om de berekening te evalueren
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

// Functie om het scherm te resetten
function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
};

// Functie om het scherm en de variabelen te wissen
function clearScreen() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
};

// Functie om een decimale punt aan het scherm toe te voegen
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

// Functie om het laatste getal of teken van het scherm te verwijderen
function deleteInput() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1);
};

// Functie om het resultaat af te ronden tot op de duizendste
function roundResult(number) {
    return Math.round(number * 1000) / 1000;
};

// Functie om een bewerking uit te voeren op basis van de operator
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

// Basis wiskundige functies
function add(num1, num2) {
    return num1 + num2;
};
function subtract(num1, num2) {
    return num1 - num2;
};
function multiply(num1, num2) {
    return num1 * num2;
};
function divide(num1, num2) {
    return num1 / num2;
};