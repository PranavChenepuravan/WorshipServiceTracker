import React from 'react'
import './App'
import { Outlet } from 'react-router-dom'
import bgmap from '../src/map.jpg'
import Navig from '../src/Nav'

export const RegisterCommon = () => {
  return (
    <>
      <div className='hyyy'>
        <Navig />
        <div>
          <div className='regback h-screen w-[100%] p-4'>
            
            <Outlet />
          </div>
          
        </div>
      </div>

    </>
  )
}
export default RegisterCommon
