import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { getApps } from './utils/helper'

function App() {
  const CurrentApp = getApps();
  return (
    <>
      <Router>
        <CurrentApp />
      </Router>
    </>
  )
}

export default App