import React,{useEffect}  from "react";
function UserEffect(props){
    useEffect(()=>
    {
        alert("i am in use effect")
     },[props.count]);
return (
<div>
<h1>count:{props.count}</h1>
<h1>data :{props.data}</h1>
</div>
)
}
export default UserEffect;