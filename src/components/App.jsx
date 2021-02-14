import React from 'react';
import {Grid, GridItem, Heading, Image, Box, Text} from '@chakra-ui/react';
import PictureMe from '../img/_6101159-2.jpg';
import '../styles/index.css'
function App() {
  return (
    <Box>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Grid 
      templateColumns='repeat(3, 1fr)' 
      templateRows='200px 300px 100px'
      gap={3}
      >
        <GridItem colStart={1} rowStart={2} display='flex' alignContent='center' justifyContent='center'>
          <Image src={PictureMe} alt='braifz' borderRadius="100%" boxSize="300px" boxShadow="5px 10px 18px #171923" />
        </GridItem>
        <GridItem colStart={2} rowStart={1} colSpan={3}
        display='flex' 
        alignItems='flex-end'
        justifyContent='center'>
          <Heading fontSize='70px' m='0' p='10px' borderBottom='2px solid black'boxShadow="5px 10px 18px #171923" borderRadius='25px'
          >Hola!</Heading>
        </GridItem>
        <GridItem  colStart={2} rowStart={2} colSpan={3}  display='flex' alignItems='center' >
          <Text fontSize='25px' p='15px' boxShadow="5px 10px 18px #171923" borderRadius='25px'>    Soy  Braian, Desarrollador Web Front-end Jr <br/>     Vivo en Buenos Aires, Argentina <br/>
          Me Gustan los gatitos, tomar café y hacer acrobacias <br/>   
          Las tecnologias que utilizo son Html, Css, Javascript, React, Chakra UI y Git <br/>
          

          </Text>
        </GridItem>
        <GridItem />
      </Grid>  
  </Box>
  );
}

export default App;
