import React, {useState} from 'react'

function PersonCardResponsive(props) {
    const [age, setAge]= useState(props.age);
    const displayAge= ()=>{setAge(parseInt(age)+1)};
    return (
    <div> 
        <h1 style={{color:"greenyellow"}}>{props.lastName} ,{props.firstName}</h1>
        <p style={{fontSize:"1.5rem", color:"#006400"}}>Age: {age}</p>
        <p style={{fontSize:"1.5rem", color:"#006400"}}>Hair Color: {props.hairColor}</p>
        <button onClick={displayAge }>Birthday Button for {props.firstName} {props.lastName} </button>
    </div>
    )
}

export default PersonCardResponsive;