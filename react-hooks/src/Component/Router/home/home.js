import "./home.css";
import home_img from "./14346092-care-for-beautiful-woman-legs.webp"

export default function Home(){
    return(
        <div>
            
            <h1 className="head-color">inside home</h1>
            <img className="image_main" src={home_img}/>
        </div>
    )
}