
import React from 'react'
import { useState } from 'react';
function Counter() {
    
const [Count , setCount]=useState(0);
    let isCount = () =>{
        setCount(Count+1)
    }
  return (
    <div>
        <h3>Count={Count}</h3>
        <button onClick={isCount}> Increse count</button>;
    </div>
  )
}

export default Counter