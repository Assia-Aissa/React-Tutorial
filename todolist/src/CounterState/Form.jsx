import React from 'react'
import { useState } from 'react'
function Form({init,step}) {
    //Hook : useState()
    //for example in java const[getter, setter]
    const[count,setCount]=useState(init)
 
    return (
        <div>
            <span>
                <button onClick={()=>{
                    setCount(
                        previous=>{
                            return count + step;
                        }
                    )
                }}>Add</button><br></br>
                Now let's counting:--|{count}|--<br></br>
                <button onClick={()=>{
                    setCount(
                     0
                    )
                }} >Restart</button>
            </span>



        </div>
    )
}

export default Form