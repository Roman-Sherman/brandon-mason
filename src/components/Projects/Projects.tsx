import { MantineComponent, Container, Title } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef } from 'react';

interface ProjectProps {
    headerHeight: number;
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {
    return (
        <Container mih={'100vh'} ref={projectRef} pt={`calc(${props.headerHeight}px + 1vh`} px={0} ml={0} className={classes.container}>
            <Title order={2} className={classes.title}>Projects</Title>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    );
});

export default Projects;