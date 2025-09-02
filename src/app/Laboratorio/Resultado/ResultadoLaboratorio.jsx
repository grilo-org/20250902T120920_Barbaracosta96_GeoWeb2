import React, { useState } from 'react';
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import ListaAmostra from '../../Components/ListaAmostra/listadeterminiacaomassaespecificaaparente';
import '../Laboratorio.css';
import axios from 'axios'; // npm i axios
import Conexao from '../../Config/conexao';
import { useEffect } from 'react';
import VariavelGlobal from '../../Config/Variavelglobal'

function ResultadoLaboratorio(props) {

  const [lista, setLista] = useState([])
  const [listaamostraprocesso, setListaAmostraProcesso] = useState([]);
  const [amostra, setAmostra] = useState(VariavelGlobal.var1)
  const [pd, setPd] = useState('')


  async function listarDados() {
    const rese = await axios.get(Conexao.api + 'ListaPdf.php?Amostra=' + amostra);
    setListaAmostraProcesso(rese.data.result);
  }


  useEffect(() => {

    listarDados()
console.log(VariavelGlobal.var1)

  }, [])


  return <div>
    <Navbar />
    <div className="container-fluid titulo">
      
        <div className="col-4"></div>
        
   
          <div className="mb34">
            
          <p className='pprocesso'>Processo: {VariavelGlobal.var1}</p>

          </div>

      
   
      <ListaAmostra arrayAmostra={listaamostraprocesso} />


    </div>
  
  </div>

}

export default ResultadoLaboratorio;

