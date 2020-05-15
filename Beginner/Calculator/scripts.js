const display = document.querySelector('span.display')
const keypad = document.querySelector('.buttons')

let counter = 0
const pResults = ['0']

function chooseOperator (symbol) {
    if(symbol == '+') return result = Number(pResults[1]) + Number(pResults[2])
    
    if(symbol == '-') return result = Number(pResults[1]) - Number(pResults[2])
    
    if(symbol == '*') { return result = (Number(pResults[1]) * Number(pResults[2])) % 1 == 0 
                                            ? Number(pResults[1]) * Number(pResults[2]) 
                                            : (Number(pResults[1]) * Number(pResults[2])).toFixed(2)
    }
    if(symbol == '/') { return result = (Number(pResults[1]) / Number(pResults[2])) % 1 == 0 
                                            ? Number(pResults[1]) / Number(pResults[2]) 
                                            : (Number(pResults[1]) / Number(pResults[2])).toFixed(2)

    }
}

function possibleResult(displayShow){    
    return pResults.includes(displayShow)
}

function isValid(button) {
    if(button.classList.contains('number') || button.classList.contains('dot')) {
        if(counter < 9)    
            return true
    }
}

function countingNumbers() {
    if(display.innerHTML != 0 && counter < 9) {
        counter += 1
    }
}


keypad.addEventListener('click', (event) => {
    
    let clicked = event.target
    
    if(isValid(clicked)) {
    
        if(possibleResult(display.innerHTML)){ 
             display.innerHTML = clicked.value
             countingNumbers()
        }
        else{
            display.innerHTML += clicked.value
            countingNumbers()
        }
    }
    console.log(counter)
    if(clicked.classList.contains('operator')){
        counter = 0
        pResults[1] = display.innerHTML
        operator = clicked.value
        console.log(pResults)
    }

    if(clicked.value == '='){
        counter = 0
        pResults[2] = display.innerHTML
        display.innerHTML = chooseOperator(operator)
        pResults[3] = String(chooseOperator(operator))
    }
})


