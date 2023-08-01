import abc from "./abc.jpg";
import React,{useState}from  "react";
export default function Magic(){
    const[visibility,setVisibility,]=useState(true)
    const hideImg=()=>{
setVisibility(!visibility)
    }
    return(
        <div>
            <div>{
               visibility?<img src={abc} alt="magic" />:null
                }  
            </div>
            <div>
                <button onClick={hideImg}>Clck Me and See Magic</button>
            </div>
        </div>
    )
}