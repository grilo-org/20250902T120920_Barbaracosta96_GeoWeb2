
import { useState, useEffect } from 'react';
import Navbar from '../NavbarManutencao/navbarManutencao';
import './RegInternoManutencaoCorretivaPreventiva.css';
import axios from 'axios';
import Conexao from '../../Config/conexao';
import ListaDinamica from '../ListaDinamica';
import ListaDinamica1 from '../ListaDinamica1';
import ListaDinamica2 from '../ListaDinamica2';
import ListaDinamica3 from '../ListaDinamica3';
import ListaDinamica4 from '../ListaDinamica4';
import SweetAlert from 'react-bootstrap-sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import moment from 'moment'
import VariavelGlobal from '../../Config/Variavelglobal'
import { Dropdown, Selection } from 'react-dropdown-now';



function ManutencaoCorretivaPreventiva(props) {

  const [numeroOs, setNumeroOs] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [dataPrevisaoSaida, setDataPrevisaoSaida] = useState(Date)

  const [equipamentos, setEquipamentos] = useState('')
  const [dataEntrada, setDataEntrada] = useState('')
  const [dataSaida, setDataSaida] = useState('')
  const [modelo, setModelo] = useState('')
  const [horarioEntrada, setHorarioEntrada] = useState('')
  const [horarioSaida, setHorarioSaida] = useState('')
  const [codigoTag, setCodigoTag] = useState('')
  const [descricao, setDescricao] = useState('')
  const [manutecao, setManutecao] = useState([])
  const [dinamica, setDinamica] = useState([])
  const [dinamica1, setDinamica1] = useState([])
  const [dinamica2, setDinamica2] = useState([])
  const [dinamica3, setDinamica3] = useState([])
  const [obs, setObs] = useState()
  const [clientes, setClientes] = useState([]);
  const [clientes1, setClientes1] = useState([]);
  const [clientes2, setClientes2] = useState([]);
  const [clientes3, setClientes3] = useState([]);
  const [clientes4, setClientes4] = useState([]);
  const [aux1DataPrevistaSaida, setAux1DataPrevistaSaida] = useState()


  const [confirmacao, setConfirmacao] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');

  const [confirmacao1, setConfirmacao1] = useState(false);
  const [confirmacaoId1, setConfirmacaoId1] = useState('');

  const [confirmacao2, setConfirmacao2] = useState(false);
  const [confirmacaoId2, setConfirmacaoId2] = useState('');

  const [confirmacao3, setConfirmacao3] = useState(false);
  const [confirmacaoId3, setConfirmacaoId3] = useState('');

  const [confirmacao4, setConfirmacao4] = useState(false);
  const [confirmacaoId4, setConfirmacaoId4] = useState('');

  const [descricaoModal, setDescricaoModal] = useState()
  const [manutencaoPC, setManutencaoPC] = useState()

  const [item, setItem] = useState()
  const [descricaoPeca, setDescricaoPeca] = useState()
  const [quantidade, setQuantidade] = useState()

  const [responsavel, setResponsavel] = useState()
  const [tipo, setTipo] = useState()
  const [dataModal, setDataModal] = useState()

  const [dataModal2, setDataModal2] = useState()
  const [atividade, setAtividade] = useState()

  const [corretiva_preventiva, setCorretiva_preventiva] = useState()
  const [interna_externa, setInterna_externa] = useState()

  const [causa, setCausa] = useState()
  const [descricaocausa, setDescricaocausa] = useState()
  const [habilitar, setHabilitar] = useState(true)
  const [bnthabilitar, setBnthabilitar] = useState("true")
  const [bntencerrar, setBntEncerrar] = useState("true")
  const [bntfinalizar, setBntFinalizar] = useState("true")


  const [statu, setStatu] = useState('')

  const [setorLogado, setSetorLogado] = useState();
  const [setorDoCargo, setSetorDoCargo] = useState();
  const [nivelDoCargo, setNivelDoCargo] = useState();

  //Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  function handleClose() { setShow(false) }
  function handleClose1() { setShow1(false) }
  function handleClose2() { setShow2(false) }
  function handleClose3() { setShow3(false) }
  function handleClose4() { setShow4(false) }

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);

  //List



  function confirmEncerramentoOS() {
    SalvarListaManutecacorretivaPreventiva("Encerrada")
    setHabilitar(true)
    setBnthabilitar(true)
    setBntEncerrar(true)
    setBntFinalizar(true)
    VariavelGlobal.ButtonEnable = true
  }
  function confirmSalvar() {
    SalvarListaManutecacorretivaPreventiva("EmAndamento")
    setBntFinalizar(false)
    VariavelGlobal.ButtonEnable = false
  }

  function confirmFinalizada() {
    SalvarListaManutecacorretivaPreventiva("Finalizada")
    setHabilitar(true)
    setBnthabilitar(true)
    setBntEncerrar(true)
    setBntFinalizar(true)
    VariavelGlobal.ButtonEnable = true
    getNivel()
  }


  function carregaUser() { setSetorLogado(localStorage.usuario) };
  useEffect(() => { carregaUser() }, []);

  async function getNivel() {
    const res = await axios.get(Conexao.api + 'BuscarVerificaSetorLogadoWEB.php? setorLogado=' + setorLogado);
    if (res.data.success === false) {
      //  setLoading(false)
      //  falha();  
    } else {

      if (res.data.nivel === "Gerente") {
        setHabilitar(false)
        setBnthabilitar(false)
        setBntEncerrar(false)
        setBntFinalizar(true)
        VariavelGlobal.ButtonEnable = false
        console.log("Nivel_Dentro  " + res.data.nivel);
        console.log("Usuario  " + setorLogado);
      } else {
        if (res.data.nivel === "Supervisor") {
          setHabilitar(false)
          setBnthabilitar(false)
          setBntEncerrar(false)
          setBntFinalizar(true)
          VariavelGlobal.ButtonEnable = false
        } else {
          setHabilitar(true)
          setBnthabilitar(true)
          setBntEncerrar(true)
          setBntFinalizar(true)
          VariavelGlobal.ButtonEnable = true
        }
      }

    }
  };

  //BANCO DE DADOS

  //Delete lista dinamica 

  async function deleteUser(confirmacaoId) {

    const res = await axios.get(Conexao.api + 'ExcluirListaDinamica.php?id=' + confirmacaoId);
    if (res.data.success === true) {
      setConfirmacao(false);
      console.log('carlos' + numeroOs)
      BuscarLista()
    }

  }

  function confirmDeleteUser(id) {
    setConfirmacaoId(id);
    setConfirmacao(true);
    // alert('Excluir o item:'+ id)
  }


  //Delete lista dinamica1

  async function deleteUser1(confirmacaoId1) {

    const res = await axios.get(Conexao.api + 'ExcluirListaDinamica1.php?id=' + confirmacaoId1);
    if (res.data.success === true) {
      setConfirmacao1(false);
      BuscarLista1()
    }
  }

  function confirmDeleteUser1(id) {
    setConfirmacaoId1(id);
    setConfirmacao1(true);
    // alert('Excluir o item:'+ id)
  }

  //Delete lista dinamica2

  async function deleteUser2(confirmacaoId2) {

    const res = await axios.get(Conexao.api + 'ExcluirListaDinamica2.php?id=' + confirmacaoId2);
    if (res.data.success === true) {
      setConfirmacao2(false);
      BuscarLista2()
    }
  }

  function confirmDeleteUser2(id) {
    setConfirmacaoId2(id);
    setConfirmacao2(true);
    //alert('Excluir o item:'+ id)
  }

  //Delete lista dinamica3

  async function deleteUser3(confirmacaoId3) {

    const res = await axios.get(Conexao.api + 'ExcluirListaDinamica3.php?id=' + confirmacaoId3);
    if (res.data.success === true) {
      setConfirmacao3(false);
      BuscarLista3()
    }
  }

  function confirmDeleteUser3(id) {
    setConfirmacaoId3(id);
    setConfirmacao3(true);
    // alert('Excluir o item:'+ id)
  }

  //Delete lista dinamica4
  console.log('Id4', confirmacaoId4)
  async function deleteUser4(confirmacaoId4) {

    const res = await axios.get(Conexao.api + 'ExcluirListaDinamica4.php?id=' + confirmacaoId4);
    if (res.data.success === true) {
      setConfirmacao4(false);
      BuscarLista4()
    }
  }

  function confirmDeleteUser4(id) {
    setConfirmacaoId4(id);
    setConfirmacao4(true);
    // alert('Excluir o item:'+ id)
  }


  //update inputs fixo da tela

  async function SalvarListaManutecacorretivaPreventiva(status) {
    const obj = {
      numeroOs, solicitante, equipamentos, dataPrevisaoSaida, modelo, dataEntrada, dataSaida, horarioEntrada, horarioSaida, obs, codigoTag, statu: status
    };

    const res = await axios.post(Conexao.api + 'SalvarManutencaoPreventivaCorretiva.php', obj);

    //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
    console.log('Salvar', res)

    if (res.data.success === true) {
      alert('Atualizado Sucesso!')
    }

  };
  function Confirmacao() {

    alert('Atualizado Sucesso!')
  }
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


  //Insert

  async function SalvarListaD() {
    const obj = { numeroOs, descricaoModal, manutencaoPC };

    const res = await axios.post(Conexao.api + 'insertListaDinamica.php', obj);

    console.log('Insertlista2', numeroOs, descricaoModal, manutencaoPC)

    if (res.data.success === true) {
      setShow(false);
      BuscarLista()
    }

  };

  function Confirmacao() {
    alert('Insert com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  async function SalvarListaD1() {
    const obj = { numeroOs, item, descricaoPeca, quantidade };

    const res = await axios.post(Conexao.api + 'insertListaDinamica1.php', obj);

    if (res.data.success === true) {
      setShow1(false);
      BuscarLista1()
    }

  };

  function Confirmacao() {
    alert('Insert com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  console.log('Insertlista2', numeroOs, responsavel, tipo, dataModal)

  async function SalvarListaD2() {
    const obj = { numeroOs, responsavel, tipo, dataModal };

    const res = await axios.post(Conexao.api + 'InsertListaDinamica2.php', obj);

    console.log('Insertlista2', numeroOs, responsavel, tipo, dataModal)
    if (res.data.success === true) {
      setShow2(false);
      BuscarLista2()
    }

  };

  function Confirmacao() {
    alert('Insert com Sucesso!')
  }

  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

  async function SalvarListaD3() {
    const obj = { numeroOs, dataModal2, atividade };

    const res = await axios.post(Conexao.api + 'InsertListaDinamica3.php', obj);

    if (res.data.success === true) {
      setShow3(false);
      BuscarLista3()
    }

  };

  function Confirmacao() {
    alert('Insert com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


  async function SalvarListaD4() {
    const obj = { numeroOs, causa, descricaocausa };

    const res = await axios.post(Conexao.api + 'InsertListaDinamica4.php', obj);

    if (res.data.success === true) {
      setShow4(false);
      BuscarLista4()
    }

  };

  function Confirmacao() {
    alert('Insert com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //








  //listar inputs fixo da tela
  //listar

  async function BuscaracorretivaPreventiva() {

    const res = await axios.get(Conexao.api + 'ListaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

    setManutecao(res.data.result)
    console.log('retornoListar_Data', res.data.result)

    if (res.data.success === true) {

      setSolicitante(res.data.result[0].solicitante)
      setDataPrevisaoSaida(res.data.result[0].dataPrevisaoSaida)
      setEquipamentos(res.data.result[0].equipamentos)

      setDataEntrada(res.data.result[0].dataEntrega)
      setDataSaida(res.data.result[0].dataSaida)
      setModelo(res.data.result[0].modelo)

      setDataEntrada(res.data.result[0].dataEntrada)
      setHorarioEntrada(res.data.result[0].horarioEntrada)
      setHorarioSaida(res.data.result[0].horarioSaida)
      setCodigoTag(res.data.result[0].codigoTag)
      setDescricao(res.data.result[0].descricao)
      setAux1DataPrevistaSaida(res.data.result[0].aux1DataPrevistaSaida)

      setCorretiva_preventiva(res.data.result[0].corretiva_preventiva)
      setInterna_externa(res.data.result[0].interna_externa)
      setStatu(res.data.result[0].statu)

      setHabilitar(false)
      setBnthabilitar(false)
      VariavelGlobal.ButtonEnable = false


      if (res.data.result[0].statu === "EmAndamento") {
        setHabilitar(false)
        setBnthabilitar(false)
        setBntFinalizar(false)
        VariavelGlobal.ButtonEnable = false
      }
      if (res.data.result[0].statu === "Encerrada") {
        setHabilitar(true)
        setBnthabilitar(true)
        VariavelGlobal.ButtonEnable = true

      }
      if (res.data.result[0].statu === "Finalizada") {
        getNivel()
      }





      console.log('retornoStat', res.data.result[0].statu)


      console.log('retornoListarmanutecao', res.data.result)


    } else {
      LIMPAR()
      alert('Ordem Serviço não aberta')
      setHabilitar(true)
      setBnthabilitar(true)
    }



    Confirmacao()
    BuscarLista()
  };

  function Confirmacao() {
    /// alert('Solicitação aberta com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

  //Lista Dinamica

  async function BuscarLista() {

    const res = await axios.get(Conexao.api + 'ListaDinamicaManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
    if (res.data.success) {
      setClientes(res.data.result)
    }

    console.log('Lista  ' + res.data.success)
    BuscarLista1()
  };

  function Confirmacao() {
    //alert('Solicitação aberta com Sucesso!')
  }


  //Lista Dinamica1

  async function BuscarLista1() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_1ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
    if (res.data.success) {
      setClientes1(res.data.result)
    }
    console.log('retorno1', res.data.success)
    BuscarLista2()
  };

  function Confirmacao() {

  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  //Lista Dinamica2

  async function BuscarLista2() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_2ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);

    if (res.data.success) {
      setClientes2(res.data.result)
    }
    console.log('retorno2', res.data.result)
    BuscarLista3()
  };

  function Confirmacao() {
    //alert('Solicitação aberta com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  //Lista Dinamica3

  async function BuscarLista3() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_3ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
    if (res.data.success) {
      setClientes3(res.data.result)
    }

    console.log('retorno3', res.data.result)
    BuscarLista4()
  };

  function Confirmacao() {
    //alert('Solicitação aberta com Sucesso!')
  }


  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

  //Lista Dinamica4

  async function BuscarLista4() {

    const res = await axios.get(Conexao.api + 'ListaDinamica_4ManutencaoPreventivaCorretiva.php?numeroOS=' + numeroOs);
    if (res.data.success) {
      setClientes4(res.data.result)


    }

    console.log('retorno4', res.data.result)

  };

  function Confirmacao() {
    //alert('Solicitação aberta com Sucesso!')
  }
  function LIMPAR() {

    setSolicitante("")
    setDataPrevisaoSaida("")
    setEquipamentos("")

    setDataEntrada("")
    setDataSaida("")
    setModelo("")

    setDataEntrada("")
    setHorarioEntrada("")
    setHorarioSaida("")
    setCodigoTag("")
    setDescricao("")
    setAux1DataPrevistaSaida("")

    setCorretiva_preventiva("")
    setInterna_externa("")
  }

  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

  const Listamanutecao = [
    { label: "Corretiva", value: 'Corretiva' },
    { label: "Preventiva", value: 'Preventiva' },

  ];
  const ListaPeças = [
    { label: "Filro", value: 'Filro' },
    { label: "Correia", value: 'Correia' },
    { label: "Outros", value: 'Outros' },

  ];
  const ListaTipo = [
    { label: "Calderaria", value: 'Calderaria' },
    { label: "Mecanica", value: 'Mecanica' },
    { label: "Eletrica", value: 'Eletrica' },
    { label: "Geral", value: 'Geral' },

  ];
  const Listacausa = [
    { label: "Avaria normal(Desgaste,etc..)", value: 'Avaria' },
    { label: "Manuteção deficiente", value: 'Manutecao' },
    { label: "Falta de inspeção", value: 'Inspecao' },
    { label: "Operação inadequada", value: 'Operacao' },
    { label: "Defeito do equipamento ou instalação", value: 'Defeito' },
    { label: "Limpeza inadequada", value: 'Limpeza' },
    { label: "Manuteção Preventiva", value: 'MPreventiva' },
    { label: "Melhoria", value: 'Melhoria' },
    { label: "Outros", value: 'Outros' },

  ];
  useEffect(() => {
    //console.log('checkbox',inlineCheckbox1.value)
    // console.log(aux3DataPrevistaSaida)
  })


  return <div >
    <Navbar />
    <div className='titulolaboratorio container-fluid'>
      <h1 className='texttitulo'>REGISTRO INTERNO DE MANUTENÇÃO CORRETIVA OU PREVENTIVA</h1>
    </div>

    <div>
      {props.descricao}
      {props.corretiva}
      {props.preventiva}
    </div>

    <br />
    <br />


    <body class="container text-center ">

      <div class="container text-center ">
        <div class="row d-flex align-items-end justify-content-center p-2">

          <div class="col-md-3 md-0">

            <h6>Número da Ordem de Serviço</h6>

            <input name='numeroOs' id='numeroOs' className='form-control text-center' onChange={(e) => setNumeroOs(e.target.value)} ></input>

            <div class="col-4">
              <div className="btn btn-outline-success-center " type="submit"><button onClick={(e) => BuscaracorretivaPreventiva(e)} class="btnlogin me-md-2" > Buscar</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </body>


    <form className="container-fluid ">
      <br />
      <br />

      <body  >

        <div class="container text-center">
          <div class="row align-items-start">

            <div class="col">
              <h7>Solicitante</h7>
              <input name='solicitante' id='solicitante' className='form-control text-center colorInput ' disabled="true" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} ></input>
            </div>




            <div class="col">
              <h7>Data Prevista Saida</h7>


              <input name='dataPrevisaoSaida' id='dataPrevisaoSaida' type='date' className='form-control text-center colorInput ' disabled={habilitar} format='YYYY/MM/DD' value={dataPrevisaoSaida} onChange={(e) => setDataPrevisaoSaida(e.target.value)} ></input>


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
              <input name='dataEntrada' id='dataEntrada' type='date' className='form-control text-center colorInput ' disabled={habilitar} value={dataEntrada} onChange={(e) => setDataEntrada(e.target.value)} ></input>
            </div>

            <div class="col">
              <h7>Data Saida</h7>
              <input name='dataSaida' id='dataSaida' type='date' className='form-control text-center colorInput ' disabled={habilitar} value={dataSaida} onChange={(e) => setDataSaida(e.target.value)} ></input>
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
              <input name='horaEquipamento' id='horaEquipamento' type='time' className='form-control text-center colorInput ' disabled={habilitar} value={horarioEntrada} onChange={(e) => setHorarioEntrada(e.target.value)} ></input>
            </div>

            <div class="col">
              <h7>Hora do Equipamento Saida</h7>
              <input name='horaEquipamento2' id='horaEquipamento2' type='time' className='form-control text-center colorInput ' disabled={habilitar} value={horarioSaida} onChange={(e) => setHorarioSaida(e.target.value)} ></input>
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



      <body class="container text-center">

        <div class="row align-items-start">
          <div class="row">
            <h6>DESCRIÇÃO: </h6>
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




        <br />

        <div class="Painel" >

          <div class="col">
            <h6>TIPO DE MANUTEÇÃO:</h6>
            <input name='equipamentos' id='equipamentos' className='form-control text-center colorInput ' disabled="true" value={corretiva_preventiva} onChange={(e) => setCorretiva_preventiva(e.target.value)} ></input>
          </div>

          <br />
          <div class="col">
            <input name='equipamentos' id='equipamentos' className='form-control text-center colorInput ' disabled="true" value={interna_externa} onChange={(e) => setInterna_externa(e.target.value)} ></input>
          </div>
        </div>




      </body>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </form>



    <div class="container text-center">
      <div class="row align-items-start">
        <h6>SERVIÇO A EXECUTAR OU EXECUTADOS: </h6>
        <ListaDinamica arrayClientes={clientes} clickDelete={confirmDeleteUser} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow} class="btnlogin  me-md-2  " disabled={habilitar} hidden={bnthabilitar} > Adicionar </button>
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
            reverseButtons={false}
          >
            Deseja excluir o Item selecionado?
          </SweetAlert> : null}

        <Modal show={show} onHide={handleClose}  >
          <Modal.Header closeButton>
            <Modal.Title>Serviço a Executar ou Executado:</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Manutenção</Form.Label>
                <Select

                  options={Listamanutecao}
                  onChange={item => {
                    setManutencaoPC(item.value);

                    console.log(item.value);
                  }} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" onChange={(e) => { setDescricaoModal(e.target.value); console.log(descricaoModal) }} rows={3}


                />
              </Form.Group>
            </Form>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fechar
            </Button>

            <Button variant="primary" onClick={(e) => (SalvarListaD(e))}>Salvar </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container text-center">
      <div class="row align-items-start">
        <h6>REPOSIÇÃO DE PEÇA/COMPONENTES: </h6>
        <ListaDinamica1 arrayClientes1={clientes1} clickDelete1={confirmDeleteUser1} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow1} class="btnlogin  me-md-2  " disabled={habilitar} hidden={bnthabilitar} > Adicionar </button>
        </div>
        {
          confirmacao1 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser1(confirmacaoId1)}
            onCancel={() => setConfirmacao1(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show1} onHide={handleClose1}  >
          <Modal.Header closeButton>
            <Modal.Title>Reposição de peça/Componentes:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Item:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setItem(e.target.value) }}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição de Material:</Form.Label>
                <Select

                  options={ListaPeças}
                  onChange={item => {
                    // setManutencaoPC(item.value);

                    console.log(item.value);
                  }} />
                <Form.Control
                  type="text"
                  onChange={(e) => { setQuantidade(e.target.value) }}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Quantidade:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setQuantidade(e.target.value) }}
                  autoFocus
                />
              </Form.Group>



            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD1(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container text-center">
      <div class="row align-items-start">
        <h6>REALIZAÇÃO: </h6>
        <ListaDinamica2 arrayClientes2={clientes2} clickDelete2={confirmDeleteUser2} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow2} class="btnlogin  me-md-2  " disabled={habilitar} hidden={bnthabilitar} > Adicionar </button>
        </div>
        {
          confirmacao2 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser2(confirmacaoId2)}
            onCancel={() => setConfirmacao2(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show2} onHide={handleClose2}  >
          <Modal.Header closeButton>
            <Modal.Title>Realização</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Responsável:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setResponsavel(e.target.value) }}
                  autoFocus
                />
              </Form.Group>



              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tipo</Form.Label>
                <Select

                  options={ListaTipo}
                  onChange={item => {
                    setTipo(item.value);
                    console.log(item.value);
                  }} />
              </Form.Group>



              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => { setDataModal(moment(e.target.value).format("DD/MM/YYYY")) }}
                  autoFocus
                />

              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD2(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container text-center">
      <div class="row align-items-start">
        <h6>POSSÍVEIS CAUSAS: </h6>
        <ListaDinamica4 arrayClientes4={clientes4} clickDelete4={confirmDeleteUser4} />
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={handleShow4} class="btnlogin  me-md-2  " disabled={habilitar} hidden={bnthabilitar}> Adicionar </button>
        </div>
        {
          confirmacao4 ? <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            onConfirm={() => deleteUser4(confirmacaoId4)}
            onCancel={() => setConfirmacao4(false)}
            reverseButtons={true}
          >
            Deseja excluir o cliente selecionado?
          </SweetAlert> : null}

        <Modal show={show4} onHide={handleClose4}  >
          <Modal.Header closeButton>
            <Modal.Title>Selecione Possiveis Causas </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>


              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Causa</Form.Label>
                <Select

                  options={Listacausa}
                  onChange={item => {
                    setCausa(item.value);
                    console.log(item.value);
                  }} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => { setDescricaocausa(e.target.value) }}
                  autoFocus
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Fechar
            </Button>
            <Button variant="primary" onClick={(e) => (SalvarListaD4(e))}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    </div>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row d-flex align-items-end justify-content-end ">
      <div class="col-4">
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={(e) => (confirmSalvar(e))} class="btnlogin  me-md-2  " hidden={bnthabilitar} Button > Salvar </button>
        </div>
      </div>
    </div>



    <br />
    <br />
    <br />





    <div class="row d-flex align-items-end justify-content-end ">
      <div class="col-4">
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={(e) => (confirmFinalizada(e))} class="btnlogin  me-md-2  " hidden={bntfinalizar} Button > Finalizar Ordem </button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />



    <div class="row d-flex align-items-end justify-content-end ">
      <div class="col-4">
        <div className="btn btn-outline-success-center " type="submit">
          <button onClick={(e) => (confirmEncerramentoOS(e))} class="btnlogin  me-md-2  " hidden={bntencerrar} Button > Encerrar Ordem  </button>
        </div>
      </div>
    </div>
  </div>

}

export default ManutencaoCorretivaPreventiva;
