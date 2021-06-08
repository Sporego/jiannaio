import Head from 'next/head';
import Navbar from '../components/Naxbar';
import ProjectCard from '../components/ProjectCard'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Jianna Wang</title>
			</Head>
			<Navbar />
            <ProjectCard/>
		</div>
	);
}
