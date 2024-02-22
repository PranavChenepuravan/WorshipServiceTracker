import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import TopNavig from '../Component/Navbar'
import SidNav from '../Institution/SidNavigInst'
import bac from '../Institution/Oldpaper.png'
import '../App.css'
export const InstLayout = () => {
  return (
    <div>
        <div className='l'>  
            <TopNavig />
            <div className='flex w-[100%]'>
            <SidNav/>
            <div className='instback w-[100%] p-4'>
            <Outlet />
            </div>
            </div>
        </div>
    </div>
  )
}
export default InstLayout
