import React, { useEffect, useState } from "react";
import saveAs from "file-saver";
import axios from 'axios'; // npm i axios
import Navbar from '../NavbarLaboratorio/navbarlaboratorio';
import Conexao from '../../Config/conexao';
import { excel } from "react-export-table-to-excel/lib/lib";
import { TryRounded } from "@mui/icons-material";
import './QuadroResumo.css'
import NavbarQuadroResulmo from './navbarquadroresumo';
const ExcelJS = require("exceljs");

const toDataURL = (url) => {
    const promise = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.readAsDataURL(xhr.response);
            reader.onloadend = function () {
                resolve({ base64Url: reader.result });
            };
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    });

    return promise;
};

const QuadroResulmo = () => {
    const [entidade, setEntidade] = useState("")
    const [desig, setDesig] = useState("")
    const [obra, setObra] = useState("")
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [distr1, setDistr1] = useState('%< 4.75mm ')
    const [distr2, setDistr2] = useState('%< 2.00 mm')
    const [distr3, setDistr3] = useState('%< 0.42mm')
    const [distr4, setDistr4] = useState('%< 0.075mm')
    const [distr5, setDistr5] = useState('%< 0.002mm')
    const [sucesso, setSucesso] = useState('');
    const [sucesso1, setSucesso1] = useState('');
    const [snumero, setSNumero] = useState('')
    const [teste, setTeste] = useState(false)
    const [processo, setProcesso] = useState()
    const [check, setCheck] = useState()

    const result = ({ base64Url: 'data:image/jpeg;base64,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' });
    function handleKeyPress(event) {

        if (event.key === "Enter") {

            listarDados()

        }
    };
    async function listarDados() {
        if (processo !== '' || processo !== 0) {
            setSNumero('N')
            // console.log(processo)
            const res = await axios.get(Conexao.api + 'ListaQuadroResulmo.php?Processo=' + processo);
            setData(res.data.result);
            setData1(res.data.granumetria);
            console.log(res.data.result)
            setEntidade(res.data.dadoscabecalho[0].Cliente) //Designa_obra
            setDesig(res.data.dadoscabecalho[0].Designa_obra)
            setObra(processo)
            //exportExcelFile()
            if (res.data.success === true) {
                setSucesso('S');
                setSucesso1('S')
                setData(res.data.result);
                setData1(res.data.granumetria);
                // exportExcelFile(res.data.result)


            } else {

                setSucesso('N');
                setSucesso1('N')
            }
            // exportExcelFile
        } else {
            console.log(processo)
            setSNumero('S')

        }
    }
    async function gerarrelatorio() {
        if (processo !== '' || processo !== 0) {
            setSNumero('N')
            setSucesso('S');
            setSucesso1('S')
            exportExcelFile(data, data1)
        } else {
            console.log(processo)
            setSNumero('S')
        }
    }



    useEffect(() => {
        if (processo === 0 || processo === '') {
            setSucesso1('N')

        }
        // listarDados()
        // console.log(check)
    });

    const exportExcelFile = (dado, dado1) => {
        const ExcelJSWorkbook = new ExcelJS.Workbook();
        const worksheet = ExcelJSWorkbook.addWorksheet("QR-Global_" + obra);



        // worksheet.properties.defaultColWidth = 8;
        const row = worksheet.getRow(7);
        row.height = 2
        worksheet.mergeCells('A1:A5');
        worksheet.mergeCells('B1:B5');
        worksheet.autoFilter = {
            from: 'A9',
            to: 'AD9',
        }
        worksheet.views = [
            { state: 'frozen', xSplit: 0, ySplit: 9, topLeftCell: 0, activeCell: 'A8' }
        ];
        worksheet.mergeCells('A8:F8');
        worksheet.mergeCells('I8:J8');
        const customCellP3 = worksheet.getCell('I8');
        customCellP3.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        worksheet.getCell('A8').border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        }

        worksheet.mergeCells('E6:F6');
        const customCell3 = worksheet.getCell("E6");
        customCell3.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };


        worksheet.mergeCells('E1:F1');
        const customCell = worksheet.getCell("E1");
        customCell.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };

        customCell.fill = {

            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '7F7F7F' },
            bgColor: { argb: '7F7F7F' }
        };
        customCell.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        customCell.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        customCell.value = "ENTIDADE";

        worksheet.mergeCells("G1:AE1");
        const entidadeinput = worksheet.getCell("G1");
        entidadeinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        entidadeinput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        entidadeinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        entidadeinput.value = entidade;

        worksheet.mergeCells("E3:F3");
        const customCell1 = worksheet.getCell("E3");
        customCell1.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        customCell1.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        customCell1.fill = {

            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '7F7F7F' },
            bgColor: { argb: '7F7F7F' }
        };
        customCell1.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        customCell1.value = "Designação da Obra";

        worksheet.mergeCells("G3:AE3");
        const designacaoinput = worksheet.getCell("G3");
        designacaoinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        designacaoinput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        designacaoinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        designacaoinput.value = desig;

        worksheet.mergeCells("E5:F5");
        const customCell2 = worksheet.getCell("E5");
        customCell2.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        customCell2.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        customCell2.fill = {

            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '7F7F7F' },
            bgColor: { argb: '7F7F7F' }
        };
        customCell2.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        customCell2.value = "Obra Nº";

        worksheet.mergeCells("G5:AE5");
        const obrainput = worksheet.getCell("G5");
        obrainput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        obrainput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        obrainput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        obrainput.value = obra;

        worksheet.mergeCells("G6:AE6");
        const Tituloinput = worksheet.getCell("G6");
        Tituloinput.font = {
            name: "Calibri",
            family: 4,
            size: 18,
            underline: false,
            bold: true
        };
        Tituloinput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        Tituloinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Tituloinput.value = "QUADRO DE RESUMO DE AMOSTRAS LABORATORIAIS ";


        // worksheet.mergeCells("I6:N6");
        const Sondainput = worksheet.getCell("B9");
        Sondainput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Sondainput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        Sondainput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Sondainput.value = "Sond. Nº";

        const Tipoinput = worksheet.getCell("E9");
        Tipoinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Tipoinput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        Tipoinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Tipoinput.value = "Tipo";

        const Amostrainput = worksheet.getCell("A9");
        Amostrainput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Amostrainput.alignment = {
            vertical: 'middle',
            horizontal: 'center'
        };
        Amostrainput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Amostrainput.value = "Amostra";
        const ProfIninput = worksheet.getCell("C9");
        ProfIninput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ProfIninput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ProfIninput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ProfIninput.value = "Prof.Inicial(m)";

        const ProfFninput = worksheet.getCell("D9");
        ProfFninput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ProfFninput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ProfFninput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ProfFninput.value = "Prof.Final(m)";

        const DescrSoloinput = worksheet.getCell("F9");
        DescrSoloinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        DescrSoloinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        DescrSoloinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        DescrSoloinput.value = "Descrição do Solo";

        const Classinput = worksheet.getCell("G9");
        Classinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Classinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Classinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        worksheet.mergeCells("G8:H8");

        const Class = worksheet.getCell("G8");
        Class.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Class.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Class.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Class.value = "Classificação";

        Classinput.value = "SUCS";
        const Classinput2 = worksheet.getCell("H9");
        Classinput2.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Classinput2.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Classinput2.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Classinput2.value = "HBR";

        const Wnatinput = worksheet.getCell("I9");
        Wnatinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Wnatinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Wnatinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Wnatinput.value = "Twnat (%)";

        const MassPartinput = worksheet.getCell("J9");
        MassPartinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        MassPartinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        MassPartinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        MassPartinput.value = "Massa esp. das particulas (g/cm3)";

        worksheet.mergeCells("K8:N8");

        const LimitCons = worksheet.getCell("K8");
        LimitCons.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        LimitCons.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        LimitCons.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        LimitCons.value = "Limites de Consistência";



        const LLinput = worksheet.getCell("K9");
        LLinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        LLinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        LLinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        LLinput.value = "LL";
        const IPinput = worksheet.getCell("L9");
        IPinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        IPinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        IPinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        IPinput.value = "LP";



        const LPinput = worksheet.getCell("M9");
        LPinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        LPinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        LPinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        LPinput.value = "IP";

        const ICinput = worksheet.getCell("N9");
        ICinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ICinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ICinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ICinput.value = "IC";

        worksheet.mergeCells("O8:S8");

        const DistribuiGranu = worksheet.getCell("O8");
        DistribuiGranu.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        DistribuiGranu.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        DistribuiGranu.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        DistribuiGranu.value = "Distribuição granulométrica";
        const Distgran475input = worksheet.getCell("O9");
        Distgran475input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Distgran475input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Distgran475input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Distgran475input.value = "%< 4.75mm";

        const Distgran200input = worksheet.getCell("P9");
        Distgran200input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Distgran200input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Distgran200input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Distgran200input.value = "%< 2.00mm";

        const Distgran042input = worksheet.getCell("Q9");
        Distgran042input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Distgran042input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Distgran042input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Distgran042input.value = "%< 0.42mm";

        const Distgran0074input = worksheet.getCell("R9");
        Distgran0074input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Distgran0074input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Distgran0074input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Distgran0074input.value = "%< 0.075mm";

        const Distgran002input = worksheet.getCell("S9");
        Distgran002input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Distgran002input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Distgran002input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Distgran002input.value = "%< 0.002mm";

        worksheet.mergeCells("T8:U8");

        const Coefici = worksheet.getCell("T8");
        Coefici.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        Coefici.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        Coefici.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        Coefici.value = "Coeficientes";

        const CoeficiCuinput = worksheet.getCell("T9");
        CoeficiCuinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        CoeficiCuinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        CoeficiCuinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        CoeficiCuinput.value = "Curvatura Cu";

        const CoeficiCcinput = worksheet.getCell("U9");
        CoeficiCcinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        CoeficiCcinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        CoeficiCcinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        CoeficiCcinput.value = "Uniformidade Cc";

        worksheet.mergeCells("V8:W8");

        const MassaEsp = worksheet.getCell("V8");
        MassaEsp.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        MassaEsp.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        MassaEsp.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        MassaEsp.value = "Massa esp. aparente";

        const MassEspMaxinput = worksheet.getCell("V9");
        MassEspMaxinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        MassEspMaxinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        MassEspMaxinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        MassEspMaxinput.value = "Massa esp. aparente Massa especifica max. (g/cm3)";

        const MassEspSecMaxinput = worksheet.getCell("W9");
        MassEspSecMaxinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        MassEspSecMaxinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        MassEspSecMaxinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        MassEspSecMaxinput.value = "Massa esp. aparente Massa especifica seca max. (g/cm3)";

        worksheet.mergeCells("X8:AE8");

        const ISC = worksheet.getCell("X8");
        ISC.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISC.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISC.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISC.value = "ISC - Índice Suporte Califórnia";
        const CompactTeorUmidadeinput = worksheet.getCell("X9");
        CompactTeorUmidadeinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        CompactTeorUmidadeinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        CompactTeorUmidadeinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        CompactTeorUmidadeinput.value = "Compactação Teor umidade %";

        const CompactEspSecainput = worksheet.getCell("Y9");
        CompactEspSecainput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        CompactEspSecainput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        CompactEspSecainput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        CompactEspSecainput.value = "Compactação Massa especif. seca g/cm3";

        const ISCTeorinput = worksheet.getCell("Z9");
        ISCTeorinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISCTeorinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISCTeorinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISCTeorinput.value = "Teor umidade %";

        const ISCEspSecainput = worksheet.getCell("AA9");
        ISCEspSecainput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISCEspSecainput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISCEspSecainput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISCEspSecainput.value = "Massa especif. seca g/cm3";

        const ISCExpinput = worksheet.getCell("AB9");
        ISCExpinput.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISCExpinput.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISCExpinput.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISCExpinput.value = "Exp %";

        const ISC5input = worksheet.getCell("AC9");
        ISC5input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISC5input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISC5input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISC5input.value = "ISC (5.0)";

        const ISCOtimo25input = worksheet.getCell("AD9");
        ISCOtimo25input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISCOtimo25input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISCOtimo25input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISCOtimo25input.value = "ISC (Ótimo 2.5)";

        const ISCOtimo5input = worksheet.getCell("AE9");
        ISCOtimo5input.font = {
            name: "Calibri",
            family: 4,
            size: 10,
            underline: false,
            bold: true
        };
        ISCOtimo5input.alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true
        };
        ISCOtimo5input.border = {
            top: { style: "thin", color: { argb: "00000000" } },
            left: { style: "thin", color: { argb: "00000000" } },
            bottom: { style: "thin", color: { argb: "00000000" } },
            right: { style: "thin", color: { argb: "00000000" } },
        };
        ISCOtimo5input.value = "ISC (Ótimo 5.0)";
        // Resistência Triaxial "CU" Φ (°)
        worksheet.columns = [

            {

                key: "Amostra",
                width: 8,

            },
            {

                key: "SondN",
                width: 11,

            },

            {
                key: "Prof_IN",
                width: 9,
            },
            {
                key: "Prof_FN",
                width: 9,
            },
            {

                key: "Tipo",
                width: 10,

            },

            {
                key: "DescricaoDoSolo",
                width: 50,
            },
            {
                key: "Class1",
                width: 10,
            },
            {
                key: "Class2",
                width: 10,
            },
            {
                key: "Wnat",
                width: 7,
            },
            {
                key: "MassaEspMedia",
                width: 10,
            },
            {
                key: "LL",
                width: 5,
            },
            {
                key: 'LP',
                width: 5,
            },
            {
                key: 'IP',
                width: 5,
            },
            {
                key: 'IC',
                width: 5,
            },
            {
                key: "granulometrica1",
                width: 8,
            },
            {
                key: "granulometrica2",
                width: 8,
            },
            {
                key: "granulometrica3",
                width: 8,
            },
            {
                key: "granulometrica4",
                width: 8,
            },
            {
                key: "granulometrica5",
                width: 8,
            },

            {
                key: "Coef_Cu",
                width: 10,
            },
            {
                key: "Coef_Cc",
                width: 10,
            },
            {
                key: "",
                width: 10,
            },
            {
                key: "",
                width: 10,
            },
            {
                key: "Comp_TeorUmidade",
                width: 15,
            },
            {
                key: "Comp_Massaespecifseca",
                width: 15,
            },
            //isc
            {
                key: "exp",
                width: 10,
            },
            {
                key: "isc",
                width: 10,
            },
            {
                key: "otimo",
                width: 10,
            },
            {
                key: "OtimoAux",
                width: 10,
            },

            {
                key: "",
                width: 10,
            },

        ];

        //====================================================================================================================================
        const promise = Promise.all(
            dado.map(async (product, index) => {
                const rowNumber = index + 1;
                worksheet.addRow({
                    SondN: product.SondN,
                    Tipo: product.Tipo,
                    Amostra: product.Amostra,
                    Prof_IN: product.Prof_IN,
                    Prof_FN: product.Prof_FN,
                    DescricaoDoSolo: product.DescricaoDoSolo,
                    Class1: product.Class1,
                    Class2: product.Class2,
                    Wnat: product.Wnat,
                    MassaEspMedia: product.Massa_Esp_Particulas,
                    LP: product.LP,
                    LL: product.LL,
                    IP: product.IP,
                    IC: product.IC,
                    granulometrica1: product.granulometrica1,
                    granulometrica2: product.granulometrica2,
                    granulometrica3: product.granulometrica3,
                    granulometrica4: product.granulometrica4,
                    granulometrica5: product.granulometrica5,
                    Coef_Cu: product.Coef_Cu,
                    Coef_Cc: product.Coef_Cc,
                    Apare_MassaEspecificamax: product.Apare_MassaEspecificamax,
                    Apare_Massaespecifseca: product.Apare_Massaespecifseca,
                    exp: product.exp,
                    isc: product.isc,
                    otimo: product.otimo,
                    Comp_TeorUmidade: product.Comp_TeorUmidade,
                    Comp_Massaespecifseca: product.Comp_Massaespecifseca,
                    OtimoAux: product.OtimoAux,
                    Adensamento_Cc: product.Adensamento_Cc,
                    Adensamento_Phi: product.Adensamento_Phi,
                    Adensamento_e: product.Adensamento_e,
                    Adensamento_Cv: product.Adensamento_Cv,
                    Adensamento_K: product.Adensamento_K,
                    PermiConstante: product.PermiConstante,
                    Resis_Triaxial_1: product.Resis_Triaxial_1,
                    Resis_Triaxial_2: product.Resis_Triaxial_2,
                    Resis_Triaxial_3_1: product.Resis_Triaxial_3_1,
                    Resis_Triaxial_3_2: product.Resis_Triaxial_3_2,
                    Resis_Triaxial_4_1: product.Resis_Triaxial_4_1,
                    Resis_Triaxial_4_2: product.Resis_Triaxial_4_2,

                });





                const extName = "jpg";
                // console.log(extName);
                const imageId2 = ExcelJSWorkbook.addImage({
                    base64: result.base64Url,
                    extension: extName,
                });

                worksheet.addImage(imageId2, {
                    tl: { col: 0, row: 0 },
                    ext: { width: 260, height: 135 },
                });

            })

        );


        const column = worksheet.getColumn(1);

        // set some properties
        column.name = 'SondaN';
        column.filterButton = true;
        column.style = {
            font: { name: 'Calibri' },
            alignment: { vertical: 'middle', horizontal: 'center' },

        }



        column.totalsRowLabel = 'Totals';
        column.totalsRowFunction = 'custom';
        column.totalsRowFormula = 'ROW(6)';
        column.totalsRowResult = 10;
        ExcelJSWorkbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "QR-Global_" + obra;
            anchor.click();
            window.URL.revokeObjectURL(url);
        });


    };

    return (<div>
        <Navbar />

        <div className='tamos'>
            {snumero === 'S' ? <div className="alert alert-danger mt-2" role="alert">Favor digitar número do processo.</div> : null}
            {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">Resultado não liberado.</div> : null}
            <p className='pamostra'>Número do Processo</p>
        </div>
        <div class="mb3">

            <input onChange={(e) => setProcesso(e.target.value)} onKeyPress={(event) => handleKeyPress(event)} type="text" class="css-input" />



            <button onClick={(e) => listarDados(e.target.value)} class="btn1">Buscar</button>
            {sucesso1 === 'S' ? <button onClick={(e) => gerarrelatorio(e.target.value)} class="btn1">Gerar Relatório</button> : null}
            <br /><br />
            {sucesso1 === 'S' ? <body>
                <div class="fixTableHead">
                    <table >


                        <thead >
                            <tr>
                                <th >Amostra</th>
                                <th >Sonda</th>
                                <th >Profundidade Inicial</th>
                                <th >Profundidade Final</th>
                                <th > Tipo</th>
                                <th >Descrição do Solo</th>
                                <th >Class SUCS HRB</th>
                                <th >Class HRB</th>
                                <th >wnat (%)</th>
                                <th >Massa esp. das particulas (g/cm3)</th>
                                <th >LL</th>
                                <th >LP </th>
                                <th >IP</th>
                                <th >IC</th>
                                <th >Distribuição granulométrica{distr1}</th>
                                <th >Distribuição granulométrica{distr2}</th>
                                <th >Distribuição granulométrica{distr3}</th>
                                <th >Distribuição granulométrica{distr4}</th>
                                <th >Distribuição granulométrica{distr5}</th>
                                <th >Coeficientes Curvatura Cu</th>
                                <th >Coeficientes Curvatura Cc</th>
                                <th >Massa esp. aparente Massa especifica max. (g/cm3)</th>
                                <th >Massa esp. aparente Massa especifica seca max. (g/cm3)</th>
                                <th >Compactação Teor umidade %</th>
                                <th >Compactação Massa especif. seca g/cm3</th>
                                <th >ISC Teor %</th>
                                <th >ISC</th>
                                <th >ISC (Ótimo)(2.5)</th>
                                <th >ISC (Ótimo)(5.0)</th>

                            </tr>
                        </thead>

                        <tbody>
                            {Array.isArray(data, data1) &&
                                data.map((row) => (
                                    <tr>
                                        <td>{row.Amostra}</td>
                                        <td>{row.SondN}</td>
                                        <td>{row.Prof_IN}</td>
                                        <td>{row.Prof_FN}</td>
                                        <td>{row.Tipo}</td>
                                        <td >{row.DescricaoDoSolo}</td>
                                        <td>{row.Class1}</td>
                                        <td>{row.Class2}</td>
                                        <td>{row.Wnat}  </td>
                                        <td>{row.Massa_Esp_Particulas}</td>
                                        <td>{row.LL}</td>
                                        <td>{row.LP}</td>
                                        <td>{row.IP}</td>
                                        <td>{row.IC}</td>
                                        <td>{row.granulometrica1}</td>
                                        <td>{row.granulometrica2}</td>
                                        <td>{row.granulometrica3}</td>
                                        <td>{row.granulometrica4}</td>
                                        <td>{row.granulometrica5}</td>
                                        <td>{row.Coef_Cu}</td>
                                        <td>{row.Coef_Cc}</td>
                                        <td>{row.Apare_MassaEspecificamax}</td>
                                        <td>{row.Apare_Massaespecifseca}</td>
                                        <td>{row.Comp_TeorUmidade}</td>
                                        <td>{row.Comp_Massaespecifseca}</td>
                                        <td>{row.exp}</td>
                                        <td>{row.isc}</td>
                                        <td>{row.otimo}</td>
                                        <td>{row.OtimoAux}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </body> : null}


        </div>
    </div>
    )

};

export default QuadroResulmo;
