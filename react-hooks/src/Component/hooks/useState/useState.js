import React,{useState} from "react"
export default function UseState(){
    const[email,setEmail]=useState("ashu@gmail.com");

    const ChangeEmail=()=>{
        setEmail("saurabh@gmail.com")
    }
    return (
        <div>
            <h1>{email}</h1>
            
            <button onClick={ChangeEmail}>click here t change email</button>
        </div>
    )
}