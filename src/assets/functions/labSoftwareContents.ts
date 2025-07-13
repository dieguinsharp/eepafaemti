import {Content} from "../../common/Content.ts";

import labSoftware01 from '../emti3/labsoftware.pdf';

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
        }
    ]
}