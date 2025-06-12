import About from '@modules/home/components/About';
import Contacts from '@modules/home/components/Contacts';
import FinancialServices from '@modules/home/components/FinancialServices';
import Intro from '@modules/home/components/Intro';
import Reports from '@modules/home/components/Reports';

const Home = () => {
	return (
		<>
			<Intro />

			<About>
				<FinancialServices />
			</About>

			<Reports />
			<Contacts />
		</>
	);
};

export default Home;
