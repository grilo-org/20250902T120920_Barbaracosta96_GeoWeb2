import React from 'react';
import {Link} from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props){
    
    return <table className="table table-hover table-bordered">
            <thead>
           
            <tr className="table-secondary">
                <th scope="col">Cliente</th>
                <th scope="col">Furo</th>
                <th scope="col">Sonda</th>
       
            </tr>
            </thead>
            <tbody>

            {
                props.arrayClientes.map((cliente) => {
                    
                    return <tr key={cliente.id}>
                    <td>{cliente.cliente}</td>
                    <td>{cliente.furo}</td>
                    <td>{cliente.sonda}</td>
             
                
                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListaClientes;