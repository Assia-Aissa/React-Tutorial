import React from 'react'
import { useState } from 'react'
function Formulaire() {


const[name,setName]=useState('')
const[age,setAge]=useState('') 

const handleNameInputChange=()=>{
        const name= document.querySelector('#name').value
        setName(name)
};

const handleAgeInputChange=()=>{
  const name= document.querySelector('#age').value
  setAge(name)
};
const handleSubmit=(e)=>{
 e.preventDefault()
  console.log({name,age})
}
  return (
    <div><h1>Formulaire</h1>
    <form >
        <input type="text" id='name' onChange={handleNameInputChange} placeholder='Name'/>
        <input type="number" id='age' onChange={handleAgeInputChange} placeholder='Age'/>
        <input type="submit" onClick={handleSubmit} value="submit"/>
    </form>
    
    </div>
  )
}

export default Formulaire