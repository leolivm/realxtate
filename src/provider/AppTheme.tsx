import { ReactNode, useState, useEffect, createContext } from 'react'
import { ChakraProvider } from '@chakra-ui/provider'

import { theme as defaultTheme } from 'theme'

const AppThemeCtx = createContext<null>(null)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<typeof defaultTheme>()

  const overrideChakraTheme = () => {
    const theme = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors },
    }
    setTheme(theme)
  }

  useEffect(overrideChakraTheme, [])

  return theme ? (
    <AppThemeCtx.Provider value={null}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AppThemeCtx.Provider>
  ) : null
}
