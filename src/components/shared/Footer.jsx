import React from 'react';

const Footer = () => {
    return (
        <div>

        <footer className="bg-[#244D3F] text-white py-8 sm:py-10 lg:py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 lg:space-y-8 ">
    
    {/* Title */}
    <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">
      KeenKeeper
    </h1>

    {/* Description */}
    <p className=" text-sm sm:text-base lg:text-md  mx-auto text-white">
    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>

    {/* Social Links */}
    <div className="font-semibold">
     <p>Social Links</p>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center gap-4 sm:gap-6">
      <img
        src="../../../public/image/facebook.png"
        alt="facebook"
        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
      />
      <img
        src="../../../public/image/instagram.png"
        alt="twitter"
        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
      />
      <img
        src="../../../public/image/twitter.png"
        alt="linkedin"
        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
      />
    </div>

 
   
    <hr className='opacity-30'/>

    {/* Footer Bottom */}
    <div className='flex justify-between text-gray-400'>
        <div> <p className=" text-xs sm:text-sm">
         © 2026 My Website. All rights reserved.
         </p>
        </div>
       <div className='flex gap-5'>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Cookies</p>
       </div>
    </div>
   
  </div>
</footer>
        </div>
    );
};

export default Footer;