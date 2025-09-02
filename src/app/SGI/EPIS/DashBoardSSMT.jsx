import React, { useEffect, useState } from "react";
import Navbar from "./NavBarSSMT";
import { Chart } from "react-google-charts";
import Conexao from '../../Config/conexao';
import axios from 'axios';
import moment from 'moment';


export default function DashBoardSSMT (){

  const [entregaOuDevolucao, setEntregaOuDevolucao]=useState([]);

  async function getEntegaOuDevolucao() {   
    const res = await axios.get(Conexao.api + 'ListaEntregaEpiWEBsemFILTRO.php' );  
    if (res.data.success === false) { 
    } else {  setEntregaOuDevolucao(res.data.result); }   
  };


  useEffect(()=>{getEntegaOuDevolucao();});


  const totalsByFunction = {};

  // Calcule os totais de EPIs por função
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    if (!totalsByFunction[item.funcao]) {
      totalsByFunction[item.funcao] = totalEPIs;
    } else {
      totalsByFunction[item.funcao] += totalEPIs;
    }
  });

  const data = [['Função', 'Total de EPIs']];
  Object.keys(totalsByFunction).forEach(funcao => {
    data.push([funcao, totalsByFunction[funcao]]);
  });


  const totalsBySector = {};

  // Calcule os totais de EPIs por setor
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    if (!totalsBySector[item.setor]) {
      totalsBySector[item.setor] = totalEPIs;
    } else {
      totalsBySector[item.setor] += totalEPIs;
    }
  });

  // Transforme os dados em um formato adequado para o Google Charts
  const chartData = [['Setor', 'Total de EPIs']];
  Object.keys(totalsBySector).forEach(setor => {
    chartData.push([setor, totalsBySector[setor]]);
  });





  const totalsByStatus = {
    ENTREGUE: 0,
    DEVOLVIDO: 0,
    // Adicione outros status conforme necessário
  };

  // Calcule os totais de EPIs por status
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    totalsByStatus[item.substatus] += totalEPIs;
  });

  // Transforme os dados em um formato adequado para o Google Charts
  const chartData2 = [['Status', 'Total de EPIs']];
  Object.keys(totalsByStatus).forEach(status => {
    chartData2.push([status, totalsByStatus[status]]);
  });



/*   const totalsByStatusAndSector = {};

  
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    if (!totalsByStatusAndSector[item.setor]) {
      totalsByStatusAndSector[item.setor] = {};
    }
    if (!totalsByStatusAndSector[item.setor][item.substatus]) {
      totalsByStatusAndSector[item.setor][item.substatus] = totalEPIs;
    } else {
      totalsByStatusAndSector[item.setor][item.substatus] += totalEPIs;
    }
  });

  
  const chartData3 = [['Setor', 'Entregue', 'Devolvido', ]];
  Object.keys(totalsByStatusAndSector).forEach(setor => {
    const row = [setor];
    Object.keys(totalsByStatusAndSector[setor]).forEach(substatus => {
      row.push(totalsByStatusAndSector[setor][substatus]);
    });
    chartData3.push(row);
  }); */



  const episSelected = {};

  // Calcule a quantidade total de cada EPI entregue
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    if (!episSelected[item.descricaoEpi]) {
      episSelected[item.descricaoEpi] = totalEPIs;
    } else {
      episSelected[item.descricaoEpi] += totalEPIs;
    }
  });

  // Transforme os dados em um formato adequado para o Google Charts
  const chartData4 = [['EPI', 'Quantidade Entregue']];
  Object.keys(episSelected).forEach(epi => {
    chartData4.push([epi, episSelected[epi]]);
  });

  // Ordene os dados pelo valor de quantidade entregue
  chartData4.sort((a, b) => b[1] - a[1]);





  const totalsByStatusAndSector = {};

  // Calcule os totais de EPIs por status e setor
  entregaOuDevolucao.forEach(item => {
    const totalEPIs = parseInt(item.qtd) * parseInt(item.und);
    if (!totalsByStatusAndSector[item.setor]) {
      totalsByStatusAndSector[item.setor] = {};
    }
    if (!totalsByStatusAndSector[item.setor][item.substatus]) {
      totalsByStatusAndSector[item.setor][item.substatus] = totalEPIs;
    } else {
      totalsByStatusAndSector[item.setor][item.substatus] += totalEPIs;
    }
  });

 /*  // Transforme os dados em um formato adequado para o Google Charts
  const substatusTypes = Object.keys(totalsByStatusAndSector[Object.keys(totalsByStatusAndSector)[0]]);
  const chartDataByStatusAndSector = [['Setor', ...substatusTypes]];
  Object.keys(totalsByStatusAndSector).forEach(setor => {
    const row = [setor];
    substatusTypes.forEach(substatus => {
      row.push(totalsByStatusAndSector[setor][substatus] || 0);
    });
    chartDataByStatusAndSector.push(row);
  }); */


  let substatusTypes = [];
if (Object.keys(totalsByStatusAndSector).length > 0) {
  substatusTypes = Object.keys(totalsByStatusAndSector[Object.keys(totalsByStatusAndSector)[0]]);
}

const chartDataByStatusAndSector = [['Setor', ...substatusTypes]];
Object.keys(totalsByStatusAndSector).forEach(setor => {
  const row = [setor];
  substatusTypes.forEach(substatus => {
    row.push(totalsByStatusAndSector[setor][substatus] || 0);
  });
  chartDataByStatusAndSector.push(row);
});



return( <body>


    <Navbar/>


    <br/>
      <div className='titulolaboratorio container-fluid '>
        <h1 className='texttitulo'>DashBoard SSMT</h1>
      </div> 

      <br/>

      
<body className="container d-flex">


<div className=" container-fluid text-center scrollable col-6">
      <h1> Entregas por função</h1>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="ColumnChart"
        loader={<div>Carregando Gráfico</div>}
        data={data}
        options={{
          chart: {
            title: 'Entregas por Função',
            subtitle: 'Total de EPIs Entregues por Função',
          },
          hAxis: {
            title: 'Função',
          },
          vAxis: {
            title: 'Total de EPIs',
            minValue: 0,
          },
          colors: ['#3CB371'  ],
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>



  {/*   <div>
      <h1>Gráfico de Setores de Entregas de EPIs</h1>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Carregando Gráfico</div>}
        data={chartData}
        options={{
          title: 'Distribuição de EPIs por Setor',
          colors: ['#3CB371' ,'#dc3912' ],
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div> */}



    <div  className=" container text-center col-6 offset-1 ">
      <h1> Status de EPIs</h1>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Carregando Gráfico</div>}
        data={chartData2}
        options={{
          title: 'Distribuição de EPIs por Status',
          colors: ['#3CB371' ,'#dc3912' ],
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>

    </body>

    <body className="container text-center mt-5  d-flex ms-5">

  {/*   <div>
      <h1>Gráfico de Barra Empilhada de Status de EPIs por Setor</h1>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="BarChart"
        loader={<div>Carregando Gráfico</div>}
        data={chartData3}
        options={{
          title: 'Distribuição de EPIs por Status e Setor',
         // isStacked: true,
          
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    </div> */}

    <div className=" container  text-center  col-1"></div> 


<div  className=" container-fluid align-items-cente scrollable text-center col-8">
      <h3> Status de EPIs por Setor</h3>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="BarChart"
        loader={<div>Carregando Gráfico</div>}
        data={chartDataByStatusAndSector}
        options={{
          title: 'Distribuição de EPIs por Status e Setor',
          isStacked: true,
          colors: ['#3CB371' ,'#dc3912' ],
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    </div>



    <div  className=" container text-center col-auto offset-1 scrollable">
      <h1> EPIs Mais Entregues</h1>
      <Chart
        width={'500px'}
        height={'400px'}
        chartType="ColumnChart"
        loader={<div>Carregando Gráfico</div>}
        data={chartData4}
        options={{
          title: 'EPIs Mais Entregues',
          hAxis: {
            title: 'EPIs',
          },
          vAxis: {
            title: 'Quantidade Entregue',
            minValue: 0,
          },
          colors: ['#3CB371' ],
          
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>

    </body>


<br/><br/><br/>

</body>

)


};