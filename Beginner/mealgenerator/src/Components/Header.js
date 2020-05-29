import React, { useState } from 'react'

import MyBody from './Body'
import '../Layouts/Header.css'

function Header(){

    const [meal, setMeal] = useState()

    function NewMeal(){
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            setMeal(data.meals[0])
        })
    }
    
    return(
        <header className = 'Header'>
            <h1 className = 'title'>Feeling hungry ?</h1>
            <p>Get a random meal by clicking below</p>
            <button onClick= {() => NewMeal()}>GET A MEAL</button>
            <MyBody theMeal= {meal}/>
        </header>
    )
}

export default Header