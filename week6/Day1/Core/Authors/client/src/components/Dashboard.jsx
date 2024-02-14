import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Dashboard = () => {

    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                console.log(res.data);
                const sortedAuthors = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setAuthors(sortedAuthors);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const deleteMe = (deleteId) => {
        axios.delete("http://localhost:8000/api/authors/" + deleteId)
            .then(res => {
                //----------------
                console.log("OK this Author has been Deleted ☠️", res.data)
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== deleteId
                })
                setAuthors(filteredAuthors)
            })
            //----------------
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div>
             <div className=" mx-auto d-flex justify-content-around  align-item-center shadow p-3 mb-5 bg-white rounded">
                <div><h1 className='text-primary fst-italic'> Favorits Authors</h1></div>
                <div><Link  className="fs-2 fst-italic btn btn-outline-primary" to={"/authors/new"} > Add New Author </Link></div>
            </div>
            <div className='container w-75 mt-5 d-flex justify-content-center'>
                <table className='table table-hover table-striped'>
                    <thead className='fs-3 mt-3 bg-black text-light'>
                        <th>Authors</th>
                        <th>Actions Available</th>
                        <th></th>
                    </thead>
                    <tbody className='fs-4'>
                        {
                            authors.map((oneAuthor) => {
                                return (
                                    <tr key={oneAuthor._id}>
                                        <td>{oneAuthor.name}</td>


                                        <td className='d-flex justify-content-around'>
                                            <span><Link className='btn btn-outline-warning' to={`/authors/${oneAuthor._id}/edit`} >Edit </Link></span>
                                            <span><button className='btn btn-outline-danger' onClick={() => { deleteMe(oneAuthor._id) }}>Delete ❌</button></span>
                                        </td>

                                       
                                    </tr>
                                )
                            })



                        }
                    </tbody>
                </table>

            </div>
          

        </div>
    )
}

export default Dashboard