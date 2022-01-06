import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { HStack, Icon, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { Books } from "./Books";

interface Props {
  name: string;
  characters: string[];
}

interface Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  breakpointsdied: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povbooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export const Book = (): JSX.Element => {
  const [book, setBook] = useState();
  const get = useLocation().pathname.split("/")[2];
  const name = get.replace(/%20/g, " ");
  const baseUrl = "https://www.anapioficeandfire.com/api/";
  const displaychar = () => {
    return characters.map((character) => {
      return (
        <Text>
          {character.name} alias: {character.aliases}
        </Text>
      );
    });
  };

  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    axios.get(baseUrl + `books?name=${name}`).then((response) => {
      setBook(response.data);
    });
  }, [name]);

  console.log(name);

  useEffect(() => {
    axios.get(baseUrl + `characters?book=${name}`).then((response) => {
      setCharacters(response.data);
    });
  }, [name]);
  console.log(characters);

  return (
    <HStack w="100%" fontSize={{ base: "12px", md: "15px", lg: "26px" }}>
      <VStack mb="0.5" align="left">
        <VStack>
          <Text>Characters in the book: {name}</Text>
          <Text>{displaychar()}</Text>
        </VStack>
      </VStack>
    </HStack>
  );
};
