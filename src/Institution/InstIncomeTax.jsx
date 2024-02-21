import React from 'react'
import str from '../Institution/Rating.jpeg'

export const InstIncomeTax = () => {
  return (
    <div>
        <div class="tableinst relative overflow-x-auto w-auto flex gap-[70px]">
            <table>
              <tr>
                <th>SL NO</th>
                <th>Description</th>
                <th>Date & Time</th>
                <th>About</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td>ITR001</td>
                <td>Extra.......</td>
                <td>12/01/2024</td>
                <td>
                  <div className='bg-sky-500 text-white'>Warning</div>
                </td>
                <td><div><img src={str} alt="" className='h-[35px]' /></div></td>
              </tr>
              <tr>
                <td>ITR002</td>
                <td>Extra.......</td>
                <td>15/02/2024</td>
                <td>
                  <div className='bg-red-600 text-white'>Action</div>
                </td>
                <td><div><img src={str} alt="" className='h-[35px]' /></div></td>
              </tr>
           </table>

        </div>
        
    </div>
  )
}
export default InstIncomeTax
