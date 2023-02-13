import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SEO, SEOProps } from './SEO';

type LayoutProps = {
	children: ReactNode | ReactNode[],
} & Pick<SEOProps, 'title' | 'description' | 'keywords'>;

export function Layout({ children, title, description, keywords }: LayoutProps) {
	const router = useRouter();

	return (
		<>
			<SEO
				title={title}
				description={description}
				keywords={keywords}
				pathUrl={router.pathname}
			/>
			<Header />
			<main className='container mx-auto'>
				{children}
			</main>
			<Footer />
		</>
	);
}