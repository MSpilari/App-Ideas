const display = document.querySelector('span.display')
const keypad = document.querySelector('.buttons')

let counter = 0
const pResults = ['0', 'ERR']

function setResult (symbol) {
    if(symbol == '+') return result = Number(pResults[2]) + Number(pResults[3])
    
    if(symbol == '-') return result = Number(pResults[2]) - Number(pResults[3])
    
    if(symbol == '*') { return result = (Number(pResults[2]) * Number(pResults[3])) % 1 == 0 
                                            ? Number(pResults[2]) * Number(pResults[3]) 
                                            : (Number(pResults[2]) * Number(pResults[3])).toFixed(2)
    }
    if(symbol == '/') { return result = (Number(pResults[2]) / Number(pResults[3])) % 1 == 0 
                                            ? Number(pResults[2]) / Number(pResults[3]) 
                                            : (Number(pResults[2]) / Number(pResults[3])).toFixed(2)

    }
}

function possibleResult(displayShow){    
    return pResults.includes(displayShow)
}

function isValid(button) {
    if(button.classList.contains('number') || button.classList.contains('dot')) {
        if(counter < 8)    
            return true
    }
}

function countingNumbers() {
    if(display.innerHTML != '0' || display.innerHTML == '0.' && counter <= 8) {
        counter += 1
    }
}

function backspace (){
    let arr = display.innerHTML
    let narr = arr.slice(0, arr.length -1)
    if(narr == []) {
        display.innerHTML = 0
    }
    else {
        display.innerHTML = narr
    }
}

function allClear() {
    pResults[2] = ''
    pResults[3] = ''
    pResults[4] = ''
    display.innerHTML = 0
}


keypad.addEventListener('click', (event) => {
    
    let clicked = event.target

    if(isValid(clicked)) {
    
        if (display.innerHTML == '0' && clicked.value == '.') {
            display.innerHTML += clicked.value
            countingNumbers()
        }
        else if(possibleResult(display.innerHTML)){ 
             display.innerHTML = clicked.value
             countingNumbers()
        }
        else{
            display.innerHTML += clicked.value
            countingNumbers()
        }
    }

    if(clicked.classList.contains('operator')){
        counter = 0
        pResults[2] = display.innerHTML
        operator = clicked.value
    }

    if(clicked.value == '='){
        counter = 0
        pResults[3] = display.innerHTML
        display.innerHTML = String(setResult(operator)).length <= 8 ? setResult(operator) : 'ERR'
        pResults[4] = String(setResult(operator))
    }

    if(clicked.value == 'C') {
        backspace()
    }

    if (clicked.value == 'AC'){
        allClear()        
    }
})


