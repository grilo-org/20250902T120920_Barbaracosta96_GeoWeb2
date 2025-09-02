
import { useState } from 'react';
import Navbar from '../NavbarManutencao/navbarManutencao';
import './RegInternoManutencaoCorretivaPreventiva.css';
import axios from 'axios';
import Conexao from '../../Config/conexao';
import ListaDinamica from '../ListaDinamica';
import ListaDinamica1 from '../ListaDinamica1';
import ListaDinamica2 from '../ListaDinamica2';
import ListaDinamica3 from '../ListaDinamica3';


function ManutencaoCorretivaPreventiva(props) {

  const [numeroOS, setNumeroOS] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [dataPrevisaoSaida, setDataPrevisaoSaida] = useState(Date)
  const [equipamentos, setEquipamentos] = useState('')
  const [dataEntrega, setDataEntrega] = useState('')
  const [dataSaida, setDataSaida] = useState('')
  const [modelo, setModelo] = useState('')
  const [horaEquipamento, setHoraEquipamento] = useState('')
  const [horaEquipamento2, setHoraEquipamento2] = useState('')
  const [codigoTag, setCodigoTag] = useState('')
  const [descricao, setDescricao] = useState('')
  const [manutecao, setManutecao] = useState([])
  const [dinamica, setDinamica] = useState([])
  const [dinamica1, setDinamica1] = useState([])
  const [dinamica2, setDinamica2] = useState([])
  const [dinamica3, setDinamica3] = useState([])
  const [outros, setOutros] = useState()

  const [aux1DataPrevistaSaida, setAux1DataPrevistaSaida] = useState()
  const [aux2DataPrevistaSaida, setAux2DataPrevistaSaida] = useState()





  const [descricaoD, setDescricaoD] = useState()
  const [corretiva, setCorretiva] = useState()
  const [preventiva, setPreventiva] = useState()

  const [inputFields, setInputFields] = useState(dinamica.length < 1 ? [{ descricao: '', corretiva: false, preventiva: false }
  ] : dinamica);
  const [inputFields1, setInputFields1] = useState(dinamica1.length < 1 ? [{ Item: '', Descricaopeca: '', Quantidade: '' }
  ] : dinamica1);
  const [inputFields2, setInputFields2] = useState(dinamica2.length < 1 ? [{ Resp: '', Tipo: '', data: '' }
  ] : dinamica2);
  const [inputFields3, setInputFields3] = useState(dinamica3.length < 1 ? [{ datas: '', Atividade: '' }
  ] : dinamica3);
  //BANCO DE DADOS




  //update inputs fixo da tela

  async function Salvar() {
    const obj = {
      numeroOS, solicitante, dataPrevisaoSaida, equipamentos, dataEntrega, dataSaida, modelo, horaEquipamento,
      horaEquipamento2, codigoTag, descricao
    };

    const res = await axios.post(Conexao.api + 'SalvarIndexSondagemPesquisa.php', inputFields);

    //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
    console.log(res)

    if (res.data.success === true) {
    }
    Confirmacao(solicitante)
  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }


  //listar inputs fixo da tela


  async function BuscaracorretivaPreventiva() {

    const res = await axios.get(Conexao.api + 'ListaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOS);

    setManutecao(res.data.result)
    console.log('retornoListar', res.data.result)

    if (res.data.success === true) {

      setSolicitante(res.data.result[0].solicitante)
      setDataPrevisaoSaida(res.data.result[0].PrevisaoSaida)
      setEquipamentos(res.data.result[0].equipamentos)

      setDataEntrega(res.data.result[0].dataEntrega)
      setDataSaida(res.data.result[0].dataSaida)
      setModelo(res.data.result[0].modelo)

      setHoraEquipamento(res.data.result[0].horaEquipamento)
      setHoraEquipamento2(res.data.result[0].horaEquipamento2)
      setHoraEquipamento2(res.data.result[0].PrevisaoSaida)
      setCodigoTag(res.data.result[0].codigoTag)
      setDescricao(res.data.result[0].descricao)
      setAux1DataPrevistaSaida(res.data.result[0].aux1DataPrevistaSaida)
  








      console.log('retornoListarmanutecao', solicitante)
      console.log('retornoListarmanutecao', dataPrevisaoSaida)

    }
    Confirmacao()
    BuscarLista()
  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }


  //Lista Dinamica

  async function BuscarLista() {

    const res = await axios.get(Conexao.api + 'ListaDinamicaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOS);

    setDinamica(res.data.result)
    console.log('retorno', res.data.result)

  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }


  //Lista Dinamica1

  async function BuscarLista1() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_1ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOS);

    setDinamica1(res.data.result)
    console.log('retorno1', res.data.result)

  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }


  //Lista Dinamica2

  async function BuscarLista2() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_2ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOS);

    setDinamica2(res.data.result)
    console.log('retorno2', res.data.result)

  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }

  //Lista Dinamica3

  async function BuscarLista3() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_3ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOS);

    setDinamica3(res.data.result)
    console.log('retorno3', res.data.result)

  };

  function Confirmacao() {
    alert('Solicitação aberta com Sucesso!')
  }


    //function dataPrevisaoSaida() {

    //  if (aux1DataPrevistaSaida != "")

     //setAux2DataPrevistaSaida(false)

    //}


 

//console.log('inputFields', inputFields)

return <div >
  <Navbar />
  <div className='titulolaboratorio'>
    <h1 className='texttitulo'>REGISTRO INTERNO DE MANUTENÇÃO CORRETIVA OU PREVENTIVA</h1>
  </div>

  <div>
    {props.descricao}
    {props.corretiva}
    {props.preventiva}
  </div>

  <br />
  <br />


  <form className="container-fluid ">
    <div class="container text-center">

      <div class="row align-items-start">
        <div class="col-3">
          <h7>Número da Ordem de Serviço</h7>
          <input name='numeroOS' id='numeroOS' className='form-control text-center colorInput - imput_cab' onChange={(e) => setNumeroOS(e.target.value)} ></input>

          <div className="btn btn-outline-success-center " type="submit"><button onClick={(e) => BuscarLista(e)} class="btnlogin  me-md-2  " > Buscar</button>
          </div>

        </div>
      </div>
    </div>

    <br />
    <br />

    <body  >

      <div class="container text-center">
        <div class="row align-items-start">

          <div class="col">
            <h7>solicitante</h7>
            <input name='solicitante' id='solicitante' className='form-control text-center colorInput ' disabled="true" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} ></input>
          </div>




          <div class="col">
            <h7>Data Prevista Saida</h7>


            <input name='dataPrevisaoSaida' id='dataPrevisaoSaida' type='date' className='form-control text-center colorInput ' format='YYYY/MM/DD' value={dataPrevisaoSaida} onChange={(e) => setDataPrevisaoSaida(e.target.value)} ></input>
         
         
          </div>





          <div class="col">
            <h7>Equipamentos</h7>
            <input name='equipamentos' id='equipamentos' className='form-control text-center colorInput ' disabled="true" value={equipamentos} onChange={(e) => setEquipamentos(e.target.value)} ></input>
          </div>


        </div>
      </div>

    </body>

    <br />
    <br />
    <br />


    <body  >
      <div class="container text-center">
        <div class="row align-items-start">

          <div class="col">
            <h7>Data Entrada</h7>
            <input name='dataEntrega' id='dataEntrega' type='date' className='form-control text-center colorInput ' value={dataEntrega} onChange={(e) => setDataEntrega(e.target.value)} ></input>
          </div>

          <div class="col">
            <h7>Data Saida</h7>
            <input name='dataSaida' id='dataSaida' type='date' className='form-control text-center colorInput ' value={dataSaida} onChange={(e) => setDataSaida(e.target.value)} ></input>
          </div>

          <div class="col">
            <h7>Modelo</h7>
            <input name='modelo' id='modelo' className='form-control text-center colorInput ' disabled="true" value={modelo} onChange={(e) => setModelo(e.target.value)} ></input>
          </div>

        </div>
      </div>
    </body>

    <br />
    <br />
    <br />

    <body  >
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <h7>Hora do Equipamento Entada</h7>
            <input name='horaEquipamento' id='horaEquipamento' type='time' className='form-control text-center colorInput ' value={horaEquipamento} onChange={(e) => setHoraEquipamento(e.target.value)} ></input>
          </div>

          <div class="col">
            <h7>Hora do Equipamento Saida</h7>
            <input name='horaEquipamento2' id='horaEquipamento2' type='time' className='form-control text-center colorInput ' value={horaEquipamento2} onChange={(e) => setHoraEquipamento2(e.target.value)} ></input>
          </div>
          <div class="col">
            <h7>Codigo/Tag</h7>
            <input name='codigoTag' id='codigoTag' className='form-control text-center colorInput ' disabled="true" value={codigoTag} onChange={(e) => setCodigoTag(e.target.value)} ></input>
          </div>

        </div>
      </div>
    </body>

    <br />
    <br />
    <br />
    <br />




    <div class="container text-center">,
      <div class="Painel" >
        <br />

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={corretiva} ></input>
          <label class="form-check-label" for="inlineCheckbox1">MANUTEÇÃO CORRETIVA</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value={preventiva}></input>
          <label class="form-check-label" for="inlineCheckbox2">MANUTEÇÃO PREVENTIVA</label>
        </div>
        <br />
        <br />
      </div>

      <br />
    </div>
    <br />
    <br />
    <br />

    <body class="container text-center">

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
    <br />

    <body class="container text-center">
      <div class="row align-items-start">

        {dinamica.length > 0 && <ListaDinamica dataDinamica={dinamica} inputFields={inputFields} setInputFields={setInputFields} />}

      </div>

      <br />

      <div class="Painel" >

        <br />
        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input " type="checkbox" id="inlineCheckbox3" value="opcao3"></input>
            <label class="form-check-label" for="inlineCheckbox1">INTERNA</label>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="opcao4"></input>
            <label class="form-check-label" for="inlineCheckbox2">EXTERNA</label>
          </div>

        </div>
        <br />
      </div>
    </body>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <body class="container text-center">
      <div class="row align-items-start">

        {dinamica1.length > 0 && <ListaDinamica1 dataDinamica1={dinamica1} inputFields1={inputFields1} setInputFields1={setInputFields1} />}

      </div>
    </body>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    <div class="container text-center">


      {dinamica2.length > 0 && <ListaDinamica2 dataDinamica2={dinamica2} inputFields2={inputFields2} setInputFields2={setInputFields2} />}

    </div>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <body class="container text-center">
      <div class="row align-items-start">


        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="opcao5"></input>
            <label class="form-check-label" for="inlineCheckbox5">Avaria Normal - Por Desgate,Etc..</label>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="opcao6"></input>
            <label class="form-check-label" for="inlineCheckbox6">Limpeza indequada            </label>
          </div>
        </div>

        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="opcao7"></input>
            <label class="form-check-label" for="inlineCheckbox7">Falta de Inspeção on-line        </label>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="opcao8"></input>
            <label class="form-check-label" for="inlineCheckbox8">Manuteção Preventiva</label>
          </div>
        </div>


        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="opcao9"></input>
            <label class="form-check-label" for="inlineCheckbox9">Falta de Inspeção on-line </label>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox10" value="opcao10"></input>
            <label class="form-check-label" for="inlineCheckbox10">Melhoria</label>
          </div>
        </div>

        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox11" value="opcao11"></input>
            <label class="form-check-label" for="inlineCheckbox11">Operação Inadequada</label>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox12" value="opcao12"></input>
            <label class="form-check-label" for="inlineCheckbox12">Outros</label>
          </div>
        </div>

        <div class="container text-center">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox13" value="opcao13"></input>
            <label class="form-check-label" for="inlineCheckbox13">Defeito do Equipamemento ou Instalação</label>


          </div>
        </div>
      </div>
      &nbsp; &nbsp; &nbsp;
      <div class="form-check form-check-inline">
        <div class="row">

          <textarea cols={20} rows={1} className='form-control w-200 colorInput p-0 resize' disabled="true" onChange={(e) => setOutros(e.target.value)} value={outros}  ></textarea>
        </div>

      </div>


    </body>

    <br />
    <br />
    <br />

    <body class="container text-center">
      <div class="row align-items-start">

        {dinamica3.length > 0 && <ListaDinamica3 dataDinamica3={dinamica3} inputFields3={inputFields3} setInputFields3={setInputFields3} />}
      </div>


    </body>

  </form>


  <br />

  <div className="btn btn-outline-success-center " type="submit"><button onClick={(e) => (BuscaracorretivaPreventiva(e), BuscarLista(e), BuscarLista1(e), BuscarLista2(e), BuscarLista3(e))} class="btnlogin  me-md-2  " > Salvar </button>
  </div>


  <br />

  <br />
  <br />
  <br />

</div>

}

export default ManutencaoCorretivaPreventiva;
