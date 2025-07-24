let value = "";
let buttons = document.querySelectorAll('button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', function(btn){
        if (btn.target.innerHTML == '=') {
            let finalValue;
            try {
                finalValue = eval(value);
            } catch (error) {
                finalValue = undefined;
            }
            if (finalValue === undefined || isNaN(finalValue)) {
                document.querySelector('#display').value = "error. (×_×)";
                value = "";
            } else {
                value = finalValue
                document.querySelector('#display').value = value;
            }
        }
        else if (btn.target.innerHTML == 'AC') {
            value = '';
            document.querySelector('#display').value = value;
        }
        else if (btn.target.innerHTML == 'C') {
            value = value.slice(0, -1);
            document.querySelector('#display').value = value;
        }
        
        else {
            value += btn.target.innerHTML;
            document.querySelector('#display').value = value;
        }
    });
});




