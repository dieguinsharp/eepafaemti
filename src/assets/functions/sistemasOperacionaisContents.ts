import {Content} from "../../common/Content.ts";

import so01 from '../emti2/so2504.pdf';
import so02 from '../emti2/so0905.pptx';
import so03 from '../emti2/so2305.pptx';
import so04 from '../emti2/so0508.pptx';
import so05 from '../emti2/so2608.pptx';

// gestao do tempo area

export function getSistemasOperacionaisContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Sistemas Operacionais - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: so01
        },
        {
            title: defaultName + '09/05',
            path: so02
        },
        {
            title: defaultName + '23/05',
            path: so03
        },
        {
            title: defaultName + 'Primeira Aula 3o Bimestre - 05/08',
            path: so04
        },
        {
            title: defaultName + 'Sistemas Operacionais Industriais - 26/08',
            path: so05
        }
    ]
}