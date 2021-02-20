import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      bg='#e6e6ec'
      h='4rem'
      m='0px'
      border='1px solid #2D3748'
      borderBottomRadius='10px'
      boxShadow='5px 10px 18px #171923'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
    >
      <Text fontSize='2rem' fontFamily='Satisfy'>
        {' '}
        Braifz{' '}
      </Text>
      <Text fontSize='15px'>Español/English</Text>
      <Button
        onClick={changeLanguage}
        borderRadius='100%'
        variant='ghost'
        border='none'
        cursor='pointer'
        _hover={{ boxShadow: '5px 10px 18px #171923' }}
        transition='0.5s'
      >
        <Image
          src={LenguageText.button}
          alt='imgbutton'
          boxSize='50px'
          borderRadius='100%'
        />
      </Button>
    </Box>
  );
}

export default Footer;
