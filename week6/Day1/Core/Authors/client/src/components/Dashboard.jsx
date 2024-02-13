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
            <div className="header  mx-auto d-flex justify-content-around mt-5">
            <h1 className='text-primary'> Favorits Authors</h1>
            <Link to={"/authors/new"} > Add an Author </Link>
            </div>
            <div className='container w-50 mt-5 d-flex justify-content-center'>
                <table className='table table-hover table-striped'>
                    <thead>
                        <th>Authors</th>
                        <th>Actions Available</th>
                        <th></th>
                    </thead>
                    <tbody>
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