import{
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'


import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import RecipiesPage from "./Pages/RecipiesPage";
import SettingPage from "./Pages/SettingPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className ="container main">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/recipies" element={<RecipiesPage/>} />
          <Route path="/settings" element={<SettingPage/>} />

        </Routes>
       
      </div>
      <Footer/>

    </Router>
    
  );
}

export default App;
