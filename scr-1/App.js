import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";

// IMPORT NAVIGATION
import Navigation from './Routes/Navigation/navigation.component';
import Home from './Routes/Home/home.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    

  </Routes>
  );
}

export default App;
