import React, { useEffect, useState } from "react";
import saveAs from "file-saver";
import axios from 'axios'; // npm i axios
import Navbar from '../NavbarSondagem/navbarSondagem';
import Conexao from '../../Config/conexao';
import ListaDinamicaSondagem from '../BoletimSondagem/ListaDinamicaSondagem';
import { excel } from "react-export-table-to-excel/lib/lib";
import { TryRounded } from "@mui/icons-material";
import SweetAlert from 'react-bootstrap-sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import moment from 'moment'
import VariavelGlobal from '../../Config/Variavelglobal'



import './BoletimSondagem.css'



function BoletimSondagem(props) {

    const [sondagem, setSondagem] = useState("")
    const [clientes, setClientes] = useState([])
    const [cliente1, setCliente1] = useState("")
    const [dataExecucao, setDataExecucao] = useState(Date)
    const [equipamento, setEquipamento] = useState("")
    const [obra, setObra] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [numeroContrato, setNumeroContrato] = useState("")
    const [projeto, setProjeto] = useState("")

    const [show, setShow] = useState(false);
    function handleClose() { setShow(false) }
    const handleShow = () => setShow(true);

    const [descricaoModal, setDescricaoModal] = useState()
    const [sondagemPC, setSondagemPC] = useState()
  
    const [profundidadeDE, setProfundidadeDE] = useState()
    const [profundidadeA, setProfundidadeA] = useState()
    const [avanco, setAvanco] = useState()
    const [fi, setFi] = useState()
    const [revestimento, setRevestimento] = useState()
    const [comprimento, setComprimento] = useState()
    const [recuperacao, setRecuperacao] = useState()
    const [classificacaoLP, setClassificacaoLP] = useState()
    const [cor_aguacirculacao, setCor_aguacirculacao] = useState()
    const [caixa, setCaixa] = useState()
    const [prof, setProf] = useState()
    const [pfase, setPfase] = useState()
    const [sfase, setSfase] = useState()
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState('');

    const [coordenadasE, setCoordenadasE] = useState()
    const [coordenadasN, setCoordenadasN] = useState()
    const [coordenadasZ, setCoordenadasZ] = useState()

    const [inclinacao, setInclinacao] = useState()

    const [comecar1, setComecar1] = useState()
    const [acabar1, setAcabar1] = useState()
    const [avaco1, setAvaco1] = useState()
    const [comecar2, setComecar2] = useState()
    const [acabar2, setAcabar2] = useState()
    const [avaco2, setAvaco2] = useState()

    const [nivelinicio, setNivelinicio] = useState()
    const [nivelFinal, setNivelFinal] = useState()
    const [perda, setPerda] = useState()

    const [nivelAgua, setNivelAgua] = useState()

    const [haster, setHaster] = useState()
    const [amostrador, setAmostrador] = useState()
    const [boquilha, setBoquilha] = useState()


    const [sondador, setSondador] = useState()
    const [auxiliares, setAuxiliares] = useState()
    const [equiauxiliares, setEquiauxiliares] = useState()
    const [viatura, setViatura] = useState()
    const [observacoes, setObservacoes] = useState()

    const [habilitar, setHabilitar] = useState(false)


    function confirmDeleteUser(id) {
        setConfirmacaoId(id);
        setConfirmacao(true);

        // alert('Excluir o item:'+ id)
    }

    function confirmEdite(id, ProfDE, ProfA, avaco, f, revest, compri, recu, classi, cor, cx, pro, P, S) {
        setConfirmacaoId(id);
        setProfundidadeDE(ProfDE)
        setProfundidadeA(ProfA)

        setAvanco(avaco)
        setFi(f)
        setRevestimento(revest)
        setComprimento(compri)
        setRecuperacao(recu)
        setClassificacaoLP(classi)
        setCor_aguacirculacao(cor)
        setCaixa(cx)
        setProf(pro)
        setPfase(P)
        setSfase(S)

        handleShow()

    }


    async function deleteUser(confirmacaoId) {

        const res = await axios.get(Conexao.api + 'Aguardar API=' + confirmacaoId);
        if (res.data.success === true) {
            setConfirmacao(false);
            //console.log('carlos' + numeroOs)
            //BuscarLista()
        }


    }

    async function Buscarboletim() {

        const res = await axios.get(Conexao.api + 'ListaBoletimSondagemWeb.php?sondagem=' + sondagem);


        console.log('retornoListar_Data', res.data.result[0])

        if (res.data.success === true) {

            setCliente1(res.data.result[0].cliente1)
            setDataExecucao(res.data.result[0].dataExecucao)
            setEquipamento(res.data.result[0].equipamento)
            setObra(res.data.result[0].obra)
            setLocalizacao(res.data.result[0].localizacao)
            setNumeroContrato(res.data.result[0].numeroContrato)
            setProjeto(res.data.result[0].projeto)

            setSondador(res.data.result[0].sondador)
            setAuxiliares(res.data.result[0].auxiliares)
            setEquiauxiliares(res.data.result[0].equiauxiliares)
            setViatura(res.data.result[0].viatura)
            setObservacoes(res.data.result[0].observacoes)


            setCoordenadasE(res.data.result[0].coordenadasE)
            setCoordenadasN(res.data.result[0].coordenadasN)
            setCoordenadasZ(res.data.result[0].coordenadasZ)

            setInclinacao(res.data.result[0].inclinacao)
            setComecar1(res.data.result[0].comecar1)
            setAcabar1(res.data.result[0].acabar1)
            setAvaco1(res.data.result[0].avaco1)
            setComecar2(res.data.result[0].comecar2)
            setAcabar2(res.data.result[0].acabar2)
            setAvaco2(res.data.result[0].avaco2)

            setNivelinicio(res.data.result[0].nivelinicio)
            setNivelFinal(res.data.result[0].nivelFinal)
            setPerda(res.data.result[0].perda)
            setNivelAgua(res.data.result[0].nivelAgua)

            setHaster(res.data.result[0].haster)
            setAmostrador(res.data.result[0].amostrador)
            setBoquilha(res.data.result[0].boquilha)


            setSondador(res.data.result[0].sondador)
            setAuxiliares(res.data.result[0].auxiliares)
            setEquiauxiliares(res.data.result[0].equiauxiliares)
            setViatura(res.data.result[0].viatura)
            setObservacoes(res.data.result[0].observacoes)



        } else {
            alert('BOLETIM NÃO REALIZADO')
        }



        BuscarLista()

    };

    async function BuscarLista() {

        const res = await axios.get(Conexao.api + 'ListaDinamicaBoletimSondagemWeb.php?sondagem=' + sondagem);
        if (res.data.success) {
            setClientes(res.data.result)
        }

        console.log('Lista  ' + res.data.success)

    };




    async function SalvarBoletimsondagem() {
        const obj = {
            sondagem, cliente1, equipamento, obra, localizacao, numeroContrato, projeto, sondador, auxiliares,
            equiauxiliares, viatura, observacoes, coordenadasE, coordenadasN, coordenadasZ, inclinacao, comecar1,
            acabar1, avaco1, comecar2, acabar2, avaco2, nivelinicio, nivelFinal, perda, nivelAgua, haster, amostrador,
            boquilha, dataExecucao
        };

        const res = await axios.post(Conexao.api + 'SalvarBoletimSondagemWeb.php', obj);


        //  const res = await axios.post(  + 'InsertAberturaOSManutencao.php', obj);
        console.log('Salvar', res)

        if (res.data.success === true) {
            alert('Boletim Atualizado Sucesso!')
        }




    };
    function Confirmacao() {

        alert('Atualizado Sucesso!')
    }

    async function SalvarListaD(id) {
        const obj = { sondagem,confirmacaoId, profundidadeDE, profundidadeA, avanco, fi, revestimento, comprimento, recuperacao, classificacaoLP, cor_aguacirculacao, caixa, prof, pfase, sfase };

        const res = await axios.post(Conexao.api + 'SalvarListaDinamicaBoletimSondagemWeb.php', obj);

        console.log('Cood',obj )

        if (res.data.success === true) {
            setShow(false);
            //BuscarLista()
        }

    };

    
    function Confirmacao() {
        alert('Insert com Sucesso!')
    }










    return (<div>
        <Navbar />
        <div className='titulolaboratorio container-fluid'>
            <h1 className='texttitulo'>RELATÓRIO DIÁRIO DE SONDAGEM</h1>
        </div>
        <div>
            {props.descricao}
            {props.corretiva}
            {props.preventiva}
        </div>

        <br />
        <br />
        <div>
            <div>


            </div>


        </div>

        <body class="container text-center ">

            <div class="container text-center ">
                <div class="row d-flex align-items-end justify-content-center p-2">

                    <div class="col-md-3 md-0">

                        <h6>SONDAGEM Nº:</h6>
                        <input name='sondagem' id='sondagem' className='form-control text-center' onChange={(e) => setSondagem(e.target.value)} ></input>

                        <div class="col-4">
                            <div className="btn btn-outline-success-center " type="submit"><button onClick={(e) => Buscarboletim(e)} class="btnlogin me-md-2" > Buscar</button>
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
                            <h7>CLIENTES:</h7>
                            <input name='cliente1' id='cliente1' className='form-control text-center colorInput ' disabled={habilitar} value={cliente1} onChange={(e) => setCliente1(e.target.value)} ></input>
                        </div>

                    </div>
                </div>
            </body>

            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">

                        <div class="col">
                            <h7>DATA EXECUÇÃO:</h7>
                            <input name='dataExecucao' id='dataExecucao' type='date' className='form-control text-center colorInput ' disabled={habilitar} format='YYYY/MM/DD' value={dataExecucao} onChange={(e) => setDataExecucao(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>EQUIPAMENTO:</h7>
                            <input name='equipamento' id='equipamento' className='form-control text-center colorInput ' disabled={habilitar} value={equipamento} onChange={(e) => setEquipamento(e.target.value)} ></input>

                        </div>

                    </div>
                </div>
            </body>


            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">

                        <div class="col">
                            <h7>OBRA:</h7>
                            <input name='obra' id='obra' className='form-control text-center colorInput ' disabled={habilitar} value={obra} onChange={(e) => setObra(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>LOCAL:</h7>
                            <input name='localizacao' id='localizacao' className='form-control text-center colorInput ' disabled={habilitar} value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} ></input>
                        </div>

                    </div>
                </div>
            </body>

            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">

                        <div class="col">
                            <h7>CONTRATO Nº:</h7>
                            <input name='numeroContrato' id='numeroContrato' className='form-control text-center colorInput ' disabled={habilitar} value={numeroContrato} onChange={(e) => setNumeroContrato(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>PROJETO:</h7>
                            <input name='projeto' id='projeto' className='form-control text-center colorInput ' disabled={habilitar} value={projeto} onChange={(e) => setProjeto(e.target.value)} ></input>
                        </div>

                    </div>
                </div>
            </body>


            <br />
            <br />
            <br />
        </form>

        <div class="container text-center">
            <div class="row align-items-start">
                <h6>SERVIÇO EXECUTADOS BOLETIM SONDAGEM: </h6>

                <body class="container text-center cinzaclaro" >
                    <div class="col  align-items-center justify-content-center p-2 ">
                        <div class="row d-flex align-items-center justify-content-center ">
                            <div class="col-6 ">
                                <h6></h6>
                            </div>
                            <div class="col-6 ">
                                <h6></h6>
                            </div>
                            <div class="col-6 ">
                                <h6></h6>
                            </div>
                            <div class="col-6 ">
                                <h6></h6>
                            </div>
                            <div class="col-6 ">
                                <h6>FURAÇÃO</h6>
                            </div>
                            <div class="col-6">
                                <h6>AMOSTRA</h6>
                            </div>

                        </div>
                    </div>
                </body>


                <ListaDinamicaSondagem arrayClientes={clientes} clickDelete={confirmDeleteUser} editar={confirmEdite} />
                <div className="btn btn-outline-success-center " type="submit">
                    <button onClick={handleShow} class="btnlogin  me-md-2  "  > ADICIONAR </button>

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
                        <Modal.Title>CORREÇÃO BOLETIM SONDAGEM:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>ID SELECIONADO PARA MODIFICAÇÃO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={confirmacaoId}
                                    autoFocus

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>PROFUNDIDADE_DE:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setProfundidadeDE(e.target.value) }}
                                    value={profundidadeDE}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>PROFUNDIDADE_A:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setProfundidadeA(e.target.value) }}
                                    value={profundidadeA}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>AVANÇO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setAvanco(e.target.value) }}
                                    value={avanco}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Φ:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setFi(e.target.value) }}
                                    value={fi}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>REVESTIMENTO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setRevestimento(e.target.value) }}
                                    value={revestimento}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>COMPRIMENTO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setComprimento(e.target.value) }}
                                    value={comprimento}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>RECUPERAÇÃO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setRecuperacao(e.target.value) }}
                                    value={recuperacao}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>CLASSIFICAÇÃO LITOLÓGICA PROVISÓRIA:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setClassificacaoLP(e.target.value) }}
                                    value={classificacaoLP}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>COR DA ÁGUA DE CIRCULAÇÃO:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setCor_aguacirculacao(e.target.value) }}
                                    value={cor_aguacirculacao}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Nº DA CAIXA:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setCaixa(e.target.value) }}
                                    value={caixa}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>PROF:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setProf(e.target.value) }}
                                    value={prof}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>1ªFASE:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setPfase(e.target.value) }}
                                    value={pfase}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>2ªFASE:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setSfase(e.target.value) }}
                                    value={sfase}
                                />
                            </Form.Group>




                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label>OBSERVAÇÕES</Form.Label>
                                <Form.Control as="textarea" onChange={(e) => { setDescricaoModal(e.target.value); console.log(descricaoModal) }} rows={3}
                                    value={observacoes}
                                />
                            </Form.Group>






                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <Button variant="primary" onClick={(e) => (SalvarListaD(e))}>Salvar </Button>


                    </Modal.Footer>
                </Modal>


            </div>
        </div>

        <br />
        <br />


        <form className="container-fluid ">
            <br />
            <br />

            <body class="container text-center" >

                <div class="col  align-items-center justify-content-center p-2">
                    <div class="row d-flex align-items-center justify-content-center colorInput">


                        <div class="col-3">
                            <h6>COORDENADAS</h6>


                        </div>

                        <div class="col-2">
                            <h6>INCLINAÇÃO DO FURO(º)</h6>

                        </div>

                        <div class="col-6">
                            <h6>SITUAÇÃO DOS TRABALHOS</h6>

                        </div>



                    </div>
                </div>
            </body>





            <body class="container text-center  " >

                <div class="col  align-items-center justify-content-center p-2 ">


                    <div className="row d-flex align-items-center justify-content-center">


                        <div class="col-3">
                            <h7>E</h7>
                            <input name='coordenadasE' id='coordenadasE' className='form-control text-center colorInput ' disabled={habilitar} value={coordenadasE} onChange={(e) => setCoordenadasE(e.target.value)} ></input>
                            <h7>N</h7>
                            <input name='coordenadasN' id='coordenadasN' className='form-control text-center colorInput ' disabled={habilitar} value={coordenadasN} onChange={(e) => setCoordenadasN(e.target.value)} ></input>
                            <h7>Z</h7>
                            <input name='coordenadasZ' id='coordenadasZ' className='form-control text-center colorInput ' disabled={habilitar} value={coordenadasZ} onChange={(e) => setCoordenadasZ(e.target.value)} ></input>

                        </div>


                        <div class="col-2">

                            <textarea cols={100} rows={5} className='form-control w-200 colorInput p-0 resize' disabled={habilitar} onChange={(e) => setInclinacao(e.target.value)} value={inclinacao}  ></textarea>
                        </div>

                        <div class="col-3">
                            <h7>AO COMEÇAR(m):</h7>
                            <input name='comecar1' id='comecar1' className='form-control text-center colorInput ' disabled={habilitar} value={comecar1} onChange={(e) => setComecar1(e.target.value)} ></input>
                            <h7>AO ACABAR(m):</h7>
                            <input name='acabar1' id='acabar1' className='form-control text-center colorInput ' disabled={habilitar} value={acabar1} onChange={(e) => setAcabar1(e.target.value)} ></input>
                            <h7>AVANÇO(m):</h7>
                            <input name='avaco1' id='avaco1' className='form-control text-center colorInput ' disabled={habilitar} value={avaco1} onChange={(e) => setAvaco1(e.target.value)} ></input>


                        </div>
                        <div class="col-3">
                            <h7>AO COMEÇAR(m):</h7>
                            <input name='comecar2' id='comecar2' className='form-control text-center colorInput ' disabled={habilitar} value={comecar2} onChange={(e) => setComecar2(e.target.value)} ></input>
                            <h7>AO ACABAR(m):</h7>
                            <input name='acabar2' id='acabar2' className='form-control text-center colorInput ' disabled={habilitar} value={acabar2} onChange={(e) => setAcabar2(e.target.value)} ></input>
                            <h7>AVANÇO(m):</h7>
                            <input name='avaco2' id='avaco2' className='form-control text-center colorInput ' disabled={habilitar} value={avaco2} onChange={(e) => setAvaco2(e.target.value)} ></input>
                        </div>




                    </div>
                </div>

            </body>

            <br />

            <body class="container text-center" >

                <div class="col  align-items-center justify-content-center p-2">
                    <div class="row d-flex align-items-center justify-content-center colorInput">



                        <div class="col-5">
                            <h6>INFORMAÇÃO SOBRE A ÁGUA</h6>

                        </div>

                        <div class="col-6">
                            <h6>ESTADO CONSERVAÇÃO DO ENSAIO SPT</h6>

                        </div>



                    </div>
                </div>
            </body>


            <body class="container text-center  " >

                <div class="col  align-items-center justify-content-center p-2 colorInput">


                    <div className="row d-flex align-items-center justify-content-center">

                        <div class="col-3">
                            <h7>NIVEL NO INÍCIO:(m):</h7>
                            <input name='nivelinicio' id='nivelinicio' className='form-control text-center colorInput ' disabled={habilitar} value={nivelinicio} onChange={(e) => setNivelinicio(e.target.value)} ></input>
                            <h7>NÍVEL NO FINAL:(m):</h7>
                            <input name='nivelFinal' id='nivelFinal' className='form-control text-center colorInput ' disabled={habilitar} value={nivelFinal} onChange={(e) => setNivelFinal(e.target.value)} ></input>
                            <h7>PERDAS CIRCULAÇÃO:</h7>
                            <input name='perda' id='perda' className='form-control text-center colorInput ' disabled={habilitar} value={perda} onChange={(e) => setPerda(e.target.value)} ></input>



                        </div>
                        <div class="col-2">

                            <h7>NIVEL DE ÁGUA ESTABILIZADO EM:</h7>
                            <textarea cols={100} rows={3} className='form-control w-200 colorInput p-0 resize' disabled={habilitar} onChange={(e) => setNivelAgua(e.target.value)} value={nivelAgua}  ></textarea>


                        </div>


                        <div class="col-6">
                            <h7>HASTES:</h7>
                            <input name='haster' id='haster' className='form-control text-center colorInput ' disabled={habilitar} value={haster} onChange={(e) => setHaster(e.target.value)} ></input>
                            <h7>AMOSTRADOR:</h7>
                            <input name='amostrador' id='amostrador' className='form-control text-center colorInput ' disabled={habilitar} value={amostrador} onChange={(e) => setAmostrador(e.target.value)} ></input>
                            <h7>BOQUILHA:</h7>
                            <input name='boquilha' id='boquilha' className='form-control text-center colorInput ' disabled={habilitar} value={boquilha} onChange={(e) => setBoquilha(e.target.value)} ></input>
                        </div>






                    </div>
                </div>

            </body>

            <br />
            <br />
            <body  >
                <div class="container text-center">
                    <div class="row align-items-start 'form-control text-center colorInput">


                        <div class="col">
                            <h7>EQUIPE:</h7>

                        </div>


                    </div>
                </div>

            </body>

            <br />


            <body  >
                <div class="container text-center">
                    <div class="row align-items-start ">


                        <div class="col">
                            <h7>SONDADOR:</h7>
                            <input name='sondador' id='sondador' className='form-control text-center colorInput ' disabled={habilitar} value={sondador} onChange={(e) => setSondador(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>AUXILIARES:</h7>
                            <input name='auxiliares' id='auxiliares' className='form-control text-center colorInput ' disabled={habilitar} value={auxiliares} onChange={(e) => setAuxiliares(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>EQUIPAMENTOS  AUXILIARES:</h7>
                            <input name='equiauxiliares' id='equiauxiliares' className='form-control text-center colorInput ' disabled={habilitar} value={equiauxiliares} onChange={(e) => setEquiauxiliares(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>VIATURA:</h7>
                            <input name='viatura' id='viatura' className='form-control text-center colorInput ' disabled={habilitar} value={viatura} onChange={(e) => setViatura(e.target.value)} ></input>
                        </div>


                    </div>
                </div>

            </body>
            <br />
            <br />
            <br />
            <br />
            <body  >

                <div class="container text-center">
                    <div class="row align-items-start ">
                        <h7>OBSERVAÇÕES:</h7>
                        <div class="row">
                            <textarea cols={100} rows={5} className='form-control w-200 colorInput p-0 resize' disabled={habilitar} onChange={(e) => setObservacoes(e.target.value)} value={observacoes}  ></textarea>
                        </div>

                    </div>
                </div>


            </body>


        </form>

        <br />
        <br />
        <div class="row d-flex align-items-end justify-content-end ">
            <div class="col-4">
                <div className="btn btn-outline-success-center " type="submit">
                    <button onClick={(e) => (SalvarBoletimsondagem(e))} class="btnlogin  me-md-2  " Button > Salvar </button>
                </div>
            </div>
        </div>

        <br />
        <br />
        <br />



    </div>
    )

}

export default BoletimSondagem;