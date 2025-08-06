import {Content} from "../../common/Content.ts";

import empreendedorismo01 from '../emti3/empreendedorismo.pdf';
import empreendedorismo02 from '../emti3/empreendedorismo0705.pdf';
import empreendedorismo03 from '../emti3/empreendedorismo1106.pptx';
import empreendedorismo04 from '../emti3/empreendedorismo16.pdf';
import empreendedorismo05 from '../emti3/empreendedorismo2805.pptx';
import empreendedorismo06 from '../emti3/empreendedorismorevisao.pptx';
import empreendedorismo07 from '../emti3/empreendedorismo0608.pptx';

// gestao do tempo area

export function getEmpreendedorismoContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Empreendedorismo - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: empreendedorismo01
        },
        {
            title: defaultName + '07/05',
            path: empreendedorismo02
        },
        {
            title: defaultName + '11/06',
            path: empreendedorismo03
        },
        {
            title: defaultName + '16/06',
            path: empreendedorismo04
        },
        {
            title: defaultName + '28/05',
            path: empreendedorismo05
        },
        {
            title: defaultName + 'Revisão',
            path: empreendedorismo06
        },
        {
            title: defaultName + 'Primeira aula 3o Bimestre - 06/08',
            path: empreendedorismo07
        }
    ]
}