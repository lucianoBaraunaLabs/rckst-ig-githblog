import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GithubProvider } from './contexts/GithubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
