import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../NavbarLaboratorio/navbarlaboratorio';
import ListaProgramacaoGrid from '../ListaProgramacao/listaprogramacao';
import './ProgramacaoCompactacao.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import Conexao from '../../../Config/conexao';
import NumericInput from 'react-numeric-input';



import VariavelGlobal from '../../../Config/Variavelglobal'

function ProgramacaoCompactacao(props) {
  //eslint-disable-next-line
  let number = document.querySelector('[name="number"]');

  const [lista, setLista] = useState(0);

  const [compactacaonormal, setCompactacaoNormal] = useState('')
  const [compactacaointermediaria, setCompactacaoIntermediaria] = useState('')
  const [compactacaomodificada, setCompactacaoModificada] = useState('')
  const [baridadesmaximaminima, setBaridadesMaximaMinima] = useState('')
  const [compactacaovibrocompactacao, setCompactacaoVibrocompactacao] = useState('')
  const [cbrsemmoldagem, setCBRSemMoldagem] = useState('')
  const [cbrcommoldagem, setCBRComMoldagem] = useState('')
  const [ensaiocbr, setEnsaioCBR] = useState('')
  const [cbrimediato, setCBRImediato] = useState('')


  const [processo, setProcesso] = useState('')
  const [listaperfuracao, setListaPerfuracao] = useState([]);
  const [cont, setcont] = useState(0)
  const [m1, setM1] = useState(false)
  const [m2, setM2] = useState(false)
  const [sucesso, setSucesso] = useState('');
  async function add() {

    const obj = { compactacaonormal, compactacaointermediaria, compactacaomodificada, baridadesmaximaminima, compactacaovibrocompactacao, cbrsemmoldagem, cbrcommoldagem, ensaiocbr, cbrimediato };
    const res = await axios.post(Conexao.api + 'SalvarProgramacaoIntacta.php', obj);
    console.log(res)
    if (res.data.success === true) {
      setSucesso('S');

    } else {
      setSucesso('N');
    }


  };

  async function getItem() {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntacta.php?Processo=' + VariavelGlobal.var3);
    console.log(res)
    setListaPerfuracao(res.data.result);

  }

  function Ver() {

    if (compactacaonormal === 0) {
      setCompactacaoNormal('')
    }
    if (compactacaointermediaria === 0) {
      setCompactacaoIntermediaria('')
    }
    if (compactacaomodificada === 0) {
      setCompactacaoModificada('')
    }
    if (baridadesmaximaminima === 0) {
      setBaridadesMaximaMinima('')
    }
    if (compactacaovibrocompactacao === 0) {
      setCompactacaoVibrocompactacao('')
    }
    if (cbrsemmoldagem === 0) {
      setCBRSemMoldagem('')
    }
    if (cbrcommoldagem === 0) {
      setCBRComMoldagem('')
    }
    if (ensaiocbr === 0) {
      setEnsaioCBR('')
    }
    if (cbrimediato === 0) {
      setCBRImediato('')
    }

  }
  async function mr() {

    listaperfuracao.map((client) => {
      return setLista(client.Amostra),
        setCompactacaoNormal(client.CompactacaoNormal),
        setCompactacaoModificada(client.CompactacaoModificada),
        setCompactacaoIntermediaria(client.CompactacaoIntermediaria),
        setBaridadesMaximaMinima(client.BaridadesMaximaMinima),
        setCompactacaoVibrocompactacao(client.CompactacaoVibrocompactacao),
        setCBRSemMoldagem(client.CBRSemMoldagem),
        setCBRComMoldagem(client.CBRComMoldagem),
        setEnsaioCBR(client.EnsaioCBR),
        setCBRImediato(client.CBRImediato)


    })


  }
  function Contador() {

    if (cont < 1000) {
      setcont(cont + 1)

    }

  }
  function RecuperaValor() {


    if (cont >= 100) {
      if (m1 === false) {
        mr()

      }
      if (cont >= 1000) {
        setM1(true)

      }

    }

  }
  useEffect(() => {

    getItem()


  }, [])

  useEffect(() => {
    Ver()


    Contador()
    RecuperaValor()
    console.log(processo)
  })


  return <div>
    <Navbar />

    <div className="container-fluid titulo">
      <div>

      </div>
      
      <div className="row">

        <div class="inputcheck">
          <text>ENSAIO DE COMPACTAÇÃO NORMAL</text>



          <NumericInput
            className="numericinput"
            value={compactacaonormal}
            step={1}
            onChange={setCompactacaoNormal}

          />


        </div>
        <div class="inputcheck1">
          <text>ENSAIO COMPACTAÇÃO INTERMEDIÁRIA</text>

          <NumericInput
            className="numericinput"
            value={compactacaointermediaria}
            step={1}
            onChange={setCompactacaoIntermediaria}
          />
        </div>

        <div class="inputcheck1">
          <text>ENSAIO COMPACTAÇÃO MODIFICADA</text>


          <NumericInput
            className="numericinput"
            value={compactacaomodificada}
            step={1}
            onChange={setCompactacaoModificada}
          />
        </div>
        <div class="inputcheck1">
          <text>MASSA ESPECIFICA MÁXIMA E MINÍMA DAS AREIAS</text>



          <NumericInput
            className="numericinput"
            value={baridadesmaximaminima}
            step={1}
            onChange={setBaridadesMaximaMinima}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO DE COMPACTAÇÃO DE MASSA ESPECÍFICA APARENTE CILINDRO DE CRAVAÇÃO</text>



          <NumericInput
            className="numericinput"
            value={compactacaovibrocompactacao}
            step={1}
            onChange={setCompactacaoVibrocompactacao}
          />
        </div>

        <div class="inputcheck1">
          <text>CBR (SEM MOLDAGEM)</text>

          <NumericInput
            className="numericinput"
            value={cbrsemmoldagem}
            step={1}
            onChange={setCBRSemMoldagem}
          />
        </div>

        <div class="inputcheck1">
          <text>CBR (COM MOLDAGEM)</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={cbrcommoldagem}
            onChange={setCBRComMoldagem}
          />
        </div>
        <div class="inputcheck1">
          <text>CBR</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={ensaiocbr}
            onChange={setEnsaioCBR}
          />
        </div>
        <div class="inputcheck1">
          <text>CBR IMEDIATO</text>
          <NumericInput
            className="numericinput"
            step={1}
            value={cbrimediato}
            onChange={setCBRImediato}
          />
        </div>

        <br />

        <div class="inputcheck2"></div>

      </div>
      <br />
      <br />

      <button onClick={add} class="btnsave">Salvar</button>
      {sucesso === 'S' ? <div className="alert alert-success mt-2" role="alert">Salvo com sucesso</div> : null}
      <br />
      <br />
      <div class="inputcheck2"></div>
    </div>
  </div>
}

export default ProgramacaoCompactacao;