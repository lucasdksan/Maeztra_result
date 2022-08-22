import Home from "./pages/Home";
import GlobalStyles from './styles/GlobalStyles';
import { ConfirmedProvider } from './contexts/ConfirmedBuy';

function App() {
  return (
    <>
      <GlobalStyles />
      <ConfirmedProvider>
        <Home />
      </ConfirmedProvider>
    </>
  )
}

export default App
