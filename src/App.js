import './App.scss';
import { DataProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <DataProvider>
      <HomeScreen/>
    </DataProvider>
  );
}

export default App;
