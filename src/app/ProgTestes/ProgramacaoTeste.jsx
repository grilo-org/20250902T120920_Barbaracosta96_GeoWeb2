import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


import './ProgramacaoTeste.css';
import axios from 'axios'; // npm i axios
import SweetAlert from 'react-bootstrap-sweetalert';
import Conexao from '../Config/conexao';
import NumericInput from 'react-numeric-input';
import { useDownloadExcel } from "react-export-table-to-excel";



import VariavelGlobal from '../Config/Variavelglobal'

export default function SampleHook() {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users"
  });
  return (
    <div>
      <button onClick={onDownload}> Export excel </button>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Sond. Nº</th>
            <th>Tipo</th>
            <th>Amostra Nº</th>
            <th>Prof.(m)</th>
            <th>Descrição do Solo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PI-105A</td>
            <td>Bloco</td>
            <td>11692</td>
            <td>
              000
              001
            </td>
            <td>
              000
              001
            </td>
          </tr>
          <tr>
            <td>PI-105A</td>
            <td>Bloco</td>
            <td>11692</td>
            <td>
              000
              001
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


