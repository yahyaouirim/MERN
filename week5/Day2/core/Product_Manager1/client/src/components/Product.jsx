import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div className='card text-info mt-5 w-50 mx-auto shadow p-3 mb-5 bg-body-tertiary rounded'>
            {
                oneProduct ?
                    <>
                        <h2 className='card-title'>Name of Product: {oneProduct.title} </h2>
                        <h3>The Price: {oneProduct.price}</h3>
                        <p className='card-text'>The Description: {oneProduct.description}</p>
                    
                    </>
                    :<h3> Loading ...</h3>
            }
        </div>
    )
}

export default Product