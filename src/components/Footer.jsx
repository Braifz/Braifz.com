import React from 'react';
import { Box,  Text} from '@chakra-ui/react';




function Footer() {
  return (
    <Box bg="#e6e6ec" h="4rem" m="0px" border="1px solid #2D3748" borderBottomRadius='10px'
    boxShadow="5px 10px 18px #171923" display="flex" justifyContent="space-around" alignItems="center">
        <Text fontSize= '2rem' fontFamily='Satisfy'> Braifz </Text>
    </Box>
  )
}

export default Footer;