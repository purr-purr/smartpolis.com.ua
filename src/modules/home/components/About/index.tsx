import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	COMPANY_ADDRESS,
	COMPANY_EDRPOU,
	COMPANY_EMAIL,
	COMPANY_PHONE, MOBILE_BREAKPOINT
} from "@utils/const";
import {useMediaQuery} from "@modules/common/hooks";

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<section id="about">
			{!isMobile && <BlockTitle title="Про компанію" />}

			<SplitBlocks
				title={`Про ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПОЛІС»`}
				titleType="text"
			>
				<p><b>Повне найменування:</b></p>
				<p>
					ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СТРАХОВИЙ БРОКЕР
					«СМАРТПОЛІС»
				</p>
				<p>
					<b>Скорочене найменування:</b>
				</p>
				<p>ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПОЛІС»</p>
				<p>
					<b>ЄДРПОУ: </b>
				</p>
				<p>{COMPANY_EDRPOU}</p>
				<p>
					<b>Місцезнаходження:</b>
				</p>
				<p>{COMPANY_ADDRESS}</p>
				<p>
					<b>Контактна інформація:</b>
				</p>
				<p>т. <a href={`tel:${COMPANY_PHONE}`} target="_blank" rel="noreferrer">{COMPANY_PHONE}</a></p>
				<p>Email: <a href={`mailto:${COMPANY_EMAIL}`} target="_blank" rel="noreferrer">{COMPANY_EMAIL}</a></p>
				<p>
					<b>Директор</b>
				</p>
				<p>ДРОЗД ОЛЕКСАНДР МИКОЛАЙОВИЧ</p>
				<br/>
				<a
					href="https://kis.bank.gov.ua/search-fu"
					target="_blank"
					rel="noreferrer"
				>
					Пошук у реєстрі страхових посередників
				</a>{' '}
				<br /> <br />
				<a
					href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
					target="_blank"
					rel="noreferrer"
				>
					Звернутись до Національного банку України
				</a>
				<br /> <br />
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
