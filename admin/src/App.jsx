import React from 'react'
import Navbar from './Components/navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Admin from './pages/admin.jsx'
const App = () => {
  return (
    <div className='bg-[#f6f6f6] h-[100vh]'>
      <Navbar/>
      <Admin/>

    </div>
  )
}

export default App