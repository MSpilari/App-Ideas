import React from 'react'

function PhotoName(props){
    return(
        <section className = 'photoNameInst'>
                <div id='photo'>
                    <img src={props.photo} alt='' />
                </div>
                <div id='theMeal'>
                    <h1 id='mealName'>{props.name}</h1>
                    <p id='instructions'> {props.instructions}</p>
                </div>   
            </section>
    )
}

export default PhotoName