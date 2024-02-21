import React from 'react'
import { Link } from 'react-router-dom' 

export const SidNavigInst = () => {
  return (
    <>
    <div className='bannerleft flex flex-col text-[200%] text-center text-white h-[150%] pt-[5%] justify-content: center; gap-[5%]'>
        <div><Link to='/instlayout'>Home</Link></div>
        <div><Link to='/instlayout/instinstruction'>Instruction</Link></div>
        <div><Link to='/instlayout/instpreach'>Preaching and Classes</Link></div>
        <div><Link to='/instlayout/instvisit'>Visiting Booking</Link></div>
        <div><Link to='/instlayout/instincometx'>Income Tax</Link></div>
        <div><Link to='/instlayout/instarch'>Archaeology</Link></div>
        <div><Link to='/instlayout/instdon'>Donation</Link></div> 
        <div>Rarting</div>
        <div>Photo</div>
    </div>
    </>
    
  )
}
export default SidNavigInst