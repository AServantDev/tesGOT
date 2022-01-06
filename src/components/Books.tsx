import { Flex, Heading, VStack, Button } from "@chakra-ui/react";

import { BooksCard } from "./BooksCard";
import { useBooks } from "./context/GOTContext";
export const Books = (): JSX.Element => {
  const books = useBooks();

  const displayBooks = () => {
    return books?.map((book) => {
      return (
        <BooksCard
          key={book.name}
          url={book.url}
          name={book.name}
          authors={book.authors}
        />
      );
    });
  };

  return (
    <VStack w="full">
      <Heading as="h2" size="xl">
        Découvrez nos livres
      </Heading>
      <Flex justify="space-around" w="full" wrap="wrap">
        {displayBooks()}
      </Flex>
      <Button>More</Button>
    </VStack>
  );
};
