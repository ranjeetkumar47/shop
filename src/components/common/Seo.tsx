import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
	title: string;
}

export const Seo: FC<SeoProps> = (props) => {
	const { title } = props;

	const fullTitle = title ? `${title} - My Store` : 'My Store';

	return (
		<Helmet>
			<title>{fullTitle}</title>
		</Helmet>
	);
};
