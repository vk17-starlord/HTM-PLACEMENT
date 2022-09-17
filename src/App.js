
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import CompanyProfile from './pages/CompanyProfile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
