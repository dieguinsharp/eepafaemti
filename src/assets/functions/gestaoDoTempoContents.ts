import {Content} from "../../common/Content.ts";

import gestao01 from '../emti2/gestao.pdf';
import gestao02 from '../emti2/gestao1305.pptx';
import gestao03 from '../emti2/gestao1306.pptx';
import gestao04 from '../emti2/gestao0508.pptx';
import gestao05 from '../emti2/gestao1908.pptx';

// gestao do tempo area

export function getGestaoDoTempoContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Gestão do Tempo - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: gestao01
        },
        {
            title: defaultName + '13/05',
            path: gestao02
        },
        {
            title: defaultName + '13/06',
            path: gestao03
        },
        {
            title: defaultName + 'Primeira Aula 3o Bimestre - 05/08',
            path: gestao04
        },
        {
            title: defaultName + 'Urgencia vs Importancia - 19/08',
            path: gestao05
        }
    ]
}