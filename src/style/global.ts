import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EDEDED;
    color: #005DA5;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
    
  body::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
  }
`
