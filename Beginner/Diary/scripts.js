const Summary = document.querySelector('ul')
const cardContent = document.querySelector('div#card-content')


const people = [
    {name: 'Matheus', age: 25, city: 'Santo André', state: 'São Paulo', phone:'1234-4532'},
    {name: 'Rose', age: 38, city: 'São Bernardo do Campo', state: 'São Paulo', phone:'3467-3989'},
    {name: 'Ana', age: 21, city: 'São Caetano do Sul', state: 'São Paulo', phone:'3210-9465'},
    {name: 'Wilson', age: 60, city: 'São Carlos', state: 'São Paulo', phone:'2893-0191'},
    {name: 'Carla', age: 19, city: 'Santo Antônio de Posse', state: 'São Paulo', phone:'2123-7456'},
    {name: 'Bianca', age: 24, city: 'Santo André', state: 'São Paulo', phone:'8382-1928'}
]

function createCard(somebody) {
    let data = document.createElement('div')
    let name = document.createElement('p')
    let age = document.createElement('p')
    let city = document.createElement('p')
    let state = document.createElement('p')
    let phone = document.createElement('p')

    data.className = 'card-itens'
    name.innerHTML = `Name: ${somebody.name}`
    age.innerHTML = `Age: ${somebody.age}`
    city.innerHTML = `City: ${somebody.city}`
    state.innerHTML = `State: ${somebody.state}`
    phone.innerHTML = `Phone: ${somebody.phone}`
    
    data.append(name, age, city, state, phone)
    return data
}

function searchAttribute(element){
    const summaryItens = document.querySelectorAll('.summary-item')
    summaryItens.forEach(item => {
        if(item.hasAttribute('selected') && item != element){
            item.removeAttribute('selected')
        }
        else if(!item.hasAttribute('selected') && item == element){
            item.setAttribute('selected', '')
        }
    })
}

function clicked(button) {
    people.filter(person => {
        if(person.name == button){
            while(cardContent.firstChild) {
                cardContent.removeChild(cardContent.firstChild)
            }            
            
            cardContent.appendChild(createCard(person))
        }
    })
}

people.forEach( person => {
    let itemSummary = document.createElement('li')
    let link = document.createElement('a')
    
    link.href = '#'
    link.classList.add('summary-item')    
    link.onclick = (event) => {
        return(clicked(event.target.innerHTML), 
        searchAttribute(event.target))
    }    
    link.innerHTML = person.name
    itemSummary.appendChild(link)
    Summary.appendChild(itemSummary)
})
