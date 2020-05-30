import React from 'react'

function Video(props){
    return(
        <section className= 'videoDiv'>
            <iframe 
                    title='Video Recipe' 
                    width='520' 
                    height='315'
                    src={`https://www.youtube.com/embed/${props.url.slice(-11)}`} />
        </section>
    )
}

export default Video