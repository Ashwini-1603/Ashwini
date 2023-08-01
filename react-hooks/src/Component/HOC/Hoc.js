import React,{useState,useRef} from "react";
export default function Hoc(){
    return(
        <>
        <h1>Higher Order Component</h1>
        <Abc cmp={Counter}/>
        </>
    )
}

function Abc(props){
return<h1><props.cmp/></h1>
}

function Counter(){
    const[count,setCount]=useState(500)
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </>
    )
}