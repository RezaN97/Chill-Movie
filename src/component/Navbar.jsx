import dropdownAvatar from '../img/dropdown/icon1.png'
import dropdownPremium from '../img/dropdown/icon2.png'
import dropdownLogout from '../img/dropdown/icon3.png'
import Dropdown from './Dropdown'
import logo from '../img/logo-chill.png'
import fullLogo from '../img/logo-full.png'
import { NavLink } from 'react-router'

const Navbar = () => {


    return(
        <>
            <header className='bg-[#181A1C]  w-[100vw] h-[56px] sm:w-full sm:h-[94px] py-[6px] sm:py-[25px] px-[10px] sm:px-[8vw] sm:pr-50 gap-[12px] flex items-center justify-between '>
                <div className='flex w-[268px] h-[44px] justify-evenly sm:gap-[5vw] sm:w-[520.55px] sm:h-[44px] mt-5 ' >
                    {/* logo */}
                    <NavLink to={'/home'}>
                        <div className="cursor-pointer w-[20px] h-[50px] sm:w-[103.55px] sm:h-[44px] mb-9">
                            <img id='chill-full' src={fullLogo} alt="logo" className='max-sm:hidden max-w-[600px]:hidden md:w-[103.55px] md:h-[44px] gap-[4px]'  />
                            <img id='chill-logo' src={logo} alt="logo" className='sm:hidden min-w-[300px]:block max-sm:w-[20px] max-sm:h-[18px] gap-[4px]'  />
                        </div>
                    </NavLink>
                    {/* navbar */}
                    <nav  className='flex md:gap-[80px] max-sm:gap-[12px] '>
                        <NavLink to={'/series'} className='list-none cursor-pointer text-white md:w-[49px] max-sm:w-[28px] h-[14px] md:text-lg max-sm:text-[10px] hover:text-blue-800 font-medium'>Series</NavLink>
                        <NavLink to={'/film'} className='list-none cursor-pointer text-white md:w-[35px] max-sm:w-[20px] h-[14px] md:text-lg max-sm:text-[10px] hover:text-blue-800 font-medium'>Film</NavLink>
                        <NavLink to={'/daftarsaya'} className='list-none cursor-pointer in-hover:blue text-white md:w-[95px] max-sm:w-[53px] h-[14px] md:text-lg max-sm:text-[10px] hover:text-blue-800 font-medium'>Daftar Saya</NavLink>
                    </nav>
                </div>
                <div>
                    <Dropdown />
                </div>
            </header>
        </>


    )
}


export default Navbar

const DropdownMenu = async() => {
    return (
    <>
    <div class="bg-[#181A1C] relative text-white text-[10px]]">
    <ul>
        <li>
            <img id="icon-profile" src={dropdownAvatar} alt="icon profile"/> <a href="#">Profil Saya</a>
        </li>
        <li>
            <img id="icon-premium" src={dropdownPremium} alt="icon premium"/>
            <a href="#">Ubah Premium</a>
        </li>
        <li>
            <img id="icon-logout" src={dropdownLogout} alt="icon log out"/>
            <a href="#">Keluar</a>
        </li>
    </ul>
    </div> 
    </>
    )
}

