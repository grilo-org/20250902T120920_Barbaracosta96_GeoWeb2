import React, { useEffect, useState } from 'react';
import Conexao from '../../Config/conexao';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BoletimSondagem from '../BoletimSondagem/BoletimSondagem';
import { Link } from 'react-router-dom'
import VariavelGlobal from '../../Config/Variavelglobal';
// import './App.css'
//import './ListaDinamica.css'


function ListaDinamicaSondagem(props) {

    return <table className="table table-hover table-bordered">

        <thead>

            <tr className="table-secondary">
                <th scope="col">PROFUNDIDADE</th>
                <th scope="col">AVANÇO</th>
                <th scope="col">Φ</th>

                <th scope="col">REVESTIMENTO</th>
                <th scope="col">COMPRIMENTO</th>
                <th scope="col">RECUPERAÇÃO</th>


                <th scope="col">CLASSIFICAÇÃO LITOLÓGICA PROVISÓRIA</th>


                <th scope="col">COR DA ÁGUA DE CIRCULAÇÃO</th>
                <th scope="col">Nº DA CAIXA</th>

                <th scope="col">PROF</th>
                <th scope="col">1ªFASE</th>
                <th scope="col">2ªFASE</th>

                <th scope="col" className="col-acao"></th>
            </tr>

            <tr className="table-secondary">
                <th scope="col">DE</th>
                <th scope="col">A</th>
                <th scope="col">(m)</th>

                <th scope="col">(mm)</th>
                <th scope="col">(m)</th>
                <th scope="col">%</th>

                <th scope="col">(m)</th>
                <th scope="col">15(cm)</th>
                <th scope="col">30(cm)</th>
                <th scope="col" className="col-acao"></th>
            </tr>
        </thead>



        <tbody>

            {
                props.arrayClientes?.map((cliente) => {
                    console.log('ClienteMap', cliente)
                    return <tr key={cliente.id}>
                        <td>{cliente.profundidadeDE}</td>
                        <td>{cliente.profundidadeA}</td>
                        <td>{cliente.avanco}</td>
                        <td>{cliente.fi}</td>
                        <td>{cliente.revestimento}</td>
                        <td>{cliente.comprimento}</td>
                        <td>{cliente.recuperacao}</td>
                        <td>{cliente.classificacaoLP}</td>
                        <td>{cliente.cor_aguacirculacao}</td>
                        <td>{cliente.caixa}</td>
                        <td>{cliente.prof}</td>
                        <td>{cliente.pfase}</td>
                        <td>{cliente.sfase}</td>
                        <td>{cliente.confirmacao}</td>
                        <td>{cliente.obsevacoes}</td>
                        <td>{cliente.confirmacaoid}</td>
                        <td>
                    <Link to='#' onClick={() => props.editar(cliente.id,cliente.profundidadeDE,cliente.profundidadeA,cliente.avanco,cliente.fi,cliente.revestimento,cliente.comprimento,cliente.recuperacao,cliente.classificacaoLP,cliente.cor_aguacirculacao,cliente.caixa,cliente.prof,cliente.pfase,cliente.sfase,cliente.confirmacao,cliente.obsevacoes)}><i className="fas fa-edit icone-acao"></i></Link> 
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

export default ListaDinamicaSondagem;