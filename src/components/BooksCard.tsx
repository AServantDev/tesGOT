import React from "react";

import { Box, Heading, Flex, Text, Spacer, Link } from "@chakra-ui/react";
interface Props {
  url: string;
  name: string;
  authors: string[];
}

export const BooksCard = ({ name, url, authors }: Props): JSX.Element => {
  return (
    <Box
      w="sm"
      borderWidth="2px"
      borderRadius="lg"
      bg="gray.700"
      overflow="hidden"
      marginBottom="2em"
    >
      <Box p={4}>
        <Flex direction="column">
          <Link href={`/book/${name}`}>{name}</Link>
          {/* <Heading to={`/book/${url}`}>{name}</Heading> */}
          <Spacer />
          <Text>of: {authors}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
