import React from 'react'

const DisplayColor = (props) => {
    const {arrayColorSize}=props;
   
    return (
        <div>
            {arrayColorSize.map((box, index)=>(<div key={index} style={{display: "inline-block", margin: "20px", height:box.sizeBox, width: box.sizeBox, backgroundColor: box.color}}> </div>))
            }
        </div>
    )
}

export default DisplayColor;

