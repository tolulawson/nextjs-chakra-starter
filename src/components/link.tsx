import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, {
  LinkProps as NextLinkProps,
} from 'next/link';

type LinkProps = NextLinkProps & ChakraLinkProps;

const Link = ({
  href,
  isExternal,
  children,
  as,
}: LinkProps) => (
  <NextLink href={href} as={as} passHref>
    <ChakraLink isExternal={isExternal}>{children}</ChakraLink>
  </NextLink>
);

export default Link;
