import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import TopNavig from '../Component/Navbar'
import SidNav from '../Pilgrim/SidNavigPilg'
import bac from '../Institution/Oldpaper.png'
import '../App.css'

export const PilgLayout = () => {
  return (
    <div>
        <div className='l'>  
            <TopNavig />
            <div className='flex w-[100%]'>
            <SidNav/>
            <div className='pilgback h-screen w-[100%] p-4'>
            <Outlet />
            </div>
            </div>
        </div>
    </div>
  )
}
export default PilgLayout
