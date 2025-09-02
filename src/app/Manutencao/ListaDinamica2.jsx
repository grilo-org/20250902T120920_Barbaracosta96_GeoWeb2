import React, { useEffect, useState } from 'react';
// import './App.css'
import axios from 'axios';
import Conexao from '../../app/Config/conexao';
import './ListaDinamica.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../Config/Variavelglobal';


function ListaDinamica2(props) {
    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Responsavel</th>
                <th scope="col">Tipo de Material</th>
                <th scope="col">Data</th>

                <th scope="col" className="col-acao"></th>
            </tr>
        </thead>
        <tbody>

            {
                props.arrayClientes2?.map((cliente2) => {
                    return <tr key={cliente2.id}>
                        <td>{cliente2.responsavel}</td>
                        <td>{cliente2.tipo}</td>
                        <td>{cliente2.dataModal}</td>
                        <td>
                            {/* <Link to={'/app/editarcliente/' + cliente2.id}><i className="fas fa-edit icone-acao"></i></Link> */}
                            { VariavelGlobal.ButtonEnable === false? <button onClick={() => props.clickDelete2(cliente2.id)} className="borderr  "><i className="far fa-trash-alt icone-acao red"></i></button> :null }
                        </td>
                    </tr>
                })
            }


        </tbody>
    </table>

    // function ListaDinamica2({ dataDinamica2, inputFields2, setInputFields2 }) {


    //   const handleFormChange = (index, event) => {

    //     let data = [...inputFields2];
    //      //console.log(event.target.inputFields2)
    //     data[index][event.target.index] = event.target.value; setInputFields2(data);


    //   }

    //   const addFields = (e) => {
    //     e.preventDefault();
    //     let newfield = { Resp: '', Calderaria: '', Mecanica: '', Eletrica: '', Geral: '', data: ''}
    //     setInputFields2([...inputFields2, newfield])
    //   }

    //   const submit = (e) => {
    //     e.preventDefault();

    //   }

    //   const removefields = (index) => {
    //     let data = [...inputFields2];

    //     data.splice(index, 1)
    //     setInputFields2(data)
    //   }


    // //BANCO DE DADOS


    //  useEffect(() => {
    //    setInputFields2(dataDinamica2);
    // }, []);

    //  //console.log('inputFields2', inputFields2);



    //   return (

    //     <div className='App'>


    //       <form>
    //         {inputFields2?.map((input, index) => {

    //           return (
    //             <div key={index}>

    //               <div class="form-check form-check-inline">
    //                 <div class="row align-items-start">
    //                   <input className='form-control text-center colorInput '
    //                     name='Resp'
    //                     placeholder='Responsavel'
    //                     value={input.responsavel}
    //                     onChange={event => handleFormChange(index, event)}
    //                   />
    //                 </div>
    //               </div>

    //               <div class="form-check form-check-inline">
    //                 <div class="row align-items-start">

    //               <select  className=' form-select  text-center colorInput ' name='Tipo' value={input.tipo} onChange={event => handleFormChange(index, event)}  >                      
    //                     <option value="baixo">Caldeiraria</option>
    //                      <option value="medio">Mecânica</option>
    //                      <option value="alto">Elétrica</option>
    //                      <option value="alto">Geral</option>
    //                 </select>

    //                 </div>
    //               </div>

    //               <div class="form-check form-check-inline">
    //                 <div class="row align-items-start">
    //                   <input type='date' className='form-control text-center colorInput ' name='data' value={input.data} onChange={event => handleFormChange(index, event)}
    //                   />
    //                 </div>
    //               </div>

    //               <div class="form-check form-check-inline">
    //                 {inputFields2.length - 1 === index && (<IconButton aria-label="delete" size="large" onClick={() => removefields(index)}><DeleteIcon fontSize="inherit" /></IconButton>)}
    //               </div>
    //             </div>


    //           )



    //       //   })}


    //       //   <button className="btn btn-outline-success me-md-2 " type="submit" onClick={addFields}>ADICIONAR</button>
    //       //   {/* <button class="btnlista " onClick={submit}>Submit</button> */}

    //       // </form>




    //     </div>







    //   );
}



export default ListaDinamica2;








