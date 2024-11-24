import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container, ScrollArea } from '@mantine/core';
import { useEventListener, useWindowScroll } from '@mantine/hooks';
import classes from './Whole.page.module.css';
import { useCallback, useState } from 'react';

const WholePage: React.FC = () => {
    const [scroll, setScroll] = useState(false);

	return (
		<>
			<ScrollArea type="auto" scrollbarSize={8} classNames={{
				root: classes.scrollbar,
				thumb: classes.thumb,
			}} onScrollPositionChange={(position: { x: number; y: number }) => setScroll((position.y > 0) ? true : false)}>
				<Header scroll={ scroll }/>
				<Container className='main'>
                	<div className='filler' style={{ height: '75px', width: '100px', }}></div>
					<Home />
					<Home />
					<Home />
					<Home />
					<Home />
				</Container>
			</ScrollArea>
		</>
	);
}

export default WholePage;