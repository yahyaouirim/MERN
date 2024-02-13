import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const DisplayAllProducts = (props) => {
    const {allProducts, setAllProducts}=props
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res.data)
            setAllProducts(res.data)
        })
        .catch((err) =>{
            console.log("Something went wrong", err)
        })
    }
    ,[])
     // deleteFiltredProduct
    const deleteFilteredProduct = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
        .then((res => {
            console.log(" the Product has been deleted", res.data)
            const filteredProduct = allProducts.filter((eachProduct) =>{
            return eachProduct._id !== deleteId
            })
            setAllProducts(filteredProduct)
                }))
        .catch((err) =>{
            console.log("Something went wrong", err)
        })
    }
   
    return (
        <div className="mx-auto w-100 d-flex justify-content-center align-item-center gap-3 flex-wrap mt-5">
            {allProducts.map((prod,index) =>(
                
                <div className="card border border-rounded-3 bg-white p-3 d-flex gap-3 shadow mb-5" key={index}>
                    <Link to={`/products/${prod._id}`}>{prod.title}
                    </Link> 
                    <button className='btn btn-outline-danger' onClick={(e)=>{deleteFilteredProduct(prod._id)}}>Delete
                    </button>
                    <Link className='btn btn-outline-warning' to={`/products/edit/${prod._id}`}>Edit</Link>


                </div>
                
            ))}
        </div>
    ) 
}

export default DisplayAllProducts