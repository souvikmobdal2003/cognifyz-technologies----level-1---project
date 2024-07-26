function appendNumber(number) {
    const display = document.getElementById('display');
    display.textContent += number;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

function deleteLastDigit() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}