import { Button, Flex, MantineComponent, Stack, Text, Container } from '@mantine/core';
import classes from './Projects.module.css';
import { useScrollIntoView } from '@mantine/hooks';
import { forwardRef } from 'react';

interface ProjectProps {
    projectRef: React.MutableRefObject<any>;
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {
    return (
        <Container ref={props.projectRef} className={classes.container}>
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