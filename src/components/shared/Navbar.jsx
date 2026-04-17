import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { PiArrowFatUp } from "react-icons/pi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 md:w-10/12 mx-auto ">
        <div className="flex-1">
          <button className="btn btn-ghost text-lg  md:text-2xl font-bold">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </button>
        </div>
        <div className="flex-none">
          <ul className=" menu menu-horizontal px-1 font-medium md:font-semibold text-xs md:text-[15px] gap-1 md:gap-5 ">
        <li><NavLink to={"/"} className={({isActive})=>`flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive? "bg-[#244D3F] text-white":''}`}><PiArrowFatUp />Home</NavLink>
       </li>
            
        <li><NavLink to={"/timeline"} className={({isActive})=>`flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive? "bg-[#244D3F] text-white":''} `}><MdWatchLater />Timeline</NavLink>
        </li>
        <li><NavLink to={"/stats"} className={({isActive})=>`flex items-center gap-1 md:gap-2 px-2 md:px-4 ${isActive? "bg-[#244D3F] text-white":''}`}><BsGraphUp />Stats</NavLink>
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
