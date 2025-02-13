import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Home/Dashboard'
import Profile from './Home/Profile'
import UserDashboard from './UserInterface/UserDashboard'
import UserAccount from './UserInterface/UserAccount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Dashboard></Dashboard>
    </>
  )
}

export default App
