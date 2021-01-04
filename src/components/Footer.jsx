import React from 'react';
import { Box, Link , Image } from '@chakra-ui/react';

import githubicon from '../img/github.png';
import linkedinicon from '../img/linkedin.png';

function Footer() {
  return (
    <Box bg="#2A4365" h="4rem" m="0px" border="1px solid #2D3748"
    boxShadow="5px 10px 18px #171923" display="flex" justifyContent="space-around" alignItems="center">
        <Link href="https://github.com/Braifz">
          <Image src={githubicon}/>
        </Link>
        <Link href="https://www.linkedin.com/in/braian-fernandez-ba90291a8/">
          <Image src={linkedinicon}/>
        </Link> 
    </Box>
  )
}

export default Footer;