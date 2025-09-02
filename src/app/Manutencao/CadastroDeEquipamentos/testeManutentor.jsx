import { useState, useEffect } from 'react';
import Navbar from '../NavbarManutencao/navbarManutencao';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Conexao from '../../Config/conexao';
import moment from 'moment';


export default function TesteManutentor(props){

    const[buscaFILTROdePecas, setBuscaFILTRODePecas]=useState([]);

    return <div >

      <Navbar />   

    <div className='titulolaboratorio container-fluid'>
      <h1 className='texttitulo'>TESTE MANUTENTOR</h1>
    </div>
    <br/><br/>

 


    </div>
};