import React from 'react'
import { useState } from 'react'
//Create a form like the following wireframe with a single React Component called "Form" and hooks. Then, show in real time, the data that is being inputted into the form below.


const ValidationForms = () => {
    const [firstname, setFirstname]= useState("");
    const [lastname, setLastname]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmP, setConfirmP]= useState("");

    return (
        <div className="container d-flex gap-5 mx-auto p-2">
            <div className="container rounded-4 border border-2 col-6 p-3 bg-dark text-light">
                <form > 
                    <div className="mb-3">
                        <label htmlFor="firstname" class="form-label">First Name: </label>
                        <input type="text" class="form-control" name="firstname" onChange={ (e) =>setFirstname(e.target.value) } value={firstname} id="firstname"/>
                    </div>
                    { (firstname.length<3) && (firstname.length>0)  ? <p style={{backgroundColor:"red"}}>First Name must be at least 3 characters</p>:null}

                    <div className="mb-3">
                        <label htmlFor="lastname" class="form-label">Last Name: </label>
                        <input type="text" class="form-control" name="lastname" onChange={ (e) =>setLastname(e.target.value) } value={lastname} id="lastname"/>
                    </div>
                    { (lastname.length<3) && (lastname.length>0)  ? <p style={{backgroundColor:"red"}}>Last Name must be at least 3 characters</p>:null}

                    <div className="mb-3">
                        <label htmlFor="email" class="form-label">Email: </label>
                        <input type="email" class="form-control" name="email" onChange={ (e) =>setEmail(e.target.value) } value={email} id="email"/>
                    </div>
                    { (email.length<5) && (email.length>0)  ? <p style={{backgroundColor:"red"}}>Email must be at least 5 characters</p>:null}

                    <div className="mb-3">
                        <label htmlFor="password" class="form-label">Password: </label>
                        <input type="password" class="form-control" name="password" onChange={ (e) =>setPassword(e.target.value) }  value ={password} id="password"/>
                    </div>
                    { (password.length<8) && (password.length>0)  ? <p style={{backgroundColor:"red"}}>Password must be at least 8 characters</p>:null}

                    <div className="mb-3">
                        <label htmlFor="confirmP" class="form-label">Confirm Password: </label>
                        <input type="password" class="form-control" name="confirmP" onChange={ (e) =>setConfirmP(e.target.value) } value={confirmP} id="confirmP"/>
                    </div>
                    { confirmP !== password && confirmP.length>0 ? <p style={{backgroundColor:"red"}}>Password must match</p>:null}

                    
                </form>
            </div>
            <div className="card col-6 p-2 bg-dark text-light">
                <div className="header ">
                    <h2> Your Form Details</h2>
                    <hr />
                </div>
                <div className="body-card ">
                    <p>First Name: {firstname}</p>
                    <p>Last Name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password} </p>
                    <p>Confirm Password: {confirmP} </p>
                </div>

            </div>
        </div>
    )
}

export default ValidationForms