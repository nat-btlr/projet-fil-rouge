import RoutesConfig from './Routes';
import useAutoLogout from './components/AutoLogout/AutoLogout';
import './App.css'

function App() {
  useAutoLogout();
  return (
    <>
      <RoutesConfig />
    </>
  );
}

export default App;
