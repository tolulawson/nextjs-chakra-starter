import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from '../link';
import ThemeToggle from './themeToggle';

const Header = () => (
  <Flex as='header' width='full' align='center'>
    <Link href='/'>
      <Heading as='h1' size='md'>
        Next-Chakra Starter
      </Heading>
    </Link>

    <Box marginLeft='auto'>
      <ThemeToggle />
    </Box>
  </Flex>
);

export default Header;
