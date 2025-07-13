import {Content} from "../../common/Content.ts";

import arquitetura01 from '../emti2/arquitetura.pdf';

// gestao do tempo area

export function getArquiteturaContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Arquitetura - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: arquitetura01
        }
    ]
}