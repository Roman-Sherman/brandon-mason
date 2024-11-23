import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { Container } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

const WholePage: React.FC = () => {
    const [scroll, scrollTo] = useWindowScroll();

	return (
		<>
			<Header scroll={ scroll }/>
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