import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarManutencao.css';
// import { AuthContext } from '../../Context/auth';

function navbarManutencao() {

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
            <Link to="/app/DashBoardManutencao" className="nav-link logout" aria-current="page" >DashBoard  </Link>
          </li>
     
          <li className="nav-item">
            <Link to="/app/AberturaOSManutencao" className="nav-link logout" aria-current="page" >Abertura OS</Link>
          </li>
          <li className="nav-item">
            <Link to="/app/ProgramacaoManutencao" className="nav-link logout" aria-current="page" >Programação </Link>
          </li>
          <li className="nav-item">
            <Link to="/app/CadastroDeEquipamentos" className="nav-link logout" aria-current="page" >Cadastro De Equipamentos</Link>
          </li>
              
          <li className="nav-item">
            <Link to="/app/RegInternoManutencaoCorretivaPreventivaModal" className="nav-link logout" aria-current="page" >Manutenção Corretiva Preventiva </Link>
          </li>
        
          <li className="nav-item ms-auto">
            <a href="/#" className="nav-link logout" aria-current="page" >Sair</a>
          </li>

 

         

        </ul>
      </div>
      
    </div>
  </nav>;
}

export default navbarManutencao;