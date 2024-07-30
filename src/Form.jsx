import React, { useState } from 'react'
import './Form.css'
import Register from './Register';
const Form = () => {

    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Email:' , email);
        console.log('password', password);
        setEmail("");
        setPassword("");
    }

    const handle=()=>{
        
    }

  return (

    <form className='form'  onSubmit={handleSubmit}>
        <div className='firstName'>
        <label>Email address: </label>
        <input type='email'  value={email} placeholder='enter email' className='emailfield' onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        
       <div className='lastName'>
       <label>Password:  </label>
      
       <input type='password' value={password} placeholder='password' className='emailfield' onChange={(e) => setPassword(e.target.value)} ></input></div>
       <div className='button'>
       <button  className='edit' >Submit</button> 
       <button className='edit' onClick={handle}>New user</button>
       </div>
      
    </form>
  )
}

export default Form