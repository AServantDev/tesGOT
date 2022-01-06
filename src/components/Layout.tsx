import React from "react";

import { Box, Heading, VStack } from "@chakra-ui/react";

// import { NavBar } from './NavBar';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <Box w="full" h="full" py={{ base: 5, sm: 4, "2xl": 8 }}>
      <VStack>
        <Heading as="h1" size="4xl">
          A site of ice and fire
        </Heading>
        {/* <NavBar /> */}
        {children}
      </VStack>
    </Box>
  );
};
