import { Routes, Route } from "react-router-dom";
import { DataProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import Error from './screens/Error';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/detail" element={<ItemScreen/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </DataProvider>
    
  );
}

export default App;
