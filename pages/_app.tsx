// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react';

// Next.js TSX Support
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
