import { Layout } from '#components/Layout';
import { Title } from '#components/Title';

export default function AboutPage() {
	return (
		<Layout
			title='About'
			description='Short information about this project'
			keywords={['cyphertext', 'aenjojo', 'classic cipher', 'cyphertext info']}
		>
			<Title value='About This Project' />
			<article className='p-2'>
				<section className='my-4 border-2 border-black shadow-brutalism p-2 bg-gray-200 w-full lg:w-1/2 mx-auto'>
					<p className='mb-4'>
						This project was built after I decided to build a simple website
						to run a simple program I made about a classical cipher method.
					</p>
					<p className='mb-4'>
						I do not know what is the name of the cipher method.
						But, it is some kind of monoalphabetical and shifted letter just like caesar cipher.
						The main difference is how this letter sequence shifted
						by placing unique letters from the key to the beginning of the sequence.
					</p>
					<p>This website itself uses Next.js to build and Tailwind CSS to style.</p>
				</section>
			</article>
		</Layout>
	);
}
