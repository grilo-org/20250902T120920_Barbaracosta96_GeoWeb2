import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './app/Context/auth.jsx';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';
import PesquisaMineral from './app/PesquisaMineral/PesquisaMineral';
import Laboratorio from './app/Laboratorio/Laboratorio.jsx';
import listadeterminiacaomassa from './app/Components/ListaAmostra/listadeterminiacaomassaespecificaaparente.jsx';
import Downloand from './app/Downloands/Downloand.jsx';
import TelaSondagem from './app/Sondagem/TelaSondagem.jsx';
import BoletimSondagem from './app/Sondagem/BoletimSondagem/BoletimSondagem.jsx';
import ResultadoLaboratorio from './app/Laboratorio/Resultado/ResultadoLaboratorio.jsx';
import UploadFile from './app/Laboratorio/UploadFile/UploadFile.js';
import telaAmostra from './app/Laboratorio/TelaAmostra.jsx';
import TeorDeAgua from './app/Laboratorio/Ensaios/teoragua.jsx';
import Programacao from './app/Laboratorio/Progamacao/Programacao.jsx';
import ProgramacaoIntacta from './app/Laboratorio/Progamacao/ProgamacaoIntacta/ProgramacaoIntacta';
import ProgramacaoCompactacao from './app/Laboratorio//Progamacao/ProgamacaoCompactacao/ProgramacaoICompactacao';
import PDFProgramacao from './app/Laboratorio/Progamacao/PDFProgramacao/PDFProgramacao.jsx';
import ProgramacaoExpansibilidadeColapso from './app/Laboratorio/Progamacao/ProgamacaoExpansibilidadeColapso/ProgramacaoExpansibilidadeColapso.jsx';
import ProgramacaoPermeabilidade from './app/Laboratorio/Progamacao/ProgramacaoPermeabilidade/ProgramacaoPermeabilidade.jsx';
import ProgramacaoCompressibilidade from './app/Laboratorio/Progamacao/ProgramacaoCompressibilidade/ProgramacaoCompressibilidade.jsx';
import ProgramacaoResistenciaDeformabilidade from './app/Laboratorio/Progamacao/ProgramacaoResistenciaDeformabilidade/ProgramacaoResistenciaDeformabilidade.jsx';
import Manutencao from './app/Manutencao/Manutencao.jsx';
import AberturaOSManutencao from './app/Manutencao/AberturaOrdemdeServico/AberturaOOrdemDeServicoManutencao.jsx';
import RegInternoManutencaoCorretivaPreventiva from './app/Manutencao/Reg_Corretiva_Preventiva/RegInternoManutencaoCorretivaPreventiva.jsx';
import RegInternoManutencaoCorretivaPreventivaModal from './app/Manutencao/Reg_Corretiva_Preventiva/RegInternoManutencaoCorretivaPreventivaModal.jsx';
import Massaesprealemgraos from './app/Laboratorio/Ensaios/RealEmGraos/MassaespecificaRealEmgraos.jsx';
import ProgramacaoTeste from './app/ProgTestes/ProgramacaoTeste.jsx';
import CadastroDeEquipamentos from './app/Manutencao/CadastroDeEquipamentos/CadastroDeEquipamentos.jsx';
import Sgi from './app/SGI/SGI.jsx';
import RegistroDenaoconformidade from './app/SGI/RNC/RegistroDeNaoConformidade.jsx';
import Rnc from './app/SGI/RNCdetalhado/RNCdetalhado.jsx';
import PlanoDeAcoes from './app/SGI/RNCdetalhado/PlanoDeAcoes.jsx';
import QuadroResumo from './app/Laboratorio/QuadroResumo/QuadroResumo.js';
import ProgramacaoManutencao from './app/Manutencao/ProgramacaoDeManutencao/ProgramacaoManutencao.jsx';
import TelaDeEdição from './app/Manutencao/ProgramacaoDeManutencao/TelaDeEdicao.jsx';
import TelaDeEdição2 from './app/Manutencao/ProgramacaoDeManutencao/TelaDeEdicao2.jsx';
import TelaDeEdição3 from './app/Manutencao/ProgramacaoDeManutencao/TelaDeEdicao3.jsx';
import TelaDeEdição4 from './app/Manutencao/ProgramacaoDeManutencao/TelaDeEdicao4.jsx';

import DashBoard from './app/Manutencao/DashBoard/DashBoard.jsx';

import CadastroDeResponsaveis from './app/SGI/CadastroDeResponsaveis/CadastroDeResponsaveis.jsx';

import DashBoardSGI from './app/SGI/DashBoardSGI/DashboardSGI.jsx';
import Epis from './app/SGI/EPIS/Epis.jsx';
import DashBoardSSMT from './app/SGI/EPIS/DashBoardSSMT.jsx';
import CheckListInspecaoDeSonda from './app/SSMT/CheckListInspecaoDeSonda.jsx';

import InfiltracaoEmSolo from './app/Sondagem/InfiltracaoEmSolo/InfiltracaoEmSolo.jsx';

import Rdo from './app/Sondagem/RDO/Rdo.jsx';

import RncxTeste from './app/SGI/RNCdetalhado/RNCxTESTE.jsx';








function App() {
  const { logado } = useContext(AuthContext);

  function SecureRoute({ ...params }) {
    if (!logado) {
      return <Redirect to="/#" />
    } else {
      return <Route {...params} />
    }
  }

  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Site} />
      <Route exact path='/app/Login' component={Login} />
      <Route exact path='/app/novaconta' component={NovaConta} />
      <Route exact path='/app/resetsenha' component={ResetSenha} />
      <Route exact path='/app/ProgramacaoTeste' component={ProgramacaoTeste} />

      <SecureRoute exact path='/app/home' component={Home} />
      <SecureRoute exact path='/app/PesquisaMineral' component={PesquisaMineral} />
      <SecureRoute exact path='/app/BoletimSondagem' component={BoletimSondagem} />

      <SecureRoute exact path='/app/TelaSondagem' component={TelaSondagem} />
      <SecureRoute exact path='/app/UploadFile' component={UploadFile} />
      <SecureRoute exact path='/app/telaAmostra' component={telaAmostra} />
      <SecureRoute exact path='/app/ResultadoLaboratorio' component={ResultadoLaboratorio} />
      <SecureRoute exact path='/app/Programacao' component={Programacao} />
      <SecureRoute exact path='/app/ProgramacaoIntacta' component={ProgramacaoIntacta} />
      <SecureRoute exact path='/app/ProgramacaoCompactacao' component={ProgramacaoCompactacao} />
      <SecureRoute exact path='/app/ProgramacaoPermeabilidade' component={ProgramacaoPermeabilidade} />
      <SecureRoute exact path='/app/ProgramacaoCompressibilidade' component={ProgramacaoCompressibilidade} />
      <SecureRoute exact path='/app/ProgramacaoResistenciaDeformabilidade' component={ProgramacaoResistenciaDeformabilidade} />
      <SecureRoute exact path='/app/ProgramacaoExpansibilidadeColapso' component={ProgramacaoExpansibilidadeColapso} />
      <SecureRoute exact path='/app/Laboratorio' component={Laboratorio} />
      <SecureRoute exact path='/app/TeordeAgua' component={TeorDeAgua} />
      <SecureRoute exact path='/app/Downloand' component={Downloand} />
      <SecureRoute exact path='/app/PDFProgramacao' component={PDFProgramacao} />
      <SecureRoute exact path='/app/novocliente' component={NovoCliente} />
      <SecureRoute exact path='/app/editarcliente/:id' component={EditarCliente} />
      <SecureRoute exact path='/app/editarcliente/:id' component={listadeterminiacaomassa} />
      <SecureRoute exact path='/app/Manutencao' component={Manutencao} />

      <SecureRoute exact path='/app/AberturaOSManutencao' component={AberturaOSManutencao} />
      <SecureRoute exact path='/app/RegInternoManutencaoCorretivaPreventiva' component={RegInternoManutencaoCorretivaPreventiva} />
      <SecureRoute exact path='/app/MassaespRealemGraos' component={Massaesprealemgraos} />
      <SecureRoute exact path='/app/ProgramacaoTeste' component={ProgramacaoTeste} />
      <SecureRoute exact path='/app/CadastroDeEquipamentos' component={CadastroDeEquipamentos} />

      <SecureRoute exact path='/app/AberturaOSManutencao' component={AberturaOSManutencao} />
      <SecureRoute exact path='/app/RegInternoManutencaoCorretivaPreventiva' component={RegInternoManutencaoCorretivaPreventiva} />
      <SecureRoute exact path='/app/RegInternoManutencaoCorretivaPreventivaModal' component={RegInternoManutencaoCorretivaPreventivaModal} />
      <SecureRoute exact path='/app/QuadroResulmo' component={QuadroResumo} />

      {/* <SecureRoute exact path='/app/MassaespRealemGraos' component={Massaesprealemgraos} /> */}


      <SecureRoute exact path='/app/CadastroDeEquipamentos' component={CadastroDeEquipamentos} />
      <SecureRoute exact path='/app/Sgi' component={Sgi} />
      <Route exact path='/app/Registrodenaoconformidade' component={RegistroDenaoconformidade} />
      <SecureRoute exact path='/app/RncDetalhado' component={Rnc} />

      <SecureRoute exact path='/app/RncxTeste' component={RncxTeste} />

      <SecureRoute exact path='/app/PlanoDeAcoes' component={PlanoDeAcoes} />
      <SecureRoute exact path='/app/ProgramacaoManutencao' component={ProgramacaoManutencao} />
      <SecureRoute exact path='/app/TelaDeEdição' component={TelaDeEdição} />
      <SecureRoute exact path='/app/TelaDeEdição2' component={TelaDeEdição2} />
      <SecureRoute exact path='/app/TelaDeEdição3' component={TelaDeEdição3} />
      <SecureRoute exact path='/app/TelaDeEdição4' component={TelaDeEdição4} />

      <SecureRoute exact path='/app/DashBoardManutencao' component={DashBoard} />

      <SecureRoute exact path='/app/CadastroDeResponsaveis' component={CadastroDeResponsaveis} />

      <SecureRoute exact path='/app/DashBoardSGI' component={DashBoardSGI} />
      <SecureRoute exact path='/app/Epis' component={Epis} />
      <SecureRoute exact path='/app/DashBoardSSMT' component={DashBoardSSMT} />
      <SecureRoute exact path='/app/CheckListSondaDiaria' component={CheckListInspecaoDeSonda} />

      <SecureRoute exact path='/app/InfiltracaoEmSolo' component={InfiltracaoEmSolo} />


      <SecureRoute exact path='/app/Rdo' component={Rdo} />







    </Switch>
  </BrowserRouter>;
}

export default App;