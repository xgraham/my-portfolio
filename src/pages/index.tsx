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
    <Box ml='15px' textAlign={'center'} w='75px' zIndex={1}
      position="fixed"
      top={2}
      left={3}
      minH='100%'

    >
      <Image boxSize={'75px'} src='../logo.png' alt='xGraham Logo, created by Dall-E' />
    </Box>
    <Hero />
    <DarkModeSwitch />
  </Box>
)

export default Index
