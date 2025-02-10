import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import UserDashboard from './pages/UserDashboard';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header ist auf jeder Seite sichtbar */}
        <Header />
        <main>
          <Routes>
            {/* Öffentliche Route für Login */}
            <Route path="/" element={<LoginForm />} />

            {/* Geschützte Routen */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<UserDashboard />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
