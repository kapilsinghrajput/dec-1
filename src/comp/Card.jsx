import React from 'react'


const Card = (props) => {
  return (
    <>
     <div className="cards">
            <img src={props.img} alt="" />
            <h2>{props.planet}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia deserunt fugiat sequi quos! Exercitationem excepturi suscipit delectus! Similique, commodi eius.</p>
            <button>more</button>
        </div>

    </>
       
    
  )
}

export default Card
