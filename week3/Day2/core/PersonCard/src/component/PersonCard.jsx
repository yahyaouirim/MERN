import React from 'react';
const PersonCard = (props) => {
    return(
        <div>
            <h1 style={{color:"greenyellow"}}>{props.lastName} ,{props.firstName}</h1>
            <p style={{fontSize:"1.5rem", color:"#006400"}}>Age: {props.age}</p>
            <p style={{fontSize:"1.5rem", color:"#006400"}}>Hair Color: {props.hairColor}</p>
        </div>
    );
}
export default PersonCard;

