import React from 'react';
import BannerCard from '../BannerCard/BannerCard';
import { LuPlus } from 'react-icons/lu';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto my-20 bg-base-200 rounded-lg p-10'>
            <div className="hero ">
  <div className="hero-content text-center">
    <div className="space-y-3">
      <h1 className="text-4xl md:text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-2 md:py-6 text-gray-600">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white mb-10"><LuPlus />Add a Friend</button>
    </div>
  </div>
</div>

        {/* <div className='flex justify-between items-center w-50 gap-10'>
            <div className='bg-red-200 p-15 w-auto text-center rounded-md gap-2'>
                <h2>10</h2>
                <p>Total Friends</p>
            </div>
            <div className='bg-red-200 p-15 rounded-md text-center'>
                <h2>3</h2>
                <p>On Track</p>
            </div>
            <div className='bg-red-200 p-15 rounded-md text-center'>
                <h2>6</h2>
                <p>Need Attention</p>
            </div>
            <div className='bg-red-200 p-15 rounded-md text-center'>
                <h2>12</h2>
                <p>Interactions This Month</p>
            </div>
           
        </div> */}

         <div className='grid grid-cols-2  md:grid-cols-4 gap-6'>
               <BannerCard num={10} word={"Total Friends"}/>
               <BannerCard num={3} word={"On Track"}/>
               <BannerCard num={6} word={"Need Attention"}/>
               <BannerCard num={12} word={"Interactions This Month"}/>
            </div>


</div>



    );
};

export default Banner;