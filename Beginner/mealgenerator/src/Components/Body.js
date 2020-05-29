import React from 'react'

import '../Layouts/Body.css'

function Body(props){
    if(props.theMeal === undefined){ return null }
    
    const {strArea, strCategory, strInstructions, strMeal, strMealThumb, strTag, strYoutube} = props.theMeal
    
    const ingredients = []
    for(let i = 1; i <= 20; i += 1){
        if(props.theMeal[`strIngredient${i}`]){
            ingredients.push(`${props.theMeal[`strIngredient${i}`]} - ${props.theMeal[`strMeasure${i}`]}`)
        }
    }
    const finalIngredients = ingredients.map((ingred, index) => <li key={index}>{ingred}</li>)
  
    return (
        <div className='allItems'>
            <div className = 'photoNameInst'>
                <img id='photo' src={strMealThumb} alt='' />
                <h1 id='mealName'>{strMeal}</h1>
                <p id='instructions'>Instructions: {strInstructions}</p>
            </div>
            <div className='CategoAreaIngred'>
                <p className='others'>Category: {strCategory}</p>
                <p className='others'>Area: {strArea}</p>
                <p className='others'>Tags: {strTag}</p>
                <ul id='list'><label>Ingredients:</label>{finalIngredients}</ul>
            </div>
            <div className= 'videoDiv'>
            <iframe title='Video Recipe' width='420' height='315'
                        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} />
            </div>
        </div>
        
    )

}

export default Body