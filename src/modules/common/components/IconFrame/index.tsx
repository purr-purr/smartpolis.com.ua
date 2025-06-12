import { FC } from 'react';
import Image from 'next/image';

import s from './IconFrame.module.scss';

const IconFrame: FC<{
	icon: string;
}> = ({ icon }) => {
	return (
			<Image className={s.container} src={icon} alt="icon" />
	);
};

export default IconFrame;
