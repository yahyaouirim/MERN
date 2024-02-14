import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})

    const nav = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("it is working")
        axios.post("http://localhost:8000/api/authors/new", {name:name})
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/authors")
            })
            .catch(err => { setErrors(err.response.data.errors) })
    }



    return (
        <div> 
            <div className=" mx-auto d-flex justify-content-around  align-item-center shadow p-3 mb-5 bg-white rounded">
                <div><h1 className='text-primary fst-italic'> Favorits Authors</h1></div>
                <div><Link  className="fs-2 fst-italic" to={"/authors"} > Home </Link></div>
            </div>

            <form className="  w-50 p-4 mt-5 mx-auto bg-light shadow-lg  mb-5 bg-body-tertiary rounded-5" onSubmit={SubmitHandler}>
                <h4 className='text-info text-start'> Add a new Author</h4>
                <div class="form-group">
                    <label className='text-primary fs-2'>Name:</label>
                    <input type="text" className="form-control w-75 mx-auto mt-3" value={name} onChange={e => { setName(e.target.value) }} placeholder="Name"/>
                </div>
                {
                    errors.name ?
                        <p className='text-danger'>{errors.name.message}</p>
                        : null
                }
              
              <div className='mt-5 d-flex justify-content-around'>
                    <button className='btn btn-outline-primary'>Submit</button>
                    <button className='btn btn-outline-warning' onClick={() => nav("/authors")}>Cancel</button>

                </div>
            </form>
        </div>
    )
}

export default Create