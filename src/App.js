import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import DashBoard from './pages/DashBoard';
import JobDetail from './pages/JobDetail';
import ProfilePage from './pages/ProfilePage'
import CompanyProfile from './pages/CompanyProfile';
import { useAuth } from './hooks/Auth';
import Protected from './utils/Protected';
import Header from './components/Header';
function App() {
  const {validUser} = useAuth();
  return (
    <div className="App ">
      
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Protected isLoggedIn={validUser()}>
 <DashBoard />
 </Protected>} />
        <Route path='/Job/:jobid' element={<JobDetail/>}/>
        <Route path='/student/:id' element={<ProfilePage />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
      </Routes>
  
    </div>
  );
}

export default App;
