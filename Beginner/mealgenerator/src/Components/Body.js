import React from 'react'

import PhotoName from './PhotoName'
import Ingredients from './Ingredients'
import Video from './Video'
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
            <PhotoName 
                    photo={strMealThumb}
                    name={strMeal}
                    instructions={strInstructions}
            />
            
            <Ingredients 
                    listOfIngre={finalIngredients}
                    category={strCategory}
                    area={strArea}
                    tag={strTag}
            />            
            
            <Video url={strYoutube}/>
        </div>
        
    )

}

export default Body