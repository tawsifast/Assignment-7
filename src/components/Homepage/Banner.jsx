import React from 'react';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto my-20 bg-base-200 rounded-lg p-5'>
            <div className="hero ">
  <div className="hero-content text-center">
    <div className="space-y-2.5">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-600">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white mb-10">Add a Friend</button>
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

         <div className='grid grid-cols-4 gap-6'>
                <div className='bg-base-200 p-8 text-center rounded-md flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-2xl font-bold text-[#244D3F]'>10</h2>
                    <p className='text-gray-600'>Total Friends</p>
                </div>
                <div className='bg-base-200 p-8 text-center rounded-md flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-2xl font-bold text-[#244D3F]'>3</h2>
                    <p className='text-gray-600'>On Track</p>
                </div>
                <div className='bg-base-200 p-8 text-center rounded-md flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-2xl font-bold text-[#244D3F]'>6</h2>
                    <p className='text-gray-600'>Need Attention</p>
                </div>
                <div className='bg-base-200 p-8 text-center rounded-md flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-2xl font-bold text-[#244D3F]'>12</h2>
                    <p className='text-gray-600'>Interactions This Month</p>
                </div>
            </div>

</div>


    );
};

export default Banner;