import React from 'react'
import str from '../Institution/Rating.jpeg'

export const InstArchaeology = () => {
  return (
    <>
    <div class="tableinst relative overflow-x-auto w-auto flex gap-[70px]">
            <table>
              <tr>
                <th>Wealth Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Era of Manufacture</th>
                <th>Made In</th>
                <th>Material</th>
                <th>Antique Value</th>
                <th>Heritage</th>
                <th>Sanction</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td>WLT001</td>
                <td>Flag Stand</td>
                <td>External Property</td>
                <td>12 Meter</td>
                <td>100 Kg</td>
                <td>AD-700</td>
                <td>Kambodia</td>
                <td>Bronze</td>
                <td>1.2 CR</td>
                <td>Using for celebrate specila occasions</td>
                <td><div className='bg-green-500 text-white'>Approved</div></td>  
                <td><div><img src={str} alt="" className='h-[35px]' /></div></td> 
              </tr>
              <tr>
                <td>WLT002</td>
                <td>Chinees Mirror</td>
                <td>Internal Property</td>
                <td>40 cm Area</td>
                <td> 800g</td>
                <td>AD-1100</td>
                <td>China</td>
                <td>Cley</td>
                <td> 2 Lake </td>
                <td>Using for worship </td>
                <td><div className='bg-red-600 text-white'>Rejected</div></td>
                <td></td>
              </tr>
              
           </table>

        </div>
    </>
  )
}
export default InstArchaeology
