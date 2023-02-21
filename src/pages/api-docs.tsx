import { Layout } from '#components/Layout';
import { Title } from '#components/Title';
import { Table, Cell } from '#components/Table';
import { sites } from '#data/sites';
import { CustomLink } from '#components/CustomLink';

export default function APIDocsPage() {
	const baseUrl = `${sites.siteUrl}/api/cipher`;
	const fullUrl = `${baseUrl}?type=encipher&text=hello&keys=money`;

	return (
		<Layout
			title='API Docs'
			description='API documentation to use the cipher function in other apps'
			keywords={['cyphertext', 'aenjojo', 'classic cipher', 'cyphertext api docs']}
		>
			<Title value='API Documentation' />
			<article className='mx-auto p-2'>
				<p>This is the documentation about fetching the API to use the cipher function</p>
				<section className='mt-4'>
					<h2>Parameter:</h2>
					<Table>
						<thead>
							<tr>
								<Cell type='header'>Parameter</Cell>
								<Cell type='header'>Description</Cell>
								<Cell type='header'>Value Type</Cell>
								<Cell type='header'>Required?</Cell>
							</tr>
						</thead>
						<tbody>
							<tr>
								<Cell>type</Cell>
								<Cell>The type of cipher, either `encipher` or `decipher`</Cell>
								<Cell>`encipher` | `decipher`</Cell>
								<Cell>true</Cell>
							</tr>
							<tr>
								<Cell>text</Cell>
								<Cell>The text to be converted</Cell>
								<Cell>string</Cell>
								<Cell>true</Cell>
							</tr>
							<tr>
								<Cell>keys</Cell>
								<Cell>The key used to convert the text. For multiple keys, separate it with a comma (`,`)</Cell>
								<Cell>string | string[]</Cell>
								<Cell>true</Cell>
							</tr>
						</tbody>
					</Table>
				</section>
				<section className='mt-4'>
					<h2>Return:</h2>
					<Table>
						<thead>
							<tr>
								<Cell type='header'>Key</Cell>
								<Cell type='header'>Description</Cell>
								<Cell type='header'>Value Type</Cell>
							</tr>
						</thead>
						<tbody>
							<tr>
								<Cell>code</Cell>
								<Cell>The response code</Cell>
								<Cell>number</Cell>
							</tr>
							<tr>
								<Cell>message</Cell>
								<Cell>The response message</Cell>
								<Cell>string</Cell>
							</tr>
						</tbody>
					</Table>
					<p>Note: If success, the response message will contains the result of cipher. Otherwise, it will contains the reason of error</p>
				</section>
				<section className='mt-4'>
					<h2>Usage:</h2>
					<p>
						Base Path: {' '}
						<code className='bg-gray-200 p-1'>{baseUrl}</code>
					</p>
					<p>
						With Parameter: {' '}
						<code className='bg-gray-200 p-1'>{fullUrl}</code>
					</p>
					<p>
						Example: {' '}
						<CustomLink href={fullUrl} text='Encipher `hello`` with key of `money`' />
					</p>
				</section>
			</article>
		</Layout>
	)
}