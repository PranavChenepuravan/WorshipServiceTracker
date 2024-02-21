import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import TopNavig from '../Component/Navbar'
import SidNav from '../Institution/SidNavigInst'

export const InstLayout = () => {
  return (
    <div>
        <div className='flex flex-col'>  
            <TopNavig />
            <div className>  
            <SidNav/>
            <div className='back3'></div>
            <Outlet />
            </div>
        </div>
    </div>
  )
}
export default InstLayout
