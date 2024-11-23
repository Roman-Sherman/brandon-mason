import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container } from '@mantine/core';
import React, { useState, useEffect } from 'react';

const WholePage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = (e: Event): void => {
			const { scrollingElement } = e.target as Document;
			if(scrollingElement !== null)
				if (scrollingElement.scrollTop === 0) 
					setScrolled(false);
				else 
					setScrolled(true);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header scrolled={scrolled} />
			<Container className='main'>
				<Home />
				<Home />
				<Home />
				<Home />
				<Home />
			</Container>
		</>
	);
}

export default WholePage;