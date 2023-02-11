import { CustomLink } from './CustomLink';

export function Footer() {
	return (
		<footer>
			<section className='container mx-auto p-2 flex flex-col justify-center'>
				<div className='mx-auto p-2'>
					<ul className='flex flex-col lg:flex-row items-center lg:justify-center lg:gap-4'>
						<li>
							<CustomLink href='/' text='Home' />
						</li>
						<li>
							<CustomLink href='/about' text='About' />
						</li>
						<li>
							<CustomLink href='https://github.com/aenjojo/cyphertext' text='GitHub' />
						</li>
						<li>
							<CustomLink href='/api-docs' text='API Docs' />
						</li>
					</ul>
				</div>
				<div className='text-center mt-2 p-2'>
					<p>Created by AenJojo</p>
					<p>Built with <CustomLink href='https://nextjs.org' text='Next.js' /></p>
					<p>Deployed with <CustomLink href='https://vercel.com' text='Vercel' /></p>
				</div>
			</section>
		</footer>
	);
}