import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { unregister } from './core'
import { Card, Content, Title } from './components'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sudoku</Title>
      <Card>Work in progress over here</Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();

unregister();
