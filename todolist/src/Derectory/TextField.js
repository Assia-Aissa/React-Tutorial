export default function TextField(props){
    console.log(props)
    return(
    <>
     <div>Enter a value:</div>
    <label>{props.inputLabel}</label>
    <input name={props.inputName} type='text'/>
     <div>{props.children}</div>
    </>)
}