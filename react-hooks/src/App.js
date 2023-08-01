import Footer from './Component/footer/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Component/head/header';
import Magic from './Component/ToggleMagic/magic';
import Home from './Component/Router/home/home';
import UseMemo from './Component/hooks/useMemo/UseMemo';
import Blog from './Component/Router/blog/blog';
import UniqueKey from './Component/UniqueKey/uniqueKey';
import BootstrapForm from './Component/Section/loginForm/BootstrapForm';
import UseEffect from './Component/hooks/useEffect/UseEffect';
import Conditional from './Component/conditionalRendaring/Conditional';
import Contact from './Component/Router/contact/contact';
import UseState from './Component/hooks/useState/useState';
import React,{useEffect,useState} from 'react';
import UserEffect from './Component/hooks/useEffect/UseEffect';
import UseRef from './Component/hooks/useRef/UseRef';
import LiftingStateUp from './Component/liftingStateUp/LiftingStateUp';
import Routing from './Component/Router/Routing';

function App() {
  function LiftUp(dat){
    alert(dat)
  }
  const[data,setData]= useState(10);
   const[count,setCount]= useState(100);
  return (
    <div className="App">
     <Routing />
      <div>
      <Conditional/>
      <UseMemo/>
      <Magic/>
      <UseRef/>
      <UniqueKey/>
      <BootstrapForm/>
      <UseState/>
      </div>
      <Footer/>
     <div>
      <UserEffect data={data} count={count}/>
     <h1>i am in use Effect</h1>
           <button onClick={()=>{setData(data+1)}}>update data</button>
           <button onClick={()=>setCount(count+1)}>update count</button>
     </div>
     <LiftingStateUp data={LiftUp}/>
    </div>
    
  );
}
export default App;
