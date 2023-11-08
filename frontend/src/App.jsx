import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SecondSignupPage from './pages/SecondSignupPage'
import ThirdSignupPage from './pages/ThirdSignupPage'
import SuccessSignupPage from './pages/SuccessSignupPage'
import TeacherDashboard from './pages/TeacherDashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-2" element={<SecondSignupPage />} />
        <Route path="/signup-3" element={<ThirdSignupPage />} />
        <Route path="/signup-successful" element={<SuccessSignupPage />} />
        <Route path="/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
