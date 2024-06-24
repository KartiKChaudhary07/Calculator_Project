let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText == 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            if (buttonText == '.') {
                let parts = string.split(/[\+\-\*\/]/);
                let lastPart = parts[parts.length - 1];
                if (!lastPart.includes('.')) {
                    string += buttonText;
                }
            } else {
                string += buttonText;
            }
            input.value = string;
        }
    })
});
