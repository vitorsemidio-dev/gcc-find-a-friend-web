import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'leaflet/dist/leaflet.css'

import { Router } from './routes'
import GlobalStyles, { theme } from './styles/global'
import { SearchPetsContextProvider } from './contexts/SearchPetsContext'

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
