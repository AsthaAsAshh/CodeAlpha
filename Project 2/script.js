const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.textContent === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (key.textContent === 'C') {
            display.textContent = '0';
        } else {
            if (display.textContent === '0') {
                display.textContent = key.textContent;
            } else {
                display.textContent += key.textContent;
            }
        }
    });
});

  