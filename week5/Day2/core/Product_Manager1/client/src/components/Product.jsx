import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Product = (props) => {
    const { id } = useParams();
    const nav = useNavigate();
    const [allProducts, setAllProducts]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setAllProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const deleteOneProduct =()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((res) =>{
            console.log("this Product has been deleted", res.data);
            nav("/");
        })
        .catch((err) =>{
            console.log(err)

        })
    }
    return (
        <div className='card text-info mt-5 w-50 mx-auto shadow p-3 mb-5 bg-body-tertiary rounded'>
            {
                allProducts ?
                    <>
                        <h2 className='card-title'>Name of Product: {allProducts.title} </h2>
                        <h3>The Price: {allProducts.price}</h3>
                        <p className='card-text'>The Description: {allProducts.description}</p>
                        <Link to={"/products/edit/"+allProducts._id}>Update </Link>
                        <button  onClick= {deleteOneProduct}>Delete</button>

                    
                    </>
                    :<h3> Loading ...</h3>
            }
        </div>
    )
}

export default Product