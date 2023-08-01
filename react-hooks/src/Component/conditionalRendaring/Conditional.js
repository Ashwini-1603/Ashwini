import React,{useState} from "react";
import "./condotional.css"
export default function Conditional(){
const[check,setCheck]=useState(Math.floor(Math.random() * 4))
    console.log("value of ranndom"+check)
    return(
    <div className="conditionalcontrol">
        {
       check==0 ?<div className="option1"><h1>i got {check} as a Random Number</h1></div>:check==1 ?<div className="option2"><h1>i got {check} as a Random Number</h1></div>: check==2 ?<div className="option3"><h1>i got {check} as a Random Number</h1></div>:<div className="option4"><h1>i got {check} as a Random Number</h1></div>   
        }
    </div>

    )
}