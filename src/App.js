import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import News from './components/News'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [mode, setMode] = useState('light')
  const [modeBtn, setModeBtn] = useState('Enable Dark Mode')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setModeBtn('Enable Light Mode')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setModeBtn('Enable Dark Mode')
    }
  }

  const pageSize = 8
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} modeBtn={modeBtn} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About apiKey={apiKey} mode={mode} />}
          />
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="Home"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
      <Footer mode={mode} />
    </div>
  )
}

export default App
