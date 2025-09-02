import Navbar from '../NavBar/NavBarSGI';
import React, { useState, useEffect } from 'react';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './RNCdetalhado.css';
import moment from 'moment';

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Link } from 'react-router-dom';


import download from "downloadjs";
import { green } from '@mui/material/colors';






function RncxTeste() {



  const [showInput, setShowInput] = useState(true);
  const [pegaProtocolo,setPegaProtocolo]=useState();

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
    //constantes da parte2
  const [protocolo,setProtocolo]=useState();  

  const[descAcaoCorretiva ,setDescAcaoCorretiva]=useState();
  const[definidaPor,setDefinidaPor]=useState();
  const[executadaPor,setExecutadaPor]=useState();
  const[dataDefinidaPor,setDataDefinidaPor]=useState();
  const[dataExecutadaPor,setDataExecutadaPor]=useState();
  const[participante1,setParticipante1]=useState();
  const[participante2,setParticipante2]=useState();
  const[participante3,setParticipante3]=useState();
  const[participante4,setParticipante4]=useState();
  const[participante5,setParticipante5]=useState();
  const[setor1,setSetor1]=useState();
  const[setor2,setSetor2]=useState();
  const[setor3,setSetor3]=useState();
  const[setor4,setSetor4]=useState();
  const[setor5,setSetor5]=useState();
  const[porque1,setPorque1]=useState();
  const[porque2,setPorque2]=useState();
  const[porque3,setPorque3]=useState();
  const[porque4,setPorque4]=useState();
  const[porque5,setPorque5]=useState();
  const[descCausaIdentificada,setDescCausaIdentificada]=useState();
  const[analiseDeRisco,setAnaliseDeRisco]=useState();
  const[descAnaliseDeRisco,setDescAnaliseDeRisco]=useState();
  const[acaoCorretiva,setAcaoCorretiva]=useState();
  const[justAcaoCorretiva,setJustAcaoCorretiva]=useState();
  const[aplicAvelSetores,setAplicAvelSetores]=useState();
  const[descAplicavelSetores,setDescAplicavelSetores]=useState();
  const[item1,setItem1]=useState([]);
  const[item2,setItem2]=useState([]);
  const[item3,setItem3]=useState([]);
  const[acao1,setAcao1]=useState([]);
  const[acao2,setAcao2]=useState([]);
  const[acao3,setAcao3]=useState([]);
  const[responsavelAcao1,setResponsavelAcao1]=useState([]);
  const[responsavelAcao2,setResponsavelAcao2]=useState();
  const[responsavelAcao3,setResponsavelAcao3]=useState();
  const[previsaoAcao1,setPrevisaoAcao1]=useState([]);
  const[previsaoAcao2,setPrevisaoAcao2]=useState();
  const[previsaoAcao3,setPrevisaoAcao3]=useState();
  const[execucaoAcao1,setExecucaoAcao1]=useState([]);
  const[execucaoAcao2,setExecucaoAcao2]=useState();
  const[execucaoAcao3,setExecucaoAcao3]=useState();
  const[verAcao1,setVerAcao1]=useState();
  const[verAcao2,setVerAcao2]=useState();
  const[verAcao3,setVerAcao3]=useState();
  const[verResponsavelAcao1,setVerResponsavelAcao1]=useState();
  const[verResponsavelAcao2,setVerResponsavelAcao2]=useState();
  const[verResponsavelAcao3,setVerResponsavelAcao3]=useState();
  const[verPrevisaoAcao1,setVerPrevisaoAcao1]=useState();
  const[verPrevisaoAcao2,setVerPrevisaoAcao2]=useState();
  const[verPrevisaoAcao3,setVerPrevisaoAcao3]=useState();
  const[verExecucaoAcao1,setVerExecucaoAcao1]=useState();
  const[verExecucaoAcao2,setVerExecucaoAcao2]=useState();
  const[verExecucaoAcao3,setVerExecucaoAcao3]=useState();
  const[verResultado1,setVerResultado1]=useState();
  const[verResultado2,setVerResultado2]=useState();
  const[verResultado3,setVerResultado3]=useState();
  const[verComentario1,setVerComentario1]=useState();
  const[verComentario2,setVerComentario2]=useState();
  const[verComentario3,setVerComentario3]=useState();
  const[encerraResponsavel ,setEncerraResponsavel]=useState();
  const[encerraData,setEncerraData]=useState();
  const [setorLogado, setSetorLogado]=useState();
  const [setorDoCargo, setSetorDoCargo]=useState();
  const[origemSetor,setOrigemSetor]=useState();

  const [acoes, setAcoes] = useState([]); 
  const [verificaEficacia, setVerificaEficacia] = useState([]); 

  const [imagem, setImagem] = useState();
  const [imagemPreview, setImagemPreview] = useState();
  const [imagem2, setImagem2] = useState();
  const [imagemPreview2, setImagemPreview2] = useState();
  const [imagem3, setImagem3] = useState();
  const [imagemPreview3, setImagemPreview3] = useState();
  const [imagem4, setImagem4] = useState();
  const [imagemPreview4, setImagemPreview4] = useState();
  const [imagem5, setImagem5] = useState();
  const [imagemPreview5, setImagemPreview5] = useState();

  const [numeroItem, setNumeroItem] = useState(1);

  const[checkMaquina,setCheckMaquina]=useState();
const[checkMeioAmbiente,setCheckMeioAmbiente]=useState();
const[checkMetodo,setCheckMetodo]=useState();
const[checkMateriaPrima,setCheckMateriaPrima]=useState();
const[checkMedicao,setCheckMedicao]=useState();
const[checkMaoDeObra,setCheckMaodeObra]=useState();


const[efeito,setEfeito]=useState();

const[maquina,setMaquina]=useState();
const[meioAmbiente,setMeioAmbiente]=useState();
const[metodo,setMetodo]=useState();
const[materiaPrima,setMateriaPrima]=useState();
const[medicao,setMedicao]=useState();
const[maoDeObra,setMaoDeObra]=useState();

const[dataAtual,setDataAtual]=useState();

 

  

const listaDeAcoes = acoes.map((f,i)=> <div key={i} class="row d-flex align-items-start justify-content-center ">
        <div class="col-1">{f.item1} </div>
       {/*  <div class="col-4 ">{f.acao1}</div> */}
        <div class="col-4"> <textarea rows={3} cols={50} readOnly className=" bordaa  text-center colorInput resize">{f.acao1}</textarea></div>
        <div class="col-2">{f.responsavelAcao1}</div>
        <div class="col-2">{f.acao1  && (moment(f.previsaoAcao1).format('DD/MM/YYYY'))} </div>
        <div class="col-1">{f.acao1  && (moment(f.execucaoAcao1).format('DD/MM/YYYY'))}</div>
       {f.acao1  && ( <div class="col-2">  <button  onClick={() => ClickDelete(f.id) } className="far fa-trash-alt icone-acao red botaao"></button></div>)}
        </div>)




const listaVerificacao = verificaEficacia.map((v) => (
  <div key={v.id} className="row d-flex align-items-center justify-content-center">
          <div class="col-2 "> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verAcao1}</textarea>  </div>
          <div class="col-2"> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verResponsavelAcao1}</textarea> </div>
          <div class="col-2 text-center">{v.verAcao1 && (moment(v.verPrevisaoAcao1).format('DD/MM/YYYY'))}</div>
          {/* <div class="col-1"> {moment(v.verExecucaoAcao1).format('DD/MM/YYYY')} </div> */}
          <div className="col-1 text-center">{v.verAcao1 && ( moment(v.verExecucaoAcao1).format('DD/MM/YYYY'))}
     </div>
          <div class="col-2 text-center"> {v.verResultado1}  </div>
          <div class="col-2 "> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verComentario1}</textarea> </div> 
          
          
          {setorDoCargo === 'SGI'?
          <div class="col-1"> {v.verAcao1 && ( <button  onClick={() => ClickDeleteVerifica(v.id) } className="far fa-trash-alt icone-acao red botaao"></button>)}</div> 
          :null}
          
          {setorDoCargo !== 'SGI'?
          <div class="col-1"> </div> 
          :null}
    </div>
  ))

 /*  {isDataLoaded === true?(     ):null} */

     
  function Confirmacao() {
    alert('Salvo com Sucesso!')    
      };

      function Confirmacao2() {
        alert('NC encerrada com Sucesso!');
           
          };

  

  //BANCO DE DADOS

 /*  async function add() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR');
    const obj = { origem, cliente, setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2, reincidente, descricaoproblema, evidencia1, evidencia2, origemSetor, dataAtual: formattedDate, imagem: imagemPreview };
    
    const res = await axios.post(Conexao.api+ 'InsertRegistroDeNaoConformidadeWEB.php', obj);
  //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
    if (res.data.success === true) {
      Confirmacao()
      getProtocolo();
    }
  
     
    };


  async function Atualizar() {
    const obj = { origem,cliente,setorIdentificou,setorOrigem,descrever,documentoDoCliente,responsavel1,responsavel2,reincidente,descricaoproblema,evidencia1,evidencia2,protocolo ,descAcaoCorretiva,definidaPor,executadaPor, dataDefinidaPor, dataExecutadaPor, participante1, participante2, participante3, participante4, participante5, setor1, setor2, setor3, setor4, setor5, porque1, porque2, porque3, porque4, porque5, descCausaIdentificada, analiseDeRisco, descAnaliseDeRisco, acaoCorretiva, justAcaoCorretiva, aplicAvelSetores, descAplicavelSetores, item1, item2,  item3, acao1, acao2, acao3, responsavelAcao1, responsavelAcao2, responsavelAcao3, previsaoAcao1, previsaoAcao2, previsaoAcao3, execucaoAcao1, execucaoAcao2, execucaoAcao3, verAcao1, verAcao2, verAcao3, verResponsavelAcao1, verResponsavelAcao2, verResponsavelAcao3, verPrevisaoAcao1, verPrevisaoAcao2, verPrevisaoAcao3, verExecucaoAcao1, verExecucaoAcao2, verExecucaoAcao3,verResultado1, verResultado2, verResultado3, verComentario1, verComentario2, verComentario3, encerraResponsavel, encerraData , origemSetor, imagem2: imagemPreview2, imagem3: imagemPreview3, imagem4: imagemPreview4, imagem5: imagemPreview5, imagem: imagemPreview };
   
    const res = await axios.post(Conexao.api+ 'SalvarRNCWEB.php', obj);
  //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
    if (res.data.success === true) {
    }
   // getItem()
    Confirmacao()   
   // Limpar()    
  }; */



  async function Atualizar() {
    // Array para armazenar os nomes dos campos vazios
    const camposVazios = [];
  
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!origem) camposVazios.push("Origem");
    if (!cliente) camposVazios.push("Cliente");
    if (!setorIdentificou) camposVazios.push("Setor Identificou");
   /*  if (!setorOrigem) camposVazios.push("Setor Origem"); */
    /* if (!descrever) camposVazios.push("Descrever 1"); */
   // if (!documentoDoCliente) camposVazios.push("Documento do Cliente");
    if (!responsavel1) camposVazios.push("Responsável 1");
    /* if (!responsavel2) camposVazios.push("Responsável 2"); */
    if (!reincidente) camposVazios.push("Reincidente");
    if (!descricaoproblema) camposVazios.push("Descrição do Problema");
    if (!evidencia1) camposVazios.push("Evidência 1");
    /* if (!evidencia2) camposVazios.push("Evidência 2"); */
    if (!protocolo) camposVazios.push("Protocolo");
    if (!descAcaoCorretiva) camposVazios.push("Descrição da Ação Corretiva");
    if (!definidaPor) camposVazios.push("Definida Por");
    if (!executadaPor) camposVazios.push("Executada Por");
    if (!dataDefinidaPor) camposVazios.push("Data Definida Por");
    if (!dataExecutadaPor) camposVazios.push("Data Executada Por");
 /*    if (!participante1) camposVazios.push("Participante 1");
    if (!participante2) camposVazios.push("Participante 2");
    if (!participante3) camposVazios.push("Participante 3");
    if (!participante4) camposVazios.push("Participante 4");
    if (!participante5) camposVazios.push("Participante 5");
    if (!setor1) camposVazios.push("Setor 1");
    if (!setor2) camposVazios.push("Setor 2");
    if (!setor3) camposVazios.push("Setor 3");
    if (!setor4) camposVazios.push("Setor 4");
    if (!setor5) camposVazios.push("Setor 5"); */
    if (!porque1) camposVazios.push("Porque 1");
     if (!porque2) camposVazios.push("Porque 2");
    if (!porque3) camposVazios.push("Porque 3");
    if (!porque4) camposVazios.push("Porque 4");
    if (!porque5) camposVazios.push("Porque 5"); 
    if (!descCausaIdentificada) camposVazios.push("Descrição da Causa Identificada");
    if (!analiseDeRisco) camposVazios.push("Análise de Risco");
   /*  if (!descAnaliseDeRisco) camposVazios.push("Descrição da Análise de Risco"); */
   if (analiseDeRisco === "sim") {
    if (!descAnaliseDeRisco) { camposVazios.push("Descrição da Análise de Risco"); } 
  };

    if (!acaoCorretiva) camposVazios.push("Ação Corretiva");
   /*  if (!justAcaoCorretiva) camposVazios.push("Justificativa da Ação Corretiva"); */
   if (acaoCorretiva === "nao") {
    if (!justAcaoCorretiva) { camposVazios.push("Justificativa da Ação Corretiva"); } 
  };
   

    if (!aplicAvelSetores) camposVazios.push("Aplicável Setores");
   if (aplicAvelSetores === "sim") {
    if (!descAplicavelSetores) { camposVazios.push("Descrição do Aplicável Setores"); } 
  };
  /*   if (!descAplicavelSetores) camposVazios.push("Descrição do Aplicável Setores"); */

 /*    if (!checkMaquina) camposVazios.push("check Maquina");
    if (!checkMeioAmbiente) camposVazios.push("check Meio Ambiente");
    if (!checkMetodo) camposVazios.push("check Metodo");
    if (!checkMateriaPrima) camposVazios.push("check Materia Prima");
    if (!checkMedicao) camposVazios.push("check Medicao");
    if (!checkMaodeObra) camposVazios.push("check Mao de Obra"); 

    if (!efeito) camposVazios.push("Descrição do efeito");*/

  /*   if (!maquina) camposVazios.push("Descrição da máquina");
    if (!meioAmbiente) camposVazios.push("Descrição do meio Ambiente");
    if (!metodo) camposVazios.push("Descrição do metodo");
    if (!materiaPrima) camposVazios.push("Descrição da materia Prima");
    if (!medicao) camposVazios.push("Descrição da medicao");
    if (!maoDeObra) camposVazios.push("Descrição da Mão de Obra"); */
    

  /*   if (!item1) camposVazios.push("Item 1");
    if (!item2) camposVazios.push("Item 2");
    if (!item3) camposVazios.push("Item 3");
    if (!acao1) camposVazios.push("Ação 1");
    if (!acao2) camposVazios.push("Ação 2");
    if (!acao3) camposVazios.push("Ação 3");
    if (!responsavelAcao1) camposVazios.push("Responsável pela Ação 1");
    if (!responsavelAcao2) camposVazios.push("Responsável pela Ação 2");
    if (!responsavelAcao3) camposVazios.push("Responsável pela Ação 3");
    if (!previsaoAcao1) camposVazios.push("Previsão da Ação 1");
    if (!previsaoAcao2) camposVazios.push("Previsão da Ação 2");
    if (!previsaoAcao3) camposVazios.push("Previsão da Ação 3");
    if (!execucaoAcao1) camposVazios.push("Execução da Ação 1");
    if (!execucaoAcao2) camposVazios.push("Execução da Ação 2");
    if (!execucaoAcao3) camposVazios.push("Execução da Ação 3");
    if (!verAcao1) camposVazios.push("Verificação da Ação 1");
    if (!verAcao2) camposVazios.push("Verificação da Ação 2");
    if (!verAcao3) camposVazios.push("Verificação da Ação 3");
    if (!verResponsavelAcao1) camposVazios.push("Verificação do Responsável pela Ação 1");
    if (!verResponsavelAcao2) camposVazios.push("Verificação do Responsável pela Ação 2");
    if (!verResponsavelAcao3) camposVazios.push("Verificação do Responsável pela Ação 3");
    if (!verPrevisaoAcao1) camposVazios.push("Verificação da Previsão da Ação 1");
    if (!verPrevisaoAcao2) camposVazios.push("Verificação da Previsão da Ação 2");
    if (!verPrevisaoAcao3) camposVazios.push("Verificação da Previsão da Ação 3");
    if (!verExecucaoAcao1) camposVazios.push("Verificação da Execução da Ação 1");
    if (!verExecucaoAcao2) camposVazios.push("Verificação da Execução da Ação 2");
    if (!verExecucaoAcao3) camposVazios.push("Verificação da Execução da Ação 3");
    if (!verResultado1) camposVazios.push("Verificação do Resultado 1");
    if (!verResultado2) camposVazios.push("Verificação do Resultado 2");
    if (!verResultado3) camposVazios.push("Verificação do Resultado 3");
    if (!verComentario1) camposVazios.push("Verificação do Comentário 1");
    if (!verComentario2) camposVazios.push("Verificação do Comentário 2");
    if (!verComentario3) camposVazios.push("Verificação do Comentário 3");
    if (!encerraResponsavel) camposVazios.push("Responsável pelo Encerramento");
    if (!encerraData) camposVazios.push("Data do Encerramento"); 
    if (!origemSetor) camposVazios.push("Origem do Setor");
     if (!imagemPreview2) camposVazios.push("Imagem 2");
    if (!imagemPreview3) camposVazios.push("Imagem 3");
    if (!imagemPreview4) camposVazios.push("Imagem 4");
    if (!imagemPreview5) camposVazios.push("Imagem 5");
    if (!imagemPreview) camposVazios.push("Imagem"); */
  
    if (camposVazios.length > 0) {
      const camposNaoPreenchidos = camposVazios.join(", ");
       alert(`Por favor, preencha os seguintes campos obrigatórios: ${camposNaoPreenchidos}`); 
      return;
    }
  
    const substatu = 'Em tratamento';
    const obj = {  origem, cliente, setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2, reincidente, descricaoproblema,
      evidencia1, evidencia2, protocolo, descAcaoCorretiva, definidaPor, executadaPor, dataDefinidaPor,  dataExecutadaPor, participante1, participante2, participante3, participante4,
      participante5, setor1, setor2, setor3, setor4,  setor5, porque1, porque2, porque3, porque4, porque5, descCausaIdentificada, analiseDeRisco,
      descAnaliseDeRisco,  acaoCorretiva, justAcaoCorretiva, aplicAvelSetores, descAplicavelSetores,  item1, item2,item3, acao1, acao2, acao3,
      responsavelAcao1, responsavelAcao2, responsavelAcao3, previsaoAcao1, previsaoAcao2, previsaoAcao3, execucaoAcao1, execucaoAcao2, execucaoAcao3,
      verAcao1, verAcao2, verAcao3, verResponsavelAcao1, verResponsavelAcao2, verResponsavelAcao3, verPrevisaoAcao1, verPrevisaoAcao2, verPrevisaoAcao3,
      verExecucaoAcao1, verExecucaoAcao2, verExecucaoAcao3, verResultado1, verResultado2, verResultado3, verComentario1, verComentario2, verComentario3,
      encerraResponsavel, encerraData, origemSetor, imagem2: imagemPreview2, imagem3: imagemPreview3, imagem4: imagemPreview4, imagem5: imagemPreview5, imagem: imagemPreview, substatu
  
    };
  
    try {
      const res = await axios.post(Conexao.api + 'SalvarRNCWEB.php', obj);
      if (res.data.success === true) {
 
      }
      // getItem()
      SalvaEspinha();
      Confirmacao();
      // Limpar()
    } catch (error) {
      // Tratar erros caso ocorram durante a requisição
      console.error('Erro ao tentar atualizar:', error);
    }
  };


  async function Atualizar2() {
    // Array para armazenar os nomes dos campos vazios
    const camposVazios = [];
  
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!origem) camposVazios.push("Origem");
    if (!cliente) camposVazios.push("Cliente");
    if (!setorIdentificou) camposVazios.push("Setor Identificou");
   /*  if (!setorOrigem) camposVazios.push("Setor Origem"); */
    /* if (!descrever) camposVazios.push("Descrever 1"); */
    //if (!documentoDoCliente) camposVazios.push("Documento do Cliente");
    if (!responsavel1) camposVazios.push("Responsável 1");
    /* if (!responsavel2) camposVazios.push("Responsável 2"); */
    if (!reincidente) camposVazios.push("Reincidente");
    if (!descricaoproblema) camposVazios.push("Descrição do Problema");
    if (!evidencia1) camposVazios.push("Evidência 1");
    /* if (!evidencia2) camposVazios.push("Evidência 2"); */
    if (!protocolo) camposVazios.push("Protocolo");
    if (!descAcaoCorretiva) camposVazios.push("Descrição da Ação Corretiva");
    if (!definidaPor) camposVazios.push("Definida Por");
    if (!executadaPor) camposVazios.push("Executada Por");
    if (!dataDefinidaPor) camposVazios.push("Data Definida Por");
    if (!dataExecutadaPor) camposVazios.push("Data Executada Por");
 /*    if (!participante1) camposVazios.push("Participante 1");
    if (!participante2) camposVazios.push("Participante 2");
    if (!participante3) camposVazios.push("Participante 3");
    if (!participante4) camposVazios.push("Participante 4");
    if (!participante5) camposVazios.push("Participante 5");
    if (!setor1) camposVazios.push("Setor 1");
    if (!setor2) camposVazios.push("Setor 2");
    if (!setor3) camposVazios.push("Setor 3");
    if (!setor4) camposVazios.push("Setor 4");
    if (!setor5) camposVazios.push("Setor 5"); */
    if (!porque1) camposVazios.push("Porque 1");
     if (!porque2) camposVazios.push("Porque 2");
    if (!porque3) camposVazios.push("Porque 3");
    if (!porque4) camposVazios.push("Porque 4");
    if (!porque5) camposVazios.push("Porque 5"); 
    if (!descCausaIdentificada) camposVazios.push("Descrição da Causa Identificada");
    if (!analiseDeRisco) camposVazios.push("Análise de Risco");
    /* if (!descAnaliseDeRisco) camposVazios.push("Descrição da Análise de Risco"); */

    if (analiseDeRisco === "sim") {
      if (!descAnaliseDeRisco) { camposVazios.push("Descrição da Análise de Risco"); } 
    };

    if (!acaoCorretiva) camposVazios.push("Ação Corretiva");
   /*  if (!justAcaoCorretiva) camposVazios.push("Justificativa da Ação Corretiva"); */
   if (acaoCorretiva === "nao") {
    if (!justAcaoCorretiva) { camposVazios.push("Justificativa da Ação Corretiva"); } 
  };
    if (!aplicAvelSetores) camposVazios.push("Aplicável Setores");

    /* if (!descAplicavelSetores) camposVazios.push("Descrição do Aplicável Setores"); */

    if (aplicAvelSetores === "sim") {
      if (!descAplicavelSetores) { camposVazios.push("Descrição do Aplicável Setores"); } 
    };
  /*   if (!item1) camposVazios.push("Item 1");
    if (!item2) camposVazios.push("Item 2");
    if (!item3) camposVazios.push("Item 3");
    if (!acao1) camposVazios.push("Ação 1");
    if (!acao2) camposVazios.push("Ação 2");
    if (!acao3) camposVazios.push("Ação 3");
    if (!responsavelAcao1) camposVazios.push("Responsável pela Ação 1");
    if (!responsavelAcao2) camposVazios.push("Responsável pela Ação 2");
    if (!responsavelAcao3) camposVazios.push("Responsável pela Ação 3");
    if (!previsaoAcao1) camposVazios.push("Previsão da Ação 1");
    if (!previsaoAcao2) camposVazios.push("Previsão da Ação 2");
    if (!previsaoAcao3) camposVazios.push("Previsão da Ação 3");
    if (!execucaoAcao1) camposVazios.push("Execução da Ação 1");
    if (!execucaoAcao2) camposVazios.push("Execução da Ação 2");
    if (!execucaoAcao3) camposVazios.push("Execução da Ação 3");
    if (!verAcao1) camposVazios.push("Verificação da Ação 1");
    if (!verAcao2) camposVazios.push("Verificação da Ação 2");
    if (!verAcao3) camposVazios.push("Verificação da Ação 3");
    if (!verResponsavelAcao1) camposVazios.push("Verificação do Responsável pela Ação 1");
    if (!verResponsavelAcao2) camposVazios.push("Verificação do Responsável pela Ação 2");
    if (!verResponsavelAcao3) camposVazios.push("Verificação do Responsável pela Ação 3");
    if (!verPrevisaoAcao1) camposVazios.push("Verificação da Previsão da Ação 1");
    if (!verPrevisaoAcao2) camposVazios.push("Verificação da Previsão da Ação 2");
    if (!verPrevisaoAcao3) camposVazios.push("Verificação da Previsão da Ação 3");
    if (!verExecucaoAcao1) camposVazios.push("Verificação da Execução da Ação 1");
    if (!verExecucaoAcao2) camposVazios.push("Verificação da Execução da Ação 2");
    if (!verExecucaoAcao3) camposVazios.push("Verificação da Execução da Ação 3");
    if (!verResultado1) camposVazios.push("Verificação do Resultado 1");
    if (!verResultado2) camposVazios.push("Verificação do Resultado 2");
    if (!verResultado3) camposVazios.push("Verificação do Resultado 3");
    if (!verComentario1) camposVazios.push("Verificação do Comentário 1");
    if (!verComentario2) camposVazios.push("Verificação do Comentário 2");
    if (!verComentario3) camposVazios.push("Verificação do Comentário 3");
   
    if (!origemSetor) camposVazios.push("Origem do Setor");
     if (!imagemPreview2) camposVazios.push("Imagem 2");
    if (!imagemPreview3) camposVazios.push("Imagem 3");
    if (!imagemPreview4) camposVazios.push("Imagem 4");
    if (!imagemPreview5) camposVazios.push("Imagem 5");
    if (!imagemPreview) camposVazios.push("Imagem"); */
 if (!encerraResponsavel) camposVazios.push("Responsável pelo Encerramento");
    if (!encerraData) camposVazios.push("Data do Encerramento"); 

  /*   if (!checkMaquina) camposVazios.push("check Maquina");
    if (!checkMeioAmbiente) camposVazios.push("check Meio Ambiente");
    if (!checkMetodo) camposVazios.push("check Metodo");
    if (!checkMateriaPrima) camposVazios.push("check Materia Prima");
    if (!checkMedicao) camposVazios.push("check Medicao");
    if (!checkMaodeObra) camposVazios.push("check Mao de Obra"); 

    if (!efeito) camposVazios.push("Descrição do efeito");*/

  /*   if (!maquina) camposVazios.push("Descrição da máquina");
    if (!meioAmbiente) camposVazios.push("Descrição do meio Ambiente");
    if (!metodo) camposVazios.push("Descrição do metodo");
    if (!materiaPrima) camposVazios.push("Descrição da materia Prima");
    if (!medicao) camposVazios.push("Descrição da medicao");
    if (!maoDeObra) camposVazios.push("Descrição da Mão de Obra"); */

  
    if (camposVazios.length > 0) {
      const camposNaoPreenchidos = camposVazios.join(", ");
      alert(`Por favor, preencha os seguintes campos obrigatórios: ${camposNaoPreenchidos}`); 
      return;
    }
  
    const substatu = 'Encerrado';
    const obj = {  origem, cliente, setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2, reincidente, descricaoproblema,
      evidencia1, evidencia2, protocolo, descAcaoCorretiva, definidaPor, executadaPor, dataDefinidaPor,  dataExecutadaPor, participante1, participante2, participante3, participante4,
      participante5, setor1, setor2, setor3, setor4,  setor5, porque1, porque2, porque3, porque4, porque5, descCausaIdentificada, analiseDeRisco,
      descAnaliseDeRisco,  acaoCorretiva, justAcaoCorretiva, aplicAvelSetores, descAplicavelSetores,  item1, item2,item3, acao1, acao2, acao3,
      responsavelAcao1, responsavelAcao2, responsavelAcao3, previsaoAcao1, previsaoAcao2, previsaoAcao3, execucaoAcao1, execucaoAcao2, execucaoAcao3,
      verAcao1, verAcao2, verAcao3, verResponsavelAcao1, verResponsavelAcao2, verResponsavelAcao3, verPrevisaoAcao1, verPrevisaoAcao2, verPrevisaoAcao3,
      verExecucaoAcao1, verExecucaoAcao2, verExecucaoAcao3, verResultado1, verResultado2, verResultado3, verComentario1, verComentario2, verComentario3,
      encerraResponsavel, encerraData, origemSetor, imagem2: imagemPreview2, imagem3: imagemPreview3, imagem4: imagemPreview4, imagem5: imagemPreview5, imagem: imagemPreview, substatu
    };
  
    try {
      const res = await axios.post(Conexao.api + 'SalvarRNCWEB.php', obj);
      if (res.data.success === true) {
  
      }
      // getItem()
     SalvaEspinha();
      Confirmacao2();
      
      // Limpar()
      setIsDataLoaded(false);
      
    } catch (error) {
      // Tratar erros caso ocorram durante a requisição
      console.error('Erro ao tentar atualizar:', error);
    }
    
  };

  async function SalvaEspinha() {

     const obj = { protocolo, checkMateriaPrima, checkMaquina, checkMeioAmbiente, checkMedicao, checkMetodo, checkMaoDeObra, efeito, maoDeObra,
      medicao, meioAmbiente, metodo, maquina, materiaPrima

     };
   
     try {
       const res = await axios.post(Conexao.api + 'SalvarRNCWEB2.php', obj);
       if (res.data.success === true) {
   
       }
       // getItem()
       
       // Limpar()
     } catch (error) {
       // Tratar erros caso ocorram durante a requisição
       console.error('Erro ao tentar atualizar:', error);
     }
   };




  async function add() {
    // Array para armazenar os nomes dos campos vazios
    const camposVazios = [];
  
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!origem) camposVazios.push("Origem");
    if (!cliente) camposVazios.push("Cliente");
    if (!setorIdentificou) camposVazios.push("Setor Identificou");
    /* if (!setorOrigem) camposVazios.push("Setor Origem"); */
    /* if (!descrever) camposVazios.push("Descrever"); */
    //if (!documentoDoCliente) camposVazios.push("Documento do Cliente");
    if (!responsavel1) camposVazios.push("Responsável 1");
    /* if (!responsavel2) camposVazios.push("Responsável 2"); */
    if (!reincidente) camposVazios.push("Reincidente");
    if (!descricaoproblema) camposVazios.push("Descrição do Problema");
    if (!evidencia1) camposVazios.push("Evidência 1");
    /* if (!evidencia2) camposVazios.push("Evidência 2"); */
   /*  if (!origemSetor) camposVazios.push("Origem do Setor"); */
    /* if (!imagemPreview) camposVazios.push("Imagem"); */
  
    if (camposVazios.length > 0) {
      const camposNaoPreenchidos = camposVazios.join(", ");
      alert(`Por favor, preencha os seguintes campos obrigatórios: ${camposNaoPreenchidos}`);
      return;
    }
  
    const substatu = 'Aberto';

    const obj = { origem, cliente,  setorIdentificou, setorOrigem, descrever, documentoDoCliente, responsavel1, responsavel2,
      reincidente, descricaoproblema, evidencia1,  evidencia2, origemSetor, dataAtual, imagem, substatu
    };
  
    try {
      const res = await axios.post(Conexao.api + 'InsertRegistroDeNaoConformidadeWEB.php', obj);
      //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
      if (res.data.success === true) {

       /*  SelecioneOEmail(); */
      }
      
    } catch (error) {
      // Tratar erros caso ocorram durante a requisição
      console.error('Erro ao tentar adicionar:', error);
    }
    Limpar() 
  };
  
  


    //lista ações  ****************************************************************************************************
    async function SalvarAcoes() {
      const novoItem = `Item ${numeroItem}`;
    const obj = { protocolo, item1: novoItem, acao1, responsavelAcao1, previsaoAcao1, execucaoAcao1};
    const res = await axios.post(Conexao.api+ 'InsertAcoesRNCWEB.php', obj);   
    console.log(res)
    if (res.data.success === true) {     
    }
 
    console.log("salvoooooou")
    }; 


    async function BuscarAcoes() {
    const res = await axios.get(Conexao.api + 'ListaRNCAcoesWEB.php?protocolo='+ protocolo);
    console.log( res.data.result)
    if (res.data.success === false) {
  
      } else {

    setAcoes(res.data.result)

      }  
    }; 


    useEffect(() => {
      // Ao montar o componente ou após uma busca de dados, atualize o valor de numeroItem com base nos dados existentes
      if (acoes.length > 0) {
        const ultimoItem = acoes[acoes.length - 1].item1;
        const numero = extrairNumeroDoItem(ultimoItem);
        setNumeroItem(numero + 1);
      }
    }, [acoes]);
  
    const extrairNumeroDoItem = (item) => {
      const padrao = /^Item (\d+)$/; // Expressão regular para verificar o padrão "Item X"
      if (item && padrao.test(item)) {
        return parseInt(item.match(padrao)[1]);
      }
      return 0; // Retorna 1 caso o item não siga o padrão ou seja nulo/vazio
    };

    
   //const handleDelete = (id) => {
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


    const AcoesClick = async () => {
      // Salva os dados no banco de dados
      await SalvarAcoes(); 
      // Busca os dados atualizados
       await BuscarAcoes();  
    };

  

     //lista ações  ****************************************************************************************************
    async function SalvarVerificaEficacia() {
    const obj = { protocolo, verAcao1, verResponsavelAcao1, verPrevisaoAcao1, verResultado1, verExecucaoAcao1, verComentario1,};
    const res = await axios.post(Conexao.api+ 'InsertVerificaEficaciaWEB.php', obj);   
    console.log(res)
    if (res.data.success === true) {     
     
    }
   // Confirmacao()
    console.log("salvoooooou")
    }; 

    

    async function BuscarVerificaEficacia() {
    const res = await axios.get(Conexao.api + 'ListaVerificaEficaciaWEB.php?protocolo='+ protocolo);
    console.log( res.data.result)
    //setPegaIdVerificacao(res.data.result[0].id)
    if (res.data.success === false) {
 
      } else {
  
    setVerificaEficacia(res.data.result)
      }  
    }; 


      function ClickDeleteVerifica(id) {
        console.log('ID a ser excluído:', id);
        deleteUserVerifica(id);
        const updatedVerificaEficacia = verificaEficacia.filter((v) => v.id !== id);
        setVerificaEficacia(updatedVerificaEficacia);
        console.log("o que é, o que é? " + updatedVerificaEficacia);
      };

      async function deleteUserVerifica(id) {
        const res = await axios.get(Conexao.api + 'ExcluirVerificaEficaciaWEB.php?id=' + id);
        console.log('Este é o id apagado:', id);
        if (res.data.success === true) {
          // setConfirmacao(false);
          BuscarVerificaEficacia();
        } else {
          console.log('Erro ao excluir item:', res.data.message);
        }
      };



    const VerificaEficaciaClick = async () => {
      // Salva os dados no banco de dados
      await SalvarVerificaEficacia(); 
      // Busca os dados atualizados
       await BuscarVerificaEficacia();  
    };

  function NaoEncontrado(){
    alert('RNC não encontrado!')
  }
 
  //BUSCAR

  async function getItem() {  
    const res = await axios.get(Conexao.api + 'BuscarRNCWEB.php? protocolo='+ protocolo );
        // setPegaProtocolo(res.data.pegaProtocolo);

        console.log( "AAAABBBB  "+   res.data.responsavel1); 


      console.log( "AAAA  "+   res.data.verResultado3); 
       
    if (res.data.success === false) { NaoEncontrado(); } 

    else {      setOrigemSetor(res.data.origemSetor);
      setOrigem(res.data.origem);
      setCliente(res.data.cliente);
      setSetorIdentificou(res.data.setorIdentificou);
      setSetorOrigem(res.data.setorOrigem);
      setDescrever(res.data.descrever);
      setDocumentoDoCliente(res.data.documentoDoCliente);
      setResponsavel1(res.data.responsavel1);
      setResponsavel2(res.data.responsavel2);
      setReincidente(res.data.reincidente);
      setDescricaoproblema(res.data.descricaoproblema);
      setEvidencia1(res.data.evidencia1);
      setEvidencia2(res.data.evidencia2);


      setDescAcaoCorretiva(res.data.descAcaoCorretiva);
      setDefinidaPor(res.data.definidaPor);
      setExecutadaPor(res.data.executadaPor);
      setDataDefinidaPor(res.data.dataDefinidaPor);
      setDataExecutadaPor(res.data.dataExecutadaPor);
      setParticipante1(res.data.participante1);
      setParticipante2(res.data.participante2);
      setParticipante3(res.data.participante3);
      setParticipante4(res.data.participante4);
      setParticipante5(res.data.participante5);
      setSetor1(res.data.setor1);
      setSetor2(res.data.setor2)
      setSetor3(res.data.setor3);
      setSetor4(res.data.setor4);
      setSetor5(res.data.setor5);
      setPorque1(res.data.porque1);
      setPorque2(res.data.porque2);
      setPorque3(res.data.porque3);
      setPorque4(res.data.porque4);
      setPorque5(res.data.porque5);
      setDescCausaIdentificada(res.data.descCausaIdentificada);
      setAnaliseDeRisco(res.data.analiseDeRisco);
      setDescAnaliseDeRisco(res.data.descAnaliseDeRisco);
      setAcaoCorretiva(res.data.acaoCorretiva);
      setJustAcaoCorretiva(res.data.justAcaoCorretiva);
      setAplicAvelSetores(res.data.aplicAvelSetores);
      setDescAplicavelSetores(res.data.descAplicavelSetores);

     /* setItem1(res.data.item1);
       setItem2(res.data.item2);
      setItem3(res.data.item3); 
      setAcao1(res.data.acao1);
       setAcao2(res.data.acao2);
      setAcao3(res.data.acao3); 
      setResponsavelAcao1(res.data.responsavelAcao1);
       setResponsavelAcao2(res.data.responsavelAcao2);
      setResponsavelAcao3(res.data.responsavelAcao3); 
      setPrevisaoAcao1(res.data.previsaoAcao1);
       setPrevisaoAcao2(res.data.previsaoAcao2);
      setPrevisaoAcao3(res.data.previsaoAcao3); 
      setExecucaoAcao1(res.data.execucaoAcao1);
     setExecucaoAcao2(res.data.execucaoAcao2);
      setExecucaoAcao3(res.data.execucaoAcao3); 
      setVerAcao1(res.data.verAcao1);
      setVerAcao2(res.data.verAcao2);
      setVerAcao3(res.data.verAcao3);
      setVerResponsavelAcao1(res.data.verResponsavelAcao1);
      setVerResponsavelAcao2(res.data.verResponsavelAcao2);
      setVerResponsavelAcao3(res.data.verResponsavelAcao3);
      setVerPrevisaoAcao1(res.data.verPrevisaoAcao1);
      setVerPrevisaoAcao2(res.data.verPrevisaoAcao2);
      setVerPrevisaoAcao3(res.data.verPrevisaoAcao3);
      setVerExecucaoAcao1(res.data.verExecucaoAcao2);
      setVerExecucaoAcao2(res.data.verExecucaoAcao2);
      setVerExecucaoAcao3(res.data.verExecucaoAcao3);
      setVerResultado1(res.data.verResultado1);
      setVerResultado2(res.data.verResultado2);
      setVerResultado3(res.data.verResultado3);
      setVerComentario1(res.data.verComentario1);
      setVerComentario2(res.data.verComentario2);
      setVerComentario3(res.data.verComentario3); */
      setEncerraResponsavel(res.data.encerraResponsavel);
      setEncerraData(res.data.encerraData);

      setImagem(res.data.imagem);
      setImagemPreview(res.data.imagem);    
      setImagem2(res.data.imagem2);
      setImagemPreview2(res.data.imagem2);     
      setImagem3(res.data.imagem3);
      setImagemPreview3(res.data.imagem3);    
      setImagem4(res.data.imagem4);
      setImagemPreview4(res.data.imagem4);    
      setImagem5(res.data.imagem5);
      setImagemPreview5(res.data.imagem5);

      setCheckMaquina(res.data.checkMaquina);
      setCheckMeioAmbiente(res.data.checkMeioAmbiente);
      setCheckMetodo(res.data.checkMetodo);
      setCheckMateriaPrima(res.data.checkMateriaPrima);
      setCheckMedicao(res.data.checkMedicao);
      setCheckMaodeObra(res.data.checkMaoDeObra);

      setEfeito(res.data.efeito);

      setMaquina(res.data.maquina);
      setMeioAmbiente(res.data.meioAmbiente);
      setMetodo(res.data.metodo);
      setMateriaPrima(res.data.materiaPrima);
      setMedicao(res.data.medicao);
      setMaoDeObra(res.data.maoDeObra);

      setDataAtual(res.data.dataAtual);
      setSubStatu(res.data.substatu);

      

      if (res.data.substatu !== 'Encerrado') {
        setIsDataLoaded(true);
        
      };

      if (res.data.origem === 'Outros') {
        setShowInput(true);
           
      };

      if (res.data.origem !== 'Outros') {
        setShowInput(false);
           
      };



      /* setIsDataLoaded(true); */
      BuscarVerificaEficacia();
      BuscarAcoes();
      
  };   
       };

/*        function NCEncerrado(){
        if(subStatu === 'Encerrado'){setIsDataLoaded (false);};
       }; */


const[subStatu,setSubStatu ]=useState();


       function Bloquear (){ setIsDataLoaded (false) };
       const [isDataLoaded, setIsDataLoaded] = useState(false);
       const bloqueado = isDataLoaded !== true;




  async function getProtocolo() {  
    const res = await axios.get(Conexao.api + 'BuscarProtocoloRNCWEB.php' );   
    // setPegaProtocolo(res.data.pegaProtocolo); 
    console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo)

    if (res.data.success === false) { 
    } else {
     /*  SelecioneOEmail(res.data.pegaProtocolo) */
    }   
  };

  function Limpar(){

      setOrigemSetor('');
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
      
      setDescAcaoCorretiva('');
      setDefinidaPor('');
      setExecutadaPor('');
      setDataDefinidaPor('');
      setDataExecutadaPor('');
      setParticipante1('');
      setParticipante2('');
      setParticipante3('');
      setParticipante4('');
      setParticipante5('');
      setSetor1('');
      setSetor2('');
      setSetor3('');
      setSetor4('');
      setSetor5('');
      setPorque1('');
      setPorque2('');
      setPorque3('');
      setPorque4('');
      setPorque5('');
      setDescCausaIdentificada('');
      setAnaliseDeRisco('');
      setDescAnaliseDeRisco('');
      setAcaoCorretiva('');
      setJustAcaoCorretiva('');
      setAplicAvelSetores('');
      setDescAplicavelSetores('');
      setItem1('');
      setItem2('');
      setItem3('');
      setAcao1('');
      setAcao2('');
      setAcao3('');
      setResponsavelAcao1('');
      setResponsavelAcao2('');
      setResponsavelAcao3('');
      setPrevisaoAcao1('');
      setPrevisaoAcao2('');
      setPrevisaoAcao3('');
      setExecucaoAcao1('');
      setExecucaoAcao2('');
      setExecucaoAcao3('');
      setVerAcao1('');
      setVerAcao2('');
      setVerAcao3('');
      setVerResponsavelAcao1('');
      setVerResponsavelAcao2('');
      setVerResponsavelAcao3('');
      setVerPrevisaoAcao1('');
      setVerPrevisaoAcao2('');
      setVerPrevisaoAcao3('');
      setVerExecucaoAcao1('');
      setVerExecucaoAcao2('');
      setVerExecucaoAcao3('');
      setVerResultado1('');
      setVerResultado2('');
      setVerResultado3('');
      setVerComentario1('');
      setVerComentario2('');
      setVerComentario3('');
      setEncerraResponsavel('');
      setEncerraData(''); 

      setAcoes(['']);
      setVerificaEficacia(['']);

     setImagem('');
      setImagemPreview('');    
      setImagem2('');
      setImagemPreview2('');     
      setImagem3('');
      setImagemPreview3('');    
      setImagem4('');
      setImagemPreview4('');    
      setImagem5('');
      setImagemPreview5(''); 

      setCheckMaquina('');
      setCheckMeioAmbiente('');
      setCheckMetodo('');
      setCheckMateriaPrima('');
      setCheckMedicao('');
      setCheckMaodeObra('');

      setEfeito('');

      setMaquina('');
      setMeioAmbiente('');
      setMetodo('');
      setMateriaPrima('');
      setMedicao('');
      setMaoDeObra('');
      setNomeResponsavel(['']);
 
      LimparAcao();
      LimparVerificacao();
      Bloquear();

      setSetorOrigem('');

      setDataAtual('');


      

     // setNumeroItem(''); 

   };


   function LimparAcao(){ 
      setItem1('');  
      setAcao1('');     
      setResponsavelAcao1('');    
      setPrevisaoAcao1('');    
      setExecucaoAcao1('');   
      //setNumeroItem(''); 
   };

     function LimparVerificacao(){ 
      setVerAcao1('');    
      setVerResponsavelAcao1('');    
      setVerPrevisaoAcao1('');    
      setVerExecucaoAcao1('');   
      setVerResultado1('');    
      setVerComentario1('');     
   };
 
/*  //Enviar E-mail
 async function sendEmail(e){
  // await getItem(e);
   // e.preventDefault();
  
    const TemplateParam = {
      mensage: pegaProtocolo
    }
    emailjs.send("service_x40cz13", "template_g1qkzlr", TemplateParam, "8wUT7xbpjnJI-SAuM")
    .then((response)=>{console.log("e-mail enviado", response.status, response.text)}, (erro)=>{console.log("erro:" , erro)})  
   // alert("e-mail enviado")
   console.log("EMAIL ENVIADO  ..." + e)  
  }; 
 
 async function sendEmail2(e){
  //  await getItem(e);
    // e.preventDefault();
     const TemplateParam = {
       mensage: pegaProtocolo
     }
     emailjs.send("service_x40cz13", "template_s45zlua", TemplateParam, "8wUT7xbpjnJI-SAuM")
     .then((response)=>{console.log("e-mail enviado", response.status, response.text)}, (erro)=>{console.log("erro:" , erro)})  
    // alert("e-mail enviado")  
    console.log("EMAIL ENVIADO  ..." + e)  
   }; 


  function SelecioneOEmail(){ 
    if( origem === 'QSSMA'){sendEmail()}
    else if(origem === 'RH'){sendEmail2()}
    else if(origem === 'Geotecnia'){sendEmail()}
    else if(origem === 'Comercial'){sendEmail()}
    else if(origem === 'Laboratório'){sendEmail()}
    else if(origem === 'Manutençao'){sendEmail()}
    else if(origem === 'Pesquisa e Mineral'){sendEmail()}
    else if(origem === 'Compras'){sendEmail()}
  };
 */


  const handleSelectChange = (e) => {
    if (e.target.value === 'Outros') {
    setShowInput(true);
    console.log('selecionado')   
    } else {
    setShowInput(false);
    console.log('não selecionado')
    }
    };


    function carregaUser(){setSetorLogado (localStorage.usuario) }; 
     useEffect(() => { carregaUser() });  

    async function getSetor() {  
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
        };

       /*  const isDisabled = setorDoCargo !== 'SGI'; */

        const isDisabled = setorDoCargo !== 'SGI' || setorDoCargo === 'SGI';
        const isDisabled2 = setorDoCargo !== 'SGI' ;
        

        function CriaNOVOSGI(){
          if (setorDoCargo !== 'SGI' ){Atualizar()}
          else if(setorDoCargo === 'SGI' & protocolo !== ''){Atualizar()}
          else if(setorDoCargo === 'SGI' & protocolo === ''){add() && Atualizar()  }
          else{};

        };   

        function CriaNOVOSGI2(){
          if (setorDoCargo !== 'SGI' ){Atualizar()}
          else if(setorDoCargo === 'SGI' & protocolo !== ''){Atualizar2()}
          else if(setorDoCargo === 'SGI' & protocolo === ''){add() && Atualizar2()   }
          else{};

        }; 


        const [nomeResponsavel,setNomeResponsavel]=useState([]);


        async function getResponsavel() {  
          const res = await axios.get(Conexao.api + 'ListaCadastroDeResponsaveisWEB.php?origemSetor='+ setorOrigem ); 
               
          /* console.log("TESTE DE PROTOCOLO "+ res.data.pegaProtocolo) */      
          if (res.data.success === false) { 
          } else {
          // LimpaResponsavel(); 
       setNomeResponsavel(res.data.result);
      
          }   
        };


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
      
      //  useEffect(()=>{getResponsavel()});


//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
 
     
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

        //77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

      
        const handleDescricaoChange2 = (e) => {
          setDescricaoproblema(e.target.value);
        };
      
        const handleImagemChange2 = (e) => {
          const file = e.target.files[0];
          setImagem2(file);
          // Criando uma URL temporária para exibir a prévia da imagem selecionada
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagemPreview2(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        };
      
        const handleDownloadClick2 = () => {
          // Verifica se a imagem está disponível para download
          if (imagemPreview2) {
            const link = document.createElement('a');
            link.href = imagemPreview2;
            link.download = "imagem_selecionada.jpg"; // O nome que você quer dar ao arquivo baixado
            link.click();
          } else {
            console.log("Nenhuma imagem selecionada para download.");
          }
        };
        //77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
  
      
      /*   const handleDescricaoChange3 = (e) => {
          setDescricaoproblema(e.target.value);
        }; */
      
        const handleImagemChange3 = (e) => {
          const file = e.target.files[0];
          setImagem3(file);
          // Criando uma URL temporária para exibir a prévia da imagem selecionada
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagemPreview3(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        };
      
        const handleDownloadClick3 = () => {
          // Verifica se a imagem está disponível para download
          if (imagemPreview3) {
            const link = document.createElement('a');
            link.href = imagemPreview3;
            link.download = "imagem_selecionada.jpg"; // O nome que você quer dar ao arquivo baixado
            link.click();
          } else {
            console.log("Nenhuma imagem selecionada para download.");
          }
        };
        //77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

      
     /*    const handleDescricaoChange4 = (e) => {
          setDescricaoproblema(e.target.value);
        }; */
      
        const handleImagemChange4 = (e) => {
          const file = e.target.files[0];
          setImagem4(file);
          // Criando uma URL temporária para exibir a prévia da imagem selecionada
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagemPreview4(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        };
      
        const handleDownloadClick4 = () => {
          // Verifica se a imagem está disponível para download
          if (imagemPreview4) {
            const link = document.createElement('a');
            link.href = imagemPreview4;
            link.download = "imagem_selecionada.jpg"; // O nome que você quer dar ao arquivo baixado
            link.click();
          } else {
            console.log("Nenhuma imagem selecionada para download.");
          }
        };
        //77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

      
/*         const handleDescricaoChange5 = (e) => {
          setDescricaoproblema(e.target.value);
        }; */
      
        const handleImagemChange5 = (e) => {
          const file = e.target.files[0];
          setImagem5(file);
          // Criando uma URL temporária para exibir a prévia da imagem selecionada
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagemPreview5(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        };
      
        const handleDownloadClick5 = () => {
          // Verifica se a imagem está disponível para download
          if (imagemPreview5) {
            const link = document.createElement('a');
            link.href = imagemPreview5;
            link.download = "imagem_selecionada.jpg"; // O nome que você quer dar ao arquivo baixado
            link.click();
          } else {
            console.log("Nenhuma imagem selecionada para download.");
          }
        };

//555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555

function LimpaResponsavel(){setResponsavel1('') && setResponsavel2('');};

useEffect(() => {
  getResponsavel();
}, [setorOrigem]);

useEffect(() => {
  getResponsavel2();
}, [setorIdentificou]);



const [popup1, setPopUp1]=useState(false);
const [popup2, setPopUp2]=useState(false);
const [popup3, setPopUp3]=useState(false);
const [popup4, setPopUp4]=useState(false);
const [popup5, setPopUp5]=useState(false);
const [popup6, setPopUp6]=useState(false);

function MudaPopUp1(){
  setPopUp1(!popup1);
};
function MudaPopUp2(){
  setPopUp2(!popup2);
};
function MudaPopUp3(){
  setPopUp3(!popup3);
};
function MudaPopUp4(){
  setPopUp4(!popup4);
};
function MudaPopUp5(){
  setPopUp5(!popup5);
};
function MudaPopUp6(){
  setPopUp6(!popup6);
};



/* ********************************************************************************************************************** */

const [assinaturaEncerramento, setAssinaturaEncerramento]=useState();
const [assinaturaExecucao, setAssinaturaExecucao]=useState();
const [assinaturaAbertura, setAssinaturaAbertura]=useState();

async function getAssinatura() {   
  const res = await axios.get(Conexao.api + 'BuscarAssinaturaSSMTWEB.php? encerraResponsavel=' + encerraResponsavel );     
  if (res.data.success === false) { 
    setAssinaturaEncerramento('')
   // NaoEncontra();   
  } else { 
    setAssinaturaEncerramento(res.data.assinaturaencImagem)
}   
};

async function getAssinatura2() {   
  const res = await axios.get(Conexao.api + 'BuscarAssinaturaSSMTWEB2.php? responsavel1=' + responsavel1  );     
  if (res.data.success === false) { 
    setAssinaturaAbertura('')
   // NaoEncontra();   
  } else { 
    setAssinaturaAbertura(res.data.assinaturaencImagem2)
}   
};

async function getAssinatura3() {   
  const res = await axios.get(Conexao.api + 'BuscarAssinaturaSSMTWEB3.php? executadaPor=' + executadaPor );     
  if (res.data.success === false) { 
    setAssinaturaExecucao('')
   // NaoEncontra();   
  } else { 
    setAssinaturaExecucao(res.data.assinaturaencImagem3)
}   
};

useEffect(()=>{getAssinatura()},[encerraResponsavel]);
useEffect(()=>{getAssinatura2()},[responsavel1]);
useEffect(()=>{getAssinatura3()},[executadaPor]);




async function GerarPDF() {
 
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const arialBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

 // const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

   const page = pdfDoc.addPage() 
   
  var n = 0;
  var i = 1;



      var n = 0;
      var n2 = 0;
      var i=1
      const totalAcoes = acoes.length;
      const totalVerifica = verificaEficacia.length;

      let pageCount = 1;
      


// CABEÇALHO


        // LOGO GEOCONTROLE
const imageUrl = 'data:image/png;base64,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';
const imageBytes = await fetch(imageUrl).then(response => response.arrayBuffer());



// Inserir a imagem na posição desejada
const image = await pdfDoc.embedPng(imageBytes);
const imageDims = image.scale(0.2); // Ajuste o fator de escala conforme necessário

const xPosition = 27; // Ajuste a posição X da imagem
const yPosition = 795; // Ajuste a posição Y da imagem



page.drawImage(image, {
    x: xPosition,
    y: yPosition,
    width: imageDims.width,
    height: imageDims.height,
});



const imageUrl2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArMAAABACAIAAACGHGjSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowODozMSAxMzoxMDo0Ob1mDjYAAAEtSURBVHhe7d3BCQJBEEXBXVMxHg3WjcdYWpCR50XwKlZd5ofw6MvsM7MBADyd1gsAoAwAgHfKAACIMgAAogwAgCgDACDKAACIMgAAogwAgCgDACDKAACIMgAA8tWPSufbZS0A4Gfdr8dan7kZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAkH1m1gQA/p6bAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAAvGzbA0nODHURHqEnAAAAAElFTkSuQmCC';
const imageBytes2 = await fetch(imageUrl2).then(response => response.arrayBuffer());

// Inserir a imagem na posição desejada
const image2 = await pdfDoc.embedPng(imageBytes2);
const imageDims2 = image2.scale(0.5); // Ajuste o fator de escala conforme necessário

const xPosition2 = 369; // Ajuste a posição X da imagem
const yPosition2 = 792; // Ajuste a posição Y da imagem

page.drawImage(image2, {
    x: xPosition2,
    y: yPosition2,
    width: 200,
    height: 35,
});

page.drawText('RNC:     '+protocolo, {
  x: 435,
  y: 807,
  size: 12, // Tamanho da fonte
  font: arialFont,
  color: rgb(1, 1, 1), // Cor do texto (branco)
});

page.drawRectangle({
  x: 30,
  y: 675,
  width: 535,
  height: 120,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), // Cor de preenchimento (verde) -->(34,139,34)
});




page.drawRectangle({
  x: 30,
  y: 765,
  width: 425,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('RELATÓRIO:', {
  x: 32,
  y: 784,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('NÃO CONFORMIDADE - SGI', {
  x: 185,
  y: 774,
  size: 12, // Tamanho da fonte
  font: arialBoldFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //CODIGO
 page.drawRectangle({
  x: 455,
  y: 765,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('PG-SG-006-01', {
  x: 480,
  y: 775,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //ORIGEM
 page.drawRectangle({
  x: 30,
  y: 705,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('ORIGEM:', {
  x: 32,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (origem === 'Outros') {
  page.drawText(descrever, {
    x: 62,
    y: 710,
    size: 9,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
} else {
  page.drawText(origem, {
    x: 62,
    y: 710,
    size: 9,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
}



 //CLIENTE
 page.drawRectangle({
  x: 170,
  y: 735,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('CLIENTE:', {
  x: 172,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(cliente, {
  x: 222,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //SETOR QUE IDENTIFICOU A NC
 page.drawRectangle({
  x: 310,
  y: 735,
  width: 145,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('SETOR QUE IDENTIFICOU A NC:', {
  x: 312,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(setorIdentificou, {
  x: 352,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 //RESPONSAVEL1
 page.drawRectangle({
  x: 455,
  y: 735,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('RESPONSÁVEL:', {
  x: 457,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(responsavel1, {
  x: 470,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //SETOR DE ORIGEM DA NC
 page.drawRectangle({
  x: 310,
  y: 705,
  width: 145,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('SETOR DE ORIGEM DA NC:', {
  x: 312,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(setorOrigem, {
  x: 352,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //RESPONSAVEL2
 page.drawRectangle({
  x: 455,
  y: 705,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('RESPONSÁVEL:', {
  x: 457,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(responsavel2, {
  x: 470,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //DATA DA ABERTURA
 page.drawRectangle({
  x: 30,
  y: 735,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('DATA DE ABERTURA:', {
  x: 32,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(dataAtual).format('DD/MM/YYYY'), {
  x: 62,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //DOCUMENTO DO CLIENTE
 page.drawRectangle({
  x: 170,
  y: 705,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('DOCUMENTO DO CLIENTE:', {
  x: 172,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(documentoDoCliente, {
  x: 222,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //REINCIDENTE?
 page.drawRectangle({
  x: 455,
  y: 675,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('É REINCIDENTE?', {
  x: 457,
  y: 694,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(reincidente, {
  x: 500,
  y: 680,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //DESCRIÇÃO

 page.drawRectangle({
  x: 30,
  y: 675,
  width: 425,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('DESCRIÇÃO:', {
  x: 32,
  y: 694,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});





//777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

//


 





//RODAPÉ

page.drawRectangle({
  x: 30,
  y: 110,
  width: 535,
  height: 25,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('OBSERVAÇÃO:', {
  x: 32,
  y: 125,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



page.drawRectangle({
  x: 30,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('ABERTURA', {
  x: 95,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 32,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* page.drawText(responsavel1 || "", {
  x: 91,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

if (assinaturaAbertura && assinaturaAbertura.trim() !== '') {
  const imageUrl4 = assinaturaAbertura;
  const imageBytes4 = await fetch(imageUrl4).then(response => response.arrayBuffer());

  // Inserir a imagem na posição desejada
  const image4 = await pdfDoc.embedPng(imageBytes4);
  const imageDims4 = image4.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims4.width;
  const scaleY = rectHeight / imageDims4.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims4.width * scale;
  const scaledHeight = imageDims4.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
  const xPosition4 = 70 + (rectWidth - scaledWidth) / 2;
  const yPosition4 = 78 + (rectHeight - scaledHeight) / 2;

  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image4, {
    x: xPosition4,
    y: yPosition4,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  })
};


page.drawText('Data:', {
  x: 32,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(dataAtual).format('DD/MM/YYYY') || "", {
  x: 58,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


//88888888888888888888888888888

page.drawRectangle({
  x: 208,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('EXECUÇÃO', {
  x: 275,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 210,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* page.drawText(executadaPor || "", {
  x: 268,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

page.drawText('Data:', {
  x: 210,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 page.drawText(moment(dataExecutadaPor).format('DD/MM/YYYY') || "", {
  x: 235,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
 


if (assinaturaExecucao && assinaturaExecucao.trim() !== '') {
  const imageUrl5 = assinaturaExecucao;
  const imageBytes5 = await fetch(imageUrl5).then(response => response.arrayBuffer());

  // Inserir a imagem na posição desejada
  const image5 = await pdfDoc.embedPng(imageBytes5);
  const imageDims5 = image5.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims5.width;
  const scaleY = rectHeight / imageDims5.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims5.width * scale;
  const scaledHeight = imageDims5.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
   const xPosition5 = 248 + (rectWidth - scaledWidth) / 2;
  const yPosition5 = 78 + (rectHeight - scaledHeight) / 2; 


  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image5, {
    x: xPosition5,
    y: yPosition5,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  })
};

//8888888888888888888888888888888888
page.drawRectangle({
  x: 386,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('ENCERRAMENTO', {
  x: 436,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 388,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (assinaturaEncerramento && assinaturaEncerramento.trim() !== '') {
  const imageUrl3 = assinaturaEncerramento;
  const imageBytes3 = await fetch(imageUrl3).then(response => response.arrayBuffer());

  

  // Inserir a imagem na posição desejada
  const image3 = await pdfDoc.embedPng(imageBytes3);
  const imageDims3 = image3.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims3.width;
  const scaleY = rectHeight / imageDims3.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims3.width * scale;
  const scaledHeight = imageDims3.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
 
  const xPosition3 = 428 + (rectWidth - scaledWidth) / 2; 
  const yPosition3 = 78 + (rectHeight - scaledHeight) / 2;

  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image3, {
    x: xPosition3,
    y: yPosition3,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

}

 
//assinaturaEncerramento

page.drawText('Data:', {
  x: 388,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(encerraData).format('DD/MM/YYYY') || "", {
  x: 415,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});





page.drawText('Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole ', {
  x: 58,
  y: 57,
  size: 10, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




page.drawImage(image2, {
  x: 20,
  y: 5,
  width: 556,
  height: 40,
});
page.drawText('www.geocontrole.com - e-mail: mail.br@geocontrole.com ', {
  x: 145,
  y: 24,
  size: 12, // Tamanho da fonte
  font: arialFont,
  color: rgb(1, 1, 1), // Cor do texto (branco)
});

page.drawText('Av.Canadá,Nº 159 - Jardim Canadá - Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011 ', {
  x: 45,
  y: 42,
  size: 10, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});





page.drawText(`Página ${pageCount}`, {
  x: 530, // Ajuste as coordenadas conforme necessário
  y: 5,  // Ajuste as coordenadas conforme necessário
  size: 9,
  font: arialFont,
  color: rgb(0, 0, 0),
});

pageCount++;










//999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

//CORPO DO RELATORIO




/*  const descricaoFixa = "Descrição detalhada do problema";
  const evidenciasFixa = "Evidências"; */
  
  const textoDescricaoProblema = descricaoproblema || "";
  const textoEvidencias = evidencia1 || "";

  let currentPageHeight = page.getHeight();
  
  const maxCaracteresPorLinha = 120; // Defina o número máximo de caracteres por linha
  
  function quebrarTextoEmLinhas(texto, maxCaracteresPorLinha) {
    const palavras = texto.split(" ");
    let linhas = [];
    let linhaAtual = "";


  
    for (const palavra of palavras) {
 
      if (linhaAtual.length + (linhaAtual === "" ? 0 : 1) + palavra.length <= maxCaracteresPorLinha) {
        linhaAtual += (linhaAtual === "" ? "" : " ") + palavra;
      } else {
        linhas.push(linhaAtual);
        linhaAtual = palavra;
      }
    }
  
    if (linhaAtual !== "") {
      linhas.push(linhaAtual);
    }
  
    return linhas;
  }
  
  const linhasDescricaoProblema = quebrarTextoEmLinhas(textoDescricaoProblema, maxCaracteresPorLinha);
  const linhasEvidencias = quebrarTextoEmLinhas(textoEvidencias, maxCaracteresPorLinha);
  
  const startY = 635;
  const fontSize = 9;
  const lineHeight = 14; // Espaçamento entre as linhas
  const font = arialFont;
  const textColor = rgb(0, 0, 0);

  
  let retanguloY = startY;

  
  // Seção 1 - Descrição do Problema
  const retanguloAltura1 = (linhasDescricaoProblema.length + 1) * lineHeight; // +1 para levar em conta o espaço entre o texto fixo e a descrição
  
  // Desenhar o retângulo da primeira seção de texto
  page.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura1,
    width: 535,
    height: retanguloAltura1 + 20, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  // Desenhar o texto fixo da primeira seção
  page.drawText("Descrição detalhada do problema", {
    x: 35,
    y: retanguloY  + 5, // Ajuste de 5 unidades para o texto fixo
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });
  
  linhasDescricaoProblema.forEach((linha, index) => {
    const y = retanguloY - (index * lineHeight) - 10; // Ajuste para que o texto fique dentro do retângulo
    page.drawText(linha, {
      x: 35,
      y,
      size: fontSize,
      font,
      color: textColor,
    });
  });

/* 
  if (retanguloY < 170) {
     pdfDoc.addPage(); 
    currentPageHeight = page.getHeight(); // Reinicializa a altura da nova página
    retanguloY = 635;
  } */


  
  retanguloY -= retanguloAltura1 + 20; // Ajuste de 20 unidades para espaçamento entre as seções
  
  // Seção 2 - Evidências
  const retanguloAltura2 = (linhasEvidencias.length + 1) * lineHeight; // +1 para levar em conta o espaço entre o texto fixo e as evidências
  
  // Desenhar o retângulo da segunda seção de texto
  page.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura2,
    width: 535,
    height: retanguloAltura2 + 20, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  // Desenhar o texto fixo da segunda seção
  page.drawText("Evidências", {
    x: 35,
    y: retanguloY  + 5, // Ajuste de 5 unidades para o texto fixo
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });
  
  linhasEvidencias.forEach((linha, index) => {
    const y = retanguloY - (index * lineHeight) - 10; // Ajuste para que o texto fique dentro do retângulo
    page.drawText(linha, {
      x: 35,
      y,
      size: fontSize,
      font,
      color: textColor,
    });
  }); 



 
const acaoDeContencaoTextSize = 10;

retanguloY -= retanguloAltura2 + 20; // Ajuste de 20 unidades para espaçamento entre as seções


// Posição vertical para o texto "Ação de contenção"
const acaoDeContencaoY = retanguloY - 10; // Ajuste para que o texto fique dentro do retângulo

// Desenhar o texto "Ação de contenção" abaixo das seções anteriores
page.drawText('Ação de contenção', {
  x: 260, // Ajuste a posição x conforme necessário
  y: acaoDeContencaoY, // Use a posição vertical calculada
  size: acaoDeContencaoTextSize, // Tamanho da fonte
  font: arialBoldFont, // Use a fonte apropriada
  color: textColor, // Cor do texto
});




 // Código para "Ação de Contenção"
const textoAcaoContencao = "Descrição";
const descAcaoCorretivaText = descAcaoCorretiva || "";

// Calcule a altura necessária para a seção de ação de contenção
const linhasAcaoContencao = quebrarTextoEmLinhas(descAcaoCorretivaText, maxCaracteresPorLinha);
const retanguloAltura3 = (linhasAcaoContencao.length + 1) * lineHeight;

// Desenhar o retângulo da seção de ação de contenção
page.drawRectangle({
  x: 30,
  y: retanguloY - retanguloAltura3-55,
  width: 535,
  height: retanguloAltura3 + 55, // Ajuste de 10 unidades para espaçamento vertical
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
});

page.drawText('Ação de contenção', {
    x: 265,
    y: retanguloY + 5, // Ajuste de 5 unidades para o texto fixo
    size: 10,
    font: arialBoldFont,
    color: textColor,
  });

// Desenhar o texto fixo da seção de ação de contenção
page.drawText(textoAcaoContencao, {
  x: 35,
  y: retanguloY - 15, // Ajuste de 5 unidades para o texto fixo
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});

// Desenhar o texto variável da seção de ação de contenção
linhasAcaoContencao.forEach((linha, index) => {
  const y = retanguloY - (index * lineHeight) - 30; // Ajuste para que o texto fique dentro do retângulo
  page.drawText(linha, {
    x: 35,
    y,
    size: fontSize,
    font,
    color: textColor,
  });
  


});





 page.drawText('Definida por: ', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 40, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  }); 

  page.drawText(definidaPor || "", {
    x: 90,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 40, // Ajuste a posição vertical
    size: fontSize,
    font,
    color: textColor,
  }); 


  page.drawText('Data: ', {
    x: 405,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 40, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });


  page.drawText(moment(dataDefinidaPor ).format('DD/MM/YYYY') || "", {
    x: 430,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 40, // Ajuste a posição vertical
    size: fontSize,
    font,
    color: textColor,
  });






  page.drawText('Será executada por: ', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 55, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  }); 

  page.drawText(executadaPor || "", {
    x: 120,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 55, // Ajuste a posição vertical
    size: fontSize,
    font,
    color: textColor,
  }); 


  page.drawText('Data: ', {
    x: 405,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 55, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });

  page.drawText(moment(dataExecutadaPor ).format('DD/MM/YYYY') || "", {
    x: 430,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 55, // Ajuste a posição vertical
    size: fontSize,
    font,
    color: textColor,
  });



  page.drawText('Equipe de Análise', {
    x: 270, // Mantenha o valor X consistente com os elementos anteriores
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 85, // Ajuste a posição vertical para alinhar abaixo dos elementos anteriores
    size: 10,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });



  page.drawRectangle({
    x: 30,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 175,
    width: 268,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  page.drawText('Participantes ', {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 108,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


  page.drawText(participante1 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 122,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(participante2 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 133,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(participante3 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 144,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(participante4 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 155,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(participante5 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 166,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });





  page.drawRectangle({
    x: 298,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 175,
    width: 267,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  
  page.drawText('Setor ', {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 108,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(setor1 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 122,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(setor2 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 133,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(setor3 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 144,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(setor4 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 155,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(setor5 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 166,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


  page.drawText('Diagrama de Ishikawa', {
    x: 255,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 195,
    size: 10, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  



  // linha 10 A
if (checkMateriaPrima ) {
  page.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0,0,0), 
  });
} else {
  page.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Matéria-prima', {
  x: 190,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 219,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (checkMaquina ) {
  page.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  page.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Máquina', {
  x: 282,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 219,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (checkMaoDeObra ) {
  page.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  page.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Mão de obra', {
  x: 362,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 219,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 

// linha 11 A

//linha reta
page.drawLine({start: { x: 170, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240 },
  end: { x: 420, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
  thickness: 1,
  color: rgb(0, 0, 0),
  opacity: 0.75,})

// diagonal 1
  page.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220 },
    end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

  // diagonal 2
  page.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220 },
    end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 3
  page.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 220 },
    end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

 
    // diagonal 4
  page.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 260 },
    end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 5
  page.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 260 },
    end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 6
  page.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 260 },
    end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 240},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})




// linha 12 A

if (checkMedicao ) {
  page.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  page.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Medição', {
  x: 190,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 269,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (checkMetodo ) {
  page.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  page.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Método', {
  x: 282,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 269,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 

if (checkMeioAmbiente) {
  page.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  page.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 270,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

page.drawText('Meio ambiente', {
  x: 362,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 269,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); 






const retanguloYDescricaoProblema = retanguloY - (linhasAcaoContencao.length * lineHeight) - 290 - 10;
page.drawRectangle({
  x: 30,
  y: retanguloYDescricaoProblema - retanguloAltura1, // Ajuste a posição vertical
  width: 535,
  height: retanguloAltura1 + 20, // Ajuste de 10 unidades para espaçamento vertical
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
});

page.drawText('Efeito:', {
  x: 35,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 285 - 10,
  size: 9, // Tamanho da fonte
  font: arialBoldFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


const inicioDescricaoProblemaY = retanguloY - (linhasAcaoContencao.length * lineHeight) - 300 - 10; // Ajuste para o texto fique dentro do retângulo
linhasDescricaoProblema.forEach((linha, index) => {
  const y = inicioDescricaoProblemaY - (index * lineHeight); // Ajuste para que o texto fique dentro do retângulo
  page.drawText(linha, {
    x: 35,
    y,
    size: fontSize,
    font,
    color: textColor,
  });
});


if (checkMateriaPrima) {
  page.drawText('Matéria-prima:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 10,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(materiaPrima || "", {
    x:100,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 10,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {};



if (checkMaquina ) {
  page.drawText('Máquina:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 20,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(maquina || "", {
    x: 70,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 20,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {}



if (checkMaoDeObra ) {
  page.drawText('Mão de obra:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 30,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(maoDeObra || "", {
    x: 90,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 30,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {}


if (checkMedicao ) {
  page.drawText('Medição:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 40,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(medicao || "", {
    x: 70,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 40,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {}

if (checkMetodo ) {
  page.drawText('Método:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 50,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(metodo || "", {
    x: 70,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 50,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {}

if (checkMeioAmbiente) {
  page.drawText('Meio Ambiente:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 60,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  page.drawText(meioAmbiente || "", {
    x: 100,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 335 - 60,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
} else {}




// Atualize a posição vertical para a próxima seção
retanguloY -= retanguloAltura3 + 30;


 /*  let currentPage = page; // Inicialmente, a página atual é page2
  let y = 362; */
  /* pageCount++; */ // Valor inicial de y
  


//
  
 
  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, "sgi.pdf", "application/pdf");
console.log(pdfBytes)
}











/* async function createForm() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const arialBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  let currentPage = pdfDoc.addPage(); // Adiciona a primeira página
  let currentPageHeight = currentPage.getHeight();

  // Loop para criar páginas automaticamente
  for (let i = 0; i < 5; i++) {
    const { width, height } = currentPage.getSize();

    // Adicione o retângulo à página atual
    currentPage.drawRectangle({
      x: 30,
      y: currentPageHeight - 30, // Ajusta a posição com base na altura atual
      width: 535,
      height: 30,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(0, 0, 0),
    });

    // Atualiza a altura da página atual
    currentPageHeight -= 30; // Subtrai a altura do retângulo

    // Verifica se a página atual está cheia
    if (currentPageHeight < 30) {
      currentPage = pdfDoc.addPage(); // Adiciona uma nova página
      currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página
    }
  }

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "gdf.pdf", "application/pdf");

}; */
 


async function createForm() {
  const pdfDoc = await PDFDocument.create();
  const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const arialBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const textoDescricaoProblema = descricaoproblema || "";
  const textoEvidencias = evidencia1 || "";
  const maxCaracteresPorLinha = 120; // Defina o número máximo de caracteres por linha





  
  
//8888888888888888888888888888888888888888888888888888888888888888888888888888

  function quebrarTextoEmLinhas(texto, maxCaracteresPorLinha) {
    const palavras = texto.split(" ");
    let linhas = [];
    let linhaAtual = "";

    for (const palavra of palavras) {
      if (linhaAtual.length + (linhaAtual === "" ? 0 : 1) + palavra.length <= maxCaracteresPorLinha) {
        linhaAtual += (linhaAtual === "" ? "" : " ") + palavra;
      } else {
        linhas.push(linhaAtual);
        linhaAtual = palavra;
      }
    }

    if (linhaAtual !== "") {
      linhas.push(linhaAtual);
    }

    return linhas;
  }

  const pdfDoc2 = await PDFDocument.create();
  let currentPage = pdfDoc.addPage();
  let currentPageHeight = 635;

const { width, height } = currentPage.getSize();




/*     currentPage.drawText('RNC:     '+protocolo, {
    x: 435,
    y: 807,
    size: 12, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */

      // CABEÇALHO
      let pageCount = 1;

      // LOGO GEOCONTROLE
const imageUrl = 'data:image/png;base64,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';
const imageBytes = await fetch(imageUrl).then(response => response.arrayBuffer());



// Inserir a imagem na posição desejada
const image = await pdfDoc.embedPng(imageBytes);
const imageDims = image.scale(0.2); // Ajuste o fator de escala conforme necessário

const xPosition = 27; // Ajuste a posição X da imagem
const yPosition = 795; // Ajuste a posição Y da imagem



currentPage.drawImage(image, {
  x: xPosition,
  y: yPosition,
  width: imageDims.width,
  height: imageDims.height,
});



const imageUrl2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArMAAABACAIAAACGHGjSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowODozMSAxMzoxMDo0Ob1mDjYAAAEtSURBVHhe7d3BCQJBEEXBXVMxHg3WjcdYWpCR50XwKlZd5ofw6MvsM7MBADyd1gsAoAwAgHfKAACIMgAAogwAgCgDACDKAACIMgAAogwAgCgDACDKAACIMgAA8tWPSufbZS0A4Gfdr8dan7kZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAkH1m1gQA/p6bAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAAvGzbA0nODHURHqEnAAAAAElFTkSuQmCC';
const imageBytes2 = await fetch(imageUrl2).then(response => response.arrayBuffer());

// Inserir a imagem na posição desejada
const image2 = await pdfDoc.embedPng(imageBytes2);
const imageDims2 = image2.scale(0.5); // Ajuste o fator de escala conforme necessário

const xPosition2 = 369; // Ajuste a posição X da imagem
const yPosition2 = 792; // Ajuste a posição Y da imagem

currentPage.drawImage(image2, {
  x: xPosition2,
  y: yPosition2,
  width: 200,
  height: 35,
});

currentPage.drawText('RNC:     '+protocolo, {
x: 435,
y: 807,
size: 12, // Tamanho da fonte
font: arialFont,
color: rgb(1, 1, 1), // Cor do texto (branco)
});

currentPage.drawRectangle({
x: 30,
y: 675,
width: 535,
height: 120,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), // Cor de preenchimento (verde) -->(34,139,34)
});




currentPage.drawRectangle({
x: 30,
y: 765,
width: 425,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});

currentPage.drawText('RELATÓRIO:', {
x: 32,
y: 784,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText('NÃO CONFORMIDADE - SGI', {
x: 185,
y: 774,
size: 12, // Tamanho da fonte
font: arialBoldFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



//CODIGO
currentPage.drawRectangle({
x: 455,
y: 765,
width: 110,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});

currentPage.drawText('PG-SG-006-01', {
x: 480,
y: 775,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



//ORIGEM
currentPage.drawRectangle({
x: 30,
y: 705,
width: 140,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('ORIGEM:', {
x: 32,
y: 724,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (origem === 'Outros') {
currentPage.drawText(descrever, {
  x: 62,
  y: 710,
  size: 9,
  font: arialFont,
  color: rgb(0, 0, 0),
});
} else {
currentPage.drawText(origem, {
  x: 62,
  y: 710,
  size: 9,
  font: arialFont,
  color: rgb(0, 0, 0),
});
}



//CLIENTE
currentPage.drawRectangle({
x: 170,
y: 735,
width: 140,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('CLIENTE:', {
x: 172,
y: 754,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(cliente, {
x: 222,
y: 740,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//SETOR QUE IDENTIFICOU A NC
currentPage.drawRectangle({
x: 310,
y: 735,
width: 145,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('SETOR QUE IDENTIFICOU A NC:', {
x: 312,
y: 754,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});
currentPage.drawText(setorIdentificou, {
x: 352,
y: 740,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

//RESPONSAVEL1
currentPage.drawRectangle({
x: 455,
y: 735,
width: 110,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('RESPONSÁVEL:', {
x: 457,
y: 754,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});
currentPage.drawText(responsavel1, {
x: 470,
y: 740,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



//SETOR DE ORIGEM DA NC
currentPage.drawRectangle({
x: 310,
y: 705,
width: 145,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('SETOR DE ORIGEM DA NC:', {
x: 312,
y: 724,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});
currentPage.drawText(setorOrigem, {
x: 352,
y: 710,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//RESPONSAVEL2
currentPage.drawRectangle({
x: 455,
y: 705,
width: 110,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('RESPONSÁVEL:', {
x: 457,
y: 724,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});
currentPage.drawText(responsavel2, {
x: 470,
y: 710,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//DATA DA ABERTURA
currentPage.drawRectangle({
x: 30,
y: 735,
width: 140,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('DATA DE ABERTURA:', {
x: 32,
y: 754,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(moment(dataAtual).format('DD/MM/YYYY'), {
x: 62,
y: 740,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//DOCUMENTO DO CLIENTE
currentPage.drawRectangle({
x: 170,
y: 705,
width: 140,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('DOCUMENTO DO CLIENTE:', {
x: 172,
y: 724,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(documentoDoCliente, {
x: 222,
y: 710,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//REINCIDENTE?
currentPage.drawRectangle({
x: 455,
y: 675,
width: 110,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('É REINCIDENTE?', {
x: 457,
y: 694,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});
currentPage.drawText(reincidente, {
x: 500,
y: 680,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



//DESCRIÇÃO

currentPage.drawRectangle({
x: 30,
y: 675,
width: 425,
height: 30,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('DESCRIÇÃO:', {
x: 32,
y: 694,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});





//777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

//




//RODAPÉ

currentPage.drawRectangle({
x: 30,
y: 110,
width: 535,
height: 25,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
currentPage.drawText('OBSERVAÇÃO:', {
x: 32,
y: 125,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



currentPage.drawRectangle({
x: 30,
y: 68,
width: 179,
height: 42,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});

currentPage.drawText('ABERTURA', {
x: 95,
y: 100,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText('Responsável:', {
x: 32,
y: 85,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* currentPage.drawText(responsavel1 || "", {
x: 91,
y: 85,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

if (assinaturaAbertura && assinaturaAbertura.trim() !== '') {
const imageUrl4 = assinaturaAbertura;
const imageBytes4 = await fetch(imageUrl4).then(response => response.arrayBuffer());

// Inserir a imagem na posição desejada
const image4 = await pdfDoc.embedPng(imageBytes4);
const imageDims4 = image4.scale(0.1); // Ajuste o fator de escala conforme necessário 

const rectWidth = 120; // Largura do retângulo
const rectHeight = 20; // Altura do retângulo

// Calcule a proporção de escala
const scaleX = rectWidth / imageDims4.width;
const scaleY = rectHeight / imageDims4.height;

// Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
const scale = Math.min(scaleX, scaleY);

// Calcule a largura e altura da imagem após o dimensionamento
const scaledWidth = imageDims4.width * scale;
const scaledHeight = imageDims4.height * scale;

// Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
const xPosition4 = 70 + (rectWidth - scaledWidth) / 2;
const yPosition4 = 78 + (rectHeight - scaledHeight) / 2;

// Desenhe a imagem no PDF apenas se houver uma imagem válida
currentPage.drawImage(image4, {
  x: xPosition4,
  y: yPosition4,
  width: scaledWidth,
  height: scaledHeight,
  color: rgb(0, 0, 0), // Cor do texto (branco)
})
};


currentPage.drawText('Data:', {
x: 32,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(moment(dataAtual).format('DD/MM/YYYY') || "", {
x: 58,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});


//88888888888888888888888888888

currentPage.drawRectangle({
x: 208,
y: 68,
width: 179,
height: 42,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});

currentPage.drawText('EXECUÇÃO', {
x: 275,
y: 100,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText('Responsável:', {
x: 210,
y: 85,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* currentPage.drawText(executadaPor || "", {
x: 268,
y: 85,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

currentPage.drawText('Data:', {
x: 210,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(moment(dataExecutadaPor).format('DD/MM/YYYY') || "", {
x: 235,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (assinaturaExecucao && assinaturaExecucao.trim() !== '') {
const imageUrl5 = assinaturaExecucao;
const imageBytes5 = await fetch(imageUrl5).then(response => response.arrayBuffer());

// Inserir a imagem na posição desejada
const image5 = await pdfDoc.embedPng(imageBytes5);
const imageDims5 = image5.scale(0.1); // Ajuste o fator de escala conforme necessário 

const rectWidth = 120; // Largura do retângulo
const rectHeight = 20; // Altura do retângulo

// Calcule a proporção de escala
const scaleX = rectWidth / imageDims5.width;
const scaleY = rectHeight / imageDims5.height;

// Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
const scale = Math.min(scaleX, scaleY);

// Calcule a largura e altura da imagem após o dimensionamento
const scaledWidth = imageDims5.width * scale;
const scaledHeight = imageDims5.height * scale;

// Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
 const xPosition5 = 248 + (rectWidth - scaledWidth) / 2;
const yPosition5 = 78 + (rectHeight - scaledHeight) / 2; 


// Desenhe a imagem no PDF apenas se houver uma imagem válida
currentPage.drawImage(image5, {
  x: xPosition5,
  y: yPosition5,
  width: scaledWidth,
  height: scaledHeight,
  color: rgb(0, 0, 0), // Cor do texto (branco)
})
};

//8888888888888888888888888888888888
currentPage.drawRectangle({
x: 386,
y: 68,
width: 179,
height: 42,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});

currentPage.drawText('ENCERRAMENTO', {
x: 436,
y: 100,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText('Responsável:', {
x: 388,
y: 85,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (assinaturaEncerramento && assinaturaEncerramento.trim() !== '') {
const imageUrl3 = assinaturaEncerramento;
const imageBytes3 = await fetch(imageUrl3).then(response => response.arrayBuffer());



// Inserir a imagem na posição desejada
const image3 = await pdfDoc.embedPng(imageBytes3);
const imageDims3 = image3.scale(0.1); // Ajuste o fator de escala conforme necessário 

const rectWidth = 120; // Largura do retângulo
const rectHeight = 20; // Altura do retângulo

// Calcule a proporção de escala
const scaleX = rectWidth / imageDims3.width;
const scaleY = rectHeight / imageDims3.height;

// Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
const scale = Math.min(scaleX, scaleY);

// Calcule a largura e altura da imagem após o dimensionamento
const scaledWidth = imageDims3.width * scale;
const scaledHeight = imageDims3.height * scale;

// Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo

const xPosition3 = 428 + (rectWidth - scaledWidth) / 2; 
const yPosition3 = 78 + (rectHeight - scaledHeight) / 2;

// Desenhe a imagem no PDF apenas se houver uma imagem válida
currentPage.drawImage(image3, {
  x: xPosition3,
  y: yPosition3,
  width: scaledWidth,
  height: scaledHeight,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

}


//assinaturaEncerramento

currentPage.drawText('Data:', {
x: 388,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});

currentPage.drawText(moment(encerraData).format('DD/MM/YYYY') || "", {
x: 415,
y: 72,
size: 9, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});



/* currentPage.drawRectangle({
x: 30,
y: 67,
width: 535,
height: 13,
borderColor: rgb(0, 0, 0), // Cor da borda (preto)
borderWidth: 1, // Largura da borda
color: rgb(1,1,1), 
});
*/

currentPage.drawText('Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole ', {
x: 58,
y: 57,
size: 10, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});




currentPage.drawImage(image2, {
x: 20,
y: 5,
width: 556,
height: 40,
});
currentPage.drawText('www.geocontrole.com - e-mail: mail.br@geocontrole.com ', {
x: 145,
y: 24,
size: 12, // Tamanho da fonte
font: arialFont,
color: rgb(1, 1, 1), // Cor do texto (branco)
});

currentPage.drawText('Av.Canadá,Nº 159 - Jardim Canadá - Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011 ', {
x: 45,
y: 42,
size: 10, // Tamanho da fonte
font: arialFont,
color: rgb(0, 0, 0), // Cor do texto (branco)
});




currentPage.drawText(`Página ${pageCount}`, {
x: 530, // Ajuste as coordenadas conforme necessário
y: 5,  // Ajuste as coordenadas conforme necessário
size: 9,
font: arialFont,
color: rgb(0, 0, 0),
});

pageCount++;
  

  const linhasDescricaoProblema = quebrarTextoEmLinhas(textoDescricaoProblema, maxCaracteresPorLinha);
  const linhasEvidencias = quebrarTextoEmLinhas(textoEvidencias, maxCaracteresPorLinha);

  let retanguloY = currentPageHeight;
  const fontSize = 9;
  const lineHeight = 14; // Espaçamento entre as linhas
  const textColor = rgb(0, 0, 0);

  // Seção 1 - Descrição do Problema
  const retanguloAltura1 = (linhasDescricaoProblema.length + 1) * lineHeight; // +1 para levar em conta o espaço entre o texto fixo e a descrição


  // Desenhar o retângulo da primeira seção de texto
  currentPage.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura1 - 20, // Ajuste de 20 unidades para espaçamento vertical
    width: 535,
    height: retanguloAltura1 + 20, // Ajuste de 20 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  // Desenhar o texto fixo da primeira seção
  currentPage.drawText("Descrição detalhada do problema", {
    x: 35,
    y: retanguloY - 15, // Ajuste de 5 unidades para o texto fixo
    size: fontSize,
    font: arialBoldFont,
    color: textColor,
  });

  linhasDescricaoProblema.forEach((linha, index) => {
    const y = retanguloY - (index * lineHeight) - 30; // Ajuste para que o texto fique dentro do retângulo
    currentPage.drawText(linha, {
      x: 35,
      y,
      size: fontSize,
      font: arialFont,
      color: textColor,
    });
  });

  retanguloY -= retanguloAltura1 + 20; // Ajuste de 20 unidades para espaçamento entre as seções

  // Verificação para adicionar uma nova página se necessário
  if (retanguloY < 30) {
    currentPage = pdfDoc.addPage(); // Adiciona uma nova página
    currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página
    retanguloY = currentPageHeight;
    
  }

  // Seção 2 - Evidências
  const retanguloAltura2 = (linhasEvidencias.length + 1) * lineHeight; // +1 para levar em conta o espaço entre o texto fixo e as evidências

  // Desenhar o retângulo da segunda seção de texto
  currentPage.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura2 - 20, // Ajuste de 20 unidades para espaçamento vertical
    width: 535,
    height: retanguloAltura2 + 20, // Ajuste de 20 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  // Desenhar o texto fixo da segunda seção
  currentPage.drawText("Evidências", {
    x: 35,
    y: retanguloY - 15, // Ajuste de 5 unidades para o texto fixo
    size: fontSize,
    font: arialBoldFont,
    color: textColor,
  });

  linhasEvidencias.forEach((linha, index) => {
    const y = retanguloY - (index * lineHeight) - 30; // Ajuste para que o texto fique dentro do retângulo
    currentPage.drawText(linha, {
      x: 35,
      y,
      size: fontSize,
      font: arialFont,
      color: textColor,
    });
  });








 // Código para "Ação de Contenção"
const textoAcaoContencao = "Descrição";
const descAcaoCorretivaText = descAcaoCorretiva || "";

// Calcule a altura necessária para a seção de ação de contenção
const linhasAcaoContencao = quebrarTextoEmLinhas(descAcaoCorretivaText, maxCaracteresPorLinha);
const retanguloAltura3 = (linhasAcaoContencao.length + 1) * lineHeight;

/*   if (retanguloY - retanguloAltura3-55 < 160) {
    currentPage = pdfDoc.addPage(); // Adiciona uma nova página
    currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página
    retanguloY = currentPageHeight;
  }  */
// Desenhar o retângulo da seção de ação de contenção
currentPage.drawRectangle({
  x: 30,
  y: retanguloY - retanguloAltura3-110,
  width: 535,
  height: retanguloAltura3 + 62, // Ajuste de 10 unidades para espaçamento vertical
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
}  );

/* if (retanguloY - retanguloAltura3 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página


  currentPage.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura3-110,
    width: 535,
    height: retanguloAltura3 + 62, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  
  
  
  }  );


} */



currentPage.drawText('Ação de contenção', {
    x: 255,
    y: retanguloY - 65, // Ajuste de 5 unidades para o texto fixo
    size: 10,
    font: arialBoldFont,
    color: textColor,
  });

// Desenhar o texto fixo da seção de ação de contenção
currentPage.drawText(textoAcaoContencao, {
  x: 35,
  y: retanguloY - 80, // Ajuste de 5 unidades para o texto fixo
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});

// Desenhar o texto variável da seção de ação de contenção
linhasAcaoContencao.forEach((linha, index) => {
  const y = retanguloY - (index * lineHeight) - 95; // Ajuste para que o texto fique dentro do retângulo
  currentPage.drawText(linha, {
    x: 35,
    y,
    size: fontSize,
    font: arialFont,
    color: textColor,
  });

    if (retanguloY - (index * lineHeight) - 30 < 180) {
    currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
    retanguloY = 1035;

    currentPage.drawRectangle({
      x: 30,
      y: retanguloY - retanguloAltura3-110,
      width: 535,
      height: retanguloAltura3 + 62, // Ajuste de 10 unidades para espaçamento vertical
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    }  );


  


  
    

/*     currentPage.drawRectangle({
      x: 30,
      y: retanguloY - retanguloAltura3,
      width: 535,
      height: retanguloAltura3 + 55, // Ajuste de 10 unidades para espaçamento vertical
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    
    
    
    }  ); */

  /*   currentPage.drawText('RNC:     '+protocolo, {
      x: 435,
      y: 807,
      size: 12, // Tamanho da fonte
      font: arialFont,
      color: rgb(0, 0, 0), // Cor do texto (branco)
    }); */
  
    


  } 

});



if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 100 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;

 
  currentPage.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura3-110,
    width: 535,
    height: retanguloAltura3 + 62, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  }  );


  currentPage.drawText('Definida por: ', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  }); 

  currentPage.drawText(definidaPor || "", {
    x: 100,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  }); 
  
  
  currentPage.drawText('Data: ', {
    x: 405,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });
  
  
  currentPage.drawText(moment(dataDefinidaPor ).format('DD/MM/YYYY') || "", {
    x: 430,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  });


} else{ currentPage.drawText('Definida por: ', {
  x: 35,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
}); 

currentPage.drawText(definidaPor || "", {
  x: 100,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
}); 


currentPage.drawText('Data: ', {
  x: 405,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});


currentPage.drawText(moment(dataDefinidaPor ).format('DD/MM/YYYY') || "", {
  x: 430,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
});
 }





/* currentPage.drawText('Definida por: ', {
  x: 35,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});  

currentPage.drawText(definidaPor || "", {
  x: 100,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
}); 


currentPage.drawText('Data: ', {
  x: 405,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});


currentPage.drawText(moment(dataDefinidaPor ).format('DD/MM/YYYY') || "", {
  x: 430,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 100, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
});
*/




if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 112 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;

 
  currentPage.drawRectangle({
    x: 30,
    y: retanguloY - retanguloAltura3-110,
    width: 535,
    height: retanguloAltura3 + 62, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  }  );



  currentPage.drawText('Será executada por: ', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  }); 
  
  currentPage.drawText(executadaPor || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  }); 
  
  
  currentPage.drawText('Data: ', {
    x: 405,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });
  
  currentPage.drawText(moment(dataExecutadaPor ).format('DD/MM/YYYY') || "", {
    x: 430,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  });
  



} else{ 

  currentPage.drawText('Será executada por: ', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  }); 
  
  currentPage.drawText(executadaPor || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  }); 
  
  
  currentPage.drawText('Data: ', {
    x: 405,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialBoldFont,
    color: textColor,
  });
  
  currentPage.drawText(moment(dataExecutadaPor ).format('DD/MM/YYYY') || "", {
    x: 430,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
    size: fontSize,
    font:   arialFont,
    color: textColor,
  });
  

 }





currentPage.drawText('Será executada por: ', {
  x: 35,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
}); 

currentPage.drawText(executadaPor || "", {
  x: 130,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
}); 


currentPage.drawText('Data: ', {
  x: 405,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
  size: fontSize,
  font:   arialBoldFont,
  color: textColor,
});

currentPage.drawText(moment(dataExecutadaPor ).format('DD/MM/YYYY') || "", {
  x: 430,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 112, // Ajuste a posição vertical
  size: fontSize,
  font:   arialFont,
  color: textColor,
});




if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 140 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
 

  currentPage.drawText('Equipe de Análise', {
    x: 255, // Mantenha o valor X consistente com os elementos anteriores
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 140, // Ajuste a posição vertical para alinhar abaixo dos elementos anteriores
    size: 10,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });


} else{ 

  currentPage.drawText('Equipe de Análise', {
    x: 255, // Mantenha o valor X consistente com os elementos anteriores
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 140, // Ajuste a posição vertical para alinhar abaixo dos elementos anteriores
    size: 10,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

 }





 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 230 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  
 currentPage.drawRectangle({
    x: 30,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 230,
    width: 268,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

   currentPage.drawRectangle({
    x: 298,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 230,
    width: 267,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

} else{ 

 currentPage.drawRectangle({
    x: 30,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 230,
    width: 268,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

   currentPage.drawRectangle({
    x: 298,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 230,
    width: 267,
    height: 80,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

 }





if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 163 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  
  currentPage.drawText('Participantes ', {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 163,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText('Setor ', {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 163,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

} else{ 

  currentPage.drawText('Participantes ', {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 163,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText('Setor ', {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 163,
    size: 9, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 177 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  
  currentPage.drawText(participante1 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 177,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor1 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 177,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

} else{ 
  currentPage.drawText(participante1 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 177,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor1 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 177,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


 }


 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 188 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
 
  currentPage.drawText(participante2 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 188,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor2 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 188,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

} else{ 

  currentPage.drawText(participante2 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 188,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor2 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 188,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }


 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 199 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */

  retanguloY = 1035;
  currentPage.drawText(participante3 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 199,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor3 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 199,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


} else{ 

  currentPage.drawText(participante3 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 199,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor3 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 199,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }

 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 210 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  

    currentPage.drawText(participante4 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 210,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor4 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 210,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


} else{ 

    currentPage.drawText(participante4 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 210,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor4 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 210,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


 }


 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 221 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */

  retanguloY = 1035;
  currentPage.drawText(participante5 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 221,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor5 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 221,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


} else{ 

  currentPage.drawText(participante5 || "", {
    x: 130,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 221,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

    currentPage.drawText(setor5 || "", {
    x: 420,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 221,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 250 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  

  currentPage.drawText('Diagrama de Ishikawa', {
    x: 255,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 250,
    size: 10, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

} else{ 

  currentPage.drawText('Diagrama de Ishikawa', {
    x: 255,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 250,
    size: 10, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  
if (checkMateriaPrima ) {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0,0,0), 
  });
} else {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Matéria-prima', {
  x: 190,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (checkMaquina ) {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Máquina', {
  x: 282,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (checkMaoDeObra ) {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Mão de obra', {
  x: 362,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


} else{ 

  if (checkMateriaPrima ) {
    currentPage.drawRectangle({
      x: 180,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(0,0,0), 
    });
  } else {
    currentPage.drawRectangle({
      x: 180,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(1,1,1), 
    });
  }
  
  currentPage.drawText('Matéria-prima', {
    x: 190,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  
  if (checkMaquina ) {
    currentPage.drawRectangle({
      x: 272,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(0, 0, 0), 
    });
  } else {
    currentPage.drawRectangle({
      x: 272,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(1,1,1), 
    });
  }
  
  currentPage.drawText('Máquina', {
    x: 282,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  
  if (checkMaoDeObra ) {
    currentPage.drawRectangle({
      x: 352,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(0, 0, 0), 
    });
  } else {
    currentPage.drawRectangle({
      x: 352,
      y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275,
      width: 8,
      height: 8,
      borderColor: rgb(0, 0, 0), // Cor da borda (preto)
      borderWidth: 1, // Largura da borda
      color: rgb(1,1,1), 
    });
  }
  
  currentPage.drawText('Mão de obra', {
    x: 362,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 274,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 295 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */

  retanguloY = 1035;

currentPage.drawLine({start: { x: 170, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295 },
  end: { x: 420, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
  thickness: 1,
  color: rgb(0, 0, 0),
  opacity: 0.75,})

} else{ 

currentPage.drawLine({start: { x: 170, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295 },
  end: { x: 420, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
  thickness: 1,
  color: rgb(0, 0, 0),
  opacity: 0.75,})

 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 295  < 180 || retanguloY - (linhasAcaoContencao.length * lineHeight) - 275  < 180 || retanguloY - (linhasAcaoContencao.length * lineHeight) - 315  < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  

// diagonal 1
  currentPage.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
    end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

  // diagonal 2
  currentPage.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
    end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 3
  currentPage.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
    end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

 
    // diagonal 4
  currentPage.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
    end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 5
  currentPage.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
    end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

    // diagonal 6
  currentPage.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
    end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})

} else{ 

// diagonal 1
currentPage.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})

// diagonal 2
currentPage.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})

// diagonal 3
currentPage.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 275 },
end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})


// diagonal 4
currentPage.drawLine({start: { x: 188, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
end: { x: 200, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})

// diagonal 5
currentPage.drawLine({start: { x: 280, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
end: { x: 292, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})

// diagonal 6
currentPage.drawLine({start: { x: 360, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 315 },
end: { x: 372, y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 295},
thickness: 1,
color: rgb(0, 0, 0),
opacity: 0.55,})


 }

if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 325 < 180 || retanguloY - (linhasAcaoContencao.length * lineHeight) - 324 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  

// linha 12 A

if (checkMedicao ) {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Medição', {
  x: 190,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (checkMetodo ) {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Método', {
  x: 282,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 

if (checkMeioAmbiente) {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Meio ambiente', {
  x: 362,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); 

} else{ 

// linha 12 A

if (checkMedicao ) {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 180,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Medição', {
  x: 190,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (checkMetodo ) {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 272,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Método', {
  x: 282,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 

if (checkMeioAmbiente) {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(0, 0, 0), 
  });
} else {
  currentPage.drawRectangle({
    x: 352,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 325,
    width: 8,
    height: 8,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
}

currentPage.drawText('Meio ambiente', {
  x: 362,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 324,
  size: 9, // Tamanho da fonte
  font:   arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); 

 }


 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 355 - 10 < 180 || retanguloY - (linhasAcaoContencao.length * lineHeight) - 345 - 10 < 180 || retanguloY - (linhasAcaoContencao.length * lineHeight) - 340 - 10 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;

const retanguloYDescricaoProblema = retanguloY - (linhasAcaoContencao.length * lineHeight) - 345 - 10;
currentPage.drawRectangle({
  x: 30,
  y: retanguloYDescricaoProblema - retanguloAltura1, // Ajuste a posição vertical
  width: 535,
  height: retanguloAltura1 + 20, // Ajuste de 10 unidades para espaçamento vertical
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
});

currentPage.drawText('Efeito:', {
  x: 35,
  y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 340 - 10,
  size: 9, // Tamanho da fonte
  font: arialBoldFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


const inicioDescricaoProblemaY = retanguloY - (linhasAcaoContencao.length * lineHeight) - 355 - 10; // Ajuste para o texto fique dentro do retângulo
linhasDescricaoProblema.forEach((linha, index) => {
  const y = inicioDescricaoProblemaY - (index * lineHeight); // Ajuste para que o texto fique dentro do retângulo
  currentPage.drawText(linha, {
    x: 35,
    y,
    size: fontSize,
    font:   arialFont,
    color: textColor,
  });
});

} else{ 

  const retanguloYDescricaoProblema = retanguloY - (linhasAcaoContencao.length * lineHeight) - 345 - 10;
  currentPage.drawRectangle({
    x: 30,
    y: retanguloYDescricaoProblema - retanguloAltura1, // Ajuste a posição vertical
    width: 535,
    height: retanguloAltura1 + 20, // Ajuste de 10 unidades para espaçamento vertical
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  currentPage.drawText('Efeito:', {
    x: 35,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 340 - 10,
    size: 9, // Tamanho da fonte
    font: arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  const inicioDescricaoProblemaY = retanguloY - (linhasAcaoContencao.length * lineHeight) - 355 - 10; // Ajuste para o texto fique dentro do retângulo
  linhasDescricaoProblema.forEach((linha, index) => {
    const y = inicioDescricaoProblemaY - (index * lineHeight); // Ajuste para que o texto fique dentro do retângulo
    currentPage.drawText(linha, {
      x: 35,
      y,
      size: fontSize,
      font:   arialFont,
      color: textColor,
    });
  });

 }



 if (  retanguloY - (linhasAcaoContencao.length * lineHeight) - 440 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1135;
  
  
  let yPosition = retanguloY - (linhasAcaoContencao.length * lineHeight) - 440;

  if (checkMateriaPrima) {
    currentPage.drawText('Matéria-prima:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(materiaPrima || "", {
      x: 100,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMaquina) {
    currentPage.drawText('Máquina:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(maquina || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMaoDeObra) {
    currentPage.drawText('Mão de obra:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(maoDeObra || "", {
      x: 90,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMedicao) {
    currentPage.drawText('Medição:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(medicao || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMetodo) {
    currentPage.drawText('Método:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(metodo || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMeioAmbiente) {
    currentPage.drawText('Meio Ambiente:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(meioAmbiente || "", {
      x: 100,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
  }

} else{ 

  let yPosition = retanguloY - (linhasAcaoContencao.length * lineHeight) - 440;

  if (checkMateriaPrima) {
    currentPage.drawText('Matéria-prima:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(materiaPrima || "", {
      x: 100,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMaquina) {
    currentPage.drawText('Máquina:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(maquina || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMaoDeObra) {
    currentPage.drawText('Mão de obra:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(maoDeObra || "", {
      x: 90,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMedicao) {
    currentPage.drawText('Medição:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(medicao || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMetodo) {
    currentPage.drawText('Método:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(metodo || "", {
      x: 70,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPosition -= 13;
  }
  
  if (checkMeioAmbiente) {
    currentPage.drawText('Meio Ambiente:', {
      x: 35,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    currentPage.drawText(meioAmbiente || "", {
      x: 100,
      y: yPosition,
      size: 9,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
  }
 }



 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 530 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
 

  currentPage.drawText('Cinco Porquês', {
    x: 271,
    y:retanguloY - (linhasAcaoContencao.length * lineHeight) - 530,
    size: 10, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
 
} else{ 

  currentPage.drawText('Cinco Porquês', {
    x: 267,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 530,
    size: 10, // Tamanho da fonte
    font:   arialBoldFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }

 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 545 < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;
  

  currentPage.drawText(' Porque o Problema ocorreu?', {
    x: 240,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 545,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });


} else{ 

  currentPage.drawText(' Porque o Problema ocorreu?', {
    x: 240,
    y: retanguloY - (linhasAcaoContencao.length * lineHeight) - 545,
    size: 9, // Tamanho da fonte
    font:   arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

 }









 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 575  < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  retanguloY = 1035;

  
  let yPositionPorque = retanguloY - (linhasAcaoContencao.length * lineHeight) - 575;


  if (porque1 !== "") {
    const maxCharactersPerLine = 105;
    const lines = splitTextIntoLines(porque1 || "", maxCharactersPerLine);
  
    const textHeight = lines.length * (fontSize + 2);
  
    currentPage.drawRectangle({
      x: 30,
      y: yPositionPorque - textHeight - 50,
      width: 535,
      height: textHeight + 60,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    });
  
    currentPage.drawText('1° Porquê:', {
      x: 35,
      y: yPositionPorque-10 ,
      size: 9,
      font: arialBoldFont,
      color: rgb(0, 0, 0),
    });
  
   // let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
    for (const line of lines) {
      currentPage.drawText(line || "", {
        x: 85,
        y: yPositionPorque-10,
        size: fontSize,
        font: arialFont,
        color: rgb(0, 0, 0),
      });
      yPositionPorque -= fontSize + 4;
    }
  }
  
  // Para o 2° Porquê (porque2)
  if (porque2 !== "") {
    const maxCharactersPerLine = 105;
    const lines2 = splitTextIntoLines(porque2 || "", maxCharactersPerLine);
  
    const textHeight = lines2.length * (fontSize + 2);
  
    currentPage.drawRectangle({
      x: 30,
      y: yPositionPorque - textHeight - 80,
      width: 535,
      height: textHeight + 60,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    });
  
    currentPage.drawText('2° Porquê:', {
      x: 35,
      y: yPositionPorque-40 ,
      size: 9,
      font: arialBoldFont,
      color: rgb(0, 0, 0),
    });
  
    //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
    for (const line of lines2) {
      currentPage.drawText(line || "", {
        x: 85,
        y: yPositionPorque-40,
        size: fontSize,
        font: arialFont,
        color: rgb(0, 0, 0),
      });
      yPositionPorque -=  fontSize + 4;
    }
  }
  
  if (porque3 !== "") {
    const maxCharactersPerLine = 105;
    const lines = splitTextIntoLines(porque3 || "", maxCharactersPerLine);
  
    const textHeight = lines.length * (fontSize + 2);
  
    currentPage.drawRectangle({
      x: 30,
      y: yPositionPorque - textHeight - 80,
      width: 535,
      height: textHeight + 20,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    });
  
    currentPage.drawText('3° Porquê:', {
      x: 35,
      y: yPositionPorque - 80,
      size: 9,
      font: arialBoldFont,
      color: rgb(0, 0, 0),
    });
  
    //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
    for (const line of lines) {
      currentPage.drawText(line || "", {
        x: 85,
        y: yPositionPorque-80,
        size: fontSize,
        font: arialFont,
        color: rgb(0, 0, 0),
      });
      yPositionPorque -= fontSize + 4;
    }
  }
  
  
   if (porque4 !== "") {
    const maxCharactersPerLine = 105;
    const lines = splitTextIntoLines(porque4 || "", maxCharactersPerLine);
  
    const textHeight = lines.length * (fontSize + 2);
  
    currentPage.drawRectangle({
      x: 30,
      y: yPositionPorque - textHeight - 90,
      width: 535,
      height: textHeight + 20,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    });
  
    currentPage.drawText('4° Porquê:', {
      x: 35,
      y: yPositionPorque - 90,
      size: 9,
      font: arialBoldFont,
      color: rgb(0, 0, 0),
    });
  
    //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
    for (const line of lines) {
      currentPage.drawText(line || "", {
        x: 85,
        y: yPositionPorque-90,
        size: fontSize,
        font: arialFont,
        color: rgb(0, 0, 0),
      });
      yPositionPorque -= fontSize + 4;
    }
  }
  
  
  if (porque5 !== "") {
    const maxCharactersPerLine = 105;
    const lines = splitTextIntoLines(porque5 || "", maxCharactersPerLine);
  
    const textHeight = lines.length * (fontSize + 2);
  
    currentPage.drawRectangle({
      x: 30,
      y: yPositionPorque - textHeight - 100,
      width: 535,
      height: textHeight + 20,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
      color: rgb(1, 1, 1),
    });
  
    currentPage.drawText('5° Porquê:', {
      x: 35,
      y: yPositionPorque - 100,
      size: 9,
      font: arialBoldFont,
      color: rgb(0, 0, 0),
    });
  
    //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
    for (const line of lines) {
      currentPage.drawText(line || "", {
        x: 85,
        y: yPositionPorque-100,
        size: fontSize,
        font: arialFont,
        color: rgb(0, 0, 0),
      });
      yPositionPorque -= fontSize + 4;
    }
  } 




/* yPositionPorque -= 60; // Adjust this value as needed

const maxCharactersPerLine = 120;
const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);

const textHeight = lines.length * (fontSize + 2);

currentPage.drawRectangle({
  x: 30,
  y: yPositionPorque - textHeight - 80,
  width: 535,
  height: textHeight + 40, // You may need to adjust this height
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
});

currentPage.drawText('Descrição da causa raiz identificada:', {
  x: 35,
  y: yPositionPorque - 57,
  size: 9,
  font: arialBoldFont,
  color: rgb(0, 0, 0),
});

for (const line of lines) {
  currentPage.drawText(line || "", {
    x: 35,
    y: yPositionPorque - 70, // Adjust this value as needed
    size: fontSize,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
  yPositionPorque -= fontSize + 4;
} */


} else{ 

  let yPositionPorque = retanguloY - (linhasAcaoContencao.length * lineHeight) - 575;




if (porque1 !== "") {
  const maxCharactersPerLine = 105;
  const lines = splitTextIntoLines(porque1 || "", maxCharactersPerLine);

  const textHeight = lines.length * (fontSize + 2);

  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 50,
    width: 535,
    height: textHeight + 60,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  currentPage.drawText('1° Porquê:', {
    x: 35,
    y: yPositionPorque-10 ,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

 // let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 85,
      y: yPositionPorque-10,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
}

// Para o 2° Porquê (porque2)
if (porque2 !== "") {
  const maxCharactersPerLine = 105;
  const lines2 = splitTextIntoLines(porque2 || "", maxCharactersPerLine);

  const textHeight = lines2.length * (fontSize + 2);

  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 80,
    width: 535,
    height: textHeight + 60,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  currentPage.drawText('2° Porquê:', {
    x: 35,
    y: yPositionPorque-40 ,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

  //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
  for (const line of lines2) {
    currentPage.drawText(line || "", {
      x: 85,
      y: yPositionPorque-40,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -=  fontSize + 4;
  }
}

if (porque3 !== "") {
  const maxCharactersPerLine = 105;
  const lines = splitTextIntoLines(porque3 || "", maxCharactersPerLine);

  const textHeight = lines.length * (fontSize + 2);

  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 80,
    width: 535,
    height: textHeight + 20,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  currentPage.drawText('3° Porquê:', {
    x: 35,
    y: yPositionPorque - 80,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

  //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 85,
      y: yPositionPorque-80,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
}


 if (porque4 !== "") {
  const maxCharactersPerLine = 105;
  const lines = splitTextIntoLines(porque4 || "", maxCharactersPerLine);

  const textHeight = lines.length * (fontSize + 2);

  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 90,
    width: 535,
    height: textHeight + 20,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  currentPage.drawText('4° Porquê:', {
    x: 35,
    y: yPositionPorque - 90,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

  //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 85,
      y: yPositionPorque-90,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
}


if (porque5 !== "") {
  const maxCharactersPerLine = 105;
  const lines = splitTextIntoLines(porque5 || "", maxCharactersPerLine);

  const textHeight = lines.length * (fontSize + 2);

  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 100,
    width: 535,
    height: textHeight + 20,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  currentPage.drawText('5° Porquê:', {
    x: 35,
    y: yPositionPorque - 100,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });

  //let yPositionPorque = height - 50 - 20; // Inicie na parte inferior do retângulo
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 85,
      y: yPositionPorque-100,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
} 



/* yPositionPorque -= 60; // Adjust this value as needed

const maxCharactersPerLine = 120;
const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);

const textHeight = lines.length * (fontSize + 2);

currentPage.drawRectangle({
  x: 30,
  y: yPositionPorque - textHeight - 80,
  width: 535,
  height: textHeight + 40, // You may need to adjust this height
  borderColor: rgb(0, 0, 0),
  borderWidth: 1,
  color: rgb(1, 1, 1),
});

currentPage.drawText('Descrição da causa raiz identificada:', {
  x: 35,
  y: yPositionPorque - 57,
  size: 9,
  font: arialBoldFont,
  color: rgb(0, 0, 0),
});

for (const line of lines) {
  currentPage.drawText(line || "", {
    x: 35,
    y: yPositionPorque - 70, // Adjust this value as needed
    size: fontSize,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
  yPositionPorque -= fontSize + 4;
} */

if ( yPositionPorque - 130  < 180) {
  currentPage = pdfDoc.addPage(); // Adiciona uma nova página
/*     currentPageHeight = currentPage.getHeight(); // Reinicializa a altura da nova página */
  //retanguloY = 335;

   
  
  yPositionPorque -= -480; // Adjust this value as needed

  const maxCharactersPerLine = 120;
  const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);
  
  const textHeight = lines.length * (fontSize + 2);
   
  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 80,
    width: 535,
    height: textHeight + 40, // You may need to adjust this height
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  currentPage.drawText('Descrição da causa raiz identificada:', {
    x: 35,
    y: yPositionPorque - 57,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });
  
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 35,
      y: yPositionPorque - 70, // Adjust this value as needed
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
  
 
} else{ 

  yPositionPorque -= 60; // Adjust this value as needed

  const maxCharactersPerLine = 120;
  const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);
  
  const textHeight = lines.length * (fontSize + 2);
  
  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 80,
    width: 535,
    height: textHeight + 40, // You may need to adjust this height
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  currentPage.drawText('Descrição da causa raiz identificada:', {
    x: 35,
    y: yPositionPorque - 57,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });
  
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 35,
      y: yPositionPorque - 70, // Adjust this value as needed
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }
 }


 }



/* 
 if ( retanguloY - (linhasAcaoContencao.length * lineHeight) - 400 -130 < 180  ) {
  currentPage = pdfDoc.addPage();  // Adiciona uma nova página

  retanguloY = 1035;


  let yPositionPorque = retanguloY - (linhasAcaoContencao.length * lineHeight) - 300 ;

  const maxCharactersPerLine = 120;
  const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);
  
  const textHeight = lines.length * (fontSize + 2);
  
  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 140,
    width: 535,
    height: textHeight + 40,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  currentPage.drawText('Descrição da causa raiz identificada', {
    x: 35,
    y: yPositionPorque - 115,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });
  

  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 35,
      y: yPositionPorque-130,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }





} else{ 

  let yPositionPorque = retanguloY - (linhasAcaoContencao.length * lineHeight) - 730;

  const maxCharactersPerLine = 120;
  const lines = splitTextIntoLines(descCausaIdentificada || "", maxCharactersPerLine);
  
  const textHeight = lines.length * (fontSize + 2);
  
  currentPage.drawRectangle({
    x: 30,
    y: yPositionPorque - textHeight - 140,
    width: 535,
    height: textHeight + 40,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });
  
  currentPage.drawText('Descrição da causa raiz identificada', {
    x: 35,
    y: yPositionPorque - 115,
    size: 9,
    font: arialBoldFont,
    color: rgb(0, 0, 0),
  });
  
 
  for (const line of lines) {
    currentPage.drawText(line || "", {
      x: 35,
      y: yPositionPorque-130,
      size: fontSize,
      font: arialFont,
      color: rgb(0, 0, 0),
    });
    yPositionPorque -= fontSize + 4;
  }

 } */


//



  

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "gdf.pdf", "application/pdf");

};
 


 
function splitTextIntoLines(text, maxLength) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if (currentLine.length + word.length <= maxLength) {
      currentLine += (currentLine.length > 0 ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}


async function CabecalhoERodape() { 
 
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const arialBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

 // const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

   const page = pdfDoc.addPage() 
  const page2 = pdfDoc.addPage()


  

  var n = 0;
  var i = 1;

  

  const { width, height } = page.getSize()
  const { width2, height2 } = page2.getSize()
  const fontSize = 20
  const fontSizeTitulo = 28

      var n = 0;
      var n2 = 0;
      var i=1
      const totalAcoes = acoes.length;
      const totalVerifica = verificaEficacia.length;

      let pageCount = 1;
      


// CABEÇALHO


        // LOGO GEOCONTROLE
const imageUrl = 'data:image/png;base64,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';
const imageBytes = await fetch(imageUrl).then(response => response.arrayBuffer());



// Inserir a imagem na posição desejada
const image = await pdfDoc.embedPng(imageBytes);
const imageDims = image.scale(0.2); // Ajuste o fator de escala conforme necessário

const xPosition = 27; // Ajuste a posição X da imagem
const yPosition = 795; // Ajuste a posição Y da imagem



page.drawImage(image, {
    x: xPosition,
    y: yPosition,
    width: imageDims.width,
    height: imageDims.height,
});



const imageUrl2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArMAAABACAIAAACGHGjSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowODozMSAxMzoxMDo0Ob1mDjYAAAEtSURBVHhe7d3BCQJBEEXBXVMxHg3WjcdYWpCR50XwKlZd5ofw6MvsM7MBADyd1gsAoAwAgHfKAACIMgAAogwAgCgDACDKAACIMgAAogwAgCgDACDKAACIMgAA8tWPSufbZS0A4Gfdr8dan7kZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAkH1m1gQA/p6bAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAAvGzbA0nODHURHqEnAAAAAElFTkSuQmCC';
const imageBytes2 = await fetch(imageUrl2).then(response => response.arrayBuffer());

// Inserir a imagem na posição desejada
const image2 = await pdfDoc.embedPng(imageBytes2);
const imageDims2 = image2.scale(0.5); // Ajuste o fator de escala conforme necessário

const xPosition2 = 369; // Ajuste a posição X da imagem
const yPosition2 = 792; // Ajuste a posição Y da imagem

page.drawImage(image2, {
    x: xPosition2,
    y: yPosition2,
    width: 200,
    height: 35,
});

page.drawText('RNC:     '+protocolo, {
  x: 435,
  y: 807,
  size: 12, // Tamanho da fonte
  font: arialFont,
  color: rgb(1, 1, 1), // Cor do texto (branco)
});

page.drawRectangle({
  x: 30,
  y: 675,
  width: 535,
  height: 120,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), // Cor de preenchimento (verde) -->(34,139,34)
});




page.drawRectangle({
  x: 30,
  y: 765,
  width: 425,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('RELATÓRIO:', {
  x: 32,
  y: 784,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('NÃO CONFORMIDADE - SGI', {
  x: 185,
  y: 774,
  size: 12, // Tamanho da fonte
  font: arialBoldFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //CODIGO
 page.drawRectangle({
  x: 455,
  y: 765,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('PG-SG-006-01', {
  x: 480,
  y: 775,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //ORIGEM
 page.drawRectangle({
  x: 30,
  y: 705,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('ORIGEM:', {
  x: 32,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



if (origem === 'Outros') {
  page.drawText(descrever, {
    x: 62,
    y: 710,
    size: 9,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
} else {
  page.drawText(origem, {
    x: 62,
    y: 710,
    size: 9,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
}



 //CLIENTE
 page.drawRectangle({
  x: 170,
  y: 735,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('CLIENTE:', {
  x: 172,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(cliente, {
  x: 222,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //SETOR QUE IDENTIFICOU A NC
 page.drawRectangle({
  x: 310,
  y: 735,
  width: 145,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('SETOR QUE IDENTIFICOU A NC:', {
  x: 312,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(setorIdentificou, {
  x: 352,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 //RESPONSAVEL1
 page.drawRectangle({
  x: 455,
  y: 735,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('RESPONSÁVEL:', {
  x: 457,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(responsavel1, {
  x: 470,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //SETOR DE ORIGEM DA NC
 page.drawRectangle({
  x: 310,
  y: 705,
  width: 145,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('SETOR DE ORIGEM DA NC:', {
  x: 312,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(setorOrigem, {
  x: 352,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //RESPONSAVEL2
 page.drawRectangle({
  x: 455,
  y: 705,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('RESPONSÁVEL:', {
  x: 457,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(responsavel2, {
  x: 470,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //DATA DA ABERTURA
 page.drawRectangle({
  x: 30,
  y: 735,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('DATA DE ABERTURA:', {
  x: 32,
  y: 754,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(dataAtual).format('DD/MM/YYYY'), {
  x: 62,
  y: 740,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //DOCUMENTO DO CLIENTE
 page.drawRectangle({
  x: 170,
  y: 705,
  width: 140,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('DOCUMENTO DO CLIENTE:', {
  x: 172,
  y: 724,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(documentoDoCliente, {
  x: 222,
  y: 710,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


 //REINCIDENTE?
 page.drawRectangle({
  x: 455,
  y: 675,
  width: 110,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('É REINCIDENTE?', {
  x: 457,
  y: 694,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
page.drawText(reincidente, {
  x: 500,
  y: 680,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



 //DESCRIÇÃO

 page.drawRectangle({
  x: 30,
  y: 675,
  width: 425,
  height: 30,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('DESCRIÇÃO:', {
  x: 32,
  y: 694,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});





//777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

//


 





//RODAPÉ

page.drawRectangle({
  x: 30,
  y: 110,
  width: 535,
  height: 25,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('OBSERVAÇÃO:', {
  x: 32,
  y: 125,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



page.drawRectangle({
  x: 30,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('ABERTURA', {
  x: 95,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 32,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* page.drawText(responsavel1 || "", {
  x: 91,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

if (assinaturaAbertura && assinaturaAbertura.trim() !== '') {
  const imageUrl4 = assinaturaAbertura;
  const imageBytes4 = await fetch(imageUrl4).then(response => response.arrayBuffer());

  // Inserir a imagem na posição desejada
  const image4 = await pdfDoc.embedPng(imageBytes4);
  const imageDims4 = image4.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims4.width;
  const scaleY = rectHeight / imageDims4.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims4.width * scale;
  const scaledHeight = imageDims4.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
  const xPosition4 = 70 + (rectWidth - scaledWidth) / 2;
  const yPosition4 = 78 + (rectHeight - scaledHeight) / 2;

  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image4, {
    x: xPosition4,
    y: yPosition4,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  })
};


page.drawText('Data:', {
  x: 32,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(dataAtual).format('DD/MM/YYYY') || "", {
  x: 58,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


//88888888888888888888888888888

page.drawRectangle({
  x: 208,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('EXECUÇÃO', {
  x: 275,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 210,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

/* page.drawText(executadaPor || "", {
  x: 268,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
}); */

page.drawText('Data:', {
  x: 210,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

 page.drawText(moment(dataExecutadaPor).format('DD/MM/YYYY') || "", {
  x: 235,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});
 


if (assinaturaExecucao && assinaturaExecucao.trim() !== '') {
  const imageUrl5 = assinaturaExecucao;
  const imageBytes5 = await fetch(imageUrl5).then(response => response.arrayBuffer());

  // Inserir a imagem na posição desejada
  const image5 = await pdfDoc.embedPng(imageBytes5);
  const imageDims5 = image5.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims5.width;
  const scaleY = rectHeight / imageDims5.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims5.width * scale;
  const scaledHeight = imageDims5.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
   const xPosition5 = 248 + (rectWidth - scaledWidth) / 2;
  const yPosition5 = 78 + (rectHeight - scaledHeight) / 2; 


  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image5, {
    x: xPosition5,
    y: yPosition5,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  })
};

//8888888888888888888888888888888888
page.drawRectangle({
  x: 386,
  y: 68,
  width: 179,
  height: 42,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});

page.drawText('ENCERRAMENTO', {
  x: 436,
  y: 100,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText('Responsável:', {
  x: 388,
  y: 85,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




if (assinaturaEncerramento && assinaturaEncerramento.trim() !== '') {
  const imageUrl3 = assinaturaEncerramento;
  const imageBytes3 = await fetch(imageUrl3).then(response => response.arrayBuffer());

  

  // Inserir a imagem na posição desejada
  const image3 = await pdfDoc.embedPng(imageBytes3);
  const imageDims3 = image3.scale(0.1); // Ajuste o fator de escala conforme necessário 

  const rectWidth = 120; // Largura do retângulo
  const rectHeight = 20; // Altura do retângulo

  // Calcule a proporção de escala
  const scaleX = rectWidth / imageDims3.width;
  const scaleY = rectHeight / imageDims3.height;

  // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
  const scale = Math.min(scaleX, scaleY);

  // Calcule a largura e altura da imagem após o dimensionamento
  const scaledWidth = imageDims3.width * scale;
  const scaledHeight = imageDims3.height * scale;

  // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
 
  const xPosition3 = 428 + (rectWidth - scaledWidth) / 2; 
  const yPosition3 = 78 + (rectHeight - scaledHeight) / 2;

  // Desenhe a imagem no PDF apenas se houver uma imagem válida
  page.drawImage(image3, {
    x: xPosition3,
    y: yPosition3,
    width: scaledWidth,
    height: scaledHeight,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

}

 
//assinaturaEncerramento

page.drawText('Data:', {
  x: 388,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});

page.drawText(moment(encerraData).format('DD/MM/YYYY') || "", {
  x: 415,
  y: 72,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});



/* page.drawRectangle({
  x: 30,
  y: 67,
  width: 535,
  height: 13,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 */

page.drawText('Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole ', {
  x: 58,
  y: 57,
  size: 10, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});




page.drawImage(image2, {
  x: 20,
  y: 5,
  width: 556,
  height: 40,
});
page.drawText('www.geocontrole.com - e-mail: mail.br@geocontrole.com ', {
  x: 145,
  y: 24,
  size: 12, // Tamanho da fonte
  font: arialFont,
  color: rgb(1, 1, 1), // Cor do texto (branco)
});

page.drawText('Av.Canadá,Nº 159 - Jardim Canadá - Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011 ', {
  x: 45,
  y: 42,
  size: 10, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), // Cor do texto (branco)
});


/* page.drawText(` ${pageCount}`, {
  x: 530, // Ajuste as coordenadas conforme necessário
  y: 7,  // Ajuste as coordenadas conforme necessário
  size: 9,
  font: arialFont,
  color: rgb(0, 0, 0),
});
 */

/* for (const pdfPage of pdfDoc.getPages()) {
  pdfPage.drawText(`Página ${pageCount}`, {
    x: 525, // Ajuste as coordenadas conforme necessário
    y: 5,  // Ajuste as coordenadas conforme necessário
    size: 9,
    font: arialFont,
    color: rgb(0, 0, 0),
  });
  pageCount++;
}
 */


page.drawText(`Página ${pageCount}`, {
  x: 530, // Ajuste as coordenadas conforme necessário
  y: 5,  // Ajuste as coordenadas conforme necessário
  size: 9,
  font: arialFont,
  color: rgb(0, 0, 0),
});

pageCount++;




//
  
 
 /*  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, "sgi.pdf", "application/pdf"); 
console.log(pdfBytes)*/
}

 


    return <body onLoad={ (e) => handleSelectChange(e) & getSetor(e)  } > 
    <br/>  
     
    <Navbar />
    <div className='titulolaboratorio container-fluid'>
       <h1 className='texttitulo'>TRATAMENTO DE NÃO CONFORMIDADE-RNC</h1>
    </div>    
    <br/><br/> 

    <div className="  row d-flex justify-content-center  align-items-center p-1 mt-2" > 
           <div class="col-auto  ">
                <h4    >RNC</h4>   
            </div>
            <div class="col-2  ">
                <input placeholder='Digite o número do protocolo' onChange={(e) => setProtocolo(e.target.value) & Limpar()} value={protocolo} class="form-control w-100 text-center colorInput"  ></input>     
            </div>                  
            <div class="col-auto ">
                 <button    class="btnlogin " onClick={(e) => getItem(e) & BuscarAcoes(e) & BuscarVerificaEficacia(e) & getSetor(e) } >BUSCAR</button>           
            </div>
     </div> 
    
     <br/>

{/*      <div className="  row d-flex justify-content-center  align-items-center p-1 " > 
           <p>..................................................mudar layout conforme a abertura e retirar os dropdown</p>
           <div class="col-2 text-center ">
                <h5  >Setor de origem</h5>   
            </div>                         
            <div class="col-2 ">
            <select disabled={isDisabled} name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setOrigemSetor(e.target.value)}  value={origemSetor} >                      
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
     </div>  */}

     <body class="container text-center mt-2 ">
 <div class="col  align-items-center justify-content-center p-2 ">
    <div class="row d-flex align-items-center justify-content-center ">

    <div class="col-2">
          <h6>Origem</h6>          
          <select disabled={isDisabled || bloqueado} name='Origem' id='Origem' className=' form-select align-items-center text-start colorInput ' onChange={(e) => setOrigem(e.target.value)} onClick={handleSelectChange}  value={origem} >                      
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
        <input className='form-control text-center colorInput ' onChange={(e) => setCliente(e.target.value)} value={cliente} disabled={isDisabled || bloqueado}></input>
      </div>

      <div class="col-3">
        <h6>Setor que identificou a NC</h6>
        <select className='form-select align-items-center text-start colorInput ' onChange={(e) => setSetorIdentificou(e.target.value)} value={setorIdentificou} disabled={isDisabled || bloqueado}>
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

        <select
  className='form-select align-items-center text-start colorInput'
  onChange={(e) => {LimpaResponsavel() ;
    setSetorOrigem(e.target.value,getResponsavel );
     // Chamada da função getResponsavel()
  }}
  value={setorOrigem}
  disabled={isDisabled || bloqueado}
>
  <option selected value="...">Selecione...</option>
  <option value="QSSMA">QSSMA</option>
  <option value="RH">RH</option>
  <option value="Geotecnia">Geotecnia</option>
  <option value="Comercial">Comercial</option>
  <option value="Laboratório">Laboratório</option>
  <option value="Manutenção">Manutenção</option>
  <option value="Pesquisa e Mineral">Pesquisa e Mineral</option>
  <option value="Compras">Compras</option>
  <option value="Diretoria">Diretoria</option> 
</select>
      </div>


      <div class="col-2">
          <h6>Data abertura NC</h6>          
          <input type='date' className=' form-control align-items-center text-start colorInput ' disabled={isDisabled || bloqueado} onChange={(e) => setDataAtual(e.target.value)} value={dataAtual} > 
  
          </input>
        </div>



    </div>
 </div>
</body>
<br/>

{showInput === true ? 
    <div class="row d-flex  text-center align-items-center  ">  
    <div class="col-1 offset-1 me-1 "></div>    
      
      <div class="col-3  ">
        <h6>Descrição</h6>
        <textarea disabled={isDisabled || bloqueado} cols={25} rows={3} className='form-control colorInput  resize ' onChange={(e) => setDescrever(e.target.value)} value={descrever} ></textarea>
      </div>     
    </div>
  : null} 

<body class="container text-center  ">
 <div class="col  align-items-center justify-content-center p-2 ">
    <div class="row d-flex align-items-center justify-content-center ">    

    <div class="col-2">
          <h6>É Reincidente?</h6>          
          <select  className=' form-select align-items-center text-center colorInput '  onChange={(e) => setReincidente(e.target.value)} value={reincidente} disabled={isDisabled || bloqueado} > 
             <option selected value="...">Selecione...</option>                      
             <option value="sim">Sim</option>
             <option value="nao">Não</option>
          </select>
        </div>

      <div class="col-2 ">
        <h6>Documento do cliente</h6>
        <input className='form-control text-center colorInput ' onChange={(e) => setDocumentoDoCliente(e.target.value)} value={documentoDoCliente} disabled={isDisabled || bloqueado}></input>
      </div>

{/*       <div class="col-3">
        <h6>Responsável</h6>
        <select disabled={isDisabled || bloqueado} className=' form-select align-items-center text-start colorInput '  onChange={(e) => setResponsavel1(e.target.value)} value={responsavel1} > 
             <option selected value="...">Selecione...</option>  
             
             {  nomeResponsavel.map((equipamento1) => ( <option key={equipamento1.id} > {equipamento1.nome} </option> )) }       
                
          </select>
      </div> */}

     <div class="col-3">
     <h6>Responsável</h6>
     <input disabled={isDisabled || bloqueado} list='ListaEquipamentos' onChange={(e) => setResponsavel1(e.target.value) } value={responsavel1} className='form-control text-center colorInput w-100 ' ></input>    
                  
                  <datalist  id="ListaEquipamentos">
                  {nomeResponsavel2.map((equipamento) => ( <option key={equipamento.id} > {equipamento.nome} </option> ))}                 
                  </datalist>
      </div> 

      <div class="col-3">
     <h6>Responsável</h6>
     <input disabled={isDisabled || bloqueado} list='ListaEquipamentos2' onChange={(e) => setResponsavel2(e.target.value) } value={responsavel2} className='form-control text-center colorInput w-100 ' ></input>    
                  
                  <datalist  id="ListaEquipamentos2">
                  {nomeResponsavel.map((equipamento) => ( <option key={equipamento.id} > {equipamento.nome} </option> ))}                 
                  </datalist>
      </div> 


      <div class="col-2">
         
        </div>

   {/*     <div class="col-3">
        <h6 >Responsável</h6>
        <input className='form-control text-center colorInput ' onChange={(e) => setResponsavel2(e.target.value)} value={responsavel2} disabled={isDisabled}></input>
      </div> */}




    </div>
 </div>
</body>

<body class="container text-center p-2 mt-3">
{/*   <p>Em todos campos descrição colocar opçao de anexar e visualização previa e download </p> */}
  <h6>Descrição detalhada do problema </h6>       
  <textarea cols={77} rows={2} className='form-control colorInput  resize ' onChange={(e) => setDescricaoproblema(e.target.value)} value={descricaoproblema} disabled={isDisabled || bloqueado}></textarea>
  
  
  
   {/*  <div className='row mt-3'>
      <div className='col-4'></div>
         
          <input disabled={bloqueado} className='col' type="file" onChange={handleImagemChange} /> 
    </div>

*/}
     
      {imagemPreview && (
        <div>
          <img src={imagemPreview} className='mt-3' alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
        </div>
      )} 

      
      {imagem && (
        <div>
          <button onClick={handleDownloadClick}>Download</button>
        </div>
      )} 

  <br/>

  <h6 className='mt-3'>Evidências </h6>       
  <textarea cols={77} rows={2} className='form-control colorInput  resize '  onChange={(e) => setEvidencia1(e.target.value)} value={evidencia1} disabled={isDisabled || bloqueado}></textarea>
  <br/>
  
</body>
<hr/>

<body class="container text-center p-2 mt-3">
  <h6>Ação de contenção </h6> 
  <h6 class=" mt-2">Descrição: </h6>       
  <textarea disabled={bloqueado} cols={77} rows={2} className='form-control colorInput  resize ' onChange={(e) => setDescAcaoCorretiva (e.target.value)} value={descAcaoCorretiva  } ></textarea>  

  {/* <input className='mt-3' type="file" onChange={handleImagemChange2} /> */}

  <div className='row mt-3'>
      <div className='col-4'></div>
          {/* <h6 className='col-1'> Anexar</h6> */}
          <input disabled={bloqueado} className='col' type="file" onChange={handleImagemChange2} /> 
    </div>


    {/* Exibição da prévia da imagem */}
    {imagemPreview2 && (
      <div>
        <img src={imagemPreview2} alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
      </div>
    )}

    {/* Botão de download */}
    {imagem2 && (
      <div>
        <button onClick={handleDownloadClick2}>Download</button>
      </div>
    )}
</body>
<br/>

<body class="container-fluid align-items-center justify-content-center row p-1  ">
     <div class=" col-auto  mt-2 align-items-start  ">      
            <h6 class=" mt-2  ">Definida por</h6>               
            <h6 class=" mt-3 ">Será executado por</h6>             
     </div>
     <div class=" col-2 mt-2 align-items-center">                  
            <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setDefinidaPor (e.target.value)} value={definidaPor} ></input>               
            <input disabled={bloqueado} class=" mt-2 form-control text-center colorInput " onChange={(e) => setExecutadaPor (e.target.value)} value={executadaPor}></input>       
     </div>
     <div class=" col-2  "> </div>
     <div class=" col-auto align-items-center ">       
            <h6 class=" mt-2 ">Data</h6>                 
            <h6 class=" mt-3 ">Data</h6>              
     </div>
     <div class=" col-2 align-items-center ">                
            <input disabled={bloqueado} type='date' class="  form-control text-center colorInput " onChange={(e) => setDataDefinidaPor (e.target.value)} value={dataDefinidaPor}></input>               
            <input disabled={bloqueado} type='date' class=" mt-2 form-control text-center colorInput " onChange={(e) => setDataExecutadaPor (e.target.value)} value={dataExecutadaPor}></input>       
     </div>
</body>
<hr/>
    <div className=' text-center'>
       <h6 >Equipe de análise</h6>
    </div> 

         <body class="container   p-1 ">
         <div class=" row mt-2 text-center "> 
         <div class=" col-6  align-items-center "> <h6 class=" mt-1 ">Participantes</h6>   </div> 
         <div class=" col-6  align-items-center "> <h6 class=" mt-1 ">Setor</h6>   </div>                                                 
         </div>

         <div class=" row  mt-2  text-center align-items-center">  
         <div class=" col-6 mt-1 align-items-center ">  
           <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setParticipante1 (e.target.value)} value={participante1} placeholder='Participante 1'></input>  
         </div> 
         <div class=" col-6 mt-1 align-items-center "> 
            <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setSetor1 (e.target.value)} value={setor1} placeholder='Setor 1'></input>   
          </div>                                    
         </div>

          <div class=" row  mt-2  text-center align-items-center">  
          <div class=" col-6 mt-1 align-items-center "> 
              <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setParticipante2 (e.target.value)} value={participante2} placeholder='Participante 2'></input>
           </div> 
         <div class=" col-6 mt-1 align-items-center "> 
             <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setSetor2 (e.target.value)} value={setor2} placeholder='Setor 2'></input> 
          </div>                                                 
          </div>

          <div class=" row  mt-2  text-center align-items-center">   
          <div class=" col-6 mt-1 align-items-center "> 
               <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setParticipante3 (e.target.value)} value={participante3} placeholder='Participante 3'></input> 
           </div> 
         <div class=" col-6 mt-1 align-items-center "> 
             <input disabled={bloqueado} class="  form-control text-center colorInput " onChange={(e) => setSetor3 (e.target.value)} value={setor3} placeholder='Setor 3'></input>
          </div>                                                     
          </div>

          <div class=" row  mt-2  text-center align-items-center">    
          <div class=" col-6 mt-1 align-items-center "> 
             <input disabled={bloqueado} class="  form-control text-center colorInput " value={participante4} onChange={(e) => setParticipante4 (e.target.value)} placeholder='Participante 4'></input> 
           </div> 
         <div class=" col-6 mt-1 align-items-center "> 
             <input disabled={bloqueado} class="  form-control text-center colorInput " value={setor4} onChange={(e) => setSetor4 (e.target.value)} placeholder='Setor 4'></input>
          </div>                                                                     
          </div>

          <div class=" row  mt-2  text-center align-items-center">  
          <div class=" col-6 mt-1 align-items-center "> 
               <input disabled={bloqueado} class="  form-control text-center colorInput " value={participante5} onChange={(e) => setParticipante5 (e.target.value)} placeholder='Participante 5'></input>
           </div> 
         <div class=" col-6 mt-1 align-items-center "> 
             <input disabled={bloqueado} class="  form-control text-center colorInput " value={setor5} onChange={(e) => setSetor5 (e.target.value)} placeholder='Setor 5'></input>
          </div>                                                                       
          </div> 


            
     </body>

         <br/>
         <hr/>  


         <div className=' text-center '>
        <h4>Diagrama de Ishikawa</h4>   
     </div>  

     <div className="d-flex container-sm  mt-4 ">
       {!checkMateriaPrima && !checkMaoDeObra && !checkMaquina && !checkMedicao && !checkMeioAmbiente && !checkMetodo ? (
  <div className="offset-3  ">  </div>
) : null}
        <div className="col-4 align-items-center justify-content-center ">
          
         <h5 className=' text-center '>Causas Possíveis</h5>
  
         <br />

    {/*      {!(checkMateriaPrima & checkMaoDeObra & checkMaquina & checkMedicao & checkMeioAmbiente & checkMetodo) ?( 
          <div className="col-2  "> </div>
         ):null} */}




         <div className="d-flex container mt-5 "> 

              <div className="col-4 " >   
                <input disabled={bloqueado}  type="checkbox" className=" me-1"  onChange={(e) =>  setCheckMateriaPrima(e.target.checked)} checked={checkMateriaPrima} />
                <label className="form-check-label ">Matéria-prima</label>
                
                <div className="offset-5 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(+45deg)',}}></div>
              </div>
              <div className="col-4 ">   
                <input disabled={bloqueado}  type="checkbox" className=" me-1" onChange={(e) =>  setCheckMaquina(e.target.checked)} checked={checkMaquina} />
                <label className="form-check-label">Máquina</label>
                <div className="offset-5 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(+45deg)',}}></div>
              </div>
              <div className="col-4 ">   
                <input  disabled={bloqueado} type="checkbox" className=" me-1" onChange={(e) =>  setCheckMaodeObra(e.target.checked)} checked={checkMaoDeObra}/>
                <label className="form-check-label">Mão de obra</label>
                <div className="offset-5 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(+45deg)',}}></div>
              </div>               
         </div>
         <br />
         <hr className='mt-3' style={{ borderWidth: '3px' }} />



         <div className="d-flex container mt-4 "> 
         
              <div className="col-4 " > 
                   <div className="offset-5 me-3 mt-2 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(-40deg)',}}></div>        
                <input disabled={bloqueado}  type="checkbox" className=" me-1 mt-3" onChange={(e) =>  setCheckMedicao(e.target.checked)} checked={checkMedicao} />
                <label className="form-check-label">Medição</label>
                
              </div>
              <div className="col-4 ">   
              <div className="offset-5 me-3 mt-2 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(-40deg)',}}></div>  
                <input disabled={bloqueado} type="checkbox" className=" me-1 mt-3" onChange={(e) =>  setCheckMetodo(e.target.checked)} checked={checkMetodo} />
                <label className="form-check-label">Método</label>
              </div>
              <div className="col-4 ">  
              <div className="offset-5 me-3 mt-2 " style={{ width: '58px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(-40deg)',}}></div>  
                <input disabled={bloqueado} type="checkbox" className=" me-1 mt-3" onChange={(e) =>  setCheckMeioAmbiente(e.target.checked)} checked={checkMeioAmbiente}/>
                <label className="form-check-label">Meio ambiente</label>
              </div>               
         </div>
        </div>      
      
      
        <div className="col-3 me-5 align-items-center justify-content-center mt-1 ">
           <h5 className=' text-center '>Efeito</h5>
           <textarea cols={5} rows={11} disabled   className='form-control  colorInput resize' onChange={(e) =>  setEfeito(e.target.value)} value={descricaoproblema}> </textarea>
        </div>
        
        {checkMateriaPrima || checkMaoDeObra || checkMaquina || checkMedicao || checkMeioAmbiente || checkMetodo ?(
      <div className="col-5 align-items-center justify-content-center ">
      {checkMateriaPrima &&(
        <div className="container  mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-check-label">Matéria-prima</label>
              <svg onClick={MudaPopUp1} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 
              {popup1 && (<div className="popup">   Falhas em especificações, fornecedores, conformidade de serviços</div> )}
            </div>
            <div className="col-8">
              <textarea  cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) =>  setMateriaPrima(e.target.value)} value={materiaPrima} ></textarea>
            </div>
          </div>
        </div>
        )}
        {checkMaquina &&(
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-check-label">Máquina</label>
              <svg onClick={MudaPopUp2} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 
              {popup2 && (<div className="popup">  Falhas em manutenção, proteção, condições insegura</div> )}
            </div>
            <div className="col-8">
              <textarea cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) => setMaquina (e.target.value)} value={maquina} ></textarea>
            </div>
          </div>
        </div>
        )}

        {checkMaoDeObra &&(
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-check-label">Mão de obra</label>
              <svg onClick={MudaPopUp3} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 
              {popup3 && (<div className="popup"> Falhas em treinamentos, motivação, habilidades e avaliação de eficácia de treinamentos.</div> )}
            </div>
            <div className="col-8">
              <textarea cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) => setMaoDeObra (e.target.value)} value={maoDeObra} ></textarea>
            </div>
          </div>
        </div>
        )}

        {checkMedicao &&(
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-check-label">Medição</label>
              <svg onClick={MudaPopUp4} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 
              {popup4 && (<div className="popup"> Falhas de verificações, inspeções, instrumentos.</div> )}
            </div>
            <div className="col-8">
              <textarea cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) => setMedicao (e.target.value)} value={medicao} ></textarea>
            </div>
          </div>
        </div>
        )}

        {checkMetodo &&(
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-check-label">Método</label>
              <svg onClick={MudaPopUp5} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 
              {popup5 && (<div className="popup"> Falhas em procedimentos, instruções de trabalho, manuais.</div> )}
            </div>
            <div className="col-8">
              <textarea cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) => setMetodo (e.target.value)} value={metodo} ></textarea>
            </div>
          </div>
        </div>
        )}

        {checkMeioAmbiente &&(

        <div className="container mt-3">

          <div className="row align-items-center">

            <div className="col-4"  >
              <label className="form-check-label">Meio ambiente</label>

              <svg onClick={MudaPopUp6} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="offset-1 bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg> 

              {popup6 && (<div className="popup"> Falhas em relação interpessoais, clima, limpeza e organização</div> )}
              </div>

            <div className="col-8">
              <textarea cols={8} rows={1} className="form-control text-center colorInput resize" onChange={(e) => setMeioAmbiente (e.target.value)} value={meioAmbiente}></textarea>
            </div>

          </div>
          
        </div>
 )}
 
        </div> 
      ):null}
   
    </div>
   
    <br/>
    <hr/> 
        
     
     <div className=' text-center p-2'>
       <h6 >Cinco Porquês</h6>
    </div>

    <body class="container text-center  ">
    <div class="col  align-items-center justify-content-center  ">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-3 mt-4">
              <h6>Ocorrências</h6>    
              <h6>Porque o problema ocorreu?</h6>                     
            </div>

          <div class="mt-4 ">
            <h6>1° Porquê</h6>
            <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={porque1} onChange={(e) => setPorque1 (e.target.value)} ></textarea>
          </div>

          <div class="mt-2">
            <h6>2° Porquê</h6>
            <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={porque2} onChange={(e) => setPorque2 (e.target.value)}></textarea>
          </div>

          <div class="mt-2">
            <h6 >3° Porquê</h6>
            <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={porque3} onChange={(e) => setPorque3 (e.target.value)} ></textarea>
          </div>
          <div class="mt-2">
            <h6 >4° Porquê</h6>
            <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={porque4} onChange={(e) => setPorque4 (e.target.value)} ></textarea>
          </div>
          <div class="mt-2">
            <h6>5° Porquê</h6>
            <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={porque5} onChange={(e) => setPorque5 (e.target.value)} ></textarea>
          </div>
        </div>
   </div>
   </body>
   <hr/>
   <body class="container text-center p-3 ">
      <h6>Descrição da causa raiz identificada </h6>       
      <textarea disabled={bloqueado} cols={77} rows={2} className='form-control colorInput  resize ' value={descCausaIdentificada} onChange={(e) => setDescCausaIdentificada (e.target.value)}></textarea> 

      {/* <input className='mt-3' type="file" onChange={handleImagemChange3} /> */}

      <div className='row mt-3'>
      <div className='col-4'></div>
         {/*  <h6 className='col-1'> Anexar</h6> */}
          <input disabled={bloqueado} className='col' type="file" onChange={handleImagemChange3} /> 
    </div>

          {/* Exibição da prévia da imagem */}
          {imagemPreview3 && (
            <div>
              <img src={imagemPreview3} alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
            </div>
          )}

          {/* Botão de download */}
          {imagem3 && (
            <div>
              <button onClick={handleDownloadClick3}>Download</button>
            </div>
          )}
   </body>
   <hr/>
   <div className=' text-center p-2'>
       <h6 >Análise de risco e oportunidades</h6>
    </div>
   <body class="container text-center align-items-center justify-content-center p-1 ">
    <div class="col  align-items-center justify-content-center  ">
        
            <div class="col-auto mt-2 p-1 ">
              <h6>Existe necessidade de alteração de risco e oportunidades?</h6>                                   
            </div>
          <div class="col-2 offset-5 p-1">
          <select disabled={bloqueado} className=' form-select align-items-center text-center  colorInput me-2 ' value={analiseDeRisco} onChange={(e) => setAnaliseDeRisco (e.target.value)}> 
             <option selected value="...">Selecione...</option>                      
             <option value="sim">Sim</option>
             <option value="nao">Não</option>
          </select>
          </div>
          <div class="col-auto p-1">
            {analiseDeRisco === 'sim'? <h6>Descreva</h6> :null}
                       
          </div>
          <div class="col-auto  mt-1"> 
          {analiseDeRisco === 'sim'? 
           <textarea disabled={bloqueado} cols={7} rows={3} className='form-control colorInput  resize ' value={descAnaliseDeRisco} onChange={(e) => setDescAnaliseDeRisco (e.target.value)}></textarea>
          :null}          
            

            {/*  <input className='mt-3' type="file" onChange={handleImagemChange4} /> */}

            <div className='row mt-3'>
             <div className='col-4'></div>
                {/* <h6 className='col-1'> Anexar</h6> */}
                <input disabled={bloqueado} className='col' type="file" onChange={handleImagemChange4} /> 
            </div>

                {/* Exibição da prévia da imagem */}
                {imagemPreview4 && (
                  <div>
                    <img src={imagemPreview4} alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
                  </div>
                )}

                {/* Botão de download */}
                {imagem4 && (
                  <div>
                    <button onClick={handleDownloadClick4}>Download</button>
                  </div>
                )}
          </div>         
    </div>
    </body>
    <hr/>
   <div className=' text-center p-2'>
       <h5 >Ação Corretiva</h5>
    </div>
    <body class="container text-center  ">
    <div class="col  align-items-center justify-content-center  ">
        <div class="row d-flex align-items-start justify-content-center p-2 ">       
          <div class="col-2 -p-4 ">
          <select disabled={bloqueado} className=' form-select align-items-center text-center colorInput me-2 ' value={acaoCorretiva} onChange={(e) => setAcaoCorretiva (e.target.value)} > 
             <option selected value="...">Selecione...</option>                      
             <option value="sim">Sim</option>
             <option value="nao">Não</option>
          </select>         
          </div>   
          {acaoCorretiva === 'sim'?
           <h6 class=" mt-3">Justificativa</h6> 
             :null}

          {acaoCorretiva === 'sim'? 
          <textarea disabled={bloqueado} cols={8} rows={3} className='form-control colorInput  resize mt-3 ' value={justAcaoCorretiva} onChange={(e) => setJustAcaoCorretiva (e.target.value)}></textarea> 
          :null}
                                             
                                                                     
        </div>
    </div>
    </body>

    <body class="container text-center  ">
    <div class="col  align-items-center justify-content-center  ">
        <div class="row d-flex align-items-start justify-content-center p-2 ">       
         
          <div class="col-2 mt-2 ">
              <h6>Aplicável a outros setores?</h6>   
                <select disabled={bloqueado}  className=' form-select align-items-center text-center colorInput me-2 mt-3' value={aplicAvelSetores} onChange={(e) => setAplicAvelSetores (e.target.value)}> 
                   <option selected value="...">Selecione...</option>                      
                   <option value="sim">Sim</option>
                   <option value="nao">Não</option>
               </select>
            </div>   

            {aplicAvelSetores === 'sim' ?  <h6 class=" mt-3">Descreva</h6>  :null}

            {aplicAvelSetores === 'sim' ?   <textarea disabled={bloqueado} cols={8} rows={3} className='form-control colorInput  mt-3 resize ' value={descAplicavelSetores} onChange={(e) => setDescAplicavelSetores (e.target.value)} ></textarea>  :null}

                   
                  
{/*                    <div className='conatiner'>
                    <input className='mt-3 ' type="file" onChange={handleImagemChange5} />
                   </div> */}

                 <div className='row mt-3'>
                    <div className='col-4'></div>
                       {/*  <h6 className='col-1'> Anexar</h6> */}
                        <input disabled={bloqueado} className='col' type="file" onChange={handleImagemChange5} /> 
                  </div>
               
                {/* Exibição da prévia da imagem */}
                {imagemPreview5 && (
                  <div>
                    <img src={imagemPreview5} alt="Prévia da imagem" style={{ maxWidth: '100px' }} />
                  </div>
                )}

                {/* Botão de download */}
                {imagem5 && (
                  <div>
                    <button onClick={handleDownloadClick5}>Download</button>
                  </div>
                )}
                                      
        </div>
    </div>
    </body>        
 
 <body class="container text-center mt-5 cinzaclaro ">

 
 <div class="col  align-items-center justify-content-center p-2 ">

    <div class="row d-flex align-items-center justify-content-center ">
        <div class="col-1">
          <h6>Item</h6>                     
        </div>

      <div class="col-4 ">
        <h6>Ação</h6>
      </div>

      <div class="col-2">
        <h6>Responsável</h6>
      </div>

      <div class="col-2">
        <h6 >Previsão</h6>  
      </div>

      <div class="col-1">
        <h6 >Execução</h6>       
      </div>
      <div class="col-2">
               
      </div>
    </div>
 </div>
 </body>

<body class="container text-center colorInput ">
 <div class="col  align-items-center justify-content-start p-2 colorInput">
   {/* {listaDeAcoes} */}

{acoes.map((f,i)=> <div key={i} class="row d-flex align-items-start justify-content-center mt-2 ">

        <div class="col-1">{f.item1} </div>
         <div class="col-4 ">{f.acao1}</div> 
        {/* <div class="col-4"> <textarea rows={3} cols={50} readOnly className=" bordaa  text-center colorInput resize">{f.acao1}</textarea></div> */}
        <div class="col-2">{f.responsavelAcao1}</div>
        <div class="col-2">{f.acao1  && f.previsaoAcao1 !== '' && (moment(f.previsaoAcao1).format('DD/MM/YYYY'))} </div>
        <div class="col-1">{f.acao1  && f.execucaoAcao1 !== '' && (moment(f.execucaoAcao1).format('DD/MM/YYYY'))}</div>
       {f.acao1  && isDataLoaded === true? ( <div class="col-2">  <button disabled={ bloqueado} onClick={() => ClickDelete(f.id) } className="far fa-trash-alt icone-acao red botaao"></button></div>):<div class="col-2"></div>}
       
        </div>)}

 </div>
</body>

<br/>

{isDataLoaded === true?(  

    <div class="row d-flex align-items-end justify-content-end p-1 ">  
        <div class="col-4">             
        <Link to="/app/PlanoDeAcoes"  className="nav-link logout" aria-current="page" >  <button type="button" class="botaoadicionar" > Plano de Ações </button></Link>
       </div>                  
       <div class="col-4">        
          <button type="button" class="botaoadicionar" data-bs-toggle="modal" data-bs-target="#ModalAcoes" >adicionar</button>
       </div>         
  </div>

   ):null}




<div class="modal" id="ModalAcoes" tabindex="" aria-labelledby="ModalAcoesLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalAcoesLabel">Ações</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
      <div class="container text-center  ">
     <div class="col  align-items-center justify-content-center p-2 ">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-1">  
               <h6>Item</h6>
             {/*  <input placeholder='Item' className='form-control text-center colorInput ' value={ item1 }  onChange={(e) => { setItem1(e.target.value)  }} ></input>  */} 
             <input disabled={bloqueado}
                      placeholder="Item"
                      className="form-control text-center colorInput"
                      value={numeroItem}
                      /* readOnly */
                      onChange={(e) => { setItem1(e.target.value)  }} // O campo é apenas leitura para impedir a modificação pelo usuário
                    ></input>                         
            </div>
    
          <div class="col-5 "> 
          <h6>Ação</h6>      
            <textarea  disabled={bloqueado} cols={8} rows={1} placeholder='Ação' className='form-control text-center colorInput resize 'value={acao1} onChange={(e) => setAcao1 (e.target.value)}></textarea>      
          </div>
    
          <div class="col-4">   
          <h6>Responsável</h6>     
            <textarea disabled={bloqueado}  cols={8} rows={1} placeholder='Responsável' className='form-control text-center colorInput resize ' value={responsavelAcao1} onChange={(e) => setResponsavelAcao1 (e.target.value)}></textarea>     
          </div>
    
          <div class="col-2">
          <h6>Previsão</h6>
            <input disabled={bloqueado} type='date' placeholder='Previsão'  className='form-control text-center colorInput '  value={previsaoAcao1} onChange={(e) => setPrevisaoAcao1 (e.target.value)}></input>       
          </div>
    
{/*           <div class="col-2">
          <h6>Execução</h6>
            <input disabled={bloqueado} type='date' placeholder='Execução' className='form-control text-center colorInput ' value={execucaoAcao1} onChange={(e) => setExecucaoAcao1 (e.target.value)}></input>      
          </div> */}
        </div>
      </div>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>             
        <button type="button" class="btn btn-success" disabled={ bloqueado} /* onClick={(e) => AcoesClick(e) & LimparAcao()    } */ onClick={(e) => {
                setNumeroItem(numeroItem + 1); 
                AcoesClick(e);
                LimparAcao();
              }}>Salvar</button>
      </div>
    </div>
  </div>
</div>

<hr/>

{setorDoCargo === 'SGI'?

    <div className=' text-center p-2'>
    {/*   <p>Acresentar os itens,mesmo da tabela acima/ previsao e execuçao mudar para date visivel somente ao logim sgi </p> */}
       <h6 >Verificação de eficácia</h6>
    </div>
    :null}
    {setorDoCargo === 'SGI'?
<body class="container text-center cinzaclaro " >
 <div class="col  align-items-center justify-content-center p-2 ">
    <div class="row d-flex align-items-center justify-content-center ">
      <div class="col-2 ">
        <h6>Ação</h6>
      </div>
       <div class="col-2">
        <h6>Responsável</h6>
      </div>
      <div class="col-2">
        <h6 >Previsão</h6>
      </div>
      <div class="col-1">
        <h6 >Execução</h6>
      </div>
      <div class="col-2">
        <h6>Resultado</h6>                     
      </div>
      <div class="col-2">
        <h6>Comentário(Evidência objetiva de conformidade)</h6>                  
      </div> 
      <div class="col-1">
                             
      </div>     
    </div>
 </div>
</body>
:null}

{setorDoCargo === 'SGI'?
<body class="container text-center  " >
 <div class="col  align-items-center justify-content-center p-2 colorInput">
 {/* {listaVerificacao} */}
 {verificaEficacia.map((v) => (
  <div key={v.id} className="row d-flex align-items-center justify-content-center">
          <div class="col-2 "> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verAcao1}</textarea>  </div>
          <div class="col-2"> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verResponsavelAcao1}</textarea> </div>
          <div class="col-2 text-center">{v.verAcao1 && (moment(v.verPrevisaoAcao1).format('DD/MM/YYYY'))}</div>
          {/* <div class="col-1"> {moment(v.verExecucaoAcao1).format('DD/MM/YYYY')} </div> */}
          <div className="col-1 text-center">{v.verAcao1 && ( moment(v.verExecucaoAcao1).format('DD/MM/YYYY'))}
     </div>
          <div class="col-2 text-center"> {v.verResultado1}  </div>
          <div class="col-2 "> <textarea className=" bordaa  text-center colorInput resize mt-4">{v.verComentario1}</textarea> </div> 
          
          
          {setorDoCargo === 'SGI'?
          <div class="col-1"> {v.verAcao1 && isDataLoaded === true? ( <button disabled={ bloqueado} onClick={() => ClickDeleteVerifica(v.id) } className="far fa-trash-alt icone-acao red botaao"></button>):<div class="col-2"></div>}</div> 
          :null}
          
          {setorDoCargo !== 'SGI'?
          <div class="col-1"> </div> 
          :null}
    </div>
  ))}
 </div>
</body>
:null}

<br/>

<div class="modal" id="ModalVerificacao" tabindex="" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Verificação de eficácia</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <body class="container text-center  " >
          <div class="col  align-items-center justify-content-center p-2 ">
            <div class="row d-flex align-items-center justify-content-center ">
              <div class="col-6 ">
              <h6>Ação</h6> 
              <textarea  cols={8} rows={1}  disabled={/* isDisabled || */ bloqueado} placeholder='Ação'  className='form-control text-center colorInput resize ' value={verAcao1} onChange={(e) => setVerAcao1 (e.target.value)}></textarea >
              </div>
                <div class="col-4">
                <h6>Responsável</h6> 
                <textarea  cols={8} rows={1} disabled={/* isDisabled || */ bloqueado} placeholder='Responsável'  className='form-control text-center colorInput resize'  onChange={(e) => setVerResponsavelAcao1 (e.target.value)} value={verResponsavelAcao1}></textarea >
              </div>
              <div class="col-2">
              <h6>Previsão</h6> 
                <input type='date' disabled={/* isDisabled || */ bloqueado} placeholder='Previsão'  className='form-control text-center colorInput ' value={verPrevisaoAcao1} onChange={(e) => setVerPrevisaoAcao1 (e.target.value)} ></input>
              </div>
              <div class="col-3 mt-3">
              <h6>Execução</h6> 
                <input type='date' disabled={/* isDisabled || */ bloqueado} placeholder='Execução'  className='form-control text-center colorInput ' value={verExecucaoAcao1} onChange={(e) => setVerExecucaoAcao1 (e.target.value)}></input>
              </div>
            <div class="col-3 mt-3"> 
                 <h6>Resultado</h6> 
                  <input disabled={/* isDisabled || */ bloqueado} placeholder='Resultado'  className='form-control text-center colorInput ' value={verResultado1} onChange={(e) => setVerResultado1 (e.target.value)}></input>                    
                </div>
                <div class="col-6 mt-3"> 
                <h6>Comentário</h6>      
                  <textarea  cols={8} rows={1} disabled={/* isDisabled || */ bloqueado} placeholder='Deixe um comentário'  className='form-control text-center colorInput resize' value={verComentario1} onChange={(e) => setVerComentario1 (e.target.value)}></textarea>                   
                </div>  
            </div>
        </div>
        </body>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-success" disabled={ bloqueado} onClick={(e) => VerificaEficaciaClick(e) & LimparVerificacao(e)  } >Salvar</button>          
      </div>
    </div>
  </div>
</div>


{setorDoCargo === 'SGI' & isDataLoaded === true ?
<div class="row d-flex align-items-end justify-content-end p-1 ">                   
       <div class="col-4">
          
          <button type="button" class="botaoadicionar" data-bs-toggle="modal" data-bs-target="#ModalVerificacao" >adicionar </button>
       </div>         
  </div>

  
  :null}



{setorDoCargo === 'SGI'? 
    <div className=' text-center p-2'>
       <h6 >Encerramento</h6>
    </div>
:null}

    {setorDoCargo === 'SGI'? 
     
     <body class="container text-center  ">
      <div class="col  align-items-center justify-content-center  ">
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-1 mt-2 ">
              <h6>Responsável</h6>                                   
            </div>
          <div class="col-4 ">
            <input /*  disabled={isDisabled2} */  disabled={ bloqueado}   className='form-control text-center colorInput '  onChange={(e) => setEncerraResponsavel (e.target.value)} value={encerraResponsavel}></input> 
          </div>
          <div class="col-4 "></div>
          <div class="col-1 mt-2">
            <h6>Data</h6>            
          </div>
          <div class="col-2 ">           
             <input  /* disabled={isDisabled2} */ disabled={ bloqueado} className='form-control text-center colorInput ' type='date' name='dataEncerra' id='dataEncerra' onChange={(e) => setEncerraData (e.target.value)} value={encerraData}></input> 
          </div>   
        </div>
    </div>
    </body>
        
       :null}


{isDataLoaded === true?(  
     <div class="row   align-items-end justify-content-end p-5 ">                   
                  <div class="col-3 me-5 ">
                    
                     <button /* disabled={isDisabled2} */ disabled={ bloqueado} onClick={(e) => CriaNOVOSGI(e) }  class="botaoadicionar " >salvar</button>                                         
                  </div>     
                                
       </div>
):null}

       {setorDoCargo === 'SGI' && isDataLoaded === true? 
             <div class="row d-flex align-items-end justify-content-end p-1 ">                   
             <div class="col-4">              
                <button /* disabled={isDisabled2} */ disabled={ bloqueado} onClick={(e) => CriaNOVOSGI2(e)  }  class="botaoadicionar " >Encerrar</button>                                         
             </div>                                
            </div>      
       :null}


<div class="row d-flex align-items-end justify-content-end p-1 mt-2 ">                   
             <div class="col-4">              
             <button onClick={() =>GerarPDF()} className="btn btn-danger btn-cli" ><i className="far fa-file-pdf"></i> Gerar PDF </button>                                         
             </div>                                
            </div>  


            <div class="row d-flex align-items-end justify-content-end p-1 mt-2 ">                   
             <div class="col-4">              
             <button onClick={() =>createForm()} className="btn btn-danger btn-cli" ><i className="far fa-file-pdf"></i> TESTE outro PDF </button>                                         
             </div>                                
            </div>  


            

       
</body>
};
export default  RncxTeste;