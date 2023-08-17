let string = "";
let buttons = document.querySelectorAll('.box');
const inputDisplay = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "M+") {
            string = Math.abs(string);
            inputDisplay.value = string;
        }
        else if (e.target.innerHTML == "M-") {
            string = -string;
            inputDisplay.value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})

