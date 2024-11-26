import { Accordion, AccordionItem, AccordionPanel, Grid, GridCol, HoverCard, SimpleGrid, Text } from '@mantine/core';
import React, { useState } from 'react';
import { SiReact, SiHtml5, SiTypescript, SiCss3, SiMantine, SiCplusplus, SiMongodb, SiMysql, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import classes from './IconAccordion.module.css';

// interface AccordionProps {
//     title?: string;
//     content?: string;
// }

const iconList = [
    { name: "React", component: <SiReact /> },
    { name: "HTML5", component: <SiHtml5 /> },
    { name: "TypeScript", component: <SiTypescript /> },
    { name: "CSS3", component: <SiCss3 /> },
    { name: "Mantine", component: <SiMantine /> },
    { name: "C++", component: <SiCplusplus /> },
    { name: "Java", component: <FaJava /> },
    { name: "MongoDB", component: <SiMongodb /> },
    { name: "MySQL", component: <SiMysql /> },
    { name: "Git", component: <SiGit /> },
];

const IconAccordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const images: JSX.Element[] = iconList.map((icon, i) => (
        <Grid.Col key={i} classNames={{col: classes.colRoot}}>
            <HoverCard key={i} classNames={{ dropdown: classes.dropdown }}>
                <IconContext.Provider
                    value={{ color: 'black', size: '50px', className: 'icons' }}
                >
                    <HoverCard.Target>
                        <div >
                            {icon.component}
                        </div>
                    </HoverCard.Target>
                </IconContext.Provider>
                <HoverCard.Dropdown>
                    <Text size="xs" style={{fontSize: '1.2rem'}}>{icon.name}</Text>
                </HoverCard.Dropdown>
            </HoverCard>
            <Text size="xs" style={{fontSize: '1.1rem'}} classNames={{root: classes.iconText}}>{icon.name}</Text>
        </Grid.Col>
    ));

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Accordion chevronSize={40} 
            classNames={{
                root: classes.accordionRoot, 
                control: classes.control,
                item: classes.accordionItem,
        }}>
            <AccordionItem value={'tech'}>
                <Accordion.Control classNames={{chevron: classes.chevron}}>
                    <Text style={{color: 'var(--mantine-color-mint)'}}>Click here to see the technologies I'm most familiar with.</Text></Accordion.Control>
                <AccordionPanel>
                    <Grid justify='center' type='container' columns={20} className={classes.col}
                    >
                        {images}
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default IconAccordion;