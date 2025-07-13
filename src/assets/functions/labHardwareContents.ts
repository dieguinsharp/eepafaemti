import {Content} from "../../common/Content.ts";

import labHardware01 from '../emti3/labhardware.pdf';
import labHardware02 from '../emti3/labhardware0505.pdf';
import labHardware03 from '../emti3/labhardware2605.pptx';

// gestao do tempo area

export function getLabHardwareContents() : Content[] {
    return makeContentObjects();
}

function makeContentObjects() : Content[] {
    const defaultName = 'Laboratório de Hardware - ';
    return [
        {
            title: defaultName + 'Primeira Aula',
            path: labHardware01
        },
        {
            title: defaultName + '05/05',
            path: labHardware02
        },
        {
            title: defaultName + '26/06',
            path: labHardware03
        },
    ]
}