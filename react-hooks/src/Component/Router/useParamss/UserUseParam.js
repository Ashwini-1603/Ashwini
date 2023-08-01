import { useParams } from "react-router-dom"
export default function UserUseParam(){
  const{name}=  useParams();
console.warn(name)
  return(
    <>
        <h1>this is {name} page</h1>
    </>
  )  
}