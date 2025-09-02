import { useState, useEffect } from 'react';
import Navbar from '../NavbarManutencao/navbarManutencao';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Conexao from '../../Config/conexao';

import ListaDinamica from '../ListaDinamica';
import ListaDinamica1 from '../ListaDinamica1';
import ListaDinamica2 from '../ListaDinamica2';
import ListaDinamica3 from '../ListaDinamica3';
import ListaDinamica4 from '../ListaDinamica4';

import ListaDinamicaPg1 from '../ListaDinamicaPgm1';

import SweetAlert from 'react-bootstrap-sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import moment from 'moment';


export default function TelaDeEdicao2(props){

  const location = useLocation();
  const { dados } = location.state || {};


  const [numeroOs,setNumeroOS]=useState();
  const [statu] = useState('Programando');

 // const [protocolo,setProtocolo]=useState();

  const [solicitante, setSolicitante] = useState();
  const [dataPrevisaoSaida, setDataPrevisaoSaida] = useState(Date);
  const [equipamentos, setEquipamentos] = useState();
  const [dataEntrega, setDataEntrega] = useState();
  const [dataSaida, setDataSaida] = useState();
  const [modelo, setModelo] = useState();
  const [horaEquipamento, setHoraEquipamento] = useState();
 const [horaEquipamento2, setHoraEquipamento2] = useState();
  const [codigoTag, setCodigoTag] = useState();
  const [descricao, setDescricao] = useState();
 // const [obs, setObs] = useState()
  const [dataEntrada, setDataEntrada] = useState();
 
  const [horarioEntrada, setHorarioEntrada] = useState();
  const [horarioSaida, setHorarioSaida] = useState();

  const [dinamica, setDinamica] = useState([]);
  const [dinamica1, setDinamica1] = useState([]);
  const [dinamica2, setDinamica2] = useState([]);
  const [dinamica3, setDinamica3] = useState([]);
 // const [outros, setOutros] = useState()
  const [manutecao, setManutecao] = useState([]);

  const [obs, setObs] = useState()
  const [clientes, setClientes] = useState([]);
  const [clientes1, setClientes1] = useState([]);
  const [clientes2, setClientes2] = useState([]);
  const [clientes3, setClientes3] = useState([]);
  const [clientes4, setClientes4] = useState([]);
  const [aux1DataPrevistaSaida, setAux1DataPrevistaSaida] = useState();


  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');

  const [confirmacao1, setConfirmacao1] = useState(false);
  const [confirmacaoId1, setConfirmacaoId1] = useState('');

  const [confirmacao2, setConfirmacao2] = useState(false);
  const [confirmacaoId2, setConfirmacaoId2] = useState('');

  const [confirmacao3, setConfirmacao3] = useState(false);
  const [confirmacaoId3, setConfirmacaoId3] = useState('');

  const [confirmacao4, setConfirmacao4] = useState(false);
  const [confirmacaoId4, setConfirmacaoId4] = useState('');

  const [descricaoModal, setDescricaoModal] = useState();
  const [manutencaoPC, setManutencaoPC] = useState();

  const [item, setItem] = useState();
  const [descricaoPeca, setDescricaoPeca] = useState();
  const [quantidade, setQuantidade] = useState();

  const [responsavel, setResponsavel] = useState();
  const [tipo, setTipo] = useState();
  const [dataModal, setDataModal] = useState();

  const [dataModal2, setDataModal2] = useState();
  const [atividade, setAtividade] = useState();

  const [corretiva_preventiva, setCorretiva_preventiva] = useState();
  const [interna_externa, setInterna_externa] = useState();

  const [causa, setCausa] = useState();
  const [descricaocausa, setDescricaocausa] = useState();




  //Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  function handleClose() { setShow(false) };
  function handleClose1() { setShow1(false) };
  function handleClose2() { setShow2(false) };
  function handleClose3() { setShow3(false) };
  function handleClose4() { setShow4(false) };

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);

  


  const [corretiva, setCorretiva] = useState();
  const [preventiva, setPreventiva] = useState();

  const [inputFields, setInputFields] = useState(dinamica.length < 1 ? [{ descricao: '', corretiva: false, preventiva: false }
  ] : dinamica);
  const [inputFields1, setInputFields1] = useState(dinamica1.length < 1 ? [{ Item: '', Descricaopeca: '', Quantidade: '' }
  ] : dinamica1);
  const [inputFields2, setInputFields2] = useState(dinamica2.length < 1 ? [{ Resp: '', Tipo: '', data: '' }
  ] : dinamica2);
  const [inputFields3, setInputFields3] = useState(dinamica3.length < 1 ? [{ datas: '', Atividade: '' }
  ] : dinamica3);



    function RecebeProtocoloEEquipamento (){  setNumeroOS(dados.protocolo);setEquipamentos(dados.equipamentoProgramando);setDescricao(dados.equipamentoProgramando) };  

 /*   useEffect(() => {
    async function RecebeProtocoloEEquipamento (){  setNumeroOS(dados.protocolo);setEquipamentos(dados.equipamentoAberto);setDescricao(dados.descricaoAberto) };

    RecebeProtocoloEEquipamento();
  });  */ 

 // function BuscarAOCarregar(e){BuscaracorretivaPreventiva(e.target)}

/*  async function BuscarPeloProtocolo(){
    await  BuscaracorretivaPreventiva();
    RecebeProtocolo()
    
 }; */

/*  useEffect(()=>{RecebeProtocoloEEquipamento()}); 
 useEffect(()=>{getAberturaDeOS()});
 useEffect(()=>{getCadastroDeEquipamento()}); */

 const[filtroDePecas,setFiltroDePecas]=useState([]);

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

/*  useEffect(() => {
  const fetchData = async () => {
    try {
      await RecebeProtocoloEEquipamento();
      await getAberturaDeOS();
      await getCadastroDeEquipamento();
      //await BuscaracorretivaPreventiva();
      await buscarFiltroDePecas();
      /* await carregaUser(); */
/*     } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [ ]);

*/ 

/*    useEffect(() => {
    const fetchData2 = async () => {
      try {
        await BuscaracorretivaPreventiva();
      } catch (error) {
        console.error('Erro ao buscar a manutenção corretiva/preventiva:', error);
        // Trate o erro de acordo com suas necessidades (exibição de mensagem de erro, etc.)
      }
    };
  
    fetchData2();
  }, [BuscaracorretivaPreventiva]);   */

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        await RecebeProtocoloEEquipamento();
        await getAberturaDeOS();
        await getCadastroDeEquipamento();
       // await BuscaracorretivaPreventiva();
       // await carregaUser();
        await buscarFiltroDePecas();
        await buscarFiltroDePecas2();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(()=>{getAberturaDeOS()},[numeroOs]);
useEffect(()=>{getCadastroDeEquipamento()},[equipamentos]);


 

 async function getAberturaDeOS() {
  
  const res = await axios.get(Conexao.api + 'BuscarDadosDaAberturaOSWEB.php? protocolo=' + numeroOs);

  setSolicitante(res.data.solicitante);

  if (res.data.success === false) { } 
  else { console.log("Quem solicitou? " + solicitante); BuscarListaEU() }
 
};


async function getCadastroDeEquipamento() {
  
  const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php? equipamento=' + equipamentos);

  setModelo(res.data.modeloDeEquipamento);
  
 
  if (res.data.success === false) {  }
   else {  } 
};





async function InserirListaManutecacorretivaPreventiva() {
  const obj = { numeroOs, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, codigoTag, statu, descricao, corretiva_preventiva, interna_externa };

  const res = await axios.post(Conexao.api + 'InsertManutencaoPreventivaCorretivaweb.php', obj);

  //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
  console.log('Salvar', res)

  if (res.data.success === true) { Confirmacao(); AtualizarStatusOS() ;  }

  else { } 

  //InsertManutencaoPreventivaCorretivaweb 
};



function Confirmacao() {
  alert('Salvo com Sucesso!')
};



async function AtualizarStatusOS() {
  const obj = { numeroOs, statu };
 
  const res = await axios.post(Conexao.api+ 'SalvarAttStatusAberturaOSWEB.php', obj);
//  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
  if (res.data.success === true) { console.log("Status Atualizado")
  }
    
};






async function BuscarListaEU() {

  const res = await axios.get(Conexao.api + 'ListaDinamicaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

  setDinamica(res.data.result)
  console.log('retorno', res.data.result)

};




//********************************************************************************************************************************************************************* 

const Listamanutecao = [
  { label: "Corretiva", value: 'Corretiva' },
  { label: "Preventiva", value: 'Preventiva' },

];

const ListaTipo = [
  { label: "Calderaria", value: 'Calderaria' },
  { label: "Mecanica", value: 'Mecanica' },
  { label: "Eletrica", value: 'Eletrica' },
  { label: "Geral", value: 'Geral' },

];
const Listacausa = [
  { label: "Avaria normal(Desgaste,etc..)", value: 'Avaria' },
  { label: "Manuteção deficiente", value: 'Manutecao' },
  { label: "Falta de inspeção", value: 'Inspecao' },
  { label: "Operação inadequada", value: 'Operacao' },
  { label: "Defeito do equipamento ou instalação", value: 'Defeito' },
  { label: "Limpeza inadequada", value: 'Limpeza' },
  { label: "Manuteção Preventiva", value: 'MPreventiva' },
  { label: "Melhoria", value: 'Melhoria' },
  { label: "Outros", value: 'Outros' },

];


async function deleteUser(confirmacaoId) {
  
  const res = await axios.get(Conexao.api + 'ExcluirListaDinamica.php?id=' + confirmacaoId);
  if (res.data.success === true) {
    setConfirmacao(false);
    console.log('carlos' + numeroOs)
    BuscarLista()
  }

};

function confirmDeleteUser(id) {
  setConfirmacaoId(id);
  setConfirmacao(true);
  // alert('Excluir o item:'+ id)
};

 //Delete lista dinamica1

 async function deleteUser1(confirmacaoId1) {

  const res = await axios.get(Conexao.api + 'ExcluirListaDinamica1.php?id=' + confirmacaoId1);
  if (res.data.success === true) {
    setConfirmacao1(false);
    BuscarLista1()
  }
};

function confirmDeleteUser1(id) {
  setConfirmacaoId1(id);
  setConfirmacao1(true);
  // alert('Excluir o item:'+ id)
};

//Delete lista dinamica2

async function deleteUser2(confirmacaoId2) {

  const res = await axios.get(Conexao.api + 'ExcluirListaDinamica2.php?id=' + confirmacaoId2);
  if (res.data.success === true) {
    setConfirmacao2(false);
    BuscarLista2()
  }
};

function confirmDeleteUser2(id) {
  setConfirmacaoId2(id);
  setConfirmacao2(true);
  //alert('Excluir o item:'+ id)
};

//Delete lista dinamica3

async function deleteUser3(confirmacaoId3) {

  const res = await axios.get(Conexao.api + 'ExcluirListaDinamica3.php?id=' + confirmacaoId3);
  if (res.data.success === true) {
    setConfirmacao3(false);
    BuscarLista3()
  }
}

function confirmDeleteUser3(id) {
  setConfirmacaoId3(id);
  setConfirmacao3(true);
  // alert('Excluir o item:'+ id)
};



//Delete lista dinamica4
console.log('Id4', confirmacaoId4)
async function deleteUser4(confirmacaoId4) {

  const res = await axios.get(Conexao.api + 'ExcluirListaDinamica4.php?id=' + confirmacaoId4);
  if (res.data.success === true) {
    setConfirmacao4(false);
    BuscarLista4()
  }
};

function confirmDeleteUser4(id) {
  setConfirmacaoId4(id);
  setConfirmacao4(true);
  // alert('Excluir o item:'+ id)
};





async function SalvarListaD() {
  const obj = { numeroOs, descricaoModal, manutencaoPC };

  const res = await axios.post(Conexao.api + 'insertListaDinamica.php', obj);

  console.log('Insertlista2', numeroOs, descricaoModal, manutencaoPC)

  if (res.data.success === true) {
    setShow(false);
    BuscarLista()
  }
};

async function BuscarLista() {

  const res = await axios.get(Conexao.api + 'ListaDinamicaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
  if (res.data.success) {
    setClientes(res.data.result)
  }

  console.log('Lista  ' + res.data.success)
  BuscarLista1()
};
 

async function SalvarListaD1() {
  const obj = { numeroOs, item, descricaoPeca, quantidade };

  const res = await axios.post(Conexao.api + 'insertListaDinamica1.php', obj);

  if (res.data.success === true) {
    setShow1(false);
    BuscarLista1()
  }
};

async function BuscarLista1() {

  const res = await axios.get(Conexao.api + 'ListaDinamica_1ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
  if (res.data.success) {
    setClientes1(res.data.result)
  }
  console.log('retorno1', res.data.success)
  BuscarLista2()
};

async function SalvarListaD2() {
  const obj = { numeroOs, responsavel, tipo, dataModal };

  const res = await axios.post(Conexao.api + 'InsertListaDinamica2.php', obj);

  console.log('Insertlista2', numeroOs, responsavel, tipo, dataModal)
  if (res.data.success === true) {
    setShow2(false);
    BuscarLista2()
  }
};


async function BuscarLista2() {

  const res = await axios.get(Conexao.api + 'ListaDinamica_2ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

  if (res.data.success) {
    setClientes2(res.data.result)
  }
  console.log('retorno2', res.data.result)
  BuscarLista3()
};





async function SalvarListaD3() {
  const obj = { numeroOs, dataModal2, atividade };

  const res = await axios.post(Conexao.api + 'InsertListaDinamica3.php', obj);

  if (res.data.success === true) {
    setShow3(false);
    BuscarLista3()
  }
};



async function BuscarLista3() {

  const res = await axios.get(Conexao.api + 'ListaDinamica_3ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
  if (res.data.success) {
    setClientes3(res.data.result)
  }

  console.log('retorno3', res.data.result)
  BuscarLista4()
};




async function SalvarListaD4() {
  const obj = { numeroOs, causa, descricaocausa };

  const res = await axios.post(Conexao.api + 'InsertListaDinamica4.php', obj);

  if (res.data.success === true) {
    setShow4(false);
    BuscarLista4()
  }
};

async function BuscarLista4() {

  const res = await axios.get(Conexao.api + 'ListaDinamica_4ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
  if (res.data.success) {
    setClientes4(res.data.result)
  }

  console.log('retorno4', res.data.result)

};


  function LIMPAR() {
   
    setSolicitante("")
    setDataPrevisaoSaida("")
    setEquipamentos("")

    setDataEntrada("")
    setDataSaida("")
    setModelo("")

    setDataEntrada("")
    setHorarioEntrada("")
    setHorarioSaida("")
    setCodigoTag("")
    setDescricao("")
    setAux1DataPrevistaSaida("")

    setCorretiva_preventiva("")
    setInterna_externa("")
  };

 


  function confirmSalvar() {
    SalvarListaManutecacorretivaPreventiva("Em manutencao")
  };

  async function SalvarListaManutecacorretivaPreventiva(status) {
    const obj = {
      numeroOs, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, obs, codigoTag, statu: status, descricao
    };

    const res = await axios.post(Conexao.api + 'SalvarManutencaoPreventivaCorretiva.php', obj);

    //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);  const obj = { numeroOs, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, codigoTag, statu, descricao };
    console.log('Salvar', res)

    if (res.data.success === true) {
      alert('Atualizado Sucesso!')
    }

  };


 
  async function BuscaracorretivaPreventiva() {

    const res = await axios.get(Conexao.api + 'ListaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

   // setManutecao(res.data.result)
    console.log('retornoListar_Data', res.data.result)

    if (res.data.success === true) {  

          setSolicitante(res.data.result[0].solicitante)
    setDataPrevisaoSaida(res.data.result[0].dataPrevisaoSaida)
    setEquipamentos(res.data.result[0].equipamentos)

    setDataEntrada(res.data.result[0].dataEntrega)
    setDataSaida(res.data.result[0].dataSaida)
    setModelo(res.data.result[0].modelo)

    setDataEntrada(res.data.result[0].dataEntrada)
    setHorarioEntrada(res.data.result[0].horarioEntrada)
    setHorarioSaida(res.data.result[0].horarioSaida)
    setCodigoTag(res.data.result[0].codigoTag)
    setDescricao(res.data.result[0].descricao)
    setAux1DataPrevistaSaida(res.data.result[0].aux1DataPrevistaSaida)

    setCorretiva_preventiva(res.data.result[0].corretiva_preventiva)
    setInterna_externa(res.data.result[0].interna_externa)
    } 
    else {  }



  //  Confirmacao()
    BuscarLista();
    BuscarLista1();
   
  };



  async function BuscarCorretivaPreventiva() {

    const res = await axios.get(Conexao.api + 'BuscarManutPreventivaECorretivaWEB.php?numeroOS=' + numeroOs);

   // setManutecao(res.data.result)
    console.log('retornoListar_Data', res.data.result)

    if (res.data.success === true) {  

          setSolicitante(res.data.solicitante)
    setDataPrevisaoSaida(res.data.dataPrevisaoSaida)
    setEquipamentos(res.data.equipamentos)

    setDataEntrada(res.data.dataEntrega)
    setDataSaida(res.data.dataSaida)
    setModelo(res.data.modelo)

    setDataEntrada(res.data.dataEntrada)
    setHorarioEntrada(res.data.horarioEntrada)
    setHorarioSaida(res.data.horarioSaida)
    setCodigoTag(res.data.codigoTag)
    setDescricao(res.data.descricao)
    setAux1DataPrevistaSaida(res.data.aux1DataPrevistaSaida)

    setCorretiva_preventiva(res.data.corretiva_preventiva)
    setInterna_externa(res.data.interna_externa)
    } 
    else {  }



  //  Confirmacao()
    BuscarLista();
    BuscarLista1();
   
  };
  
 

return <div onLoad={BuscarCorretivaPreventiva} >

<Navbar />

<div  className='titulolaboratorio container-fluid'>
      <h1 className='texttitulo'>REGISTRO INTERNO DE MANUTENÇÃO CORRETIVA OU PREVENTIVA </h1>
    </div>
    <br/><br/>

  {/*   <div>
      <h3>Tela de Edição</h3>
      {dados && (
        <div>
          <p>Equipamento: {dados.equipamentoAberto}</p>
          <p>Protocolo da O.S.: {dados.protocolo}</p>
          <p>Data Abertura O.S.: {dados.dataAberturaAberto}</p>
          <p>Descrição: {dados.descricaoAberto}</p>
        </div>
      )}
    </div> */}


    <body className=' col-2 container text-center'>

     <h4> Protocolo da O.S.:</h4>
     <input className='colorInput text-center form-control' disabled="true" value={dados.protocolo} ></input>

    </body>

    <br />
   
   

    <body  class="mt-2">

  <div class="container text-center align-items-center ">
    <div class="row align-items-center">

      <div class="col ">
        <h7>solicitante</h7>
        <input name='solicitante' id='solicitante' className='form-control text-center colorInput mt-1' disabled="true" value={solicitante} onChange={(e) => setSolicitante(e.target.value)}  ></input>
      </div>

      <div class="col ">
        <h7>Data Prevista Saida</h7>
        <input name='dataPrevisaoSaida' id='dataPrevisaoSaida' type='date' className='form-control text-center colorInput mt-1 '  value={dataPrevisaoSaida} onChange={(e) => setDataPrevisaoSaida(e.target.value)}  ></input> 
      </div>

      <div class="col ">
        <h7>Equipamento</h7>
        <input name='equipamentos' id='equipamentos' className='form-control text-center colorInput mt-1' disabled="true" value={dados.equipamentoProgramando} onChange={(e) => setEquipamentos(e.target.value)} ></input>
      </div>


    </div>
  </div>
  </body>

  <body class="mt-3" >
  <div class="container text-center">
    <div class="row align-items-start">

      <div class="col ">
        <h7>Data Entrada</h7>
        <input name='dataEntrega' id='dataEntrega' type='date' className='form-control text-center colorInput mt-1' value={dataEntrada} onChange={(e) =>setDataEntrada(e.target.value)} ></input>
      </div>

      <div class="col ">
        <h7>Data Saida</h7>
        <input name='dataSaida' id='dataSaida' type='date' className='form-control text-center colorInput mt-1' value={dataSaida} onChange={(e) => setDataSaida(e.target.value)} ></input>
      </div>

      <div class="col ">
        <h7>Modelo</h7>
        <input name='modelo' id='modelo' className='form-control text-center colorInput mt-1' disabled="true" value={modelo} onChange={(e) => setModelo(e.target.value)} ></input>
      </div>

    </div>
  </div>
  </body>


  <body class="mt-3" >
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
        <h7>Hora do Equipamento Entrada</h7>
        <input name='horaEquipamento' id='horaEquipamento' type='time' className='form-control text-center colorInput mt-1' value={horarioEntrada} onChange={(e) => setHorarioEntrada(e.target.value)} ></input>
      </div>

      <div class="col ">
        <h7>Hora do Equipamento Saida</h7>
        <input name='horaEquipamento2' id='horaEquipamento2' type='time' className='form-control text-center colorInput mt-1' value={horarioSaida} onChange={(e) => setHorarioSaida(e.target.value)} ></input>
      </div>
      <div class="col ">
        <h7>Código/Tag</h7>
        <input name='codigoTag' id='codigoTag' className='form-control text-center colorInput mt-1' disabled="true" value={codigoTag} onChange={(e) => setCodigoTag(e.target.value)} ></input>
      </div>

    </div>
  </div>
  </body>

  <body class="container text-center mt-3">
      <div class="row align-items-start">
        <div class="row">
          <h6>Descrição </h6>
        </div>
        <br />
        <div class="row">
          <textarea cols={100} rows={10} className='form-control w-200 colorInput p-0 resize' disabled="true" onChange={(e) => setDescricao(e.target.value)} value={descricao}  ></textarea>
        </div>
      </div>
 </body>



    <br />
    <br /> 

   {/*  <hr  size='10' color='green' /> <hr  size='10' color='green' /> <hr  size='10' color='green' /> */}
{/* ********************************************************************************************************************************************************** */}


<div className="Painel p-2 container d-flex flex-column align-items-center">
  <div>
    <h6>TIPO DE MANUTEÇÃO:</h6>
  </div>
  <div className="w-50 "> 
    <select className='bord text-center w-100' value={corretiva_preventiva} onChange={(e) => setCorretiva_preventiva(e.target.value)}>
      <option selected value="...">Selecione...</option> 
      <option value="Preventiva">Preventiva</option>
      <option value="Corretiva">Corretiva</option> 
    </select>
  </div>
  <div className="w-50 mt-2">   
    <select className='bord text-center w-100' value={interna_externa} onChange={(e) => setInterna_externa(e.target.value)}>
      <option selected value="...">Selecione...</option> 
      <option value="Interna">Interna</option>
      <option value="Externa">Externa</option> 
    </select>
  </div>
</div>

    <br />
    <br />
    <br />

<div class="container text-center">
      <div class="row align-items-start">
      <h6>SERVIÇO A EXECUTAR OU EXECUTADOS: </h6>
        <ListaDinamicaPg1 arrayClientes={clientes} clickDelete={confirmDeleteUser} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow} class="btnlogin  me-md-2  " > Adicionar </button>
        </div>
        {
          confirmacao ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser(confirmacaoId)}
            onCancel={() => setConfirmacao(false)}
            reverseButtons={false}
            
          >
            Deseja excluir o Item selecionado?
          </SweetAlert> : null}

         

        <Modal show={show} onHide={handleClose}  >
          <Modal.Header closeButton>
            <Modal.Title>Serviço a Executar ou Executado:</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Manutenção</Form.Label>
                <Select

                  options={Listamanutecao}
                  onChange={item => {
                    setManutencaoPC(item.value);

                    console.log(item.value);
                  }} />


              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" onChange={(e) => { setDescricaoModal(e.target.value); console.log(descricaoModal) }} rows={3}


                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fechar </Button>

            <Button variant="primary" onClick={(e) => (SalvarListaD(e))}>Salvar </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="container text-center">
      <div class="row align-items-start">
      <h6>REPOSIÇÃO DE PEÇA/COMPONENTES: </h6>
        <ListaDinamica1 arrayClientes1={clientes1} clickDelete1={confirmDeleteUser1} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow1} class="btnlogin  me-md-2  " > Adicionar </button>
        </div>
        {
          confirmacao1 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser1(confirmacaoId1)}
            onCancel={() => setConfirmacao1(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show1} onHide={handleClose1}  >
          <Modal.Header closeButton>
            <Modal.Title>Reposição de peça/Componentes:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Item:</Form.Label>
                <div >            
                 <select onChange={(e)=> setItem(e.target.value)} value={item} className='form-select text-center colorInput' type="text" >  
                 <option value={"-"}>Selecione</option>
                  { filtroDePecasManuentacao.map((x,a)=>(<option key={a}> {x.item} </option>))}    
                  </select>                                       
               </div> 
            
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição de Material:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setDescricaoPeca(e.target.value) }}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Quantidade:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setQuantidade(e.target.value) }}
                  autoFocus
                />
              </Form.Group>



            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD1(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="container text-center">
      <div class="row align-items-start">
      <h6>REALIZAÇÃO: </h6>
        <ListaDinamica2 arrayClientes2={clientes2} clickDelete2={confirmDeleteUser2} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow2} class="btnlogin  me-md-2  " > Adicionar </button>
        </div>
        {
          confirmacao2 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser2(confirmacaoId2)}
            onCancel={() => setConfirmacao2(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show2} onHide={handleClose2}  >
          <Modal.Header closeButton>
            <Modal.Title>Realização</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Responsável:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setResponsavel(e.target.value) }}
                  autoFocus
                />
              </Form.Group>



              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tipo</Form.Label>
                <Select

                  options={ListaTipo}
                  onChange={item => {
                    setTipo(item.value);
                    console.log(item.value);
                  }} />
              </Form.Group>



              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => { setDataModal(moment(e.target.value).format("DD/MM/YYYY")) }}
                  autoFocus
                />

              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD2(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="container text-center">
      <div class="row align-items-start">
      <h6>POSSÍVEIS CAUSAS: </h6>
        <ListaDinamica4 arrayClientes4={clientes4} clickDelete4={confirmDeleteUser4} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow4} class="btnlogin  me-md-2  " > Adicionar </button>
        </div>
        {
          confirmacao4 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser4(confirmacaoId4)}
            onCancel={() => setConfirmacao4(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show4} onHide={handleClose4}  >
          <Modal.Header closeButton>
            <Modal.Title>Selecione Possiveis Causas </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>


              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Causa</Form.Label>
                <Select

                  options={Listacausa}
                  onChange={item => {
                    setCausa(item.value);
                    console.log(item.value);
                  }} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setDescricaocausa(e.target.value) }}
                  autoFocus
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD4(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>

    <br />
    <br />
    <br />


   {/*  <div class="container text-center">
      <div class="row align-items-start">
      <h6>DIÁRIO DE BORDO: </h6>
        <ListaDinamica3 arrayClientes3={clientes3} clickDelete3={confirmDeleteUser3} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow3} class="btnlogin  me-md-2  " > Adicionar </button>
        </div>
        {
          confirmacao3 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser3(confirmacaoId3)}
            onCancel={() => setConfirmacao3(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show3} onHide={handleClose3}  >
          <Modal.Header closeButton>
            <Modal.Title>Diario de Bordo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => { setDataModal2(moment(e.target.value).format("DD/MM/YYYY")) }}
                  autoFocus
                />

              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Atividade:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setAtividade(e.target.value) }}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD3(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
 */}




{/* ********************************************************************************************************************************************************** */}
   {/*  <br />
    <br />
   
   
    <hr  size='10' color='green' /> <hr  size='10' color='green' /> <hr  size='10' color='green' /> */}
<br /><br /><br /><br />
<div class="row d-flex align-items-end justify-content-end ">
      <div class="col-4">
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={(e) => (confirmSalvar(e))} class="btnlogin  me-md-2  "  Button > Salvar </button>
        </div>
      </div>
    </div>

      




 {/*  <input  value={numeroOs}></input> 
  <br></br>
  <br></br>
  <input  value={equipamentos}></input>  */}

</div>




};


