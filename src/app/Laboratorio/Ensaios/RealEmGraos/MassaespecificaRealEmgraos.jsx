
import React, { useState, useEffect } from "react";
import Conexao from '../../../Config/conexao';
import axios from 'axios';
import './MassaespecificaRealEmgraos.css';
import Navbar from '../../../Laboratorio/NavbarLaboratorio/navbarlaboratorio';



function MassaEspRealEmGraos() {

  const [amostra, setAmostra] = useState()
  const [amostra1, setAmostra1] = useState()
  const [balanca, setBalanca] = useState()
  const [estufa, setEstufa] = useState()
  const [normaEnsaio, setNormaEnsaio] = useState()
  const [laboratorio, setLaboratorio] = useState()
  const [ipicnometro1, setIpicnometro1] = useState()
  const [ipicnometro2, setIpicnometro2] = useState()
  const [massumdcp1, setMassumdcp1] = useState()
  const [massumdcp2, setMassumdcp2] = useState()
  const [capsula1, setCapsula1] = useState()
  const [capsula2, setCapsula2] = useState()
  const [capsula3, setCapsula3] = useState()
  const [capsula4, setCapsula4] = useState()
  const [capsula5, setCapsula5] = useState()
  const [capsula6, setCapsula6] = useState()
  const [massolumdEcap1, setMassolumdEcap1] = useState()
  const [massolumdEcap2, setMassolumdEcap2] = useState()
  const [massolumdEcap3, setMassolumdEcap3] = useState()
  const [massolumdEcap4, setMassolumdEcap4] = useState()
  const [massolumdEcap5, setMassolumdEcap5] = useState()
  const [massolumdEcap6, setMassolumdEcap6] = useState()
  const [massolsecoEcap1, setMassolsecoEcap1] = useState()
  const [massolsecoEcap2, setMassolsecoEcap2] = useState()
  const [massolsecoEcap3, setMassolsecoEcap3] = useState()
  const [massolsecoEcap4, setMassolsecoEcap4] = useState()
  const [massolsecoEcap5, setMassolsecoEcap5] = useState()
  const [massolsecoEcap6, setMassolsecoEcap6] = useState()
  const [masscap1, setMasscap1] = useState()
  const [masscap2, setMasscap2] = useState()
  const [masscap3, setMasscap3] = useState()
  const [masscap4, setMasscap4] = useState()
  const [masscap5, setMasscap5] = useState()
  const [masscap6, setMasscap6] = useState()
  const [teorumd1, setTeorumd1] = useState()
  const [teorumd2, setTeorumd2] = useState()
  const [teorumd3, setTeorumd3] = useState()
  const [teorumd4, setTeorumd4] = useState()
  const [teorumd5, setTeorumd5] = useState()
  const [teorumd6, setTeorumd6] = useState()
  const [teorumdMd1, setTeorumdMd1] = useState()
  const [teorumdMd2, setTeorumdMd2] = useState()
  const [masspicaguadt1, setMasspicaguadt1] = useState()
  const [masspicaguadt2, setMasspicaguadt2] = useState()
  const [masspicCP1, setMasspicCP1] = useState()
  const [masspicCP2, setMasspicCP2] = useState()
  const [tempEnsaio1, setTempEnsaio1] = useState()
  const [tempEnsaio2, setTempEnsaio2] = useState()
  const [massEspAgaTempT1, setMassEspAgaTempT1] = useState()
  const [massEspAgaTempT2, setMassEspAgaTempT2] = useState()
  const [massaespcppv1, setMassaespcppv1] = useState()
  const [massaespcppv2, setMassaespcppv2] = useState()
  const [massaespMd, setMassaespMd] = useState()
  const [obs, setObs] = useState()
  const [executado, setExecutado] = useState()
  const [statuEnsaio, setStatuEnsaio] = useState()
  const [dataExecucao, setDataExecucao] = useState()
  const [aux_picno1, setAux_picno1] = useState()
  const [aux_picno2, setAux_picno2] = useState()
  const [aux_picno3, setAux_picno3] = useState()
  const [aux_picno4, setAux_picno4] = useState()
  const [listaEstufa, setListaEstufa] = useState([])


  //ALERTAS

  function Confirmacao() {
    alert('Ensaio SALVO com Sucesso!')
  }

  function NaoCadastrado() {
    alert('Ensaio não cadastrado!')
  }



  /* function Capsulaemuso() {
    alert('Cápsula em uso!')
  } */




  // SALVAR
  async function add() {
    const obj = { amostra, amostra1, executado, statuEnsaio, dataExecucao, balanca, estufa, normaEnsaio, laboratorio, ipicnometro1, ipicnometro2, massumdcp1, massumdcp2, capsula1, capsula2, capsula3, capsula4, capsula5, capsula6, massolumdEcap1, massolumdEcap2, massolumdEcap3, massolumdEcap4, massolumdEcap5, massolumdEcap6, massolsecoEcap1, massolsecoEcap2, massolsecoEcap3, massolsecoEcap4, massolsecoEcap5, massolsecoEcap6, masscap1, masscap2, masscap3, masscap4, masscap5, masscap6, teorumd1, teorumd2, teorumd3, teorumd4, teorumd5, teorumd6, teorumdMd1, teorumdMd2, masspicaguadt1, masspicaguadt2, masspicCP1, masspicCP2, tempEnsaio1, tempEnsaio2, massEspAgaTempT1, massEspAgaTempT2, massaespcppv1, massaespcppv2, massaespMd, obs };

    const res = await axios.post(Conexao.api + 'SalvarMassaEspRealEmGraosWEB.php', obj);
    if (res.data.success === true) {
    }
    Confirmacao()
  };



  //BUSCAR

  async function getItem() {

    const res = await axios.get(Conexao.api + 'BuscarMassaEspRealemGraosWEB.php? amostra=' + amostra);

    // Limpar()

    // setAmostra(res.data.amostra);
    // setAmostra1(res.data.amostra1);
    setBalanca(res.data.balanca);
    setEstufa(res.data.estufa);
    setNormaEnsaio(res.data.normaEnsaio);
    setLaboratorio(res.data.laboratorio);
    setIpicnometro1(res.data.ipicnometro1);
    setIpicnometro2(res.data.ipicnometro2);
    setMassumdcp1(res.data.massumdcp1);
    setMassumdcp2(res.data.massumdcp2);
    setCapsula1(res.data.capsula1);
    setCapsula2(res.data.capsula2);
    setCapsula3(res.data.capsula3);
    setCapsula4(res.data.capsula4);
    setCapsula5(res.data.capsula5);
    setCapsula6(res.data.capsula6);
    setMassolumdEcap1(res.data.massolumdEcap1);
    setMassolumdEcap2(res.data.massolumdEcap2);
    setMassolumdEcap3(res.data.massolumdEcap3);
    setMassolumdEcap4(res.data.massolumdEcap4);
    setMassolumdEcap5(res.data.massolumdEcap5);
    setMassolumdEcap6(res.data.massolumdEcap6);
    setMassolsecoEcap1(res.data.massolsecoEcap1);
    setMassolsecoEcap2(res.data.massolsecoEcap2);
    setMassolsecoEcap3(res.data.massolsecoEcap3);
    setMassolsecoEcap4(res.data.massolsecoEcap4);
    setMassolsecoEcap5(res.data.massolsecoEcap5);
    setMassolsecoEcap6(res.data.massolsecoEcap6);
    /*  setMasscap1(res.data.masscap1);
     setMasscap2(res.data.masscap2);
     setMasscap3(res.data.masscap3);
     setMasscap4(res.data.masscap4);
     setMasscap5(res.data.masscap5);
     setMasscap6(res.data.masscap6);
     setTeorumd1(res.data.teorumd1);
     setTeorumd2(res.data.teorumd2);
     setTeorumd3(res.data.teorumd3);
     setTeorumd4(res.data.teorumd4);
     setTeorumd5(res.data.teorumd5);
     setTeorumd6(res.data.teorumd6);
     setTeorumdMd1(res.data.teorumdMd1);
     setTeorumdMd2(res.data.teorumdMd2);
     setMasspicaguadt1(res.data.masspicaguadt1);
     setMasspicaguadt2(res.data.masspicaguadt2); */
    setMasspicCP1(res.data.masspicCP1);
    setMasspicCP2(res.data.masspicCP2);
    setTempEnsaio1(res.data.tempEnsaio1);
    setTempEnsaio2(res.data.tempEnsaio2);
    /*   setMassEspAgaTempT1(res.data.massEspAgaTempT1);
      setMassEspAgaTempT2(res.data.massEspAgaTempT2);
      setMassaespcppv1(res.data.massaespcppv1);
      setMassaespcppv2(res.data.massaespcppv2);
      setMassaespMd(res.data.massaespMd); */
    setObs(res.data.obs);
    setExecutado(res.data.executado);
    setStatuEnsaio(res.data.statuEnsaio);
    setDataExecucao(res.data.dataExecucao);

    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
      NaoCadastrado()
    }
    else {
      //   setLoading(false) 
    }
    // console.log(res.data.amostra)

  };

  //ESTUFA 




  async function listarEstufa() {
    const res = await axios.get(Conexao.api + 'ListarEstufaWEB.php? laboratorio=' + laboratorio);
    // setListaAmostraProcesso(rese.data.result);
    console.log("ESTUFA222  " + res.data.result);
    console.log(res.data.result);
    setListaEstufa(res.data.result)

    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };


  /*   useEffect(()=>{ 
    listarEstufa()
  }) ;  */





  //CAPSULAS
  async function getCapsula1() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos1Web.php? capsula1=' + capsula1);
    setMasscap1(res.data.masscap1);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula1 === ''   )                   
    {    }  
    else if (capsula1 !== '' ){
      getCapsula1() 
    }               
  } ); */



  async function getCapsula2() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos2Web.php? capsula2=' + capsula2);
    setMasscap2(res.data.masscap2);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula2 === ''   )                   
    {    }  
    else if (capsula2 !== '' ){
      getCapsula2() 
    }                
  }); */

  async function getCapsula3() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos3Web.php? capsula3=' + capsula3);
    setMasscap3(res.data.masscap3);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula3 === ''   )                   
    {    }  
    else if (capsula3 !== '' ){
      getCapsula3() 
    }                
  } ); */

  async function getCapsula4() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos4Web.php? capsula4=' + capsula4);
    setMasscap4(res.data.masscap4);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula4 === ''   )                   
    {    }  
    else if (capsula4 !== '' ){
      getCapsula4() 
    }                
  }); */

  async function getCapsula5() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos5Web.php? capsula5=' + capsula5);
    setMasscap5(res.data.masscap5);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula5 === ''   )                   
    {    }  
    else if (capsula5 !== '' ){
      getCapsula5() 
    }                
  }); */

  async function getCapsula6() {
    const res = await axios.get(Conexao.api + 'BuscarCapsulaRealemgraos6Web.php? capsula6=' + capsula6);
    setMasscap6(res.data.masscap6);
    console.log(res.data.masscap6)
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  /* useEffect(() => {
    if (  capsula6 === ''   )                   
    {    }  
    else if (capsula6 !== ''  ){
      getCapsula6() 
    }                
  }); */


  async function getMassaPicnometro1() {
    const res = await axios.get(Conexao.api + 'BuscarPicnometro1WEB.php? ipicnometro1=' + ipicnometro1);

    setAux_picno1(res.data.auxPic1);
    setAux_picno2(res.data.auxPic2);

    console.log(res.data.auxPic1)
    console.log(res.data.auxPic2)
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 

    }
  };
  /* useEffect(() => {
    if (  ipicnometro1 === ''   )                   
    {    }  
    else if (ipicnometro1 !== ''  ){
      getMassaPicnometro1() 
    }                
  }); */

  async function getMassaPicnometro2() {
    const res = await axios.get(Conexao.api + 'BuscarPicnometro2WEB.php? ipicnometro2=' + ipicnometro2);

    setAux_picno3(res.data.auxPic3);
    setAux_picno4(res.data.auxPic4);

    console.log(res.data.auxPic3);
    console.log(res.data.auxPic4);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 

    }
  };
  /* useEffect(() => {
    if (  ipicnometro2 === ''   )                   
    {    }  
    else if (ipicnometro2 !== ''  ){
      getMassaPicnometro2() 
    }                
  }); */







  async function getTempateT1() {
    const res = await axios.get(Conexao.api + 'BuscarAguaateaTempTRealGrãos1WEB.php? tempEnsaio1=' + tempEnsaio1);
    setMassEspAgaTempT1(res.data.massEspAgaTempT1);
    console.log(res.data.massEspAgaTempT1)
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  useEffect(() => {
    if (tempEnsaio1 === '') { }
    else if (tempEnsaio1 !== '') {
      getTempateT1()
    }
  });

  async function getTempateT2() {
    const res = await axios.get(Conexao.api + 'BuscarAguaateaTempTRealGrãos2WEB.php? tempEnsaio2=' + tempEnsaio2);
    setMassEspAgaTempT2(res.data.massEspAgaTempT2);

    console.log(res.data.massEspAgaTempT2)

    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();
    }
    else {
      //   setLoading(false) 
    }
  };
  useEffect(() => {
    if (tempEnsaio2 === '') { }
    else if (tempEnsaio2 !== '') {
      getTempateT2()
    }
  });


  function Limpar() {

    // setAmostra(res.data.amostra);
    // setAmostra1(res.data.amostra1);
    setBalanca('');
    setEstufa('');
    setNormaEnsaio('');
    setLaboratorio('');
    setIpicnometro1('');
    setIpicnometro2('');
    setMassumdcp1('');
    setMassumdcp2('');
    setCapsula1('');
    setCapsula2('');
    setCapsula3('');
    setCapsula4('');
    setCapsula5('');
    setCapsula6('');
    setMassolumdEcap1('');
    setMassolumdEcap2('');
    setMassolumdEcap3('');
    setMassolumdEcap4('');
    setMassolumdEcap5('');
    setMassolumdEcap6('');
    setMassolsecoEcap1('');
    setMassolsecoEcap2('');
    setMassolsecoEcap3('');
    setMassolsecoEcap4('');
    setMassolsecoEcap5('');
    setMassolsecoEcap6('');
    setMasscap1('');
    setMasscap2('');
    setMasscap3('');
    setMasscap4('');
    setMasscap5('');
    setMasscap6('');
    setTeorumd1('');
    setTeorumd2('');
    setTeorumd3('');
    setTeorumd4('');
    setTeorumd5('');
    setTeorumd6('');
    setTeorumdMd1('');
    setTeorumdMd2('');
    setMasspicaguadt1('');
    setMasspicaguadt2('');
    setMasspicCP1('');
    setMasspicCP2('');
    setTempEnsaio1('');
    setTempEnsaio2('');
    setMassEspAgaTempT1('');
    setMassEspAgaTempT2('');
    setMassaespcppv1('');
    setMassaespcppv2('');
    setMassaespMd('');
    setObs('');
    setExecutado('');
    setStatuEnsaio('');
    setDataExecucao('');

  };


  //CÁLCULOS
  function TeorUmidadeCalc1() {

    var v1 = document.querySelector("#massolumdEcap1");
    var v2 = document.querySelector("#massolsecoEcap1");
    var v3 = document.querySelector("#masscap1");
    var v4 = document.querySelector("#teorumd1");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;

    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }

  function TeorUmidadeCalc2() {

    var v1 = document.querySelector("#massolumdEcap2");
    var v2 = document.querySelector("#massolsecoEcap2");
    var v3 = document.querySelector("#masscap2");
    var v4 = document.querySelector("#teorumd2");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }

  function TeorUmidadeCalc3() {

    var v1 = document.querySelector("#massolumdEcap3");
    var v2 = document.querySelector("#massolsecoEcap3");
    var v3 = document.querySelector("#masscap3");
    var v4 = document.querySelector("#teorumd3");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }
  function TeorUmidadeCalc4() {

    var v1 = document.querySelector("#massolumdEcap4");
    var v2 = document.querySelector("#massolsecoEcap4");
    var v3 = document.querySelector("#masscap4");
    var v4 = document.querySelector("#teorumd4");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }
  function TeorUmidadeCalc5() {

    var v1 = document.querySelector("#massolumdEcap5");
    var v2 = document.querySelector("#massolsecoEcap5");
    var v3 = document.querySelector("#masscap5");
    var v4 = document.querySelector("#teorumd5");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }
  function TeorUmidadeCalc6() {


    var v1 = document.querySelector("#massolumdEcap6");
    var v2 = document.querySelector("#massolsecoEcap6");
    var v3 = document.querySelector("#masscap6");
    var v4 = document.querySelector("#teorumd6");
    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;
    var resul1 = (parseFloat(v11) - parseFloat(v22));
    var resul2 = (parseFloat(v22) - parseFloat(v33));
    var resul = (parseFloat(resul1) / parseFloat(resul2)) * 100

    v4.value = resul.toFixed(1);
    console.log(resul);
  }

  //teor de umidade médio

  function TeorUmdMediaCalc1() {
    var v1 = document.querySelector("#teorumd1");
    var v2 = document.querySelector("#teorumd2");
    var v3 = document.querySelector("#teorumd3");
    var v4 = document.querySelector("#teorumdMd1");

    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;

    if (v11 !== "" && v22 !== "" && v33 !== "") {
      var resul = (parseFloat(v11) + parseFloat(v22) + parseFloat(v33)) / 3

      v4.value = resul.toFixed(1);
      console.log(resul);
    }
    else if (v11 !== "" && v22 !== "" && v33 === "") {

      var resul2 = parseFloat(v11) + parseFloat(v22) / 2;
      v4.value = resul2.toFixed(1);
    }

    else if (v11 !== "" && v22 === "" && v33 !== "") {

      var resul3 = parseFloat(v11) + parseFloat(v33) / 2;
      v4.value = resul3.toFixed(1);
    }
    else if (v11 === "" && v22 !== "" && v33 !== "") {

      var resul4 = parseFloat(v22) + parseFloat(v33) / 2;
      v4.value = resul4.toFixed(1);
    }
    else if (v11 !== "" && v22 === "" && v33 === "") {

      var resul5 = parseFloat(v11) / 1;
      v4.value = resul5.toFixed(1);
    }
    else if (v11 === "" && v22 !== "" && v33 === "") {

      var resul6 = parseFloat(v22) / 1;
      v4.value = resul6.toFixed(1);
    }

    else if (v11 === "" && v22 === "" && v33 !== "") {

      var resul7 = parseFloat(v33) / 1;
      v4.value = resul7.toFixed(1);
    }

    else { v4.value = "" }
  }


  function TeorUmdMediaCalc2() {
    var v1 = document.querySelector("#teorumd4");
    var v2 = document.querySelector("#teorumd5");
    var v3 = document.querySelector("#teorumd6");
    var v4 = document.querySelector("#teorumdMd2");

    var v11 = v1.value;
    var v22 = v2.value;
    var v33 = v3.value;

    if (v11 !== "" && v22 !== "" && v33 !== "") {
      var resul = (parseFloat(v11) + parseFloat(v22) + parseFloat(v33)) / 3

      v4.value = resul.toFixed(1);
      console.log(resul);
    }
    else if (v11 !== "" && v22 !== "" && v33 === "") {

      var resul2 = parseFloat(v11) + parseFloat(v22) / 2;
      v4.value = resul2.toFixed(1);
    }

    else if (v11 !== "" && v22 === "" && v33 !== "") {

      var resul3 = parseFloat(v11) + parseFloat(v33) / 2;
      v4.value = resul3.toFixed(1);
    }
    else if (v11 === "" && v22 !== "" && v33 !== "") {

      var resul4 = parseFloat(v22) + parseFloat(v33) / 2;
      v4.value = resul4.toFixed(1);
    }
    else if (v11 !== "" && v22 === "" && v33 === "") {

      var resul5 = parseFloat(v11) / 1;
      v4.value = resul5.toFixed(1);
    }
    else if (v11 === "" && v22 !== "" && v33 === "") {

      var resul6 = parseFloat(v22) / 1;
      v4.value = resul6.toFixed(1);
    }

    else if (v11 === "" && v22 === "" && v33 !== "") {

      var resul7 = parseFloat(v33) / 1;
      v4.value = resul7.toFixed(1);
    }

    else { v4.value = "" }
  }





  function MassaEspCPCalc1() {

    var aa36 = document.querySelector("#massumdcp1");
    var aa66 = document.querySelector("#teorumdMd1");
    var aa71 = document.querySelector("#masspicaguadt1");
    var aa76 = document.querySelector("#masspicCP1");
    var aa86 = document.querySelector("#MassEspAgaTempT1");

    var aa91 = document.querySelector("#massaespcppv1");

    var a1 = aa36.value;
    var a2 = aa66.value;
    var a3 = aa71.value;
    var a4 = aa76.value;
    var a5 = aa86.value;

    var resul = ((parseFloat(a1) * 100 / (100 + parseFloat(a2))) / ((parseFloat(a1) * 100 / (100 + parseFloat(a2))) + parseFloat(a3) - parseFloat(a4))) * parseFloat(a5)

    aa91.value = resul.toFixed(2);
    console.log(resul);

  }

  function MassaEspCPCalc2() {

    var aa36 = document.querySelector("#massumdcp2");
    var aa66 = document.querySelector("#teorumdMd2");
    var aa71 = document.querySelector("#masspicaguadt2");
    var aa76 = document.querySelector("#masspicCP2");
    var aa86 = document.querySelector("#MassEspAgaTempT2");

    var aa91 = document.querySelector("#massaespcppv2");

    var a1 = aa36.value;
    var a2 = aa66.value;
    var a3 = aa71.value;
    var a4 = aa76.value;
    var a5 = aa86.value;
    var resul = ((parseFloat(a1) * 100 / (100 + parseFloat(a2))) / ((parseFloat(a1) * 100 / (100 + parseFloat(a2))) + parseFloat(a3) - parseFloat(a4))) * parseFloat(a5)

    aa91.value = resul.toFixed(2);
    console.log(resul);
  }

  // massa especifica média

  function CalcularMassaEspMDCalc() {

    var aa91 = document.querySelector("#massaespcppv1");
    var aa92 = document.querySelector("#massaespcppv2");
    var aaa = document.querySelector("#massaespMd");

    var a1 = aa91.value;
    var a2 = aa92.value;

    if (a1 !== "" && a2 !== "") {
      var resul1 = (parseFloat(a1) + parseFloat(a2));
      var resul = parseFloat(resul1) / 2;
      // aaa.value = parseFloat(resul.toFixed(2));
      setMassaespMd(resul.toFixed(2));

      console.log(resul.toFixed(2))
    }
    else if (a1 !== "" && a2 === "") {
      var resul2 = parseFloat(a1) / 1;
      // aaa.value = resul2.toFixed(2);
      setMassaespMd(resul2.toFixed(2))
    }
    else if (a1 === "" && a2 !== "") {

      var resul3 = parseFloat(a2) / 1;
      //  aaa.value = resul3.toFixed(2);
      setMassaespMd(resul3.toFixed(2))
    }

    else { aaa.value = "" }

  };

  // MASSA DO PICNOMETRO


  function MassaDoPicnometro1() {

    var aa86 = document.querySelector("#MassEspAgaTempT1");
    var aa87 = aa86.value;

    var a44 = ((parseFloat(aux_picno2)) - (parseFloat(aux_picno1)));
    var a45 = (parseFloat(a44)) * (parseFloat(aa87));
    var a46 = (parseFloat(a45)) + (parseFloat(aux_picno1));

    setMasspicaguadt1(a46.toFixed(2));

    console.log('MASSA   ' + (a45.toFixed(2)));
  };
  //     useEffect(()=>{  MassaDoPicnometro1()});


  function MassaDoPicnometro2() {

    var aa86 = document.querySelector("#MassEspAgaTempT2");
    var aa87 = aa86.value;

    var a44 = ((parseFloat(aux_picno4)) - (parseFloat(aux_picno3)));
    var a45 = (parseFloat(a44)) * (parseFloat(aa87));
    var a46 = (parseFloat(a45)) + (parseFloat(aux_picno3));

    setMasspicaguadt2(a46.toFixed(2));

    console.log('MASSA   ' + (a46.toFixed(2)));
  };

  //   useEffect(()=>{  MassaDoPicnometro2()});





  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap1");
    var v2 = document.querySelector("#massolsecoEcap1");
    var v3 = document.querySelector("#masscap1");
    //  var v4 = document.querySelector("#teorumd1");

    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc1()
    }



  });
  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap2");
    var v2 = document.querySelector("#massolsecoEcap2");
    var v3 = document.querySelector("#masscap2");
    //  var v4 = document.querySelector("#teorumd2");


    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc2()
    }

  });
  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap3");
    var v2 = document.querySelector("#massolsecoEcap3");
    var v3 = document.querySelector("#masscap3");
    //  var v4 = document.querySelector("#teorumd3");

    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc3()
    }

  });

  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap4");
    var v2 = document.querySelector("#massolsecoEcap4");
    var v3 = document.querySelector("#masscap4");
    // var v4 = document.querySelector("#teorumd4");


    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc4()
    }

  });

  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap5");
    var v2 = document.querySelector("#massolsecoEcap5");
    var v3 = document.querySelector("#masscap5");
    //   var v4 = document.querySelector("#teorumd5");

    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc5()
    }

  });
  useEffect(() => {

    var v1 = document.querySelector("#massolumdEcap6");
    var v2 = document.querySelector("#massolsecoEcap6");
    var v3 = document.querySelector("#masscap6");
    // var v4 = document.querySelector("#teorumd6");


    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmidadeCalc6()
    }

  });

  useEffect(() => { TeorUmdMediaCalc1(); TeorUmdMediaCalc2() })


  useEffect(() => {
    var v1 = document.querySelector("#teorumd1");
    var v2 = document.querySelector("#teorumd2");
    var v3 = document.querySelector("#teorumd3");
    // var v4 = document.querySelector("#teorumdMd1"); 

    if (v1.value === '' & v2.value === '' & v3.value === '') { }
    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmdMediaCalc1()
    }
  });

  useEffect(() => {
    var v1 = document.querySelector("#teorumd4");
    var v2 = document.querySelector("#teorumd5");
    var v3 = document.querySelector("#teorumd6");
    // var v4 = document.querySelector("#teorumdMd1"); 

    if (v1.value === '' & v2.value === '' & v3.value === '') { }

    else if (v1.value !== '' || v2.value !== '' || v3.value === '') {
      TeorUmdMediaCalc2()
    }
  });






  useEffect(() => {

    var aa36 = document.querySelector("#massumdcp1");
    var aa66 = document.querySelector("#teorumdMd1");
    var aa71 = document.querySelector("#masspicaguadt1");
    var aa76 = document.querySelector("#masspicCP1");
    var aa86 = document.querySelector("#MassEspAgaTempT1");


    if (aa36.value === '' & aa66.value === '' & aa71.value === '' & aa76.value === '' & aa86.value === '') { }

    else if (aa36.value !== '' || aa66.value !== '' || aa71.value !== '' || aa76.value !== '' || aa86.value !== '') {
      MassaEspCPCalc1()
    }

  });

  useEffect(() => {

    var aa36 = document.querySelector("#massumdcp2");
    var aa66 = document.querySelector("#teorumdMd2");
    var aa71 = document.querySelector("#masspicaguadt2");
    var aa76 = document.querySelector("#masspicCP2");
    var aa86 = document.querySelector("#MassEspAgaTempT2");


    if (aa36.value === '' & aa66.value === '' & aa71.value === '' & aa76.value === '' & aa86.value === '') { }

    else if (aa36.value !== '' || aa66.value !== '' || aa71.value !== '' || aa76.value !== '' || aa86.value !== '') {
      MassaEspCPCalc2()
    }

  });

  useEffect(() => { CalcularMassaEspMDCalc() })


  useEffect(() => { })



  return <body className=" align-items-center text-center form-container ">

    <Navbar />

    <body className="container-fluid " >
      <div className="form-floating">

        <div className='titulolaboratorio container-fluid' >
          <br />
          <h1 className='texttitulo'>Massa específica real em grãos</h1>
        </div>

        <br />




        <div className="  row d-flex justify-content-center  align-items-center p-1 " >
          <div class="col-auto  ">
            <h3    >Amostra</h3>
          </div>
          <div class="col-auto  ">
            <input onChange={(e) => setAmostra(e.target.value) & Limpar()} id='amostra' name='amostra' value={amostra} placeholder='Digite a amostra' class="form-control w-90 text-center colorInput2" ></input>
          </div>
          <div class="col-auto  ">
            <h3 >-</h3>
          </div>
          <div class="col-auto  ">
            <input id='amostra1' name='amostra1' onChange={(e) => setAmostra1(e.target.value)} value={amostra1} class="form-control text-center input2 colorInput2"   ></input>
          </div>
          <div class="col-auto ">
            <button className='button ' onClick={(e) => getItem(e)} >
              <img src="/Images/lupa.jpg" alt="" height='60px' />
            </button>
          </div>
        </div>

        <br />

        <body className="  row   justify-content-evenly align-items-center  " >
          <div class="col-auto ">
            <div className="  row  align-items-center p-1 ">
              <div class="col-auto">
                <h5>Estufa</h5>
              </div>
              <div class="col-auto">
                <select name="Estufa" id="Estufa" onChange={(e) => setEstufa(e.target.value)} value={estufa} onClick={(e) => listarEstufa(e)} className='form-select  text-center input4 colorInput2'  >

                  <option   > Selecione... </option>
                  <option value={estufa}  >  </option>
                  <option value={listaEstufa.length}  > {listaEstufa.length} </option>



                </select>



              </div>
            </div>
            <div className="  row  align-items-center  ">
              <div class="col-auto">
                <h5>Balança</h5>
              </div>
              <div class="col-auto">
                <select name="Balanca" onChange={(e) => setBalanca(e.target.value)} value={balanca} className='form-select text-center input3  colorInput2' >
                  <option >Selecione...</option>
                  <option  >LAB.002</option>
                  <option >LAB.003</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-auto">
            <div className="  row  align-items-center p-1 ">
              <div class="col-auto">
                <h5 >Norma de ensaio</h5>
              </div>
              <div class="col-auto">
                <input name='NormaEnsaio' id='NormaEnsaio' onChange={(e) => setNormaEnsaio(e.target.value)} value={normaEnsaio} className='form-control text-center input3 colorInput2'  ></input>
              </div>
            </div>
            <div className="  row  align-items-center ">
              <div class="col-auto">
                <h5 >Laboratório</h5>
              </div>
              <div class="col-auto">
                <input name='laboratorio' id='laboratorio' onChange={(e) => setLaboratorio(e.target.value)} value={laboratorio} className='form-control text-center input5 colorInput2'  ></input>
              </div>
            </div>
          </div>
        </body>

        <hr size='8' color='gray' />

        <br />


        <body className="  col   align-items-center   justify-content-evenly  ">

          <body className="  gap-5 row  align-items-center p-1   ">
            <div className="  col-5 label  offset-md-4 ">
              <h5  >Corpo de prova</h5>
            </div>

            <div className="  col-auto espaco1   ">
              <h5  >I</h5>
            </div>
            <div className=" col-auto espaco2  ">
              <h5 >II</h5>
            </div>

          </body>


          <body className="  row  align-items-center p-1  ">

            <div className="  col-5 label  ">
              <h5 name='picnometro' id='picnometro'  >Picnômetro</h5>
            </div>

            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >n°</h5>
                </div>
                <div className="  col-auto espaco10 ">
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11  ">
              <input name='ipicnometro1' id='ipicnometro1' onChange={(e) => setIpicnometro1(e.target.value) & getMassaPicnometro1() & MassaDoPicnometro1()} value={ipicnometro1} className=" form-control text-center input6 colorInput2"  ></input>
            </div>
            <div className="  col-2  espaco4     ">
              <input name='ipicnometro2' id='ipicnometro2' onChange={(e) => setIpicnometro2(e.target.value) & getMassaPicnometro2() & MassaDoPicnometro2()} value={ipicnometro2} className=" form-control text-center input6 colorInput2" ></input>
            </div>
          </body>


          <body className="  row  align-items-center p-1   ">

            <div className="  col-5 label   ">
              <h5 >Massa úmida do corpo de prova</h5>
            </div>


            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >M¹</h5>
                </div>
                <div className="  col-auto espaco10 ">
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11  ">
              <input name='massumdcp1' id='massumdcp1' onChange={(e) => setMassumdcp1(e.target.value.replace(",", "."))} value={massumdcp1} className=' form-control text-center input6 colorInput2' ></input>
            </div>
            <div className="  col-2 espaco6  ">
              <input name='massumdcp2' id='massumdcp2' onChange={(e) => setMassumdcp2(e.target.value.replace(",", "."))} value={massumdcp2} className='form-control text-center input6 colorInput2' ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1 ">
            <div className="  col-5 label ">
              <h5 >Cápsula</h5>
            </div>


            <div className="  col-1  offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto   ">
                  <h5  >n°</h5>
                </div>
                <div className="  col-auto  ">  </div>
              </div>
            </div>

            <div className="  col-2 espaco9   ">
              <div className="  row  align-items-center ">
                <div className="  col-4  " >
                  <input name='capsula1' id='capsula1' onChange={(e) => setCapsula1(e.target.value) & getCapsula1()} value={capsula1} className='form-control text-center input7 colorInput2' ></input>
                </div>
                <div className="  col-4  " >
                  <input name='capsula2' id='capsula2' onChange={(e) => setCapsula2(e.target.value) & getCapsula2()} value={capsula2} className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='capsula3' id='capsula3' onChange={(e) => setCapsula3(e.target.value) & getCapsula3()} value={capsula3} className='form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>

            <div className="  col-2  espaco8  ">
              <div className="  row  align-items-center ">
                <div className="  col-4  ">
                  <input name='capsula4' id='capsula4' onChange={(e) => setCapsula4(e.target.value) & getCapsula4()} value={capsula4} className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='capsula5' id='capsula5' onChange={(e) => setCapsula5(e.target.value) & getCapsula5()} value={capsula5} className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='capsula6' id='capsula6' onChange={(e) => setCapsula6(e.target.value) & getCapsula6()} value={capsula6} className=' form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>
          </body>


          <body className="  row  align-items-center p-1 ">
            <div className="  col-5 label  ">
              <h5 >Massa do solo úmido + cápsula</h5>
            </div>

            <div className="  col-1  offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto   ">
                  <h5  >Mh</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g</h5>
                </div>
              </div>
            </div>

            <div className="  col-2  espaco9 ">
              <div className="  row  align-items-center ">
                <div className="  col-4  " >
                  <input name='massolumdEcap1' id='massolumdEcap1' onChange={(e) => setMassolumdEcap1(e.target.value.replace(",", "."))} value={massolumdEcap1} className='form-control  text-center input7 colorInput2' ></input>
                </div>
                <div className="  col-4  " >
                  <input name='massolumdEcap2' id='massolumdEcap2' onChange={(e) => setMassolumdEcap2(e.target.value.replace(",", "."))} value={massolumdEcap2} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='massolumdEcap3' id='massolumdEcap3' onChange={(e) => setMassolumdEcap3(e.target.value.replace(",", "."))} value={massolumdEcap3} className='form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>

            <div className="  col-2  espaco8 ">
              <div className="  row  align-items-center ">
                <div className="  col-4  ">
                  <input name='massolumdEcap4' id='massolumdEcap4' onChange={(e) => setMassolumdEcap4(e.target.value.replace(",", "."))} value={massolumdEcap4} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4 ">
                  <input name='massolumdEcap5' id='massolumdEcap5' onChange={(e) => setMassolumdEcap5(e.target.value.replace(",", "."))} value={massolumdEcap5} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='massolumdEcap6' id='massolumdEcap6' onChange={(e) => setMassolumdEcap6(e.target.value.replace(",", "."))} value={massolumdEcap6} className='form-control text-center  input7 colorInput2'></input>
                </div>
              </div>
            </div>
          </body>


          <body className="  row  align-items-center p-1 ">
            <div className="  col-5 label ">
              <h5 >Massa do solo seco + cápsula</h5>
            </div>
            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >Mh</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco9  ">
              <div className="  row  align-items-center ">
                <div className="  col-4  " >
                  <input name='massolsecoEcap1' id='massolsecoEcap1' onChange={(e) => setMassolsecoEcap1(e.target.value.replace(",", "."))} value={massolsecoEcap1} className='form-control text-center  input7 colorInput2' ></input>
                </div>
                <div className="  col-4  " >
                  <input name='massolsecoEcap2' id='massolsecoEcap2' onChange={(e) => setMassolsecoEcap2(e.target.value.replace(",", "."))} value={massolsecoEcap2} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4 ">
                  <input name='massolsecoEcap3' id='massolsecoEcap3' onChange={(e) => setMassolsecoEcap3(e.target.value.replace(",", "."))} value={massolsecoEcap3} className='form-control text-center  input7 colorInput2'></input>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco8  ">
              <div className="  row  align-items-center ">
                <div className="  col-4  ">
                  <input name='massolsecoEcap4' id='massolsecoEcap4' onChange={(e) => setMassolsecoEcap4(e.target.value.replace(",", "."))} value={massolsecoEcap4} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='massolsecoEcap5' id='massolsecoEcap5' onChange={(e) => setMassolsecoEcap5(e.target.value.replace(",", "."))} value={massolsecoEcap5} className='form-control text-center  input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='massolsecoEcap6' id='massolsecoEcap6' onChange={(e) => setMassolsecoEcap6(e.target.value.replace(",", "."))} value={massolsecoEcap6} className='form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>
          </body>


          <body className="  row  align-items-center p-1 ">
            <div className="  col-5 label ">
              <h5 >Massa da cápsula</h5>
            </div>


            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >Mc</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g</h5>
                </div>
              </div>
            </div>


            <div className="  col-2  espaco9 ">
              <div className="  row  align-items-center ">
                <div className="  col-4  " >
                  <input name='masscap1' id='masscap1' onChange={(e) => setMasscap1(e.target.value.replace(",", "."))} value={masscap1} disabled className='form-control  text-center input7 colorInput2' ></input>
                </div>
                <div className="  col-4  " >
                  <input name='masscap2' id='masscap2' onChange={(e) => setMasscap2(e.target.value.replace(",", "."))} value={masscap2} disabled className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='masscap3' id='masscap3' onChange={(e) => setMasscap3(e.target.value.replace(",", "."))} value={masscap3} disabled className='form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>

            <div className="  col-2  espaco8 ">
              <div className="  row  align-items-center ">
                <div className="  col-4  ">
                  <input name='masscap4' id='masscap4' onChange={(e) => setMasscap4(e.target.value.replace(",", "."))} value={masscap4} disabled className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='masscap5' id='masscap5' onChange={(e) => setMasscap5(e.target.value.replace(",", "."))} value={masscap5} disabled className='form-control  text-center input7 colorInput2'></input>
                </div>
                <div className="  col-4  ">
                  <input name='masscap6' id='masscap6' onChange={(e) => setMasscap6(e.target.value.replace(",", "."))} value={masscap6} disabled className='form-control  text-center input7 colorInput2'></input>
                </div>
              </div>
            </div>
          </body>


          <body className="  row  align-items-center p-1 ">
            <div className="  col-5 label ">
              <h5 >Teor de umidade</h5>
            </div>


            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >h</h5>
                </div>
                <div className="  col-auto espaco10 ">
                  <h5 >%</h5>
                </div>
              </div>
            </div>


            <div className="  col-2 espaco9  ">
              <div className="  row  align-items-center ">
                <div className="  col-4  " >
                  <input name='teorumd1' id='teorumd1' onChange={(e) => setTeorumd1(e.target.value.replace(",", "."))} value={teorumd1} className='form-control  text-center input7 ' disabled  ></input>
                </div>
                <div className="  col-4  " >
                  <input name='teorumd2' id='teorumd2' onChange={(e) => setTeorumd2(e.target.value.replace(",", "."))} value={teorumd2} className='form-control  text-center input7 ' disabled ></input>
                </div>
                <div className="  col-4  ">
                  <input name='teorumd3' id='teorumd3' onChange={(e) => setTeorumd3(e.target.value.replace(",", "."))} value={teorumd3} className='form-control  text-center input7 ' disabled ></input>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco8  ">
              <div className="  row  align-items-center ">
                <div className="  col-4  ">
                  <input name='teorumd4' id='teorumd4' onChange={(e) => setTeorumd4(e.target.value.replace(",", "."))} value={teorumd4} className='form-control  text-center input7 ' disabled ></input>
                </div>
                <div className="  col-4  ">
                  <input name='teorumd5' id='teorumd5' onChange={(e) => setTeorumd5(e.target.value.replace(",", "."))} value={teorumd5} className='form-control  text-center input7 ' disabled ></input>
                </div>
                <div className="  col-4  ">
                  <input name='teorumd6' id='teorumd6' onChange={(e) => setTeorumd6(e.target.value.replace(",", "."))} value={teorumd6} className='form-control  text-center input7 ' disabled ></input>
                </div>
              </div>
            </div>
          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Teor de umidade médio</h5>
            </div>

            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >h</h5>
                </div>
                <div className="  col-auto espaco10 ">
                  <h5 >%</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11 ">
              <input name='teorumdMd1' id='teorumdMd1' onChange={(e) => setTeorumdMd1(e.target.value.replace(",", "."))} value={teorumdMd1} className='form-control  text-center input6 ' disabled ></input>
            </div>
            <div className="  col-2 espaco8 ">
              <input name='teorumdMd2' id='teorumdMd2' onChange={(e) => setTeorumdMd2(e.target.value.replace(",", "."))} value={teorumdMd2} className='form-control text-center  input6 ' disabled ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Massa do picnômetro + água destilada</h5>
            </div>

            <div className=" col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >M³</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11  ">
              <input name='masspicaguadt1' id='masspicaguadt1' onChange={(e) => setMasspicaguadt1(e.target.value.replace(",", "."))} value={masspicaguadt1} className='form-control text-center  input6 ' disabled ></input>
            </div>
            <div className="  col-2 espaco8">
              <input name='masspicaguadt2' id='masspicaguadt2' onChange={(e) => setMasspicaguadt2(e.target.value.replace(",", "."))} value={masspicaguadt2} className='form-control text-center  input6 ' disabled ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Massa do picnômetro + corpo de prova + água até o traço de referência</h5>
            </div>

            <div className="  col-1 offset-1 ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >M²</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11  ">
              <input name='masspicCP1' id='masspicCP1' onChange={(e) => setMasspicCP1(e.target.value.replace(",", "."))} value={masspicCP1} className='form-control text-center  input6 colorInput2' ></input>
            </div>
            <div className="  col-2 espaco8 ">
              <input name='masspicCP2' id='masspicCP2' onChange={(e) => setMasspicCP2(e.target.value.replace(",", "."))} value={masspicCP2} className='form-control  text-center input6 colorInput2' ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Temperatura do ensaio</h5>
            </div>

            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >T</h5>
                </div>
                <div className="  col-auto espaco10 ">
                  <h5 >°</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11 ">
              <input name='TempEnsaio1' id='TempEnsaio1' onChange={(e) => setTempEnsaio1(e.target.value) & getTempateT1() & getMassaPicnometro1() & MassaDoPicnometro1()} value={tempEnsaio1} className='form-control text-center  input6 colorInput2' ></input>
            </div>
            <div className="  col-2 espaco8 ">
              <input name='TempEnsaio2' id='TempEnsaio2' onChange={(e) => setTempEnsaio2(e.target.value) & getTempateT2() & getMassaPicnometro2() & MassaDoPicnometro2()} value={tempEnsaio2} className='form-control text-center  input6 colorInput2' ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Massa específica da água a temperatura T do ensaio</h5>
            </div>

            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto ">
                  <h5 >dT</h5>
                </div>
                <div className="  col-auto ">
                  <h5 >g/cm³</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11  ">
              <input name='MassEspAgaTempT1' id='MassEspAgaTempT1' onChange={(e) => setMassEspAgaTempT1(e.target.value.replace(",", ".")) & getMassaPicnometro1() & MassaDoPicnometro1()} value={massEspAgaTempT1} className='form-control text-center  input6 ' disabled></input>
            </div>
            <div className="  col-2 espaco8 ">
              <input name='MassEspAgaTempT2' id='MassEspAgaTempT2' onChange={(e) => setMassEspAgaTempT2(e.target.value.replace(",", ".")) & getMassaPicnometro2() & MassaDoPicnometro2()} value={massEspAgaTempT2} className='form-control text-center  input6 ' disabled ></input>
            </div>

          </body>

          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Massa específica do corpo de prova</h5>
            </div>

            <div className="  col-1 offset-1 ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto ">
                  <h5 >dT</h5>
                </div>
                <div className="  col-auto  ">
                  <h5 >g/cm³</h5>
                </div>
              </div>
            </div>

            <div className="  col-2 espaco11 ">
              <input name='massaespcppv1' id='massaespcppv1' onChange={(e) => setMassaespcppv1(e.target.value.replace(",", ".")) & CalcularMassaEspMDCalc()} value={massaespcppv1}
                className='form-control text-center  input6 ' disabled ></input>
            </div>
            <div className="  col-2 espaco8 ">
              <input name='massaespcppv2' id='massaespcppv2' onChange={(e) => setMassaespcppv2(e.target.value.replace(",", ".")) & CalcularMassaEspMDCalc()} value={massaespcppv2}
                className='form-control  text-center input6 ' disabled ></input>
            </div>

          </body>


          <body className="  row  align-items-center p-1">
            <div className="  col-5 label ">
              <h5 >Massa específica média</h5>
            </div>

            <div className="  col-1 offset-1  ">
              <div className="  row  align-items-center  ">
                <div className="  col-auto  ">
                  <h5 >dT</h5>
                </div>
                <div className="  col-auto ">
                  <h5 >g/cm³</h5>
                </div>
              </div>
            </div>

            <div className="  col-3 espaco11  ">
              <input name='massaespMd' id='massaespMd' onChange={(e) => setMassaespMd(e.target.value.replace(",", "."))} value={massaespMd} className='form-control text-center  input8 ' disabled ></input>
            </div>


          </body>
        </body>


        <br />
        <br />
        <br />
        <br />

        <body className="  row   justify-content-evenly  " >

          <div className="  col-4    ">
            <br />
            <h5 className="  label  " >Observações</h5>
            <textarea cols={100} rows={6} className='form-control w-200 colorInput2 resize' name='obs' id='obs' onChange={(e) => setObs(e.target.value)}  ></textarea>
          </div>


          <div className="  col-auto  espaco12   ">

            <div className="  row  align-items-center  ">

              <div className="  col-auto ">
                <input class="form-check-input" type="checkbox" id="VerificacaoEnsaio" ></input>
                <label class="form-check-label" for="VerificacaoEnsaio" onChange={(e) => setStatuEnsaio(e.target.value)} value={statuEnsaio}>Ensaio Verificado</label>
              </div>

              <div className="  col-auto  ">
                <input type='date' name='DataEnsaio' id='DataEnsaio' onChange={(e) => setDataExecucao(e.target.value)} value={dataExecucao} className='form-control text-center colorInput ' ></input>
              </div>


            </div>

            <br />

            <div className="  row  align-items-center  ">
              <div className="  col-auto  ">
                <label class="form-control-label" for="Execucao">Executado por:</label>
              </div>
              <div className="  col-auto  ">
                <input class="form-control text-center colorInput" onChange={(e) => setExecutado(e.target.value)} value={executado} id="Execucao" name='Execucao' ></input>
              </div>
            </div>


            <br />

            <div className="  row  align-items-center  ">

              <div className="  col-auto  ">
                <button type='submit' className='button' >
                  <img src="/Images/imprimir.png" alt="" height='100px' className='button1' />
                </button>
              </div>

              <div className="  col-auto  ">
                <button type='submit' className='button' >
                  <img src="/Images/document.png" alt="" height='75px' className='button1' />
                </button>
              </div>

              <div className="  col-auto  ">
                <button onClick={(e) => add(e.target.value)} type='submit' className='button' >
                  <img src="/Images/salvarverde.png" alt="" height='75px' className='button1' />
                </button>
              </div>

            </div>

          </div>


        </body>


      </div>
    </body>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </body>



}
export default MassaEspRealEmGraos;