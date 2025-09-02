
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
// import htmlToPdfmake from 'html-to-pdfmake'


function RelatorioDeteminacaoMassaEspecifica(lista, listaamostra,listaimagem) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const dados = lista.map((amostra) => {
        return [
            { text: amostra.Amostra, fontSize: 12, color: '#FFFFFF', margin: [0, 0, 0, 0], bold: 'true', alignment: 'center' },
        ]
    });
    const norma = lista.map((norma) => {
        return [
            { text: norma.NormaEnsaio, fontSize: 7, margin: [0, 0, 0, 0], alignment: 'center' },
        ]
    });
    const processo = lista.map((processo) => {
        return [
            { text: processo.Processo, fontSize: 8, margin: [-50, 0, 0, 0], alignment: 'center' },
            { text: '/', fontSize: 8, margin: [0, -10, 0, 0], alignment: 'center' },
            { text: processo.Lote, fontSize: 8, margin: [20, -9, 0, 0], alignment: 'center' }
        ]
    });
    const profundidade = lista.map((profundidade) => {
        return [
            { text: profundidade.Profundidade_Inicial, fontSize: 8, margin: [-30, 0, 0, 0], alignment: 'center' },
            { text: '--', fontSize: 8, margin: [0, -10, 0, 0], alignment: 'center' },
            { text: profundidade.Profundidade_Final, fontSize: 8, margin: [30, -9, 0, 0], alignment: 'center' }
        ]
    });
    const dataregistro = lista.map((dataregistro) => {
        return [
            { text: dataregistro.Data_Registro, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const datainicio = lista.map((datainicio) => {
        return [
            { text: datainicio.Data_Inicio, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const sondagem = lista.map((sondagem) => {
        return [
            { text: sondagem.Sondagem, fontSize: 10, margin: [0, 0, 0, 0], alignment: 'center', bold: 'true' }
        ]
    });
    const datum = lista.map((datum) => {
        return [
            { text: datum.Datum, fontSize: 7, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const coordx = lista.map((coordx) => {
        return [
            { text: coordx.Coordenada_X, fontSize: 7, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const coordy = lista.map((coordy) => {
        return [
            { text: coordy.Coordenada_Y, fontSize: 7, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const coordz = lista.map((coordz) => {
        return [
            { text: coordz.Coordenada_Z, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const dataconclusao = lista.map((dataconclusao) => {
        return [
            { text: dataconclusao.Data_Conclusao, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const aplicacao = lista.map((aplicacao) => {
        return [
            { text: aplicacao.Aplicacao, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const obra = lista.map((obra) => {
        return [
            { text: obra.Obra, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const coleta = lista.map((coleta) => {
        return [
            { text: coleta.Localdacoleta, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });
    const especificacao = lista.map((especificacao) => {
        return [
            { text: especificacao.Especificacao_tecnica, fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }
        ]
    });


    //==============================================valores do corpo========================================================
    const massaumidacorpo1 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaHumidaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaumidacorpo2 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaHumidaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaumidacorpo3 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaHumidaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corpoparafinado1 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoParafinadoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corpoparafinado2 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoParafinadoP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corpoparafinado3 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoParafinadoP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corposubmerso1 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoSubmersoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corposubmerso2 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoSubmersoP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const corposubmerso3 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaCorpoSubmersoP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaparafina1 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaParafinaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaparafina2 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaParafinaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaparafina3 = listaamostra.map((massa) => {
        return [
            { text: massa.MassaParafinaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    
    const capsula1 = listaamostra.map((capsula1) => {
        return [
            { text: capsula1.CapsulaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const capsula2 = listaamostra.map((capsula2) => {
        return [
            { text: capsula2.CapsulaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const capsula3 = listaamostra.map((capsula3) => {
        return [
            { text: capsula3.CapsulaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const amostraumidcapsula1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraUmidaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const amostraumidcapsula2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraUmidaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const amostraumidcapsula3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraUmidaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const amostrasecacapsula1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraSecaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const amostrasecacapsula2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraSecaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const amostrasecacapsula3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.AmostraSecaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massacapsula1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaCapsulaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massacapsula2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaCapsulaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massacapsula3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaCapsulaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaagua1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaAguaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaagua2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaAguaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaagua3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaAguaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massasoloseco1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaSoloSecoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massasoloseco2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaSoloSecoP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massasoloseco3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaSoloSecoP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const teorumidade1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.TeorUmidadeP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const teorumidade2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.TeorUmidadeP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const teorumidade3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.TeorUmidadeP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const mediateroumidade = listaamostra.map((amostra) => {
        return [
            { text: amostra.MediaTeorUmidade, fontSize: 10, margin: [0, 7, 0, 0], alignment: 'center',bold: true }
        ]
    });
    const volumecorpoprova1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.VolumeCorpoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const volumecorpoprova2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.VolumeCorpoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const volumecorpoprova3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.VolumeCorpoP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaaparenteumida1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspUmidaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaaparenteumida2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspUmidaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaaparenteumida3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspUmidaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const massaaparenteseca1 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspSecaP1, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaaparenteseca2 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspSecaP2, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' },
        ]
    });
    const massaaparenteseca3 = listaamostra.map((amostra) => {
        return [
            { text: amostra.MassaEspSecaP3, fontSize: 9, margin: [0, 8, 0, 0], alignment: 'center' }
        ]
    });
    const mediaaparenteseca = listaamostra.map((amostra) => {
        return [
            { text: amostra.MediaMassaEspSeca, fontSize: 10, margin: [0, 7, 0, 0], alignment: 'center', bold: true }
        ]
    });

    const reportTitle = [
        {
            table: {
                headerRows: 1,
                widths: [198.42],// largura
                heights: [83.5], //altura
                body: [
                    [
                        //[{ text: '2.8346', style: 'tableHeader', fontSize: 10 }],
                        [{
                            image: 'data:image/png;base64,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',
                            width: 188,
                            height: 36,
                            margin: [20, 0, 0, 0]
                        }]
                    ],
                ],
            },
            layout: 'noBorders', margin: [10, 6, 0, 0], //[left, top, right, bottom]
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    160.31,
                ],// largura
                heights: [
                    8,
                ], //altura
                body: [
                    [
                        { text: 'AMOSTRA Nº:', style: 'tableHeader', fontSize: 12, color: '#FFFFFF', margin: [5, 1, 0, 0], bold: 'true' },
                    ],
                ],
            },
            layout: 'noBorders', margin: [421, -72.5, 0, 0], fillColor: '#008000'// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    66.15,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...dados,
                    ],
                ],
            },
            layout: 'noBorders', margin: [490.5, -18, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    54.7,
                ], //altura
                body: [
                    [
                        { text: 'CLIENTE:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [32.5, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [80.42],// largura
                heights: [20.5], //altura
                body: [
                    [
                        //[{ text: '2.8346', style: 'tableHeader', fontSize: 10 }],
                        [{
                            image: 'data:image/png;base64,'+ listaimagem ,
                            width: 80,
                            height: 26,
                            margin: [0, 0, 0, 0]
                        }]
                    ],
                ],
            },
            layout: 'noBorders', margin: [52.5, -40.8, 0, 0], //[left, top, right, bottom]
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    395,
                ],// largura
                heights: [
                    23.7,
                ], //altura
                body: [
                    [
                        { text: 'RELATÓRIO ENSAIO:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [176.5, -49.8, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    395
                ],// largura
                heights: [
                    23.7,
                ], //altura
                body: [
                    [
                        { text: 'DETERMINAÇÃO DA MASSA ESPECÍFICA APARENTE', style: 'tableHeader', fontSize: 10, margin: [60, 10, 0, 0] },
                    ],
                ],
            },
            layout: 'noBorders', margin: [176.5, -28, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    119.8
                ],// largura
                heights: [
                    25.8
                ], //altura
                body: [
                    [
                        { text: 'NORMA:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [176.5, -0.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    150.15,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...norma,
                    ],
                ],
            },
            layout: 'noBorders', margin: [168.5, -20, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    122
                ],// largura
                heights: [
                    25.8
                ], //altura
                body: [
                    [
                        { text: 'PROCESSO: / LOTE:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [305.5, -24.8, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    80,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...processo,
                    ],
                ],
            },
            layout: 'noBorders', margin: [330, -17, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    20
                ], //altura
                body: [
                    [
                        { text: 'PROFUNDIDADE(m):', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -28, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    80,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...profundidade,
                    ],
                ],
            },
            layout: 'noBorders', margin: [466.5, -16, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    63
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: 'DATA\n DO REGISTRO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [32.5, 8, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...dataregistro,
                    ],
                ],
            },
            layout: 'noBorders', margin: [37.5, -20, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    63
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: 'DATA \n INICIO ENSAIO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [104.5, -32, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...datainicio,
                    ],
                ],
            },
            layout: 'noBorders', margin: [110.5, -20, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    250.9
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: 'SONDAGEM:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [176.5, -32, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...sondagem,
                    ],
                ],
            },
            layout: 'noBorders', margin: [280.5, -28, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '', fontSize: 6, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -32.3, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '**DATUM:', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            layout: 'noBorders', margin: [438.5, -12.5, 0, 0]// headerLineO
        },
        {//**DATUM:
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    3.2,
                ], //altura
                body: [
                    [
                        ...datum,
                    ],
                ],
            },
            layout: 'noBorders', margin: [505, -12, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -2.3, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '**COORDENADA X:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            layout: 'noBorders', margin: [438.5, -12, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...coordx,
                    ],
                ],
            },
            layout: 'noBorders', margin: [505, -13, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -2.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '**COORDENADA Y:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            layout: 'noBorders', margin: [438.5, -12, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...coordy,
                    ],
                ],
            },
            layout: 'noBorders', margin: [505, -13, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    6.4
                ], //altura
                body: [
                    [
                        { text: '', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -2.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    5.8
                ], //altura
                body: [
                    [
                        { text: '**COORDENADA Z:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            layout: 'noBorders', margin: [438.5, -12, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...coordz,
                    ],
                ],
            },
            layout: 'noBorders', margin: [505, -14, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    63
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: 'DATA CONCLUSÃO \n ENSAIO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [32.5, -1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...dataconclusao
                    ],
                ],
            },
            layout: 'noBorders', margin: [37.2, -20.5, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    63
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: '**APLICAÇÃO', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [104.5, -31.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    60,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...aplicacao
                    ],
                ],
            },
           layout: 'noBorders', margin: [110, -20.5, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    250.9
                ],// largura
                heights: [
                    13.8
                ], //altura
                body: [
                    [
                        { text: '**OBRA', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [176.5, -31.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    200,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...obra
                    ],
                ],
            },
           layout: 'noBorders',margin: [220, -16.5, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    250.9
                ],// largura
                heights: [
                    13.8
                ], //altura
                body: [
                    [
                        { text: 'LOCAL DA COLETA / ENDEREÇO', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [176.5, 2.2, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    200,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...coleta
                    ],
                ],
            },
           layout: 'noBorders',margin: [220, -16.5, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    135
                ],// largura
                heights: [
                    32.6
                ], //altura
                body: [
                    [
                        { text: '** ESPECIFICAÇÃO TÉCNICA:', style: 'tableHeader', fontSize: 8, margin: [0, 0, 0, 0] },
                    ],
                ],
            },
            margin: [436.5, -35.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    200,
                ],// largura
                heights: [
                    9,
                ], //altura
                body: [
                    [
                        ...especificacao
                    ],
                ],
            },
           layout: 'noBorders',margin: [420, -20, 0, 0], // headerLineO
        },
    ];


    const details = [
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'CORPO DE PROVA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'Nº', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: 'I', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                        { text: 'II', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                        { text: 'III', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 0, 0, 0]// headerLineO
        },
        
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA ÚMIDA DO CORPO DE PROVA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 9, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, -1, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massaumidacorpo1,
                        ...massaumidacorpo2,
                        ...massaumidacorpo3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DO CORPO DE PROVA PARAFINADO', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...corpoparafinado1,
                        ...corpoparafinado2,
                        ...corpoparafinado3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DO CORPO DE PROVA SUBMERSO', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...corposubmerso1 ,
                        ...corposubmerso2,
                        ...corposubmerso3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DE PARAFINA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massaparafina1 ,
                        ...massaparafina2,
                        ...massaparafina3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'CÁPSULA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'Nº', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...capsula1,
                        ...capsula2,
                        ...capsula3
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'AMOSTRA UMIDA + CÁPSULA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 8, margin: [18, 9, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...amostraumidcapsula1,
                        ...amostraumidcapsula2,
                        ...amostraumidcapsula3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'AMOSTRA SECA + CÁPSULA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...amostrasecacapsula1,
                        ...amostrasecacapsula2,
                        ...amostrasecacapsula3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DA CÁPSULA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massacapsula1,
                        ...massacapsula2,
                        ...massacapsula3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DE ÁGUA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massaagua1,
                        ...massaagua2,
                        ...massaagua3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA DE SOLO SECO', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massasoloseco1,
                        ...massasoloseco2,
                        ...massasoloseco3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'TEOR EM ÚMIDADE', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: '%', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...teorumidade1,
                        ...teorumidade2,
                        ...teorumidade3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    272.7
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MÉDIA DO TEOR EM ÚMIDADE', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: '%', style: 'tableHeader', fontSize: 9, margin: [18, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...mediateroumidade
                    ],
                ],
            },
           layout: 'noBorders',margin: [381.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'VOLUME DO CORPO DE PROVA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'cm³', style: 'tableHeader', fontSize: 9, margin: [15, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...volumecorpoprova1,
                        ...volumecorpoprova2,
                        ...volumecorpoprova3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA ESPECÍFICA APARENTE UMIDA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g/cm³', style: 'tableHeader', fontSize: 9, margin: [10, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massaaparenteumida1,
                        ...massaaparenteumida2,
                        ...massaaparenteumida3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    84.9,
                    84.9,
                    84.9
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MASSA ESPECÍFICA APARENTE SECA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g/cm³', style: 'tableHeader', fontSize: 9, margin: [10, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...massaaparenteseca1,
                        ...massaaparenteseca2,
                        ...massaaparenteseca3,
                    ],
                ],
            },
           layout: 'noBorders',margin: [288.4, -30, 0, 0], // headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    207,
                    41.4,
                    272.7
                ],// largura
                heights: [
                    23.5
                ], //altura
                body: [
                    [
                        { text: 'MÉDIA DA MASSA ESPECÍFICA APARENTE SECA', style: 'tableHeader', fontSize: 9, margin: [0, 8, 0, 0] },
                        { text: 'g/cm³', style: 'tableHeader', fontSize: 9, margin: [10, 8, 0, 0] },
                        { text: '', style: 'tableHeader', fontSize: 8, margin: [40, 8, 0, 0] },
                       
                    ],
                ],
            },
            margin: [17.4, 1.5, 0, 0]// headerLineO
        },
        {
            table: {
                headerRows: 1,
                widths: [
                    84.9,
                    84.9,
                    84.9,
                ],// largura
                heights: [
                    23.5,
                ], //altura
                body: [
                    [
                        ...mediaaparenteseca,
 
                    ],
                ],
            },
           layout: 'noBorders',margin: [381.4, -30, 0, 0], // headerLineO
        },

    ];




    function Rodape(currentPage, pageCount) {
        return [
            {
                table: {
                    headerRows: 1,
                    widths: [
                        539,


                    ],// largura
                    heights: [
                        27.3


                    ], //altura

                    body: [
                        [

                            { text: 'OBSERVAÇÃO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },



                        ],

                    ],




                },
                layout: ' headerLineOnly', margin: [32.5, -100, 0, 0], // headerLineO


            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        173.7,
                        173.7,
                        173.6,

                    ],// largura
                    heights: [
                        27.3


                    ], //altura

                    body: [
                        [

                            { text: 'EXECUÇÃO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                            { text: 'VERIFICAÇÃO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },
                            { text: 'APROVAÇÃO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },


                        ],

                    ],




                },
                layout: ' headerLineOnly', margin: [32.5, -1, 0, 0], // headerLineO


            },

            {
                table: {
                    headerRows: 1,
                    widths: [
                        539,


                    ],// largura
                    heights: [
                        4


                    ], //altura

                    body: [
                        [

                            { text: 'CÓDIGO LABORATÓRIO:', style: 'tableHeader', fontSize: 7, margin: [0, 0, 0, 0] },



                        ],

                    ],




                },
                layout: ' headerLineOnly', margin: [32.5, -1, 0, 0], // headerLineO


            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        520,


                    ],// largura
                    heights: [
                        8


                    ], //altura

                    body: [
                        [

                            { text: 'Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole', style: 'tableHeader', fontSize: 8, margin: [60, 5, 0, 0] },



                        ],

                    ],




                },
                layout: 'noBorders', margin: [62.5, -2, 0, 0] // headerLineO


            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        520,


                    ],// largura
                    heights: [
                        8


                    ], //altura

                    body: [
                        [

                            { text: 'Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011', style: 'tableHeader', fontSize: 9, margin: [30, 2, 0, 0] },



                        ],

                    ],




                },
                layout: 'noBorders', margin: [60.5, -2, 0, 0] // headerLineO


            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        549,


                    ],// largura
                    heights: [
                        13.9


                    ], //altura

                    body: [
                        [

                            { text: 'www.geocontrole.com - e-mail: mail.br@geocontrole', style: 'tableHeader', fontSize: 10, margin: [160, 1, 0, 0], color: '#FFFFFF' },



                        ],

                    ],




                },
                layout: 'noBorders', margin: [32.5, 0, 0, 0], fillColor: '#008000' // headerLineO


            },






        ]
    }

    const docDefinitios = {

        // you'll most often use dataURI images on the browser side
        // if no width/height/fit is provided, the original size will be used


        pageSize: 'A4',
        pageMargins: [15, 198, 15, 40],
        pageOrientation: 'Portrait',
        header: [reportTitle],
        content: [details],

        footer: Rodape,
        // background: function(currentPage, pageSize) {
        //     return `page ${currentPage} with size ${pageSize.width} x ${pageSize.height}`
        //   },

    }

    pdfMake.createPdf(docDefinitios).open();
    //pdfMake.createPdf(docDefinitios).download();
}

export default RelatorioDeteminacaoMassaEspecifica;