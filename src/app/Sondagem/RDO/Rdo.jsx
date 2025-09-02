import React, { useEffect, useState } from "react";
import saveAs from "file-saver";
import axios from 'axios'; // npm i axios
import Navbar from '../NavbarSondagem/navbarSondagem';
import Conexao from '../../Config/conexao';
import ListaDinamica_1Rdo from "./ListaDinamica_1Rdo";
import ListaDinamica_2Rdo from "./ListaDinamica_2Rdo"
import { excel } from "react-export-table-to-excel/lib/lib";
import { TryRounded } from "@mui/icons-material";
import SweetAlert from 'react-bootstrap-sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import moment from 'moment'
import VariavelGlobal from '../../Config/Variavelglobal'

import '../RDO/Rdo.css'


function Rdo(props) {


    const [relatorioDObra, setRelatorioDObra] = useState("")
    const [clientes, setClientes] = useState([])
    const [clientes1, setClientes1] = useState([])
    const [datadordo, setDatadordo] = useState(Date)
    const [solicitante, setSolicitante] = useState("")
    const [escopo, setEscopo] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [numeroContrato, setNumeroContrato] = useState("")
    const [propostocontrato, setPropostocontrato] = useState("")

    const [fiscal, setFiscal] = useState("")

    const [equipamento, setEquipamento] = useState("")
    const [tempomanha, setTempomanha] = useState("")
    const [tempotarde, setTempotarde] = useState("")
    const [temponoite, setTemponoite] = useState("")

    const [Descricaoequipamento, setDescricaoequipamento] = useState("")
    const [Quantidadeequipamento, setQuantidadeequipamento] = useState("")
    const [Descricaoefetivo, setDescricaoefetivo] = useState("")
    const [Quantidadeefetivo, setQuantidadeefetivo] = useState("")

    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState('');

    const [PeriodoInicio, setPeriodoInicio] = useState("")
    const [PeriodoFim, setPeriodoFim] = useState("")
    const [CodigoAtividade, setCodigoAtividade] = useState("")
    const [DescricaoAtividade, setDescricaoAtividade] = useState("")
    const [Idtabela, setIdtabela] = useState("")
    const [QuantidadeTabela, setQuantidadeTabela] = useState("")
    const [UnidadeTabela, setUnidadeTabela] = useState("")
    const [ObservacaoTabela, setObservacaoTabela] = useState("")


    const [habilitar, setHabilitar] = useState(false)
    const [bnthabilitar, setBnthabilitar] = useState("true")

    const [show, setShow] = useState(false);
    function handleClose() { setShow(false) }
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    function handleClose1() { setShow1(false) }
    const handleShow1 = () => setShow1(true);


    const ListaDescricaoEquipamento = [
        { label: "Sonda Rotativa", value: 'Sonda' },
        { label: "Trípe de Sondagem", value: 'Tripe' },
        { label: "Veiculo Administrativo", value: 'Veiculo' },
        { label: "Caminhão Prancha", value: 'Caminhao' },

    ];

    const ListasdescricaoEfetivo = [
        { label: "Técnico Mineração", value: 'Tecnico' },
        { label: "Laboratorista", value: 'Laboratorista' },


    ];

    async function BuscarRdo() {
        console.log('buscaRDO', relatorioDObra)
        const res = await axios.get(Conexao.api + 'ListaRdoWeb.php?relatorioDObra=' + relatorioDObra);
      

        if (res.data.success === true) {

         
            setSolicitante(res.data.result[0].solicitante)
            setEscopo(res.data.result[0].escopo)
            setLocalizacao(res.data.result[0].localizacao)
            setEmpresa(res.data.result[0].empresa)
            setNumeroContrato(res.data.result[0].numeroContrato)
            setPropostocontrato(res.data.result[0].propostocontrato)
            setFiscal(res.data.result[0].fiscal)
            setDatadordo(res.data.result[0].datadordo)
            setEquipamento(res.data.result[0].equipamento)
            setTempomanha(res.data.result[0].tempomanha)
            setTempotarde(res.data.result[0].tempotarde)
            setTemponoite(res.data.result[0].temponoite)

        } else {
            alert('BOLETIM NÃO REALIZADO')
        }

        console.log('retornobusca RDO', res.data.result)

        BuscarLista()
    };


    async function BuscarLista() {

        const res = await axios.get(Conexao.api + 'ListaDinamica_Rdo.php?relatorioDObra=' + relatorioDObra);
        if (res.data.success) {
            setClientes(res.data.result)
            setClientes1(res.data.result)
     
        }

        console.log('Lista  ' + res.data.success)

    };


  
    async function SalvarRdo() {
        const obj = {
            relatorioDObra, solicitante, escopo,localizacao, empresa, numeroContrato, propostocontrato, fiscal,datadordo, equipamento, tempomanha, tempotarde, temponoite
        };

        const res = await axios.post(Conexao.api + 'SalvarRdoWeb.php', obj);
  
        console.log('SalvarLista', obj)

        if (res.data.success === true) {
            alert('RDO Atualizado Sucesso!')
        }


    };


    async function SalvarListaD(id) {
        const obj = {
            relatorioDObra, confirmacaoId, Descricaoequipamento, Quantidadeequipamento, Descricaoefetivo, Quantidadeefetivo, PeriodoInicio, PeriodoFim, CodigoAtividade,DescricaoAtividade, Idtabela, QuantidadeTabela, UnidadeTabela, ObservacaoTabela
        };

        const res = await axios.post(Conexao.api + 'SalvarListaDinamicaRdo.php', obj);

        console.log('lista Dinamica',obj )

        if (res.data.success === true) {
            setShow(false);
        BuscarLista()
        }

    };



    
    

    function confirmDeleteUser(id) {
        setConfirmacaoId(id);
        setConfirmacao(true);

        // alert('Excluir o item:'+ id)
    }

    function confirmEdite(id, EquiDescricao, EquiQuantidade, EfeDescricao, EfeQuantidade) {
        setConfirmacaoId(id);

        setDescricaoequipamento(EquiDescricao)
        setQuantidadeequipamento(EquiQuantidade)

        setDescricaoefetivo(EfeDescricao)
        setQuantidadeefetivo(EfeQuantidade)


        handleShow()

    }
    function confirmEdite1(id, Inicio, Fim, Codigo, Atividade,tabela,Quantidade,Unidade,Observacao) {
        setConfirmacaoId(id);

        setPeriodoInicio(Inicio)
        setPeriodoFim(Fim)

        setCodigoAtividade(Codigo)
        setDescricaoAtividade(Atividade)

        setIdtabela()
        setQuantidadeTabela(Quantidade)

        setUnidadeTabela(Unidade)
        setObservacaoTabela(Observacao)

        handleShow1()

       

    }
    async function deleteUser(confirmacaoId) {

        const res = await axios.get(Conexao.api + 'Aguardar API=' + confirmacaoId);
        if (res.data.success === true) {
            setConfirmacao(false);
            //console.log('carlos' + numeroOs)
            //BuscarLista()
        }


    }



    

    return (<div>
        <Navbar />
        <div className='titulolaboratorio container-fluid'>
            <h1 className='texttitulo'>RELATÓRIO DIÁRIO DE OBRA</h1>
        </div>



        <body class="container text-center ">

            <div class="container text-center ">
                <div class="row d-flex align-items-end justify-content-center p-2">

                    <div class="col-md-3 md-0">

                        <h6>Relatorio Diario de Obra:</h6>
                        <input name='relatorioDObra' id='relatorioDObra' className='form-control text-center' value={relatorioDObra}onChange={(e) => setRelatorioDObra(e.target.value)} ></input>

                        <div class="col-4">
                            <div className="btn btn-outline-success-center " type="submit"><button onClick={(e) => BuscarRdo(e)} class="btnlogin me-md-2" > Buscar</button>
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
                        <h6>DADOS DO EMPREENDIMENTO</h6>
                        <br />
                        <div class="col-4">
                            <h7>Área Solicitante:</h7>
                            <input name='solicitante' id='solicitante' className='form-control text-center colorInput ' disabled={habilitar} value={solicitante} onChange={(e) => setSolicitante(e.target.value)} ></input>
                        </div>

                        <div class="col-4">
                            <h7>Escopo:</h7>
                            <input name='escopo' id='escopo' className='form-control text-center colorInput ' disabled={habilitar} value={escopo} onChange={(e) => setEscopo(e.target.value)} ></input>
                        </div>


                        <div class="col-4">
                            <h7>LOCAL:</h7>
                            <input name='localizacao' id='localizacao' className='form-control text-center colorInput ' disabled={habilitar} value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} ></input>
                        </div>

                    </div>
                </div>
            </body>
            <br />



            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">



                        <div class="col-6">
                            <h7>Razão Social:</h7>
                            <input name='empresa' id='empresa' className='form-control text-center colorInput ' disabled={habilitar} value={empresa} onChange={(e) => setEmpresa(e.target.value)} ></input>
                        </div>

                        <div class="col-6">
                            <h7>CONTRATO Nº:</h7>
                            <input name='numeroContrato' id='numeroContrato' className='form-control text-center colorInput ' disabled={habilitar} value={numeroContrato} onChange={(e) => setNumeroContrato(e.target.value)} ></input>
                        </div>

                    </div>
                </div>
            </body>

            <br />

            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">


                        <div class="col-6">
                            <h7>Proposto no Contrato:</h7>
                            <input name='propostocontrato' id='propostocontrato' className='form-control text-center colorInput ' disabled={habilitar} value={propostocontrato} onChange={(e) => setPropostocontrato(e.target.value)} ></input>
                        </div>

                        <div class="col-6">
                            <h7>Fiscal do Contrato:</h7>
                            <input name='fiscal' id='fiscal' className='form-control text-center colorInput ' disabled={habilitar} value={fiscal} onChange={(e) => setFiscal(e.target.value)} ></input>
                        </div>


                    </div>
                </div>
            </body>

            <br />

            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">



                        <div class="col">
                            <h7>DATA EXECUÇÃO:</h7>
                            <input name='datadordo' id='datadordo' type='date' className='form-control text-center colorInput ' disabled={habilitar} format='YYYY/MM/DD' value={datadordo} onChange={(e) => setDatadordo(e.target.value)} ></input>
                        </div>


                        <div class="col">
                            <h7>Equipamento:</h7>
                            <input name='equipamento' id='equipamento' className='form-control text-center colorInput ' disabled={habilitar} value={equipamento} onChange={(e) => setEquipamento(e.target.value)} ></input>
                        </div>



                    </div>
                </div>
            </body>

            <br />
            <br />
            <body  >
                <div class="container text-center">
                    <div class="row align-items-start">


                        <h6>Condições Do Tempo:</h6>
                        <br />
                        <div class="col">
                            <h7>Manhã:</h7>
                            <input name='tempomanha' id='tempomanha' className='form-control text-center colorInput ' disabled={habilitar} value={tempomanha} onChange={(e) => setTempomanha(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>Tarde:</h7>
                            <input name='tempotarde' id='tempotarde' className='form-control text-center colorInput ' disabled={habilitar} value={tempotarde} onChange={(e) => setTempotarde(e.target.value)} ></input>
                        </div>

                        <div class="col">
                            <h7>Noite:</h7>
                            <input name='temponoite' id='temponoite' className='form-control text-center colorInput ' disabled={habilitar} value={temponoite} onChange={(e) => setTemponoite(e.target.value)} ></input>
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

                <br />
                <br />

                <ListaDinamica_1Rdo arrayClientes={clientes} clickDelete={confirmDeleteUser} editar={confirmEdite} />
                <div className="btn btn-outline-success-center " type="submit">
                    <button onClick={handleShow} class="btnlogin  me-md-2  "  > ADIOCIONAR </button>

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

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Descrição Equipamento</Form.Label>
                                <Select
                                   
                                    options={ListaDescricaoEquipamento}
                                    onChange={item => {setDescricaoequipamento(item.value);
                                      
                                    }} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Quantidade Equipamento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setQuantidadeequipamento(e.target.value) }}
                                    value={Quantidadeequipamento}

                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Descrição Efetivo</Form.Label>
                                <Select
                                  
                                    options={ListasdescricaoEfetivo}
                                    
                                    onChange={item => {
                                        setDescricaoefetivo(item.value);
                                        item.value ={Descricaoefetivo}
                                    }} />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Quantidade Efetivo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setQuantidadeefetivo(e.target.value) }}
                                    value={Quantidadeefetivo}

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


        <div class="container text-center">
            <div class="row align-items-start">
               
            <br />
                <br />

                <ListaDinamica_2Rdo arrayClientes={clientes} clickDelete={confirmDeleteUser} editar={confirmEdite1} />
                <div className="btn btn-outline-success-center " type="submit">
                    <button onClick={handleShow1} class="btnlogin  me-md-2  "  > ADIOCIONAR </button>

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

                <Modal show={show1} onHide={handleClose1}  >

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
                                <Form.Label>Inicio:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setPeriodoInicio(e.target.value) }}
                                    value={PeriodoInicio}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Fim:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setPeriodoFim(e.target.value) }}
                                    value={PeriodoFim}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Codigo da Atividade:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setCodigoAtividade(e.target.value) }}
                                    value={CodigoAtividade}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Descricão Atividade:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setDescricaoAtividade(e.target.value) }}
                                    value={DescricaoAtividade}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>ID:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setIdtabela(e.target.value) }}
                                    value={Idtabela}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Quantidade:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setQuantidadeTabela(e.target.value) }}
                                    value={QuantidadeTabela}

                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Unidade:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setUnidadeTabela(e.target.value) }}
                                    value={UnidadeTabela}

                                />
                            </Form.Group>





                            
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Observação:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => { setObservacaoTabela(e.target.value) }}
                                    value={ObservacaoTabela}

                                />
                            </Form.Group>








                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>Fechar</Button>
                        <Button variant="primary" onClick={(e) => (SalvarListaD(e))}>Salvar </Button>


                    </Modal.Footer>
                </Modal>


            </div>
        </div>




        <div class="row d-flex align-items-end justify-content-end ">
            <div class="col-4">
                <div className="btn btn-outline-success-center " type="submit">
                    <button onClick={(e) => (SalvarRdo(e))} class="btnlogin  me-md-2  " Button > Salvar </button>
                </div>
            </div>
        </div>

















    </div>
    )



}

export default Rdo;