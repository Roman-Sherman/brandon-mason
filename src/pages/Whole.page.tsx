import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Button, Container, MantineComponent, ScrollArea } from '@mantine/core';
import classes from './Whole.page.module.css';
import { useEffect, useState, useRef } from 'react';
import Projects from '@/components/Projects/Projects';
import AboutMe from '@/components/AboutMe/AboutMe';
import { useScrollIntoView } from '@mantine/hooks';

const WholePage: React.FC = () => {
    const [scroll, setScroll] = useState(false);
	const scrollareaRef = useRef<MantineComponent<any>>(null);
	const projectRef = useRef<MantineComponent<any>>(null);
	const buttonRef = useRef<MantineComponent<any>>(null);

	const scrollIntoView = (ref: React.MutableRefObject<any>) => {
		if (ref.current && scrollareaRef.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
			console.log('scrolling');
		}
	}

	return (
		<>
			<ScrollArea type="auto" scrollbarSize={8} ref={scrollareaRef} classNames={{
				root: classes.root,
				thumb: classes.thumb,
				scrollbar: classes.scrollbar,
			}} onScrollPositionChange={(position: { x: number; y: number }) => setScroll((position.y > 0) ? true : false)}>
				<Header scroll={ scroll }/>
				<Container classNames={{root: classes.containerRoot}}>
					<Home buttonRef={buttonRef} projectRef={projectRef} scrollIntoView={scrollIntoView}/>
					{/* <Button ref={buttonRef} onClick={() => scrollIntoView()}>button</Button> */}
					<AboutMe />
					<Projects projectRef={ projectRef }/>
				</Container>
			</ScrollArea>
		</>
	);
}

export default WholePage;