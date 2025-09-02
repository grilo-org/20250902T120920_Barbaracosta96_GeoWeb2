import React from 'react';
import { Link } from 'react-router-dom';

import './listar.css';
function listadeterminiacaomassa(props) {
    
    const urlToDownload = ("http://34.138.14.62/ApiReact/uploads/");



    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Processo</th>
                <th scope="col">Amostra</th>
                <th scope="col">Cliente</th>
                <th scope="col">Obra</th>
                <th scope="col">Observação</th>
                <th scope="col">PDF</th>
            </tr>
        </thead>
        <tbody>
            {
                props.arrayAmostra.map((listaamostraprocesso) => {
                    return <tr key={listaamostraprocesso.id}>
                        <td>{listaamostraprocesso.Processo}</td>
                        <td>{listaamostraprocesso.amostra}</td>
                        <td>{listaamostraprocesso.cliente}</td>
                        <td>{listaamostraprocesso.obra}</td>
                        <td>{listaamostraprocesso.observacao}</td>
                        <td>
                            <a href={urlToDownload + listaamostraprocesso.path} target="_blank" rel="noopener noreferrer"> <i className="far fa-file-pdf red" ></i></a>
                        </td>
                    </tr>
                })
            }

        </tbody>
    </table>
}

export default listadeterminiacaomassa;