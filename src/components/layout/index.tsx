import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Meta from './meta';
import Header from './header';

type LayoutProps = {
  title: string;
  children: ReactNode;
  [x:string]: any;
};

const Layout = ({ title, children, ...rest }: LayoutProps) => (
  <Box margin='0 auto' maxWidth='4xl' marginY={8} {...rest}>
    <Meta title={title} />
    <Header />
    <Box as='main'>
      {children}
    </Box>
  </Box>
);

export default Layout;
