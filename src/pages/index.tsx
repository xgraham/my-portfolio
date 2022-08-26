import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
  Box, Container, Heading
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => (
  <Box
    bg="gray.50"
    color="black"
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition="all 0.15s ease-out" minH={'100%'}>
    <DarkModeSwitch />
    <Box ml='15px' textAlign={'center'} w='75px' zIndex={5}

      position={{ base: 'absolute', lg: 'fixed' }}
      top={1}
      left={1}

    >
      <Image boxSize={{ base: '25px', lg: '75px' }} src='../logo.png' alt='xGraham Logo, created by Dall-E' />
    </Box>
    <Hero />
  </Box>
)

export default Index
