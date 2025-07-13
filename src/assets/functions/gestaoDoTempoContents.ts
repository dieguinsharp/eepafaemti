import {Content} from "../../common/Content.ts";

import gestao01 from '../emti2/gestao.pdf';
import gestao02 from '../emti2/gestao1305.pptx';
import gestao03 from '../emti2/gestao1306.pptx';

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
        }
    ]
}