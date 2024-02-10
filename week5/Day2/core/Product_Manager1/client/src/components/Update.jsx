import React, {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [title, setTitle]=useState("");
  const [price, setPrice]=useState("");
  const [description, setDescription]=useState("");
  const [allProducts, setAllProducts]=useState([]);


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

  const UpdateHandler= (e) =>{
    e.preventDefault()
    axios.patch(`http://localhost:8000/api/products/edit/${id}`, {
      title, price, description
    })
      .then((res) =>{
        console.log(res.data);
        nav("/");
      
      })
    .catch((err)=> {console.log(err)})
  }

  return (
    <div>
      Update
      <form  className='formP' onSubmit={UpdateHandler}>
        <div className='form-fields'>
          <label>
            Title
          </label>
          <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} name='title'  />   
        </div>
        <div className='form-fields'>
          <label>
            Price
          </label>
          <input  type='number' value={price} onChange={(e)=>{setPrice(e.target.value)}} name='price'  />   
        </div>
        <div className='form-fields'>
          <label>
            Description
          </label>
          <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} name='description'  />   
        </div>
        <button className='btn' type='Submit'> Update Product </button>
      </form>

    </div>
  )
}

export default Update