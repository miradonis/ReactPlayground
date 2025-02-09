import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import UserDashboard from './pages/UserDashboard';
import './App.css';

function App() {
  return (
    <>
      {/* header ist auf jeder seite sichtbar */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
