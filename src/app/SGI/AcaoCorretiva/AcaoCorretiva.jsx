import { Link } from 'react-router-dom';
import './AcaoCorretiva.css';
import React from 'react';




function AcaoCorretiva(props) {
    return <table className="table table-hover table-bordered">
    <thead>
      <tr className="table-secondary">
            <th scope="col">Item</th>
            <th scope="col">Ação</th>
            <th scope="col">Responsável</th>
            <th scope="col">Previsão</th>
            <th scope="col">Execução</th>
            <th scope="col" className="col-acao"></th>
      </tr>

    </thead>

    <tbody>
      {
        props.arrayAcoes.map((Acoes1)=> {
          return <tr key={Acoes1.id}>
                    <td>{Acoes1.item}</td>
                    <td>{Acoes1.acao}</td>
                    <td>{Acoes1.responsavel}</td>
                    <td>{Acoes1.previsao}</td>
                    <td>{Acoes1.execucao}</td>
                    <td>
                    <Link to={'/app/RncDetalhado/' + Acoes1.id}><i className="fas fa-edit icone-acao"></i></Link>
                    <Link to='#' onClick={() => props.clickDelete(Acoes1.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                    </td>
                 </tr>
        })
      };
    </tbody>
  </table>
};
export default AcaoCorretiva;