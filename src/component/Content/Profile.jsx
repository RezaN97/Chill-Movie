import Navbar from "../Navbar"
import Footer from "../Footer"
import iconWarning from "../../img/icon-warning.png"
import iconEdit from "../../img/edit.png"
import React, { useState } from "react"
import Avatar from "../../img/navbar/avatar.png"
import iconUpload from "../../img/icon-upload.png"
import { listPoster } from "./Poster"

const Profile = () =>{

    const [premium, setPremium] = useState('premium')
    const [notpremium, setNotPremium] = useState('notPremium')
    
    // Logic pop up
    const condition = premium //can set to premium or notpremium for different display
    const popupMember = condition === premium ? <Premium /> : <NotPremium />

    return(
        <>
        <Navbar />
       {/* Fullscreen  */}
       <div className="max-sm:hidden">
            <div className=" w-[1440px] h-[649px] px-[80px] py-[40px] gap-[20px] flex flex-col">
                <h1 className="max-sm:hidden text-[32px] font-bold text-white">Profile Saya</h1>
                    {/* Profile layout */}
                <div className="w-[1280px] h-[428px] gap-[80px] flex">
                        <FormProfile />
                        {popupMember}
                </div>
            </div>
            <div className="w-[1440px] h-[367px] mb-5">
                <MyMovie/>
            </div>
       </div>
        
        {/* Mobile screen */}
        <div className="sm:hidden flex flex-col justify-center items-center gap-3 my-3">
            {popupMember}
            <FormProfile/>
            <div className="w-[320px] h-[346px] ">
                <MyMovie/>

            </div>
        </div>

        <Footer />
       

        </>

    )
}

export default Profile





const FormProfile = () =>{
     const [formData, setFormData] = useState({ username: '', email: '', password: '' });
     const [showInput, setShowInput] = useState(false)
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSave = () => {
        setShowInput(true)
      };

      const handleEdit = () => {
        setShowInput(false)
      }

    const handleDelete = () => {
        setFormData({ username: '', email: '', password:''})
        setShowInput(false)
      }
    

    return (
    <>
    <div className="w-[320px] sm:w-[642px] h-[392px] sm-h-[428px] gap-[24px] sm:gap-[32px] flex flex-col my-3" >
                {/* profile */}
            <h1 className="sm:hidden text-[20px] sm:text-[32px] font-bold text-white">Profile Saya</h1>
            <div className="w-[320px] sm:w-[287px] h-[392px] sm:h-[140px] flex gap-[24px]">
                <img src={Avatar} alt="avatar" className="w-[80px] sm:w-[140px] h-[80px] sm:h-[140px] gap-[10px]" />      
                <div className="flex flex-col w-[109px] sm:w-[123px] h-[68px] gap-[8px]">
                    <button className="border-1 border-[#3254FF] w-[91px] sm:w-[120px] h-[36px] sm:h-[42px] rounded-[48px] text-[14px] text-[#3254FF] font-bold ">Ubah Foto</button> 
                    <div className="flex w-[109px] sm:w-[123px] h-[24px] gap-[4px]">
                        <div className="w-[24px] h-[24px]">
                            <img src={iconUpload} alt="upload" className="" />
                        </div>
                        <p className="w-[81px] sm:w-[95px] h-[17px] sm:h-[20px] font-normal text-[12px] text-[#C1C2C4]">Maksimal 2MB</p>
                    </div> 


                {/* Display form result (CRUD}*/}
                {showInput &&(
                      <div className="max-sm:hidden w-[320px] h-[300px] text-white">
                        <p className="text-[16px] font-semibold">{formData.username}</p>
                        <p className="text-[13px] font-normal">{formData.email}</p>
                        <p className="text-[14px] font-bold">Status Member: Premium</p>
                    </div>
                )}
                  
                    
                </div>
                 
            </div>         


        
                {/* Form section */}
                {/* username */}
                <div className="flex justify-between items-center w-[320px] sm:w-[642px] h-[56px] sm:h-[64px] rounded-[8px] border-[1px] border-[#E7E3FC3B] px-[16px] py-[8px] gap-[8px] sm:gap-[6px] bg-[#22282A]">
                    <div className="flex flex-col">
                        <label className="w-[256px] h-[20px] text-[14px] font-semibold text-[#9D9EA1]">Nama Pengguna</label>
                        <input value={formData.username} onChange={handleChange} type="text" className="text-white w-[256px] h-[22px] gap-[6px] text-[16px] font-medium " name="username" />
                    </div>
                    <button onClick={handleEdit} className="cursor-pointer flex justify-start items-start w-[24px] h-[24px]">
                        <img src={iconEdit} alt="iconEdit"/>
                    </button>
                </div>

                {/* Email */}
                <div className="flex justify-between items-center w-[320px] sm:w-[642px] h-[56px] sm:h-[64px] rounded-[8px] border-[1px] border-[#E7E3FC3B] px-[16px] py-[8px] gap-[8px] bg-[#22282A]">
                    <div className="flex flex-col">
                        <label className="w-[256px] h-[20px]  text-[14px] font-semibold text-[#9D9EA1]">Email</label>
                        <input value={formData.email} onChange={handleChange} type="email" className="text-[#9D9EA1] w-[256px] h-[22px] gap-[6px] text-[16px] font-medium " name="email" />
                    </div>
                    <button onClick={handleEdit} className="cursor-pointer flex justify-center items-center">
                        <img src={iconEdit} alt="iconEdit" className="w-[24px] h-[24px]"/>
                    </button>
                </div>

                {/* Password */}
                <div className="flex justify-between items-center w-[320px] sm:w-[642px] h-[56px] sm:h-[64px] rounded-[8px] border-[1px] border-[#E7E3FC3B] px-[16px] py-[8px] gap-[8px] bg-[#22282A]">
                    <div className="flex flex-col">
                        <label className="w-[256px] h-[20px] text-[14px] font-semibold text-[#9D9EA1]">Kata Sandi</label>
                        <input value={formData.password} onChange={handleChange} type="password" className="text-white w-[256px] h-[22px] gap-[6px] text-[16px] font-medium " name="password" />
                    </div>
                    <button onClick={handleEdit} className="cursor-pointer flex justify-center items-center">
                        <img src={iconEdit} alt="iconEdit" className="w-[24px] h-[24px]"/>
                    </button>
                </div>
                <div className="flex justify-between gap-2 max-sm:hidden">
                    <button onClick={handleSave} type="submit" className="text-white text-[16px] sm:text-[13px] font-bold w-[106px] h-[42px] sm:h-[30px] bg-[#09147A] cursor-pointer rounded-[48px] ">Simpan</button>
                    <button onClick={handleDelete} type="submit" className="text-white text-[16px] sm:text-[13px] font-bold w-[106px] h-[42px] sm:h-[30px] bg-red-500 cursor-pointer rounded-[48px] ">Delete</button>

                </div>
            
    </div>
    </>
    )
}




export const NotPremium = () => {
    return (
    <>
          {/* popup not premium */}
    <div className="flex flex-col bg-[#3D4142] w-[320px] sm:w-[558px] h-[191px] sm:h-[193px] rounded-[12px] sm:rounded-[12px] p-[24px] gap-[20px]">
        <div className="flex sm:w-[510px] w-[272px] h-[94px] sm:h-[91px] gap-[20px]">
            <img src={iconWarning} alt="warning" className="w-[78px] h-[78px]"/>
            <div className="flex flex-col gap-[12px] w-[174px] sm:w-[412px] h-[94px] sm:h-[91px]">
                <h1 className="text-white sm:hidden w-[110px] sm:w-[412px] h-[22px] sm:h-[29px] font-bold text-[18px] sm:text-[24px">Berlangganan</h1>
                <h1 className="max-sm:hidden text-white w-[386px] h-[29px] font-bold text-[24px]">Saat ini anda belum berlangganan</h1>
                <p className="text-white w-[174px] sm:w-[412px] h-[60px] sm:h-[50px] text-[14px] sm:text-[18px] font-normal">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
            </div>
        </div>
        <div className="w-[320px] sm:w-[558px] h-[191px] sm:h-[193px] flex items-end justify-end px-9">
            <button className=" bg-[#2F3334]  text-white text-[12px] sm:text-[16px] font-bold w-[154px] sm:w-[189px] sm:h-[34px] h-[29px] rounded-[48px] ">Mulai Berlangganan</button>
        </div>
    </div>
    </>
    )

}


export const Premium = () => {
    return (
        <>
        {/* Popup premium */}
        <div className="flex flex-col text-white w-[320px] sm:w-[558px] h-[214px] sm:h-[210px] rounded-[12px] p-[24px] gap-[20px] bg-linear-to-r from-[#5370D4] to-[#192DB7] ">
            <button className="text-[#0F1E93] bg-gray-300 text-[14px] sm:text-[16px] font-bold w-[76px] sm:w-[81px] h-[32px] sm:h-[34px] rounded-[48px]">Aktif</button>
            <div className="flex flex-col gap-[20px] w-[272px] sm:w-[510px] h-[74px] sm:h-[66px] ">
                <p className="text-[18px] sm:text-[24px] font-bold">Akun Premium Individual✨</p>
                <p className="text-[14px] sm:text-[18px] font-normal">Saat ini kamu sedang menggunakan akses akun premium</p>
            </div>
            <p className="w-[272px] h-[20px] font-medium text-[#C1C2C4] text-[14px] sm:text-[16px]">Berlaku hingga 31 Desember 2023</p>

        </div>
        </>

    )
}



export const MyMovie = () => {
    return (
    <>
    <div className="flex flex-col gap-4 px-[5px] sm:px-[80px] mb-5">
        <h1 className="text-white sm:text-[34px] font-bold">Daftar Saya</h1>
        <div className="grid grid-cols-3 pl-2 gap-x-[10vw] sm:gap-x-[2vw] gap-y-[2vh] sm:gap-y-[2vh] sm:grid-cols-6 grid-rows-4 sm:grid-rows-2">
                {listPoster.slice(0,6).map((img) => (
                    <div key={img.id} className="rounded  w-[320.18px] sm:w-[1280px] h-[145px] sm:h-[300px] gap-[17.56px] sm:gap-[16px]">
                        <img src={img.src} alt={img.alt} className="w-[95.6px] sm:w-[200px] h-[143.39px] sm:h-[300px] hover:scale-105 transition-transform duration-300"/>
                    </div>
                ))}
        </div>
    </div>
    
    </>


    )
}