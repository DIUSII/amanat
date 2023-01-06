import './AppStyles';

import AppRouter from './router/AppRouter';
import GlobalStyles from './assets/styles/globalStyles';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
