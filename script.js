const oppDict = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "X": multiply,
    "/": divide

}

let displayValue = '';
let firstValue = '';
let operatorValue = '';

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', (e) =>{
    displayValue = displayValue + '' + number.innerHTML;
    updateDisplay(displayValue);
    });
});


const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (firstValue != ''){
            displayValue = operate(operatorValue, firstValue, displayValue);
            updateDisplay(displayValue);
            operatorValue = operator.innerHTML;
            firstValue = displayValue;
            displayValue = '';

        }
        else {
            operatorValue = operator.innerHTML;
            firstValue = displayValue;
            displayValue = '';
        }

    });
});

const equals = document.querySelector('#operator-equals');
    equals.addEventListener('click', (e) => {
    console.log(operatorValue, firstValue, displayValue);
    updateDisplay(operate(operatorValue, firstValue, displayValue));
    });


const clear = document.querySelector('#operator-clear');
    clear.addEventListener('click', (e) => {
        operatorValue = '';
        firstValue = '';
        displayValue = '';
        updateDisplay(displayValue);
    });


function updateDisplay(a){
    document.getElementById('header').innerHTML = a;
}





function add (a,b) {
	return Number(a) + Number(b);
}

function subtract (a, b) {
	return Number(a) - Number(b);
}


function multiply (a, b) {
	return Number(a) * Number(b);
}

function divide (a, b) {
	return Number(a) / Number(b);
}

function operate(o,a,b){
    if(o == '/' && b == 0){
        return 'YOU ALMOST BROKE ME';
    }
    return oppDict[o](a,b);

}


