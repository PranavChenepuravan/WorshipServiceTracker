import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Registeration = () => {
  return (
    <>
    <div className='regback'>
      <div className=' mx-[35%] flex flex-col h-[60%]'>
        <Link to='/regcommon/reginst'><div className='button2  my-[15%] w-[30%]'>INSTITUTION</div></Link>
        <Link to='/regcommon/regincome'><div className='button2  my-[20%] w-[30%]'>INCOME TAX</div></Link>
        <Link to='/regcommon/regarchae'><div className='button2  my-[25%] w-[30%]'>ARCHAEOLOGY</div></Link>
        <Link to='/regcommon/regpilgrim'><div className='button2  my-[30%] w-[30%]'>PILGRIM</div></Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}
export default Registeration
