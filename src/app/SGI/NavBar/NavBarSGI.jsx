import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarSGI.css';
// import { AuthContext } from '../../Context/auth';

function navbarSGI() {

  // const { setLogado } = useContext(AuthContext);

  // function Logout() {
  //   setLogado(false);
  //   localStorage.removeItem("logado");
  // }


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
            <Link to="/app/home" className="nav-link logout" aria-current="page" >Menu Principal</Link>
          </li>
          <li className="nav-item">
            <Link to="/app/DashBoardSGI" className="nav-link logout" aria-current="page" >Dashboard</Link>
          </li>
        
          <li className="nav-item">
            <Link to="/app/Registrodenaoconformidade" className="nav-link logout" aria-current="page" >Registro de NC</Link>
          </li>

          <li className="nav-item">
            <Link to="/app/RncDetalhado" className="nav-link logout" aria-current="page" >Tratamento de NC </Link>
          </li>

          <li className="nav-item">
            <Link to="/app/PlanoDeAcoes" className="nav-link logout" aria-current="page" >Plano de Ações </Link>
          </li>

          <li className="nav-item">
            <Link to="/app/CadastroDeResponsaveis" className="nav-link logout" aria-current="page" >Cadastro de resposánveis </Link>
          </li>

                        
          <li className="nav-item ms-auto">
            <a href="/#" className="nav-link logout" aria-current="page" >Sair</a>
          </li>



          <li className="nav-item">
            <Link to="/app/RncxTeste" className="nav-link logout" aria-current="page" >TESTE RNC </Link>
          </li>

         

        </ul>
      </div>
      
    </div>
  </nav>;
}

export default navbarSGI;