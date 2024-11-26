import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container, MantineComponent, ScrollArea } from '@mantine/core';
import classes from './Whole.page.module.css';
import { useEffect, useState, useRef } from 'react';
import Projects from '@/components/Projects/Projects';
import AboutMe from '@/components/AboutMe/AboutMe';

const WholePage: React.FC = () => {
    const [scroll, setScroll] = useState(false);
	const scrollareaRef = useRef<MantineComponent<any>>(null);
	const homeRef = useRef<MantineComponent<any>>(null);
	const aboutRef = useRef<MantineComponent<any>>(null);
	const projectRef = useRef<MantineComponent<any>>(null);
	const buttonRef = useRef<MantineComponent<any>>(null);
	const refObj = {"Home":homeRef, 
					"About":aboutRef, 
					"Projects":projectRef};

	const scrollIntoView = (ref: React.MutableRefObject<any>) => {
		if (ref.current && scrollareaRef.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<>
			<ScrollArea type="auto" scrollbarSize={8} ref={scrollareaRef} classNames={{
				root: classes.root,
				thumb: classes.thumb,
				scrollbar: classes.scrollbar,
			}} onScrollPositionChange={(position: { x: number; y: number }) => setScroll((position.y > 0) ? true : false)}>
				<Header scroll={scroll} refObj={refObj} scrollIntoView={scrollIntoView}/>
				<Container classNames={{root: classes.containerRoot}}>
					<Home buttonRef={buttonRef} ref={refObj.Home} projectRef={refObj.Projects} scrollIntoView={scrollIntoView}/>
					{/* <Button ref={buttonRef} onClick={() => scrollIntoView()}>button</Button> */}
					<AboutMe ref={refObj.About}/>
					<Projects ref={refObj.Projects}/>
				</Container>
			</ScrollArea>
		</>
	);
}

export default WholePage;