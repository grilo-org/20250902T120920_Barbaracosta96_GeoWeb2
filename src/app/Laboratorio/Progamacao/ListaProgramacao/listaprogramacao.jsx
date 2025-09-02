import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../ListaProgramacao/listaprogramacao';


function ListaProgramacaoGrid(props, props1) {
    const [sucesso, setSucesso] = useState('');
    const [ok, setOK] = useState('');
    const [massavolumica, setMassaVolumica] = useState()
    const [rmassavolumica, setRMassaVolumica] = useState('N')
    const [teoragua, setTeorAgua] = useState()
    const [rteoragua, setRTeorAgua] = useState('')
    const [cortedirecto, setCorteDirecto] = useState()
    const [rcortedirecto, setRCorteDirecto] = useState('')
    const [materiaorganica, setMateriaOrganica] = useState()
    const [rmateriaorganica, setRMateriaOrganica] = useState('')
    const [ph, setPH] = useState()
    const [rph, setRPH] = useState('')
    const [densidadeparticulas, setDensidadeParticulas] = useState()
    const [rdensidadeparticulas, setRDensidadeParticulas] = useState('')
    const [limitesliquidezmcp, setLimitesLiquidezMCP] = useState()
    const [rlimitesliquidezmcp, setRLimitesLiquidezMCP] = useState('')
    const [limitesplasticidade, setLimitesPlasticidade] = useState()
    const [rlimitesplasticidade, setRLimitesPlasticidade] = useState('')
    const [limitesretraccao, setLimitesRetraccao] = useState()
    const [rlimitesretraccao, setRLimitesRetraccao] = useState('')
    const [teorsulfatos, setTeorSulfatos] = useState()
    const [rteorsulfatos, setRTeorSulfatos] = useState('')
    const [teorcloretos, setTeorCloretos] = useState()
    const [rteorcloretos, setRTeorCloretos] = useState('')
    const [teorcarbonatos, setTeorCarbonatos] = useState()
    const [rteorcarbonatos, setRTeorCarbonatos] = useState('')
    const [acidezbgully, setAcidezBGully] = useState()
    const [racidezbgully, setRAcidezBGully] = useState('')
    const [peneiracao, setPeneiracao] = useState()
    const [rpeneiracao, setRPeneiracao] = useState('')
    const [azulmetileno, setAzulMetileno] = useState()
    const [razulmetileno, setRAzulMetileno] = useState('')
    const [frascoareia, setFrascoAreia] = useState()
    const [rfrascoareia, setRFrascoAreia] = useState('')
    const [peneiracaosedimentacao, setPeneiracaoSedimentacao] = useState()
    const [rpeneiracaosedimentacao, setRPeneiracaoSedimentacao] = useState('')
    const [metodohilf, setMetodoHilf] = useState()
    const [rmetodohilf, setRMetodoHilf] = useState('')
    const [coeficientefriabilidade, setCoeficienteFriabilidade] = useState()
    const [rcoeficientefriabilidade, setRCoeficienteFriabilidade] = useState('')
    const [resistividadeeletricaproveteSolo, setResistividadeEletricaProveteSolo] = useState()
    const [rresistividadeeletricaproveteSolo, setRResistividadeEletricaProveteSolo] = useState('')

    const [compactacaonormal, setCompactacaoNormal] = useState()
    const [rcompactacaonormal, setRCompactacaoNormal] = useState('')
    const [compactacaointermediaria, setCompactacaoIntermediaria] = useState()
    const [rcompactacaointermediaria, setRCompactacaoIntermediaria] = useState('')
    const [compactacaomodificada, setCompactacaoModificada] = useState()
    const [rcompactacaomodificada, setRCompactacaoModificada] = useState('')
    const [baridadesmaximaminima, setBaridadesMaximaMinima] = useState()
    const [rbaridadesmaximaminima, setRBaridadesMaximaMinima] = useState('')
    const [compactacaovibrocompactacao, setCompactacaoVibrocompactacao] = useState()
    const [rcompactacaovibrocompactacao, setRCompactacaoVibrocompactacao] = useState('')
    const [cbrsemmoldagem, setCBRSemMoldagem] = useState()
    const [rcbrsemmoldagem, setRCBRSemMoldagem] = useState('')
    const [cbrcommoldagem, setCBRComMoldagem] = useState()
    const [rcbrcommoldagem, setRCBRComMoldagem] = useState('')
    const [ensaiocbr, setEnsaioCBR] = useState()
    const [rensaiocbr, setREnsaioCBR] = useState('')
    const [cbrimediato, setCBRImediato] = useState()
    const [rcbrimediato, setRCBRImediato] = useState('')

    const [potenciacolapso, setPotenciaColapso] = useState()
    const [rpotenciacolapso, setRPotenciaColapso] = useState('')
    const [indiceexpansibilidade, setIndiceExpansibilidade] = useState()
    const [rindiceexpansibilidade, setRIndiceExpansibilidade] = useState('')
    const [expansibilidadepotenciaexpansao, setExpansibilidadePotenciaExpansao] = useState()
    const [rexpansibilidadepotenciaexpansao, setRExpansibilidadePotenciaExpansao] = useState('')
    const [ensaioexpansibilidade, setEnsaioExpansibilidade] = useState()
    const [rensaioexpansibilidade, setREnsaioExpansibilidade] = useState('')
    const [ensaioexpansibilidadelambe, setEnsaioExpansibilidadeLambe] = useState()
    const [rensaioexpansibilidadelambe, setREnsaioExpansibilidadeLambe] = useState('')
    const [expansibilidadeedometro, setExpansibilidadeEdometro] = useState()
    const [rexpansibilidadeedometro, setRExpansibilidadeEdometro] = useState('')
    const [potenciaexpansao, setPotenciaExpansao] = useState()
    const [rpotenciaexpansao, setRPotenciaExpansao] = useState('')
    const [indicecolapso, setIndiceColapso] = useState()
    const [rindicecolapso, setRIndiceColapso] = useState('')
    const [ensaiodispersabilidade, setEnsaioDispersabilidade] = useState()
    const [rensaiodispersabilidade, setREnsaioDispersabilidade] = useState('')
    const [resilientetriaxiala, setResilienteTriaxialA] = useState()
    const [rresilientetriaxiala, setRResilienteTriaxialA] = useState('')
    const [resilientetriaxialb, setResilienteTriaxialB] = useState()
    const [rresilientetriaxialb, setRResilienteTriaxialB] = useState('')
    const [permanentestriaxiala, setPermanentesTriaxialA] = useState()
    const [rpermanentestriaxiala, setRPermanentesTriaxialA] = useState('')
    const [permanentestriaxialb, setPermanentesTriaxialB] = useState()
    const [rpermanentestriaxialb, setRPermanentesTriaxialB] = useState('')
    const [compressaosimples, setCompressaoSimples] = useState()
    const [rcompressaosimples, setRCompressaoSimples] = useState('')
    const [ensaiomolhagemsecagem, setEnsaioMolhagemSecagem] = useState()
    const [rensaiomolhagemsecagem, setREnsaioMolhagemSecagem] = useState('')
    const [endometro, setEdometro] = useState()
    const [rendometro, setREdometro] = useState('')
    const [ensaioedometrodccs, setEnsaioEdometroDCCS] = useState()
    const [rensaioedometrodccs, setREnsaioEdometroDCCS] = useState('')
    const [consolidacaohidraulica, setConsolidacaoHidraulica] = useState()
    const [rconsolidacaohidraulica, setRConsolidacaoHidraulica] = useState('')
    const [consolidacaotriaxial, setConsolidacaoTriaxial] = useState()
    const [rconsolidacaotriaxial, setRConsolidacaoTriaxial] = useState('')
    const [resistenciacompressaounixial, setResistenciaCompressaoUnixial] = useState()
    const [rresistenciacompressaounixial, setRResistenciaCompressaoUnixial] = useState('')
    const [triaxialnaoconsolidadouu, setTriaxialNaoConsolidadoUU] = useState()
    const [rtriaxialnaoconsolidadouu, setRTriaxialNaoConsolidadoUU] = useState('')
    const [triaxialnaoconsolidadocu, setTriaxialNaoConsolidadoCU] = useState()
    const [rtriaxialnaoconsolidadocu, setRTriaxialNaoConsolidadoCU] = useState('')
    const [triaxialnaoconsolidadocd, setTriaxialNaoConsolidadoCD] = useState()
    const [rtriaxialnaoconsolidadocd, setRTriaxialNaoConsolidadoCD] = useState('')
    const [triaxialsigmaconstante, setTriaxialSigmaConstante] = useState()
    const [rtriaxialsigmaconstante, setRTriaxialSigmaConstante] = useState('')
    const [patamarconsolidacaoanisotropica, setPatamarConsolidacaoAnisotropica] = useState()
    const [rpatamarconsolidacaoanisotropica, setRPatamarConsolidacaoAnisotropica] = useState('')
    const [ensaiotriaxialmultifasicocu, setEnsaioTriaxialMultifasicoCU] = useState()
    const [rensaiotriaxialmultifasicocu, setREnsaioTriaxialMultifasicoCU] = useState('')
    const [ensaiotriaxialmultifasicocd, setEnsaioTriaxialMultifasicoCD] = useState()
    const [rensaiotriaxialmultifasicocd, setREnsaioTriaxialMultifasicoCD] = useState('')
    const [ensaiocortenaoconsolidadonaodrenadouu, setEnsaioCorteNaoConsolidadoNaoDrenadoUU] = useState()
    const [rensaiocortenaoconsolidadonaodrenadouu, setREnsaioCorteNaoConsolidadoNaoDrenadoUU] = useState('')
    const [ensaiocorteconsolidadonaodrenadocu, setEnsaioCorteConsolidadoNaoDrenadoCU] = useState()
    const [rensaiocorteconsolidadonaodrenadocu, setREnsaioCorteConsolidadoNaoDrenadoCU] = useState('')
    const [ensaiocorteconsolidadonaodrenadocd, setEnsaioCorteConsolidadoNaoDrenadoCD] = useState()
    const [rensaiocorteconsolidadonaodrenadocd, setREnsaioCorteConsolidadoNaoDrenadoCD] = useState('')
    const [permeabilidadeconstante, setPermeabilidadeConstante] = useState('')
    const [rpermeabilidadeconstante, setRPermeabilidadeConstante] = useState('')
    const [permeabilidadevariavel, setPermeabilidadeVariavel] = useState('')
    const [rpermeabilidadevariavel, setRPermeabilidadeVariavel] = useState('')
    const [m1, setM1] = useState(false)
    const [m2, setM2] = useState(false)
    const [m3, setM3] = useState()
    const [var1, setVar1] = useState()
    const [testearray, setTesteArray] = useState([])





    function dados() {
        props.arrayClientes.map((client) => {
            return setSucesso(client.Amostra)

        })

    };
    function dados1() {
        props.arrayClientes.map((client) => {
            return setMassaVolumica(client.MassaVolumica),
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
                setEnsaioMolhagemSecagem(client.EnsaioMolhagemSecagem),
                setEdometro(client.Edometro),
                setEnsaioEdometroDCCS(client.Ensaio_Edometro_DCCS),
                setConsolidacaoHidraulica(client.Consolidacao_Hidraulica),
                setConsolidacaoTriaxial(client.Consolidacao_Triaxial),
                setResistenciaCompressaoUnixial(client.Resistencia_Por_Compressao_Unixial),
                setTriaxialNaoConsolidadoUU(client.Triaxial_Nao_Consolidado_UU),
                setTriaxialNaoConsolidadoCU(client.Triaxial_Nao_Consolidado_CD),
                setTriaxialNaoConsolidadoCD(client.Triaxial_Nao_Consolidado_CU),
                setTriaxialSigmaConstante(client.Triaxial_Sigma_1_Constante),
                setPatamarConsolidacaoAnisotropica(client.Patamar_de_Consolidacao_Anisotropica),
                setEnsaioTriaxialMultifasicoCU(client.Ensaio_Triaxial_Multifasico_CU),
                setEnsaioTriaxialMultifasicoCD(client.Ensaio_Triaxial_Multifasico_CD),
                setEnsaioCorteNaoConsolidadoNaoDrenadoUU(client.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_UU),
                setEnsaioCorteConsolidadoNaoDrenadoCU(client.Ensaio_Corte_Consolidado_Nao_Drenado_CU),
                setEnsaioCorteConsolidadoNaoDrenadoCD(client.Ensaio_Corte_Consolidado_Nao_Drenado_CD),
                setPermeabilidadeConstante(client.PermeabilidadeConstante),
                setPermeabilidadeVariavel(client.PermeabilidadeVariavel)
        })

    };
    function teste1() {
        if (sucesso >= 1 && m2 === false) {
            setOK('S')


            setM2(true)
        }
    }

    function TesteIf() {

        if (massavolumica > 0 && massavolumica !== null && massavolumica !== '') {
            setRMassaVolumica('S')

        } else {
            setRMassaVolumica('N')
        }
        if (teoragua > 0 && teoragua !== null && teoragua !== '') {
            setRTeorAgua('S')
            setM1(true)

        } else {
            setRTeorAgua('N')
        }
        if (cortedirecto > 0 && cortedirecto !== null && cortedirecto !== '') {
            setRCorteDirecto('S')
        } else {
            setRCorteDirecto('N')
        }
        if (materiaorganica > 0 && materiaorganica !== null && materiaorganica !== '') {
            setRMateriaOrganica('S')
        } else {
            setRMateriaOrganica('N')
        }
        if (ph > 0 && ph !== null && ph !== '') {
            setRPH('S')
        } else {
            setRPH('N')
        }
        if (densidadeparticulas > 0 && densidadeparticulas !== null && densidadeparticulas !== '') {
            setRDensidadeParticulas('S')
        } else {
            setRDensidadeParticulas('N')
        }
        if (limitesliquidezmcp > 0 && limitesliquidezmcp !== null && limitesliquidezmcp !== '') {
            setRLimitesLiquidezMCP('S')
        } else {
            setRLimitesLiquidezMCP('N')
        }
        if (limitesplasticidade > 0 && limitesplasticidade !== null && limitesplasticidade !== '') {
            setRLimitesPlasticidade('S')
        } else {
            setRLimitesPlasticidade('N')
        }
        if (limitesretraccao > 0 && limitesretraccao !== null && limitesretraccao !== '') {
            setRLimitesRetraccao('S')
        } else {
            setRLimitesRetraccao('N')
        }
        if (teorsulfatos > 0 && teorsulfatos !== null && teorsulfatos !== '') {
            setRTeorSulfatos('S')
        } else {
            setRTeorSulfatos('N')
        }
        if (teorcloretos > 0 && teorcloretos !== null && teorcloretos !== '') {
            setRTeorCloretos('S')
        } else {
            setRTeorCloretos('N')
        }
        if (teorcarbonatos > 0 && teorcarbonatos !== null && teorcarbonatos !== '') {
            setRTeorCarbonatos('S')
        } else {
            setRTeorCarbonatos('N')
        }
        if (acidezbgully > 0 && acidezbgully !== null && acidezbgully !== '') {
            setRAcidezBGully('S')
        } else {
            setRAcidezBGully('N')
        }
        if (peneiracao > 0 && peneiracao !== null && peneiracao !== '') {
            setRPeneiracao('S')
        } else {
            setRPeneiracao('N')
        }
        if (azulmetileno > 0 && azulmetileno !== null && azulmetileno !== '') {
            setRAzulMetileno('S')
        } else {
            setRAzulMetileno('N')
        }
        if (frascoareia > 0 && frascoareia !== null && frascoareia !== '') {
            setRFrascoAreia('S')
        } else {
            setRFrascoAreia('N')
        }
        if (peneiracaosedimentacao > 0 && peneiracaosedimentacao !== null && peneiracaosedimentacao !== '') {
            setRPeneiracaoSedimentacao('S')
        } else {
            setRPeneiracaoSedimentacao('N')
        }
        if (metodohilf > 0 && metodohilf !== null && metodohilf !== '') {
            setRMetodoHilf('S')
        } else {
            setRMetodoHilf('N')
        }
        if (coeficientefriabilidade > 0 && coeficientefriabilidade !== null && coeficientefriabilidade !== '') {
            setRCoeficienteFriabilidade('S')
        } else {
            setRCoeficienteFriabilidade('N')
        }
        if (resistividadeeletricaproveteSolo > 0 && resistividadeeletricaproveteSolo !== null && resistividadeeletricaproveteSolo !== '') {
            setRResistividadeEletricaProveteSolo('S')
        } else {
            setRResistividadeEletricaProveteSolo('N')
        }
        if (compactacaonormal > 0 && compactacaonormal !== null && compactacaonormal !== '') {
            setRCompactacaoNormal('S')
        } else {
            setRCompactacaoNormal('N')
        }
        if (compactacaointermediaria > 0 && compactacaointermediaria !== null && compactacaointermediaria !== '') {
            setRCompactacaoIntermediaria('S')
        } else {
            setRCompactacaoIntermediaria('N')
        }
        if (compactacaomodificada > 0 && compactacaomodificada !== null && compactacaomodificada !== '') {
            setRCompactacaoModificada('S')
        } else {
            setRCompactacaoModificada('N')
        }
        if (baridadesmaximaminima > 0 && baridadesmaximaminima !== null && baridadesmaximaminima !== '') {
            setRBaridadesMaximaMinima('S')
        } else {
            setRBaridadesMaximaMinima('N')
        }
        if (compactacaovibrocompactacao > 0 && compactacaovibrocompactacao !== null && compactacaovibrocompactacao !== '') {
            setRCompactacaoVibrocompactacao('S')
        } else {
            setRCompactacaoVibrocompactacao('N')
        }
        if (cbrsemmoldagem > 0 && cbrsemmoldagem !== null && cbrsemmoldagem !== '') {
            setRCBRSemMoldagem('S')
        } else {
            setRCBRSemMoldagem('N')
        }
        if (cbrcommoldagem > 0 && cbrcommoldagem !== null && cbrcommoldagem !== '') {
            setRCBRComMoldagem('S')
        } else {
            setRCBRComMoldagem('N')
        }
        if (ensaiocbr > 0 && ensaiocbr !== null && ensaiocbr !== '') {
            setREnsaioCBR('S')
        } else {
            setREnsaioCBR('N')
        }
        if (potenciacolapso > 0 && potenciacolapso !== null && potenciacolapso !== '') {
            setRPotenciaColapso('S')
        } else {
            setRPotenciaColapso('N')
        }
        if (cbrsemmoldagem > 0 && cbrsemmoldagem !== null && cbrsemmoldagem !== '') {
            setRCBRSemMoldagem('S')
        } else {
            setRCBRSemMoldagem('N')
        }
        if (cbrcommoldagem > 0 && cbrcommoldagem !== null && cbrcommoldagem !== '') {
            setRCBRComMoldagem('S')
        } else {
            setRCBRComMoldagem('N')
        }
        if (ensaiocbr > 0 && ensaiocbr !== null && ensaiocbr !== '') {
            setREnsaioCBR('S')
        } else {
            setREnsaioCBR('N')
        }
        if (cbrimediato > 0 && cbrimediato !== null && cbrimediato !== null && cbrimediato !== '') {
            setRCBRImediato('S')
        } else {
            setRCBRImediato('N')
        }
        if (potenciacolapso > 0 && potenciacolapso !== null && potenciacolapso !== '') {
            setRPotenciaColapso('S')
        } else {
            setRPotenciaColapso('N')
        }
        if (indiceexpansibilidade > 0 && indiceexpansibilidade !== null && indiceexpansibilidade !== '') {
            setRIndiceExpansibilidade('S')
        } else {
            setRIndiceExpansibilidade('N')
        }
        if (expansibilidadepotenciaexpansao > 0 && expansibilidadepotenciaexpansao !== null && expansibilidadepotenciaexpansao !== '') {
            setRExpansibilidadePotenciaExpansao('S')
        } else {
            setRExpansibilidadePotenciaExpansao('N')
        }
        if (ensaioexpansibilidade > 0 && ensaioexpansibilidade !== null && ensaioexpansibilidade !== '') {
            setREnsaioExpansibilidade('S')
        } else {
            setREnsaioExpansibilidade('N')
        }
        if (ensaioexpansibilidadelambe > 0 && ensaioexpansibilidadelambe !== null && ensaioexpansibilidadelambe !== '') {
            setREnsaioExpansibilidadeLambe('S')
        } else {
            setREnsaioExpansibilidadeLambe('N')
        }
        if (expansibilidadeedometro > 0 && expansibilidadeedometro !== null && expansibilidadeedometro !== '') {
            setRExpansibilidadeEdometro('S')
        } else {
            setRExpansibilidadeEdometro('N')
        }
        if (potenciaexpansao > 0 && potenciaexpansao !== null && potenciaexpansao !== '') {
            setRPotenciaExpansao('S')
        } else {
            setRPotenciaExpansao('N')
        }
        if (indicecolapso > 0 && indicecolapso !== null && indicecolapso !== '') {
            setRIndiceColapso('S')
        } else {
            setRIndiceColapso('N')
        }
        if (ensaiodispersabilidade > 0 && ensaiodispersabilidade !== null && ensaiodispersabilidade !== '') {
            setREnsaioDispersabilidade('S')
        } else {
            setREnsaioDispersabilidade('N')
        }
        if (resilientetriaxiala > 0 && resilientetriaxiala !== null && resilientetriaxiala !== '') {
            setRResilienteTriaxialA('S')
        } else {
            setRResilienteTriaxialA('N')
        }
        if (resilientetriaxialb > 0 && resilientetriaxialb !== null && resilientetriaxialb !== '') {
            setRResilienteTriaxialB('S')
        } else {
            setRResilienteTriaxialB('N')
        }
        if (permanentestriaxiala > 0 && permanentestriaxiala !== null && permanentestriaxiala !== '') {
            setRResilienteTriaxialA('S')
        } else {
            setRResilienteTriaxialA('N')
        }
        if (permanentestriaxialb > 0 && permanentestriaxialb !== null && permanentestriaxialb !== '') {
            setRPermanentesTriaxialB('S')
        } else {
            setRPermanentesTriaxialB('N')
        }
        if (compressaosimples > 0 && compressaosimples !== null && compressaosimples !== '') {
            setRCompressaoSimples('S')
        } else {
            setRCompressaoSimples('N')
        }
        if (ensaiomolhagemsecagem > 0 && ensaiomolhagemsecagem !== null && ensaiomolhagemsecagem !== '') {
            setREnsaioMolhagemSecagem('S')
        } else {
            setREnsaioMolhagemSecagem('N')
        }
        if (endometro > 0 && endometro !== null && endometro !== '') {
            setREdometro('S')
        } else {
            setREdometro('N')
        }
        if (permeabilidadeconstante > 0 && permeabilidadeconstante !== null && permeabilidadeconstante !== '') {
            setRPermeabilidadeConstante('S')
        } else {
            setRPermeabilidadeConstante('N')
        }
        if (permeabilidadevariavel > 0 && permeabilidadevariavel !== null && permeabilidadevariavel !== '') {
            setRPermeabilidadeVariavel('S')
        } else {
            setRPermeabilidadeVariavel('N')
        }
        if (ensaioedometrodccs > 0 && ensaioedometrodccs !== null && ensaioedometrodccs !== '') {
            setREnsaioEdometroDCCS('S')
        } else {
            setREnsaioEdometroDCCS('N')
        }
        if (consolidacaohidraulica > 0 && consolidacaohidraulica !== null && consolidacaohidraulica !== '') {
            setRConsolidacaoHidraulica('S')
        } else {
            setRConsolidacaoHidraulica('N')
        }
        if (consolidacaotriaxial > 0 && consolidacaotriaxial !== null && consolidacaotriaxial !== '') {
            setRConsolidacaoTriaxial('S')
        } else {
            setRConsolidacaoTriaxial('N')
        }
        if (resistenciacompressaounixial > 0 && resistenciacompressaounixial !== null && resistenciacompressaounixial !== '') {
            setRResistenciaCompressaoUnixial('S')
        } else {
            setRResistenciaCompressaoUnixial('N')
        }
        if (triaxialnaoconsolidadouu > 0 && triaxialnaoconsolidadouu !== null && triaxialnaoconsolidadouu !== '') {
            setRTriaxialNaoConsolidadoUU('S')
        } else {
            setRTriaxialNaoConsolidadoUU('N')
        }
        if (triaxialnaoconsolidadocu > 0 && triaxialnaoconsolidadocu !== null && triaxialnaoconsolidadocu !== '') {
            setRTriaxialNaoConsolidadoCU('S')
        } else {
            setRTriaxialNaoConsolidadoCU('N')
        }
        if (triaxialnaoconsolidadocd > 0 && triaxialnaoconsolidadocd !== null && triaxialnaoconsolidadocd !== '') {
            setRTriaxialNaoConsolidadoCD('S')
        } else {
            setRTriaxialNaoConsolidadoCD('N')
        }
        if (triaxialsigmaconstante > 0 && triaxialsigmaconstante !== null && triaxialsigmaconstante !== '') {
            setRTriaxialSigmaConstante('S')
        } else {
            setRTriaxialSigmaConstante('N')
        }
        if (patamarconsolidacaoanisotropica > 0 && patamarconsolidacaoanisotropica !== null && patamarconsolidacaoanisotropica !== '') {
            setRPatamarConsolidacaoAnisotropica('S')
        } else {
            setRPatamarConsolidacaoAnisotropica('N')
        }
        if (ensaiotriaxialmultifasicocu > 0 && ensaiotriaxialmultifasicocu !== null && ensaiotriaxialmultifasicocu !== '') {
            setREnsaioTriaxialMultifasicoCU('S')
        } else {
            setREnsaioTriaxialMultifasicoCU('N')
        }
        if (ensaiotriaxialmultifasicocd > 0 && ensaiotriaxialmultifasicocd !== null && ensaiotriaxialmultifasicocd !== '') {
            setREnsaioTriaxialMultifasicoCD('S')
        } else {
            setREnsaioTriaxialMultifasicoCD('N')
        }
        if (ensaiocortenaoconsolidadonaodrenadouu > 0 && ensaiocortenaoconsolidadonaodrenadouu !== null && ensaiocortenaoconsolidadonaodrenadouu !== '') {
            setREnsaioCorteNaoConsolidadoNaoDrenadoUU('S')
        } else {
            setREnsaioCorteNaoConsolidadoNaoDrenadoUU('N')
        }
        if (ensaiocorteconsolidadonaodrenadocu > 0 && ensaiocorteconsolidadonaodrenadocu !== null && ensaiocorteconsolidadonaodrenadocu !== '') {
            setREnsaioCorteConsolidadoNaoDrenadoCU('S')
        } else {
            setREnsaioCorteConsolidadoNaoDrenadoCU('N')
        }
        if (ensaiocorteconsolidadonaodrenadocd > 0 && ensaiocorteconsolidadonaodrenadocd !== null && ensaiocorteconsolidadonaodrenadocd !== '') {
            setREnsaioCorteConsolidadoNaoDrenadoCD('S')
        } else {
            setREnsaioCorteConsolidadoNaoDrenadoCD('N')
        }

    }


    useEffect(() => {


        teste1()
        TesteIf()
        dados()
        dados1()

    })

    return <table className="table table-bordered">
        <thead>

            <tr className="table-secondary">

                {ok === 'S' ? <th scope="col">Amostra</th> : null}
                {rmassavolumica === 'S' ? <th scope="col">MASSA ESPECÍFICA REAL EM GRÃOS</th> : null}
                {rteoragua === 'S' ? <th scope="col">DETERMINAÇÃO DO TEOR EM ÁGUA</th> : null}
                {rcortedirecto === 'S' ? <th scope="col">CORTE DIRETO</th> : null}
                {rmateriaorganica === 'S' ? <th scope="col">MASSA ESPECIFICA APARENTE</th> : null}
                {rph === 'S' ? <th scope="col">DETERMINAÇÃO DO PH{rph}</th> : null}
                {rdensidadeparticulas === 'S' ? <th scope="col">DENSIDADE DAS PARTÍCULAS</th> : null}
                {rlimitesliquidezmcp === 'S' ? <th scope="col">ENSAIO MASSA APARENTE IN_SITU MEMBRANA PLASTICA</th> : null}
                {rlimitesplasticidade === 'S' ? <th scope="col">LIMITE DE LIQUIDEZ E PLASTICIDADE</th> : null}
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

                {rcompactacaonormal === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO NORMAL</th> : null}
                {rcompactacaointermediaria === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO INTERMEDIÁRIA</th> : null}
                {rcompactacaomodificada === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO MODIFICADA</th> : null}
                {rbaridadesmaximaminima === 'S' ? <th scope="col">MASSA ESPECIFICA MÁXIMA E MINÍMA DAS AREIAS</th> : null}
                {rcompactacaovibrocompactacao === 'S' ? <th scope="col">ENSAIO DE COMPACTAÇÃO DA MASSA ESPECÍFICA APARENTE CILINDRO DE CRAVAÇÃO</th> : null}
                {rcbrsemmoldagem === 'S' ? <th scope="col">CBR (SEM MOLDAGEM)</th> : null}
                {rcbrcommoldagem === 'S' ? <th scope="col">CBR (COM MOLDAGEM)</th> : null}
                {rensaiocbr === 'S' ? <th scope="col">CBR </th> : null}
                {rcbrimediato === 'S' ? <th scope="col">CBR IMEDIATO (SEM MOLDAGEM E SEM EMBEBIÇÃO) </th> : null}
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
                {rcompressaosimples === 'S' ? <th scope="col">COMPRESSÃO SIMPLES </th> : null}
                {rensaiomolhagemsecagem === 'S' ? <th scope="col">ENSAIO MOLHAGEM SECAGEM </th> : null}
                {rendometro === 'S' ? <th scope="col">ENDOMETRO</th> : null}
                {rensaioedometrodccs === 'S' ? <th scope="col">ENDOMETRO DCCS </th> : null}
                {rconsolidacaohidraulica === 'S' ? <th scope="col">CONSOLIDAÇÃO HIDRAULICA </th> : null}
                {rconsolidacaotriaxial === 'S' ? <th scope="col">CONSOLIDAÇÃO TRIAXIAL </th> : null}
                {rresistenciacompressaounixial === 'S' ? <th scope='col'>RESISTENCIA COMPRESSAO UNIXIAL</th> : null}
                {rtriaxialnaoconsolidadouu === 'S' ? <th scope='col'>TRIAXIAL NÃO CONSOLIDADO UU</th> : null}
                {rtriaxialnaoconsolidadocu === 'S' ? <th scope='col'>TRIAXIAL NÃO CONSOLIDADO CU</th> : null}
                {rtriaxialnaoconsolidadocd === 'S' ? <th scope='col'>TRIAXIAL NÃO CONSOLIDADO CD</th> : null}
                {rtriaxialsigmaconstante === 'S' ? <th scope='col'>TRIAXIAL SIGMA 1 CONSTANTE</th> : null}
                {rpatamarconsolidacaoanisotropica === 'S' ? <th scope='col'>PATAMAR CONSOLIDAÇÃO</th> : null}
                {rensaiotriaxialmultifasicocu === 'S' ? <th scope='col'>ENSAIO TRIAXIAL MULTIFASICO CU</th> : null}
                {rensaiotriaxialmultifasicocd === 'S' ? <th scope='col'>ENSAIO TRIAXIAL MULTIFASICO CD</th> : null}
                {rensaiocortenaoconsolidadonaodrenadouu === 'S' ? <th scope='col'>ENSAIO DE CORTE NÃO CONSOLIDADO NÃO DRENADO UU</th> : null}
                {rensaiocorteconsolidadonaodrenadocu === 'S' ? <th scope='col'>ENSAIO CORTE CONSOLIDADO NÃO DRENADO CU</th> : null}
                {rensaiocorteconsolidadonaodrenadocd === 'S' ? <th scope='col'>ENSAIO CORTE CONSOLIDADO NÃO DRENADO CD</th> : null}
                {rpermeabilidadeconstante === 'S' ? <th scope='col'>PERMEABILIDADE COM CARGA CONSTANTE EM CÂMARA TRIAXIAL</th> : null}
                {rpermeabilidadevariavel === 'S' ? <th scope='col'>PERMEABILIDADE COM CARGA VARIAVEL EM CÂMARA TRIAXIAL</th> : null}

            </tr>
        </thead>
        <tbody>

            {
                props.arrayClientes.map((cliente) => {

                    return <tr key={cliente.id}>
                        {ok === 'S' ? <td>{cliente.Amostra}</td> : null}
                        {rmassavolumica === 'S' ? <td className='th' >{cliente.MassaVolumica}</td> : null}
                        {rteoragua === 'S' ? <td>{cliente.TeorAgua}</td> : null}
                        {rcortedirecto === 'S' ? <td>{cliente.CorteDirecto}</td> : null}
                        {rmateriaorganica === 'S' ? <td>{cliente.MateriaOrganica}</td> : null}
                        {rph === 'S' ? <td>{cliente.PH}</td> : null}
                        {rdensidadeparticulas === 'S' ? <td>{cliente.DensidadeParticulas}</td> : null}
                        {rlimitesliquidezmcp === 'S' ? <td>{cliente.LimitesLiquidezMCP}</td> : null}
                        {rlimitesplasticidade === 'S' ? <td>{cliente.LimitesPlasticidade}</td> : null}
                        {rlimitesretraccao === 'S' ? <td>{cliente.LimitesRetraccao}</td> : null}
                        {rteorsulfatos === 'S' ? <td>{cliente.TeorSulfatos}</td> : null}
                        {rteorcloretos === 'S' ? <td>{cliente.TeorCloretos}</td> : null}
                        {rteorcarbonatos === 'S' ? <td>{cliente.TeorCarbonatos}</td> : null}
                        {racidezbgully === 'S' ? <td>{cliente.AcidezBGully}</td> : null}
                        {rpeneiracao === 'S' ? <td>{cliente.Peneiracao}</td> : null}
                        {razulmetileno === 'S' ? <td>{cliente.AzulMetileno}</td> : null}
                        {rfrascoareia === 'S' ? <td>{cliente.FrascoAreia}</td> : null}
                        {rpeneiracaosedimentacao === 'S' ? <td>{cliente.PeneiracaoSedimentacao}</td> : null}
                        {rmetodohilf === 'S' ? <td>{cliente.MetodoHilf}</td> : null}
                        {rcoeficientefriabilidade === 'S' ? <td>{cliente.CoeficienteFriabilidade}</td> : null}
                        {rresistividadeeletricaproveteSolo === 'S' ? <td>{cliente.ResistividadeEletricaProveteSolo}</td> : null}
                        {rcompactacaonormal === 'S' ? <td>{cliente.CompactacaoNormal}</td> : null}
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
                        {rcompressaosimples === 'S' ? <td>{cliente.CompressaoSimples}</td> : null}
                        {rensaiomolhagemsecagem === 'S' ? <td>{cliente.EnsaioMolhagemSecagem}</td> : null}
                        {rendometro === 'S' ? <td>{cliente.Edometro}</td> : null}
                        {rensaioedometrodccs === 'S' ? <td>{cliente.Ensaio_Edometro_DCCS}</td> : null}
                        {rconsolidacaohidraulica === 'S' ? <td>{cliente.Consolidacao_Hidraulica}</td> : null}
                        {rconsolidacaotriaxial === 'S' ? <td>{cliente.Consolidacao_Triaxial}</td> : null}
                        {rresistenciacompressaounixial === 'S' ? <td> {cliente.Resistencia_Por_Compressao_Unixial}</td> : null}
                        {rtriaxialnaoconsolidadouu === 'S' ? <td> {cliente.Triaxial_Nao_Consolidado_UU}</td> : null}
                        {rtriaxialnaoconsolidadocd === 'S' ? <td> {cliente.Triaxial_Nao_Consolidado_CD}</td> : null}
                        {rtriaxialnaoconsolidadocu === 'S' ? <td> {cliente.Triaxial_Nao_Consolidado_CU}</td> : null}
                        {rtriaxialsigmaconstante === 'S' ? <td> {cliente.Triaxial_Sigma_1_Constante}</td> : null}
                        {rpatamarconsolidacaoanisotropica === 'S' ? <td> {cliente.Patamar_de_Consolidacao_Anisotropica}</td> : null}
                        {rensaiotriaxialmultifasicocu === 'S' ? <td> {cliente.Ensaio_Triaxial_Multifasico_CU}</td> : null}
                        {rensaiotriaxialmultifasicocd === 'S' ? <td> {cliente.Ensaio_Triaxial_Multifasico_CD}</td> : null}
                        {rensaiocortenaoconsolidadonaodrenadouu === 'S' ? <td> {cliente.Ensaio_Corte_Nao_Consolidado_Nao_Drenado_UU}</td> : null}
                        {rensaiocorteconsolidadonaodrenadocu === 'S' ? <td> {cliente.Ensaio_Corte_Consolidado_Nao_Drenado_CU}</td> : null}
                        {rensaiocorteconsolidadonaodrenadocd === 'S' ? <td> {cliente.Ensaio_Corte_Consolidado_Nao_Drenado_CD}</td> : null}
                        {rpermeabilidadeconstante === 'S' ? <td> {cliente.PermeabilidadeConstante}</td> : null}
                        {rpermeabilidadevariavel === 'S' ? <td> {cliente.PermeabilidadeVariavel}</td> : null}

                    </tr>
                })
            }


        </tbody>
    </table>
}

export default ListaProgramacaoGrid;