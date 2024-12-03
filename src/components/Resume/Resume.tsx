import { forwardRef } from 'react';
import classes from './Resume.module.css';
import { Anchor, Box, Container, MantineComponent, Title } from '@mantine/core';

interface ResumeProps {

}

const Resume = forwardRef<MantineComponent<any>, ResumeProps>((props, resumeRef) => {
    return (
        <Container mih={'90vh'} ref={resumeRef}>
            <Title order={2} className={classes.title}>Resume</Title>
            <Anchor href='https://docs.google.com/document/d/1AQZoarByG7TqT1GTa6TpMQrMAzRy5fyqJ4XqPzxWmjw/preview' target='_blank'>Link</Anchor>
            <Box visibleFrom='sm' mih={'68vh'}>
                <iframe src="https://docs.google.com/document/d/1AQZoarByG7TqT1GTa6TpMQrMAzRy5fyqJ4XqPzxWmjw/preview?embedded=true" width='100%' min-height='80vh' style={{ borderRadius: '10px' }}></iframe>
            </Box>
        </Container>
    );
});

export default Resume;