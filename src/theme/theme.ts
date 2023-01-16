import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { colors } from './colors'
import { fonts } from './fonts'
import { global } from './global'
import { sizes } from './sizes'

export const theme = extendTheme({
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536',
  },
  config,
  colors,
  fonts,
  sizes,
  styles: {
    global,
  },
})
