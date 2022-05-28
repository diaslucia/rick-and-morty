import { Routes, Route } from "react-router-dom";
import { DataProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/detail" element={<ItemScreen/>}/>
      </Routes>
    </DataProvider>
    
  );
}

export default App;
