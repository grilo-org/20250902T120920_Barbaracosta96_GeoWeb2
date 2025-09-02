import React, { useState } from "react";
import axios from 'axios';
// import Conexao from '../Config/conexao';
// import Navbar from '../Components/Navbar/navbar';
import './Ftp.css'

function Ftp() {
  const [amostra, setAmostra] = useState('15125')
  const [image, setArquivo] = useState()
  const [statu, setStatu] = useState('ok')
const[resu,setResul] = useState()
  const [base64code, setbase64code] = useState()

  async function add() {
    const formData = { image };


    const res = await axios.post('http://34.138.14.62/ApiReact/upload.php', formData);
    console.log(res.data)
    setResul(res.data)
    if (res.data.success === true) {
      console.log("OK")

    }
  };
  const onChange = e => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = fileString => {
    //console.log(fileString);
    setArquivo(fileString)
    setbase64code(fileString)
  };

  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  return (<div>

    <div className="Ftp">
      <form>
        <input type="file" onChange={onChange} />

        <textarea className="quadro" rows="5" cols="50" value={base64code}></textarea>
        <textarea className="quadro" rows="5" cols="50" value={resu}></textarea>
      </form>
      <div className="Ftp2">
        <form>
          <button onClick={add} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
        </form>
      </div>
    </div>
  </div>
  );
}
export default Ftp