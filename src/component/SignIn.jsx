import foto from '../img/logo-full.png'
import google from '../img/google-btn.png'
import showEye from '../img/eye-off.png'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'

const SignIn = () => {
    const navigate = useNavigate()
    return (

    <>
    {/* Mobile screen */}
    <div className="bg-[url('/src/img/bg/bg-1.png')] bg-center bg-no-repeat bg-cover">

        <div className="sm:hidden font-Lato  bg-[#181A1C]/60 flex flex-col justify-evenly items-center w-[306px] h-[452.28px] text-white  p-[24px] rounded-sm ">
               
                <div className="w-[94px] h-[24px] gap-[2.32px]">
                    <img src={foto} alt="Logo Chill" />
                </div> 
                <div className="w-[73px] h-[43.62px] flex gap-[10px] flex-col justify-center items-center">
                    <h1 className='font-bold text-[18px] tracking-tight'>Masuk</h1>
                    <p className='w-[111px] h-[14px] font-[400] text-[10px]'>Selamat datang kembali!</p>
               </div>

                <div className="w-[258px] h-[45.47px] flex flex-col gap-[3.47px]">
                    <label className="text-[10px] font-[500] w-[46px] h-[14px] gap-[6px]" htmlFor="username">Username</label>
                    <input className="w-[260px] h-[28px] px-[11.55px] py-[8.09px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[9.24px]
                        text-black p-2 rounded-2xl  " type="text" name="username" id="username" placeholder='Username..' />
                </div>

                <div className="w-[258px] h-[45.47px] flex flex-col gap-[3.47px] relative">
                    <label className="text-[10px] font-[500] w-[49px] h-[14px] gap-[6px]" htmlFor="kataSandi">Kata sandi</label>
                    <input className=" w-[260px] h-[28px] px-[11.55px] py-[8.09px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[9.24px]
                        text-black p-2 rounded-2xl  " type="password" name="password" id="password" placeholder='Masukan Kata Sandi..' />
                    <img src={showEye} alt="show"  className='w-[12px] h-[12px] absolute right-3 bottom-2'/>
                </div>
                                
                <span className='w-[258px] h-[14px] flex justify-start gap-[8px] text-[10px] font-[400] '>Sudah Punya Akun? 
                    <a className='font-[500] text-[10px]' href="#">Masuk</a></span>

                <div className="w-[258px] h-[79.33px] flex flex-col justify-center items-center gap-[4px] my-2">
                    <button className='w-[258px] h-[30.17px] bg-[#3D4142] border-1 
                    text-[10px] font-medium rounded-[13.86px]'>Masuk</button>
                    <p className='text-[10px] text-gray-300 font-normal'>Atau</p>
                    <button className='w-[258px] h-[30.17px] justify-center flex items-center gap-2
                        bg-[#3D4142]/10 border-1 text-[10px] font-medium rounded-[13.86px] '>
                        <img src={google} alt="google" />
                        Masuk dengan Google
                    </button>
                </div>
        </div>   

        {/* Fullscreen  */}
        <div className="flex justify-center items-center py-10vh">
            <div className="max-sm:hidden font-Lato gap-[37px] bg-[#181A1C]/60 flex flex-col justify-evenly items-center w-[529px] h-[663px] text-white  p-[40px] rounded-[16px] ">
               
                <div className="w-[163px] h-[44px] gap-[4px]">
                    <img src={foto} alt="Logo Chill" />
                </div> 
                <div className="w-[174px] h-[65px] flex gap-[8px] flex-col justify-center items-center">
                    <h1 className='w-[96px] h-[35px] font-bold text-[32px] tracking-tight'>Masuk</h1>
                    <p className='w-[178px] h-[22px] font-[400] text-[16px]'>Selamat datang kembali!</p>
               </div>

                <div className="w-[449px] h-[81px] flex flex-col gap-[6px]">
                    <label className="text-[18px] font-[500] w-[82px] h-[25px] gap-[10px]" htmlFor="username">Username</label>
                    <input className="w-[449px] h-[50px] px-[20px] py-[14px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[16px] 
                        text-white font-[400] p-2 rounded-2xl  " type="text" name="username" id="username" placeholder='Masukan username' />
                </div>

                <div className="w-[449px] h-[112px] flex flex-col gap-[12px] relative">
                    <label className="text-[18px] font-[500] w-[86px] h-[25px] gap-[10px]" htmlFor="kataSandi">Kata sandi</label>
                    <input className="font-[400] w-[449px] h-[47px] px-[20px] py-[14px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[16px]
                        text-white p-2 rounded-2xl  " type="password" name="password" id="password" placeholder='Masukan Kata Sandi' />
                    <img src={showEye} alt="show"  className='w-[20px] h-[20px] absolute right-3 bottom-4'/>
                </div>
                                
                <span className='w-[449px] h-[22px] flex justify-start gap-[8px] text-[16px] font-[400] '>Belum punya akun? 
                    <NavLink className='font-[500] text-[16pvx] cursor-pointer' to='/signup'>Daftar</NavLink>
                    <NavLink className='ml-[9vw] font-[500] text-[16px] cursor-pointer' to='/notfound'>Lupa kata sandi?</NavLink>    
                </span>

                <div className="w-[449px] h-[113px] flex flex-col justify-center items-center gap-[4px] my-2">
                    <button className='cursor-pointer w-[449px] h-[50px] bg-[#3D4142] hover:bg-[#303334] border-1 
                    text-[16px] font-medium rounded-[24px]' onClick={() => navigate('/home')}>Masuk</button>
                    <p className='text-[14px] text-gray-300 font-normal'>Atau</p>
                    <button className='cursor-pointer w-[449px] h-[47px] hover:bg-[#3D4142] justify-center flex items-center gap-[20px]
                        bg-[#3D4142]/10 border-1 text-[16px] font-medium rounded-[24px] '>
                        <img src={google} alt="google" />
                        Masuk dengan Google
                    </button>
                </div>
        </div>   


        </div>
         
    </div>

    </>


    )
}

export default SignIn

