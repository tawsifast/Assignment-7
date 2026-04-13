import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';
import { PiArrowFatUp } from 'react-icons/pi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        // <div className='flex justify-between'>
         
        //     <li><NavLink to={"/"} className={({isActive})=>`${isActive? "bg-pink-800":'bg-amber-50'}`}>Home</NavLink></li>
            
        //     <li><NavLink to={"/timeline"} className={({isActive})=>`${isActive? "bg-pink-800":'bg-amber-50'}`}>Timeline</NavLink></li>
        //     <li><NavLink to={"/stats"} className={({isActive})=>`${isActive? "bg-pink-800":'bg-amber-50'}`}>Stats</NavLink></li>
        // </div>
        <div className='bg-base-100 shadow-sm'>
        <div className="navbar  w-10/12 mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-semibold text-md gap-5">

       <li><NavLink to={"/"} className={({isActive})=>`${isActive? "bg-[#244D3F] text-white":''}`}><PiArrowFatUp />Home</NavLink>
       </li>
            
        <li><NavLink to={"/timeline"} className={({isActive})=>`${isActive? "bg-[#244D3F] text-white":''} `}><MdWatchLater />Timeline</NavLink>
        </li>
        <li><NavLink to={"/stats"} className={({isActive})=>`${isActive? "bg-[#244D3F] text-white":''}`}><BsGraphUp />Stats</NavLink>
        </li>
    </ul>
  </div>
</div>
</div>
    );
};

export default Navbar;