import React, { useState, useEffect } from 'react';

function Count({initialValue,step}) {
    //Hooks
    //useState()
    //useEffect()
    const [count,setCount] = useState(initialValue)
    const [time,setTime] =useState(new Date())
    let timer=null
    //useEffect=component did mount=component didupdate =component will unount
    useEffect(()=>{
        console.log("component mounted!!")
     
        timer =setInterval(()=>{
            setTime(new Date())

        },1000)
   
        return ()=>{
            clearInterval(timer)
        }
    },[]);
    //this useeffect without [] means without dependencies so it execute every time 
    useEffect(()=>{
        console.log("after render")
       
    });
    useEffect(()=>{
        console.log("component changed")
        //the dependencies here between []
    },[count]);
  return (
    <div>
        Date :<span>{time.toString()}</span>
        <span>
            <button onClick={()=>{
                setCount(prevState=>{
                    return prevState +step
                })
            }}>Clik to add!!</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset !!</button>
            <h5>there is {count} secoundes</h5>
        </span>
    </div>
  )
}

export default Count