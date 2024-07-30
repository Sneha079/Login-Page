
import './App.css'
import Login from './Login'
import Form from './Form'
import { useState } from 'react'
import Register from './Register'


function App() {




  return (
    <>
    <div className='login'> 
   <Login/>
    <Form />
     </div>
<div className='register'>
<Register/>
</div>
   
   
    
    </>
  )
}

export default App
