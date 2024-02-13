import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = (props) => {
    const [author, setAuthor] = useState(null)
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})
    const [errorsID, setErrorsID] = useState("")

    const { id } = useParams()
    const nav = useNavigate()

    const UpdateHandler = (e) => {
        e.preventDefault()
        console.log("it is working")
        
        axios.patch(`http://localhost:8000/api/authors/${id}`, {name:name})
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
            .catch(err => { setErrors(err.response.data.errors) })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
              
            })
            .catch(err => {
                console.log(err)
                setErrorsID("There is No Author with this ID: " + id)
            })
    }, [id])
    return (
        <div>
            {
                errorsID ?
                <h4 className='mb-4 mt-4'>{errorsID}, if you want to add an author clik here <Link to={"/authors/new"}> Add Author
                </Link></h4>
                :null

            }
            <div className="header  mx-auto d-flex justify-content-around mt-5 mb-5">
            <h1 className='text-primary'> Favorits Authors</h1>
            <Link to={"/"} > Home </Link>
            </div>

            <form className="mt-5 p-5 w-50 mx-auto bg-light border rounded-5" onSubmit={UpdateHandler}>
              
                <h4 className='text-warning mb-5'>Edit {name}</h4>
                <div className='form-group'>
                    <label>name</label>
                    <input type="text" className="form-control w-75 mx-auto" value={name} onChange={e => { setName(e.target.value) }} placeholder="Name"/>
                </div>
                {
                    errors.name ?
                        <p className='text-danger'>{errors.name.message}</p>
                        : null
                }
               
                <div className='mt-5 '>
                    <button className='btn btn-outline-warning'>Submit</button>
                    <button className='btn btn-outline-primary' onClick={() => nav("/")}>Cancel</button>

                </div>

            </form>


        </div>
    )
}

export default Update