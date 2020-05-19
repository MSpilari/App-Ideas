const Summary = document.querySelector('ul')
const mainContent = document.querySelector('div')

const people = [
    {name: 'Matheus', age: 25, city: 'Santo André', state: 'São Paulo'},
    {name: 'Rose', age: 38, city: 'São Bernardo do Campo', state: 'São Paulo'},
    {name: 'Ana', age: 21, city: 'São Caetano do Sul', state: 'São Paulo'},
    {name: 'Wilson', age: 60, city: 'São Carlos', state: 'São Paulo'},
    {name: 'Carla', age: 19, city: 'Santo Antônio de Posse', state: 'São Paulo'},
    {name: 'Bianca', age: 24, city: 'Santo André', state: 'São Paulo'}
]

people.forEach( person => {
    let itemSummary = document.createElement('li')
    let link = document.createElement('a')
    link.href = '#'
    link.onclick = (event) => clicked(event.target.innerHTML) 
    
    link.innerHTML = person.name
    itemSummary.appendChild(link)
    Summary.appendChild(itemSummary)
})

function clicked(button) {
    people.filter(person => {
        if(person.name == button){
            let name = document.createElement('div')
            name.innerHTML = `
            Name: ${person.name}
            Age: ${person.age}
            City: ${person.city}
            State: ${person.state}`

            mainContent.appendChild(name)

        }
    })
}