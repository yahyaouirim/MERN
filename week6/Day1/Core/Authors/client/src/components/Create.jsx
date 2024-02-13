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
                nav("/")
            })
            .catch(err => { setErrors(err.response.data.errors) })
    }



    return (
        <div> 
            <div className="header  mx-auto d-flex justify-content-around mt-5 mb-5">
                <h1 className='text-primary'> Favorits Authors</h1>
                <Link to={"/"} > Home </Link>
            </div>

            <form className="  w-50 p-4 mt-5 mx-auto border rounded-5 bg-light" onSubmit={SubmitHandler}>
                <h4> Add a new Author</h4>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control w-75 mx-auto" value={name} onChange={e => { setName(e.target.value) }} placeholder="Name"/>
                </div>
                {
                    errors.name ?
                        <p className='text-danger'>{errors.name.message}</p>
                        : null
                }
              
              <div className='mt-5 d-flex justify-content-around'>
                    <button className='btn btn-outline-warning'>Submit</button>
                    <button className='btn btn-outline-primary ' onClick={() => nav("/")}>Cancel</button>

                </div>
            </form>
        </div>
    )
}

export default Create