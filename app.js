// declaratie van variabelen om de getallen en de operator voor de bewerking te bevatten
let num1;
let operator;
let num2;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

numberButtons.forEach((button) =>
    button.addEventListener('click', () => console.log(69))
);

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