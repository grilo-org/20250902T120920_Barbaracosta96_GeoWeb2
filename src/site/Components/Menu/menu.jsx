import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
function Menu() {
  return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

  <div className="container-fluid">

    <a className="navbar-brand" href="/app/home">
      <img src="/Images/logoGeocontrole.png" alt="" height='50px' />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#testemunho">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#clientes">Clientes</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#footer">Contato</a>
        </li>
       
        <li className="nav-item">
        <Link to="/app/Login" className="nav-link logout1" aria-current="page" >Login</Link>
        </li>
       
      </ul>
    </div>
    
  </div>
</nav>;
}

export default Menu;