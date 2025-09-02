import Navbar from '../NavbarManutencao/navbarManutencao';
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';







export default function DashBoard(){

  const [statuPeca, setStatuPeca] = useState('aberto');
  const [horimetroAtual, setHorimetroAtual] = useState();
  const [statuFinalizado, setStatuFinalizado] = useState('Finalizado');
  const [manutencaoExpirada2, setManutencaoExpirada2] = useState([]);
  const [horimetroAtual2, setHorimetroAtual2] = useState();
  const [equipamento2, setEquipamento2] = useState();
  
  const [dataStart, setDataStart] = useState();
    const [horimetro, setHorimetro] = useState();
    const [manutencaoExpirada, setManutencaoExpirada] = useState([]);
  
    
  
    const [pecasEmManutencao, setPecasEmManutencao] = useState([]);
    const [pecasEmManutencao2, setPecasEmManutencao2] = useState([]);
    const [statuEmManutencao, setStatuEmManutencao] = useState('Em Manutencao');
  
    const [mostraFiltro1, setMostraFiltro1] = useState(false);
  const[selecionaEquipamento,setSelecionaEquipamento] = useState();
  const[buscadeEquipamentos, setBuscaEquipamentos]=useState([]);
  
  const[dataStart3,setDataStart3]=useState();
  const[horimetroAtual3,setHorimetroAtual3]=useState();
  const[horimetro3,setHorimetro3]=useState();
  
  const[buscaAlertaComFiltro3,setBuscaAlertaComFiltro3]=useState([]);
  
  const[buscaFILTROFinalizadodePecas, setBuscaFILTROFinalizadoDePecas]=useState([]);
  
  const[buscaFILTROdePecas, setBuscaFILTRODePecas]=useState([]);
  
  const [shouldFetchData, setShouldFetchData] = useState(false);
  
  const [chartData, setChartData] = useState([]);
  const[manutencoesRealizadas,setManutencoesRealizadas]=useState([]);
  const [maintenanceAlerts, setMaintenanceAlerts] = useState([]);
  
  const [manutencaoSF, setManutencaoSF ]=useState([]);
  const [manutencaoSF2, setManutencaoSF2 ]=useState([]);
  const [manutencaoSF3, setManutencaoSF3]=useState([]);

  const[filtraModeloEquip, setFiltraModeloEquip ]=useState();
  const[buscadeEquipamentos2, setBuscaEquipamentos2]=useState([]);
  const[buscadeEquipamentos3, setBuscaEquipamentos3]=useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const equipamento = await buscarManutencoesExpiradas();
        if (equipamento) {
          await getItem(equipamento);
          buscarFILTROfINALIZADOPecas();
        } else {
          console.log('Não foi possível obter o equipamento.');
        }
      }
      fetchData();
    }, []);
  
    async function buscarManutencoesExpiradas() {
      // Lógica para buscar o equipamento
      const res = await axios.get(Conexao.api + 'ListaPecasSemFiltrosWEB.php?statuPeca=' + statuPeca);
      if(res.data.result >0){
        const manutencoesExpiradas = res.data.result;
        setManutencaoExpirada(res.data.result)
      }
   
      
      if (res.data.result.length > 0) {
        const equipamentoEncontrado = res.data.result[0].equipamento;
        return equipamentoEncontrado;
      } else {
        return null; // Nenhum equipamento encontrado
      }
    };
  
     
    async function getItem(equipamento) {
        const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php?equipamento=' + equipamento);
    
    setHorimetro(res.data.horimetro);
  
    setDataStart(res.data.dataStart);
    setHorimetroAtual(res.data.horimetroAtual);
    
    if (res.data.success === false) {
     
    } else {
     
    }
    };
  
  
  async function buscarFILTROfINALIZADOPecas() { 
    const res = await axios.get(Conexao.api + 'ListaPecasSemFiltrosWEB2.php?statuFinalizado=' + statuFinalizado );  
    if (res.data.success === false) {
  //console.log("nada")   
    } else {
      setManutencaoExpirada2(res.data.result)
    }  
  };
  
  async function buscarFILTROEMMANUTENCAO() { 
    const res = await axios.get(Conexao.api + 'ListaPecasSemFiltrosWEB2.php?statuFinalizado=' + statuEmManutencao );  
    if (res.data.success === false) {
  //console.log("nada")   
    } else {
      setPecasEmManutencao(res.data.result)
    }  
  };
  const equipamentosExibidos = [];
  
  async function buscarFILTROEMMANUTENCAO2() { 
    const res = await axios.get(Conexao.api + 'ListaPecasComFiltroWEB3.php?equipamento=' + selecionaEquipamento + '&statuFinalizado=' + statuEmManutencao );  
    if (res.data.success === false) {
      setPecasEmManutencao2(['']);
  //console.log("nada")   
    } else {
      setPecasEmManutencao2(res.data.result)
    }  
  };
  
  useEffect(() => {
    async function fetchData3() {
      buscarFILTROEMMANUTENCAO();
    }
    fetchData3();
  }, []);
  
  
  
  function MostraFiltrar1(){
    setMostraFiltro1(true);
  };
  
  function RemoveSelecao(){
    setSelecionaEquipamento('Todos');
    
    
  };
  
  async function BuscarEquipamentos() {
    const res = await axios.get(Conexao.api + 'ListaCadastroDeEquipamentoWEB.php');
    console.log( res.data.result)
    if (res.data.success === false) { }
       else {  
        setBuscaEquipamentos(res.data.result);
       console.log("EQUIPAMENTO...    " + res.data.result)   
      }  
    };
  
    useEffect(() => {
      async function fetchData4() {
        BuscarEquipamentos();
      }
      fetchData4();
    }, []);
  
  
  
  const[modeloDeEquipamento3,setModeloDeEquipamento3]=useState();
  const[dataFabricacao3,setDataFabricacao3]=useState();
  
  
    async function getEquipamentos1() { 
      const res = await axios.get(Conexao.api + 'BuscarCadastroEquipamento.php? equipamento=' + selecionaEquipamento);
      setModeloDeEquipamento3(res.data.modeloDeEquipamento);
      setDataFabricacao3(res.data.dataFabricacao);
   /*    setClienteOuProjeto(res.data.clienteOuProjeto); */
      setHorimetro3(res.data.horimetro);
   /*    setUltimaManutencaoPreventiva(res.data.ultimaManutencaoPreventiva);
      setProximaManutencaoPreventiva(res.data.proximaManutencaoPreventiva);
      setUltimaManutencaoCorretiva(res.data.ultimaManutencaoCorretiva);
      setObs(res.data.obs); */
      setDataStart3(res.data.dataStart);
      setHorimetroAtual3(res.data.horimetroAtual);
      
      if (res.data.success === false) {
      } else {
      }  
    };
  
  
  
    async function buscarFILTROPecas() { 
      const res = await axios.get(Conexao.api + 'ListaFiltroPeca2WEB.php? equipamento=' + selecionaEquipamento + '&statuPeca=' + statuPeca);  
      if (res.data.success === false) {
        setBuscaFILTRODePecas([''])
  //console.log("nada")   
      } else {
        setBuscaFILTRODePecas(res.data.result)
      }  
    };
  
  
    async function buscarFILTROfINALIZADOPecas2() { 
      const res = await axios.get(Conexao.api + 'ListaFiltroPecasFinalizadoWEB.php? equipamento=' + selecionaEquipamento + '&statuFinalizado=' + statuFinalizado );  
      if (res.data.success === false) {
  //console.log("nada")  
  setBuscaFILTROFinalizadoDePecas(['']) 
      } else {
        setBuscaFILTROFinalizadoDePecas(res.data.result)
      }  
    };
  
   
  
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelecionaEquipamento(selectedValue);
      setShouldFetchData(true);
    };
  
    useEffect(() => {
      if (shouldFetchData) {
        async function fetchData7() {
          await getEquipamentos1();
          await buscarFILTROPecas();
         await buscarFILTROfINALIZADOPecas2(); 
         await buscarFILTROEMMANUTENCAO2();
         await BuscarEquipamentos2();
        // await buscarFiltraEquipeEModelo();
        // await BuscarEquipamentos3();
        // await buscarManutencoesRealizadas();
        }
        fetchData7();
        setShouldFetchData(false);
        
      }
    }, [shouldFetchData]);
  
  
  
    async function buscarManutencoesRealizadas() { 
      const res = await axios.get(Conexao.api + 'ListaManutencoesRealizadasWEB.php? equipamento=' + selecionaEquipamento);  
      if (res.data.success === false) {
  //console.log("nada")  
  setManutencoesRealizadas(['']);
   alert('o equipamento não possui manutenções realizadas')  
      } else {
        setManutencoesRealizadas(res.data.result)
      }  
    };
  
   
  
    const contadorEquipamentos = {};
    pecasEmManutencao.forEach(peca => {
      if (contadorEquipamentos[peca.equipamento]) {
        contadorEquipamentos[peca.equipamento]++;
      } else {
        contadorEquipamentos[peca.equipamento] = 1;
      }
    });
  
    // Prepara os dados para o gráfico
    const data = [['Equipamento', 'Quantidade']];
    for (const equipamento in contadorEquipamentos) {
      data.push([equipamento, contadorEquipamentos[equipamento]]);
    };
  
   
  
    async function getManut() {
      const res = await axios.get(Conexao.api + 'ListaCadastroDeEquipamentoWEB.php' );
    
      setManutencaoSF(res.data.result);
    
    if (res.data.success === false) {} else 
    {}
    };
    useEffect(() => {
      async function fetchDatay() {
        getManut();   
      }
      fetchDatay();
    }, []);
    
    function generateChartData() {
      const chartData = [['Status', 'Quantidade']];
      const statusCount = {
        'Em manutencao': 0,
        Disponíveis: 0,
      };
    
      manutencaoSF.forEach((item) => {
        if (item.subStatus === 'Em manutencao') {
          statusCount['Em manutencao']++;
        } else {
          statusCount.Disponíveis++;
        }
      });
    
      Object.entries(statusCount).forEach(([status, count]) => {
        chartData.push([status, count]);
      });
    
      return chartData;
    }
    
    const options = {
      title: 'Status dos equipamentos',
      pieHole: 0.4,
      colors: [ '#dc3912','#3CB371', '#ff9900'],
    };
  
  
  
    async function getManutPreventivaECorretiva() {
      const res = await axios.get(Conexao.api + 'ListaManutRealizadasSEMFILTROWEB.php' );
      if(res.data.result>0){
      setManutencaoSF2(res.data.result);
      }
    if (res.data.success === false) {} else 
    {}
    };

    const [contador, setContador] = useState({ Preventiva: 0, Corretiva: 0 });
    const [countTotal, setCountTotal] = useState(0);


    useEffect(() => {
      async function getManutPreventivaECorretiva2() {
        const res = await axios.get(Conexao.api + 'ListaManutRealizadasSEMFILTROWEB.php');
  if(res.data.result>0){
    setManutencaoSF3(res.data.result);
  }
        
        
  
        if (res.data.success === false) {
          // Tratar caso de erro na resposta da API
        } else {
          // Contar manutenções preventivas e corretivas
          let countPreventiva = 0;
          let countCorretiva = 0;
  
          res.data.result.forEach(item => {
            if (item.tipoDeManutencao === 'Preventiva') {
              countPreventiva++;
            } else if (item.tipoDeManutencao === 'Corretiva') {
              countCorretiva++;
            }
          });
  
          setContador({ Preventiva: countPreventiva, Corretiva: countCorretiva });
          setCountTotal(res.data.result.length);
        }
      }
  
      getManutPreventivaECorretiva2();
    }, []);

    const [manutencaoSF4, setManutencaoSF4] = useState([]);
    const [contador2, setContador2] = useState({});
  const [selectedPeca, setSelectedPeca] = useState('');

  useEffect(() => {
    async function getManutPreventivaECorretiva3() {
      const res = await axios.get(Conexao.api + 'ListaManutRealizadasSEMFILTROWEB.php');

      setManutencaoSF4(res.data.result);

      if (res.data.success === false) {
        // Tratar caso de erro na resposta da API
      } else {
        // Contar as peças
        const countByPeca = {};

        res.data.result.forEach(item => {
          const peca = item.peca;

          if (countByPeca[peca]) {
            countByPeca[peca] += 1;
          } else {
            countByPeca[peca] = 1;
          }
        });

        setContador2(countByPeca);
      }
    }

    getManutPreventivaECorretiva3();
  }, []);

  const [manutencaoSF5, setManutencaoSF5] = useState([]);
  const [contador5, setContador5] = useState([]);

  useEffect(() => {
    async function getManutPreventivaECorretiva5() {
      const res = await axios.get(Conexao.api + 'ListaManutRealizadasSEMFILTROWEB.php');

      setManutencaoSF5(res.data.result);

      if (res.data.success === false) {
        // Tratar caso de erro na resposta da API
      } else {
        // Agrupar e somar as quantidades de peças
        const countByPeca = {};

        res.data.result.forEach(item => {
          const peca = item.peca;
          const quantidadeDePecas = parseInt(item.quantidadeDePecas); // Converter para número

          if (countByPeca[peca]) {
            countByPeca[peca] += quantidadeDePecas;
          } else {
            countByPeca[peca] = quantidadeDePecas;
          }
        });

        const contador = Object.entries(countByPeca).map(([peca, quantidade]) => [peca, quantidade]);
        setContador5(contador);
      }
    }

    getManutPreventivaECorretiva5();
  }, []);



  
    useEffect(() => {
      async function fetchDatay2() {
        getManutPreventivaECorretiva();   
      }
      fetchDatay2();
    }, []);
  
    function generateChartData2() {
      const chartData = [['Tipo de Manutenção', 'Quantidade']];
      const tipoDeManutencaoCount = {
        Preventiva: 0,
        Corretiva: 0,
      };
    
      manutencaoSF2.forEach((item) => {
        if (item.tipoDeManutencao === 'Preventiva') {
          tipoDeManutencaoCount.Preventiva++;
        } else if (item.tipoDeManutencao === 'Corretiva') {
          tipoDeManutencaoCount.Corretiva++;
        }
      });
    
      Object.entries(tipoDeManutencaoCount).forEach(([tipo, count]) => {
        chartData.push([tipo, count]);
      });
    
      return chartData;
    }
    
    const options2 = {
      title: 'Distribuição das manutenções já realizadas',
      legend: { position: 'top' },
      isStacked: true,
      pieHole: 0.4,
        pieSliceTextStyle: {
          color: 'white',
        },
        colors: ['#3CB371', '#dc3912', '#ff9900'],
    };
  

//999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    
    const [quantidadeEquipamentos, setQuantidadeEquipamentos ] = useState([]);
    const[quantidadeemManut, setQuantidadeEmManut]=useState([]);

    async function BuscarQuantidadeEquipamentos() {
      const res = await axios.get(Conexao.api + 'ListaCadastroDeEquipamentoWEB.php');
      console.log( res.data.result)
      if (res.data.success === false) { } 
         else {
      setQuantidadeEquipamentos(res.data.result.length);


      
 
        }  
      };




          useEffect(() => {
        async function fetchDatax4() {
          BuscarQuantidadeEquipamentos();
        }
        fetchDatax4();
      }, []);


  
  /*    useEffect(() => {
        setFiltraModeloEquip('Todos'); 
        setSelecionaEquipamento('Todos');
      }, [buscadeEquipamentos  ,  buscadeEquipamentos2 ]); */ 


      async function BuscarEquipamentos2() {
        const res = await axios.get(Conexao.api + 'ListaCadastroEquipWEB.php? equipamento=' + selecionaEquipamento);
        console.log( res.data.result)
        if (res.data.success === false) { }
           else {  
            setBuscaEquipamentos2(res.data.result);
           console.log("EQUIPAMENTO...    " + res.data.result)   
          }  
        };
    
 /*        const [abreFiltra, setAbreFiltra]=useState(true);
        
        function FechaFiltrar(){ setAbreFiltra(false) }; */

  /*       useEffect(() => {
         async function fetchDataz4() {
            BuscarEquipamentos2();
         }
          fetchDataz4(); 
        }); */


    /*     async function buscarFiltraEquipeEModelo() { 
          const res = await axios.get(Conexao.api + 'ListaCadastroEquipWEB2.php? equipamento=' + selecionaEquipamento + '&modeloDeEquipamento=' + filtraModeloEquip );  
          if (res.data.success === false) {
      //console.log("nada")   
          } else {
            setBuscarFiltraEquipEModelo(res.data.result)
          }  
        };

        const [buscarFiltraEquipEModelo, setBuscarFiltraEquipEModelo]=useState([]);

        async function BuscarEquipamentos3() {
          const res = await axios.get(Conexao.api + 'ListaCadastroEquipWEB.php? modeloDeEquipamento=' + filtraModeloEquip);
          console.log( res.data.result)
          if (res.data.success === false) { }
             else {  
              setBuscaEquipamentos3(res.data.result);
             console.log("EQUIPAMENTO..." + res.data.result)   
            }  
          }; */


          const [lastMaintenanceDates, setLastMaintenanceDates] = useState({});
  useEffect(() => {
    async function getManutCorretivasX() {
      try {
        const res = await axios.get(Conexao.api + `ListaManutencoesRealizadasWEB.php?equipamento=${selecionaEquipamento}`);

        if (res.data.success === false) {
          // Tratar caso de erro na resposta da API
        } else {
          const corretivas = res.data.result.filter(item => item.tipoDeManutencao === 'Corretiva');
          setManutencaoSF3(corretivas);

          const maintenanceDates = {}; // Armazenar as datas da última manutenção corretiva para cada equipamento

          corretivas.forEach(item => {
            if (!maintenanceDates[item.equipamento] || moment(item.dataQueTrocou).isAfter(maintenanceDates[item.equipamento])) {
              maintenanceDates[item.equipamento] = moment(item.dataQueTrocou);
            }
          });

          setLastMaintenanceDates(maintenanceDates); // Atualizar as datas da última manutenção corretiva
          setCountTotal(corretivas.length);
        }
      } catch (error) {
        // Tratar o erro da requisição
      }
    }

    getManutCorretivasX();
  }, [selecionaEquipamento]);




/*   const [dadosMTBR, setDadosMTBR] = useState([]);
  const [mtbrData, setMTBRData] = useState({}); // Armazena os dados do MTBR para cada equipamento
  const [mtbfData, setMTBFData] = useState({}); // Armazena os dados do MTBF para cada equipamento
  const [mttrData, setMTTRData] = useState({}); // Armazena os dados do MTTR para cada equipamento

  async function BuscarFalhas() {
    const res = await axios.get(Conexao.api + 'ListaRegistroDeFalhasWEB.php');
    console.log(res.data.result)
    if (res.data.success === false) {
      // Tratar erro, se necessário
    } else {
      const falhasResolvidas = res.data.result.filter(item => item.subStatus === 'finalizado');
      setDadosMTBR(falhasResolvidas);
    }
  }

  useEffect(() => {
    BuscarFalhas();
  }, []);

  useEffect(() => {
    if (dadosMTBR.length > 0) {
      const mtbrData = {};
      const mtbfData = {};
      const mttrData = {};

      // Agrupar as falhas por equipamento
      dadosMTBR.forEach(item => {
        const equipamento = item.equipamento;
        if (!mtbrData[equipamento]) {
          mtbrData[equipamento] = {
            totalHoras: 0,
            totalFalhas: 0,
          };
        }
        if (!mtbfData[equipamento]) {
          mtbfData[equipamento] = {
            totalHoras: 0,
            totalFalhas: 0,
          };
        }
        if (!mttrData[equipamento]) {
          mttrData[equipamento] = {
            totalHoras: 0,
            totalReparos: 0,
          };
        }

        const diffMTBF = item.horimetroAtual - item.horimetroNaFalha;
        const diffMTTR = moment(item.dataDoReparo).diff(moment(item.dataDaFalha), 'hours');

        mtbrData[equipamento].totalHoras += diffMTBF;
        mtbrData[equipamento].totalFalhas += 1;

        mtbfData[equipamento].totalHoras += diffMTBF;
        mtbfData[equipamento].totalFalhas += 1;

        mttrData[equipamento].totalHoras += diffMTTR;
        mttrData[equipamento].totalReparos += 1;
      });

      // Calcular MTBR, MTBF e MTTR para cada equipamento
      for (const equipamento in mtbrData) {
        mtbrData[equipamento].mtbr = mtbrData[equipamento].totalHoras / mtbrData[equipamento].totalFalhas;
      }
      for (const equipamento in mtbfData) {
        mtbfData[equipamento].mtbf = mtbfData[equipamento].totalHoras / mtbfData[equipamento].totalFalhas;
      }
      for (const equipamento in mttrData) {
        mttrData[equipamento].mttr = mttrData[equipamento].totalHoras / mttrData[equipamento].totalReparos;
      }

      setMTBRData(mtbrData);
      setMTBFData(mtbfData);
      setMTTRData(mttrData);
    }
  }, [dadosMTBR]);
 */

  const [dadosFalhas, setDadosFalhas] = useState([]);
  const [mtbrData, setMTBRData] = useState({});
  const [mtbfData, setMTBFData] = useState({});
  const [mttrData, setMTTRData] = useState({});

  async function buscarFalhas() {
    const res = await axios.get(Conexao.api + 'ListaRegistroDeFalhasWEB.php');
    console.log(res.data.result);
    if (res.data.success === false) {
      // Tratar erro, se necessário
    } else {
      setDadosFalhas(res.data.result);
    }
  }

  useEffect(() => {
    buscarFalhas();
  }, []);

  useEffect(() => {
    if (dadosFalhas.length > 0) {
      const mtbrData = {};
      const mtbfData = {};
      const mttrData = {};

      // Filtrar apenas as falhas finalizadas
      const falhasFinalizadas = dadosFalhas.filter(item => item.subStatus === 'finalizado');

      // Agrupar as falhas por equipamento
      falhasFinalizadas.forEach(item => {
        const equipamento = item.equipamento;

        // Cálculo do MTBR (falhas finalizadas)
        if (!mtbrData[equipamento]) {
          mtbrData[equipamento] = {
            totalHoras: 0,
            totalFalhas: 0,
          };
        }
        const diffMTBR = item.horimetroAtual - item.horimetroNaFalha;
        mtbrData[equipamento].totalHoras += diffMTBR;
        mtbrData[equipamento].totalFalhas += 1;
      });

      // Agrupar todas as falhas por equipamento
      dadosFalhas.forEach(item => {
        const equipamento = item.equipamento;

        // Cálculo do MTBF (todas as falhas)
        if (!mtbfData[equipamento]) {
          mtbfData[equipamento] = {
            totalHoras: 0,
            totalFalhas: 0,
          };
        }
        const diffMTBF = item.horimetroAtual - item.horimetroNaFalha;
        mtbfData[equipamento].totalHoras += diffMTBF;
        mtbfData[equipamento].totalFalhas += 1;

        // Cálculo do MTTR (todas as falhas)
        if (!mttrData[equipamento]) {
          mttrData[equipamento] = {
            totalHoras: 0,
            totalReparos: 0,
          };
        }
        const diffMTTR = moment(item.dataDoReparo).diff(moment(item.dataDaFalha), 'hours');
        mttrData[equipamento].totalHoras += diffMTTR;
        mttrData[equipamento].totalReparos += 1;
      });

      // Calcular MTBR, MTBF e MTTR para cada equipamento
      for (const equipamento in mtbrData) {
        mtbrData[equipamento].mtbr = mtbrData[equipamento].totalHoras / mtbrData[equipamento].totalFalhas;
      }
      for (const equipamento in mtbfData) {
        mtbfData[equipamento].mtbf = mtbfData[equipamento].totalHoras / mtbfData[equipamento].totalFalhas;
      }
      for (const equipamento in mttrData) {
        mttrData[equipamento].mttr = mttrData[equipamento].totalHoras / mttrData[equipamento].totalReparos;
      }

      setMTBRData(mtbrData);
      setMTBFData(mtbfData);
      setMTTRData(mttrData);
    }
  }, [dadosFalhas]);



  function AbreInicio(){     
   setFiltraModeloEquip('Todos'); 
  setSelecionaEquipamento('Todos');};
  
  
      return <body onLoad={(e)=>AbreInicio(e)}>
      <Navbar />
      <br/>
      <div className='titulolaboratorio container-fluid '>
        <h1 className='texttitulo'>Dashboard de manutenção</h1>
      </div> 
  
  {/* 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
  <div className=' justify-content-center row mt-5'>
<div className=' col-md-3  '></div>
      
  <div className=' col  p-1 colorInput borda'>
  <h6 className='  text-center mt-1'>Total de Equipamentos: <strong>{quantidadeEquipamentos}</strong> </h6> 
  </div>
  
  
  <div className=' col  p-1 colorInput borda'>
  <h6 className='  text-center mt-1'> Total de manutenções: <strong>{countTotal}</strong></h6> 
  </div>
  
     <div className=' col p-1 colorInput borda'>
  <h6 className='  text-center mt-1'>Preventivas: <strong>{contador.Preventiva}</strong> </h6> 
  </div>


  
   <div className='  col  p-1 colorInput borda'>
  <h6 className='  text-center mt-1'>Corretivas: <strong>{contador.Corretiva}</strong> </h6> 
  </div>
 
  <div className=' col-md-3  '></div>

  </div>

<div>




 {/*  555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 */}



 
      
  {/*     {manutencaoSF3.map((item, index) => (
        <div key={index}>
          <p>Equipamento: {item.equipamento}</p>
          <p>Peça: {item.peca}</p>
          <p>Data que Trocou: {item.dataQueTrocou}</p>
          <p>Horímetro que Trocou: {item.horimetroQueTrocou}</p>
          <p>Tipo de Manutenção: {item.tipoDeManutencao}</p>
        </div>
      ))} */}

    
    </div>
  {/* <h1>{quantidadeemManut}</h1> */}




  <div className='d-flex container align-items-center justify-content-center text-center mt-5'>

  <div className='scrollable col-6'>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[['Peca', 'Quantidade'], ...Object.entries(contador2)]}
        options={{
          title: 'Quantidade de manutenções por peça',
          colors: ['#3CB371', '#dc3912', '#ff9900'],
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
          <div className=' col-1'></div>
    <div className='scrollable col-6'>
      {contador5.length > 0 ? (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[['Peca', 'Quantidade'], ...contador5]}
          options={{
            chart: {
              title: 'Contagem de peças trocadas',
            },
            colors: ['#3CB371', '#dc3912', '#ff9900'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      ) : (
        <div>Nenhum dado encontrado</div>
      )}
    </div>

  </div>


  <div className='row container align-items-center justify-content-center text-center mt-5'>



  <div className=" col-4 ">
    <Chart 
      chartType="PieChart"
      data={generateChartData2()}
      options={options2}
      width="100%"
      height="200px"
    />
  </div>

 <div className="  col-5 ">
    <Chart
      chartType="PieChart"
      data={generateChartData()}
      options={options}
      width="100%"
      height="200px"
    />
  </div> 

  <div className=" col-1 ">
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Carregando gráfico...</div>}
          data={data}
          options={{
            chartArea: { width: '50%' },
            title: 'Quantidade de Peças em Manutenção por Equipamento',
            hAxis: { title: 'Equipamento', minValue: 0 },
            /* vAxis: { title: 'Quantidade' }, */
            vAxis: { title: 'Quantidade', format: '0' },
            colors: ['#3CB371', '#dc3912', '#ff9900'],
          }}
        />
      </div>
      
</div>

<body className='container d-flex text-center mt-3'>
        <div className='container col text-center'>
        <h6>MTBR</h6>
        <Chart
          width={'400px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Carregando Gráfico</div>}
          data={[
            ['Equipamento', 'MTBR'],
            ...Object.keys(mtbrData).map(equipamento => [equipamento, mtbrData[equipamento].mtbr])
          ]}
          options={{
            title: 'MTBR',
            colors: ['#3CB371', '#dc3912', '#ff9900'],
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Equipamento',
            },
            vAxis: {
              title: 'MTBR (horas)',
            },
          }}
        />
      </div>

      <div className='container text-center col'>
        <h6>MTBF</h6>
        <Chart
          width={'400px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Carregando Gráfico</div>}
          data={[
            ['Equipamento', 'MTBF'],
            ...Object.keys(mtbfData).map(equipamento => [equipamento, mtbfData[equipamento].mtbf])
          ]}
          options={{
            title: 'MTBF',
            colors: ['#3CB371', '#dc3912', '#ff9900'],
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Equipamento',
            },
            vAxis: {
              title: 'MTBF (horas)',
            },
          }}
        />
      </div>

      <div className='container text-center col'>
        <h6>MTTR</h6>
        <Chart
          width={'400px'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Carregando Gráfico</div>}
          data={[
            ['Equipamento', 'MTTR'],
            ...Object.keys(mttrData).map(equipamento => [equipamento, mttrData[equipamento].mttr])
          ]}
          options={{
            title: 'MTTR',
            colors: ['#3CB371', '#dc3912', '#ff9900'],
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Equipamento',
            },
            vAxis: {
              title: 'MTTR (horas)',
            },
          }}
        />
      </div>

      </body >


        {/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}


  <h3 className='container text-center mt-2'>Registro de Falhas</h3>

<body className='container align-items-center text-center d-flex borda cinzaclaro mt-3'>
  <div className='col mt-1'>
    <h6> Equipamento</h6>
  </div>

  <div className='col mt-1'>
  <h6> MTBR</h6>
  </div>

  <div className='col mt-1'>
  <h6> MTBF</h6>
  </div>

  <div className='col mt-1'>
  <h6> MTTR</h6>
  </div>

</body>


<body className='container align-items-center text-center d-flex scrollable'>
  <div className='col'>
  {Object.keys(mttrData).map(equipamento => (
    <div key={equipamento}>
      <h6> {equipamento}</h6>
    
    </div>
  ))}
  </div>

  <div className='col'>
{Object.keys(mtbrData).map(equipamento => (
    <div  key={equipamento}>
      
      <h6>{mtbrData[equipamento].mtbr.toFixed(2)} horas</h6>
    </div>
  ))}
  </div>

  <div className='col'>
  {Object.keys(mtbfData).map(equipamento => (
    <div key={equipamento}>
     
      <h6>{mtbfData[equipamento].mtbf.toFixed(2)} horas</h6>
    </div>
  ))}
  </div>

  <div className='col'>
  {Object.keys(mttrData).map(equipamento => (
    <div key={equipamento}>
      
      <h6> {mttrData[equipamento].mttr.toFixed(2)} horas</h6>
    </div>
  ))}
  </div>
</body>

<br/>

{/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
<div className='mt-3 text-center container-fluid '>
        <h3 className=''>Analítico de manutenção</h3>
      </div> 

 

      <div className='scrollable container  '>
     <div className='row container text-center cinzaclaro  borda'>
          <h6 className='col mt-1'>Equipamento</h6>
          <h6 className='col mt-1'>Peça</h6>
          <h6 className='col mt-1'>Data na troca</h6>
          <h6 className='col mt-1'>Horímetro na troca</h6>
          <h6 className='col mt-1'>Tipo de Manutenção </h6>
          <h6 className='col mt-1'>Quantidade de peças</h6>
          <h6 className='col mt-1'>Duração</h6>
          <h6 className='col mt-1'>Descrição</h6>
          <h6 className='col mt-1'>Diferença entre a última troca </h6>
        </div>

        
{/* {manutencaoSF3.map((item, index) => (
 
        <div className='row container text-center' key={index}>
          <p className='col'> {item.equipamento}</p>
          <p className='col'> {item.peca}</p>
          <p className='col'> {moment(item.dataQueTrocou).format('DD/MM/YYYY')}</p>
          <p className='col'> {item.horimetroQueTrocou}</p>
          <p className='col'> {item.tipoDeManutencao}</p>
          <p className='col'> {item.quantidadeDePecas}</p>
          <p className='col'> {item.duracaoDaManutencao}</p>
          <p className='col'> {item.descricao}</p>
        </div>
      ))} */}


{manutencaoSF3.map((item, index) => {
        const lastMaintenanceDate = lastMaintenanceDates[item.equipamento];
        const timeSinceLastMaintenance = lastMaintenanceDate ? moment().diff(lastMaintenanceDate, 'days') : null;

        return (
          <div className='row container text-center' key={index}>
          <p className='col'>{item.equipamento}</p>
          <p className='col'>{item.peca}</p>
          <p className='col'>{moment(item.dataQueTrocou).format('DD/MM/YYYY')}</p>
          <p className='col'>{item.horimetroQueTrocou}</p>
          <p className='col'>{item.tipoDeManutencao}</p>
          <p className='col'>{item.quantidadeDePecas}</p>
          <p className='col'>{item.duracaoDaManutencao}</p>
          <p className='col'>{item.descricao}</p>
          <p className='col'>          {index > 0 && manutencaoSF3[index - 1] && (
            <p >
               {moment(item.dataQueTrocou).diff(moment(manutencaoSF3[index - 1].dataQueTrocou), 'days')}  dias
            </p>
          )}  </p>

        </div>
        );
      })}

      </div>



  {/*     'tipoDeManutencao' => $res[$i]['TipoDeManutencao'],
        'quantidadeDePecas' => $res[$i]['QuantidadeDePecas'],
        'descricao' => $res[$i]['Descricao'],  */}




 {/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}



  <div className='mt-3 text-center container-fluid mt-5 '>
        <h3 className=''>Equipamentos</h3>
      </div> 


{/* <div className=' text-center container d-flex mt-2'>
<div className=' text-center container col-4'></div>
  <div className=' text-center container col-2'>
    <h6>Equipamento</h6>
      <select className='form-select text-center colorInput me-3'  onChange={handleSelectChange} value={selecionaEquipamento} >
        <option  value="Todos">Todos</option>
        {buscadeEquipamentos.map((equipamento) => ( <option key={equipamento.id} > {equipamento.equipamento} </option> ))} 
        
      </select>
  </div> */}

{/*   <div className=' text-center container col-2'>
    <h6>Modelo de equipamento</h6>
      <select className='form-select text-center colorInput '  onChange={(e)=>setFiltraModeloEquip(e.target.value)} value={filtraModeloEquip}   >           
        <option  value="Todos">Todos</option>
        {buscadeEquipamentos.map((equipamento) => ( <option  key={equipamento.id} > {equipamento.modeloDeEquipamento} </option> ))}         
      </select>
  </div> */}

  <div className=' text-center container col-4 mt-3'></div>

{/* </div> */}

{ selecionaEquipamento === 'Todos'  ? 
<div className='  '>
<div className=' text-center container d-flex mt-2 cinzaclaro borda' >
    <h6 className=' col '>Equipamento</h6>
    <h6 className=' col'>Modelo </h6>
    <h6 className=' col'>Cliente ou projeto</h6>
    <h6 className=' col'>Horimetro</h6>
    <h6 className=' col'>Data fabricacao</h6>
    <h6 className=' col'>Data start</h6>
    <h6 className=' col'>Horimetro atual</h6>
    <h6 className=' col'>Setor </h6>
    <h6 className=' col '>Observação</h6>
   


  </div>
<div className='scrollable container  borda'>
  {buscadeEquipamentos.map((equipamento) => ( <div className=' text-center container d-flex' key={equipamento.id}>
    <div className=' col '>{equipamento.equipamento}</div>
    <div className=' col'>{equipamento.modeloDeEquipamento}</div>
    <div className=' col'>{equipamento.clienteOuProjeto}</div>
    <div className=' col'>{equipamento.horimetro}</div>
    <div className=' col'>{moment(equipamento.dataFabricacao).format('DD/MM/YYYY')}</div>
    <div className=' col'>{moment(equipamento.dataStart).format('DD/MM/YYYY')}</div>
    <div className=' col'>{equipamento.horimetroAtual}</div>
    <div className=' col'>{equipamento.setorDoEquipamento}</div>  
    <div className=' col'>{equipamento.obs}</div>
    
   


  </div>
  ))}


</div>
</div>
:null}




{ selecionaEquipamento !== 'Todos'  ? 


<div>
<div className=' text-center container d-flex mt-2 cinzaclaro borda' >
    <h6 className=' col'>Equipamento</h6>
    <h6 className=' col'>Modelo </h6>
    <h6 className=' col'>Cliente ou projeto</h6>
    <h6 className=' col'>Horimetro</h6>
    <h6 className=' col'>Data fabricacao</h6>
    <h6 className=' col'>Data start</h6>
    <h6 className=' col'>Horimetro atual</h6>
    <h6 className=' col'>Setor </h6>
    <h6 className=' col'>Observação</h6>
   


  </div>
<div className='scrollable container  borda'>
  {buscadeEquipamentos2.map((e1,i) => ( <div className=' text-center container d-flex' key={i}>
    <div className=' col'>{e1.equipamento}</div>
    <div className=' col'>{e1.modeloDeEquipamento}</div>
    <div className=' col'>{e1.clienteOuProjeto}</div>
    <div className=' col'>{e1.horimetro}</div>
    <div className=' col'>{moment(e1.dataFabricacao).format('DD/MM/YYYY')}</div>
    <div className=' col'>{moment(e1.dataStart).format('DD/MM/YYYY')}</div>
    <div className=' col'>{e1.horimetroAtual}</div>
    <div className=' col'>{e1.setorDoEquipamento}</div>
    <div className=' col'>{e1.obs}</div>
    

  </div>
  ))}
</div>
</div>

:null}













{/* 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
  
{/*   <div className=' titulolaboratorio container-fluid row align-items-center justify-content-center  mt-5'>
    <button className='col-2 ' onClick={MostraFiltrar1} style={{ border: 'none', background: 'none' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill me-1" viewBox="0 0 16 16">
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
  </svg>
            Filtrar por equipamento
          </button>
  
        {mostraFiltro1 ? ( 
  <div className='col-2 d-flex  align-items-center'>
  
           <select className='form-select text-center colorInput me-3'  onChange={handleSelectChange} value={selecionaEquipamento} >
            <option value="Selecione">Selecione</option>
            <option value="Todos">Todos</option>
            {buscadeEquipamentos.map((equipamento) => ( <option key={equipamento.id} > {equipamento.equipamento} </option> ))} 
            
          </select> 

          <svg onClick={RemoveSelecao} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg>
           </div>
        ) : null
        
        } 
  
  
  </div> */}
  
  <br/>
  
  
  { selecionaEquipamento === 'Selecione'|| selecionaEquipamento === 'Todos' || mostraFiltro1=== false ? (
  
  <div className=" container-fluid justify-content-center row mt-1"> 
    <div className=" col-6 ">
  
  <div className="text-center mt-2 justify-content-center container d-flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="me-3 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg> 
  <h5 className=" bg-light  mt-1">ALERTA DE MANUTENÇÕES  </h5>
  
    </div>
  
  
    <div className="scrollable mt-4">
    {manutencaoExpirada.map((p, i) => (
      <div className="container text-center colorInput mt-1" key={i}>
        {horimetroAtual >= parseInt(p.horasParaTroca) + parseInt(horimetro) ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> atingiu a quantidade de horas e necessita de manutenção
            </div>
          </div>
        ) : null}
  
        {moment().format('DD-MM-YYYY') >= moment(dataStart).add(parseInt(p.tempoDeTroca), 'days').format('DD-MM-YYYY') ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{p.peca}</strong> do equipamento <strong>{p.equipamento}</strong> chegou à data prevista e necessita de manutenção
            </div>
          </div>
        ) : null}
      </div>
    ))}
  
    {manutencaoExpirada2.map((v, i) => (
      <div className="container text-center colorInput" key={i}>
        {parseInt(v.horimetroAtual) >= parseInt(v.horasParaTroca) + parseInt(v.horimetroFinalizacao) ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{v.peca}</strong> do equipamento <strong>{v.equipamento}</strong> atingiu a quantidade de horas e necessita de manutenção
            </div>
          </div>
        ) : null}
  
        {moment().format('DD-MM-YYYY') >= moment(v.dataFinalizacao).add(parseInt(v.tempoDeTroca), 'days').format('DD-MM-YYYY') ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{v.peca}</strong> do equipamento <strong>{v.equipamento}</strong> chegou à data prevista e necessita de manutenção
            </div>
          </div>
        ) : null}
      </div>
    ))}
  </div>
  </div>
  
  {/* <div className=" col-1 "></div> */}
  
  <div className=" col-4">
  
  <div className="text-center mt-2 justify-content-center container d-flex">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wrench-adjustable me-2" viewBox="0 0 16 16">
    <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z"/>
    <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg>
  
  <h5 className=" bg-light  mt-1">  EM MANUTENÇÃO  </h5>
    </div>
  
    <div className="scrollable mt-4">
  
    {pecasEmManutencao.map((m, i) => {
          // Verifica se o equipamento já foi exibido anteriormente
          if (equipamentosExibidos.includes(m.equipamento)) {
            return null; // Pula a renderização se já foi exibido
          }
          equipamentosExibidos.push(m.equipamento); // Adiciona o equipamento à lista de exibidos
  
          return (
            <div className="alert alert-warning mt-1" key={i}>
              <div>
                O equipamento <strong>{m.equipamento}</strong> está em manutenção
              </div>
            </div>
          );
        })}
  
    </div>
   </div>
  
   <div className="  row text-center align-items-center justify-content-center ">
  
 
  
  

      </div>
  
  
  </div>
  
        )    : null};  
  
  
  {/* 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777 */}
  
  
  
  {  mostraFiltro1=== true & selecionaEquipamento !== 'Selecione'& selecionaEquipamento !== 'Todos'? (
  
  <div className=" container-fluid justify-content-center row mt-1"> 
    <div className=" col-5 ">
  
  <div className="text-center mt-2 justify-content-center container d-flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="me-3 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg> 
  <h5 className=" bg-light  mt-1">ALERTA DE MANUTENÇÕES  </h5>
  
    </div>
  
  
    
  
  
    <div className="scrollable mt-4">
    
    {buscaFILTROdePecas.map((p1, i) => (
      <div className="container text-center colorInput mt-1" key={i}>
        {horimetroAtual3 >= parseInt(p1.horasParaTroca) + parseInt(horimetro3) ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{p1.peca}</strong>  atingiu a quantidade de horas e necessita de manutenção
            </div>
          </div>
        ) : null}
  
        {moment().format('DD-MM-YYYY') >= moment(dataStart3).add(parseInt(p1.tempoDeTroca), 'days').format('DD-MM-YYYY') ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{p1.peca}</strong>  chegou à data prevista e necessita de manutenção
            </div>
          </div>
        ) : null}
  
  
  
      </div>
    ))}
  
  
  
  {buscaFILTROFinalizadodePecas.map((v1,i) => (
      <div className="container text-center colorInput" key={i}>
        {parseInt(v1.horimetroAtual) >= parseInt(v1.horasParaTroca) + parseInt(v1.horimetroFinalizacao) ? (
          <div className="alert alert-danger">
            <div>
              A peça <strong>{v1.peca}</strong>  atingiu a quantidade de horas e necessita de manutenção
            </div>
          </div>
        ) : null}
  
       {  moment().format('DD-MM-YYYY') >= moment(v1.dataFinalizacao).add(parseInt(v1.tempoDeTroca), 'days').format('DD-MM-YYYY')  ? (
          <div className="alert alert-danger">
            <div>  A peça <strong>{v1.peca}</strong>  chegou à data prevista e necessita de manutenção </div> 
            
          </div>
        ): null} 
      </div>
    ))}
  
  
  </div>
  </div>
  
  {/* <div className=" col-1 "></div> */}
  
  <div className=" col-5">
  
  <div className="text-center mt-2 justify-content-center container d-flex">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wrench-adjustable me-2" viewBox="0 0 16 16">
    <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z"/>
    <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg>
  
  <h5 className=" bg-light  mt-1"> PEÇAS EM MANUTENÇÃO  </h5>
    </div>
  
    <div className="scrollable mt-4">
  
  <div>
  
     {pecasEmManutencao2.map((m1,i)=>  (       
  <div className="alert alert-warning " key={i}> 
   <div> Uma manutenção está sendo feita para a troca de <strong>{m1.peca} </strong></div>   
  
  </div>
       ))} 
   </div>
  
    </div>
   </div>
   <div > </div>
  
   <div class=" col-3 text-center "> <button onClick={(e)=>buscarManutencoesRealizadas(e)} type="button" class="botaoadicionar  text-center " 
   data-bs-toggle="modal" data-bs-target="#ModalHistorico" > Histórico de manutenções</button>  </div>
  
  <body className="  row"> 
  <div className=" scrollable2 mt-2 col">
  <div className='borda text-center cinzaclaro'> <h5>Informações das peças</h5> </div>
  <div className=' borda d-flex text-center cinzaclaro ' > 
                    <div className='col '> <h6>Lista de peças</h6> </div>
                    <div className='col'>  <h6>Horas para troca</h6> </div>
                    <div className='col'>  <h6>Tempo de troca(dias)</h6> </div>
                    <div className='col'>  <h6>Tolerência em horas</h6> </div>
                    <div className='col'>  <h6>Tolerência por tempo(dias)</h6> </div>
                    </div>
  
  {buscaFILTROdePecas.map((p,i)=> (
                    
                    <div className=' d-flex  text-center colorInput mt-1' key={i}> 
                    <div className='col '> {p.peca} </div>
                    <div className='col'>  {p.horasParaTroca} </div>
                    <div className='col'>  {p.tempoDeTroca}  </div>
                    <div className='col'>  {p.toleranciaHorasTroca } </div>
                  <div className='col'>   {p.toleranciaDataTroca } </div>
                              
                    </div>
                   
                   ))}
    
     
    
         {buscaFILTROFinalizadodePecas.map((z,i)=> (
                      
               <div className=' d-flex text-center colorInput mt-1' key={i}> 
                    
               <div className='col '> {z.peca} </div>
               <div className='col'>  {z.horasParaTroca}  </div>
               <div className='col'>  {z.tempoDeTroca}  </div> 
               <div className='col'>  {z.toleranciaHorasTroca } </div>
               <div className='col'>  {z.toleranciaDataTroca } </div>
              </div>
       
                   ))}
  
  {pecasEmManutencao2.map((m1,i)=>  (       
      <div className=" d-flex text-center colorInput mt-1 " key={i}> 
         <div className='col '> {m1.peca} </div>
         <div className='col'>  {m1.horasParaTroca}  </div>
         <div className='col'>  {m1.tempoDeTroca} </div>   
         <div className='col'>  {m1.toleranciaHorasTroca } </div>
         <div className='col'>  {m1.toleranciaDataTroca } </div>
      </div>
       ))}
  
  
  </div>
  
  

  
  
  </body>
  </div>
        )    
        : null};  
  
  
  <div class="modal" id="ModalHistorico" tabindex="" aria-labelledby="ModalHistoricoLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered modal-xl ">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title  fs-5" id="ModalHistoricoLabel">Histórico de manutenções</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
        <div class="modal-body">
        <div class="container text-center  ">
       <div class="col  align-items-center justify-content-center p-2 ">
          <div class="row d-flex align-items-center justify-content-center ">
  
          <div className=' d-flex cinzaclaro '> 
                  <div className='col '> <h6> Peça</h6>  </div>
                  <div className='col'> <h6> Data da manutenção</h6>  </div>
                  <div className='col'> <h6>  Horímetro da manutenção</h6>  </div>
                  <div className='col'> <h6>  Tipo da manutenção</h6>  </div>
                  <div className='col'>  <h6> descrição</h6> </div>
  
                  </div> 
  
  
                           {manutencoesRealizadas.map((s,i)=> (
                  
                  <div className=' d-flex colorInput mt-1' key={i}> 
                  <div className='col '>  <h6>{s.peca}</h6> </div>
                  <div className='col'> <h6>{moment(s.dataQueTrocou).format('DD-MM-YYYY')}</h6> </div>
                  <div className='col'>   <h6>{s.horimetroQueTrocou}  </h6></div>  
                  <div className='col'>   <h6>{s.tipoDeManutencao}  </h6></div>          
                  <div className='col'>   <h6>{s.descricao }</h6> </div>
                  
                  </div>
                 
                 ))}
  
                 
          
          </div>
        </div>
       </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>             
         {/*  <button type="button" class="btn btn-success" data-bs-dismiss="modal">Salvar</button> */}
        </div>
      </div>
    </div>
  </div>
   







    </body>
};