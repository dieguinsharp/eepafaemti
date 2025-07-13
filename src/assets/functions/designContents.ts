import {Content} from "../../common/Content.ts";

import design01 from '../emti3/design.pdf';

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
        }
    ]
}