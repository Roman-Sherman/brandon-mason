import '@mantine/core/styles.css';
import './global.css';

import { MantineProvider } from '@mantine/core';
import Router from './Router';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;