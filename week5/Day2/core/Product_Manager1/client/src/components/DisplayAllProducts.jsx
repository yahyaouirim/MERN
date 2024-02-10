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
        <ul style={{listStyleType:"none"}}>DisplayAllProducts
            {allProducts.map((prod,index) =>(
                
                <li key={index}>
                    <Link to={`/products/${prod._id}`}>{prod.title}
                    </Link> 
                    <button onClick={(e)=>{deleteFilteredProduct(prod._id)}}>Delete
                    </button>

                </li>
                
            ))}
        </ul>
    ) 
}

export default DisplayAllProducts