import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DarkModeProvider } from './DarkModeContext'
import { DarkModeToggle } from './DarkModeToggle'
import { Landing } from './Landing'
import { Origin } from './Origin'
import { Experience } from './Experience'

export function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="app">
          <header className="header">
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/origin">Origin Story</Link>
              <DarkModeToggle />
            </nav>
          </header>
          
          <main className="main">
            <Routes>
              <Route path="/origin" element={<Origin />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/" element={<Landing />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  )
}
