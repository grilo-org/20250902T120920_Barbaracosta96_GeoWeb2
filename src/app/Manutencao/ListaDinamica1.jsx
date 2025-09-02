import React, { useEffect, useState } from 'react';
// import './App.css'
import axios from 'axios';
import Conexao from '../../app/Config/conexao';
import './ListaDinamica.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../Config/Variavelglobal';

function ListaDinamica1(props) {

  return <table className="table table-hover table-bordered">
    <thead>
      <tr className="table-secondary">
        <th scope="col">Item</th>
        <th scope="col">Descrição de Material</th>
        <th scope="col">Quantidade</th>

        <th scope="col" className="col-acao"></th>
      </tr>
    </thead>
    <tbody>

      {
        props.arrayClientes1?.map((cliente1) => {
          return <tr key={cliente1.id}>
            <td>{cliente1.item}</td>
            <td>{cliente1.descricaoPeca}</td>
            <td>{cliente1.quantidade}</td>
            <td>
              {/* <Link to={'/app/editarcliente/' + cliente1.id}><i className="fas fa-edit icone-acao"></i></Link> */}
              { VariavelGlobal.ButtonEnable === false ? <button onClick={() => props.clickDelete1(cliente1.id)} className="borderr  "><i className="far fa-trash-alt icone-acao red"></i></button> : null }
            </td>
          </tr>
        })
      }


    </tbody>
  </table>







  // function ListaDinamica1({ dataDinamica1, inputFields1, setInputFields1 }) {
  //   console.log('antes de tudo', inputFields1);

  //   const handleFormChange = (index, event) => {

  //     let data = [...inputFields1];

  //     data[index][event.target.index] = event.target.value; setInputFields1(data);


  //   }

  //   const addFields = (e) => {
  //     e.preventDefault();
  //     let newfield = { Item: '', Descricaopeca: '', Quantidade: '' }
  //     setInputFields1([...inputFields1, newfield])
  //   }

  //   const submit = (e) => {
  //     e.preventDefault();

  //   }

  //   const removefields = (index) => {
  //     let data = [...inputFields1];

  //     data.splice(index, 1)
  //     setInputFields1(data)
  //   }

  //   //BANCO DE DADOS




  //    useEffect(() => {
  //    setInputFields1(dataDinamica1);
  //   }, []);

  //    console.log('inputFields1', inputFields1);






  //   return (

  //     <div className='App'>


  //       <form>
  //         {inputFields1?.map((input, index) => {

  //           return (
  //             <div key={index}>

  //               <div class="form-check form-check-inline">
  //                 <input className='form-control text-center colorInput '
  //                   name='Item' id='Item'
  //                   placeholder='Item'
  //                   value={input.item}
  //                   onChange={event => handleFormChange(index, event)}
  //                 />
  //               </div>

  //               <div class="form-check form-check-inline">
  //                 <input className='form-control text-center colorInput '
  //                   name='Descricaopeca'
  //                   placeholder='Descricaopeca'
  //                   value={input.descricaoPeca}
  //                   onChange={event => handleFormChange(index, event)}
  //                 />
  //               </div>

  //               <div class="form-check form-check-inline">
  //                 <input className='form-control text-center colorInput '
  //                   name='Quantidade'
  //                   placeholder='Quantidade'
  //                   value={input.quantidade}
  //                   onChange={event => handleFormChange(index, event)}
  //                 />
  //               </div>

  //               <div class="form-check form-check-inline">
  //                 {inputFields1.length - 1 === index && (<IconButton aria-label="delete" size="large" onClick={() => removefields(index)}><DeleteIcon fontSize="inherit" /></IconButton>)}
  //               </div>
  //             </div>


  //           )



  //         })}


  //         <button className="btn btn-outline-success me-md-2 " type="submit" onClick={addFields}>ADICIONAR</button>
  //         {/* <button class="btnlista " onClick={submit}>Submit</button> */}
  //       </form>




  //     </div>







  //   );
}



export default ListaDinamica1;
