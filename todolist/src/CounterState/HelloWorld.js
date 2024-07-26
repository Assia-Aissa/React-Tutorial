



export default function HelloWorld({lastName}){
  const  componentDidMount=()=>{
        console.log('component mounted')
    }

    const componentDidUpdate=(prevProps,prevState,snapshot)=>{
            console.log('component updated')
    }

    const componentwillUnmount=()=>{
        console.log("component is dead")
    }
   
    return(<h1>hello assia --| {lastName}</h1>)
}


