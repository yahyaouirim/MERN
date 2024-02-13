import React, { useState } from 'react'
import axios from 'axios'
import DisplayAllProducts from './DisplayAllProducts'

const Form = (props) => {
  const [allProducts, setAllProducts] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState({})

  const handelSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/products", {
      title, price, description
    })
      .then((res) => {
        setAllProducts([...allProducts, res.data])
        console.log(res.data)
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch(err => {
        setErrors(err.response.data.errors)
      })
  }
  return (
    <div>
      <div className='create'>
        <header>
          Product Manager
        </header>
        <form className='formP' onSubmit={handelSubmit}>
          <div className='form-fields'>
            <label>
              Title
            </label>
            <input type='text' onChange={(e) => { setTitle(e.target.value) }} name='title' value={title} />
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
            <input type='number' onChange={(e) => { setPrice(e.target.value) }} name='price' value={price} />
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
            <input type='text' onChange={(e) => { setDescription(e.target.value) }} name='description' value={description} />
          </div>
          {
            errors.description ?
              <p className='text-danger'>{errors.description.message}</p>
              : null
          }
          <button className='btnCreate' type='Submit'>Create</button>
        </form>
      </div>
      <div className='display'>
        <DisplayAllProducts allProducts={allProducts} setAllProducts={setAllProducts} />
      </div>
    </div>
  )
}

export default Form