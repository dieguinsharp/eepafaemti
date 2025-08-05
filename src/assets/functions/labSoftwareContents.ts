import {Content} from "../../common/Content.ts";

import labSoftware01 from '../emti3/labsoftware.pdf';
import labSoftware02 from '../emti3/labsoftware0508.pptx'

// gestao do tempo area

export function getLabSoftwareContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Laboratório de Software - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: labSoftware01
        },
        {
            title: defaultName + 'Primeira Aula - 3o Bimestre - 05/08',
            path: labSoftware02
        }
    ]
}