import { StoreProvider } from './context/store-provider';

import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Main />
    </StoreProvider>
  );
};
