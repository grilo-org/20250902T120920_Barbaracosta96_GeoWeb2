import React, { useEffect, useState } from 'react';
// import './App.css'
import axios from 'axios';
import Conexao from '../Config/conexao';
import './ListaDinamica.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../Config/Variavelglobal';


function ListaDinamica4(props) {
    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Causas</th>
                <th scope="col">Descrição</th>

                <th scope="col" className="col-acao"></th>
            </tr>
        </thead>
        <tbody>

            {
                props.arrayClientes4?.map((cliente4) => {
                    return <tr key={cliente4.id}>
                        <td>{cliente4.causa}</td>
                        <td>{cliente4.descricaocausa}</td>
                        <td>
                            {/* <Link to={'/app/editarcliente/' + cliente3.id}><i className="fas fa-edit icone-acao"></i></Link> */}
                            { VariavelGlobal.ButtonEnable === false ?  <button onClick={() => props.clickDelete4(cliente4.id)} className="borderr  "><i className="far fa-trash-alt icone-acao red"></i></button>: null }
                        </td>
                    </tr>
                })
            }


        </tbody>
    </table>



















    // function ListaDinamica3({ dataDinamica3, inputFields3, setInputFields3 }) {



    //   const handleFormChange = (index, event) => {

    //     let data = [...inputFields3];
    //     console.log(event.target.inputFields3)
    //     data[index][event.target.index] = event.target.value; setInputFields3(data);


    //   }

    //   const addFields = (e) => {
    //     e.preventDefault();
    //     let newfield = { data: '', atividade: ''  }
    //     setInputFields3([...inputFields3, newfield])
    //   }

    //   const submit = (e) => {
    //     e.preventDefault();

    //   }

    //   const removefields = (index) => {
    //     let data = [...inputFields3];

    //     data.splice(index, 1)
    //     setInputFields3(data)
    //   }

    // //BANCO DE DADOS

    // useEffect(() => {
    //   setInputFields3(dataDinamica3);
    // }, []);
    // //console.log('inputFields3', inputFields3);


    //   return (

    //     <div className='App'>


    //       <form>
    //         {inputFields3.map((input, index) => {

    //           return (
    //             <div key={index}>


    //               <div class="form-check form-check-inline">
    //                 <input type='date' className='form-control text-center colorInput ' name='data'value={input.data} onChange={event => handleFormChange(index, event)}
    //                 />
    //               </div>

    //               <div class="form-check form-check-inline">
    //                 <input className='form-control text-center colorInput '
    //                   name='Atividade'
    //                   placeholder='Atividade'
    //                   value={input.atividade}
    //                   onChange={event => handleFormChange(index, event)}
    //                 />
    //               </div>

    //               <div class="form-check form-check-inline">
    //                 {inputFields3.length - 1 === index && (<IconButton aria-label="delete" size="large" onClick={() => removefields(index)}><DeleteIcon fontSize="inherit" /></IconButton>)}
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



export default ListaDinamica4;








