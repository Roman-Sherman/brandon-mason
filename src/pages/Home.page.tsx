import Welcome from '../components/Welcome/Welcome';
import Header from '@/components/Header/Header';
import { theme } from '@/theme';


const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<Welcome />
		</>
	);
}

export default HomePage;