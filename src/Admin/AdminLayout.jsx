import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideNavig from '../Component/SideBar'
import TopNavig from '../Component/Navbar'
import Bacgr from '../Component/Admback'

export const AdminLayout = () => {
  return (

    <div className='flex flex-col'>
      <TopNavig />
      <div className='flex'>
        <SideNavig />
        <div className='admback w-screen p-4'>
          <Outlet />
        </div>
      </div>

    </div>



  )
}
export default AdminLayout
