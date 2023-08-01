import "./Header.css";
import Button from 'react-bootstrap/Button';

import Login from "../Section/loginForm/Login";
import React,{useState} from "react";
import Layout from "../layout/Layout";
function Header()
{
const[data,setData]=useState("FeetMeFive")
const[display,setDisplay]=useState(true)
const changeData=()=>{
    setData("vertical")
    setDisplay(!display)
}
    return(
            <div >
                <div className="Head-mainn-container">
                 <h1 className="font-link">{data}</h1>
                    <Layout/>
                    <Button onClick={changeData} variant="primary">Primary</Button>
                </div>
                {/* use to disable the form */}
                {display? <Login/>:null}
            </div>
           )
}
export default Header;