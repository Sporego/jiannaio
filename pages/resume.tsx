import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../components/Naxbar';

export default function Home() {
	const PDFJS = dynamic(
		() => {
			return import('../components/Resume');
		},
		{ ssr: false }
	);
	return (
		<div>
			<Head>
				<title>Jianna Wang | Resume</title>
			</Head>
			<Navbar />
			<PDFJS />
		</div>
	);
}
