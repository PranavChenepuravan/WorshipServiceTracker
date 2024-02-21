import React from 'react'
import './App'
import { Outlet } from 'react-router-dom'
import bgmap from '../src/map.jpg'
import Navig from '../src/Nav'

export const RegisterCommon = () => {
  return (
    <>
    <div>
      <Navig/>
    </div>
    <div><img src={bgmap} alt="" className='size-full' /></div>
    </>
  )
}
export default RegisterCommon
