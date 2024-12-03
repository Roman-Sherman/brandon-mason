import { Container, MantineComponent, Title, Text, Accordion } from '@mantine/core';
import { forwardRef } from 'react';
import classes from './AboutMe.module.css';
import IconAccordion from './IconAccordion/IconAccordion';

interface AboutMeProps {

}

const AboutMe = forwardRef<MantineComponent<any>, AboutMeProps>((props, aboutRef) => {

    return (
        <Container mih={'90vh'} pt={'80px'} ref={aboutRef}>
            <Title order={2} className={classes.title}>About Me</Title>
            <Text>This is the About Me section of the portfolio.</Text>
            <IconAccordion/>
        </Container>
    );
});

export default AboutMe;