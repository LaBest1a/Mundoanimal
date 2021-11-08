import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar=()=>{
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Link className="navbar-brand" to="/home">
         <img className="mx-2" src={ logo } alt="Mundo Animal" width="35px"/>
         <span>mundo animal</span>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/posts">Sube tu Mascota</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/users">Busqueda</Link>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
      )
}
export default Navbar;