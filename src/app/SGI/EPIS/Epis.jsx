import Navbar from './NavBarSSMT';
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import moment from 'moment';




export default function Epis(){

  const [nomeOuSetor,setNomeOuStor]=useState();
const [nome,setNome]=useState();
const [funcao,setFuncao]=useState();
const [mudancaFuncao,setMudancaFuncao]=useState();
const [admissao,setAdmissao]=useState();
const [setor,setSetor]=useState();

const [data,setData]=useState();
const [qtd,setQtd]=useState();
const [und,setUnd]=useState();
const [descricaoEpi,setDescricaoEpi]=useState();
const [descricao1,setDescricao1]=useState();
const [camte,setCamte]=useState();
const [assinatura,setAssinatura]=useState();
const [imagemAssinatura, setImagemAssinatura]=useState();

const [dataDevolucao,setDataDevolucao]=useState();
const [visto,SetVisto]=useState();

const [cadastrodeEpi,setCadastrodeEpi]=useState([]);
const [entregaOuDevolucao, setEntregaOuDevolucao]=useState([]);

const [telaBloq, setTelaBloq] = useState(false)

function Confirmacao(){
    alert ('Dados Salvos com sucesso')
};

function NaoEncontra(){
  alert('Funcionário não encontrado!');
  setTelaBloq(true);
};

function Limpar(){
setNome('');
setFuncao('');
setMudancaFuncao('');
setAdmissao('');
setSetor('');

setData('');
setQtd('');
setUnd('');
setDescricaoEpi('');
setCamte('');
setAssinatura('');

setEntregaOuDevolucao(['']);

};

function LimparModal(){
  setData('');
  setQtd('');
  setUnd('');
  setDescricaoEpi('');
  setCamte('');
  setAssinatura('');
};

function LimparModalDevolucao(){
  setDataDevolucao('');
  SetVisto('');
  setDescricao1('');

};


async function add() {  
    const obj = { setor, nome, mudancaFuncao, admissao, funcao };  
    const res = await axios.post(Conexao.api+ 'InsertFuncionariosEpiWEB.php', obj);

    if (res.data.success === true) { } 
    Confirmacao();
    Limpar();     
  };

  async function getItem() {   
    const res = await axios.get(Conexao.api + 'BuscarFuncionarioEPIWEB.php? nome=' + nomeOuSetor );  
      
    if (res.data.success === false) { 
      
      NaoEncontra();
      
    } else { 
      setNome(res.data.nome2); 
    setFuncao(res.data.funcao);
    setMudancaFuncao(res.data.mudancaFuncao);
    setAdmissao(res.data.admissao);
    setSetor(res.data.setor); 

    setTelaBloq(false);
   
  
  }   

  };


    async function getCadastroDeEpi() {  
    const res = await axios.get(Conexao.api + 'ListaCadastroDeEpiWEB.php' );  
    if (res.data.success === false) { 
    } else {  setCadastrodeEpi(res.data.result); }   
  };

   useEffect(()=>{getCadastroDeEpi()},[cadastrodeEpi]);  
   
   
   async function Entrega() {  
    const substatus= 'ENTREGUE'
    const obj = { data, qtd, und, descricaoEpi, camte, assinatura, substatus, nome, funcao, setor };  
    const res = await axios.post(Conexao.api+ 'InsertEntregasDeEpiWEB.php', obj);

    if (res.data.success === true) { Confirmacao(); getEntegaOuDevolucao() }   
    LimparModal();  
  };


/*    async function Devolucao() {  
    const substatus= 'DEVOLVIDO'
    const obj = { dataDevolucao, visto, nome, funcao, substatus, descricao1};  
    const res = await axios.post(Conexao.api+ 'SalvarDevolucaoEpiWEB.php', obj);

    if (res.data.success === true) { Confirmacao(); getEntegaOuDevolucao() }   
    LimparModalDevolucao();  
  };  */


  async function Devolucao() {  
    const substatus = 'DEVOLVIDO';
    const selectedId = descricao1;
    const selectedObject = entregaOuDevolucao.find(item => item.id === selectedId);
    
    if (selectedObject) {
        const obj = {  dataDevolucao, visto,  nome, funcao,  substatus, descricao1: selectedObject.descricaoEpi, id: selectedId };
        try {
            const res = await axios.post(Conexao.api + 'SalvarDevolucaoEpiWEB.php', obj);

            if (res.data.success === true) {
                Confirmacao();
                getEntegaOuDevolucao();
            }

            LimparModalDevolucao();
        } catch (error) {
            // Handle error
        }
    } else {
        // Handle case where selectedObject is not found
    }
}


  async function getEntegaOuDevolucao() {   
    const res = await axios.get(Conexao.api + 'ListaEntregaEpiWEB.php? nome=' + nome + '&funcao=' + funcao);  
    if (res.data.success === false) { 
    } else {  setEntregaOuDevolucao(res.data.result); }   
  };

 
  useEffect(() => {
    if (nome !== '' && funcao !== '') {
      getEntegaOuDevolucao();
    }
  }, [nome, funcao]);


  const bloqueado = telaBloq === false;

//7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

  async function getDescricao() {   
    const res = await axios.get(Conexao.api + 'BuscarPeloCamteWEB.php? camte=' + camte );      
    if (res.data.success === false) {         
    } else {  setDescricaoEpi(res.data.descricao);  }   
  };

  async function getCamte() {   
    const res = await axios.get(Conexao.api + 'BuscarPelaDescEPIWEB.php? descricaoEpi=' + descricaoEpi );      
    if (res.data.success === false) {         
    } else {  setCamte(res.data.camte);  }   
  };


/*   useEffect(() => {
    getDescricao(camte);
  }, [camte]);

  useEffect(() => {
    getCamte(descricaoEpi);
  }, [descricaoEpi]); */

  useEffect(() => { getDescricao(descricaoEpi); }, [camte]);

  useEffect(() => {  getCamte( camte ); }, [descricaoEpi]);

 
  





/*   async function getItem2() {  
    const res = await axios.get(Conexao.api + 'BuscarRNCWEB.php? protocolo='+ assinatura );        
    if (res.data.success === false) { } 
    else {      
      console.log("deu bom a imagem")
      setImagem(res.data.imagem);
      setImagemPreview(res.data.imagem);       
  };  };


       const [imagem, setImagem] = useState();
       const [imagemPreview, setImagemPreview] = useState();
     
     
     



      async function getItem3() {  
        const res = await axios.get(Conexao.api + 'BuscarAssinaturaWEB.php? assinatura='+ assinatura );        
        if (res.data.success === false) { } 
        else {      
          console.log("deu bom a imagem2")
          setImagem(res.data.imagem);
          setImagemPreview(res.data.imagem);       
      };  }; */





    return <body >
      

<Navbar />

      <br/>
      <div className='titulolaboratorio container-fluid '>
        <h1 className='texttitulo'>EPI'S</h1>
      </div> 

      <br/>

      <body class="container text-center  " >

<div class="container text-center ">
    <div class="row d-flex align-items-end justify-content-center p-2">               
        <div class="col-md-3 md-0">           
            <h6>Buscar pelo nome </h6>       
            <input  /* list='ListaEquipamentos' */ onChange={(e) => setNomeOuStor(e.target.value) & Limpar()} value={nomeOuSetor} className='form-control text-center colorInput w-100 ' ></input>    
          
{/*             <datalist disabled={bloqueado} id="ListaEquipamentos">
            {buscadeEquipamentos.map((equipamento) => ( <option key={equipamento.id} > {equipamento.equipamento} </option> ))}                 
            </datalist> */}

         </div>
         <div class="col-4">
              <button  class="btnlogin  me-md-2  " onClick={() => getItem() }>Buscar </button>   
         </div>         
    </div>
</div>
</body>
<br/>

      <body className='container text-center d-flex'>
      <div class="col  align-items-center justify-content-center p-2 ">
    <div class="row d-flex align-items-center justify-content-center ">

        <div className='col'>
            <h6> Nome do funcionário</h6>
            <input disabled={bloqueado} className='form-control text-center ' onChange={(e) => setNome(e.target.value)} value={nome}></input>
        </div>

        <div className='col'>
            <h6> Função</h6>
            <input disabled={bloqueado} className='form-control text-center ' onChange={(e) => setFuncao(e.target.value)} value={funcao}></input>
        </div>
        <div className='col'>
            <h6>Mudança de função</h6>
            <input disabled={bloqueado} className='form-control text-center ' onChange={(e) => setMudancaFuncao(e.target.value)} value={mudancaFuncao}></input>
        </div>
        <div className='col'>
            <h6> Admissão</h6>
            <input disabled={bloqueado} type='date' className='form-control text-center ' onChange={(e) => setAdmissao(e.target.value)} value={admissao}></input>
        </div>

        <div className='col'>
            <h6> Setor</h6>
            <input disabled={bloqueado} className='form-control text-center ' onChange={(e) => setSetor(e.target.value)} value={setor}></input>
        </div>

        </div>
        </div>
      </body>




      <div class="d-grid gap-2 d-md-flex justify-content-md-end bbb mt-5">
        <button  class="btnlogin  me-md-2 " data-bs-toggle="modal" data-bs-target="#ModalEntrega" > Entrega de EPI's / Inspeção</button>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end bbb mt-1">
        <button  class="btnlogin  me-md-2 " data-bs-toggle="modal" data-bs-target="#ModalDevolucao" > Devolver</button>
      </div>


         {/*    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
        
         <div className='container-lg d-flex p-1 text-center mt-5 cinzaclaro' >
          <div className='col-1'><h6>Data entrega</h6></div>
          <div className='col-1'><h6>Qtd</h6> </div>
          {/* <div className='col-1'><h6>Und</h6></div> */}
          <div className='col-3'><h6>Descricao</h6> </div>
          <div className='col-1'><h6>CAMTE</h6> </div>
          <div className='col-2'><h6>Assinatura</h6></div>

          <div className='col-1'> <h6>Status</h6></div>
          <div className='col-1'></div>

        {/*   {ed.substatus === 'DEVOLVIDO' ? ( <div> */}
          <div className='col-1'><h6> Devolucao</h6></div>
          <div className='col-1'><h6>Visto</h6></div>
        {/*   </div>
          ):null} */}

{/* {ed.substatus === 'ENTREGUE'  ? (
          <>
<h6>devolver</h6>
          </>
        ):null} */}

        </div>

      <body className='scrollable2 container-fluid text-center '>
      {entregaOuDevolucao.map((ed,i)=>(
      <div key={i}>

        <div className='container-lg d-flex p-1 colouInput'>
        {ed.dataEntrega &&( <div className='col-1'>{moment(ed.dataEntrega).format('DD-MM-YYYY')}</div>)}

        {ed.dataEntrega &&( <div className='col-1'> {parseInt(ed.qtd)* parseInt(ed.und)} </div>)}
{/*           <div className='col-1'>{ed.qtd} </div>
          <div className='col-1'>{ed.und}</div> */}
          <div className='col-3'>{ed.descricaoEpi} </div>
          <div className='col-1'>{ed.camte} </div>
          <div className='col-2'>{ed.assinatura}</div>

          <div className='col-1'>{ed.substatus}</div>


          
       {/*  {ed.substatus === 'DEVOLVIDO' ? ( */}
          <>
          <div className='col-1'></div>
            {ed.dataDevolucao && (<div className='col-1'>{moment(ed.dataDevolucao).format('DD-MM-YYYY')}</div>)}
            <div className='col-1'>{ed.visto}</div>
          </>
       {/*  ):null} */}

{/* {ed.substatus !== 'DEVOLVIDO' ? ( */}
          <>
{/* <button>devolver</button> */}
          </>
       {/*  ):null} */}

         
{/* 
         {ed.dataDevolucao &&( <div className='col-1'>{moment(ed.dataDevolucao).format('DD-MM-YYYY')}</div>)} 
          <div className='col-1'>{ed.visto}</div> */}
          

        </div>

        
    {/*    <h6>{ed.id}</h6> */}


      </div>))}
</body>

{/*    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}



      <div class="modal" id="ModalEntrega" tabindex="" aria-labelledby="ModalEditarLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalEditarLabel">Entrega de EPI's / Inspeção</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={LimparModal}></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
       
    
        <div className='col-2 text-center me-2'>
            <h6>Data </h6>
            <input type='date' className=' form-control align-items-center text-center colorInput ' onChange={(e) => setData(e.target.value)} value={data}  >                      
             
          </input> 
        </div>

        <div className='col-2 text-center me-2'>
            <h6>Qtd </h6>
            <input className='form-control text-center  p-1' onChange={(e) => setQtd(e.target.value)} value={qtd} ></input>
        </div>
        <div className='col-2 text-center me-2 '>
            <h6>Und </h6>
            <select  className='form-select text-center  p-1 mt-2 ' onChange={(e) => setUnd(e.target.value)} value={und} >
              <option selected value='...'>Selecione...</option>
              <option value='1'>Unidade</option>
              <option value='2'>Par</option>
              <option value="6">Dúzia</option>
{/*               <option value="kit">Kit</option>
              <option value="caixa">Caixa</option>
              <option value="pacote">Pacote</option>
              <option value="conjunto">Conjunto</option> */}
            </select>
        </div>
          <div className='col-2 text-center '>
            <h6>CAMTE</h6>
                  <input list='Listcamte' className='form-control text-center  p-1' onChange={(e) => setCamte(e.target.value)} value={camte} ></input>
                  <datalist id='Listcamte'> {cadastrodeEpi.map((e,i)=>(<option key={i}>{e.camte}</option>))} </datalist>        
        </div>
        <div className='col-8 text-center mt-5'>
            <h6>Descrição do Epi</h6>
            <input list='ListDescri' className='form-control text-center  p-1 resize' onChange={(e) => setDescricaoEpi(e.target.value)} value={descricaoEpi} > 
            </input>
            <datalist id='ListDescri'> {cadastrodeEpi.map((e,i)=>(<option key={i}>{e.descricao}</option>))} </datalist>
        </div>

      <div className='col-3 text-center mt-5'>
          <h6>Assinatura</h6>
          <input className='form-control text-center  p-1 resize' onChange={(e)=>setAssinatura(e.target.value)} value={assinatura}></input>
        </div>  


       {/*  777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777 */}

        {/* <img src={imagem} alt=" imagem" style={{ maxWidth: '100px' }} /> */}
       
{/* <button onClick={getItem2}> Digite 103 na assinatura</button>

<button onClick={getItem3}> Mostrar Assinatura</button> */}



 {/*  777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777 */}



 {/*  <div className='mt-3'>
        {imagemAssinatura && <img src={imagemAssinatura} alt="Imagem de Assinatura" style={{ maxWidth: '300px' }}/>}
      </div>  */} 






        </div>
      </div>
     </div>
      </div>
      <div class="modal-footer">     
        <button type="button" class="btn btn-secondary" onClick={LimparModal} data-bs-dismiss="modal" >Fechar</button>             
        <button type="button" class="btn btn-success"  data-bs-dismiss="modal" onClick={()=>Entrega()}>Salvar</button>
      </div>
    </div>
  </div>
   
</div>





<div class="modal" id="ModalDevolucao" tabindex="" aria-labelledby="ModalEditarLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalEditarLabel">Devolução</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={LimparModalDevolucao}></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
       
 {/*        <div className='col-4 text-center me-2'>
            <h6>Descrição </h6>
            <select  className=' form-select align-items-center text-center colorInput ' onChange={(e)=>setDescricao1(e.target.value)} value={descricao1}  >   
                  {/* <option selected value='...'> Selecione...</option> */}
                 
{/* 
                  {entregaOuDevolucao.map((ed,i)=>(  <option key={i}>{ed.substatus === 'ENTREGUE' &&( ed.descricaoEpi )}</option>  ))}                
             
          </select> 
        </div> */} 

<div className='col-4 text-center me-2'>
    <h6>Descrição</h6>
    <select className='form-select align-items-center text-center colorInput' onChange={(e) => setDescricao1(e.target.value)} value={descricao1}>
      <option selected> selecione</option>
        {entregaOuDevolucao.map((ed, i) => ( 
            <option key={i} value={ed.id}>
                {ed.substatus === 'ENTREGUE' && (ed.descricaoEpi)}
            </option>
            
        ))}
    </select>
</div>

    
        <div className='col-3 text-center me-2'>
            <h6>Data devolução </h6>
            <input type='date' className=' form-control align-items-center text-center colorInput ' onChange={(e)=>setDataDevolucao(e.target.value)} value={dataDevolucao}  >                      
             
          </input> 
        </div>

       {/*  <div className='col-1'></div> */}

        <div className='col-4 text-center me-2'>
            <h6>Visto</h6>
            <input className='form-control text-center  p-1' onChange={(e)=> SetVisto(e.target.value)} value={visto} ></input>
        </div>
       
    

        </div>
      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={LimparModalDevolucao} >Fechar</button>             
        <button type="button" class="btn btn-success"  data-bs-dismiss="modal" onClick={()=>Devolucao()}>Salvar</button>
      </div>
    </div>
  </div>
   
</div>



{ telaBloq=== true &&(
<div class="d-grid gap-2 d-md-flex justify-content-md-end bbb mt-5">
        <button  onClick={(e)=>add(e)} class="btnlogin  me-md-2 "  > Cadastrar funcionário </button>
      </div>
)}

<br/><br/>


    </body>
 
};