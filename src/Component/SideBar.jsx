import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className='bannerleft text-[200%] text-center text-white h-auto'>
        <div className='pb-[40px] my-[40px]'><Link to='/admin'>Home</Link></div>
        <div className='pb-[40px] my-[40px]'><Link to='/admin/viewinst'>Institution</Link></div>
        <div className='pb-[40px] my-[40px]'><Link to='/admin/viewincometax'>Income Tax</Link></div>
        <div className='pb-[40px] my-[40px]'><Link to='/admin/viewarchaeology'>Archaeology</Link></div>
        <div className='pb-[40px] my-[40px]'><Link to='/admin/viewreport'>Tax Report</Link></div>
    </div>
  )
}
export default SideBar
