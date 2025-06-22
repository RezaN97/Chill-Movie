import Navbar from "../Navbar"
import Footer from "../Footer"
import { listPoster } from "./Poster"


const DaftarSaya = () =>{
    return(
        <>
            <Navbar />
                <div className="flex flex-col gap-16px sm:gap-[32px] sm:my-5 sm:px-[80px] w-[320.18px] sm:w-[1440px] h-[668px] sm:h-[699px]"> 
                    <h1 className="font-[700] m-[10px] text-[20px] sm:text-[32px] text-white">Daftar Saya</h1>
                    <CardFilm />
                </div>
            <Footer />

       
        </>

    )
}

export default DaftarSaya

export const CardFilm = () => {
    return (
    <>
    <div className="grid grid-cols-3 pl-2 gap-x-[5vw] gap-y-[2vh] sm:gap-y-[2vh] sm:grid-cols-6 grid-rows-4 sm:grid-rows-2">
        {listPoster.map((img) => (
            <div key={img.id} className="rounded  w-[320.18px] sm:w-[1280px] h-[145px] sm:h-[300px] gap-[17.56px] sm:gap-[16px]">
                <img src={img.src} alt={img.alt} className="w-[95.6px] sm:w-[200px] h-[143.39px] sm:h-[300px] hover:scale-105 transition-transform duration-300"/>
            </div>
        ))}
    </div>

    </>
    )
}