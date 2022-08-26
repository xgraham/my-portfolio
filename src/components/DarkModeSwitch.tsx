import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      size={{ base: 'xxs', lg: 'md' }}
      position={{ base: 'absolute', lg: 'fixed' }}
      top={5}
      right={5}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="blue"
      onClick={toggleColorMode}
    />
  )
}
