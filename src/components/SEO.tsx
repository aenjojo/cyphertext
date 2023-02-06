import Head from 'next/head';
import { sites } from '#data/sites';

export type SEOProps = {
	title: string,
	description: string,
	keywords: string[],
	pathUrl: string,
}

export function SEO({ title, description, keywords, pathUrl }: SEOProps) {
	const { siteName, siteUrl } = sites;
	const pageUrl = `${siteUrl}${pathUrl}`;

	return (
		<Head>
			<title>{`${title} | ${siteName}`}</title>

			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='theme-color' content='#000000' />

			<meta name='author' content='Josua Fernando' />
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords.join(',').toLowerCase()} />

			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:url' content={pageUrl} />
			<meta property='og:description' content={description} />
			<meta property='og:site_name' content={'Aen Jojo\'s Personal Website'} />

			<meta property='twitter:card' content='summary' />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:url' content={pageUrl} />

			<link rel='icon' type='image/png' href='/favicon.png' />
			<link rel='canonical' href={pageUrl} />
		</Head>
	);
}