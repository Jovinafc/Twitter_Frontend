import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div className='grid grid-cols-6 h-screen'>
      <Header />
        <div className='col-span-5 bg-secondternary flex flex-col items-center' >
          <Outlet />
        </div>
    </div>
  )
}

export default LayoutPage