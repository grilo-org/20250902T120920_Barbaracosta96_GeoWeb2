import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';
import { AuthContext } from '../Context/auth';
import axios from 'axios'; // npm i axios
import 'firebase/auth';
import Conexao from '../Config/conexao';
import Navbar from '../../site/Components/Menu/menu';
export default function Login() {
   

  const [sucesso, setSucesso] = useState('');
  const { setLogado } = useContext(AuthContext);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
 

  function alterarEmail(event) {
    setUsuario(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }
  async function login() {
    const obj = { usuario, senha };
    const res = await axios.post(Conexao.api  + 'Login.php', obj);
    SalvaUser();
    if (res.data.success === 'Dados Incorretos!') {
      setLogado(false);
      setSucesso('N');

    } else {
      setLogado(true);
      setSucesso('S');
      
      
    }
    
}




function SalvaUser(){
  localStorage.usuario = document.getElementById ("floatingInput").value;
  }
  

  return <div className="d-flex align-items-center text-center form-container">
<Navbar/>
    <form className="form-signin">
      <div className="form-floating">
       
        <h2 className="Tnormal">Login</h2>
      </div>
      <div className="form-floating">
        <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" name='usuarioLogin' placeholder="E-mail" />
        <label htmlFor="floatingInput">Usuário</label>
      </div>

      <div className="form-floating">
        <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label htmlFor="floatingPassword">Senha</label>
      </div>

      <button onClick={login} class="btnlogin">Acessar</button>
       {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null} 
   
      {sucesso === 'S' ? <Redirect to='/app/home'   /> : null   } 

      <div className="login-links mt-5">
        <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
        {/* <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <a className="mt-5 mb-3 text-muted" href="https://shcompanytechnology.com/" >Desenvolvido &copy; SH Company Tecnology</a>
      <div>
        <img className="mb-5" src="../Images/Logo.jpg " alt="Perfil" />
      </div>
    </form>

  </div>
}

