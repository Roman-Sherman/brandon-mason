import { Button, Flex, MantineComponent, Stack, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { forwardRef } from 'react';

interface HomeProps {
    buttonRef: React.MutableRefObject<any>;
    projectRef: React.MutableRefObject<any>;
    scrollIntoView: (ref: React.MutableRefObject<any>) => void;
}

const Home = forwardRef<MantineComponent<any>, HomeProps>((props, homeRef) => {

    return (
        <Flex
            mih={'100vh'}
            ref={homeRef}
        >
            <Stack classNames={classes}
                justify="center"
                align="flex-start"
                gap="xs"
            >
                <Text className={classes.introtext}>
                Hi there, my name is
                </Text>
                <Title ta="left" fw={900} className={classes.title}>
                Brandon Mason.
                </Title>
                <Text ta="left" className={classes.text}>
                I am pursuing a <strong>Bachelor of Science in Computer Science</strong> degree at Texas State University. 
                I will be graduating in December 2025, and I would love to work for your company this summer. 
                </Text>
                <Button 
                    color={'var(--mantine-color-viridian)'} 
                    size='md'
                    style={{width: '40%', minWidth: '260px', color: 'white', position: 'static'}}
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