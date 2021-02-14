import React, { useState } from 'react';
import {Grid, GridItem, Heading, Image, Box, Text, Link, Button} from '@chakra-ui/react';
import PictureMe from '../img/_6101159-2.jpg';
import '../styles/index.css'

import githubicon from '../img/github.png';
import linkedinicon from '../img/linkedin.png';
function App() {
  
  const Spanish = {
    greeting: '¡Hola!',
    aboutme: 'Soy  Braian, Desarrollador Web Front-end Jr',
    ilive: 'Vivo en Buenos Aires, Argentina',
    ilike: 'Me gustan los gatitos, tomar café y hacer acrobacias',
    techs: 'Las tecnologias que utilizo son Html, Css, Javascript, React, Chakra UI y Git',
    button: '🇺🇸'
  }
  
  const English = {
    greeting: 'Hi!',
    aboutme: 'Im Braian, Front-End dev Jr.',
    ilive: 'I live in Buenos Aires, Argentina',
    ilike: 'I like the cats, drink coffee and doing acrobatics',
    techs: 'Techs what i use are Html, Css , Javascript , React, Chakra UI and Git ',
    button: '🇦🇷 '
  }
  const [ Lenguage , setLenguage ] = useState(false);

  const changeLanguage = () => {
    setLenguage(!Lenguage)
    console.log(Lenguage)
  }

  let LenguageText ;
  if (Lenguage === true) {
    LenguageText = Spanish
  } else {
    LenguageText = English
  }

  
  return (
    <Box>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Grid 
        templateColumns='repeat(3, 1fr)' 
        templateRows='300px 300px 200px'
        gap={3}
        >
        <GridItem 
          colStart={1} 
          rowStart={2} 
          display='flex' 
          alignContent='center' 
          justifyContent='center'
        >
          <Image 
            src={PictureMe} 
            alt='braifz' 
            borderRadius="100%" 
            boxSize="300px" 
            boxShadow="5px 10px 18px #171923" 
          />
        </GridItem>
        <GridItem 
          colStart={2} 
          rowStart={1} 
          display='flex' 
          alignItems='flex-end'
          justifyContent='center'
        >
          <Heading 
            fontSize='70px' 
            m='0' 
            p='10px' 
            boxShadow="5px 10px 18px #171923" 
            borderRadius='10px'
          >
              {
                LenguageText.greeting
              }
          </Heading>
        </GridItem>
        <GridItem  
          colStart={2} 
          rowStart={2} 
          colSpan={3}  
          display='flex' 
          alignItems='center' 
        >
          <Text 
            fontSize='25px' 
            p='15px' 
            boxShadow="5px 10px 18px #171923" 
            borderRadius='25px'
          >    
            {LenguageText.aboutme} <br/>     
            {LenguageText.ilive}<br/>
            {LenguageText.ilike} <br/>   
            {LenguageText.techs}

          </Text>
        </GridItem>
        <GridItem 
          colStart={2} 
          rowStart={3} 
          display='flex' 
          alignItems='center' 
          justifyContent='center'
        >
          <Link 
            href="https://github.com/Braifz"
          >
            <Image 
              src={githubicon} 
              boxSize='40px' 
              m='40px'
            />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/braian-fernandez-ba90291a8/"
          >
            <Image 
              src={linkedinicon}  
              boxSize='40px' 
              m='40px'
            />
          </Link> 
        </GridItem>
        <GridItem 
          colStart={3}
          rowStart={1}
          display='flex'
          alignItems='center'
          justifyContent='center'

        >
          <Button 
          onClick={changeLanguage} 
          borderRadius='100%'
          variant='ghost'
          border='none'
          cursor='pointer'
          _hover= {{boxShadow: "5px 10px 18px #171923" }}
          >
            {LenguageText.button}
          </Button>
        </GridItem>
      </Grid>  
  </Box>
  );
}

export default App;
