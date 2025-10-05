import {Content} from "../../common/Content.ts";

import arquitetura01 from '../emti2/arquitetura.pdf';
import arquitetura4b from '../emti2/arquitetura4b.pdf';

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
        },
        {
            title: defaultName + 'Arquitetura 4 Bimestre',
            path: arquitetura4b
        }
    ]
}