import {
  Heading, Stack, Text,
  Button, Box, Grid, GridItem, Tabs, TabList, TabPanels, Tab, TabPanel, List, ListIcon, ListItem, Link as ChakraLink, Divider,
  Avatar,
  Center,
  Link,
  Badge,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'

import { SettingsIcon, CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'

const Hello = () => {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      as={Box}
      textAlign={{ base: 'center', lg: 'left' }}
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      spacing={0}
    >
      <Heading fontSize="4.5vw">Hello there 👋</Heading>
      <Text fontSize={{ base: '2vw', lg: '1.3vw' }}>My name is Alex Graham, I'm a growing full stack developer based in Fairfax, Virginia.</Text>
      <Text fontSize={{ base: '2vw', lg: '1.3vw' }}>While I am skilled in full stack development, I've grown fond of developing responsive websites.
        I love the fact that browsers allow modern applications to be accessible and fully featured.</Text>
      <Text fontSize={{ base: '2vw', lg: '1.3vw' }}> On this site, I share my coding journey and experiences.</Text>
    </Stack>)


}

export const Hero = () => {

  const [tabIndex, setTabIndex] = React.useState(0)

  const [header, setHeader] = React.useState(false)

  const listenScrollEvent = (event) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 600) {
      return setHeader(true)
    } else {
      return setHeader(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  const handleTabsChange = (index) => {
    setTabIndex(index)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  const Projects = () => {

    return (
      <Stack as={Box} textAlign={{ base: 'center', lg: 'left' }}
        bgGradient={{ lg: "linear(to-l, heroGradientEnd, heroGradientStart)", base: "linear(to-l, heroGradientStart, heroGradientEnd)" }}
        bgClip="text"

      >
        <Heading fontSize="4.5vw">My Projects:</Heading>
        <Box borderLeftWidth={'2px'} borderRightWidth={{ base: '2px', lg: '0px' }} borderColor={'heroGradientStart'}
          style={{ borderStyle: 'solid', borderImage: "linear-gradient(to bottom, var(--chakra-colors-heroGradientStart), var(--chakra-colors-heroGradientEnd)) 1 100%" }}  >
          <List spacing={2} ml='5px'>
            <ListItem><ListIcon as={CheckCircleIcon} color='heroGradientStart' />
              <Button variant={'link'} color='heroGradientStart' fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(0) }} size={{ base: 'sm', lg: 'sm' }}>
                GMX Dashboard</Button>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='heroGradientStart' />
              <Button variant={'link'} color='heroGradientStart' fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(1) }} size={{ base: 'sm', lg: 'sm' }}>
                Sentencer
              </Button>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='heroGradientStart' />
              <Button variant={'link'} color='heroGradientStart' fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(2) }} size={{ base: 'sm', lg: 'sm' }}>
                LYF-Lines
              </Button>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='heroGradientStart' />
              <Button variant={'link'} color='heroGradientStart' fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(3) }} size={{ base: 'sm', lg: 'sm' }}>
                Ms. McNulty's Guess Real?
              </Button>
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color='heroGradientEnd' />
              <Button variant={'link'} fontSize={{ base: '2vw', lg: '1.3vw' }} color='heroGradientEnd' size={{ base: 'md', lg: 'sm' }}>
                And I'm just getting started!
              </Button>
            </ListItem>
          </List>
        </Box>
      </Stack >
    )
  }

  const ProjectHeader = ({ visible }) => {
    return <Box h='50px' textAlign={'center'} >
      {visible &&
        <HStack justifyContent={'space-evenly'} pt='25px' >
          <Button size={{ base: 'sm', lg: 'sm' }} variant={'link'} transition={'color 1.5s ease;'} color={tabIndex == 0 ? 'heroGradientStart' : 'heroGradientEnd'} fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(0) }} >
            GMX Dash
          </Button>
          <Button size={{ base: 'sm', lg: 'sm' }} variant={'link'} transition={'color 1.5s ease;'} color={tabIndex == 1 ? 'heroGradientStart' : 'heroGradientEnd'} fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(1) }} >
            Sentencer
          </Button>
          <Button size={{ base: 'sm', lg: 'sm' }} variant={'link'} transition={'color 1.5s ease;'} color={tabIndex == 2 ? 'heroGradientStart' : 'heroGradientEnd'} fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(2) }} >
            LYF-Lines
          </Button>
          <Button size={{ base: 'sm', lg: 'sm' }} variant={'link'} transition={'color 1.5s ease;'} color={tabIndex == 3 ? 'heroGradientStart' : 'heroGradientEnd'} fontSize={{ base: '1vw', lg: '1.3vw' }} onClick={() => { handleTabsChange(3) }} >
            Guess Real?
          </Button>

        </HStack>
      }
    </Box >
  }

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={3} pt={{ base: '15vh' }} minH={'100vh'} mx={{ base: '15px', lg: '115px' }} >
      <GridItem colSpan={{ base: 5, lg: 3 }} h={{ base: '33vh', lg: '75vh' }} mt={{ base: '15vh', lg: '15vh' }}> <Hello /> </GridItem>
      <GridItem colSpan={{ base: 5, lg: 2 }} mt={{ base: 0, lg: '15vh' }} ><Projects /> </GridItem>
      <GridItem colSpan={{ base: 5, lg: 5 }} >
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <ProjectHeader visible={header} />
          <TabList justifyItems={'center'} >
            <Tab w='25vw' borderBottomWidth='5px' _selected={{ borderColor: 'var(--chakra-colors-heroGradientStart)', }}
              borderColor="var(--chakra-colors-heroGradientEnd)" transition={'border-color 1.5s ease;'}
            ></Tab>
            <Tab w='25vw' borderBottomWidth='5px' _selected={{ borderColor: 'var(--chakra-colors-heroGradientStart)', }}
              borderColor="var(--chakra-colors-heroGradientEnd)" transition={'border-color 1.5s ease;'}
            ></Tab>
            <Tab w='25vw' borderBottomWidth='5px' _selected={{ borderColor: 'var(--chakra-colors-heroGradientStart)', }}
              borderColor="var(--chakra-colors-heroGradientEnd)" transition={'border-color 1.5s ease;'}
            ></Tab>
            <Tab w='25vw' borderBottomWidth='5px' _selected={{ borderColor: 'var(--chakra-colors-heroGradientStart)', }}
              borderColor="var(--chakra-colors-heroGradientEnd)" transition={'border-color 1.5s ease-out;'}
            ></Tab>
          </TabList>
          <TabPanels minH={'66vh'} >
            <TabPanel>
              <ProjectCard title={'GMX Dashboard'} />


            </TabPanel>
            <TabPanel>
              <ProjectCard title={'Sentencer'} />
            </TabPanel>
            <TabPanel>
              <ProjectCard title={'LYF-Lines'} />
            </TabPanel>
            <TabPanel>
              <ProjectCard title={'Guess Real?'} />
            </TabPanel>
          </TabPanels>

        </Tabs> </GridItem>
    </Grid>
  )
}



type ProjectCardProps = {
  title: string,
  description?: string,
  image?: string,
  link?: string,
  repo?: string,
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, image, link, repo } = props
  return (
    <Center w={'85vw'} py={6} bg={useColorModeValue('gray.50', 'gray.900')} pr={{ base: 0, lg: '45px' }} >
      <Box
        minH={{ base: '85vh', lg: '85vh' }}
        w={'100vw'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4} justifyContent='right'>
          <Button>
            Github
          </Button>
          <Button>
            Visit
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}
