import React from 'react'

function Events() {
    const handleClick=() =>{
        alert("Boom !!")
    };
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Events