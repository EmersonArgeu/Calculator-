import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    -webkit-font-smoothing: antialiased;

}

body, input, textarea, button{
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    font-size: 1rem;

}
`
