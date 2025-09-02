import Navbar from '../NavBar/NavBarSGI';
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import moment from 'moment';
import './CadastroDeResponsaveis.css';
import { Redirect } from 'react-router-dom';


export default function CadastroDeResponsaveis(){

    const[setor,setSetor]=useState();
    const[nome,setNome]=useState();
    const[email,setEmail]=useState();
    const[telefone,setTelefone]=useState();

    const[setor2,setSetor2]=useState();
    const[nome2,setNome2]=useState();
    const[email2,setEmail2]=useState();
    const[telefone2,setTelefone2]=useState();
    const[id,setID]=useState();

    const [setorDoCargo, setSetorDoCargo]=useState();

    const [setorLogado, setSetorLogado]=useState();

    function Confirmacao(){
        alert ('Dados Salvos com sucesso')
    };

      //BANCO DE DADOS

  async function add() {
  
    const obj = { setor, nome, email, telefone};
   
    const res = await axios.post(Conexao.api+ 'InsertCadastroResponsaveisWEB.php', obj);
    if (res.data.success === true) {
        Confirmacao();
        Limpar();
    }   
      
  };

  async function atualizar() {
    
    const obj = { setor2, nome2, email2, telefone2, id};
  
    const res = await axios.post(Conexao.api+ 'SalvarCadastroResponsaveisWEB.php', obj);
    if (res.data.success === true) {        
       // Confirmacao();
       
      getResponsavel();
    }
   // Confirmacao()
   alert(' Atualizado...');
  }; 


 


     function Limpar(){
        setSetor('');
        setEmail('');
        setNome('');
        setTelefone('');
         };


         const [nomeResponsavel,setNomeResponsavel]=useState([]);


         async function getResponsavel() {  
           const res = await axios.get(Conexao.api + 'ListaResponsaveisWEB.php' ); 
                
           /* console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo) */      
           if (res.data.success === false) { 
           } else {
            
        setNomeResponsavel(res.data.result);
           }   
         };
       
         useEffect(()=>{getResponsavel()});



         async function handleDelete(nome, setor) {
          try {
            const res = await axios.delete(Conexao.api + 'ExcluirREsponsaveisWEB.php', {
              params: { nome, setor },
            });
        
            if (res.data.success) {
              // Update the state to remove the deleted user
              setNomeResponsavel(prevResponsaveis =>
                prevResponsaveis.filter(resp => resp.nome !== nome)
              );
            } else {
              // Handle error
              console.log('Deletion failed');
            }
          } catch (error) {
            console.error('Error deleting user:', error);
          }
        }

  

        function carregaUser(){setSetorLogado (localStorage.usuario) }; 

        /* useEffect(() => { carregaUser() },[]);  */ 
        useEffect(() => {  getSetor() },[setorLogado]);
   
       async function getSetor() {  
         const res = await axios.get(Conexao.api + 'BuscarVerificaSetorLogadoWEB.php? setorLogado=' + setorLogado );        
         if (res.data.success === false) {
         //  setLoading(false)
         //  falha();  
         } else {  
         setSetorDoCargo(res.data.setor);
        // console.log( "SEETOOOOOR  " + setorDoCargo);
         console.log(  res.data.setor);
         console.log( "QUEEEEM 3 " + setorLogado);
         }   
           };

            const bloqueado = setorDoCargo !== 'SGI';

    
            const [redirectTo, setRedirectTo] = useState(null);

            const handleRedirect = () => {
              // Define a rota para a qual o usuário deve ser redirecionado após clicar em "OK"
              setRedirectTo('/app/DashBoardSGI');
            };
          



    return <body onLoad={carregaUser}>
      

<Navbar />

      <br/>
      <div className='titulolaboratorio container-fluid '>
        <h1 className='texttitulo'>Cadastro de Responsáveis</h1>
      </div> 

      <br/><br/><br/>



    <div className='container'>
      {setorDoCargo !== 'SGI' ? (
        <div className="alert alert-danger text-center ">
          <div className='d-flex offset-4 container'>
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="me-2 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg> 
          <h5 className='mt-2'>O usuário não possui acesso a esta página!</h5></div>
          <button className="btn btn-success mt-3" onClick={handleRedirect}>
            OK !
          </button>
        </div>
      ) : ( <div></div>)}
      {redirectTo && <Redirect to={redirectTo} />}
    </div>



     {setorDoCargo === 'SGI' ?  

      <div className='d-flex align-items-center justify-content-center p-3 container mt-5'>

      <div className='col text-center me-2'>
            <h6> Setor</h6>
            <select disabled={ bloqueado} name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setSetor(e.target.value)} value={setor} >                      
             <option selected value="...">Selecione...</option> 
             <option value="QSSMA">QSSMA</option> 
             <option value="RH">RH</option>
             <option value="Geotecnia">Geotecnia</option>
             <option value="Comercial">Comercial</option>
             <option value="Laboratório">Laboratório</option>  
             <option value="Manutençao">Manutenção</option> 
             <option value="Pesquisa e Mineral">Pesquisa e Mineral</option> 
             <option value="Compras">Compras</option> 
             <option value="Diretoria">Diretoria</option> 
            
          </select> 
        </div>

        <div className='col-3 text-center me-2'>
            <h6> Nome</h6>
            <input disabled={ bloqueado} className='form-control text-center colorInput p-1' onChange={(e) => setNome(e.target.value)} value={nome}></input>
        </div>
        <div className='col text-center me-2'>
            <h6> E-mail</h6>
            <input disabled={ bloqueado} type="email" className='form-control text-center colorInput p-1 ' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </div>
        <div className='col text-center '>
            <h6> Telefone</h6>
            <input disabled={ bloqueado} type="tel" className='bordaa text-center colorInput p-1' onChange={(e) => setTelefone(e.target.value)} value={telefone}></input>
        </div>

      </div>

       :null }  

    {setorDoCargo === 'SGI' ?  
    <div class="d-grid gap-2 d-md-flex justify-content-md-end bbb">
        <button disabled={ bloqueado} class="btnlogin  me-md-2  " onClick={(e) =>  add(e)  }> Salvar</button>
      </div>
 :null}  


  {setorDoCargo === 'SGI' ? 
      <body class="container text-center mt-5 cinzaclaro mt-5">

 
<div class="col  align-items-center justify-content-center p-2 ">

   <div class="row d-flex align-items-center justify-content-center ">
       <div class="col">
         <h6>Nome</h6>                     
       </div>

     <div class="col ">
       <h6>Setor</h6>
     </div>

     <div class="col">
       <h6>E-mail</h6>
     </div>

     <div class="col">
       <h6 >Telefone</h6>  
     </div>
     <div class="col-1">
        
     </div>

   </div>
  
</div>
</body>  :null}  




<div class="modal" id="ModalEditar" tabindex="" aria-labelledby="ModalEditarLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalEditarLabel">Editar</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
       
    
        <div className='col text-center me-2'>
            <h6> Setor</h6>
            <select name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setSetor2(e.target.value)} value={setor2} >                      
             <option selected value="...">Selecione...</option> 
             <option value="QSSMA">QSSMA</option> 
             <option value="RH">RH</option>
             <option value="Geotecnia">Geotecnia</option>
             <option value="Comercial">Comercial</option>
             <option value="Laboratório">Laboratório</option>  
             <option value="Manutençao">Manutençao</option> 
             <option value="Pesquisa e Mineral">Pesquisa e Mineral</option> 
             <option value="Compras">Compras</option> 
            
          </select> 
        </div>

        <div className='col-3 text-center me-2'>
            <h6> Nome</h6>
            <input className='form-control text-center colorInput p-1' onChange={(e) => setNome2(e.target.value)} value={nome2}></input>
        </div>
        <div className='col text-center me-2'>
            <h6> E-mail</h6>
            <input type="email" className='form-control text-center colorInput p-1 ' onChange={(e) => setEmail2(e.target.value)} value={email2}></input>
        </div>
        <div className='col text-center '>
            <h6> Telefone</h6>
            <input type="tel" className='bordaa text-center colorInput p-1' onChange={(e) => setTelefone2(e.target.value)} value={telefone2}></input>
        </div>
    

        </div>
      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={Limpar}>Fechar</button>             
        <button type="button" class="btn btn-success" onClick={(e)=>atualizar(e)} data-bs-dismiss="modal" >Salvar</button>
      </div>
    </div>
  </div>
   
</div>





{/*   {nomeResponsavel.map((resp, i) => ( 
  <div className='d-flex text-center container colorInput' key={i}>
    <h6 className='col'>{resp.nome}</h6>
    <h6 className='col'>{resp.setor}</h6>
    <h6 className='col'>{resp.email}</h6>
    <h6 className='col'>{resp.telefone}</h6>
    <div className="col-1">
      <button data-bs-toggle="modal" data-bs-target="#ModalEditar" className="far fa-edit text-success icone-acao red botaao"
        onClick={() => {setID(resp.id); setSetor2(resp.setor);   setNome2(resp.nome); setEmail2(resp.email); setTelefone2(resp.telefone); }}>
      </button>
      <button onClick={() => handleDelete(resp.nome, resp.setor)} className="far fa-trash-alt icone-acao red botaao" ></button>
    </div>
  </div>
))}  */}
 {setorDoCargo === 'SGI' ?  
<div className='scrollable container-fluid '>
{  nomeResponsavel.map((resp, i) =>  <div className='d-flex text-center container colorInput' key={i}>
      <h6 className='col'>{resp.nome}</h6>
      <h6 className='col'>{resp.setor}</h6>
      <h6 className='col'>{resp.email}</h6>
      <h6 className='col'>{resp.telefone}</h6>
      <div className="col-1">
        <button disabled={ bloqueado}
          data-bs-toggle="modal"
          data-bs-target="#ModalEditar"
          className="far fa-edit text-success icone-acao red botaao"
          onClick={() => {
            setID(resp.id);
            setSetor2(resp.setor);
            setNome2(resp.nome);
            setEmail2(resp.email);
            setTelefone2(resp.telefone);
          }}
        ></button>
        <button disabled={ bloqueado}
          onClick={() => handleDelete(resp.nome, resp.setor)}
          className="far fa-trash-alt icone-acao red botaao"
        ></button>
      </div>
    </div>
  )}
</div>
 :null} 


 
      <br/><br/>







    </body>
 
};