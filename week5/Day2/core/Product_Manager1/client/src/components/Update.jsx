import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [errors, setErrors] = useState({})


  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setAllProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const UpdateHandler = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8000/api/products/edit/${id}`, {
      title, price, description
    })
      .then((res) => {
        console.log(res.data);
        nav("/");

      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div className=' create'>

      <form className='formP mt-3 mb-3' onSubmit={UpdateHandler}>
        <h3 className='text-warning' > Update {title}</h3>
        <div className='form-fields'>
          <label>
            Title
          </label>
          <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} name='title' />
        </div>
        {
          errors.title ?
            <p className='text-danger'>{errors.title.message}</p>
            : null
        }
        <div className='form-fields'>
          <label>
            Price
          </label>
          <input type='number' value={price} onChange={(e) => { setPrice(e.target.value) }} name='price' />
        </div>
        {
          errors.price ?
            <p className='text-danger'>{errors.price.message}</p>
            : null
        }
        <div className='form-fields'>
          <label>
            Description
          </label>
          <input type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} name='description' />
        </div>
        {
          errors.description ?
            <p className='text-danger'>{errors.description.message}</p>
            : null
        }
        <div className="d-flex flex-between gap-3">
          <button className='btn btn-outline-warning' type='Submit'> Update</button>
          <Link className='btn btn-outline-primary' to="/" >Home</Link>

        </div>
      </form>

    </div>
  )
}

export default Update