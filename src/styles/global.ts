import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#F15156',
    secondary: '#0D3B66',
    tertiary: '#F4D35E',
    text: '#FFFFFF',
    bgColor: '#FDECED',
    bgCard: '#FFFFFF',
    border: '#D3E2E5',
    danger: '#F15156',
    success: '#3CDC8C',
    gray: '#8FA7b2',
  },
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.bgColor};
    color: ${theme.colors.text};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
