import React,{useState,useMemo} from "react"
export default function UseMemo(){

    const[count,setCount]=useState(0);
    const[item,setItem]=useState(10);
    const multiCountMemo=useMemo(function multiCount(){
       alert("multicount");
        return count*5;
    },[item])

    
    return(
        <div>
            <h1>useMemo</h1>
            <div>
                <span>count:{count}</span>
                <span>item:{item}</span>
                <h1>{multiCountMemo}</h1>
                <button onClick={()=>setCount(count+1)}>check count</button>
                <button onClick={()=>setItem(item+1)}>check item</button>
           
            </div>
        </div>
    )
}