import './App.scss';
import { DataProvider } from './context/AppContext';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import Header from './components/Header/Header';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/detail" element={<ItemScreen/>}/>
      </Routes>
    </DataProvider>
    
  );
}

export default App;
