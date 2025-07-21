import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/solid"
import { LogoutIcon } from "@heroicons/react/solid"
import { NavLink } from "react-router";
import iconAvatar from '../img/navbar/avatar.png'



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className=' md:w-[76px] md:h-[40px] md:gap-[8px] max-sm:w-[40px] max-sm:h-[20px] flex sm:gap-[4px]'>
      <img className='md:w-[40px] md:h-[40px]  sm:w-[20px] sm:h-[20px]' src={iconAvatar} alt="User Avatar"/>
      <ChevronDownIcon onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white w-[20px] h-[20px] ml-2  " />
      {isOpen && (
        <div className="absolute w-[113px] sm:w-[156px] h-[116px] sm:h-[170px] top-[50px] sm:top-[82px] left-[227px] sm:left-[1100px] py-[4px] text-[10px] sm:text-[14px] font-medium z-1 bg-[#181A1C] border rounded-md shadow-lg">
          <NavLink to='/admin' className="flex w-[113px] sm:w-[156px] h-[32px] sm:h-[40px] px-[12px] py-[8px] gap-[5px] items-center rounded text-white hover:text-blue-900 hover:bg-[#0d0e10]">
            <span><UserIcon className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]"/></span> Admin
          </NavLink>
          <NavLink to='/profile' className="flex w-[113px] sm:w-[156px] h-[32px] sm:h-[40px] px-[12px] py-[8px] gap-[5px] items-center rounded text-white hover:text-blue-900 hover:bg-[#0d0e10]">
            <span><UserIcon className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]"/></span> Profile Saya
          </NavLink>
          <a href="#" className="flex w-[113px] sm:w-[156px] h-[32px] sm:h-[40px] px-[12px] py-[8px] gap-[5px] rounded text-white  hover:text-blue-900 hover:bg-[#0d0e10]">
            <span><StarIcon className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px] "/></span> Ubah Premium
          </a>
          <NavLink to='/' className="flex w-[113px] sm:w-[156px] h-[32px] sm:h-[40px] px-[12px] py-[8px] gap-[5px] rounded text-white  hover:text-blue-900 hover:bg-[#0d0e10]">
            <span><LogoutIcon className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]"/></span> Keluar
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
