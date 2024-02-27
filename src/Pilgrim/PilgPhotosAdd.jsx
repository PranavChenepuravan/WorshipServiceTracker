import React from 'react'
import { Link } from 'react-router-dom'
import cam from '../Pilgrim/Camera.png'

export const PilgPhotosAdd = () => {
  return (
    <>

    {/* <div className='bg-gray-400 w-[60%] h-[100%] ml-[20%]'>
    <header class="flex flex-col justify-center items-center">
    <div
      class="relative"
      x-show="card === 'front'"
      
    >
      <img class="w-full sm:h-60" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" alt="front credit card"/>
      <div class="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
        <div class="flex flex-row justify-between">
          <div class="">
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative"
  
     
    >
      
      <div
        class="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12"
      >
        <div class="border border-white w-16 h-9 flex justify-center items-center">
        </div>
      </div>
    </div>
    <ul class="flex">
      <li class="mx-2">
        <img class="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
      </li>
      <li class="mx-2">
        <img class="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
      </li>
      <li class="ml-5">
        <img class="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
      </li>
    </ul>
  </header>
    <main class="mt-4 p-4">
    <h1 class="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
    <div class="">
      <div class="my-3">
        <input
          type="text"
          class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Card holder"
          maxlength="22"
          x-model="cardholder"
        />
      </div>
      <div class="my-3">
        <input
          type="text"
          class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder="Card number"
          
          maxlength="19"
        />
      </div>
      <div class="my-3 flex flex-col">
        <div class="mb-2">
          <label for="" class="text-gray-700">Expired</label>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <select
            name=""
            id=""
            class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            x-model="expired.month"
          >
            <option value="" selected disabled>MM</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            name=""
            id=""
            class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            x-model="expired.year"
          >
            <option value="" selected disabled>YY</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <input
            type="text"
            class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder="Security code"
            maxlength="3"
            
            
          />
        </div>
      </div>
    </div>
  </main>
  </div> */}
   
    
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-5"><img src={cam} alt="" className='h-[35px]' /></button>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
        
    </label>
    
</div> 

  </>
  )
}
export default PilgPhotosAdd
