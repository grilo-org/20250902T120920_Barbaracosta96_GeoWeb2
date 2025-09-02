import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../ListaProgramacaoPDF/listaprogramacaoPDF.css';

function ListaProgramacaoPDF(props) {
    const [sucesso, setSucesso] = useState('');
    const [ok, setOK] = useState('');
    const [massavolumica, setMassaVolumica] = useState('')
    const [rmassavolumica, setRMassaVolumica] = useState('')
    const [teoragua, setTeorAgua] = useState('')
    const [rteoragua, setRTeorAgua] = useState('')
    const [cortedirecto, setCorteDirecto] = useState('')
    const [rcortedirecto, setRCorteDirecto] = useState('')
    const [materiaorganica, setMateriaOrganica] = useState('')
    const [rmateriaorganica, setRMateriaOrganica] = useState('')
    const [ph, setPH] = useState('')
    const [rph, setRPH] = useState('')
    const [densidadeparticulas, setDensidadeParticulas] = useState('')
    const [rdensidadeparticulas, setRDensidadeParticulas] = useState('')
    const [limitesliquidezmcp, setLimitesLiquidezMCP] = useState('')
    const [rlimitesliquidezmcp, setRLimitesLiquidezMCP] = useState('')
    const [limitesplasticidade, setLimitesPlasticidade] = useState('')
    const [rlimitesplasticidade, setRLimitesPlasticidade] = useState('')
    const [limitesretraccao, setLimitesRetraccao] = useState('')
    const [rlimitesretraccao, setRLimitesRetraccao] = useState('')
    const [teorsulfatos, setTeorSulfatos] = useState('')
    const [rteorsulfatos, setRTeorSulfatos] = useState('')
    const [teorcloretos, setTeorCloretos] = useState('')
    const [rteorcloretos, setRTeorCloretos] = useState('')
    const [teorcarbonatos, setTeorCarbonatos] = useState('')
    const [rteorcarbonatos, setRTeorCarbonatos] = useState('')
    const [acidezbgully, setAcidezBGully] = useState('')
    const [racidezbgully, setRAcidezBGully] = useState('')
    const [peneiracao, setPeneiracao] = useState('')
    const [rpeneiracao, setRPeneiracao] = useState('')
    const [azulmetileno, setAzulMetileno] = useState('')
    const [razulmetileno, setRAzulMetileno] = useState('')
    const [frascoareia, setFrascoAreia] = useState('')
    const [rfrascoareia, setRFrascoAreia] = useState('')
    const [peneiracaosedimentacao, setPeneiracaoSedimentacao] = useState('')
    const [rpeneiracaosedimentacao, setRPeneiracaoSedimentacao] = useState('')
    const [metodohilf, setMetodoHilf] = useState('')
    const [rmetodohilf, setRMetodoHilf] = useState('')
    const [coeficientefriabilidade, setCoeficienteFriabilidade] = useState('')
    const [rcoeficientefriabilidade, setRCoeficienteFriabilidade] = useState('')
    const [resistividadeeletricaproveteSolo, setResistividadeEletricaProveteSolo] = useState('')
    const [rresistividadeeletricaproveteSolo, setRResistividadeEletricaProveteSolo] = useState('')

    const [compactacaonormal, setCompactacaoNormal] = useState('')
    const [rcompactacaonormal, setRCompactacaoNormal] = useState('')
    const [compactacaointermediaria, setCompactacaoIntermediaria] = useState('')
    const [rcompactacaointermediaria, setRCompactacaoIntermediaria] = useState('')
    const [compactacaomodificada, setCompactacaoModificada] = useState('')
    const [rcompactacaomodificada, setRCompactacaoModificada] = useState('')
    const [baridadesmaximaminima, setBaridadesMaximaMinima] = useState('')
    const [rbaridadesmaximaminima, setRBaridadesMaximaMinima] = useState('')
    const [compactacaovibrocompactacao, setCompactacaoVibrocompactacao] = useState('')
    const [rcompactacaovibrocompactacao, setRCompactacaoVibrocompactacao] = useState('')
    const [cbrsemmoldagem, setCBRSemMoldagem] = useState('')
    const [rcbrsemmoldagem, setRCBRSemMoldagem] = useState('')
    const [cbrcommoldagem, setCBRComMoldagem] = useState('')
    const [rcbrcommoldagem, setRCBRComMoldagem] = useState('')
    const [ensaiocbr, setEnsaioCBR] = useState('')
    const [rensaiocbr, setREnsaioCBR] = useState('')
    const [cbrimediato, setCBRImediato] = useState('')
    const [rcbrimediato, setRCBRImediato] = useState('')

    const [potenciacolapso, setPotenciaColapso] = useState('')
    const [rpotenciacolapso, setRPotenciaColapso] = useState('')
    const [indiceexpansibilidade, setIndiceExpansibilidade] = useState('')
    const [rindiceexpansibilidade, setRIndiceExpansibilidade] = useState('')
    const [expansibilidadepotenciaexpansao, setExpansibilidadePotenciaExpansao] = useState('')
    const [rexpansibilidadepotenciaexpansao, setRExpansibilidadePotenciaExpansao] = useState('')
    const [ensaioexpansibilidade, setEnsaioExpansibilidade] = useState('')
    const [rensaioexpansibilidade, setREnsaioExpansibilidade] = useState('')
    const [ensaioexpansibilidadelambe, setEnsaioExpansibilidadeLambe] = useState('')
    const [rensaioexpansibilidadelambe, setREnsaioExpansibilidadeLambe] = useState('')
    const [expansibilidadeedometro, setExpansibilidadeEdometro] = useState('')
    const [rexpansibilidadeedometro, setRExpansibilidadeEdometro] = useState('')
    const [potenciaexpansao, setPotenciaExpansao] = useState('')
    const [rpotenciaexpansao, setRPotenciaExpansao] = useState('')
    const [indicecolapso, setIndiceColapso] = useState('')
    const [rindicecolapso, setRIndiceColapso] = useState('')
    const [ensaiodispersabilidade, setEnsaioDispersabilidade] = useState('')
    const [rensaiodispersabilidade, setREnsaioDispersabilidade] = useState('')
    const [resilientetriaxiala, setResilienteTriaxialA] = useState('')
    const [rresilientetriaxiala, setRResilienteTriaxialA] = useState('')
    const [resilientetriaxialb, setResilienteTriaxialB] = useState('')
    const [rresilientetriaxialb, setRResilienteTriaxialB] = useState('')
    const [permanentestriaxiala, setPermanentesTriaxialA] = useState('')
    const [rpermanentestriaxiala, setRPermanentesTriaxialA] = useState('')
    const [permanentestriaxialb, setPermanentesTriaxialB] = useState('')
    const [rpermanentestriaxialb, setRPermanentesTriaxialB] = useState('')
    const [compressaosimples, setCompressaoSimples] = useState('')
    const [rcompressaosimples, setRCompressaoSimples] = useState('')
    const [ensaiomolhagemsecagem, setEnsaioMolhagemSecagem] = useState('')
    const [rensaiomolhagemsecagem, setREnsaioMolhagemSecagem] = useState('')








    function dados() {
        props.arrayClientes.map((client) => {
            return setSucesso(client.Amostra),
                setMassaVolumica(client.MassaVolumica),
                setTeorAgua(client.TeorAgua),
                setCorteDirecto(client.CorteDirecto),
                setMateriaOrganica(client.MateriaOrganica),
                setPH(client.PH),
                setDensidadeParticulas(client.DensidadeParticulas),
                setLimitesLiquidezMCP(client.LimitesLiquidezMCP),
                setLimitesPlasticidade(client.LimitesPlasticidade),
                setLimitesRetraccao(client.LimitesRetraccao),
                setTeorSulfatos(client.TeorSulfatos),
                setTeorCloretos(client.TeorCloretos),
                setTeorCarbonatos(client.TeorCarbonatos),
                setAcidezBGully(client.AcidezBGully),
                setPeneiracao(client.Peneiracao),
                setAzulMetileno(client.AzulMetileno),
                setFrascoAreia(client.FrascoAreia),
                setPeneiracaoSedimentacao(client.PeneiracaoSedimentacao),
                setMetodoHilf(client.MetodoHilf),
                setCoeficienteFriabilidade(client.CoeficienteFriabilidade),
                setResistividadeEletricaProveteSolo(client.ResistividadeEletricaProveteSolo),
                setCompactacaoNormal(client.CompactacaoNormal),
                setCompactacaoIntermediaria(client.CompactacaoIntermediaria),
                setCompactacaoModificada(client.CompactacaoModificada),
                setBaridadesMaximaMinima(client.BaridadesMaximaMinima),
                setCompactacaoVibrocompactacao(client.CompactacaoVibrocompactacao),
                setCBRSemMoldagem(client.CBRSemMoldagem),
                setCBRComMoldagem(client.CBRComMoldagem),
                setEnsaioCBR(client.EnsaioCBR),
                setCBRImediato(client.CBRImediato),
                setPotenciaColapso(client.PotenciaColapso),
                setIndiceExpansibilidade(client.IndiceExpansibilidade),
                setExpansibilidadePotenciaExpansao(client.ExpansibilidadePotenciaExpansao),
                setEnsaioExpansibilidade(client.EnsaioExpansibilidade),
                setEnsaioExpansibilidadeLambe(client.EnsaioExpansibilidadeLambe),
                setExpansibilidadeEdometro(client.ExpansibilidadeEdometro),
                setPotenciaExpansao(client.PotenciaExpansao),
                setIndiceColapso(client.IndiceColapso),
                setEnsaioDispersabilidade(client.EnsaioDispersabilidade),
                setResilienteTriaxialA(client.ResilienteTriaxialA),
                setResilienteTriaxialB(client.ResilienteTriaxialB),
                setPermanentesTriaxialA(client.PermanentesTriaxialA),
                setPermanentesTriaxialB(client.PermanentesTriaxialB),
                setCompressaoSimples(client.CompressaoSimples),
                setEnsaioMolhagemSecagem(client.EnsaioMolhagemSecagem)



        })
    };

    function teste1() {
        if (sucesso !== null && sucesso !== '') {
            setOK('S')
        }
    }
    function TesteIf() {

        if (massavolumica !== '') {
            setRMassaVolumica('S')
        }
        if (teoragua !== '') {
            setRTeorAgua('S')
        }
        if (cortedirecto !== '') {
            setRCorteDirecto('S')
        }
        if (materiaorganica !== '') {
            setRMateriaOrganica('S')
        }
        if (ph !== '') {
            setRPH('S')
        }
        if (densidadeparticulas !== '') {
            setRDensidadeParticulas('S')
        }
        if (limitesliquidezmcp !== '') {
            setRLimitesLiquidezMCP('S')
        }
        if (limitesplasticidade !== '') {
            setRLimitesPlasticidade('S')
        }
        if (limitesretraccao !== '') {
            setRLimitesRetraccao('S')
        }
        if (teorsulfatos !== '') {
            setRTeorSulfatos('S')
        }
        if (teorcloretos !== '') {
            setRTeorCloretos('S')
        }
        if (teorcarbonatos !== '') {
            setRTeorCarbonatos('S')
        }
        if (acidezbgully !== '') {
            setRAcidezBGully('S')
        }
        if (peneiracao !== '') {
            setRPeneiracao('S')
        }
        if (azulmetileno !== '') {
            setRAzulMetileno('S')
        }
        if (frascoareia !== '') {
            setRFrascoAreia('S')
        }
        if (peneiracaosedimentacao !== '') {
            setRPeneiracaoSedimentacao('S')
        }
        if (metodohilf !== '') {
            setRMetodoHilf('S')
        }
        if (coeficientefriabilidade !== '') {
            setRCoeficienteFriabilidade('S')
        }
        if (resistividadeeletricaproveteSolo !== '') {
            setRResistividadeEletricaProveteSolo('S')
        }
        if (compactacaonormal !== '') {
            setRCompactacaoNormal('S')
        }
        if (compactacaointermediaria !== '') {
            setRCompactacaoIntermediaria('S')
        }
        if (compactacaomodificada !== '') {
            setRCompactacaoModificada('S')
        }
        if (baridadesmaximaminima !== '') {
            setRBaridadesMaximaMinima('S')
        }
        if (compactacaovibrocompactacao !== '') {
            setRCompactacaoVibrocompactacao('S')
        }
        if (cbrsemmoldagem !== '') {
            setRCBRSemMoldagem('S')
        }
        if (cbrcommoldagem !== '') {
            setRCBRComMoldagem('S')
        }
        if (ensaiocbr !== '') {
            setREnsaioCBR('S')
        }
        if (potenciacolapso !== '') {
            setRPotenciaColapso('S')
        }
        if (cbrsemmoldagem !== '') {
            setRCBRSemMoldagem('S')
        }
        if (cbrcommoldagem !== '') {
            setRCBRComMoldagem('S')
        }
        if (ensaiocbr !== '') {
            setREnsaioCBR('S')
        }
        if (cbrimediato !== '') {
            setRCBRImediato('S')
        }
        if (potenciacolapso !== '') {
            setRPotenciaColapso('S')
        }
        if (indiceexpansibilidade !== '') {
            setRIndiceExpansibilidade('S')
        }
        if (expansibilidadepotenciaexpansao !== '') {
            setRExpansibilidadePotenciaExpansao('S')
        }
        if (ensaioexpansibilidade !== '') {
            setREnsaioExpansibilidade('S')
        }
        if (ensaioexpansibilidadelambe !== '') {
            setREnsaioExpansibilidadeLambe('S')
        }
        if (expansibilidadeedometro !== '') {
            setRExpansibilidadeEdometro('S')
        }
        if (potenciaexpansao !== '') {
            setRPotenciaExpansao('S')
        }
        if (indicecolapso !== '') {
            setRIndiceColapso('S')
        }
        if (ensaiodispersabilidade !== '') {
            setREnsaioDispersabilidade('S')
        }
        if (resilientetriaxiala !== '') {
            setRResilienteTriaxialA('S')
        }
        if (resilientetriaxialb !== '') {
            setRResilienteTriaxialB('S')
        }
        if (permanentestriaxiala !== '') {
            setRResilienteTriaxialA('S')
        }
        if (permanentestriaxialb !== '') {
            setRPermanentesTriaxialB('S')
        }
        if (compressaosimples !== '') {
            setRCompressaoSimples('S')
        }
        if (ensaiomolhagemsecagem !== '') {
            setREnsaioMolhagemSecagem('S')
        }


    }
    useEffect(() => {
        console.log(cortedirecto)
        dados();
        teste1()
        TesteIf()
    })
    return <table class="blueTable">
    <thead>

        <tr >
            <th class= 'th1'>Ordem</th>
            {ok === 'S' ? <th class= 'th2'>Amostra</th> : null}
            <th class= 'th3'>Nº</th>
            <th class= 'th3'>Prof.Inicial(m)</th>
            <th class= 'th3'>Prof.Final(m)</th>
            <th class= 'th3'>COORD.Z</th>
            <th class= 'th3'>COORD.N</th>
            <th class= 'th3'>COORD.E</th>
            <th class= 'th3'>Descricao</th>
            <th class= 'th3'>Arq.</th>
            {rmassavolumica === 'S' ? <th class= 'th3'>MV</th> : null}
            {rteoragua === 'S' ? <th class= 'th3'>TW</th> : null}
            {rcortedirecto === 'S' ? <th className='th3'>CD</th> : null}
            {rmateriaorganica === 'S' ? <th class= 'th3'>MO</th> : null}
            {rph === 'S' ? <th class= 'th3'>DETERMINAÇÃO DO PH</th> : null}
            {rdensidadeparticulas === 'S' ? <th class= 'th3'>DENSIDADE DAS PARTÍCULAS</th> : null}
            {rlimitesliquidezmcp === 'S' ? <th class= 'th3'>ENSAIO MASSA APARENTE IN_SITU MEMBRANA PLASTICA</th> : null}
            {rlimitesplasticidade === 'S' ? <th class= 'th3'>LIMITE DE LIQUIDEZ E PLASTICIDADE</th> : null}
            {rlimitesretraccao === 'S' ? <th scope="col">LIMITE DE RETRACÇÃO</th> : null}
            {rteorsulfatos === 'S' ? <th scope="col">TEOR EM SULFATOS</th> : null}
            {rteorcloretos === 'S' ? <th scope="col">TEOR EM CLORETOS</th> : null}
            {rteorcarbonatos === 'S' ? <th scope="col">TEOR EM CARBONATOS</th> : null}
            {racidezbgully === 'S' ? <th scope="col">ACIDEZ BAUMANN-GULLY</th> : null}
            {rpeneiracao === 'S' ? <th scope="col">ANÁLISE GRANULOMÉTRICA POR PENEIRAÇÃO</th> : null}
            {razulmetileno === 'S' ? <th scope="col">ENSAIO DO AZUL DE METILENO (TESTE DA MANCHA)</th> : null}
            {rfrascoareia === 'S' ? <th scope="col">FRASCO DE AREIA</th> : null}
            {rpeneiracaosedimentacao === 'S' ? <th scope="col">ANÁLISE GRANULOMÉTRICA POR SEDIMENTAÇÃO</th> : null}
            {rmetodohilf === 'S' ? <th scope="col">CONTROLE DE COMPACTAÇÃO MÉTODO DE HILF</th> : null}
            {rcoeficientefriabilidade === 'S' ? <th scope="col">DETERMINAÇÃO DO COEFICIENTE DE FRIABILIDADE DAS AREIAS</th> : null}
            {rresistividadeeletricaproveteSolo === 'S' ? <th scope="col">DETERMINAÇÃO DA RESISITIVIDADE ELÉTRICA DE UM PROVETE DE SOLO</th> : null}

            {rcompactacaonormal === 'S' ? <th class= 'th3'>PROT</th> : null}
            {rcompactacaointermediaria === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO INTERMEDIÁRIA</th> : null}
            {rcompactacaomodificada === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO MODIFICADA</th> : null}
            {rbaridadesmaximaminima === 'S' ? <th scope="col">MASSA ESPECIFICA MÁXIMA E MINÍMA DAS AREIAS</th> : null}
            {rcompactacaovibrocompactacao === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO DA MASSA ESPECÍFICA APARENTE CILINDRO DE CRAVAÇÃO</th> : null}
            {rcbrsemmoldagem === 'S' ? <th scope="col">CBR (SEM MOLDAGEM)</th> : null}
            {rcbrcommoldagem === 'S' ? <th scope="col">CBR (COM MOLDAGEM)</th> : null}
            {rensaiocbr === 'S' ? <th scope="col">CBR </th> : null}
            {rcbrimediato === 'S' ? <th scope="col">CBR IMEDIATO (1 PROVETE – SEM MOLDAGEM E SEM EMBEBIÇÃO) </th> : null}
            {rpotenciacolapso === 'S' ? <th scope="col">DETERMINAÇÃO DO POTENCIAL DE COLAPSO </th> : null}
            {rindiceexpansibilidade === 'S' ? <th scope="col">DETERMINAÇÃO DO INDICE DE EXPANSIBILIDADE </th> : null}
            {rexpansibilidadepotenciaexpansao === 'S' ? <th scope="col">DETERMINAÇÃO DA EXPANSIBILIDADE E POTENCIAL DE EXPANSÃO </th> : null}
            {rensaioexpansibilidade === 'S' ? <th scope="col">ENSAIO DE EXPANSIBILIDADE </th> : null}
            {rensaioexpansibilidadelambe === 'S' ? <th scope="col">ENSAIO DE EXPANSIBILIDADE LAMBE </th> : null}
            {rexpansibilidadeedometro === 'S' ? <th scope="col">EXPANSIBILIDADE EM EDÓMETRO LIVRE </th> : null}
            {rpotenciaexpansao === 'S' ? <th scope="col">POTENCIAL DE EXPANSÃO </th> : null}
            {rindicecolapso === 'S' ? <th scope="col">ÍNDICE DE COLAPSO </th> : null}
            {rensaiodispersabilidade === 'S' ? <th scope="col">ENSAIO DE DISPERSIBILIDADE PIN-HOLE </th> : null}
            {resilientetriaxiala === 'S' ? <th scope="col">ENSAIO TRIAXIAL CÍCLICO (MÉTODO A) </th> : null}
            {resilientetriaxialb === 'S' ? <th scope="col">ENSAIO TRIAXIAL CÍCLICO (MÉTODO B) </th> : null}
            {rpermanentestriaxiala === 'S' ? <th scope="col">ENSAIO TRIAXIAL CÍCLICO (MÉTODO A) </th> : null}
            {rpermanentestriaxialb === 'S' ? <th scope="col">ENSAIO TRIAXIAL CÍCLICO (MÉTODO B) </th> : null}


        </tr>
    </thead>
    <tbody>

        {
            props.arrayClientes.map((cliente) => {

                return <tr key={cliente.id}>
                    <td>{ }</td>
                    {ok === 'S' ? <td>{cliente.Amostra}</td> : null}
                    <td>{}</td>
                    <td>{cliente.ProfundidadeInicial }</td>
                    <td>{ cliente.ProfundidadeFinal}</td>
                    <td>{cliente.CoordenadasZ }</td>
                    <td>{cliente.CoordenadasY }</td>
                    <td>{ cliente.CoordenadasX}</td>
                    <td>{ }</td>
                    <td>{cliente.arq }</td>
                    {rmassavolumica === 'S' ? <td>{cliente.MassaVolumica} P</td> : null}
                    {rteoragua === 'S' ? <td>{cliente.TeorAgua} P</td> : null}
                    {rcortedirecto === 'S' ? <td>{cliente.CorteDirecto} P</td> : null}
                    {rmateriaorganica === 'S' ? <td>{cliente.MateriaOrganica} P</td> : null}
                    {rph === 'S' ? <td>{cliente.PH} P</td> : null}
                    {rdensidadeparticulas === 'S' ? <td>{cliente.DensidadeParticulas} P</td> : null}
                    {rlimitesliquidezmcp === 'S' ? <td>{cliente.LimitesLiquidezMCP} P</td> : null}
                    {rlimitesplasticidade === 'S' ? <td>{cliente.LimitesPlasticidade} P</td> : null}
                    {rlimitesretraccao === 'S' ? <td>{cliente.LimitesRetraccao} P</td> : null}
                    {rteorsulfatos === 'S' ? <td>{cliente.TeorSulfatos} P</td> : null}
                    {rteorcloretos === 'S' ? <td>{cliente.TeorCloretos} P</td> : null}
                    {rteorcarbonatos === 'S' ? <td>{cliente.TeorCarbonatos} P</td> : null}
                    {racidezbgully === 'S' ? <td>{cliente.AcidezBGully} P</td> : null}
                    {rpeneiracao === 'S' ? <td>{cliente.Peneiracao} P</td> : null}
                    {razulmetileno === 'S' ? <td>{cliente.AzulMetileno} P</td> : null}
                    {rfrascoareia === 'S' ? <td>{cliente.FrascoAreia} P</td> : null}
                    {rpeneiracaosedimentacao === 'S' ? <td>{cliente.PeneiracaoSedimentacao} P</td> : null}
                    {rmetodohilf === 'S' ? <td>{cliente.MetodoHilf} P</td> : null}
                    {rcoeficientefriabilidade === 'S' ? <td>{cliente.CoeficienteFriabilidade} P</td> : null}
                    {rresistividadeeletricaproveteSolo === 'S' ? <td>{cliente.ResistividadeEletricaProveteSolo} P</td> : null}
                    {rcompactacaonormal === 'S' ? <td>{cliente.CompactacaoNormal} P</td> : null}
                    {rcompactacaointermediaria === 'S' ? <td>{cliente.CompactacaoIntermediaria}</td> : null}
                    {rcompactacaomodificada === 'S' ? <td>{cliente.CompactacaoModificada}</td> : null}
                    {rbaridadesmaximaminima === 'S' ? <td>{cliente.BaridadesMaximaMinima}</td> : null}
                    {rcompactacaovibrocompactacao === 'S' ? <td>{cliente.CompactacaoVibrocompactacao}</td> : null}
                    {rcbrsemmoldagem === 'S' ? <td>{cliente.CBRSemMoldagem}</td> : null}
                    {rcbrcommoldagem === 'S' ? <td>{cliente.CBRComMoldagem}</td> : null}
                    {rensaiocbr === 'S' ? <td>{cliente.EnsaioCBR}</td> : null}
                    {rcbrimediato === 'S' ? <td>{cliente.CBRImediato}</td> : null}
                    {rpotenciacolapso === 'S' ? <td>{cliente.PotenciaColapso}</td> : null}
                    {rindiceexpansibilidade === 'S' ? <td>{cliente.IndiceExpansibilidade}</td> : null}
                    {rexpansibilidadepotenciaexpansao === 'S' ? <td>{cliente.ExpansibilidadePotenciaExpansao}</td> : null}
                    {rensaioexpansibilidade === 'S' ? <td>{cliente.EnsaioExpansibilidade}</td> : null}
                    {rensaioexpansibilidadelambe === 'S' ? <td>{cliente.EnsaioExpansibilidadeLambe}</td> : null}
                    {rexpansibilidadeedometro === 'S' ? <td>{cliente.ExpansibilidadeEdometro}</td> : null}
                    {rpotenciaexpansao === 'S' ? <td>{cliente.PotenciaExpansao}</td> : null}
                    {rindicecolapso === 'S' ? <td>{cliente.IndiceColapso}</td> : null}
                    {rensaiodispersabilidade === 'S' ? <td>{cliente.EnsaioDispersabilidade}</td> : null}
                    {rresilientetriaxiala === 'S' ? <td>{cliente.ResilienteTriaxialA}</td> : null}
                    {rresilientetriaxialb === 'S' ? <td>{cliente.ResilienteTriaxialB}</td> : null}
                    {rpermanentestriaxiala === 'S' ? <td>{cliente.PermanentesTriaxialA}</td> : null}
                    {rpermanentestriaxialb === 'S' ? <td>{cliente.PermanentesTriaxialB}</td> : null}

                </tr>
            })
        }


    </tbody>
</table>
}

export default ListaProgramacaoPDF;