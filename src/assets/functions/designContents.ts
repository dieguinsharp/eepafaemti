import {Content} from "../../common/Content.ts";

import design01 from '../emti3/design.pdf';
import design02 from '../emti3/design0608.pptx';

// gestao do tempo area

export function getDesignContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Design - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: design01
        },
        {
            title: defaultName + 'Primeira Aula 3o Bimestre - 06/08',
            path: design02
        }
    ]
}