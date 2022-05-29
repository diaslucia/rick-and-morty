import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/AppContext";
import HomeScreen from "./screens/HomeScreen";
import ItemScreen from "./screens/ItemScreen";
import ErrorScreen from "./screens/ErrorScreen";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/rick-and-morty" element={<HomeScreen />} />
        <Route path="/detail" element={<ItemScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
