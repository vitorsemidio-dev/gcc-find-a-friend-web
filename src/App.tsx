import 'leaflet/dist/leaflet.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { SearchPetsContextProvider } from '@/contexts/SearchPetsContext'
import { Router } from '@/routes'
import GlobalStyles, { theme } from '@/styles/global'

function App() {
  return (
    <SearchPetsContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </SearchPetsContextProvider>
  )
}

export default App
