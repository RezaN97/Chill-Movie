import Navbar from "../component/Navbar"
import iconDownload from "../img/payment/download.png"
import iconAds from "../img/payment/ads.png"
import iconRoll from "../img/payment/roll.png"
import icon4k from "../img/payment/4k.png"
import iconDevice from "../img/payment/device.png"
import iconSubtitle from "../img/payment/comment.png"
import iconCheck from "../img/payment/ceklis.png"


const Premium = () => {
    return (
        <>
        <div className="bg-[#181A1C]">
            <Navbar/>
            <Fitur/>
        </div>
            <Paket/>

        </>        
    )
}

export default Premium


export const Fitur = () => {
    return (
        <>
        <div className=" w-full h-90">
            {/* txt kenapa harus */}
            <div className="text-white text-2xl font-semibold w-full flex justify-center my-10">
                <h1>Kenapa Harus Berlangganan?</h1>
            </div>
            {/* Content row 1 */}
            {/* icon and fitur */}
            <div className="text-white flex justify-center gap-30 text-[14px] mb-5">
                <div className="w-32 text-center"> 
                    <img className="w-5 h-6 mx-13 my-5 " src={iconDownload} alt="download" />
                    <p>Download Konten Pilihan</p>
                </div>
                <div className="w-32 text-center"> 
                    <img className="w-5 h-6 mx-13 my-5 " src={iconAds} alt="download" />
                    <p>Tidak ada iklan</p>
                </div>
                <div className="w-32 text-center"> 
                    <img className="w-5 h-6 mx-13 my-5 " src={iconRoll} alt="download" />
                    <p>Tonton semua konten</p>
                </div>
            </div>

            {/* Content row 2 */}
            <div className="text-white flex justify-center gap-30 text-[14px]">
                <div className="w-32 text-center"> 
                    <img className="w-5 h-6 mx-13 my-5 " src={icon4k} alt="download" />
                    <p  className="w-36">Kualitas maksimal sampai dengan 4K</p>
                </div>
                <div className="w-36 text-center"> 
                    <img className="w-5 h-6 mx-13 my-5 " src={iconDevice} alt="download" />
                    <p>Tonton di Tv, Tablet, Mobile, dan Laptop </p>
                </div>
                <div className="w-35 text-center"> 
                    <img className="w-5 h-6 mx-15 my-5 " src={iconSubtitle} alt="download" />
                    <p className="w-39">Subtitle untuk konten pilihan</p>
                </div>
            </div>
        </div>
        
        </>

    )
}

export const Paket = () => {
    return (
        <>
        {/* option paket */}
        {/* text */}
        <div className="text-white text-center mt-5">
            <h1 className="text-2xl font-semibold">Pilih Paketmu</h1>
            <p>Tambah paket sesuai kebutuhanmu!</p>
        </div>
        {/* option */}
        <div className="text-white flex justify-center gap-10">
            <div>
                <div className="p-4 my-10 w-[20vw] rounded-2xl h-[80vh] bg-linear-to-r from-[#5370D4] to-[#192DB7]">
                <div className="bg-gray-800 w-30 h-12 rounded-3xl text-center p-2 font-semibold text-[1.2rem]">
                    <h1>Individual</h1>
                </div>
                <div className="mt-5">
                    <p>Mulai dari Rp49,990/bulan</p>
                    <p>1 Akun</p>

                </div>

                <div className="w-[18vw] mt-15 pb-10 border-b-blue-400 border-b-2">
                    <div className="flex mt-10 justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Tidak ada iklan</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Kualitas 720p</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Download konten pilihan</p>
                </div>
                </div>    
                <div className="mt-5 px-3">
                    <button className="bg-white w-50 h-10 rounded-2xl text-blue-800 font-semibold text-lg">Langanan</button>
                    <p className="mt-3 mx-3 text-[0.8rem]">Syarat dan Ketentuan Berlaku</p>
                </div>
                </div>
            </div>
            

            <div>
                <div className="p-4 my-10 w-[20vw] rounded-2xl h-[80vh] bg-linear-to-r from-[#5370D4] to-[#192DB7]">
                <div className="bg-gray-800 w-30 h-12 rounded-3xl text-center p-2 font-semibold text-[1.2rem]">
                    <h1>Berdua</h1>
                </div>
                <div className="mt-5">
                    <p>Mulai dari Rp49,990/bulan</p>
                    <p>1 Akun</p>

                </div>

                <div className="w-[18vw] mt-15 pb-10 border-b-blue-400 border-b-2">
                    <div className="flex mt-10 justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Tidak ada iklan</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Kualitas 720p</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Download konten pilihan</p>
                </div>
                </div>    
                <div className="mt-5 px-3">
                    <button className="bg-white w-50 h-10 rounded-2xl text-blue-800 font-semibold text-lg">Langanan</button>
                    <p className="mt-3 mx-3 text-[0.8rem]">Syarat dan Ketentuan Berlaku</p>
                </div>
                </div>
            </div>

<div>
                <div className="p-4 my-10 w-[20vw] rounded-2xl h-[80vh] bg-linear-to-r from-[#5370D4] to-[#192DB7]">
                <div className="bg-gray-800 w-30 h-12 rounded-3xl text-center p-2 font-semibold text-[1.2rem]">
                    <h1>Keluarga</h1>
                </div>
                <div className="mt-5">
                    <p>Mulai dari Rp49,990/bulan</p>
                    <p>1 Akun</p>

                </div>

                <div className="w-[18vw] mt-15 pb-10 border-b-blue-400 border-b-2">
                    <div className="flex mt-10 justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Tidak ada iklan</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Kualitas 720p</p>
                    </div>
                    <div className="flex justify-start gap-2 ">
                      <img className="w-[20px] h-[20px]" src={iconCheck} alt="check" />
                      <p>Download konten pilihan</p>
                </div>
                </div>    
                <div className="mt-5 px-3">
                    <button className="bg-white w-50 h-10 rounded-2xl text-blue-800 font-semibold text-lg">Langanan</button>
                    <p className="mt-3 mx-3 text-[0.8rem]">Syarat dan Ketentuan Berlaku</p>
                </div>
                </div>
            </div>




        </div>
        
        </>
    )
} 

