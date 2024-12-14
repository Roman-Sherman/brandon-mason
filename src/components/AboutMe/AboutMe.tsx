import { Container, MantineComponent, Title, Text, Accordion } from '@mantine/core';
import { forwardRef } from 'react';
import classes from './AboutMe.module.css';
import IconAccordion from './IconAccordion/IconAccordion';
import { useViewportSize } from '@mantine/hooks';

interface AboutMeProps {
    headerHeight: number;
}

const AboutMe = forwardRef<MantineComponent<any>, AboutMeProps>((props, aboutRef) => {
    const { height, width } = useViewportSize();

    return (
        <Container mih={'100vh'} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} ref={aboutRef}>
            <Title order={2} className={classes.title}>About Me</Title>
            <Text>This is the About Me section of the portfolio.</Text>
            <IconAccordion/>
        </Container>
    );
});

export default AboutMe;