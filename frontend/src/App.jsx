import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css'
import {WelcomePage} from "./pages/WelcomePage/WelcomePage.jsx";

function App() {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  return (
      <>
        <Router>
            <Routes>
              <Route
                  path="/"
                  element={
                    <WelcomePage />
                  }
              />
              <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Router>
      </>
  )
}

export default App
