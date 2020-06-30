const markDown = document.querySelector('textarea[name="MarkDown"]')
const html = document.querySelector('textarea[name="HTML"]')
const selectType = document.querySelector('select[name="typeText"]')
const copyButton = document.querySelectorAll('button.CopyButton')
const baloon = document.querySelector('h1.tooltip')

function whatsTheButton(button){
    button.addEventListener('click', (event) => {
        if(event.target.name === "MarkDown"){
            markDown.select()
            document.execCommand('copy')
            return alert('Copied the text ' + markDown.value)
        }
        html.select()
        document.execCommand('copy')
        alert('Copied the text ' + html.value)  
    })
}

function isTyping(){
    let textParsed = marked.parse(markDown.value)
    html.value = textParsed
    localStorage.setItem('Old Text', markDown.value)
}

function tooltipShow(button){
    button.addEventListener('mouseenter', () => baloon.classList.add('tooltipShow'))
    button.addEventListener('mouseout', () => baloon.classList.remove('tooltipShow'))
}

window.addEventListener('load', () => markDown.value = localStorage.getItem('Old Text'))

markDown.addEventListener('keyup', () => isTyping())

copyButton.forEach(button => whatsTheButton(button))

copyButton.forEach(button => tooltipShow(button))