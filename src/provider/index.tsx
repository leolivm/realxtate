import { FC, ReactNode } from 'react'

import * as P from './contexts'
import { ProviderComposer } from './ProviderComposer'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ProviderComposer with={[P.AppThemeProvider]}>{children}</ProviderComposer>
)
