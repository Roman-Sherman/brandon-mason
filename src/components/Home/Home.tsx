import { Button, Flex, MantineComponent, Stack, Text } from '@mantine/core';
import classes from './Home.module.css';
import { useScrollIntoView } from '@mantine/hooks';
import { forwardRef } from 'react';

interface HomeProps {
    buttonRef: React.MutableRefObject<any>;
    projectRef: React.MutableRefObject<any>;
    scrollIntoView: (ref: React.MutableRefObject<any>) => void;
}

const Home = forwardRef<MantineComponent<any>, HomeProps>((props, buttonRef) => {

    return (
        <Flex
            mih={'100vh'}
        >
            <Stack classNames={classes}
                justify="center"
                align="flex-start"
                gap="xs"
            >
                <Text className={classes.introtext}>
                Hi there, my name is
                </Text>
                <Text ta="left" fw={900} className={classes.title}>
                Brandon Mason.
                </Text>
                <Text ta="left" className={classes.text}>
                I am pursuing a <strong>Bachelor of Science in Computer Science</strong> degree at Texas State University. 
                I will be graduating in December 2025, and I would love to work for your company this summer. 
                </Text>
                <Button 
                    color={'var(--mantine-color-viridian)'} 
                    size='md'
                    style={{width: '40%', minWidth: '260px'}}
                    ref={props.buttonRef}
                    onClick={() => props.scrollIntoView(props.projectRef)}
                >
                    Check out some of my work!
                </Button>
            </Stack>
        </Flex>
    );
});

export default Home;