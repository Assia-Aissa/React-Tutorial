import React, { Component } from 'react'


export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {counter:0,
            date:undefined
        }
    }
 
 /*  componentDidMount(){
        setInterval(()=> this.setState(
            prevState =>{
                console.log(prevState)
                return {counter : prevState.counter+1}
            }
           
        ),1000)
       
   }*/
  handleClick =()=>{
    console.log(this)
       this.setState(
       prevState =>{
        console.log(prevState)
        return {counter : prevState.counter+1}
    })
  }
  handleResetClick =()=>{
    this.setState( {counter:0}
        /*firstState=>{
            return {counter:0}
        }*/
    )
  }
    render(){
        return <div>
            
            <button onClick={this.handleClick}>Click to encrease</button>
            <h5>hello counter the time is :{this.state.counter} seconds</h5>
            <button onClick={this.handleResetClick}>Restart</button>
            </div>
    }

}