import React from 'react'

function Ingredients(props){
    return(
        <section className='CategoAreaIngred'>
                <div className='ingredients'>
                    <ul id='list'>
                        <label className='types'>Ingredients:</label>
                        {props.listOfIngre}
                    </ul>
                </div>
                <div className='others'>
                    <p><label className='types'>Category:</label>{props.category}</p>
                    <p><label className='types'>Area:</label>{props.area}</p>
                    <p><label className='types'>Tags:</label>{props.tag}</p>
                </div>
            </section>
    )
}

export default Ingredients