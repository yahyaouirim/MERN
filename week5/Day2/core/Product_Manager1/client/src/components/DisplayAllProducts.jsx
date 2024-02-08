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
    return (
        <ul style={{listStyleType:"none"}}>DisplayAllProducts
            {allProducts.map((prod,index) =>(
                
                <li key={index}><Link to={`/products/${prod._id}`}>{prod.title}</Link> </li>
                
            ))}
        </ul>
    ) 
}

export default DisplayAllProducts