import Navbar from '../NavbarManutencao/navbarManutencao';
import './ProgramacaoManutencao.css';
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function ProgramacaoManutencao (equipamento){
    
    const history = useHistory();

    const [ statu,setStatu]=useState("Aberto");
    const [ statuProgramando,setStatuProgramando]=useState("Programando");
    const [ statuEmAndamento,setStatuEmAndamento]=useState("Em manutencao");
    const [ statuFinalizadas,setStatuFinalizadas]=useState("Finalizada");

    const [buscadeAberta, setBuscadeAberta]= useState([]);
    const [quantidadeAbertas, setQuantidadeAbertas]= useState();
    const [quantidadeProgramando, setQuantidadeProgramando]= useState();
    const [quantidadeEmAndamento, setQuantidadeEmAndamento]= useState();
    const [quantidadeFinalizadas, setQuantidadeFinalizadas]= useState();

    const [buscadeProgramando, setBuscadeProgramando]= useState([]);

    const [dadosCarregados, setDadosCarregados] = useState(false);
    const [dadosSelecionados, setDadosSelecionados] = useState(null);

    const [dadosCarregados2, setDadosCarregados2] = useState(false);
    const [dadosSelecionados2, setDadosSelecionados2] = useState(null);

    const [dadosCarregados3, setDadosCarregados3] = useState(false);
    const [dadosSelecionados3, setDadosSelecionados3] = useState(null);

    const [dadosCarregados4, setDadosCarregados4] = useState(false);
    const [dadosSelecionados4, setDadosSelecionados4] = useState(null);


    const [abrirPlanejar, setAbrirPlanejar]=useState(false);
    const [abrirProgramando, setAbrirProgramando] = useState(false);
    const [abrirEmAndamento, setAbrirEmAndamento] = useState(false);
    const [abrirFinalizadas, setAbrirFinalizadas] = useState(false);

    const [statuPeca, setStatuPeca] = useState('aberto');
const [horimetroAtual, setHorimetroAtual] = useState();
const [statuFinalizado, setStatuFinalizado] = useState('Finalizado');
const [manutencaoExpirada2, setManutencaoExpirada2] = useState([]);
const [horimetroAtual2, setHorimetroAtual2] = useState();
const [equipamento2, setEquipamento2] = useState();


  const [dataStart, setDataStart] = useState();
  const [horimetro, setHorimetro] = useState();
  const [manutencaoExpirada, setManutencaoExpirada] = useState([]);

  const [buscadeEmAndamento,setBuscadeEmAndamento]=useState([]);
  const [buscadeFinalizadas,setBuscadeFinalizadas]=useState([]);

   
    


    async function BuscarQuantidadeAbertas() {
    const res = await axios.get(Conexao.api + 'ListaAberturadeOSWEB.php?statu='+ statu);
    console.log( res.data.result)
    if (res.data.success === false) { } 
       else {
    setQuantidadeAbertas(res.data.result.length);
      }  
    };
 
     useEffect(()=>{BuscarQuantidadeAbertas()});

        async function BuscarAbertas() {
        const res = await axios.get(Conexao.api + 'ListaAberturadeOSWEB.php?statu='+ statu);
        console.log( res.data.result)
        if (res.data.success === false) { }
           else {  
        setBuscadeAberta(res.data.result);
        console.log("ABERTAAA    " + res.data.result) 
        
           
          }  
        };


   // CARREGAR AS ABERTAS PARA TELA DE EDIÇÃO
      function CarregaParaoutraTela(){
        BuscarAbertas();
        //BuscarProgramando();
        const dadosAPI = [
          { equipamentoAberto: 'Equipamento 1', protocolo: 'Protocolo 1', dataAberturaAberto: 'Data Abertura 1', descricaoAberto: 'Descrição 1', nvurgencia: 'Nivel 1' },
          { equipamentoAberto: 'Equipamento 2', protocolo: 'Protocolo 2', dataAberturaAberto: 'Data Abertura 2', descricaoAberto: 'Descrição 2', nvurgencia: 'Nivel 2' },
          { equipamentoAberto: 'Equipamento 3', protocolo: 'Protocolo 3', dataAberturaAberto: 'Data Abertura 3', descricaoAberto: 'Descrição 3', nvurgencia: 'Nivel 3' }
        ];
        setBuscadeAberta(dadosAPI);
      };

     async function handleClick(f){
       setDadosSelecionados(f);
       setDadosCarregados(true);  
      }; 
    
      const clickEnviarDados = () => {
        // Aqui você pode redirecionar para a outra tela e passar os dados como parâmetros da rota
       // handleClick(f)
        history.push('/app/TelaDeEdição', { dados: dadosSelecionados });
      };

      async function deleteUser( ) {
        const res = await axios.get(Conexao.api + 'ExcluirOrdemDeServico.php?protocolo=' + dadosSelecionados.protocolo);
        if (res.data.success === true) {
         // setConfirmacao(false);
         BuscarAbertas()
        }
    }; 


// **************************************************************************************************************************

      //PROGRAMANDO
  
async function BuscarQuantidadeProgramando() {
  const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuProgramando);
  console.log( res.data.result)
  if (res.data.success === false) { } 
     else {
  setQuantidadeProgramando(res.data.result.length);
  console.log("PROGRAMA FAAAAZ..." + res.data.result.length) ;
    }  
  };
   useEffect(()=>{BuscarQuantidadeProgramando()});

   async function BuscadeProgramando() {
    const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuProgramando);
    console.log( res.data.result)
    if (res.data.success === false) { } 
       else {
        setBuscadeProgramando(res.data.result);
    console.log("PROGRAMANDO FAAAAZ..." + res.data.result) ;
      }  
    };

   // useEffect(()=>{CarregaParaoutraTelaProgramando()});

  function CarregaParaoutraTelaProgramando(){
    BuscadeProgramando();
    //BuscarProgramando();
    const dadosAPI2 = [
      { equipamentoProgramando: 'Equipamento 1', protocolo: 'Protocolo 1', dataAberturaAberto: 'Data Abertura 1', descricaoAberto: 'Descrição 1', nvurgencia: 'Nivel 1' },
      { equipamentoProgramando: 'Equipamento 2', protocolo: 'Protocolo 2', dataAberturaAberto: 'Data Abertura 2', descricaoAberto: 'Descrição 2', nvurgencia: 'Nivel 2' },
      { equipamentoProgramando: 'Equipamento 3', protocolo: 'Protocolo 3', dataAberturaAberto: 'Data Abertura 3', descricaoAberto: 'Descrição 3', nvurgencia: 'Nivel 3' }
    ];
    setBuscadeProgramando(dadosAPI2);
    console.log('testeeeee...' + buscadeProgramando)
  };

  async function handleClick2(f){
    setDadosSelecionados2(f);
    setDadosCarregados2(true);  
   }; 
 
   const clickEnviarDados2 = () => {
     // Aqui você pode redirecionar para a outra tela e passar os dados como parâmetros da rota
    // handleClick(f)
     history.push('/app/TelaDeEdição2', { dados: dadosSelecionados2 });
   };
  





   //777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777



   async function BuscarQuantidadeEmAndamento() {
    const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuEmAndamento);
    console.log( res.data.result)
    if (res.data.success === false) { } 
       else {
        setQuantidadeEmAndamento(res.data.result.length);
    console.log("EM ANDAMENTO FAAAAZ..." + res.data.result.length) ;
      }  
    };
     useEffect(()=>{BuscarQuantidadeEmAndamento()});

     async function BuscadeEmAndamento() {
      const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuEmAndamento);
      console.log( res.data.result)
      if (res.data.success === false) {

       } 
         else {
          setBuscadeEmAndamento(res.data.result);
      console.log("PROGRAMANDO FAAAAZ..." + res.data.result) ;
        }  
      };
  
     // useEffect(()=>{CarregaParaoutraTelaProgramando()});
  
    function CarregaParaoutraTelaEmAndamento(){
      BuscadeEmAndamento();
      //BuscarProgramando();
      const dadosAPI2 = [
        { equipamentoProgramando: 'Equipamento 1', protocolo: 'Protocolo 1', dataAberturaAberto: 'Data Abertura 1', descricaoAberto: 'Descrição 1', nvurgencia: 'Nivel 1' },
        { equipamentoProgramando: 'Equipamento 2', protocolo: 'Protocolo 2', dataAberturaAberto: 'Data Abertura 2', descricaoAberto: 'Descrição 2', nvurgencia: 'Nivel 2' },
        { equipamentoProgramando: 'Equipamento 3', protocolo: 'Protocolo 3', dataAberturaAberto: 'Data Abertura 3', descricaoAberto: 'Descrição 3', nvurgencia: 'Nivel 3' }
      ];
      setBuscadeEmAndamento(dadosAPI2);
      console.log('testeeeee...' + buscadeEmAndamento)
    };
  
    async function handleClick3(f){
      setDadosSelecionados3(f);
      setDadosCarregados3(true);  
     }; 
   
     const clickEnviarDados3 = () => {
       // Aqui você pode redirecionar para a outra tela e passar os dados como parâmetros da rota
      // handleClick(f)
       history.push('/app/TelaDeEdição3', { dados: dadosSelecionados3});
     };

        //777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

   async function BuscarQuantidadeFinalizadas() {
    const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuFinalizadas);
    console.log( res.data.result)
    if (res.data.success === false) { } 
       else {
        setQuantidadeFinalizadas(res.data.result.length);
    console.log("EM ANDAMENTO FAAAAZ..." + res.data.result.length) ;
      }  
    };
     useEffect(()=>{BuscarQuantidadeFinalizadas()});

     async function BuscadeFinalizadas() {
      const res = await axios.get(Conexao.api + 'ListaStatuProgramandoWEB.php?statu='+ statuFinalizadas);
      console.log( res.data.result)
      if (res.data.success === false) { } 
         else {
          setBuscadeFinalizadas(res.data.result);
      console.log("PROGRAMANDO FAAAAZ..." + res.data.result) ;
        }  
      };
  
     // useEffect(()=>{CarregaParaoutraTelaProgramando()});
  
    function CarregaParaoutraTelaFinalizadas(){
      BuscadeFinalizadas();
      //BuscarProgramando();
      const dadosAPI2 = [
        { equipamentoProgramando: 'Equipamento 1', protocolo: 'Protocolo 1', dataAberturaAberto: 'Data Abertura 1', descricaoAberto: 'Descrição 1', nvurgencia: 'Nivel 1' },
        { equipamentoProgramando: 'Equipamento 2', protocolo: 'Protocolo 2', dataAberturaAberto: 'Data Abertura 2', descricaoAberto: 'Descrição 2', nvurgencia: 'Nivel 2' },
        { equipamentoProgramando: 'Equipamento 3', protocolo: 'Protocolo 3', dataAberturaAberto: 'Data Abertura 3', descricaoAberto: 'Descrição 3', nvurgencia: 'Nivel 3' }
      ];
      setBuscadeFinalizadas(dadosAPI2);
      console.log('testeeeee...' + buscadeFinalizadas)
    };
  
    async function handleClick4(f){
      setDadosSelecionados4(f);
      setDadosCarregados4(true);  
     }; 
   
     const clickEnviarDados4 = () => {
       // Aqui você pode redirecionar para a outra tela e passar os dados como parâmetros da rota
      // handleClick(f)
       history.push('/app/TelaDeEdição4', { dados: dadosSelecionados4 });
     };




// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  useEffect(() => {
    async function fetchData() {
      const equipamento = await buscarManutencoesExpiradas();
      if (equipamento) {
        await getItem(equipamento);
        buscarFILTROfINALIZADOPecas();
      } else {
        console.log('Não foi possível obter o equipamento.');
      }
    }
    fetchData();
  }, []);


  async function buscarManutencoesExpiradas() {
    // Lógica para buscar o equipamento
    const res = await axios.get(Conexao.api + 'ListaPecasSemFiltrosWEB.php?statuPeca=' + statuPeca);
    const manutencoesExpiradas = res.data.result;
    setManutencaoExpirada(res.data.result)
    
    if (manutencoesExpiradas.length > 0) {
      const equipamentoEncontrado = manutencoesExpiradas[0].equipamento;
      return equipamentoEncontrado;
    } else {
      return null; // Nenhum equipamento encontrado
    }
  };

  
  
  async function getItem(equipamento) {
      const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php?equipamento=' + equipamento);
  
  setHorimetro(res.data.horimetro);

  setDataStart(res.data.dataStart);
  setHorimetroAtual(res.data.horimetroAtual);
  // buscarManutencoesExpiradas(res.data.equipamento);
  if (res.data.success === false) {
   
  } else {
    // fazer algo
  }
  }



async function buscarFILTROfINALIZADOPecas() { 
  const res = await axios.get(Conexao.api + 'ListaPecasSemFiltrosWEB2.php?statuFinalizado=' + statuFinalizado );  
  if (res.data.success === false) {
//console.log("nada")   
  } else {
    setManutencaoExpirada2(res.data.result)
  }  
};






function abrirPlanejarBody(){
  setAbrirPlanejar(true)
  setAbrirProgramando(false)
  setAbrirEmAndamento(false)
  setAbrirFinalizadas(false)
  /* setAbrirPlanejar((prevValue) => !prevValue); */
 };

 function abrirProgramandoBody(){
  setAbrirProgramando(true)
  setAbrirPlanejar(false)
  setAbrirEmAndamento(false)
  setAbrirFinalizadas(false)
 /*  setAbrirProgramando((prevValue) => !prevValue); */
 };

 function abrirEmAndamentoBody(){
  setAbrirEmAndamento(true)
  setAbrirFinalizadas(false)
  setAbrirPlanejar(false)
  setAbrirProgramando(false)
 /*  setAbrirEmAndamento((prevValue) => !prevValue); */
 };

 function abrirFinalizadasBody(){
  setAbrirEmAndamento(false)
  setAbrirFinalizadas(true)
  setAbrirPlanejar(false)
  setAbrirProgramando(false)

 /*  setAbrirFinalizadas((prevValue) => !prevValue); */
 };


 function toggleAbrirPlanejar() {
/*   setAbrirPlanejar(true)
  setAbrirPlanejar(false) */

  setAbrirProgramando(false)
  setAbrirEmAndamento(false)
  setAbrirFinalizadas(false)
  
 setAbrirPlanejar((prevValue) => !prevValue); 
};

function toggleAbrirProgramando(){
 /*  setAbrirProgramando(true)
  setAbrirProgramando(false) */
  setAbrirPlanejar(false)
  setAbrirEmAndamento(false)
  setAbrirFinalizadas(false)
   setAbrirProgramando((prevValue) => !prevValue); 

 };

 function toggleAbrirEmAndamento(){
/*   setAbrirEmAndamento(true)
  setAbrirEmAndamento(false)  */
  setAbrirFinalizadas(false)
  setAbrirPlanejar(false)
  setAbrirProgramando(false)
   setAbrirEmAndamento((prevValue) => !prevValue);

 };

 function toggleAbrirFinalizadas(){
/*   setAbrirFinalizadas(true)
  setAbrirFinalizadas(false) */
  setAbrirEmAndamento(false)
  setAbrirPlanejar(false)
  setAbrirProgramando(false)
   setAbrirFinalizadas((prevValue) => !prevValue); 

 };
 


    
    return <div  >

<Navbar />
    <div className='titulolaboratorio container-fluid'>
      <h1 className='texttitulo'>PROGRAMAÇÃO DE MANUTENÇÃO</h1>
    </div>
    <br/><br/>

      <body class="container text-center  " >

        <div class="col  align-items-center justify-content-center p-2">
            <div class="row d-flex align-items-center justify-content-center ">
                <div class="col-sm-2">
                    <h6>O.S. Abertas</h6>       
                    <input disabled className='form-control text-center colorInput ' value={quantidadeAbertas} ></input>
                </div>
                <div class="col-sm-2">
                    <h6>O.S. Programadas</h6>       
                    <input disabled className='form-control text-center colorInput  ' value={quantidadeProgramando} ></input>
                </div>
                <div class="col-sm-2">
                    <h6>O.S. Em andamento</h6>       
                    <input disabled      className='form-control text-center colorInput  ' value={quantidadeEmAndamento}   ></input>
                </div>
                <div class="col-sm-2">
                    <h6>O.S. Finalizadas</h6>       
                    <input disabled     className='form-control text-center colorInput  ' value={quantidadeFinalizadas}></input>
                </div>
             </div>      
         </div>
      </body>

      <br/>

      <body class="container-fluid text-center cinzaclaro "> 
      <br/>
      
            <body class="container text-center  cinzaclaro ">
                <div class="col  align-items-center justify-content-center p-2">
                    <div class="row d-flex align-items-center justify-content-center ">
                    <div class="col-sm-auto cinzaclaro">
                          {/*   <button onClick={(e)=> CarregaParaoutraTela(e) & abrirPlanejarBody()} class="btn btn-outline-success black "  > <h5> Planejar </h5></button>  */}
                            <button onClick={(e)=> CarregaParaoutraTela(e) & toggleAbrirPlanejar() } class="btn btn-outline-success black"> <h5> Planejar </h5></button>                                 
                        </div>
                      
                        <div class="col-sm-auto cinzaclaro">
                       {/*  <button  class="btn btn-outline-success black" onClick={(e)=> CarregaParaoutraTelaProgramando(e) & abrirProgramandoBody() } > <h5>A realizar</h5></button>   */}
                        <button onClick={(e)=> CarregaParaoutraTelaProgramando(e) &  toggleAbrirProgramando() } class="btn btn-outline-success black"> <h5> Planejadas </h5></button>                                 
                        </div>
                        <div class="col-sm-auto cinzaclaro">
                            {/* <button class="btn btn-outline-success black" onClick={(e)=> CarregaParaoutraTelaEmAndamento(e) & abrirEmAndamentoBody() }> <h5> Em andamento </h5></button> */}
                             <button onClick={(e)=> CarregaParaoutraTelaEmAndamento(e) & toggleAbrirEmAndamento() } class="btn btn-outline-success black"> <h5> Em andamento </h5></button>                                 
                        </div>
                        <div class="col-sm-auto cinzaclaro">
                           {/*  <button class="btn btn-outline-success black" onClick={(e)=> CarregaParaoutraTelaFinalizadas(e) & abrirFinalizadasBody(e) }>  <h5> Finalizadas </h5></button>  */} 
                             <button onClick={(e)=> CarregaParaoutraTelaFinalizadas(e) & toggleAbrirFinalizadas()} class="btn btn-outline-success black"> <h5> Finalizadas</h5></button>                                
                        </div>


                    </div>   
                     
                </div>
                </body>
                <br/>



{abrirPlanejar===true? 

<body className="container text-center cinzaclaro">

<div  id="carouselExampleFade" data-bs-ride="carousel" className="col align-items-center justify-content-center p-2" style={{ overflowX: "auto" }}>
  <div   className="row d-flex align-items-center justify-content-start  p-2" style={{ flexWrap: "nowrap" }} >
          {/* {listaDeAberta} */}

{                       
buscadeAberta.map((f, i) => (

<button className="col-sm-auto me-3 align-items-start text-start borda colorInput p-4 arredondar" key={i} onClick={() => handleClick(f) } >

   <div className="row colorInput">
        <h6>Protocolo da O.S.: {f.protocolo}</h6>
   </div>
   <div className="row colorInput">
        <h6>Equipamento: {f.equipamentoAberto}</h6>
    </div>
    <div className="row colorInput">
        <h6>Nível de Urgência: {f.nvurgencia}</h6>
    </div>

     <div className="row colorInput">
         <h6>Data de Abertura: {f.dataAberturaAberto}</h6>
     </div>
     <div className="row colorInput">
         <h6>Descrição: {f.descricaoAberto}</h6>
     </div>
 
    
 </button>

))};

</div>
<button class="botaoadicionar mt-3">  <Link to="/app/AberturaOSManutencao" className="nav-link logout" aria-current="page" >Abrir nova O.S.</Link> </button> 
</div>
</body>

:null}




{abrirProgramando===true? 

<body className="container text-center cinzaclaro">

<div  id="carouselExampleFade" data-bs-ride="carousel" className="col align-items-center justify-content-center p-2" style={{ overflowX: "auto" }}>
  <div   className="row d-flex align-items-center justify-content-start  p-2" style={{ flexWrap: "nowrap" }} >
          {/* {listaDeAberta} */}

{                       
buscadeProgramando.map((f, i) => (

<button className="col-sm-auto me-3 align-items-start text-start borda colorInput p-4 arredondar" key={i} onClick={() => handleClick2(f) } >

<div className="row colorInput">
     <h6>Protocolo da O.S.: {f.protocolo}</h6>
</div>
<div className="row colorInput">
     <h6>Equipamento: {f.equipamentoProgramando}</h6>
 </div>      
</button>

))};

</div>
</div>
</body>

:null}



{ abrirEmAndamento === true?
  <body className="container text-center  cinzaclaro">
    <div  id="carouselExampleFade" data-bs-ride="carousel" className="col  align-items-center justify-content-center p-2" style={{ overflowX: "auto" }}>
   <div   className=" d-flex align-items-center justify-content-start  p-2" style={{ flexWrap: "nowrap" }} >

   {                       
buscadeEmAndamento.map((ea, i) => (

<button className="col-sm-auto me-3 align-items-start text-start borda colorInput p-4 arredondar" key={i} onClick={() => handleClick3(ea) } >

<div className="row colorInput">
     <h6>Protocolo da O.S.: {ea.protocolo}</h6>
</div>
<div className="row colorInput">
     <h6>Equipamento: {ea.equipamentoProgramando}</h6>
 </div>      
</button>

))};

   </div>
   </div>
  </body>
:null}


{ abrirFinalizadas === true?
  <body className="container text-center cinzaclaro">
    <div  id="carouselExampleFade" data-bs-ride="carousel" className="col align-items-center justify-content-center p-2" style={{ overflowX: "auto" }}>
    <div   className="row d-flex align-items-center justify-content-start  p-2" style={{ flexWrap: "nowrap" }} >

    {                       
buscadeFinalizadas.map((fi, i) => (

<button className="col-sm-auto me-3 align-items-start text-start borda colorInput p-4 arredondar" key={i} onClick={() => handleClick4(fi) } >

<div className="row colorInput">
     <h6>Protocolo da O.S.: {fi.protocolo}</h6>
</div>
<div className="row colorInput">
     <h6>Equipamento: {fi.equipamentoProgramando}</h6>
 </div>      
</button>

))};

    </div>
    </div>
  </body>
:null}


                                   
      
 </body>


       

       { 
        <div class="  container mt-3 text-center  ">

        {dadosCarregados && dadosSelecionados && abrirPlanejar===true && (

          
        
        <div class="col-6 offset-3 p-3 borda ">
           <h3>Protocolo da O.S.: {dadosSelecionados.protocolo}</h3>

           <div class="container text-center   ">   
              <button class="botaoadicionar" onClick={clickEnviarDados}>Editar Ordem de serviço</button>

              <button type="button" class=" mt-2 botaoadicionarRed" data-bs-toggle="modal" data-bs-target="#ModalExcluirOS" >EXCLUIR ORDEM DE SERVIÇO</button>

        </div>
        
        </div>
      )}

        </div>
       } ;



{        <div class="  container mt-3 text-center  ">

        {dadosCarregados2 && dadosSelecionados2 && abrirProgramando===true && (
               
        <div class="col-6 offset-3 p-3 borda ">
           <h3>Protocolo da O.S.: {dadosSelecionados2.protocolo}</h3>

           <div class="container text-center   ">   
              <button class="botaoadicionar" onClick={clickEnviarDados2}>Editar Ordem de serviço</button>

             {/*  <button type="button" class=" mt-2 botaoadicionarRed" data-bs-toggle="modal" data-bs-target="#ModalExcluirOS" >EXCLUIR ORDEM DE SERVIÇO</button> */}

        </div>
        
        </div>
      )}

        </div>
       } ;

{        <div class="  container mt-3 text-center  ">

{dadosCarregados3 && dadosSelecionados3 && abrirEmAndamento===true && (
       
<div class="col-6 offset-3 p-3 borda ">
   <h3>Protocolo da O.S.: {dadosSelecionados3.protocolo}</h3>

   <div class="container text-center   ">   
      <button class="botaoadicionar" onClick={clickEnviarDados3}>Editar Ordem de serviço</button>

     {/*  <button type="button" class=" mt-2 botaoadicionarRed" data-bs-toggle="modal" data-bs-target="#ModalExcluirOS" >EXCLUIR ORDEM DE SERVIÇO</button> */}

</div>

</div>
)}

</div>
} ;

{        <div class="  container mt-3 text-center  ">

        {dadosCarregados4 && dadosSelecionados4 && abrirFinalizadas===true && (
               
        <div class="col-6 offset-3 p-3 borda ">
           <h3>Protocolo da O.S.: {dadosSelecionados4.protocolo}</h3>

           <div class="container text-center   ">   
              <button class="botaoadicionar" onClick={clickEnviarDados4}>Editar Ordem de serviço</button>

             {/*  <button type="button" class=" mt-2 botaoadicionarRed" data-bs-toggle="modal" data-bs-target="#ModalExcluirOS" >EXCLUIR ORDEM DE SERVIÇO</button> */}

        </div>
        
        </div>
      )}

        </div>
       } ;




<div class="modal" id="ModalExcluirOS" tabindex="" aria-labelledby="ModalExcluirOSLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-x">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="ModalExcluirOSLabel">Deseja realmente excluir a ordem de serviço {/* {dadosSelecionados.protocolo} */}?</h3>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>

   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>             
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=> deleteUser(e)} >Sim</button>
      </div>
    </div>
  </div>
</div>
 
      




{abrirProgramando===false && abrirPlanejar===false && abrirEmAndamento===false && abrirFinalizadas===false ? 

<div className="container  offset-4 align-items-center justify-content-center ">
    <Chart
      width={'500px'}
      height={'400px'}
      chartType="ColumnChart"
      loader={<div>Carregando gráfico...</div>}
      data={[
        ['API', '', { role: 'style' }],
        ['O.S. Abertas', quantidadeAbertas, 'color: #ff0000'],
        ['O.S. Programadas', quantidadeProgramando, 'color: #0000FF'],
        ['O.S. EmAndamento', quantidadeEmAndamento, 'color: #32CD32'],
        ['O.S. Finalizadas', quantidadeFinalizadas, 'color: #FFA500'],
        
      ]}
      options={{
        title: '',
      
        
      }}
    />
  </div>
        
:null}




   <div>



    <div className=" scrollable mt-3">

    <div className="text-center mt-2 justify-content-center container d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="me-3 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg> 
<h5 className=" bg-light  mt-1">ALERTA DE MANUTENÇÕES  </h5>

      </div>

     {/*  {manutencaoExpirada.map((p, i) => (
        <div className="container text-center colorInput mt-1" key={i}>
          {horimetroAtual >= parseInt(p.horasParaTroca) + parseInt(horimetro) ? (
            <div className="alert alert-danger">
                            
              <h6>             
                A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> atingiu a quantidade de horas e necessita de manutenção
              </h6>
            </div>
          ) : null}

          {moment().format('DD-MM-YYYY') >= (moment(dataStart).add(parseInt(p.tempoDeTroca), 'days').format('DD-MM-YYYY')) ? (
            <div className="alert alert-danger">
              <h6>
                A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> chegou à data prevista e necessita de manutenção
              </h6>
            </div>
          ) : null}
        </div>
      ))} */}


<div>
    
      {Array.isArray(manutencaoExpirada) && manutencaoExpirada.map((p, i) => (
        <div className="container text-center colorInput mt-1" key={i}>
          {horimetroAtual >= parseInt(p.horasParaTroca) + parseInt(horimetro) ? (
            <div className="alert alert-danger">
              <h6>             
                A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> atingiu a quantidade de horas e necessita de manutenção
              </h6>
            </div>
          ) : null}

          {moment().format('DD-MM-YYYY') >= (moment(dataStart).add(parseInt(p.tempoDeTroca), 'days').format('DD-MM-YYYY')) ? (
            <div className="alert alert-danger">
              <h6>
                A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> chegou à data prevista e necessita de manutenção
              </h6>
            </div>
          ) : null}
        </div>
      ))}
    </div>
    </div>


    {Array.isArray(manutencaoExpirada2) && manutencaoExpirada2.map((v, i) => (
        <div className="container text-center colorInput " key={i}>
          {parseInt(v.horimetroAtual) >= parseInt(v.horasParaTroca) + parseInt(v.horimetroFinalizacao) ? (
            <div className="alert alert-danger">
                            
              <h6>             
                A peça <strong>{v.peca}</strong> do equipamento <strong>{v.equipamento}</strong> atingiu a quantidade de horas e necessita de manutenção
              </h6>
            </div>
          ) : null}

          {moment().format('DD-MM-YYYY') >= (moment(v.dataFinalizacao).add(parseInt(v.tempoDeTroca), 'days').format('DD-MM-YYYY')) ? (
            <div className="alert alert-danger">
              <h6>
                A peça <strong>{v.peca}</strong> do equipamento <strong>{v.equipamento}</strong> chegou à data prevista e necessita de manutenção
              </h6>
            </div>
          ) : null}
        </div>
      ))}

  </div>




    <br/><br/><br/><br/>
    </div>
}; 

