import React from 'react';
import image1 from '../src/Agar.png'

const LoadPic = () => {
  return (
    <>
      <div className='ldim pt-10 text-center'></div>
      <div className='flex-col pl-32 pr-24 mt-[-55%]  text-yellow-300 bg-slate-400/15'>
        <div className='text-7xl font-extrabold'>
          <p>Worship management</p>
        </div>
        <div className='text-lg font-sans'>
          <p>Embrace the Divine, Illuminate the Soul: Your Journey Begins Here.</p>
        </div>
        <div className='w-[50%]'>
        <img src={image1} alt="Worship" className="mt-4 mx-auto h-[100%]"  />
        </div>
      </div>
    </>
  );
};

export default LoadPic;
