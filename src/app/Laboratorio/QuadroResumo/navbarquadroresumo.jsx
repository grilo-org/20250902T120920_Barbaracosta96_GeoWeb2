import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import './QuadroResumo.css';
import { AuthContext } from '../../Context/auth';

function NavbarLaboratorio() {
  const [distr1, setDistr1] = useState('%< 2.00mm ')
  const [distr2, setDistr2] = useState('%< 0.42 mm')
  const [distr3, setDistr3] = useState('%< 0.074mm')
  const [distr4, setDistr4] = useState('%< 0.002mm')
  const { setLogado } = useContext(AuthContext);

  function Logout() {
    setLogado(false);
    localStorage.removeItem("logado");
  }


  return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

<thead style={{ background: '#3EBF52' }}>
                    <tr>
                        <th scope="col">Sonda</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Amostra</th>
                        <th scope="col">Profundidade Inicial</th>
                        <th scope="col">Profundidade Final</th>
                        <th scope="col">Descrição do Solo</th>
                        <th scope="col">Class SUCS HRB</th>
                        <th scope="col">wnat (%)</th>
                        <th scope="col">Massa esp. das particulas (g/cm3)</th>
                        <th scope="col">Limites de consist. </th>
                        <th scope="col">LL</th>
                        <th scope="col">LP </th>
                        <th scope="col">IP</th>
                        <th scope="col">Distribuição granulométrica{distr1}</th>
                        <th scope="col">Distribuição granulométrica{distr2}</th>
                        <th scope="col">Distribuição granulométrica{distr3}</th>
                        <th scope="col">Distribuição granulométrica{distr4}</th>
                        <th scope="col">Coeficientes Curvatura Cu</th>
                        <th scope="col">Coeficientes Curvatura Cc</th>
                        <th scope="col">Massa esp. aparente Massa especifica max. (g/cm3)</th>
                        <th scope="col">Massa esp. aparente Massa especifica seca max. (g/cm3)</th>
                        <th scope="col">Compactação Teor umidade %</th>
                        <th scope="col">Compactação Massa especif. seca g/cm3</th>
                        <th scope="col">ISC Teor %</th>
                        <th scope="col">ISC</th>
                        <th scope="col">ISC (Ótimo)(2.5)</th>
                        <th scope="col">ISC (Ótimo)(5.0)</th>

                    </tr>
                </thead>
  </nav>;
}

export default NavbarLaboratorio;