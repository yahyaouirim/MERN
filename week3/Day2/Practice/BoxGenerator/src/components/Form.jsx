import React, {useState} from 'react'

const Form = (props) => {
    // props handel color ans size to app
    const {arrayColorSize, setArrayColorSize}=props;
    //state of color and size
    const [sizeBox, setSizeBox]=useState(50);
    const [color, setColor]=useState("");
    //function change color and size of square form
    const handelSubmit = (e) =>{
        e.preventDefault();
        setArrayColorSize([...arrayColorSize, {color:color, sizeBox:sizeBox+ "px" }]);
        setColor("");
        setSizeBox(50);
    }

    return (
        <div className='container bg-dark text-light border border-2 rounded-4 p-3 w-100'>
            <form onSubmit={handelSubmit} className='form-inline'>
                <div className='form-group p-3 mx-auto'>
                    <label htmlFor="color" className='form-label' style={{fontSize:'2rem', fontWeight:'bolder'}}>Color</label>
                    <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} name="color"  className='form-control'/>
                </div>
                <div className='form-group p-3 mx-auto '>
                    <label htmlFor="sizeBox" className='form-label'>Type the <span style={{fontSize:'2rem', fontWeight:'bolder'}}>size</span> of the box:</label>
                    <input type="text"  value={sizeBox} name="sizeBox"  onChange={(e)=> setSizeBox(e.target.value)} className='form-control' />
                </div>
                <div className="form-group p-3 mx-auto">   
                    <input type="submit" value="Add" className='btn btn-primary p-2 w-100' />
                </div>

            </form>
            {/* ********** to display color and size box
            <div> <p>{arrayColorSize.map(item=> <p>  {item.color}{item.sizeBox} </p>)}</p></div> */}

        </div>
    )
}

export default Form;