import {
	chakra,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Icon,
	Link,
	useBreakpointValue,
	useColorMode,
} from '@chakra-ui/react';
import { FaBuffer } from 'react-icons/fa';
import { RiMoonClearLine } from 'react-icons/ri';
import { FiSun } from 'react-icons/fi';

// Loading Bar Imports

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const navWidth = useBreakpointValue({
		base: '100%',
		lg: '90%',
	});

	return (
		<chakra.section>
			<Box height='6em' width='100%'>
				<Center>
					<Flex
						flexDirection='row'
						justifyContent='space-between'
						height='6em'
						width={navWidth}
					>
						<Flex
							flexDirection='row'
							as={Link}
							href='/'
						>
							<Icon boxSize='6em' as={FaBuffer} />
							<Center>
								<Heading>Jianna Wang</Heading>
							</Center>
						</Flex>
						<Center>
							<Flex mt={3}>
								<Button
									bg='transparent'
									as={Box}
									leftIcon={
										colorMode === 'light' ? (
											<FiSun />
										) : (
											<RiMoonClearLine />
										)
									}
									onClick={toggleColorMode}
								>
									{
										colorMode === 'light' ? (
											"Light Mode"
										) : (
											"Dark Mode"
										)
									}
								</Button>
								<Button
									bg='transparent'
									as={Link}
									href='/resume'
								>
									Résumé
								</Button>
								<Button
									bg='transparent'
									as={Link}
									href='/projects'
								>
									Projects
								</Button>
							</Flex>
						</Center>
					</Flex>
				</Center>
			</Box>{' '}
		</chakra.section>
	);
}
