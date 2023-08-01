import React,{useRef} from "react";
export default function UseRef(){
  
    let inputRef=useRef(null);
    function check(){
        alert("inside the useRef");
        inputRef.current.value="1000";
        inputRef.current.focus();
        inputRef.current.style.color="red";
    }
    return(
        <div>
            <h1>UseRef</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={check}>handle input</button>
        </div>
        
    )
}