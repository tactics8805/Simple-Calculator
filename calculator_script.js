document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('calculator-screen');
    const keys = document.querySelectorAll('.key');
    
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = this.value;

            if (keyValue === 'clear') {
                currentInput = '';
                operator = null;
                previousInput = '';
                screen.value = '';
                return;
            }

            if (keyValue === '=') {
                if (operator && previousInput !== '' && currentInput !== '') {
                    currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    operator = null;
                    previousInput = '';
                }
                screen.value = currentInput;
                return;
            }

            if (['+', '-', '*', '/'].includes(keyValue)) {
                if (operator && previousInput !== '' && currentInput !== '') {
                    currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    screen.value = currentInput;
                }
                operator = keyValue;
                previousInput = currentInput;
                currentInput = '';
                return;
            }

            currentInput += keyValue;
            screen.value = currentInput;
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
        }
    }
});