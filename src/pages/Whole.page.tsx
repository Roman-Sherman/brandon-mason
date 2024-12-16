import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container, MantineComponent, ScrollArea } from '@mantine/core';
import classes from './Whole.page.module.css';
import { useEffect, useState, useRef } from 'react';
import Projects from '@/components/Projects/Projects';
import AboutMe from '@/components/AboutMe/AboutMe';
import Resume from '@/components/Resume/Resume';
import { useElementSize, useHash, useViewportSize } from '@mantine/hooks';

//TODO: Scroll page to section of id in URI.
const WholePage: React.FC = () => {
    const [scroll, setScroll] = useState(false);
	const [selectedSection, setSelectedSection] = useState<React.MutableRefObject<any>>();
	const [hash, setHash] = useHash();
	const scrollareaRef = useRef<MantineComponent<any>>(null);
	// const headerRef = useRef<MantineComponent<any>>(null);
	const homeRef = useRef<MantineComponent<any>>(null);
	const aboutRef = useRef<MantineComponent<any>>(null);
	const projectRef = useRef<MantineComponent<any>>(null);
	const resumeRef = useRef<MantineComponent<any>>(null);
	const buttonRef = useRef<MantineComponent<any>>(null);
	const refObj = {
				"Home":homeRef, 
				"About":aboutRef, 
				"Projects":projectRef,
				"Resume":resumeRef,
			};
	const { height: vpHeight, width: vpWidth } = useViewportSize();
	const { ref, width: elementWidth, height: elementHeight } = useElementSize();

	const scrollIntoView = (ref: React.MutableRefObject<any>) => {
		if (ref.current && scrollareaRef.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	useEffect(() => {
		if(selectedSection) {
			scrollIntoView(selectedSection);
		}
	}, [selectedSection]);

	// Ensures that the section in the URL hash is scrolled to upon loading the page.
	useEffect(() => {
		let key: String = String(hash).charAt(1).toUpperCase() + hash.substring(2, hash.length);
		setSelectedSection(refObj[key as keyof typeof refObj])
	}, [hash]);

	return (
		<>
			<ScrollArea type="auto" scrollbarSize={8} ref={scrollareaRef} classNames={{
				root: classes.root,
				thumb: classes.thumb,
				scrollbar: classes.scrollbar,
			}} onScrollPositionChange={(position: { x: number; y: number }) => setScroll((position.y > 0) ? true : false)}>
				<Header ref={ref} scroll={scroll} refObj={refObj} setSelectedSection={setSelectedSection} setHash={setHash}/>
				<Container classNames={{root: classes.containerRoot}} miw={'90%'} pr={'10vw'}>
					<Home ref={refObj.Home} vpWidth={vpWidth} headerHeight={elementHeight} buttonRef={buttonRef} projectRef={refObj.Projects} setSelectedSection={setSelectedSection} setHash={setHash}/>
					<AboutMe ref={refObj.About} headerHeight={elementHeight}/>
					<Projects ref={refObj.Projects} headerHeight={elementHeight}/>
					<Resume ref={refObj.Resume} headerHeight={elementHeight}/>
				</Container>
			</ScrollArea>
		</>
	);
}

export default WholePage;