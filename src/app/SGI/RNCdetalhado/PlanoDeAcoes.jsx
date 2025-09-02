import Navbar from '../NavBar/NavBarSGI';
import React, { useState, useEffect } from 'react';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './RNCdetalhado.css';
import moment from 'moment';

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';


import download from "downloadjs";


import { Modal, Button } from 'react-bootstrap';

export default function PlanoDeAcoes(){

    const [acoes, setAcoes] = useState([]); 
    const [verificaEficacia, setVerificaEficacia] = useState([]); 


    const[item1,setItem1]=useState([]);
    const[item2,setItem2]=useState([]);
    const[item3,setItem3]=useState([]);
    const[acao1,setAcao1]=useState([]);
    const[acao2,setAcao2]=useState([]);
    const[acao3,setAcao3]=useState([]);
    const[responsavelAcao1,setResponsavelAcao1]=useState([]);

    const[previsaoAcao1,setPrevisaoAcao1]=useState([]);

    const[execucaoAcao1,setExecucaoAcao1]=useState([]);

    const [editingItemId, setEditingItemId] = useState(null);
    const [newExecucaoAcao, setNewExecucaoAcao] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [setorLogado, setSetorLogado]=useState();
    const [setorDoCargo, setSetorDoCargo]=useState();



   async function BuscarAcoes() {
        const res = await axios.get(Conexao.api + 'ListaRNCAcoesWEBPlano.php');
        console.log( res.data.result)
        if (res.data.success === false) {
      
          } else {
    
        setAcoes(res.data.result)
    
          }  
        };   
  

        function ClickDelete(id){     
            deleteUser(id)     
            const updatedAcoes = acoes.filter((f) => f.id !== id);
            setAcoes(updatedAcoes);
          };
      
             async function deleteUser(id) {
                const res = await axios.get(Conexao.api + 'ExcluirAcoesRNCWEB.php?id=' + id);
                if (res.data.success === true) {
                 // setConfirmacao(false);
                 BuscarAcoes()
                }
            }; 
      




            useEffect(()=>{BuscarAcoes()})





 
      const [showModal, setShowModal] = useState(false);
    
      const handleEditClick = (itemId) => {
        const itemToEdit = acoes.find((f) => f.id === itemId);
        setEditingItemId(itemId);
        
        setShowModal(true);
      };
    

    



      const SalvarAcoes = async () => {

        const id = editingItemId;
        
        const obj = { id,  execucaoAcao1  };
  
        // Enviar os dados para a API
        const res = await axios.post(Conexao.api + 'SalvarUPDATERNCAcoes.php', obj);
  
        if (res.data.success === true) {
          console.log('Dados salvos com sucesso na API');
          /* alert("salvooou") */
          BuscarAcoes();
          setShowModal(false);
          setExecucaoAcao1('');
        }
      
    };


    function carregaUser(){setSetorLogado (localStorage.usuario) }; 
    useEffect(() => { carregaUser() });  

/*    async function getSetor() {  
     const res = await axios.get(Conexao.api + 'BuscarVerificaSetorLogadoWEB.php? setorLogado=' + setorLogado );        
     if (res.data.success === false) {
     //  setLoading(false)
     //  falha();  
     } else {  
     setSetorDoCargo(res.data.setor);
    // console.log( "SEETOOOOOR  " + setorDoCargo);
     console.log(  res.data.setor);
     console.log( "QUEEEEM  " + setorLogado);
     }   
       }; */
            



    return <body  > 
    <br/>  
     
    <Navbar />
    <div className='titulolaboratorio container-fluid'>
       <h1 className='texttitulo'>PLANO DE AÇÕES-RNC</h1>
    </div>    
    <br/><br/> 

  <body class="container-fluid text-center mt-3 cinzaclaro ">
  <div class="col  align-items-center justify-content-center p-2 ">
   <div class="row d-flex align-items-center justify-content-center ">
   <div class="col-1 text-center">
         <h6 className='ms-2'>  Rnc</h6>                     
       </div>
       <div class="col-1">
         <h6>Item</h6>                     
       </div>

     <div class="col-3 ">
       <h6>Ação</h6>
     </div>

     <div class="col-2">
       <h6>Responsável</h6>
     </div>

     <div class="col-1 text-center">
       <h6 >Previsão</h6>  
     </div>


     <div class="col-2 text-center">
       <h6 >Status</h6>       
     </div>
{/*      <div class="col-1">
              
     </div> */}
          <div class="col-1 text-center">
       <h6 >Executar</h6>       
     </div>
   </div>
</div>
</body>



    <body class="container-fluid text-center colorInput ">
 <div class="col  align-items-center justify-content-start p-2 colorInput">
   {/* {listaDeAcoes} */}

 {acoes.map((f,i)=> <div key={i} class="row d-flex align-items-start justify-content-center ">
 
    { f.acao1 !=='' && f.execucaoAcao1 === "" ? <div class="row d-flex align-items-start justify-content-center p-1 borda">
      
         <div class="col-1 text-center align-items-center justify-content-center">{f.protocolo} </div>
        <div class="col-1">{f.item1} </div>
        <div class="col-3 ">{f.acao1}</div> 

        <div class="col-2">{f.responsavelAcao1}</div>
        <div class="col-1">{f.acao1  && (moment(f.previsaoAcao1).format('DD/MM/YYYY'))} </div> 

     {/*   <div class="col-1">{f.acao1  && f.execucaoAcao1 !== '' && (moment(f.execucaoAcao1).format('DD/MM/YYYY'))}</div> */}

      <div class="col-2 d-flex text-center align-items-center justify-content-center">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={
              moment(f.previsaoAcao1).isBefore(moment(), 'day') ? 'red' : 'darkorange'
            }
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="7" cy="7" r="7" />
          </svg>

          {f.acao1 &&
            f.previsaoAcao1 &&
            moment(f.previsaoAcao1).isBefore(moment(), 'day') ? (

            <h6>Em atraso</h6>
            
          ) : (
            <h6>Aguardando execução...</h6>
          )}
 
        </div> 




      
        
         <div class="col-1"> 
         {f.responsavelAcao1 === setorLogado ? (
            <button onClick={() => handleEditClick(f.id)} className="far fa-edit icone-acao green botaao"></button>
          ) : (
            <button disabled className="far fa-edit icone-acao blue botaao" title="Responsável divergente"></button>
          )}
        
         {/* <button onClick={() => handleEditClick(f.id)} className="far fa-edit icone-acao blue botaao"></button> */}
          {/* <button  onClick={() => ClickDelete(f.id) } className="far fa-trash-alt icone-acao red botaao"></button> */}
         
         </div>

         </div>
       :null  }
        </div>)}   
        


 </div>
</body>





      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Execução {/* execucaoAcao1 - ID: {editingItemId} */}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <input  type='date' placeholder='Execução' className='form-control text-center colorInput ' value={execucaoAcao1} onChange={(e) => setExecucaoAcao1 (e.target.value)}></input>
{/* 
          <div className='d-flex text-center align-items-center mt-3'>
            <div className='col'>
              <h6> Responsável pela execução</h6>
            </div>

            <div className='col'>
               <input   className='form-control text-center colorInput ' ></input>
            </div>
            
         
          </div> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false) & setExecucaoAcao1('')}>
            Fechar
          </Button>
          <Button variant="btn btn-success"  onClick={SalvarAcoes} >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
   



<br/><br/>
    </body>
}