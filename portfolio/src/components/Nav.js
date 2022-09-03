import React, { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  useColorMode,
  Box
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (

      <Flex flexDirection={"column"} width="full">
        <Flex
      >
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

      </Flex>
    
    <Flex justifyContent={"center"} flexDirection="column" mt="5">
        <Text fontSize={"7xl"} fontWeight="bold" mt="3" textAlign={"center"} mb="0" pb="0" lineHeight={"80px"}>
            Trevor Zou
        </Text>
    </Flex>
    <Flex my="9" justifyContent={"center"}>
        <Text textColor={"gray.500"} fontWeight="bold" fontSize={"2xl"}>
           Full-Stack Software Engineer
        </Text>
    </Flex>
    <Flex justifyContent={"space-around"} mt="5"  py="2" mx="2" borderBottom={"4px solid black"} fontSize="2xl">
        <Text className='hoverable' px="5">
            Portfolio
        </Text>
        <Text className='hoverable' px="5">
            About
        </Text>
        <Text className='hoverable' px="5">
            Resume
        </Text>
        <Text className='hoverable' px="5">
            Contact
        </Text>

    </Flex>

    <Flex  textColor="white" justifyContent={"space-around"} mt="8">
        <Box p="2" className='hoverable'>
            <FaGithub  fontSize={"40px"} color={colorMode === 'light'? 
            "black" : "white"}/>
        </Box>

        <Box p="2" className='hoverable'>
            <FaLinkedin fontSize={"40px"} color={colorMode === 'light'? 
            "black" : "white"}/>
        </Box>
    </Flex>
    </Flex>
      
  );
};

export default Nav;