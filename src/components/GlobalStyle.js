import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        overscroll-behavior-y: none;
    }

    body {
        font-family: 'Nunito', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }

    h3 {
        font-size: 1.3rem;
        padding: 1.5rem 0rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #969696;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    input {
        font-family: 'Nunito', sans-serif;
    }
`;

export default GlobalStyle;
