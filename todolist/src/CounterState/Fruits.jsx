import React, { useState } from 'react'

function Fruits() {
  const [fruit, setFruit]=useState('')

  const [fruitList,setFruitList]=useState([])


    const displayFruits=()=>fruitList.map((fruit ,index)=><li key={index}> {fruit}</li>)

    const handleInput=()=>{

      const fruitValue=document.querySelector('#fruit').value
      setFruit(fruitValue)
    }
  //to add we work with mutation like -> expret operator
    const handleAddFruit =(e)=>{
    e.preventDefault()

  
    setFruitList([...fruitList, fruit])

   }
  return (
    <>
    <span>
        <form>
            <input type="text" onChange={handleInput} id="fruit"/>
            <input type="submit" onClick={handleAddFruit}value="add fruit"/>
        </form>
    </span>
    <h1>Fruits List:</h1>
    <ul>
        {displayFruits()}
    </ul>
    </>
  )
}

export default Fruits