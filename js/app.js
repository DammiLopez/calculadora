const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const themeToggler = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.calculator');
const togglerIcon = document.querySelector('toggler-icon');
let isDark = true;

themeToggler.addEventListener('click', () => {
    calculator.classList.toggle("dark");
    themeToggler.classList.toggle("active");
    isDark = !isDark;
})


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.innerText = '';
        }
        else if (button.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        }
        else if (display.innerText != '' && button.id === 'equal') {
            display.innerText = eval(display.innerText)
        }
        else if (display.innerText == '' && button.id == 'equal') {
            display.innerText = 'Null';
            setTimeout(() => display.innerText = '', 2000)
        } else {
            display.innerText += button.id
        }
    })
}
);




