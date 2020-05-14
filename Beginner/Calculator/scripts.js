const display = document.querySelector('span.display')
const keypad = document.querySelector('.buttons')

let firstNumber = null
let operator = null
let secondNumber = null
let result = null


function chooseOperator (symbol) {
    if(symbol == '+') return result = firstNumber + secondNumber
    if(symbol == '-') return result = firstNumber - secondNumber
    if(symbol == '*') return result = firstNumber * secondNumber
    if(symbol == '/') return result = firstNumber / secondNumber
}


keypad.addEventListener('click', (event) => {
    
    let clicked = event.target

    
    if( clicked.classList.contains('number') || 
        clicked.classList.contains('dot') ) {
        
        if( display.innerHTML == 0 || 
            display.innerHTML == result ||
            display.innerHTML == firstNumber)
            {
            
            display.innerHTML = clicked.value

        }
        else{
            display.innerHTML += clicked.value
        }
    }

    if(clicked.classList.contains('operator')){
        firstNumber = Number(display.innerHTML)
        operator = clicked.value
    }

    if(clicked.value == '='){
        secondNumber = Number(display.innerHTML)
        chooseOperator(operator)
        display.innerHTML = result
    }
})


