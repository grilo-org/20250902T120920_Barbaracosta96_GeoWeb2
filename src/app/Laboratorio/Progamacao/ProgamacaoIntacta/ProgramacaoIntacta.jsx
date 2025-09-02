import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../NavbarLaboratorio/navbarlaboratorio';

import ListaProgramacaoGrid from '../ListaProgramacao/listaprogramacao';
import './ProgramacaoIntacta.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import Conexao from '../../../Config/conexao';
import NumericInput from 'react-numeric-input';
import CountUp from 'react-countup';

import VariavelGlobal from '../../../Config/Variavelglobal'

function ProgramacaoIntacta(props) {
  //eslint-disable-next-line
  let number = document.querySelector('[name="number"]');

  const [lista, setLista] = useState([]);

  const [massavolumica, setMassaVolumica] = useState()
  const [teoragua, setTeorAgua] = useState('')
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
  const [resistividadeeletricaproveteSolo, setResistividadeEletricaProveteSolo] = useState('')
  const [amostra, setAmostra] = useState('Todas Amostras')
  const [processo, setProcesso] = useState('')
  const [listaperfuracao, setListaPerfuracao] = useState([]);
  const [cont, setcont] = useState(0)
  const [m1, setM1] = useState(false)
  const [m2, setM2] = useState('Todas Amostras')
  const [sucesso, setSucesso] = useState('');
  function Ver() {

    if (teoragua === 0) {
      setTeorAgua('')
    }
    if (cortedirecto === 0) {
      setCorteDirecto('')
    }
    if (materiaorganica === 0) {
      setMateriaOrganica('')
    }
    if (ph === 0) {
      setPH('')
    }
    if (densidadeparticulas === 0) {
      setDensidadeParticulas('')
    }
    if (limitesliquidezmcp === 0) {
      setLimitesLiquidezMCP('')
    }
    if (limitesplasticidade === 0) {
      setLimitesPlasticidade('')
    }
    if (limitesretraccao === 0) {
      setLimitesRetraccao('')
    }
    if (teorsulfatos === 0) {
      setTeorSulfatos('')
    }
    if (teorcloretos === 0) {
      setTeorCloretos('')
    }
    if (teorcarbonatos === 0) {
      setTeorCarbonatos('')
    }
    if (acidezbgully === 0) {
      setAcidezBGully('')
    }
    if (peneiracao === 0) {
      setPeneiracao('')
    }
    if (azulmetileno === 0) {
      setAzulMetileno('')
    }
    if (frascoareia === 0) {
      setFrascoAreia('')
    }
    if (peneiracaosedimentacao === 0) {
      setPeneiracaoSedimentacao('')
    }
    if (metodohilf === 0) {
      setMetodoHilf('')
    }
    if (coeficientefriabilidade === 0) {
      setCoeficienteFriabilidade('')
    }
    if (resistividadeeletricaproveteSolo === 0) {
      setResistividadeEletricaProveteSolo('')
    }
  }

  async function add() {

    if (amostra === 'Todas Amostras') {
      const obj = { processo, massavolumica, teoragua, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoIntacta.php', obj);
      console.log(res)
      if (res.data.success === true) {
        setSucesso('S');
      } else {
        setSucesso('N');
      }
    } else {
      const obj = { processo, amostra, massavolumica, teoragua, cortedirecto, materiaorganica, ph, densidadeparticulas, limitesliquidezmcp, limitesplasticidade, limitesretraccao, teorsulfatos, teorcloretos, teorcarbonatos, acidezbgully, peneiracao, azulmetileno, frascoareia, peneiracaosedimentacao, metodohilf, coeficientefriabilidade, resistividadeeletricaproveteSolo };
      const res = await axios.post(Conexao.api + 'SalvarProgramacaoIntactaAmostra.php', obj);
      console.log(res)
      if (res.data.success === true) {
        setSucesso('S');
      } else {
        setSucesso('N');
      }
    }
  };
  function get() {
    if (amostra === 'Todas Amostras') {

      getItem()
      mr()
    } else {
      getItem2()
      mr2()
    }

  }
  async function getItem() {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntacta.php?Processo=' + VariavelGlobal.var3);
    console.log(res)
    setListaPerfuracao(res.data.result);

  }

  async function getItem2() {

    const res = await axios.get(Conexao.api + 'ListarProgramacaoIntactaAmostra.php?amostra=' + amostra);
    console.log(res)
    setListaPerfuracao(res.data.result);

  }
  async function mr() {

    listaperfuracao.map((client) => {
      return setLista(client.Amostra),
        setMassaVolumica(client.MassaVolumica),
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
        setProcesso(VariavelGlobal.var3)
    })

    console.log(lista)
  }
  async function mr2() {

    listaperfuracao.map((client) => {
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
        setProcesso(VariavelGlobal.var3)
    })

    console.log(amostra)
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
    console.log(amostra)
  })

  let handleAmostraChange = (e) => {
    setAmostra(e.target.value);
  };

  return <div>
    <Navbar />

    <div className="container-fluid titulo">
      <div>


      </div>
      <div className="SelectAmostra">
        <select onChange={handleAmostraChange}>
          <option> Todas Amostras </option>
          {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
          {listaperfuracao.map((amostra) => (
            <option value={amostra.Amostra}>{amostra.Amostra}</option>
          ))}
        </select>
        <br />
        {/* Displaying the value of fruit */}
        {/* {amostra} */}

      </div>


      <div className="row">

        <div class="inputcheck">
          <text>MASSA ESPECÍFICA REAL EM GRÃOS  {massavolumica}</text>
        


          <NumericInput
            className="numericinput"
           
            step={1}
            onChange={setMassaVolumica}

          />


        </div>
        <div class="inputcheck1">
          <text>DETERMINAÇÃO DO TEOR EM ÁGUA</text>

          <NumericInput
            className="numericinput"
            value={teoragua}
            step={1}
            onChange={setTeorAgua}
          />
        </div>

        <div class="inputcheck1">
          <text>CORTE DIRETO</text>


          <NumericInput
            className="numericinput"
            value={cortedirecto}
            step={1}
            onChange={setCorteDirecto}
          />
        </div>
        <div class="inputcheck1">
          <text>MASSA ESPECIFICA APARENTE</text>



          <NumericInput
            className="numericinput"
            value={materiaorganica}
            step={1}
            onChange={setMateriaOrganica}
          />
        </div>

        <div class="inputcheck1">
          <text>DETERMINAÇÃO DO PH</text>

          <NumericInput
            className="numericinput"
            value={ph}
            step={1}
            onChange={setPH}
          />
        </div>

        <div class="inputcheck1">
          <text>DENSIDADE DAS PARTÍCULAS</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={densidadeparticulas}
            onChange={setDensidadeParticulas}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO MASSA APARENTE IN_SITU MEMBRANA PLASTICA</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={limitesliquidezmcp}
            onChange={setLimitesLiquidezMCP}
          />
        </div>
        <div class="inputcheck1">
          <text>LIMITE DE LIQUIDEZ E PLASTICIDADE</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={limitesplasticidade}
            onChange={setLimitesPlasticidade}
          />
        </div>
        <div class="inputcheck1">
          <text>LIMITE DE RETRACÇÃO</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={limitesretraccao}
            onChange={setLimitesRetraccao}
          />
        </div>
        <div class="inputcheck1">
          <text>TEOR EM SULFATOS</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={teorsulfatos}
            onChange={setTeorSulfatos}
          />
        </div>
        <div class="inputcheck1">
          <text>TEOR EM CLORETOS</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={teorcloretos}
            onChange={setTeorCloretos}
          />
        </div>
        <div class="inputcheck1">
          <text>TEOR EM CARBONATOS</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={teorcarbonatos}
            onChange={setTeorCarbonatos}
          />
        </div>
        <div class="inputcheck1">
          <text>ACIDEZ BAUMANN-GULLY </text>



          <NumericInput
            className="numericinput"
            step={1}
            value={acidezbgully}
            onChange={setAcidezBGully}
          />
        </div>
        <div class="inputcheck1">
          <text>ANÁLISE GRANULOMÉTRICA POR PENEIRAÇÃO</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={peneiracao}
            onChange={setPeneiracao}
          />
        </div>
        <div class="inputcheck1">
          <text>ENSAIO DO AZUL DE METILENO (TESTE DA MANCHA)</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={azulmetileno}
            onChange={setAzulMetileno}
          />
        </div>
        <div class="inputcheck1">
          <text>FRASCO DE AREIA</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={frascoareia}
            onChange={setFrascoAreia}
          />
        </div>
        <div class="inputcheck1">
          <text>ANÁLISE GRANULOMÉTRICA POR SEDIMENTAÇÃO</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={peneiracaosedimentacao}
            onChange={setPeneiracaoSedimentacao}
          />
        </div>
        <div class="inputcheck1">
          <text>DETERMINAÇÃO DO COEFICIENTE DE FRIABILIDADE DAS AREIAS</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={coeficientefriabilidade}
            onChange={setCoeficienteFriabilidade}
          />
        </div>
        <div class="inputcheck1">
          <text>CONTROLE DE COMPACTAÇÃO MÉTODO DE HILF</text>


          <NumericInput
            className="numericinput"
            step={1}
            value={metodohilf}
            onChange={setMetodoHilf}
          />
        </div>
        <div class="inputcheck1">
          <text>DETERMINAÇÃO DA RESISITIVIDADE ELÉTRICA DE UM PROVETE DE SOLO</text>



          <NumericInput
            className="numericinput"
            step={1}
            value={resistividadeeletricaproveteSolo}
            onChange={setResistividadeEletricaProveteSolo}
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

export default ProgramacaoIntacta;