import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./home/home";
import Blog from "./blog/blog";
import Contact from "./contact/contact";
import Header from "../head/header";
import UserUseParam from "./useParamss/UserUseParam";

function Routing(){
    return(
        <BrowserRouter>
      <Routes > 
      <Route path="/" element={<Header/>}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
         <Route path="UserUseParam/:name" element={<UserUseParam/>} />
        </Route>
      </Routes> 
    </BrowserRouter> 
    ) 
}
export default Routing;