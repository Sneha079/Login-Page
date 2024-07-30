import React from 'react'

import './Register.css'
import { useState } from 'react'
import toast,{ Toaster } from 'react-hot-toast'
const Register = () => {
    const[Fname, setFname]=useState("");
    const[Lname, setLname]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    
    

  const handleSubmit =(e) =>{
    e.preventDefault();
   console.log("Fname:", Fname);
   console.log("Lname:", Lname);
   console.log("Email:", email);
   console.log("password:", password);
   setFname("");
   setLname("");
   setEmail("");
   setPassword("");
   
   
   if(Fname && Lname && email && password)
     {
        toast.success("Sussessfully Submited");
     }
    
     else
     {
        if(!Fname){
            toast.error("First name is required")
            return;
        }
           
        else if(!Lname){
            toast.error("Last name is required")
            return;
        }
           
         else if(!email){
            toast.error("Email id is required")
            return;
         }
            
        else if(!password){
            toast.error("Password is required") 
            return;
        }
     }

     console.log("executed");

    }

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <form className='form1' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div  className='name'>
            <label> FirstName: </label>
            <input type='text' placeholder='first name' className='input' onChange={(e) => setFname(e.target.value)}></input>
            <label>LastName: </label>
            <input type ='text' placeholder='Last Name' className='input' onChange={(e) => setLname(e.target.value)}></input>
        </div>
        <div className='emailfild'>
            <label>Email Id: </label>
            <input type='email' placeholder='email' className='input'onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='passwordfild'>
            <label>Password: </label>
            <input type='password' placeholder='password' className='input'onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='button'>
        <button className='but'>Sign up</button>
        <button className='but'>Login</button>
        </div>
        
        

    </form>
    </>
  )
}

export default Register