import React from 'react'
import HelloWorld from './HelloWorld'
import { useState } from 'react'
function Toggle() {
    const[Name, setName]=useState(true);

    const handleDisplayName= () =>{
        setName(prevState=>!prevState);
        
        };
    
    console.log(Name.toString())
  return (
    <div>
        {Name.toString()}
        <button onClick={handleDisplayName}>Toggle Name</button>

       {Name?
       <HelloWorld lastName='El Assia'/>
       :
       undefined

}
    </div>
  );

}

export default Toggle