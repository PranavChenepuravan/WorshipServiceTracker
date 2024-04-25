import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from './Agar.png'

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
        <div className='flex-col pl-32 pr-24   text-yellow-300'>
        <div className='text-7xl font-extrabold'>
          <p>Empowering Worship Coordination</p>
        </div>
        <br />
        <div className='text-lg font-sans'>
          <p>Embrace the Divine, Illuminate the Soul: Your Journey Begins Here.</p>
        </div>
        <div className='w-[50%]'>
        <img src={image1} alt="Worship" className="mt-4 mx-auto h-[100%]"  />
        </div>
      </div>
    </div>
    
  )
}
