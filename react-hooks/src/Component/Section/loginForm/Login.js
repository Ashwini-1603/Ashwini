import  "./login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from "react";
export default function Login(){
    const[name,setName]=useState();
    const[city,setCity]=useState();
    const[checkb,setCheckb]=useState(false);
    const[error,setError]=useState(false);
    const submitData=(event)=>{
      console.log(name+"     "+city+"     "+checkb);
event.preventDefault();
setName("")
    }
    const nameChange=(e)=>
    {
        let item=e.target.value;
    // this is for error if name length is less than three digit
        if(item.length<3)(
            setError(true)
        )
        else{
            setError(false)
        }
        setName(e.target.value)
    }
    return(
    <div>
    <form className="form-control" onSubmit={submitData}>
            <div className="Login_control">
                <label >Name</label>
                <input type="text"value={name} onChange={nameChange}/>{error?<span>enter validate name</span>:null}
                <br/>
                <select onChange={(e)=>setCity(e.target.value)}>
                    <option disabled selected value>city</option>
                    <option>pune</option>
                    <option>mangrulpir</option>
                    <option>washim</option>
                    <option>mahad</option>
                    <option>depul</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setCheckb(e.target.checked)}/><span>Accept term and conditions</span>
            </div>
            <button>submit</button>
        </form>
    </div>
    
    )

}