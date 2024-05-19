import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <div className='app-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
