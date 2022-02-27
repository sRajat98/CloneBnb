import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html {
    font-size:62.5%;
    }

body {
    font: 400 13.3333px Arial;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    -webkit-font-smoothing: antialiased;
    }
`;

export default GlobalStyles;
