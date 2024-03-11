import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import TopNavig from '../Component/Navbar'
import SidNav from '../IncomeTax/SidNavigIncome'
import bac from '../Institution/Oldpaper.png'
import '../App.css'

export const IncomeLayout = () => {
  return (
    <div>
        <div className=''>  
            <TopNavig />
            <div className='flex '>
            <SidNav/>
            <div className='incomback w-screen p-4'>
            <Outlet />
            </div>
            </div>
        </div>
    </div>
  )
}
export default IncomeLayout
