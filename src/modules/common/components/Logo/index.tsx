import { FC } from 'react';
import Link from 'next/link';

import {
	COMPANY_NAME,
	COMPANY_SHORT_NAME,
	MOBILE_BREAKPOINT
} from '@utils/const';

import s from './Logo.module.scss';
import {useMediaQuery} from "@modules/common/hooks";

const Logo: FC = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<Link href="/" className={s.container}>
			{COMPANY_NAME[0]}
			<span>{isMobile ? COMPANY_SHORT_NAME[1] :COMPANY_NAME[1]}</span>
		</Link>
	);
};

export default Logo;
