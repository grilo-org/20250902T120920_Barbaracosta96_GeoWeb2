import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../NavbarLaboratorio/navbarlaboratorio';

import './ProgramacaoExpansibilidadeColapso.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import Conexao from '../../../Config/conexao';
import NumericInput from 'react-numeric-input';




import VariavelGlobal from '../../../Config/Variavelglobal'

function ProgramacaoExpansibilidadeColapso(props) {
  //eslint-disable-next-line
  let number = document.querySelector('[name="number"]');

  const [lista, setLista] = useState(0);
  const [compressaosimples, setCompressaoSimples] = useState('')
  const [ensaiomolhagemsecagem, setEnsaioMolhagemSecagem] = useState('')



  const [processo, setProcesso] = useState('')
  const [listaperfuracao, setListaPerfuracao] = useState([]);
  const [cont, setcont] = useState(0)
  const [m1, setM1] = useState(false)
  const [m2, setM2] = useState(false)
  const [sucesso, setSucesso] = useState('');
  async function add() {

    const obj = { ensaiomolhagemsecagem, compressaosimples };
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

    if (compressaosimples === 0) {
      setCompressaoSimples('')
    }
    if (ensaiomolhagemsecagem === 0) {
      setEnsaioMolhagemSecagem('')
    }


  }
  async function mr() {

    listaperfuracao.map((client) => {
      return setLista(client.Amostra),
        setCompressaoSimples(client.CompressaoSimples),
        setEnsaioMolhagemSecagem(client.EnsaioMolhagemSecagem)


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
          <text>DETERMINAÇÃO DO POTENCIAL DE COLAPSO</text>



          <NumericInput
            className="numericinput"
            value={compressaosimples}
            step={1}
            onChange={setCompressaoSimples}

          />


        </div>
        <div class="inputcheck1">
          <text>DETERMINAÇÃO DO INDICE DE EXPANSIBILIDADE</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>DETERMINAÇÃO DA EXPANSIBILIDADE E PONTENCIAL DE EXPANSÃO </text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO DE EXPANSIBILIDADE</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO DE EXPANSIBILIDADE LAMBE</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>EXPANSIBILIDADE EM EDÓMETRO LIVRE</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>POTENCIAL DE EXPANSÃO</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>ÍNDICE DE COLAPSO</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO DE DISPERSIBILIDADE PIN-HOLE</text>

          <NumericInput
            className="numericinput"
            value={ensaiomolhagemsecagem}
            step={1}
            onChange={setEnsaioMolhagemSecagem}
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

export default ProgramacaoExpansibilidadeColapso;