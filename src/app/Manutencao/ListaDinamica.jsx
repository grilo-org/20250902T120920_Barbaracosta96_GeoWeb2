import React, { useEffect, useState } from 'react';
import Conexao from '../../app/Config/conexao';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RegInternoManutencaoCorretivaPreventiva from '../Manutencao/Reg_Corretiva_Preventiva/RegInternoManutencaoCorretivaPreventiva';
import {Link} from 'react-router-dom'
import VariavelGlobal from '../Config/Variavelglobal';
// import './App.css'
import './ListaDinamica.css'






function ListaDinamica(props) {
    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col">Manutenção</th>
                <th scope="col">Descrição</th>
           
                <th scope="col" className="col-acao"></th>
            </tr>
            </thead>
            <tbody>

            {
                props.arrayClientes?.map((cliente) => {
                    return <tr key={cliente.id}>
                    <td>{cliente.manutencaoPC}</td>
                    <td>{cliente.descricaoModal}</td>
                    <td>
                        {/* <Link to={'/app/editarcliente/' + cliente.id}><i className="fas fa-edit icone-acao"></i></Link> */}
                     { VariavelGlobal.ButtonEnable === false ? <button onClick={() => props.clickDelete(cliente.id) } className="borderr  "><i className="far fa-trash-alt icone-acao red"></i></button> : null}
                    </td>
                </tr>
                })
            }
                       
            
            </tbody>
        </table>

}


export default ListaDinamica;

