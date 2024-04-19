import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ArchHome = () => {
    let navigate=useNavigate()
    let logout=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        navigate('/login')
      }
  return (
    <div>

        <button className='bg-red-950 text-red-600 p-4 rounded-[20px] w-36 ' onClick={logout}>Logout</button>
    </div>
  )
}
