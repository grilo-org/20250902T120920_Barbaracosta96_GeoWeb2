import React, { useEffect, useState } from 'react';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Rdo from '../RDO/Rdo';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../../Config/Variavelglobal';
// import './App.css'
//import './ListaDinamica.css'


function ListaDinamica_1Rdo(props) {

    return <table className="table table-hover table-bordered">

        <thead>

            <tr className="table-secondary">
                <th scope="col-6">EQUIPAMENTO</th>
                <th scope="col-6">EFETIVO</th>

                <th scope="col" className="col-acao"></th>
            </tr>
            
           
        </thead>



        <tbody>

            {
                props.arrayClientes?.map((cliente) => {
                    console.log('ClienteMap', cliente)
                    return <tr key={cliente.id}>
                        <td>{cliente.descricaoequipamento}</td>
                        <td>{cliente.quantidadeequipamento}</td>
                        <td>{cliente.descriçaoefetivo}</td>
                        <td>{cliente.quantidadeefetivo}</td>
                        <td>
                            <Link to='#' onClick={() => props.editar(cliente.id, cliente.descricaoequipamento, cliente.quantidadeequipamento, cliente.descriçaoefetivo, cliente.quantidadeefetivo)}><i className="fas fa-edit icone-acao"></i></Link>
                            <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                            {/* {<Link to={'/app/editarcliente/' + cliente.id}><i className="fas fa-edit icone-acao"></i></Link>} */}
                            {VariavelGlobal.ButtonEnable === false ? <button onClick={() => props.clickDelete(cliente.id)} className="borderr  "><i className="far fa-trash-alt icone-acao red"></i></button> : null}
                        </td>
                    </tr>
                })
            }

        </tbody>
    </table>
}

export default ListaDinamica_1Rdo;