import { MantineComponent, Container } from '@mantine/core';
import classes from './Projects.module.css';
import { forwardRef } from 'react';

interface ProjectProps {
    
}

const Projects = forwardRef<MantineComponent<any>, ProjectProps>((props, projectRef) => {
    return (
        <Container ref={projectRef} className={classes.container}>
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