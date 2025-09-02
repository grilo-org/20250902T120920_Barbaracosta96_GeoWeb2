import Navbar from '../NavbarManutencao/navbarManutencao';
import './CadastroDeEquipamentos.css';
import React, { useEffect, useState} from "react";
import axios from 'axios';
import Conexao from '../../Config/conexao';
import moment from 'moment';


function CadastroDeEquipamentos() {



  const[equipamento,setEquipamento]=useState()
  const[modeloDeEquipamento,setModeloDeEquipamento]=useState()
  const [dataFabricacao, setDataFabricacao]= useState()
  const[clienteOuProjeto,setClienteOuProjeto]=useState()
  const[horimetro,setHorimetro]=useState();
  const[horimetroAtual,setHorimetroAtual]=useState()
  const[ultimaManutencaoPreventiva,setUltimaManutencaoPreventiva]=useState()
  const[proximaManutencaoPreventiva,setProximaManutencaoPreventiva]=useState()
  const[ultimaManutencaoCorretiva,setUltimaManutencaoCorretiva]=useState()
  const[obs,setObs]=useState();
  const[habilitado, desabilitado]=useState();
  

  const [dataStart, setDataStart]=useState();

  

  const[peca,setPeca]=useState();
  const[horasParaTroca,setHorasParaTroca]=useState();
  const[tempoDeTroca, setTempoDeTroca]=useState();
  const[toleranciaHorasTroca,setToleranciaHorasTroca]=useState();
  const[toleranciaDataTroca,setToleranciaDataTroca]=useState();
  const[obsTroca,setObsTroca]=useState();

  const[statuPeca, setStatuPeca]=useState('aberto');
  const[statuFinalizado, setStatuFinalizado]=useState('Finalizado');

  const[buscadePecas, setBuscaDePecas]=useState([]);
  const[buscaFILTROdePecas, setBuscaFILTRODePecas]=useState([]);
  const[buscaFILTROdePecas3, setBuscaFILTRODePecas3]=useState([]);
  const[buscaFILTROFinalizadodePecas, setBuscaFILTROFinalizadoDePecas]=useState([]);

  const[dataFinalizacao, setDataFinalizacao]=useState([]);

  const[buscadeEquipamentos, setBuscaEquipamentos]=useState([]);
  const[filtroDePecas,setFiltroDePecas]=useState([]);
  const[manutencoesRealizadas,setManutencoesRealizadas]=useState([]);




 /*  const[AAA,setAAA]=useState([]);
  const[BBB,setBBB]=useState([]); */
  
 


  function Confirmacao() {
    alert('Equipamento cadastrado com Sucesso!')
  };

  function NaoCadastrado() {
    alert('Equipamento não cadastrado!')
  }; 

  //BANCO DE DADOS

  //SALVAR

    async function add() {
   
      const obj = { equipamento, modeloDeEquipamento, dataFabricacao,clienteOuProjeto, horimetro, ultimaManutencaoPreventiva, proximaManutencaoPreventiva, ultimaManutencaoCorretiva, obs, dataStart, horimetroAtual };
    
      const res = await axios.post(Conexao.api+ 'InsertCadastroEquipamento.php', obj);
      if (res.data.success === true) {     
      }
      Confirmacao()
    };


    async function atualizar() {
    
      const obj = { equipamento, modeloDeEquipamento, dataFabricacao,clienteOuProjeto, horimetro, ultimaManutencaoPreventiva, proximaManutencaoPreventiva, ultimaManutencaoCorretiva, obs, dataStart,horimetroAtual };
    
      const res = await axios.post(Conexao.api+ 'SalvarCadastroDeEquipamento.php', obj);
      if (res.data.success === true) {     
      }
     // Confirmacao()
     alert('Equipamento atualizado ...');
    };

    async function VerificaEsalva() {
  
      const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php? equipamento=' + equipamento);
     
      if (res.data.success === false) {

      add()
      Limpar();
      setEquipamento('');
      } else { 
       // atualizar()
        Limpar();
        setEquipamento('');
      alert('Equipamento já cadastrado ...');
      
      }
     
    };

  

    //BUSCAR
    async function getItem() {
  
    const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php? equipamento=' + equipamento);

    setModeloDeEquipamento(res.data.modeloDeEquipamento);
    setDataFabricacao(res.data.dataFabricacao);
    setClienteOuProjeto(res.data.clienteOuProjeto);
    setHorimetro(res.data.horimetro);
    setUltimaManutencaoPreventiva(res.data.ultimaManutencaoPreventiva);
    setProximaManutencaoPreventiva(res.data.proximaManutencaoPreventiva);
    setUltimaManutencaoCorretiva(res.data.ultimaManutencaoCorretiva);
    setObs(res.data.obs);
    setDataStart(res.data.dataStart);
    setHorimetroAtual(res.data.horimetroAtual);
    
    if (res.data.success === false) {
    //  setLoading(false)
    //  falha();
    desabilitado(' ')
    NaoCadastrado()
  
    } else {
  //   setLoading(false)
  buscarPecas();
  desabilitado('retorno');
  buscarFILTROPecas();
  buscarFILTROfINALIZADOPecas();
  buscarManutencoesRealizadas();
    }  
  };

  function Limpar(){

    setModeloDeEquipamento('');
    setDataFabricacao('');
    setClienteOuProjeto('');
    setHorimetro('');
    setUltimaManutencaoPreventiva('');
    setProximaManutencaoPreventiva('');
    setUltimaManutencaoCorretiva('');
    setObs('');
   // setEquipamento('')
  setPeca('');
  setHorasParaTroca('');
  setTempoDeTroca('');
  setToleranciaHorasTroca('');
  setToleranciaDataTroca('');
  setObsTroca('');
   
    setBuscaDePecas(['']);
    desabilitado('');
   // setDias('');
   setDataStart('');
   setHorimetroAtual('');

     setBuscaFILTRODePecas(['']);
     setBuscaFILTROFinalizadoDePecas(['']); 
       setManutencoesRealizadas(['']);
      setFiltroDePecas(['']); 
      setBuscaFILTRODePecas3(['']); 
   
   
  };

  function LimparModal(){
    setPeca('');
    setHorasParaTroca('');
    setTempoDeTroca('');
    setToleranciaHorasTroca('');
    setToleranciaDataTroca('');
    setObsTroca('');

  };


  //Peças

  async function SalvarPecas() {
   
    const obj = { equipamento, horasParaTroca,  tempoDeTroca , toleranciaHorasTroca , toleranciaDataTroca , obsTroca  ,  peca, statuPeca   };
  
    const res = await axios.post(Conexao.api+ 'InsertCadastroPecasManutencoesWEB.php', obj);
    if (res.data.success === true) {    
    }
    alert( "peças e manutenções salvas");
    buscarPecas();
    buscarFILTROPecas();
  };


  async function AttPecas() {
   
    const obj = { equipamento, peca, horasParaTroca,  tempoDeTroca , toleranciaHorasTroca , toleranciaDataTroca , obsTroca  ,   statuPeca   };
  
    const res = await axios.post(Conexao.api+ 'SalvarCadastroPecasManutencoesWEB.php', obj);
    if (res.data.success === true) {    
    }
    alert( "peças e manutenções editados");
    buscarPecas();
    buscarFILTROPecas();
  };


  async function buscarPecas() { 
    const res = await axios.get(Conexao.api + 'ListaCadastroPecasWEB.php? equipamento=' + equipamento);  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
      setBuscaDePecas(res.data.result);
      buscarManutencoesRealizadas();
      buscarFILTROPecas();
      buscarFILTROPecas3();
     
    }  
  };

  async function buscarFILTROPecas() { 
    const res = await axios.get(Conexao.api + 'ListaFiltroPeca2WEB.php? equipamento=' + equipamento + '&statuPeca=' + statuPeca);  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
      setBuscaFILTRODePecas(res.data.result)
    }  
  };

  async function buscarFILTROPecas3() { 
    const res = await axios.get(Conexao.api + 'ListaFiltroPeca3WEB.php? equipamento=' + equipamento );  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
      setBuscaFILTRODePecas3(res.data.result)
    }  
  };

  async function buscarFILTROfINALIZADOPecas() { 
    const res = await axios.get(Conexao.api + 'ListaFiltroPecasFinalizadoWEB.php? equipamento=' + equipamento + '&statuFinalizado=' + statuFinalizado );  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
      setBuscaFILTROFinalizadoDePecas(res.data.result)
    }  
  };




 async function BuscarEquipamentos() {
  const res = await axios.get(Conexao.api + 'ListaCadastroDeEquipamentoWEB.php');
  console.log( res.data.result)
  if (res.data.success === false) { }
     else {  
      setBuscaEquipamentos(res.data.result);
     console.log("EQUIPAMENTO...AB    " + res.data.result) ;
     carregaUser();
    
    }  
  };

    async function buscarFiltroDePecas() { 
    const res = await axios.get(Conexao.api + 'ListaFiltroDEPecasWEB.php' );  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
     // setBuscaDePecas(res.data.result)
     setFiltroDePecas(res.data.result);
     console.log('peças que buscou.... ' + res.data.result)
    }  
  };


      async function buscarManutencoesRealizadas() { 
    const res = await axios.get(Conexao.api + 'ListaManutencoesRealizadasWEB.php? equipamento=' + equipamento);  
    if (res.data.success === false) {
//console.log("nada")   
    } else {
      setManutencoesRealizadas(res.data.result)
    }  
  };




 const desabilitaTela = habilitado==='retorno';

 const[filtroDePecasManuentacao,setFiltroDePecasManutencao]=useState([]);

 async function buscarFiltroDePecas2() { 
   const res = await axios.get(Conexao.api + 'ListaPecasManutencoesNTWEB.php' );  
   if (res.data.success === false) {
 //console.log("nada")   
   } else {
    // setBuscaDePecas(res.data.result)
    setFiltroDePecasManutencao(res.data.result);
    console.log('peças que buscou.... ' + res.data.result)
   }  
 };

 const [programador, setProgramador]=useState();

 const [setorLogado, setSetorLogado]=useState();

 function carregaUser(){setSetorLogado (localStorage.usuario) }; 

 /* useEffect(() => { carregaUser() },[]);  */ 
 useEffect(() => {  getSetor()  },[setorLogado]);

async function getSetor() {  
  const res = await axios.get(Conexao.api + 'BuscarVerificaSetorLogadoWEB.php? setorLogado=' + setorLogado );        
  if (res.data.success === false) {
  //  setLoading(false)
  //  falha();  
  } else {  
    setProgramador(res.data.programador);
 // console.log( "SEETOOOOOR  " + setorDoCargo);
  console.log(  res.data.programador);
  console.log( "QUEEEEM 5 " + setorLogado);
   carregaUser();
  }   
    };

     const bloqueado = programador !== 'SIM';

     useEffect(() => {  BuscarEquipamentos()  },[]);





    
  return <body /* onLoad={BuscarEquipamentos()  }*/ >
    <Navbar />
    <br/>
    
      <div className='titulolaboratorio container-fluid'>
        <h1 className='texttitulo'>CADASTRO DE EQUIPAMENTO</h1>
      </div>
    
    <br/>
    <br/> 
   
<body className="container-fluid ">

    <body class="container text-center  " >

        <div class="container text-center ">
            <div class="row d-flex align-items-end justify-content-center p-2">               
                <div class="col-md-3 md-0">           
                    <h6>Equipamento</h6>       
                    <input disabled={bloqueado} list='ListaEquipamentos' onChange={(e) => setEquipamento(e.target.value) & Limpar()} value={equipamento} className='form-control text-center colorInput w-100 ' ></input>    
                  
                    <datalist disabled={bloqueado} id="ListaEquipamentos">
                    {buscadeEquipamentos.map((equipamento) => ( <option key={equipamento.id} > {equipamento.equipamento} </option> ))}                 
                    </datalist>

                 </div>
                 <div class="col-4">
                      <button disabled={bloqueado} class="btnlogin  me-md-2  " onClick={(e) =>  getItem(e) & Limpar()}>Buscar</button>   
                 </div>         
            </div>
        </div>
    </body>
    <br/><br/><br/>

    <body class="container text-center  ">

      <div class="col  align-items-center justify-content-center p-2">

              <div class="row d-flex align-items-center justify-content-center ">
                <div class="col-4">
                    <h6>Modelo de equipamento</h6>       
                    <input  list='ListaModelo' disabled={desabilitaTela || bloqueado} name='' id='' onChange={(e) => setModeloDeEquipamento(e.target.value)} value={modeloDeEquipamento} className='form-control text-center colorInput  ' ></input>
                    <datalist id="ListaModelo">
                    {buscadeEquipamentos.map((equipamento) => ( <option key={equipamento.id} > {equipamento.modeloDeEquipamento} </option> ))}                 
                    </datalist>
                </div>
                <div class="col-4">
                    <h6>Data fabricação</h6>       
                    <input  disabled={desabilitaTela || bloqueado} name='DataFabricacao' id='DataFabricacao'  onChange={(e) => setDataFabricacao(e.target.value)} value={dataFabricacao} type='date' className='form-control text-center colorInput  ' ></input>
                </div>
                <div class="col-4">
                    <h6>Cliente/Projeto</h6>       
                    <input disabled={desabilitaTela || bloqueado} name='' id=''  onChange={(e) => setClienteOuProjeto(e.target.value)} value={clienteOuProjeto}  className='form-control text-center colorInput  ' ></input>
                </div>
       </div>



              <div class="row d-flex align-items-center justify-content-center mt-5 ">
                    <div class="col-4">
                        <h6>Horímetro start</h6>       
                        <input disabled={desabilitaTela || bloqueado} name='' id=''   onChange={(e) => setHorimetro(e.target.value)} value={horimetro} className='form-control text-center colorInput  ' ></input>
                    </div>
                    <div class="col-4">
                      <h6>Horímetro atual</h6>       
                      <input disabled={desabilitaTela || bloqueado} name='' id='' onChange={(e) => setHorimetroAtual(e.target.value)} value={horimetroAtual}  className='form-control text-center colorInput  ' ></input>
                    </div>
                    <div class="col-4">
                          <h6>Data start </h6>       
                          <input disabled={desabilitaTela || bloqueado} name='' id='' type='date' className='form-control text-center colorInput ' onChange={(e) => setDataStart(e.target.value)} value={dataStart} ></input>
                    </div>

               </div>


{/*                <div class="row d-flex align-items-center justify-content-center mt-5">
                    <div class="col-4">
                    <h6>Última manutenção corretiva</h6>       
                          <input  type='date' onChange={(e) => setUltimaManutencaoCorretiva(e.target.value)} value={ultimaManutencaoCorretiva} disabled className='form-control text-center colorInput w-100 ' ></input>
                    </div>
                    <div class="col-4">
                          <h6>Última manutenção preventiva </h6>       
                          <input name='' id='' type='date' onChange={(e) => setUltimaManutencaoPreventiva(e.target.value)} value={ultimaManutencaoPreventiva} disabled className='form-control text-center colorInput  ' ></input>
                    </div>
                    <div class="col-4">
                      <h6>Próxima manutenção preventiva</h6>       
                      <input name='' id='' type='date'  onChange={(e) => setProximaManutencaoPreventiva(e.target.value)} value={proximaManutencaoPreventiva} disabled className='form-control text-center colorInput  ' ></input>
                    </div>
               </div> */}

               <div className=' d-flex cinzaclaro mt-5'>   <div className='col '> <h6> Próxima manutenção</h6>  </div> </div> 

               <div className=' d-flex cinzaclaro '> 
                <div className='col '> <h6> Peça</h6>  </div>
                <div className='col'> <h6> Troca prevista (em horas)</h6>  </div>
                <div className='col'> <h6> Data prevista para troca</h6>  </div>
              

                </div> 


 
                {buscaFILTROdePecas.map((p,i)=> (
                  
                  <div className=' d-flex colorInput mt-1' key={i}> 
                  <div className='col '>  <h6>{p.peca}</h6> </div>
                  <div className='col'> {p.statuPeca=== 'aberto' ?  <h6>{parseInt(p.horasParaTroca)+ parseInt(horimetro)}</h6>:null} </div>
                  <div className='col'>  {p.statuPeca=== 'aberto' ? <h6>{moment(dataStart).add(parseInt(p.tempoDeTroca), 'days').format('DD-MM-YYYY')} </h6> :null}</div>
                            
                  </div>
                 
                 ))} 





   
  
      {buscaFILTROFinalizadodePecas.map((z,i)=> (
                    
             <div className=' d-flex colorInput mt-1' key={i}> 
                  
             <div className='col '>  <h6>{z.peca}</h6> </div>
             <div className='col'>  {z.statuFinalizado === 'Finalizado' ? <h6>{parseInt(z.horasParaTroca)+ parseInt(z.horimetroFinalizacao)}</h6>  :null}</div>
             <div className='col'>   {z.statuFinalizado === 'Finalizado' ?  <h6>{moment(z.dataFinalizacao).add(parseInt(z.tempoDeTroca), 'days').format('DD-MM-YYYY')}  </h6>:null}</div> 
            </div>
     
                 ))}  







<div class="modal" id="ModalHistorico" tabindex="" aria-labelledby="ModalHistoricoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl ">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title  fs-5" id="ModalHistoricoLabel">Histórico de manutenções</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">

        <div className=' d-flex cinzaclaro '> 
                <div className='col '> <h6> Peça</h6>  </div>
                <div className='col'> <h6> Data da manutenção</h6>  </div>
                <div className='col'> <h6>  Horímetro da manutenção</h6>  </div>

                <div className='col'>  <h6> descrição</h6> </div>

                </div> 


                         {manutencoesRealizadas.map((s,i)=> (
                
                <div className=' d-flex colorInput mt-1' key={i}> 
                <div className='col '>  <h6>{s.peca}</h6> </div>
                <div className='col'> <h6>{moment(s.dataQueTrocou).format('DD-MM-YYYY')}</h6> </div>
                <div className='col'>   <h6>{s.horimetroQueTrocou}  </h6></div>          
                <div className='col'>   <h6>{s.descricao }</h6> </div>
                
                </div>
               
               ))}

               
        
        </div>
      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>             
       {/*  <button type="button" class="btn btn-success" data-bs-dismiss="modal">Salvar</button> */}
      </div>
    </div>
  </div>
</div>

   {/* <button type="button" class="botaoadicionar" data-bs-toggle="modal" data-bs-target="#ModalHistorico" > Histórico de manutenções</button>  */}




            <div className=' d-flex cinzaclaro mt-5'> 
                <div className='col '> <h6> Plano de manutenção</h6>  </div> 
                </div> 
                <div className=' d-flex cinzaclaro '> 
                <div className='col '> <h6> Peça</h6>  </div>
                <div className='col-2'> <h6> Horas para troca</h6>  </div>
                <div className='col-2'> <h6> Tempo para troca (dias)</h6>  </div>
                <div className='col'>  <h6> Tolerência por horas</h6> </div>
                <div className='col'>  <h6> Tolerência por tempo (dias)</h6>  </div>
                <div className='col'>  <h6> Observação</h6>  </div>  
                </div> 
               

               {buscadePecas.map((p,i)=> (
                
                <div className=' d-flex colorInput mt-1' key={i}> 

                <div className='col '>  <h6>{p.peca}</h6> </div>
                <div className='col-2'> <h6 >{p.horasParaTroca}</h6> </div>
                <div className='col-2'> <h6 >{p.tempoDeTroca}</h6> </div>
                <div className='col'>   <h6>{p.toleranciaHorasTroca }</h6> </div>
                <div className='col'>   <h6>{p.toleranciaDataTroca }</h6> </div>
                <div className='col'>   <h6>{p.obsTroca }</h6> </div>
                
                </div>
               ))}

 


 
               <div class="row d-flex align-items-start justify-content-start  mt-5">
                    <div class="col-5 mt-3 ">
                       <button   disabled={ bloqueado}   class="btnlogin " type="button"  data-bs-toggle="modal" data-bs-target="#ModalPecas" onClick={(e)=>LimparModal(e) & buscarFiltroDePecas2() } > criar plano de manutenção</button> 
                       <button  disabled={ bloqueado}  class="btnlogin " type="button"  data-bs-toggle="modal" data-bs-target="#ModalPecas2" onClick={(e)=>LimparModal(e) & buscarFiltroDePecas() } > editar plano de manutenção</button>
                     </div>

                   <div class="col-1  "> </div>
                      
                      <div class="col-6 ">
                          <h6>Observação </h6>       
                          <textarea  disabled={desabilitaTela || bloqueado} cols={77} rows={5} className='form-control colorInput  resize '  onChange={(e) => setObs(e.target.value)} value={obs} ></textarea>
                      </div>
                </div>
         </div>
     </body>

   
</body>


<div class="modal" id="ModalPecas" tabindex="" aria-labelledby="ModalPecasLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalPecasLabel">Cronograma de manutenção</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-6">  
                 <h6> Peça</h6>
                 <select onChange={(e)=> setPeca(e.target.value)} value={peca} className='form-select text-center colorInput' type="text" >  
                 <option value={"-"}>Selecione</option>
                  { filtroDePecasManuentacao.map((x,a)=>(<option key={a}> {x.item} </option>))}    
                  </select>                        
                 
            </div>         
        </div>


        <div class="col  align-items-center justify-content-center p-2 mt-3">
          <h5> Parâmetros para manutenções</h5>
        <div class="row d-flex align-items-center justify-content-center mt-3">

          <div class="col-5 ">       
              <h6> Horas para troca</h6> 
              <input onChange={(e)=> setHorasParaTroca(e.target.value)} value={horasParaTroca} placeholder=' exemplo: 100 horas' className='form-control text-center colorInput '  ></input>   
          </div>

          <div class="col-5 ">       
              <h6> Tempo para troca</h6> 
              <select  placeholder='exemplo: 1 mês' className='form-select text-center colorInput ' onChange={(e)=>setTempoDeTroca(e.target.value)} value={tempoDeTroca} >
                   <option selected value="...">exemplo: 1 mês</option>                      
                   <option value="30"> 1 mes</option>
                   <option value="60"> 2 meses</option>
                   <option value="90"> 3 meses</option>
                   <option value="120"> 4 meses</option>
                   <option value="150"> 5 meses</option>
                   <option value="180"> 6 meses</option>
                   <option value="210"> 7 meses</option>
                   <option value="240"> 8 meses</option>
                   <option value="270"> 9 meses</option>
                   <option value="300"> 10 meses</option>
                   <option value="330"> 11 meses</option>
                   <option value="360"> 12 meses</option>
                   <option value="390"> 13 meses</option>
                   <option value="420"> 14 meses</option>
                   <option value="450"> 15 meses</option>
                   <option value="480"> 16 meses</option>
                   <option value="510"> 17 meses</option>
                   <option value="540"> 18 meses</option>
                   <option value="570"> 19 meses</option>
                   <option value="600"> 20 meses</option>
                   <option value="630"> 21 meses</option>
                   <option value="660"> 22 meses</option>
                   <option value="690"> 23 meses</option>
                   <option value="720"> 24 meses</option>

                </select>   
          </div>

        </div>
        </div>

        <div class="col  align-items-center justify-content-center p-2 mt-3">
          <h5> Tolerância para manutenções</h5>
        <div class="row d-flex align-items-center justify-content-center mt-3">

          <div class="col-5 ">       
              <h6> Tolerência por horas</h6> 
              <input onChange={(e)=> setToleranciaHorasTroca(e.target.value)} value={toleranciaHorasTroca} placeholder='exemplo: 100 horas' className='form-control text-center colorInput '  ></input>   
          </div>
    
          <div class="col-5">        
              <h6> Tolerência por período de tempo</h6> 
              <select onChange={(e)=> setToleranciaDataTroca(e.target.value)} value={toleranciaDataTroca} placeholder='exemplo: 1 mês' className='form-select text-center colorInput '  >
                   <option selected value="...">exemplo: 1 mês</option>                      
                   <option value="5">5 dias</option>
                   <option value="10">10 dias</option>
                   <option value="15"> 15 dias</option>
                   <option value="20"> 20 dias</option>
                   <option value="25"> 25 dias</option>                  
                   <option value="30"> 1 mes</option>
                   <option value="60"> 2 meses</option>
                   <option value="90"> 3 meses</option>
                   <option value="120"> 4 meses</option>
                   <option value="150"> 5 meses</option>
                   <option value="180"> 6 meses</option>
                
                </select>       
          </div>

        </div>
        </div>


        <div class="col  align-items-center justify-content-center p-2 mt-3">
        <div class="row d-flex align-items-center justify-content-center ">

          <div class="col-10">
              <h6> Observação</h6> 
              <textarea onChange={(e)=> setObsTroca(e.target.value)} value={obsTroca} placeholder='(opcional)' className='form-control text-center colorInput  resize'  ></textarea>   
          </div>

        </div>
        </div>


      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>             
        <button type="button" class="btn btn-success"  onClick={(e) => SalvarPecas(e) } data-bs-dismiss="modal">Salvar</button>
      </div>
    </div>
  </div>
</div>



<div class="modal" id="ModalPecas2" tabindex="" aria-labelledby="ModalPecasLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalPecasLabel">Cronograma de manutenção </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-6">  
                 <h6> Peça</h6>
                 <select onChange={(e)=> setPeca(e.target.value)} value={peca} className='form-select text-center colorInput' type="text" >  
                 <option value={"-"}>Selecione</option>
                   { buscaFILTROdePecas3.map((x,a)=>(<option key={a}> {x.peca} </option>))}                 
                  {/*  { buscaFILTROFinalizadodePecas.map((z1,b)=>(<option key={b}> {z1.peca} </option>))}  */}   
                  {/* { filtroDePecasManuentacao.map((Z,a)=>(<option key={a}> {Z.item} </option>))}  */}
                  </select>                        
                 
            </div>         
        </div>


        <div class="col  align-items-center justify-content-center p-2 mt-3">
          <h5> Parâmetros para manutenções</h5>
        <div class="row d-flex align-items-center justify-content-center mt-3">

          <div class="col-5 ">       
              <h6> Horas para troca</h6> 
              <input onChange={(e)=> setHorasParaTroca(e.target.value)} value={horasParaTroca} placeholder=' exemplo: 100 horas' className='form-control text-center colorInput '  ></input>   
          </div>

          <div class="col-5 ">       
              <h6> Tempo para troca</h6> 
              <select  placeholder='exemplo: 1 mês' className='form-select text-center colorInput ' onChange={(e)=>setTempoDeTroca(e.target.value)} value={tempoDeTroca} >
                   <option selected value="...">exemplo: 1 mês</option>                      
                   <option value="30"> 1 mes</option>
                   <option value="60"> 2 meses</option>
                   <option value="90"> 3 meses</option>
                   <option value="120"> 4 meses</option>
                   <option value="150"> 5 meses</option>
                   <option value="180"> 6 meses</option>
                   <option value="210"> 7 meses</option>
                   <option value="240"> 8 meses</option>
                   <option value="270"> 9 meses</option>
                   <option value="300"> 10 meses</option>
                   <option value="330"> 11 meses</option>
                   <option value="360"> 12 meses</option>
                   <option value="390"> 13 meses</option>
                   <option value="420"> 14 meses</option>
                   <option value="450"> 15 meses</option>
                   <option value="480"> 16 meses</option>
                   <option value="510"> 17 meses</option>
                   <option value="540"> 18 meses</option>
                   <option value="570"> 19 meses</option>
                   <option value="600"> 20 meses</option>
                   <option value="630"> 21 meses</option>
                   <option value="660"> 22 meses</option>
                   <option value="690"> 23 meses</option>
                   <option value="720"> 24 meses</option>

                </select>   
          </div>

        </div>
        </div>

        <div class="col  align-items-center justify-content-center p-2 mt-3">
          <h5> Tolerância para manutenções</h5>
        <div class="row d-flex align-items-center justify-content-center mt-3">

          <div class="col-5 ">       
              <h6> Tolerência por horas</h6> 
              <input onChange={(e)=> setToleranciaHorasTroca(e.target.value)} value={toleranciaHorasTroca} placeholder='exemplo: 100 horas' className='form-control text-center colorInput '  ></input>   
          </div>
    
          <div class="col-5">        
              <h6> Tolerência por período de tempo</h6> 
              <select onChange={(e)=> setToleranciaDataTroca(e.target.value)} value={toleranciaDataTroca} placeholder='exemplo: 1 mês' className='form-select text-center colorInput '  >
                   <option selected value="...">exemplo: 1 mês</option>                      
                   <option value="5">5 dias</option>
                   <option value="10">10 dias</option>
                   <option value="15"> 15 dias</option>
                   <option value="20"> 20 dias</option>
                   <option value="25"> 25 dias</option>                  
                   <option value="30"> 1 mes</option>
                   <option value="60"> 2 meses</option>
                   <option value="90"> 3 meses</option>
                   <option value="120"> 4 meses</option>
                   <option value="150"> 5 meses</option>
                   <option value="180"> 6 meses</option>
                
                </select>       
          </div>

        </div>
        </div>


        <div class="col  align-items-center justify-content-center p-2 mt-3">
        <div class="row d-flex align-items-center justify-content-center ">

          <div class="col-10">
              <h6> Observação</h6> 
              <textarea onChange={(e)=> setObsTroca(e.target.value)} value={obsTroca} placeholder='(opcional)' className='form-control text-center colorInput  resize'  ></textarea>   
          </div>

        </div>
        </div>


      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>             
        <button type="button" class="btn btn-success"  onClick={(e) => AttPecas (e) } data-bs-dismiss="modal">Salvar</button>
      </div>
    </div>
  </div>
</div>




            
            <div class="row d-flex align-items-center justify-content-end  mt-5 ">   
                <div class="col-5">
            
                </div>                 
                <div class="col-4">
                <button  disabled={ bloqueado}  onClick={(e) => VerificaEsalva(e)} class="btnlogin " >Salvar</button>                  
                </div>         
            </div>

        

      <br/><br/> 
      

  </body>
}

export default  CadastroDeEquipamentos;