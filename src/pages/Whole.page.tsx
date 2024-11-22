import Home from '../components/Home/Home';
import Header from '@/components/Header/Header';
import { theme } from '@/theme';


const WholePage: React.FC = () => {
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

export default WholePage;