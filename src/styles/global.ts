import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#F15156',
    secondary: '#0D3B66',
    tertiary: '#F4D35E',
    text: '#FFFFFF',
  },
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
