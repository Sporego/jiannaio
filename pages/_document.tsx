import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' type='image/svg+xml' href='favicon.svg' />
					<link rel='icon' type='image/png' href='favicon.png' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
