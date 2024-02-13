import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Product = (props) => {
    const { id } = useParams();
    const nav = useNavigate();
    const [allProducts, setAllProducts] = useState([])

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

    const deleteOneProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                console.log("this Product has been deleted", res.data);
                nav("/");
            })
            .catch((err) => {
                console.log(err)

            })
    }
    return (
        <div className='card text-dark mt-5 w-25 mx-auto shadow p-4 gap-3 mb-5 bg-white rounded'>
                {
                    allProducts ?
                        <>
                            <h2 className='card-title text-primary'> {allProducts.title} </h2>
                            <h3>The Price: {allProducts.price}</h3>
                            <p className='card-text'>The Description: {allProducts.description}</p>
                            <div className='container d-flex justify-content-center flex-between gap-4'>
                                <Link className='btn btn-outline-warning' to={"/products/edit/" + allProducts._id}>Update </Link>

                                <button className='btn btn-outline-danger' onClick={deleteOneProduct}>Delete</button>
                                <Link className='btn btn-outline-primary' to="/" >Home</Link>

                            </div>


                        </>
                        : <h3> Loading ...</h3>
                }
            </div>
    )
}

export default Product