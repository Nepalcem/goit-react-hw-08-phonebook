import { createGlobalStyle } from 'styled-components';
import bgImage from '../components/media/images/notebook_paper.jpg';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;

    background: url(${bgImage});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box; */
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
