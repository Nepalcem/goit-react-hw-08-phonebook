import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 79px,
      #abced4 79px,
      #abced4 81px,
      rgba(0, 0, 0, 0) 81px
    ),
    linear-gradient(#eee 0.1em, rgba(0, 0, 0, 0) 0.1em);
  background-position: 0 0;
  background-repeat: repeat;
  background-size: 100% 53.39px;
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  display: flex;
  justify-content: center;
}

p,
ul {
  margin: 0;
  padding: 0;
}
`;
