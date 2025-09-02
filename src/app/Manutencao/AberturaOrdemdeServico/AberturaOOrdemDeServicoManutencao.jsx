
import Navbar from '../NavbarManutencao/navbarManutencao';
import './AberturaOOrdemDeServicoManutencao.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';



function AberturaOSManutencao() {

  const [equipamentos, setEquipamentos] = useState()
  const [solicitante, setSolicitante] = useState()
  const [telefone, setTelefone] = useState()
  const [nvUrgencia, setNvUrgencia] = useState()
  const [horaSolicitacao, setHoraSolicitacao] = useState()
  const [statu,setStatu] = useState("Aberto")
  const [dataSolicitacao, setDataSolicitacao] = useState()
  const [horimetro, setHorimetro] = useState()
  const [localizacao, setLocalizacao] = useState()
  const [obs, setObs] = useState()

  const [buscaEquipamentos, setBuscaEquipamentos] = useState([])

  const [ pegaId, setPegaID] =useState([]);

 /*  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  } */

  function Confirmacao(id) {
    alert(`Solicitação aberta com Sucesso! ID: ${id}`);
  }

  //BANCO DE DADOS

  async function add() {
    const obj = { equipamentos, solicitante, telefone, nvUrgencia, horaSolicitacao, dataSolicitacao, localizacao, horimetro, obs,statu };
    
    const res = await axios.post(Conexao.api+ 'InsertAberturaOSManutencaoWEB.php', obj);

    if (res.data.success === true) {
      const id = res.data.id;
      
      setPegaID(res.data.id);

      await add2(id);

      Confirmacao(id);
     /*  add2(id) */
    }
    /* Confirmacao() */
    Limpar()
  };


  async function add2(pegaId) {
   

    const aberturaSolicitacao2 = new Date();
const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const aberturaSolicitacao = aberturaSolicitacao2.toLocaleDateString('pt-BR', options);

    const obj = { equipamentos, horimetro, pegaId, aberturaSolicitacao };
    
    const res = await axios.post(Conexao.api+ 'InsertRegistroDeFalhasWEB.php', obj);

    if (res.data.success === true) {
  /*     const id = res.data.id;
      
      setPegaID(id);

      Confirmacao(id); */
    }
    /* Confirmacao() */
   
  };


  //LIMPAR
  function Limpar(){

    setEquipamentos('');
    setSolicitante('');
    setTelefone('');
    setNvUrgencia('');
    setHoraSolicitacao('');
    setDataSolicitacao('');
    setHorimetro('');
    setLocalizacao('');
    setObs('');

  };


  //VARIAVEL PARA O SELECT
 // var selectNvUrgencia = document.querySelector['nv-urgencia'];
 

  // Localstorage
  function carregaUser(){document.getElementById ("Solicitante").value = localStorage.usuario;}; 
  useEffect(() => { carregaUser() });


//carrega ususario no banco de dados
function CarregarSolict (){
  var CarregaSolicitante = document.getElementById("Solicitante").value;
 setSolicitante (CarregaSolicitante) 
  console.log(CarregaSolicitante)
};
useEffect(() => { CarregarSolict() });


 //conversão da data
 function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length === 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length === 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
};

function convertedata (){
  var dataconv = document.getElementById("Datasolicitacao").value;
dataconv=  dataAtualFormatada()
setDataSolicitacao(dataconv)
  console.log(dataconv)
};

useEffect(() => { convertedata() });


async function BuscarEquipamentos() {
  const res = await axios.get(Conexao.api + 'ListaCadastroDeEquipamentoWEB.php');
  console.log( res.data.result)
  if (res.data.success === false) { }
     else {  
      setBuscaEquipamentos(res.data.result);
     console.log("EQUIPAMENTO...    " + res.data.result) 
    
    }  
  };

 /*  const listaDeeQUIPAMENTOS = buscaEquipamentos.map((f,i)=> <div key={i} >
        <options class="">{f.equipamentos} </options>
      
        </div>) */

useEffect(()=>{BuscarEquipamentos()})
   
    
  return <div>
    <Navbar />
    <div className='titulolaboratorio container-fluid' >
      <h1 className='texttitulo' >ORDEM DE SERVIÇO DE MANUTENÇÃO</h1>
    </div>
    <br />
    <br />
   <body className="container-fluid " >
      <body  >

        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <h6>Equipamento</h6>
             {/*  <input name='Equipamentos' id='Equipamentos' className='form-control text-center colorInput' onChange={(e) => setEquipamentos(e.target.value)} value={equipamentos} ></input> */}
             <select className=' form-select  text-center colorInput ' onChange={(e) => setEquipamentos(e.target.value)} value={equipamentos}>
             <option className=' p-3 ' selected value="..." > Selecione </option>
                {buscaEquipamentos.map((equipamento) => (
                  <option key={equipamento.id} > {equipamento.equipamento} </option>
                ))}
              </select>

            </div>
            <div class="col">
                  <h6>Solicitante</h6>  
                  <input name='Solicitante' id='Solicitante' className='form-control text-center  ' disabled="true" onChange={(e) =>setSolicitante(e.target.value)} value={solicitante}   ></input>
             </div>
            <div class="col">
              <h6>Telefone</h6>
              <input type='tel' className='form-control text-center colorInput ' autoComplete='tel' placeholder='(31)99999-9999' onChange={(e) => setTelefone(e.target.value)} value={telefone} ></input>

            </div>
            <div class="col">
              <h6>Nível de urgência</h6>
              <select  className=' form-select  text-center colorInput '   onChange={(e) => setNvUrgencia(e.target.value)} value={nvUrgencia} >   
                     <option selected value="...">Selecione...</option>                   
                     <option value="baixo">Baixo</option>
                     <option value="medio">Médio</option>
                     <option value="alto">Alto</option>
                </select>
            </div>
          </div>
        </div>
      </body>
             <br />   
      <body  >
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <h6>Hora da Solicitação</h6>
              <input type='time' className='form-control text-center colorInput ' onChange={(e) => setHoraSolicitacao(e.target.value)} value={horaSolicitacao} ></input>
            </div>
            <div class="col">
              <h6>Data Solicitação</h6>
              <input type='date' id='Datasolicitacao' className='form-control text-center colorInput ' onChange={(e) => setDataSolicitacao(e.target.value)} value={dataSolicitacao} ></input>
            </div>
            <div class="col">
              <h6>Localização</h6>
              <input className='form-control text-center colorInput ' onChange={(e) => setLocalizacao(e.target.value)} value={localizacao} ></input>
            </div>
            <div class="col">
              <h6>Horímetro</h6>
              <input  className='form-control text-center colorInput ' onChange={(e) => setHorimetro(e.target.value)} value={horimetro} ></input>
            </div>
          </div>
        </div>
      </body>
         <br />
         <br />  
      <body class="container text-center">
        <div class="row align-items-start">
            <div class="row">
               <h6>Descrição da solicitação</h6>
             </div>
                   <br />
                   <br />
          <div class="row">
            <textarea cols={100} rows={10} className='form-control w-200 colorInput p-0 resize' onChange={(e) => setObs(e.target.value)} value={obs}  ></textarea>
          </div>
        </div>
      </body>

      <br />

 </body>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end bbb">
        <button  onClick={(e) => add(e) } class="btnlogin  me-md-2  " > Abrir Solicitação </button>
      </div>

    <br />
   
  </div>
}

export default AberturaOSManutencao;



