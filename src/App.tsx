import CrewPage from 'pages/Crew';
import DestinationPage from 'pages/Destination';
import HomePage from 'pages/Home';
import TechnologyPage from 'pages/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Main, theme } from 'styles/GlobalStyle';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/crew' element={<CrewPage />} />
            <Route path='/destination' element={<DestinationPage />} />
            <Route path='/technology' element={<TechnologyPage />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
