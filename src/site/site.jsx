import React from 'react';
import Menu from './Components/Menu/menu';
import Banner from './Components/banner';
import Features from './Components/features';
import Carrusel from './Components/Corrusel';
import Precos from './Components/Clientes/clientes';
import Footer from '../../src/site/Components/rodape/footer';

function Site(){
    return <div>
      <Menu/>
      {/* <Banner/> */}
      {/* <Features/> */}
      <Carrusel/>
      <Precos/>
      <Footer/>
    </div>;
  }

export default Site;