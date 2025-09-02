import React, { useEffect, useState } from 'react';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Rdo from './Rdo';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../../Config/Variavelglobal';
// import './App.css'
//import './ListaDinamica.css'


function ListaDinamica_2Rdo(props) {

    return <table className="table table-hover table-bordered">

        <thead>

            <tr className="table-secondary">
                <th scope="col">PERÍODO</th>
                <th scope="col">CÓDIGO DA ATIVIDADE</th>
                <th scope="col">DESCRIÇÃO DAS ATIVIDADE</th>

                <th scope="col">COD</th>
                <th scope="col">QUANTIDADE</th>
                <th scope="col">UNIDADE</th>


                <th scope="col">OBSERVAÇÕES</th>


                

                <th scope="col" className="col-acao"></th>
            </tr>

            <tr className="table-secondary">
                <th scope="col-2">Início</th>
                <th scope="col-2">Fim</th>
               

                <th scope="col" className="col-acao"></th>
            </tr>
        </thead>



        <tbody>

            {
                props.arrayClientes?.map((cliente) => {
                    console.log('ClienteMap', cliente)
                    return <tr key={cliente.id}>
                        <td>{cliente.periodoInicio}</td>
                        <td>{cliente.periodoFim}</td>
                        <td>{cliente.codigoAtividade}</td>
                        <td>{cliente.descricaoAtividade}</td>
                        <td>{cliente.idtabela}</td>
                        <td>{cliente.quantidadeTabela}</td>
                        <td>{cliente.unidadeTabela}</td>
                        <td>{cliente.observacaoTabela}</td>
                        
                        <td>
                    <Link to='#' onClick={() => props.editar(cliente.id,cliente.periodoInicio,cliente.periodoFim,cliente.codigoAtividade,cliente.descricaoAtividade,cliente.idtabela,cliente.quantidadeTabela,cliente.unidadeTabela,cliente.observacaoTabela)}><i className="fas fa-edit icone-acao"></i></Link> 
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

export default ListaDinamica_2Rdo;