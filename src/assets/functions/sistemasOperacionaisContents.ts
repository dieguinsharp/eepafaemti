import {Content} from "../../common/Content.ts";

import so01 from '../emti2/so2504.pdf';
import so02 from '../emti2/so0905.pptx';
import so03 from '../emti2/so2305.pptx';

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
        }
    ]
}