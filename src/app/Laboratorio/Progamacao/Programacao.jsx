import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import ListaProgramacaoGrid from '../Progamacao/ListaProgramacao/listaprogramacao';
import './Programacao.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import clientesPDF from './PDFProgramacao/PDFProgramacao';
import Conexao from '../../Config/conexao';
import VariavelGlobal from '../../Config/Variavelglobal'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Listacabecalho from './ListaProgramacao/listacabecalho';

import PDFFile from '../Progamacao/ListaProgramacao/listaprogramacao';
import { FormGroup } from 'react-bootstrap';
function Programacao() {
  const [teoragua, setTeorAgua] = useState([])
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [excluido, setExcluido] = useState('');
  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');
  const [lista, setLista] = useState([]);
  const [listaperfuracao, setListaPerfuracao] = useState([]);
  const [listamaterial, setListaMaterial] = useState([]);
  const [listacontrolelama, setListaControleLama] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [lista3, setLista3] = useState([]);
  const [processo, setProcesso] = useState('')
  const [caspsula1, setCapsula1] = useState('')
  const [amostra, setAmostra] = useState('Todas Amostras')
  const [masamosecacap1, setMasamosecacap1] = useState('')
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [intacta, setIntacta] = useState(false)
  const [massavolumica, setMassaVolumica] = useState()
  const [cortedirecto, setCorteDirecto] = useState('')
  const [materiaorganica, setMateriaOrganica] = useState('')
  const [ph, setPH] = useState('')
  const [densidadeparticulas, setDensidadeParticulas] = useState('')
  const [limitesliquidezmcp, setLimitesLiquidezMCP] = useState('')
  const [limitesplasticidade, setLimitesPlasticidade] = useState('')
  const [limitesretraccao, setLimitesRetraccao] = useState('')
  const [teorsulfatos, setTeorSulfatos] = useState('')
  const [teorcloretos, setTeorCloretos] = useState('')
  const [teorcarbonatos, setTeorCarbonatos] = useState('')
  const [acidezbgully, setAcidezBGully] = useState('')
  const [peneiracao, setPeneiracao] = useState('')
  const [azulmetileno, setAzulMetileno] = useState('')
  const [frascoareia, setFrascoAreia] = useState('')
  const [peneiracaosedimentacao, setPeneiracaoSedimentacao] = useState('')
  const [metodohilf, setMetodoHilf] = useState('')
  const [coeficientefriabilidade, setCoeficienteFriabilidade] = useState('')
  const [resistividadeeletricaprovetesolo, setResistividadeEletricaProveteSolo] = useState('')
  const [compactacaonormal, setCompactacaoNormal] = useState('')
  const [compactacaointermediaria, setCompactacaoIntermediaria] = useState('')
  const [compactacaomodificada, setCompactacaoModificada] = useState('')
  const [baridadesmaximaminima, setBaridadesMaximaMinima] = useState('')
  const [compactacaovibrocompactacao, setCompactacaoVibrocompactacao] = useState('')
  const [cbrsemmoldagem, setCBRSemMoldagem] = useState('')
  const [cbrcommoldagem, setCBRComMoldagem] = useState('')
  const [ensaiocbr, setEnsaioCBR] = useState('')
  const [cbrimediato, setCBRImediato] = useState('')
  const [amostracadastrada, setAmostraCadastrad] = useState(false)
  const [alertaprocesso, setAlertaProcesso] = useState(false)
  const [potenciacolapso, setPotenciaColapso] = useState('')
  const [indiceexpansibilidade, setIndiceExpansibilidade] = useState('')
  const [expansibilidadepotenciaexpansao, setExpansibilidadePotenciaExpansao] = useState('')
  const [ensaioexpansibilidade, setEnsaioExpansibilidade] = useState('')
  const [ensaioexpansibilidadelambe, setEnsaioExpansibilidadeLambe] = useState('')
  const [expansibilidadeedometro, setExpansibilidadeEdometro] = useState('')
  const [potenciaexpansao, setPotenciaExpansao] = useState('')
  const [indicecolapso, setIndiceColapso] = useState('')
  const [ensaiodispersabilidade, setEnsaioDispersabilidade] = useState('')

  const [endometro, setEdometro] = useState('')
  const [ensaioedometrodccs, setEnsaioEdometroDCCS] = useState('')
  const [consolidacaohidraulica, setConsolidacaoHidraulica] = useState('')
  const [consolidacaotriaxial, setConsolidacaoTriaxial] = useState('')
  //PermeabilidadeConstante

  const [permeabilidadeconstante, setPermeabilidadeConstante] = useState('')
  const [permeabilidadevariavel, setPermeabilidadeVariavel] = useState('')

  const [resistenciacompressaounixial, setResistenciaCompressaoUnixial] = useState('')
  const [triaxialnaoconsolidadouu, setTriaxialNaoConsolidadoUU] = useState('')
  const [triaxialnaoconsolidadocu, setTriaxialNaoConsolidadoCU] = useState('')
  const [triaxialnaoconsolidadocd, setTriaxialNaoConsolidadoCD] = useState('')
  const [triaxialsigmaconstante, setTriaxialSigmaConstante] = useState('')
  const [patamarconsolidacaoanisotropica, setPatamarConsolidacaoAnisotropica] = useState('')
  const [ensaiotriaxialmultifasicocu, setEnsaioTriaxialMultifasicoCU] = useState('')
  const [ensaiotriaxialmultifasicocd, setEnsaioTriaxialMultifasicoCD] = useState('')
  const [ensaiocortenaoconsolidadonaodrenadouu, setEnsaioCorteNaoConsolidadoNaoDrenadoUU] = useState('')
  const [ensaiocorteconsolidadonaodrenadocu, setEnsaioCorteConsolidadoNaoDrenadoCU] = useState('')
  const [ensaiocorteconsolidadonaodrenadocd, setEnsaioCorteConsolidadoNaoDrenadoCD] = useState('')
  const [intactaremexida, setIntactaRemexida] = useState('')


  const [rmassavolumica, setRMassaVolumica] = useState('N')
  const [rteoragua, setRTeorAgua] = useState('')
  const [rcortedirecto, setRCorteDirecto] = useState('')
  const [rmateriaorganica, setRMateriaOrganica] = useState('')
  const [rph, setRPH] = useState('')
  const [rdensidadeparticulas, setRDensidadeParticulas] = useState('')
  const [rlimitesliquidezmcp, setRLimitesLiquidezMCP] = useState('')
  const [rlimitesplasticidade, setRLimitesPlasticidade] = useState('')
  const [rlimitesretraccao, setRLimitesRetraccao] = useState('')
  const [rteorsulfatos, setRTeorSulfatos] = useState('')
  const [rteorcloretos, setRTeorCloretos] = useState('')
  const [rteorcarbonatos, setRTeorCarbonatos] = useState('')
  const [racidezbgully, setRAcidezBGully] = useState('')
  const [rpeneiracao, setRPeneiracao] = useState('')
  const [razulmetileno, setRAzulMetileno] = useState('')
  const [rfrascoareia, setRFrascoAreia] = useState('')
  const [rpeneiracaosedimentacao, setRPeneiracaoSedimentacao] = useState('')
  const [rmetodohilf, setRMetodoHilf] = useState('')
  const [rcoeficientefriabilidade, setRCoeficienteFriabilidade] = useState('')
  const [rresistividadeeletricaproveteSolo, setRResistividadeEletricaProveteSolo] = useState('')

  const [rcompactacaonormal, setRCompactacaoNormal] = useState('')
  const [rcompactacaointermediaria, setRCompactacaoIntermediaria] = useState('')
  const [rcompactacaomodificada, setRCompactacaoModificada] = useState('')
  const [rbaridadesmaximaminima, setRBaridadesMaximaMinima] = useState('')
  const [rcompactacaovibrocompactacao, setRCompactacaoVibrocompactacao] = useState('')
  const [rcbrsemmoldagem, setRCBRSemMoldagem] = useState('')
  const [rcbrcommoldagem, setRCBRComMoldagem] = useState('')
  const [rensaiocbr, setREnsaioCBR] = useState('')
  const [rcbrimediato, setRCBRImediato] = useState('')

  const [rpotenciacolapso, setRPotenciaColapso] = useState('')
  const [rindiceexpansibilidade, setRIndiceExpansibilidade] = useState('')
  const [rexpansibilidadepotenciaexpansao, setRExpansibilidadePotenciaExpansao] = useState('')
  const [rensaioexpansibilidade, setREnsaioExpansibilidade] = useState('')
  const [rensaioexpansibilidadelambe, setREnsaioExpansibilidadeLambe] = useState('')
  const [rexpansibilidadeedometro, setRExpansibilidadeEdometro] = useState('')
  const [rpotenciaexpansao, setRPotenciaExpansao] = useState('')
  const [rindicecolapso, setRIndiceColapso] = useState('')
  const [rensaiodispersabilidade, setREnsaioDispersabilidade] = useState('')
  const [resilientetriaxiala, setResilienteTriaxialA] = useState()
  const [rresilientetriaxiala, setRResilienteTriaxialA] = useState('')
  const [resilientetriaxialb, setResilienteTriaxialB] = useState()
  const [rresilientetriaxialb, setRResilienteTriaxialB] = useState('')
  const [permanentestriaxiala, setPermanentesTriaxialA] = useState()
  const [rpermanentestriaxiala, setRPermanentesTriaxialA] = useState('')
  const [permanentestriaxialb, setPermanentesTriaxialB] = useState()
  const [rpermanentestriaxialb, setRPermanentesTriaxialB] = useState('')
  const [compressaosimples, setCompressaoSimples] = useState()
  const [rcompressaosimples, setRCompressaoSimples] = useState('')
  const [ensaiomolhagemsecagem, setEnsaioMolhagemSecagem] = useState()
  const [rensaiomolhagemsecagem, setREnsaioMolhagemSecagem] = useState('')
  const [rendometro, setREdometro] = useState('')
  const [rensaioedometrodccs, setREnsaioEdometroDCCS] = useState('')
  const [rconsolidacaohidraulica, setRConsolidacaoHidraulica] = useState('')
  const [rconsolidacaotriaxial, setRConsolidacaoTriaxial] = useState('')
  const [rresistenciacompressaounixial, setRResistenciaCompressaoUnixial] = useState('')
  const [rtriaxialnaoconsolidadouu, setRTriaxialNaoConsolidadoUU] = useState('')
  const [rtriaxialnaoconsolidadocu, setRTriaxialNaoConsolidadoCU] = useState('')
  const [rtriaxialnaoconsolidadocd, setRTriaxialNaoConsolidadoCD] = useState('')
  const [rtriaxialsigmaconstante, setRTriaxialSigmaConstante] = useState('')
  const [rpatamarconsolidacaoanisotropica, setRPatamarConsolidacaoAnisotropica] = useState('')
  const [rensaiotriaxialmultifasicocu, setREnsaioTriaxialMultifasicoCU] = useState('')
  const [rensaiotriaxialmultifasicocd, setREnsaioTriaxialMultifasicoCD] = useState('')
  const [rensaiocortenaoconsolidadonaodrenadouu, setREnsaioCorteNaoConsolidadoNaoDrenadoUU] = useState('')
  const [rensaiocorteconsolidadonaodrenadocu, setREnsaioCorteConsolidadoNaoDrenadoCU] = useState('')
  const [rensaiocorteconsolidadonaodrenadocd, setREnsaioCorteConsolidadoNaoDrenadoCD] = useState('')
  const [testearray, setTesteArray] = useState([])
  const [t1, setT1] = useState()
  const [cont, setcont] = useState(0)
  const [cont2, setcont2] = useState(0)
  const [m1, setM1] = useState(false)
  const [m2, setM2] = useState('Todas Amostras')
  const [sucesso, setSucesso] = useState('');
  const [sucesso1, setSucesso1] = useState('');
  const [sucesso2, setSucesso2] = useState('');
  const [sucesso3, setSucesso3] = useState('');
  const [sucesso4, setSucesso4] = useState('');
  const [sucesso5, setSucesso5] = useState('');
  const [sucesso6, setSucesso6] = useState('');
  const [listaamostra, setListaAmostra] = useState([])
  const [listaamostra2, setListaAmostra2] = useState([])
  const ref = React.createRef();
  const car = []
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8.5, 11]
  };
  const [normarealgrao, setNormaRealGrao] = useState('')
  const [normateoragua, setNormaTeorAgua] = useState('')
  const [normacortedireto, setNormaCorteDireto] = useState('')
  const [normamassaespecificaaparente, setNormaMassaEspecificaAparente] = useState('')
  const [normamebranaplastica, setNormaNormaMebranaPlastica] = useState('')
  const [normalimiteliquidezplasticidade, setNormaLimiteLiquidezPlasticidade] = useState('')
  const [normagranulometriapeneiramento, setNormaGranulometriaPeneiramento] = useState('')
  const [normafrascoareia, setNormaFrascoAreia] = useState('')
  const [normagranulometriasedimentacao, setNormaGranulometriaSedimentacao] = useState('')
  const [normahilf, setHilf] = useState('')

  const [normacompactacao, setNormaCompactacao] = useState('')
  const [normacompactacaomodificada, setNormaCompactacaoModificada] = useState('')
  const [normacompactacaointermediaria, setNormaCompactacaoIntermediaria] = useState('')
  const [normamaximamininaareias, setNormaMaximaMininaAreias] = useState('')
  const [normaaparenteinsitucilindrocravacaos, setNormaAparenteINSITUCilindroCravacaos] = useState('')
  const [normacbr, setNormaCBR] = useState('')
  const [normacargaconstante, setNormaCargaConstante] = useState('')
  const [normacargavariavel, setNormaCargaVariavel] = useState('')

  const NormaRealGraos = [
    { label: "ABNT NBR 6458(2017)", value: 'ABNT NBR 6458(2017)' },
  ];
  const NormaTeorAgua = [
    { label: "ABNT NBR 6457/2016(Anexo A)", value: 'ABNT NBR 6457/2016(Anexo A)' },
  ];
  const NormaCorteDireto = [
    { label: "", value: '' },
  ];
  const NormaMassaEspecificaAparente = [
    { label: "ABNT NBR 16867(2021)", value: 'ABNT NBR 16867(2021)' },
  ];
  const NormaMebranaPlastica = [
    { label: "ASTM D 5030(2021)", value: 'ASTM D 5030(2021)' },
  ];
  const NormaLimiteLiquidezPlasticidade = [
    { label: "ABNT NBR 6459(2017) ABNT NBR 7180(2016)", value: 'ABNT NBR 6459(2017) ABNT NBR 7180(2016)' },
  ];
  const NormaGranulometriaPeneiramento = [
    { label: "ABNT NBR 17054(2016)", value: 'ABNT NBR 17054(2016)' },

  ];
  const NormaFrascoAreia = [
    { label: "ABNT NBR 7185(2016)", value: 'ABNT NBR 7185(2016)' }
  ];
  const NormaGranulometriaSedimentacao = [
    { label: "ABNT NBR 7181(2016)", value: 'ABNT NBR 7181(2016)' }
  ];
  const NormaHilf = [
    { label: "ABNT NBR 12102(2020)", value: "ABNT NBR 12102(2020)" }
  ];
  const NormaCompactacao = [
    { label: "ABNT NBR 7182(2020)", value: 'ABNT NBR 7182(2020)' }
  ];
  const NormaMaximaMininaAreias = [
    { label: "ABNT NBR 16840(2020)", value: 'ABNT NBR 16840(2020)' }
  ];
  const NormaAparenteINSITUCilindroCravacaos = [
    { label: "ABNT NBR 9813(2016)", value: 'ABNT NBR 9813(2016)' }
  ];
  const NormaCBR = [
    { label: "ABNT NBR 9895(2017)", value: 'ABNT NBR 9895(2017)' }
  ];
const NormaCargaConstante =[
  { label: "ABNT NBR 13292(2000)", value: 'ABNT NBR 13292(2000)'}
]
const NormaCargaVariavel =[
  { label: "ABNT NBR 14545(2000)", value: 'ABNT NBR 14545(2000)'}
]
  const [selectedOption, setSelectedOption] = useState(null);

  function stateintacta() {

    setIntacta(!intacta)
  }
  function deleteUser(id) { }

  function handleClose() { setShow(false) }
  const handleShow = () => setShow(true);

  function handleClose1() { setShow1(false) }
  const handleShow1 = () => setShow1(true);

  function handleClose2() { setShow2(false) }
  const handleShow2 = () => setShow2(true);

  function handleClose3() { setShow3(false) }
  const handleShow3 = () => setShow3(true);

  function handleClose4() { setShow4(false) }
  const handleShow4 = () => setShow4(true)

  function handleClose5() { setShow5(false) }
  const handleShow5 = () => setShow5(true)
  // function get() {
  //   if (amostra === 'Todas Amostras') {

  //     getItem()
  //     mr()
  //   } else {
  //     getItem2()
  //     // mr2()
  //   }

  // }
  function SalvarIntacta() {
    add(intactaremexida)
  }
  function SalvarCompactacao() {
    add2(intactaremexida)
  }
  function SalvarColapso() {
    add3(intactaremexida)
  }
  function SalvarCompressibilidade() {
    add4(intactaremexida)
  }
  function SalvarPermebilidade() {
    add6(intactaremexida)
  }
  function SalvarResistenciaDeformabilidade() {
    add5(intactaremexida)
  }
  //Resistência e deformabilidade
  // function SalvarCompressibilidade(){
  //   add4(intactaremexida)
  //   }
  function TesteIf() {

    const listcabecalho = [];
    const listvalor = [];


    if (massavolumica > 0 && massavolumica !== null && massavolumica !== '') {

      const massavol = listcabecalho.push("MV");
    }

    if (teoragua > 0 && teoragua !== null && teoragua !== '') {

      const teoragua = listcabecalho.push("TW");


    }
    if (cortedirecto > 0 && cortedirecto !== null && cortedirecto !== '') {
      const RCorteDirecto = listcabecalho.push("CD");
    }
    if (materiaorganica > 0 && materiaorganica !== null && materiaorganica !== '') {
      const RMateriaOrganica = listcabecalho.push("PMO");
    }
    if (ph > 0 && ph !== null && ph !== '') {
      const RPH = listcabecalho.push("PH");
    }
    if (densidadeparticulas > 0 && densidadeparticulas !== null && densidadeparticulas !== '') {
      const RDensidadeParticulas = listcabecalho.push("G");
    }
    if (limitesliquidezmcp > 0 && limitesliquidezmcp !== null && limitesliquidezmcp !== '') {
      const RLimitesLiquidezMCP = listcabecalho.push("LLP-MCP");
    }
    if (limitesplasticidade > 0 && limitesplasticidade !== null && limitesplasticidade !== '') {
      const RLimitesPlasticidade = listcabecalho.push("LLP");
    }
    if (limitesretraccao > 0 && limitesretraccao !== null && limitesretraccao !== '') {
      const RLimitesRetraccao = listcabecalho.push("LR");
    }
    if (teorsulfatos > 0 && teorsulfatos !== null && teorsulfatos !== '') {
      const RTeorSulfatos = listcabecalho.push("TS");
    }
    if (teorcloretos > 0 && teorcloretos !== null && teorcloretos !== '') {
      const RTeorCloretos = listcabecalho.push("TC");
    }
    if (teorcarbonatos > 0 && teorcarbonatos !== null && teorcarbonatos !== '') {
      const RTeorCarbonatos = listcabecalho.push("TC");
    }
    if (acidezbgully > 0 && acidezbgully !== null && acidezbgully !== '') {
      const RAcidezBGully = listcabecalho.push("AciBG");
    }
    if (peneiracao > 0 && peneiracao !== null && peneiracao !== '') {
      const RPeneiracao = listcabecalho.push("PEN");
    }
    if (azulmetileno > 0 && azulmetileno !== null && azulmetileno !== '') {
      const RAzulMetileno = listcabecalho.push("AZ");
    }
    if (frascoareia > 0 && frascoareia !== null && frascoareia !== '') {
      const RFrascoAreia = listcabecalho.push("ME-FA");
    }
    if (peneiracaosedimentacao > 0 && peneiracaosedimentacao !== null && peneiracaosedimentacao !== '') {
      const RPeneiracaoSedimentacao = listcabecalho.push("SED");
    }
    if (metodohilf > 0 && metodohilf !== null && metodohilf !== '') {
      const RMetodoHilf = listcabecalho.push("ME-H");
    }
    if (coeficientefriabilidade > 0 && coeficientefriabilidade !== null && coeficientefriabilidade !== '') {
      const RCoeficienteFriabilidade = listcabecalho.push("3");
    }
    if (resistividadeeletricaprovetesolo > 0 && resistividadeeletricaprovetesolo !== null && resistividadeeletricaprovetesolo !== '') {
      const RResistividadeEletricaProveteSolo = listcabecalho.push("REPS");
    }
    if (compactacaonormal > 0 && compactacaonormal !== null && compactacaonormal !== '') {
      const RCompactacaoNormal = listcabecalho.push("PROT");
    }
    if (compactacaointermediaria > 0 && compactacaointermediaria !== null && compactacaointermediaria !== '') {
      const RCompactacaoIntermediaria = listcabecalho.push("PROT-I");
    }
    if (compactacaomodificada > 0 && compactacaomodificada !== null && compactacaomodificada !== '') {
      const RCompactacaoModificada = listcabecalho.push("PROT-M");
    }
    if (baridadesmaximaminima > 0 && baridadesmaximaminima !== null && baridadesmaximaminima !== '') {
      const RBaridadesMaximaMinima = listcabecalho.push("YMm");
    }
    if (compactacaovibrocompactacao > 0 && compactacaovibrocompactacao !== null && compactacaovibrocompactacao !== '') {
      const RCompactacaoVibrocompactacao = listcabecalho.push("PROT-V");
    }
    if (cbrsemmoldagem > 0 && cbrsemmoldagem !== null && cbrsemmoldagem !== '') {
      const RCBRSemMoldagem = listcabecalho.push("ISC-sm");
    }
    if (cbrcommoldagem > 0 && cbrcommoldagem !== null && cbrcommoldagem !== '') {
      const RCBRComMoldagem = listcabecalho.push("ISC-m");
    }
    if (ensaiocbr > 0 && ensaiocbr !== null && ensaiocbr !== '') {
      const REnsaioCBR = listcabecalho.push("ISC");
    }
    if (potenciacolapso > 0 && potenciacolapso !== null && potenciacolapso !== '') {
      const RPotenciaColapso = listcabecalho.push("PC");
    }
    if (indiceexpansibilidade > 0 && indiceexpansibilidade !== null && indiceexpansibilidade !== '') {
      const RIndiceExpansibilidade = listcabecalho.push("IE");
    }
    if (expansibilidadepotenciaexpansao > 0 && expansibilidadepotenciaexpansao !== null && expansibilidadepotenciaexpansao !== '') {
      const RExpansibilidadePotenciaExpansao = listcabecalho.push("EPE");
    }
    if (ensaioexpansibilidade > 0 && ensaioexpansibilidade !== null && ensaioexpansibilidade !== '') {
      const REnsaioExpansibilidade = listcabecalho.push("EE");
    }
    if (ensaioexpansibilidadelambe > 0 && ensaioexpansibilidadelambe !== null && ensaioexpansibilidadelambe !== '') {
      const REnsaioExpansibilidadeLambe = listcabecalho.push("EEL");
    }
    if (expansibilidadeedometro > 0 && expansibilidadeedometro !== null && expansibilidadeedometro !== '') {
      const RExpansibilidadeEdometro = listcabecalho.push("EEE");
    }
    if (potenciaexpansao > 0 && potenciaexpansao !== null && potenciaexpansao !== '') {
      const RPotenciaExpansao = listcabecalho.push("PE");
    }
    if (indicecolapso > 0 && indicecolapso !== null && indicecolapso !== '') {
      const RIndiceColapso = listcabecalho.push("IC");
    }
    if (ensaiodispersabilidade > 0 && ensaiodispersabilidade !== null && ensaiodispersabilidade !== '') {
      const REnsaioDispersabilidade = listcabecalho.push("ED");
    }
    if (resilientetriaxiala > 0 && resilientetriaxiala !== null && resilientetriaxiala !== '') {
      const RResilienteTriaxialA = listcabecalho.push("RTa");
    }
    if (resilientetriaxialb > 0 && resilientetriaxialb !== null && resilientetriaxialb !== '') {
      const RResilienteTriaxialB = listcabecalho.push("RTb");
    }
    if (permanentestriaxiala > 0 && permanentestriaxiala !== null && permanentestriaxiala !== '') {
      const RResilienteTriaxialA = listcabecalho.push("PER-a");
    }
    if (permanentestriaxialb > 0 && permanentestriaxialb !== null && permanentestriaxialb !== '') {
      const RPermanentesTriaxialB = listcabecalho.push("PER-b");
    }
    if (compressaosimples > 0 && compressaosimples !== null && compressaosimples !== '') {
      const RCompressaoSimples = listcabecalho.push("RCS");
    }
    if (ensaiomolhagemsecagem > 0 && ensaiomolhagemsecagem !== null && ensaiomolhagemsecagem !== '') {
      const REnsaioMolhagemSecagem = listcabecalho.push("E.M.S");
    }
    if (endometro > 0 && endometro !== null && endometro !== '') {
      const REdometro = listcabecalho.push("EDO");
    }
    if (ensaioedometrodccs > 0 && ensaioedometrodccs !== null && ensaioedometrodccs !== '') {
      const REnsaioEdometroDCCS = listcabecalho.push("EDOccs");
    }
    if (consolidacaohidraulica > 0 && consolidacaohidraulica !== null && consolidacaohidraulica !== '') {
      const RConsolidacaoHidraulica = listcabecalho.push("CH");
    }
    if (consolidacaotriaxial > 0 && consolidacaotriaxial !== null && consolidacaotriaxial !== '') {
      const RConsolidacaoTriaxial = listcabecalho.push("CIU");
    }
    if (resistenciacompressaounixial > 0 && resistenciacompressaounixial !== null && resistenciacompressaounixial !== '') {
      const RResistenciaCompressaoUnixial = listcabecalho.push("RCU");

    }
    if (triaxialnaoconsolidadouu > 0 && triaxialnaoconsolidadouu !== null && triaxialnaoconsolidadouu !== '') {
      const RTriaxialNaoConsolidadoUU = listcabecalho.push("TNCUU");

    }
    if (triaxialnaoconsolidadocu > 0 && triaxialnaoconsolidadocu !== null && triaxialnaoconsolidadocu !== '') {
      const RTriaxialNaoConsolidadoCU = listcabecalho.push("TNCCU");

    }
    if (triaxialnaoconsolidadocd > 0 && triaxialnaoconsolidadocd !== null && triaxialnaoconsolidadocd !== '') {
      const RTriaxialNaoConsolidadoCD = listcabecalho.push("TNCC");

    }
    if (triaxialsigmaconstante > 0 && triaxialsigmaconstante !== null && triaxialsigmaconstante !== '') {
      const RTriaxialSigmaConstante = listcabecalho.push("TS1C");

    }
    if (patamarconsolidacaoanisotropica > 0 && patamarconsolidacaoanisotropica !== null && patamarconsolidacaoanisotropica !== '') {
      const RPatamarConsolidacaoAnisotropica = listcabecalho.push("PCA");

    }
    if (ensaiotriaxialmultifasicocu > 0 && ensaiotriaxialmultifasicocu !== null && ensaiotriaxialmultifasicocu !== '') {
      const REnsaioTriaxialMultifasicoCU = listcabecalho.push("TRIX CU");

    }
    if (ensaiotriaxialmultifasicocd > 0 && ensaiotriaxialmultifasicocd !== null && ensaiotriaxialmultifasicocd !== '') {
      const REnsaioTriaxialMultifasicoCD = listcabecalho.push("TRIX CD");

    }
    if (ensaiocortenaoconsolidadonaodrenadouu > 0 && ensaiocortenaoconsolidadonaodrenadouu !== null && ensaiocortenaoconsolidadonaodrenadouu !== '') {
      const REnsaioCorteNaoConsolidadoNaoDrenadoUU = listcabecalho.push("ECCNDUU");

    }
    if (ensaiocorteconsolidadonaodrenadocu > 0 && ensaiocorteconsolidadonaodrenadocu !== null && ensaiocorteconsolidadonaodrenadocu !== '') {
      const REnsaioCorteConsolidadoNaoDrenadoCU = listcabecalho.push("ECCNDCU");
    }
    if (ensaiocorteconsolidadonaodrenadocd > 0 && ensaiocorteconsolidadonaodrenadocd !== null && ensaiocorteconsolidadonaodrenadocd !== '') {
      const REnsaioCorteConsolidadoNaoDrenadoCD = listcabecalho.push("ECCNDCD");
    }

    const obj = [{ t0: listcabecalho[0], t1: listcabecalho[1], t2: listcabecalho[2], t3: listcabecalho[3], t4: listcabecalho[4], t5: listcabecalho[5], t6: listcabecalho[6], t7: listcabecalho[7], t8: listcabecalho[8], t9: listcabecalho[9], t10: listcabecalho[10], t11: listcabecalho[11] }];

    // listarRelatorio()

    const data = [{ name: "John Doe", "age": 44 }, { name: "Jane Doe", "age": 45 }]
    let persons = [];
    for (let i = 0; i < data.length; i++) {
      persons.push(data[i].name, data[i].age)
    }

    console.log(persons)
    //clientesPDF(lista, obj)
  }

  async function add(tipo) {

    if (amostra === 'Todas Amostras') {

      const obj = { processo, massavolumica, teoragua, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo: resistividadeeletricaprovetesolo,normarealgrao, normateoragua, normacortedireto, normamassaespecificaaparente, normamebranaplastica, normalimiteliquidezplasticidade, normagranulometriapeneiramento, normafrascoareia, normagranulometriasedimentacao, normahilf, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoIntacta.php', obj);

      if (res.data.success === true) {
        setSucesso('S');
        listarDados(intactaremexida)
        handleClose()
      } else {
        setSucesso('N');
      }
    } else {
      const obj = { processo, amostra, massavolumica, teoragua, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo: resistividadeeletricaprovetesolo, normarealgrao, normateoragua, normacortedireto, normamassaespecificaaparente, normamebranaplastica, normalimiteliquidezplasticidade, normagranulometriapeneiramento, normafrascoareia, normagranulometriasedimentacao, normahilf, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoIntactaAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso('S');
        listarDados(intactaremexida)
        handleClose()
      } else {
        setSucesso('N');
      }
    }

  };
  async function add2(tipo) {
    if (amostra === 'Todas Amostras') {
      const obj = { processo, compactacaonormal, compactacaointermediaria, compactacaomodificada, baridadesmaximaminima, compactacaovibrocompactacao, cbrsemmoldagem, cbrcommoldagem, ensaiocbr, cbrimediato, normacompactacao, normacompactacaomodificada, normacompactacaointermediaria, normamaximamininaareias, normaaparenteinsitucilindrocravacaos, normacbr, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoCompactacao.php', obj);

      if (res.data.success === true) {
        setSucesso1('S');
        listarDados(tipo)
        handleClose1()
      } else {
        setSucesso1('N');
      }

    } else {
      const obj = { processo, amostra, compactacaonormal, compactacaointermediaria, compactacaomodificada, baridadesmaximaminima, compactacaovibrocompactacao, cbrsemmoldagem, cbrcommoldagem, ensaiocbr, cbrimediato, normacompactacao, normacompactacaomodificada, normacompactacaointermediaria, normamaximamininaareias, normaaparenteinsitucilindrocravacaos, normacbr, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoCompactacaoAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso1('S');
        listarDados(tipo)
        handleClose1()
      } else {
        setSucesso1('N');
      }
    }
  };

  async function add3(tipo) {

    if (amostra === 'Todas Amostras') {
      const obj = { processo, potenciacolapso, indiceexpansibilidade, expansibilidadepotenciaexpansao, ensaioexpansibilidade, ensaioexpansibilidadelambe, expansibilidadeedometro, potenciaexpansao, indicecolapso, ensaiodispersabilidade, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoColapso.php', obj);

      if (res.data.success === true) {
        setSucesso2('S');
        listarDados(tipo)
        handleClose2()
      } else {
        setSucesso2('N');
      }

    } else {
      const obj = { processo, amostra, potenciacolapso, indiceexpansibilidade, expansibilidadepotenciaexpansao, ensaioexpansibilidade, ensaioexpansibilidadelambe, expansibilidadeedometro, potenciaexpansao, indicecolapso, ensaiodispersabilidade, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoColapsoAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso2('S');
        listarDados(tipo)
        handleClose2()
      } else {
        setSucesso2('N');
      }
    }
  };

  async function add4(tipo) {

    if (amostra === 'Todas Amostras') {
      const obj = { processo, endometro, ensaioedometrodccs, consolidacaohidraulica, consolidacaotriaxial, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoCompressibilidade.php', obj);

      if (res.data.success === true) {
        setSucesso4('S');
        listarDados(tipo)
        handleClose3()
      } else {
        setSucesso4('N');
      }

    } else {
      const obj = { processo, amostra, endometro, ensaioedometrodccs, consolidacaohidraulica, consolidacaotriaxial, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoCompressibilidadeAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso4('S');
        listarDados(tipo)
        handleClose3()
      } else {
        setSucesso4('N');
      }
    }
  };

  async function add5(tipo) {

    if (amostra === 'Todas Amostras') {
      const obj = { processo, resistenciacompressaounixial, triaxialnaoconsolidadouu, triaxialnaoconsolidadocu, triaxialnaoconsolidadocd, triaxialsigmaconstante, patamarconsolidacaoanisotropica, ensaiotriaxialmultifasicocu, ensaiotriaxialmultifasicocd, ensaiocortenaoconsolidadonaodrenadouu, ensaiocorteconsolidadonaodrenadocu, ensaiocorteconsolidadonaodrenadocd, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoResistenciaDeformidade.php', obj);

      if (res.data.success === true) {
        setSucesso5('S');
        listarDados(tipo)
        handleClose5()
      } else {
        setSucesso5('N');
      }

    } else {
      const obj = { processo, amostra, resistenciacompressaounixial, triaxialnaoconsolidadouu, triaxialnaoconsolidadocu, triaxialnaoconsolidadocd, triaxialsigmaconstante, patamarconsolidacaoanisotropica, ensaiotriaxialmultifasicocu, ensaiotriaxialmultifasicocd, ensaiocortenaoconsolidadonaodrenadouu, ensaiocorteconsolidadonaodrenadocu, ensaiocorteconsolidadonaodrenadocd, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoResistenciaDeformidadeAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso5('S');
        listarDados(tipo)
        handleClose5()
      } else {
        setSucesso5('N');
      }
    }
  };
  async function add6(tipo) {


    if (amostra === 'Todas Amostras') {
      const obj = { processo, permeabilidadeconstante,permeabilidadevariavel,normacargaconstante
        ,normacargavariavel, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoPermeabilidade.php', obj);

      if (res.data.success === true) {
        setSucesso6('S');
        listarDados(tipo)
        handleClose4()
        console.log(sucesso,res.data.success)
      } else {
        setSucesso6('N');
      }

    } else {
      const obj = { processo, amostra, endometro, ensaioedometrodccs, consolidacaohidraulica, consolidacaotriaxial, tipo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoCompressibilidadeAmostra.php', obj);

      if (res.data.success === true) {
        setSucesso4('S');
        listarDados()
        handleClose3()
      } else {
        setSucesso4('N');
      }
    }

  }
  function BuscarIntacta() {
    if(processo !==''){
      setAlertaProcesso(false)
    listarDados('I')
    setIntactaRemexida('I')
    getItem('I')
    stateintacta()
    }else{
      setAlertaProcesso(true)
    }
  }
  function BuscarRemexida() {
    if(processo !==''){
      setAlertaProcesso(false)
    setLista2([])

    listarDados('R')
    setIntactaRemexida('R')
    getItem('R')
    stateintacta()
  }else{
    setAlertaProcesso(true)
  }
  }
  async function listarDados(tipo) {
    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntacta.php?Processo=' + processo + '&' + 'TipoEnsaio=' + tipo);
    console.log(res)
    if (res.data.success === true) {
      setLista(res.data.result);
      console.log(res.data.result, amostracadastrada)
      setTexto(res.data.success)
      listarDados2(tipo)
      setAmostraCadastrad(false);
    } else {
      setAmostraCadastrad(true);

    }
  }
  async function listarDados2(tipo) {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntactaFilter.php?Processo=' + processo + '&' + 'TipoEnsaio=' + tipo);

    setLista2(res.data.result);
    // setMassaVolumica(res.data.result[0].MassaVolumica)
    setListaMaterial(listacontrolelama)


  }

  async function getItem(tipo) {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntacta.php?Processo=' + processo + '&' + 'TipoEnsaio=' + tipo);

    if (res.data.success) {
      mr(res.data.result);
      setListaAmostra(res.data.result)
    }

  }
  async function listarRelatorio() {
    const res = await axios.get(Conexao.api + 'FiltrarRelatorio.php');

    if (res.data.success === true) {
      setLista3(res.data.result);
      // const arrayFiltrado = array1.filter(valor => valor !== null && valor !== '0');

      console.log(lista3);
      const arrayOriginal = [0, 1, null, 3, 0, null, 5];

      // Filtrar valores nulos e zeros
      const arrayFiltrado = arrayOriginal.filter(valor => valor !== null && valor !== 0);

      console.log(arrayFiltrado);
    } else {


    }
  }
  async function getItem2() {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntactaAmostra.php?amostra=' + amostra);

    mr2(res.data.result)

  }
  async function mr(lista) {

    lista.map((client) => {
      return setMassaVolumica(client.MassaVolumica),
        setTeorAgua(client.TeorAgua),
        setCorteDirecto(client.CorteDirecto),
        setMateriaOrganica(client.MateriaOrganica),
        setPH(client.PH),
        setDensidadeParticulas(client.DensidadeParticulas),
        setLimitesLiquidezMCP(client.LimitesLiquidezMCP),
        setLimitesPlasticidade(client.LimitesPlasticidade),
        setLimitesRetraccao(client.LimitesRetraccao),
        setTeorSulfatos(client.TeorSulfatos),
        setTeorCloretos(client.TeorCloretos),
        setTeorCarbonatos(client.TeorCarbonatos),
        setAcidezBGully(client.AcidezBGully),
        setPeneiracao(client.Peneiracao),
        setAzulMetileno(client.AzulMetileno),
        setFrascoAreia(client.FrascoAreia),
        setPeneiracaoSedimentacao(client.PeneiracaoSedimentacao),
        setMetodoHilf(client.MetodoHilf),
        setCoeficienteFriabilidade(client.CoeficienteFriabilidade),
        setResistividadeEletricaProveteSolo(client.ResistividadeEletricaProveteSolo),
        setCompactacaoNormal(client.CompactacaoNormal),
        setCompactacaoModificada(client.CompactacaoModificada),
        setCompactacaoIntermediaria(client.CompactacaoIntermediaria),
        setBaridadesMaximaMinima(client.BaridadesMaximaMinima),
        setCompactacaoVibrocompactacao(client.CompactacaoVibrocompactacao),
        setCBRSemMoldagem(client.CBRSemMoldagem),
        setCBRComMoldagem(client.CBRComMoldagem),
        setEnsaioCBR(client.EnsaioCBR),
        setCBRImediato(client.CBRImediato),
        setPotenciaColapso(client.PotenciaColapso),
        setIndiceExpansibilidade(client.IndiceExpansibilidade),
        setExpansibilidadePotenciaExpansao(client.ExpansibilidadePotenciaExpansao),
        setEnsaioExpansibilidade(client.EnsaioExpansibilidade),
        setEnsaioExpansibilidadeLambe(client.EnsaioExpansibilidadeLambe),
        setExpansibilidadeEdometro(client.ExpansibilidadeEdometro),
        setPotenciaExpansao(client.PotenciaExpansao),
        setIndiceColapso(client.IndiceColapso),
        setEnsaioDispersabilidade(client.EnsaioDispersabilidade),
        setEdometro(client.Edometro),
        setEnsaioEdometroDCCS(client.Ensaio_Edometro_DCCS),
        setConsolidacaoHidraulica(client.Consolidacao_Hidraulica),
        setConsolidacaoTriaxial(client.Consolidacao_Triaxial),
        setResistenciaCompressaoUnixial(client.Resistencia_Por_Compressao_Unixial),
        setTriaxialNaoConsolidadoUU(client.Triaxial_Nao_Consolidado_UU),
        setTriaxialNaoConsolidadoCU(client.Triaxial_Nao_Consolidado_CU),
        setTriaxialNaoConsolidadoCD(client.Triaxial_Nao_Consolidado_CD),
        setTriaxialSigmaConstante(client.Triaxial_Sigma_1_Constante),
        setPatamarConsolidacaoAnisotropica(client.Patamar_de_Consolidacao_Anisotropica),
        setEnsaioTriaxialMultifasicoCU(client.Ensaio_Triaxial_Multifasico_CU),
        setEnsaioTriaxialMultifasicoCD(client.Ensaio_Triaxial_Multifasico_CD),
        setEnsaioCorteNaoConsolidadoNaoDrenadoUU(client.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_UU),
        setEnsaioCorteConsolidadoNaoDrenadoCU(client.Ensaio_Corte_Consolidado_Nao_Drenado_CU),
        setEnsaioCorteConsolidadoNaoDrenadoCD(client.Ensaio_Corte_Consolidado_Nao_Drenado_CD),
        setPermeabilidadeConstante(client.PermeabilidadeConstante),
        setPermeabilidadeVariavel(client.PermeabilidadeVariavel),
        setNormaRealGrao(client.NormaAnaliseGranulometrica),
        setNormaTeorAgua(client.NormaTeorAgua),
        setNormaCorteDireto(client.NormaCorteDireto),
        setNormaMassaEspecificaAparente(client.NormaMassaEspecificaAparente),
        setNormaNormaMebranaPlastica(client.NormaMebranaPlastica),
        setNormaLimiteLiquidezPlasticidade(client.NormaLimiteLiquidezPlasticidade),
        setNormaGranulometriaPeneiramento(client.NormaGranulometriaPeneiramento),
        setNormaFrascoAreia(client.NormaFrascoAreia),
        setNormaGranulometriaSedimentacao(client.NormaGranulometriaSedimentacao),
        setHilf(client.NormaHilf),

        setNormaCompactacao(client.NormaCompactacao),
        setNormaCompactacaoModificada(client.NormaCompactacaoModificada),
        setNormaCompactacaoIntermediaria(client.NormaCompactacaoIntermediaria),
        setNormaMaximaMininaAreias(client.NormaMaximaMininaAreias),
        setNormaAparenteINSITUCilindroCravacaos(client.NormaAparenteinsituCilindroCravacaos),
        setNormaCBR(client.NormaCBR)
    })


  }

  async function mr2(lista) {

    lista.map((client) => {
      return setMassaVolumica(client.MassaVolumica),
        setTeorAgua(client.TeorAgua),
        setCorteDirecto(client.CorteDirecto),
        setMateriaOrganica(client.MateriaOrganica),
        setPH(client.PH),
        setDensidadeParticulas(client.DensidadeParticulas),
        setLimitesLiquidezMCP(client.LimitesLiquidezMCP),
        setLimitesPlasticidade(client.LimitesPlasticidade),
        setLimitesRetraccao(client.LimitesRetraccao),
        setTeorSulfatos(client.TeorSulfatos),
        setTeorCloretos(client.TeorCloretos),
        setTeorCarbonatos(client.TeorCarbonatos),
        setAcidezBGully(client.AcidezBGully),
        setPeneiracao(client.Peneiracao),
        setAzulMetileno(client.AzulMetileno),
        setFrascoAreia(client.FrascoAreia),
        setPeneiracaoSedimentacao(client.PeneiracaoSedimentacao),
        setMetodoHilf(client.MetodoHilf),
        setCoeficienteFriabilidade(client.CoeficienteFriabilidade),
        setResistividadeEletricaProveteSolo(client.ResistividadeEletricaProveteSolo),
        setCompactacaoNormal(client.CompactacaoNormal),
        setCompactacaoModificada(client.CompactacaoModificada),
        setCompactacaoIntermediaria(client.CompactacaoIntermediaria),
        setBaridadesMaximaMinima(client.BaridadesMaximaMinima),
        setCompactacaoVibrocompactacao(client.CompactacaoVibrocompactacao),
        setCBRSemMoldagem(client.CBRSemMoldagem),
        setCBRComMoldagem(client.CBRComMoldagem),
        setEnsaioCBR(client.EnsaioCBR),
        setCBRImediato(client.CBRImediato),
        setPotenciaColapso(client.PotenciaColapso),
        setIndiceExpansibilidade(client.IndiceExpansibilidade),
        setExpansibilidadePotenciaExpansao(client.ExpansibilidadePotenciaExpansao),
        setEnsaioExpansibilidade(client.EnsaioExpansibilidade),
        setEnsaioExpansibilidadeLambe(client.EnsaioExpansibilidadeLambe),
        setExpansibilidadeEdometro(client.ExpansibilidadeEdometro),
        setPotenciaExpansao(client.PotenciaExpansao),
        setIndiceColapso(client.IndiceColapso),
        setEnsaioDispersabilidade(client.EnsaioDispersabilidade),
        setEdometro(client.Endometro),
        setEnsaioEdometroDCCS(client.Ensaio_Edometro_DCCS),
        setConsolidacaoHidraulica(client.Consolidacao_Hidraulica),
        setConsolidacaoTriaxial(client.Consolidacao_Triaxial),
        setResistenciaCompressaoUnixial(client.Resistencia_Por_Compressao_Unixial),
        setTriaxialNaoConsolidadoUU(client.Triaxial_Nao_Consolidado_UU),
        setTriaxialNaoConsolidadoCU(client.Triaxial_Nao_Consolidado_CU),
        setTriaxialNaoConsolidadoCD(client.Triaxial_Nao_Consolidado_CD),
        setTriaxialSigmaConstante(client.Triaxial_Sigma_1_Constante),
        setPatamarConsolidacaoAnisotropica(client.Patamar_de_Consolidacao_Anisotropica),
        setEnsaioTriaxialMultifasicoCU(client.Ensaio_Triaxial_Multifasico_CU),
        setEnsaioTriaxialMultifasicoCD(client.Ensaio_Triaxial_Multifasico_CD),
        setEnsaioCorteNaoConsolidadoNaoDrenadoUU(client.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_UU),
        setEnsaioCorteConsolidadoNaoDrenadoCU(client.Ensaio_Corte_Consolidado_Nao_Drenado_CU),
        setEnsaioCorteConsolidadoNaoDrenadoCD(client.Ensaio_Corte_Consolidado_Nao_Drenado_CD),
        setPermeabilidadeConstante(client.PermeabilidadeConstante),
        setPermeabilidadeVariavel(client.PermeabilidadeVariavel)
    })


  }
  let handleAmostraChange = (e) => {
    setAmostra(e.target.value);
  };
  function Contador() {

    if (cont < 100) {
      setcont(cont + 1)

    }

  }
  function Contador2() {

    if (cont2 < 10) {
      setcont2(cont2 + 1)

    }

  }
  function RecuperaValor(tipo) {


    if (cont >= 80) {
      getItem(tipo)

    }

  }
  useEffect(() => {
    if (intacta && cont < 99) {
      Contador()
      RecuperaValor(intactaremexida)

    }
    // if(show){
    //   Contador2()
    // }else{
    // setcont2(0)
    // }

    if (show === false && show1 !== true && show2 !== true & show3 === false & show5 === false) {
      setSucesso("N")
      setAmostra('Todas Amostras')
    }
    if (show1 === false && show2 !== true && show !== true & show3 === false & show5 === false) {
      setSucesso1("N")
      setAmostra('Todas Amostras')
    }
    if (show2 === false && show1 === false && show !== true && show3 === false & show5 === false) {
      setSucesso2("N")
      setAmostra('Todas Amostras')
    }
    if (show3 === false && show === false && show1 !== true && show2 !== true & show5 === false) {
      setSucesso3("N")
      setAmostra('Todas Amostras')

    }
    if (show3 === false && show === false && show1 !== true && show2 !== true & show5 === false) {
      setSucesso6("N")
      setAmostra('Todas Amostras')
    }
  })

  return <div>
    <Navbar />
    {/* <Pdf targetRef={ref} filename="Programacao.pdf" options={options} x={.2} y={.5} scale={1} >
      {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
    </Pdf> clientesPDF(lista, lista3)*/}
    <div className="container-fluid titulo">
      <div className="row" >
        <div className="col-8">
          <div className="input-group mb-3">

            <input onChange={(e) => setProcesso(e.target.value)} type="text" className="form-control" placeholder="Pesquisar processo" aria-describedby="button-addon2" />

          </div>
        </div>
      </div>
      <div >

        {texto !== '' ? <button onClick={(e) => TesteIf()} className="btnnavintacta" type="button" id="button-addon2"><i className="far fa-file-pdf"></i> Gerar PDF</button> : null}

        <button className="btnnavintacta" type="button" id="button-addon2" onClick={(e) => BuscarIntacta()}>  Intacta</button>
        <button className="btnnavintacta" type="button" id="button-addon2" onClick={(e) => BuscarRemexida()}> Remexida</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Rocha</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Agregados e Inerte</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Água</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Argamassa e Concretos</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Betuminosos</button>
        <button className="btnnavintacta" type="button" id="button-addon2" >Enrocamento</button>
      </div>
      <br />
      <div>
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow}> Programação Índice físicos </button> : null}
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow1}> Programação Compactação</button> : null}
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow2}> Expansibilidade de colapso</button> : null}
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow4}> Permeabilidade</button> : null}
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow3}> Compressibilidade</button> : null}
        {intacta !== false ? <button className="btnnavintacta" type="button" id="button-addon2" onClick={handleShow5}>Resistência e deformabilidade </button> : null}
      </div>
      <br />
      {amostracadastrada === true ? <div className="alert alert-danger mt-2" role="alert">Não a Processo Cadastrado</div> : null}
      {alertaprocesso === true ? <div className="alert alert-danger mt-2" role="alert">Favor Digitar um Processo</div> : null}
      <div  >
        <ListaProgramacaoGrid arrayClientes={lista} arrayClientes2={lista2} />
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
          reverseButtons={true}
        >
          Deseja excluir o cliente selecionado?
        </SweetAlert> : null}

    </div>
    <Modal show={show} onHide={handleClose}  >
      <Modal.Header closeButton>
        <Modal.Title>PROGRAMAÇÃO ÍNDICE FÍSICOS</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>MASSA ESPECÍFICA REAL EM GRÃOS </Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setMassaVolumica(e.target.value) }}
              value={massavolumica}
              autoFocus
            />
            <Form.Label>Normas {normarealgrao}</Form.Label>
            <Select


              options={NormaRealGraos}
              onChange={item => {
                setNormaRealGrao(item.value);

              }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DO TEOR EM ÁGUA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTeorAgua(e.target.value) }}
              value={teoragua}

            />
            <Form.Label>Normas {normateoragua}</Form.Label>
            <Select
              options={NormaTeorAgua}
              onChange={item => {
                setNormaTeorAgua(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CORTE DIRETO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCorteDirecto(e.target.value) }}
              value={cortedirecto}

            />
            <Form.Label>Normas {normacortedireto}</Form.Label>
            <Select

              options={NormaCorteDireto}
              onChange={item => {
                setNormaCorteDireto(item.value)

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>MASSA ESPECIFICA APARENTE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setMateriaOrganica(e.target.value) }}
              value={materiaorganica}
            />
            <Form.Label>Normas {normamassaespecificaaparente}</Form.Label>
            <Select
              options={NormaMassaEspecificaAparente}
              onChange={item => {
                setNormaMassaEspecificaAparente(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DO PH</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setPH(e.target.value) }}
              value={ph}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DENSIDADE DAS PARTÍCULAS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setDensidadeParticulas(e.target.value) }}
              value={densidadeparticulas}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO MASSA APARENTE IN SITU MEMBRANA PLASTICA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setLimitesLiquidezMCP(e.target.value) }}
              value={limitesliquidezmcp}
            />
            <Form.Label>Normas {normamebranaplastica}</Form.Label>
            <Select
              options={NormaMebranaPlastica}
              onChange={item => {
                setNormaNormaMebranaPlastica(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>LIMITE DE LIQUIDEZ E PLASTICIDADE
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setLimitesPlasticidade(e.target.value) }}
              value={limitesplasticidade}
            />
            <Form.Label>Normas {normalimiteliquidezplasticidade}</Form.Label>
            <Select
              options={NormaLimiteLiquidezPlasticidade}
              onChange={item => {
                setNormaLimiteLiquidezPlasticidade(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>LIMITE DE RETRACÇÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setLimitesRetraccao(e.target.value) }}
              value={limitesretraccao}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TEOR EM SULFATOS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTeorSulfatos(e.target.value) }}
              value={teorsulfatos}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TEOR EM CLORETOS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTeorCloretos(e.target.value) }}
              value={teorcloretos}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TEOR EM CARBONATOS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTeorCarbonatos(e.target.value) }}
              value={teorcarbonatos}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ACIDEZ BAUMANN-GULLY </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setAcidezBGully(e.target.value) }}
              value={acidezbgully}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ANÁLISE GRANULOMÉTRICA POR PENEIRAÇÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setPeneiracao(e.target.value) }}
              value={peneiracao}
            />
            <Form.Label>Normas {normagranulometriapeneiramento}</Form.Label>
            <Select
              options={NormaGranulometriaPeneiramento}
              onChange={item => {
                setNormaGranulometriaPeneiramento(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DO AZUL DE METILENO (TESTE DA MANCHA)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setAzulMetileno(e.target.value) }}
              value={azulmetileno}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>FRASCO DE AREIA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setFrascoAreia(e.target.value) }}
              value={frascoareia}
            />
            <Form.Label>Normas {normafrascoareia}</Form.Label>
            <Select
              options={NormaFrascoAreia}
              onChange={item => {
                setNormaFrascoAreia(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ANÁLISE GRANULOMÉTRICA POR SEDIMENTAÇÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setPeneiracaoSedimentacao(e.target.value) }}
              value={peneiracaosedimentacao}
            />
            <Form.Label>Normas {normagranulometriasedimentacao}</Form.Label>
            <Select
              options={NormaGranulometriaSedimentacao}
              onChange={item => {
                setNormaGranulometriaSedimentacao(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DO COEFICIENTE DE FRIABILIDADE DAS AREIAS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCoeficienteFriabilidade(e.target.value) }}
              value={coeficientefriabilidade}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CONTROLE DE COMPACTAÇÃO MÉTODO DE HILF</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setMetodoHilf(e.target.value) }}
              value={metodohilf}
            />
            <Form.Label>Normas {normahilf}</Form.Label>
            <Select
              options={NormaHilf}
              onChange={item => {
                setHilf(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DA RESISITIVIDADE ELÉTRICA DE UM PROVETE DE SOLO</Form.Label>
            <Form.Control
              type="number"
              onChange={setResistividadeEletricaProveteSolo}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Fechar
        </Button>

        <Button onClick={SalvarIntacta} variant="primary">Salvar

        </Button>
        {sucesso === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>

    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    <Modal show={show1} onHide={handleClose1}  >
      <Modal.Header closeButton>
        <Modal.Title>PROGRAMAÇÃO COMPACTAÇÃO</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DE COMPACTAÇÃO NORMAL </Form.Label>
            <br />
            <Form.Control
              type="number"
              onChange={(e) => { setCompactacaoNormal(e.target.value) }}
              value={compactacaonormal}
              autoFocus
            />
            <Form.Label>Normas {normacompactacao}</Form.Label>
            <Select
              options={NormaCompactacao}
              onChange={item => {
                setNormaCompactacao(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO COMPACTAÇÃO INTERMEDIÁRIA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCompactacaoIntermediaria(e.target.value) }}
              value={compactacaointermediaria}
            />
            <Form.Label>Normas {normacompactacaointermediaria}</Form.Label>
            <Select
              options={NormaCompactacao}
              onChange={item => {
                setNormaCompactacaoIntermediaria(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO COMPACTAÇÃO MODIFICADA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCompactacaoModificada(e.target.value) }}
              value={compactacaomodificada}
            />
            <Form.Label>Normas {normacompactacaomodificada}</Form.Label>
            <Select
              options={NormaCompactacao}
              onChange={item => {
                setNormaCompactacaoModificada(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>MASSA ESPECIFICA MÁXIMA E MINÍMA DAS AREIAS</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setBaridadesMaximaMinima(e.target.value) }}
              value={baridadesmaximaminima}
            />
            <Form.Label>Normas {normamaximamininaareias}</Form.Label>
            <Select
              options={NormaMaximaMininaAreias}
              onChange={item => {
                setNormaMaximaMininaAreias(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DE COMPACTAÇÃO DE MASSA ESPECÍFICA APARENTE CILINDRO DE CRAVAÇÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCompactacaoVibrocompactacao(e.target.value) }}
              value={compactacaovibrocompactacao}
            />
            <Form.Label>Normas {normaaparenteinsitucilindrocravacaos}</Form.Label>
            <Select
              options={NormaAparenteINSITUCilindroCravacaos}
              onChange={item => {
                setNormaAparenteINSITUCilindroCravacaos(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CBR (SEM MOLDAGEM)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCBRSemMoldagem(e.target.value) }}
              value={cbrsemmoldagem}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CBR (COM MOLDAGEM)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCBRComMoldagem(e.target.value) }}
              value={cbrcommoldagem}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CBR
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioCBR(e.target.value) }}
              value={ensaiocbr}
            />
            <Form.Label>Normas {normacbr}</Form.Label>
            <Select
              options={NormaCBR}
              onChange={item => {
                setNormaCBR(item.value);

              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CBR IMEDIATO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setCBRImediato(e.target.value) }}
              value={cbrimediato}

            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>Fechar
        </Button>

        <Button onClick={SalvarCompactacao} variant="primary">Salvar

        </Button>
        {sucesso1 === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>

    {/* /////////////////////////////////////Expansao de colapso///////////////////////////////////////////////////////////////////////////////////////////////// */}

    <Modal show={show2} onHide={handleClose2}  >
      <Modal.Header closeButton>
        <Modal.Title>EXPANSIBILIDADE DE COLAPSO</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DO POTENCIAL DE COLAPSO</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setPotenciaColapso(e.target.value) }}
              value={potenciacolapso}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DO INDICE DE EXPANSIBILIDADE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setIndiceExpansibilidade(e.target.value) }}
              value={indiceexpansibilidade}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>DETERMINAÇÃO DA EXPANSIBILIDADE E PONTENCIAL DE EXPANSÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setExpansibilidadePotenciaExpansao(e.target.value) }}
              value={expansibilidadepotenciaexpansao}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DE EXPANSIBILIDADE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioExpansibilidade(e.target.value) }}
              value={ensaioexpansibilidade}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DE EXPANSIBILIDADE LAMBE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioExpansibilidadeLambe(e.target.value) }}
              value={ensaioexpansibilidadelambe}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>EXPANSIBILIDADE EM EDÓMETRO LIVRE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setExpansibilidadeEdometro(e.target.value) }}
              value={expansibilidadeedometro}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>POTENCIAL DE EXPANSÃO</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setPotenciaExpansao(e.target.value) }}
              value={potenciaexpansao}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ÍNDICE DE COLAPSO
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setIndiceColapso(e.target.value) }}
              value={indicecolapso}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO DE DISPERSIBILIDADE PIN-HOLE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioDispersabilidade(e.target.value) }}
              value={ensaiodispersabilidade}

            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>Fechar
        </Button>

        <Button onClick={SalvarColapso} variant="primary">Salvar

        </Button>
        {sucesso2 === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>
    {/* /////////////////////////////////////Compressibilidade///////////////////////////////////////////////////////////////////////////////////////////////// */}

    <Modal show={show3} onHide={handleClose3}  >
      <Modal.Header closeButton>
        <Modal.Title>COMPRESSIBILIDADE</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>EDÓMETRO CLÁSSICO</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setEdometro(e.target.value) }}
              value={endometro}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO EDOMÉTRICO COM DETERMINAÇÃO DO COEFICIENTE DE CONSOLIDAÇÃO SECUNDÁRIO</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioEdometroDCCS(e.target.value) }}
              value={ensaioedometrodccs}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CONSOLIDAÇÃO EM CÉLULA HIDRÁULICA DO TIPO ROWE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setConsolidacaoHidraulica(e.target.value) }}
              value={consolidacaohidraulica}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CONSOLIDAÇÃO EM CÉLULA TRIAXIAL</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setConsolidacaoTriaxial(e.target.value) }}
              value={consolidacaotriaxial}

            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3}>Fechar
        </Button>

        <Button onClick={SalvarCompressibilidade} variant="primary">Salvar

        </Button>
        {sucesso3 === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <Modal show={show4} onHide={handleClose4}  >
      <Modal.Header closeButton>
        <Modal.Title>PERMEABILIDADE</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>PERMEABILIDADE COM CARGA CONSTANTE EM CÂMARA TRIAXIAL</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setPermeabilidadeConstante(e.target.value) }}
              value={permeabilidadeconstante}
              autoFocus
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Normas {normacargaconstante}</Form.Label>
            <Select
              options={NormaCargaConstante}
              onChange={item => {
                setNormaCargaConstante(item.value);

              }} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>PERMEABILIDADE EM CARGA VARIÁVEL EM CÂMARA TRIAXIAL</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setPermeabilidadeVariavel(e.target.value) }}
              value={permeabilidadevariavel}
              autoFocus
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Normas {normacargavariavel}</Form.Label>
            <Select
              options={NormaCargaVariavel}
              onChange={item => {
                setNormaCargaVariavel(item.value);

              }} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>COEFICIENTE DE PERMEABILIDADE</Form.Label>
            <Form.Control
              type="number"
             
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>EM PERMEÂMETRO COM CARGA CONSTANTE </Form.Label>
            <Form.Control
              type="number"
            

            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose4}>Fechar
        </Button>

        <Button onClick={SalvarPermebilidade} variant="primary">Salvar

        </Button>
        {sucesso6 === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>
    {/* /////////////////////////////////////Resistencia///////////////////////////////////////////////////////////////////////////////////////////////// */}

    <Modal show={show5} onHide={handleClose5}  >
      <Modal.Header closeButton>
        <Modal.Title>Resistência e deformabilidade</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <select onChange={handleAmostraChange}>
            <option> Todas Amostras </option>

            {listaamostra.map((amostra) => (
              <option value={amostra.Amostra}>{amostra.Amostra}</option>
            ))}
          </select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>RESISTÊNCIA POR COMPRESSÃO UNIAXIAL</Form.Label>
            <br />

            <Form.Control
              type="number"
              onChange={(e) => { setResistenciaCompressaoUnixial(e.target.value) }}
              value={resistenciacompressaounixial}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TRIAXIAL NÃO CONSOLIDADO - POR PROVETE,"UU"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTriaxialNaoConsolidadoUU(e.target.value) }}
              value={triaxialnaoconsolidadouu}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TRIAXIAL NÃO CONSOLIDADO - POR PROVETE,"CU"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTriaxialNaoConsolidadoCU(e.target.value) }}
              value={triaxialnaoconsolidadocu}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TRIAXIAL NÃO CONSOLIDADO - POR PROVETE,"CD"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTriaxialNaoConsolidadoCD(e.target.value) }}
              value={triaxialnaoconsolidadocd}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TRIAXIAL COM SIGMA 1 CONSTANTE</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setTriaxialSigmaConstante(e.target.value) }}
              value={triaxialsigmaconstante}

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>PATAMAR DE CONSOLIDAÇÃO ANISOTRÓPICA</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setPatamarConsolidacaoAnisotropica(e.target.value) }}
              value={patamarconsolidacaoanisotropica}

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO TRIAXIAL MULTIFÁSICO CU</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioTriaxialMultifasicoCU(e.target.value) }}
              value={ensaiotriaxialmultifasicocu}

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO TRIAXIAL MULTIFÁSICO CD</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioTriaxialMultifasicoCD(e.target.value) }}
              value={ensaiotriaxialmultifasicocd}

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO CORTE DIRETO NÃO CONSOLIDADO NÃO DRENADO "UU"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioCorteNaoConsolidadoNaoDrenadoUU(e.target.value) }}
              value={ensaiocortenaoconsolidadonaodrenadouu}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO CORTE DIRETO CONSOLIDADO DRENADO "CU"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioCorteConsolidadoNaoDrenadoCU(e.target.value) }}
              value={ensaiocorteconsolidadonaodrenadocu}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>ENSAIO CORTE DIRETO CONSOLIDADO DRENADO "CD"</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => { setEnsaioCorteConsolidadoNaoDrenadoCD(e.target.value) }}
              value={ensaiocorteconsolidadonaodrenadocd}

            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose5}>Fechar
        </Button>

        <Button onClick={SalvarResistenciaDeformabilidade} variant="primary">Salvar

        </Button>
        {sucesso4 === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      </Modal.Footer>
    </Modal>
  </div>

}

export default Programacao;