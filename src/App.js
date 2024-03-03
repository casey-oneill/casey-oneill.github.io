import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

const theme = {
  dark: '#3F3C46',
  light: '#FFF5EA',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
