import React from 'react';
import {Flex, Heading, Image, Box} from '@chakra-ui/react';
import Picture from '../img/me.jpg';

function App() {
  return (
    
    <Box display="flex"
    flexDir="column"
    justifyContent="center" alignItems="center"
    minH="870px"
    bg="#718096"
    >
      <Flex
      bg="#2A4365"
      w="40%"
      h="500px"
      p="1rem"
      flexDir="column"
      justify="center"
      alignItems="center"
      border="1px solid #2D3748"
      boxShadow="5px 10px 18px #171923"
      borderRadius="8px">
        <Heading as="h1" size="4xl" textAlign="center" color="#fafafa">
          Hola!
        </Heading>
        <Heading as="h2" size="2xl" textAlign="center" color="#fafafa" borderBottom="1px solid #fafafa">
          Bienvenido a mi pagina Web! (en construcción)
        </Heading>
        <Heading as="h2" size="2xl" textAlign="center" color="#fafafa">
          Mi nombre es Braian Fernandez 😃
        </Heading>
        <Heading as="h2" size="2xl" textAlign="center" color="#fafafa">
          Soy desarrollador Front-End Jr.
        </Heading>
        <Image
        boxSize="150px"
        objectFit="cover"
        src={Picture}
        borderRadius="20px"
        alt="braifz"
        />

      </Flex>
    </Box>
  );
}

export default App;
