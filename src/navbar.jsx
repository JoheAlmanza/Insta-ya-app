import './Apps.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">InstaYa</a>
    <div  id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/registro">Registrate</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/pedidos">Pedidos</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
  
</div>



    )
}

export default Navbar