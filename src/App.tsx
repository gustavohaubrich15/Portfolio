import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/RoutesApp';
import { Container } from './shared/component/container/Container';
import { DarkModeProvider } from './shared/context/darkModeContext';


export const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Container>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </Container>
    </DarkModeProvider>
  );
}

export default App;
