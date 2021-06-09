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
            <ProjectCard src="https://chart-studio.plotly.com/~Jiaxuan/11/?share_key=T9xUB2tUXXQzegFDtiM3LP#/"/>
			<ProjectCard src="https://plotly.com/~Jiaxuan/22/?share_key=hOA4Zw5Bte297dW3Dsw938"/>
		</div>
	);
}
