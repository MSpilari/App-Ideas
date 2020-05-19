const displayCalc = document.querySelector('span.display')
const buttonsCalc = document.querySelector('.buttons')

let firstValue = null
let operator = null
let secondValue = null
let result = null

function btnType(value) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operators = ['+', '-', '*', '/', '=']
    const dot = ['.']
    const specialValues = ['AC', 'C']

    if (digits.includes(value)) return 'digit'
    if (operators.includes(value)) return 'operator'
    if (dot.includes(value)) return 'dot'
    if (specialValues.includes(value)) return 'special'
}

function showResult(fValue, Op, sValue) {
    if (Op == "+") return result = Number(fValue) + Number(sValue)
    if (Op == "-") return result = Number(fValue) - Number(sValue)
    if (Op == "*") return result = Number(fValue) * Number(sValue)
    if (Op == "/") return result = Number(fValue) / Number(sValue)
    if (Op == null) return result = '0'
}


buttonsCalc.addEventListener('click', event => {
    let btnClicked = event.target.innerHTML

    if ( btnType(btnClicked) == 'dot' && !displayCalc.innerHTML.includes('.')) {
        
            displayCalc.innerHTML += btnClicked
    }

    if (btnType(btnClicked) == 'digit') {
        if (displayCalc.innerHTML == firstValue || displayCalc.innerHTML == result) {
            displayCalc.innerHTML = '0'
        }
        displayCalc.innerHTML == '0' ?
            displayCalc.innerHTML = btnClicked :
            displayCalc.innerHTML += btnClicked
    }

    if (btnType(btnClicked) == 'operator') {
        if (firstValue == null && operator == null && btnClicked != '=') {
            firstValue = displayCalc.innerHTML
            operator = btnClicked
        } 
        else if (firstValue != null && operator != null && btnClicked == '=') {
            secondValue = displayCalc.innerHTML
            displayCalc.innerHTML = showResult(firstValue, operator, secondValue) != undefined ?
                showResult(firstValue, operator, secondValue) :
                '0'
            firstValue = showResult(firstValue, operator, secondValue)
            operator = null
        } 
        else if (firstValue != null && operator == null && btnClicked != '=') {
            operator = btnClicked
        } 
        else if (firstValue == null && operator == null && btnClicked == '=') {
            return displayCalc.innerHTML = 0
        } 
        else {
            secondValue = displayCalc.innerHTML
            newFirstValue = showResult(firstValue, operator, secondValue)
            displayCalc.innerHTML = showResult(firstValue, operator, secondValue)
            firstValue = newFirstValue
            operator = btnClicked
        }
    }

    if (btnType(btnClicked) == 'special') {
        if (btnClicked == 'C') {
            let newDisplay = displayCalc.innerHTML.slice(0, displayCalc.innerHTML.length - 1)
            newDisplay.length == 0 ?
                displayCalc.innerHTML = '0' :
                displayCalc.innerHTML = newDisplay
            if(displayCalc.innerHTML == '0' && operator != null){
                operator = null
                firstValue != null ? 
                displayCalc.innerHTML = firstValue : 
                displayCalc.innerHTML = '0'
            }    
        }
        else {
            firstValue = null
            operator = null
            secondValue = null
            result = null
            displayCalc.innerHTML = '0'
        }
    }
})