import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./layout.css";
const Layout = () => {
  return (
    <>
    
      <nav className="nav_main_controls">


        <ul className="nav-controls">
          <li>
            <NavLink className="textDe" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="textDe" to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink className="textDe" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="textDe" to="/userUseParam/ashu">ashu</NavLink>
          </li>
          <li>
            <NavLink className="textDe" to="/userUseParam/adam">adam</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;