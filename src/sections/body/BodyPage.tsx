import styles from './BodyPage.module.scss' 

// emti 2
import {getGestaoDoTempoContents} from '../../assets/functions/gestaoDoTempoContents.ts'
import {getArquiteturaContents} from '../../assets/functions/arquiteturaContents.ts'
import {getSistemasOperacionaisContents} from '../../assets/functions/sistemasOperacionaisContents.ts'

// emti 3
import {getLabHardwareContents} from '../../assets/functions/labHardwareContents.ts'
import {getLabSoftwareContents} from '../../assets/functions/labSoftwareContents.ts'
import {getDesignContents} from '../../assets/functions/designContents.ts'
import {getEmpreendedorismoContents} from '../../assets/functions/empreendedorismoContents.ts'

// icons
import { HiDownload } from 'react-icons/hi';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// react
import { useEffect, useState } from 'react';

// interfaces
import { Content } from '../../common/Content.ts';

// component
import { Card } from '../../components/Card.tsx';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export const BodyPage = () => {
    // emti 2
    const [gestaoDoTempoItens, setGestaoDoTempoItens] = useState<Content[] | null>(null)
    const [arquiteturaItens, setArquiteturaItens] = useState<Content[] | null>(null)
    const [soItens, setSoItens] = useState<Content[] | null>(null)

    // emti 3
    const [labHardwareItens, setLabHardwareItens] = useState<Content[] | null>(null)
    const [labSoftwareItens, setLabSoftwareItens] = useState<Content[] | null>(null)
    const [empreendedorismoItens, setEmpreendedorismoItens] = useState<Content[] | null>(null)
    const [designItens, setDesignItens] = useState<Content[] | null>(null)


    useEffect(() => {
        // emti 2
        setGestaoDoTempoItens(getGestaoDoTempoContents());
        setArquiteturaItens(getArquiteturaContents());
        setSoItens(getSistemasOperacionaisContents());

        // emti 3
        setLabHardwareItens(getLabHardwareContents());
        setLabSoftwareItens(getLabSoftwareContents());
        setEmpreendedorismoItens(getEmpreendedorismoContents());
        setDesignItens(getDesignContents());
    }, [])


  return (
    <div className={styles.container}>
      <h1> EMTI 2 - Conteúdos</h1>
      <div className={styles.expander}>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                    <Typography component="span">Gestão do Tempo</Typography>
                </AccordionSummary>
                {
                    gestaoDoTempoItens?.map(m => (
                        <AccordionDetails>
                            <Card>
                                <a href={m.path} download> {m.title} <HiDownload/></a>
                            </Card>
                        </AccordionDetails>
                    ))
                }
                        
            </Accordion>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                    <Typography component="span">Arquitetura e Manutenção de Computadores</Typography>
                </AccordionSummary>
                {
                    arquiteturaItens?.map(m => (
                        <AccordionDetails>
                            <Card>
                                <a href={m.path} download> {m.title} <HiDownload/></a>
                            </Card>
                        </AccordionDetails>
                    ))
                }       
            </Accordion>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                    <Typography component="span">Sistemas Operacionais</Typography>
                </AccordionSummary>
                {
                    soItens?.map(m => (
                        <AccordionDetails>
                            <Card>
                                <a href={m.path} download> {m.title} <HiDownload/></a>
                            </Card>
                        </AccordionDetails>
                    ))
                }       
            </Accordion>
      </div>
      
      <h1> EMTI 3 - Conteúdos</h1>
      <div className={styles.expander}>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                    <Typography component="span">Empreendedorismo</Typography>
                </AccordionSummary>
                {
                    empreendedorismoItens?.map(m => (
                        <AccordionDetails>
                            <Card>
                                <a href={m.path} download> {m.title} <HiDownload/></a>
                            </Card>
                        </AccordionDetails>
                    ))
                }
            </Accordion>
            <Accordion className={styles.accordion}>
                    <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                        <Typography component="span">Laboratório de Hardware</Typography>
                    </AccordionSummary>
                    {
                        labHardwareItens?.map(m => (
                            <AccordionDetails>
                                <Card>
                                    <a href={m.path} download> {m.title} <HiDownload/></a>
                                </Card>
                            </AccordionDetails>
                        ))
                    }
            </Accordion>
            <Accordion className={styles.accordion}>
                    <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                        <Typography component="span">Laboratório de Software</Typography>
                    </AccordionSummary>
                    {
                        labSoftwareItens?.map(m => (
                            <AccordionDetails>
                                <Card>
                                    <a href={m.path} download> {m.title} <HiDownload/></a>
                                </Card>
                            </AccordionDetails>
                        ))
                    }
            </Accordion>
            <Accordion className={styles.accordion}>
                    <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                        <Typography component="span">Design</Typography>
                    </AccordionSummary>
                    {
                        designItens?.map(m => (
                            <AccordionDetails>
                                <Card>
                                    <a href={m.path} download> {m.title} <HiDownload/></a>
                                </Card>
                            </AccordionDetails>
                        ))
                    }
            </Accordion>
             <Accordion className={styles.accordion}>
                    <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                        <Typography component="span">Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card>
                            <h1> teste teste teste teste </h1>
                        </Card>
                    </AccordionDetails>
            </Accordion>
      </div>
      
    </div>
  )
}