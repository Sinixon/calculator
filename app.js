// declaratie van variabelen om de getallen en de operator voor de bewerking te bevatten
let num1;
let operator;
let num2;

// Deze functie voert een bewerking uit (toevoegen, aftrekken, vermenigvuldigen, delen) op twee getallen, afhankelijk van de operator
function operate(num1, num2, operator) {
    // controleren of de operator een plus-teken is en zo ja, de add functie aanroepen
    if (operator === "+") {
        return add(num1, num2);
    };
    // controleren of de operator een min-teken is en zo ja, de subtract functie aanroepen
    if (operator === "-") {
        return subtract(num1, num2);
    };
    // controleren of de operator een vermenigvuldigingsteken is en zo ja, de multiply functie aanroepen
    if (operator === "*") {
        return multiply(num1, num2);
    };
    // controleren of de operator een deel-teken is en zo ja, de divide functie aanroepen
    if (operator === "/") {
        return divide(num1, num2);
    };
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