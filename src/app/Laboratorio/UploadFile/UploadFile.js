import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import Conexao from '../../Config/conexao';
import './UploadFile.css'

function UploadFile() {

    const [image, setArquivo] = useState()
    const [statu, setStatu] = useState('ok')
    const [resu, setResul] = useState('')
    const [base64code, setbase64code] = useState()
    const [processo, setProcesso] = useState()

    async function add() {
        console.log(base64code)
        const formData = { image };
         const res = await axios.post('http://34.138.14.62/ApiReact/upload.php', formData);
        console.log(res.data)
        setResul(res.data.Processo)
        if (resu !=='') {
            console.log("OK")
             add2()
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
    async function add2() {


        const obj = { processo, resu };

        if (processo > 0) {
            const res = await axios.post(Conexao.api + 'InserteEnsaio.php', obj);
            if (res.data.success === true) {

                console.log('salvo com sucesso')

            }
        }
    }
    return (<div>
        <Navbar />
        <div className="formfile">
            <form >
                <p className="ptexte">Upload de arquivos</p>
            </form>
        </div>
        <div className="formfile3">
            <form >
                <p className="ptexte2">Número do processo</p>
            </form>
        </div>
        <div className="formfile0">
            <input onChange={(e) => setProcesso(e.target.value)} type="text" class="css-input" />
        </div>
        <div className="formfile4">
            <form >
                <p className="ptexte2">Cliente</p>
            </form>
        </div>
        <div className="formfile0">
            <input onChange={(e) => setProcesso(e.target.value)} type="text" class="css-input" />
        </div>
        <div className="formfile4">
            <form >
                <p className="ptexte2">Número da amostra</p>
            </form>
        </div>
        <div className="formfile0">
            <input onChange={(e) => setProcesso(e.target.value)} type="text" class="css-input" />
        </div>
        <div className="formfile4">
            <form >
                <p className="ptexte2">Obra</p>
            </form>
        </div>
        <div className="formfile0">
            <input onChange={(e) => setProcesso(e.target.value)} type="text" class="css-input" />
        </div>
        <div className="formfile1" >

            <form  >
                <input className="formfile4" type="file" onChange={onChange} />
            </form>

        </div>
        
        <div className="Ftp2" >
            <form className="formFtp" >

                <button onClick={add} type="button" className="btnsave">Salvar</button>
            </form>
        </div>
        <div className="Ftp2" ></div>
    </div>
    );
}
export default UploadFile