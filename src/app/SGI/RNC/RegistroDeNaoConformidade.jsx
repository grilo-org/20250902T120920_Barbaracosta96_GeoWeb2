import Navbar from '../NavBar/NavBarSGI';
import React, { useEffect, useState } from 'react';
import './RegistroDeNaoConformidade.css';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import emailjs from '@emailjs/browser';


function RegistroDenaoconformidade() {

  const [showInput, setShowInput] = useState(true);

  const[origem,setOrigem]=useState();
  const[cliente,setCliente]=useState();
  const[setorIdentificou,setSetorIdentificou]=useState();
  const[setorOrigem,setSetorOrigem]=useState();
  const[descrever,setDescrever]=useState();
  const[documentoDoCliente,setDocumentoDoCliente]=useState();
  const[responsavel1,setResponsavel1]=useState();
  const[responsavel2,setResponsavel2]=useState();
  const[reincidente,setReincidente]=useState();
  const[descricaoproblema,setDescricaoproblema]=useState();
  const[evidencia1,setEvidencia1]=useState();
  const[evidencia2,setEvidencia2]=useState();
  const[pegaProtocolo,setPegaProtocolo]=useState();
  const[origemSetor,setOrigemSetor]=useState();

  const[dataAtual,setDataAtual]=useState();

  
  


 /*  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
    
  }; 
 */

  //BANCO DE DADOS

/*   async function add() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR');
    const obj = { origem, cliente, setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2, reincidente, descricaoproblema, evidencia1, evidencia2, origemSetor, dataAtual: formattedDate, imagem: imagemPreview };
   
    const res = await axios.post(Conexao.api+ 'InsertRegistroDeNaoConformidadeWEB.php', obj);
    if (res.data.success === true) {
    SelecioneOEmail();
    }
    Limpar() 
   
  }; */


  async function add() {
    // Array para armazenar os nomes dos campos vazios
    const camposVazios = [];
  
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!origem) camposVazios.push("Origem");
    if (!cliente) camposVazios.push("Cliente");
    if (!setorIdentificou) camposVazios.push("Setor Identificou");
     if (!setorOrigem) camposVazios.push("Setor Origem"); 
  
 
    if (!reincidente) camposVazios.push("Reincidente");
    if (!descricaoproblema) camposVazios.push("Descrição do Problema");
    if (!evidencia1) camposVazios.push("Evidência 1");
  
  
    if (camposVazios.length > 0) {
      const camposNaoPreenchidos = camposVazios.join(", ");
      alert(`Por favor, preencha os seguintes campos obrigatórios: ${camposNaoPreenchidos}`);
      return;
    }
  
    const substatu = 'Aberto';

    const obj = { origem, cliente,  setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2,
      reincidente, descricaoproblema, evidencia1,  evidencia2, origemSetor, dataAtual, imagem: imagemPreview, substatu, 
    };
  
    try {
      const res = await axios.post(Conexao.api + 'InsertRegistroDeNaoConformidadeWEB.php', obj);
      //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
      if (res.data.success === true) {

        SelecioneOEmail();
      }
      
    } catch (error) {
      // Tratar erros caso ocorram durante a requisição
      console.error('Erro ao tentar adicionar:', error);
    }
    Limpar() 
  };

  

  //Enviar E-mail
  async function getItemQSSMA() {  
    const res = await axios.get(Conexao.api + 'BuscarProtocoloRNCWEB.php' ); 
     
     setPegaProtocolo(res.data.pegaProtocolo);

    console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo)
  
    if (res.data.success === false) { 
    } else {

   const TemplateParam = {
     mensage: res.data.pegaProtocolo
   }
   emailjs.send("service_x40cz13", "template_g1qkzlr", TemplateParam, "8wUT7xbpjnJI-SAuM")
   .then((response)=>{console.log("e-mail enviado", response.status, response.text)}, (erro)=>{console.log("erro:" , erro)})  
  // alert("e-mail enviado")
  console.log("EMAIL ENVIADO  ..." )



  alert('Registro de NC realizado com sucesso!   RNC: ' + res.data.pegaProtocolo)

    }   
  };


  async function getItemRH() {  
    const res = await axios.get(Conexao.api + 'BuscarProtocoloRNCWEB.php' ); 
     
     setPegaProtocolo(res.data.pegaProtocolo);

    console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo)
  
    if (res.data.success === false) { 
    } else {

      const TemplateParam = {
        mensage: pegaProtocolo
      }
      emailjs.send("service_x40cz13", "template_s45zlua", TemplateParam, "8wUT7xbpjnJI-SAuM")
      .then((response)=>{console.log("e-mail enviado", response.status, response.text)}, (erro)=>{console.log("erro:" , erro)})  
  console.log("EMAIL ENVIADO  ..." )



  alert('Registro de NC realizado com sucesso!    RNC: ' + res.data.pegaProtocolo)

    }   
  };

  const [nomeResponsavel,setNomeResponsavel]=useState([]);


  async function getResponsavel() {  
    const res = await axios.get(Conexao.api + 'ListaCadastroDeResponsaveisWEB.php?origemSetor='+ setorOrigem ); 
     
    /* console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo) */
  
    if (res.data.success === false) { 
    } else {
 setNomeResponsavel(res.data.result);
    }   
  };


  useEffect(()=>{getResponsavel()});

  const [nomeResponsavel2,setNomeResponsavel2]=useState([]);


  async function getResponsavel2() {  
    const res = await axios.get(Conexao.api + 'ListaCadastroDeResponsaveisWEB.php?origemSetor='+ setorIdentificou ); 
         
    /* console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo) */      
    if (res.data.success === false) { 
    } else {
    // LimpaResponsavel(); 
 setNomeResponsavel2(res.data.result);

    }   
  };
  useEffect(() => {
    getResponsavel2();
  }, [setorIdentificou]);
 


  function SelecioneOEmail(e){ 
    if( setorOrigem === 'QSSMA'){getItemQSSMA(e)}
    else if(setorOrigem === 'RH'){getItemRH(e)}
    else if(setorOrigem === 'Geotecnia'){getItemRH()}
    else if(setorOrigem === 'Comercial'){getItemRH()}
    else if(setorOrigem === 'Laboratório'){getItemRH()}
    else if(setorOrigem === 'Manutençao'){getItemRH()}
    else if(setorOrigem === 'Pesquisa e Mineral'){getItemRH()}
    else if(setorOrigem === 'Compras'){getItemRH()}
    else {alert('Setor de origem não selecionado ' )}
 
   }; 


const handleSelectChange = (e) => {
  if (e.target.value === 'Outros') {
  setShowInput(true);
  console.log('selecionado')
  
  } else {
  setShowInput(false);
  console.log('não selecionado')
  }
  };

  function Limpar(){

   setOrigem('');
   setCliente('');
   setSetorIdentificou('');
   setSetorOrigem('');
   setDescrever('');
   setDocumentoDoCliente('');
   setResponsavel1('');
   setResponsavel2('');
   setReincidente('');
   setDescricaoproblema('');
   setEvidencia1('');
   setEvidencia2('');
   setOrigemSetor('');
   setImagem('');
   setImagemPreview('');
   setDataAtual('');
   
  };




   

  const [imagem, setImagem] = useState();
  const [imagemPreview, setImagemPreview] = useState();
  

  const handleDescricaoChange = (e) => {
    setDescricaoproblema(e.target.value);
  };

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
    // Criando uma URL temporária para exibir a prévia da imagem selecionada
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagemPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = () => {
    // Verifica se a imagem está disponível para download
    if (imagemPreview) {
      const link = document.createElement('a');
      link.href = imagemPreview;
      link.download = "imagem_selecionada.jpg"; // O nome que você quer dar ao arquivo baixado
      link.click();
    } else {
      console.log("Nenhuma imagem selecionada para download.");
    }
  };


  return <body onLoad={handleSelectChange }>
    <Navbar />
    <br/>
    
      <div className='titulolaboratorio container-fluid'>
        <h1 className='texttitulo'>REGISTRO DE NÃO CONFORMIDADE</h1>
      </div>    
    <br/>


<body class="container text-center  ">
 <div class="col  align-items-center justify-content-center p-1 ">
    <div class="row d-flex align-items-center justify-content-center ">
       
    <div class="col-2">
          <h5>Origem</h5>          
          <select name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setOrigem(e.target.value)} onClick={handleSelectChange}  value={origem} >                      
             <option selected value="...">Selecione...</option> 
             <option value="Auditoria Interna">Auditoria Interna</option> 
             <option value="Auditoria Externa">Auditoria Externa</option>
             <option value="Oportunidade de melhoria">Oportunidade de melhoria</option>
             <option value="Reclamação do cliente">Reclamação do cliente</option>
             <option value="Processos Internos">Processos Internos</option>
             <option  value="Outros">Outros</option>          
          </select>    
        </div>

      <div class="col-2 ">
        <h6>Cliente</h6>
        <input className='form-control text-center colorInput ' onChange={(e) => setCliente(e.target.value)} value={cliente}></input>
      </div>
    
      <div class="col-3">
        <h6>Setor que identificou a NC</h6>
        <select name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setSetorIdentificou(e.target.value)}  value={setorIdentificou} >                      
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

      <div class="col-3">
        <h6 >Setor de origem da NC</h6>
        <select name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setSetorOrigem(e.target.value)}  value={setorOrigem} >                      
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

      <div class="col-2">
          <h6>Data abertura NC</h6>          
          <input type='date' className=' form-control align-items-center text-start colorInput '  onChange={(e) => setDataAtual(e.target.value)} value={dataAtual} > 
  
          </input>
        </div>
 
    </div>
 </div>
</body>


 
{showInput === true ? 
    <div class="row d-flex  text-center align-items-center  ">  
    <div class="col-1 offset-1 me-5 "></div>     
      <div class="col-3 ">
        <h6>Descrição</h6>
        <textarea cols={30} rows={3} className='form-control colorInput  resize ' onChange={(e) => setDescrever(e.target.value)} value={descrever} ></textarea>
      </div>     
    </div>
  : null} 


<br/>
<body class="container text-center  ">
 <div class="col  align-items-center justify-content-center p-1 ">
    <div class="row d-flex align-items-center justify-content-center "> 
    
       
          <div class="col-2 ">
          <h6>É Reincidente?</h6>          
          <select  className=' form-select align-items-center text-start colorInput '  onChange={(e) => setReincidente(e.target.value)} value={reincidente} > 
             <option selected value="...">Selecione...</option>                      
             <option value="sim">Sim</option>
             <option value="nao">Não</option>
          </select>
        </div>

    <div class="col-2 ">
        <h6>Documento do cliente</h6>
        <input className='form-control text-center colorInput ' onChange={(e) => setDocumentoDoCliente(e.target.value)} value={documentoDoCliente}></input>
      </div>

      <div class="col-3">
        <h6>Responsável</h6>
        <select  className=' form-select align-items-center text-start colorInput '  onChange={(e) => setResponsavel1(e.target.value)} value={responsavel1} > 
             <option selected value="...">Selecione...</option>  
             
             {nomeResponsavel2.map((equipamento) => ( <option key={equipamento.id} > {equipamento.nome} </option> ))}                  

          </select>
      </div>

      <div class="col-3">
        <h6>Responsável</h6>
        <select  className=' form-select align-items-center text-start colorInput '  onChange={(e) => setResponsavel2(e.target.value)} value={responsavel2} > 
             <option selected value="...">Selecione...</option>  
             
             {nomeResponsavel.map((equipamento) => ( <option key={equipamento.id} > {equipamento.nome} </option> ))}                  

          </select>
      </div>


      <div class="col-2">
  
        </div>



      
    </div>
 </div>
</body>

<body class="container text-center p-2 mt-4 ">
  

  <h6>Descrição detalhada do problema </h6>       
  <textarea cols={77} rows={4} className='form-control colorInput  resize ' onChange={(e) => setDescricaoproblema(e.target.value)} value={descricaoproblema} ></textarea>

  <input className='mt-3' type="file" onChange={handleImagemChange} />

      {/* Exibição da prévia da imagem */}
      {imagemPreview && (
        <div>
          <img src={imagemPreview} alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
        </div>
      )}

      {/* Botão de download */}
      {imagem && (
        <div>
          <button onClick={handleDownloadClick}>Download</button>
        </div>
      )}

  <br/>

  <h6 className='mt-4'>Evidências </h6>       
  <textarea cols={77} rows={4} className='form-control colorInput  resize '  onChange={(e) => setEvidencia1(e.target.value)} value={evidencia1} ></textarea>
  <br/>
 
</body>

<div class="row d-flex align-items-end justify-content-end ">                   
                <div class="col-4">                 
                <button  onClick={(e) =>  add(e)  }  class="btnlogin " >Salvar</button>   
                </div>         
            </div>



   
</body>
}

export default  RegistroDenaoconformidade;