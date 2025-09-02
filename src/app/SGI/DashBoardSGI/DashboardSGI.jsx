import Navbar from '../NavBar/NavBarSGI'
import React, { useEffect, useState } from "react";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import { Chart } from 'react-google-charts';








export default function DashBoardSGI(){

    const [ pegaStatu, setPegaStatu]=useState([]);
    const [dataOrigens, setDataOrigens] = useState([]);
    const [dataOrigens2, setDataOrigens2] = useState([]);
    const [dataReincidente, setDataReicidente] = useState([]);

    const [analitico, setAnalitico]=useState([]);



  useEffect(() => {
    async function fetchData() {
        getStatu();
    }
    fetchData();
  }, []);

  async function getStatu() {
    try {
      const res = await axios.get(Conexao.api + 'ListaRegistroDeNaoConformidadeWEB.php');

      if (res.data.success === true) {
        const counts = countStatusElements(res.data.result);
        setPegaStatu(counts);

        const countsOrigens = countOrigensElements(res.data.result);
        setDataOrigens(countsOrigens);

        const countsOrigens2 = countOrigensElements2(res.data.result);
        setDataOrigens2(countsOrigens2);

        const countsReicidente = countReincidenteElements(res.data.result);
        setDataReicidente(countsReicidente);

        setAnalitico(res.data.result);

        //countOrigensElements(dataOrigens)
       
      }
    } catch (error) {
      // Tratar erros
    }
  };


  function countStatusElements(data) {
    let counts = {
      'Em tratamento': 0,
      'Aberto': 0,
      'Encerrado': 0,
    };
  
    data.forEach(item => {
      switch (item.substatu) {
        case 'Em tratamento':
          counts['Em tratamento']++;
          break;
        case 'Aberto':
          counts['Aberto']++;
          break;
        case 'Encerrado':
          counts['Encerrado']++;
          break;
        default:
          break;
      }
    });
  
    return counts;
  }


  function countOrigensElements(dataOrigens) {
    let countsOrigem = {
      'QSSMA': 0,
      'RH': 0,
      'Geotecnia': 0,
      'Comercial': 0,
      'Laboratório': 0,
      'Manutençao': 0,
      'Pesquisa e Mineral': 0,
      'Compras': 0,
      
    };
    dataOrigens.forEach(item1 => {
      switch (item1.setorOrigem) {
        case 'QSSMA':
          countsOrigem['QSSMA']++;
          break;

        case 'RH':
          countsOrigem['RH']++;
          break;

        case 'Geotecnia':
          countsOrigem['Geotecnia']++;
          break;

          case 'Comercial':
            countsOrigem['Comercial']++;
            break;

            case 'Laboratório':
              countsOrigem['Laboratório']++;
              break;

              case 'Manutençao':
                countsOrigem['Manutençao']++;
                break;

                case 'Pesquisa e Mineral':
                  countsOrigem['Pesquisa e Mineral']++;
                  break;

                  case 'Compras':
                    countsOrigem['Compras']++;
                    break;

        default:
          break;
      }
    });
  
    return countsOrigem;
  
  };



  function countOrigensElements2(dataOrigens2) {
    let countsOrigem2 = {
      'Auditoria Interna': 0,
      'Auditoria Externa': 0,
      'Oportunidade de melhoria': 0,
      'Reclamação de melhoria': 0,
      'Outros': 0,
 
      
    };
    dataOrigens2.forEach(item2 => {
      switch (item2.origem) {
        case 'Auditoria Interna':
          countsOrigem2['Auditoria Interna']++;
          break;

        case 'Auditoria Externa':
          countsOrigem2['Auditoria Externa']++;
          break;

        case 'Oportunidade de melhoria':
          countsOrigem2['Oportunidade de melhoria']++;
          break;

          case 'Reclamação de melhoria':
            countsOrigem2['Reclamação de melhoria']++;
            break;

            case 'Outros':
              countsOrigem2['Outros']++;
              break;
      

        default:
          break;
      }
    });
  
    return countsOrigem2;
  
  };


  function countReincidenteElements(dataReincidente) {
    let countsReincidente = {
      'Sim': 0,
      'Não': 0,
   
      
    };
    dataReincidente.forEach(item2 => {
      switch (item2.origem) {
        case 'Auditoria Interna':
          countsReincidente['Não']++;
          break;

        case 'Auditoria Externa':
          countsReincidente['Sim']++;
          break;
   

        default:
          break;
      }
    });
  
    return countsReincidente;
  
  };

      


  
      return <body >
      <Navbar />
      <br/>
      <div className='titulolaboratorio container-fluid '>
        <h1 className='texttitulo'>Dashboard de não conformidades</h1>
      </div> 
     
  
     <body className='titulolaboratorio row container-fluid text-center align-items-center justify-content-center mt-5'>

      <div className='titulolaboratorio container text-center align-items-center justify-content-center col-auto'>
      <Chart
        width={'800px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div> Loading Chart </div>}
        data={[
          ['Status', 'Quantidade'],
          ['Em tratamento', pegaStatu['Em tratamento'] || 0],
          ['Aberto', pegaStatu['Aberto'] || 0],
          ['Encerrado', pegaStatu['Encerrado'] || 0],
        ]}
        options={{
          title: 'Não conformidades por Status',
          titleTextStyle: {
            fontSize: 21, 
            textAlign: 'center'
          },
          chartArea: { width: '40%' },
          hAxis: {
            title: 'Status',
            minValue: 0,
          },
          vAxis: {
            title: 'Quantidade',
          },
          legend: { position: 'top' },
          isStacked: true,
          pieHole: 0.4,
            pieSliceTextStyle: {
              color: 'white',
            },
            colors: [ '#ff9900','#dc3912', '#3CB371'],
        }}
        legendToggle
      />
    </div>



    <div className='titulolaboratorio container-fluid text-center align-items-center justify-content-center col-auto'>   
      <Chart
        width={'800px'}
        height={'500px'}
        chartType="BarChart"
        loader={<div> Loading Chart </div>}
        data={[
          ['Origens', 'Quantidade'],
          ['QSSMA', dataOrigens['QSSMA'] || 0],
          ['RH', dataOrigens['RH'] || 0],
           ['Geotecnia', dataOrigens['Geotecnia'] || 0], 
           ['Comercial', dataOrigens['Comercial'] || 0], 
           ['Laboratório', dataOrigens['Laboratório'] || 0], 
           ['Manutençao', dataOrigens['Manutençao'] || 0], 
           ['Pesquisa e Mineral', dataOrigens['Pesquisa e Mineral'] || 0], 
           ['Compras', dataOrigens['Compras'] || 0], 
        ]}
        options={{
          title: 'Não conformidades por setor de origem',
          titleTextStyle: {
            fontSize: 19, 
            textAlign: 'center'
          },
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Setor',
            minValue: 0,
          },
          vAxis: {
            title: 'Quantidade',
          },
          legend: { position: 'top' },
          isStacked: true,
        
            colors: [  '#3CB371'],
        }}
        legendToggle
      />
    </div>

   <div className='titulolaboratorio container-fluid text-center align-items-center justify-content-center col-auto'>   
      <Chart
        width={'800px'}
        height={'500px'}
        chartType="ColumnChart"
        loader={<div> Loading Chart </div>}
        data={[
          ['Origens', 'Quantidade'],
          ['Auditoria Interna', dataOrigens2['Auditoria Interna'] || 0],
          ['Auditoria Externa', dataOrigens2['Auditoria Externa'] || 0],
           ['Oportunidade de melhoria', dataOrigens2['Oportunidade de melhoria'] || 0], 
           ['Reclamação de melhoria', dataOrigens2['Reclamação de melhoria'] || 0], 
           ['Outros', dataOrigens2['Outros'] || 0], 
       
        ]}
        options={{
          title: 'Origens das não conformidades ',
          titleTextStyle: {
            fontSize: 19, 
            textAlign: 'center'
          },
          chartArea: { width: '70%' },
          hAxis: {
            title: 'Origem',
            minValue: 0,
          },
          vAxis: {
            title: 'Quantidade',
          },
          legend: { position: 'top' },
          isStacked: true,
        
            colors: [  '#3CB371'],
        }}
        legendToggle
      />
    </div>

       <div className='titulolaboratorio container-fluid text-center align-items-center justify-content-center col-auto'>
      <Chart
        width={'800px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div> Loading Chart </div>}
        data={[
          ['Status', 'Quantidade'],
          ['Não', dataReincidente['Não'] || 0],
          ['Sim', dataReincidente['Sim'] || 0],
          
        ]}
        options={{
          title: 'Reincidência',
          titleTextStyle: {
            fontSize: 21, 
            textAlign: 'center'
          },
          chartArea: { width: '40%' },
          hAxis: {
            title: 'Status',
            minValue: 0,
          },
          vAxis: {
            title: 'Quantidade',
          },
          legend: { position: 'top' },
          isStacked: true,
          pieHole: 0.4,
            pieSliceTextStyle: {
              color: 'white',
            },
            colors: ['#3CB371' ,'#dc3912' ],
        }}
        legendToggle
      />
    </div>


    </body>

  {/*   {z.statuFinalizado === 'Finalizado' ? <h6>{parseInt(z.horasParaTroca)+ parseInt(z.horimetroFinalizacao)}</h6>  :null} */}


  <div className='container text-center d-flex  mt-5 p-2 cinzaclaro'>
    <h6 className='col'> Protocolo</h6>
    <h6 className='col'> Origem</h6>
    <h6 className='col'> Setor de origem</h6>
    <h6 className='col'> reincidente</h6>
    <h6 className='col'> Status</h6>


  </div>

<div className='scrollable container-fluid'>
    {analitico.map((a,i)=>(<div className='container text-center d-flex colorInput ' key={i}>

      {a.setorOrigem && ( <h6 className='col'> {a.id}</h6> )}
      {a.setorOrigem && (<h6 className='col'> {a.origem}</h6> )}
      <h6 className='col'> {a.setorOrigem}</h6> 
      {a.setorOrigem && ( <h6 className='col'> {a.reincidente}</h6>)} 
      {a.setorOrigem && ( <h6 className='col'> {a.substatu}</h6> )}


    </div>))}

</div>

 
 
    <br/><br/>
    </body>
};