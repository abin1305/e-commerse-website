import React from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../Components/Addproduct.jsx'
import Listproduct from '../Components/Listproduct.jsx'
const admin = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
        </Routes>

      
    </div>
  )
}

export default admin