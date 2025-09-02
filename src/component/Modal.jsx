import muteIcon from "../img/mute.png"
import plusIcon from "../img/plus.png"
import {storeMovie} from "../Store/zustand"
import imgEps1 from '../img/card/eps-1.png'
import imgEps2 from '../img/card/eps-2.png'
import imgEps3 from '../img/card/eps-3.png'
import imgEps4 from '../img/card/eps-4.png'
import imgEps5 from '../img/card/eps-5.png'
import { useEffect } from "react"

const Modal = () => {
    

    return (
    <>
    <div className="container mx-auto p-10 ">
        <div className=" sm:top-[30vh] flex items-end justify-center bg-[url('/src/img/bg/bg_modal.png')] bg-contain sm:bg-cover bg-no-repeat text-white w-[320px] sm:w-[933px] h-[670.74px] sm:h-[554px] sm:rounded-tl-[16px] sm:rounded-tr-[16px] rounded-[5.49px]">
                {/* close button */}
            <button className="absolute max-sm:text-[10px] left-[80vw] top-[2vh] w-[16px] h-[16px] rounded-[12.35px] gap-[3.43px] sm:left-[69vw] sm:top-[4vh] bg-[#181A1C] sm:w-[30px] sm:h-[30px] sm:rounded-[36px] justify-center items-center flex sm:gap-[10px]">x</button>
                {/* ------------- */}
                <div className="relative top- flex flex-col gap-3">
                        <h1 className="sm:top-[60vh] top-[18vh] sm:left-[5vw] left-[6vw] w-[72px] sm:w-[145px] h-[22px] sm:h-[35px] font-bold text-[16px] sm:text-[32px]">Ted Lasso</h1>    
                        <div className=" sm:top-[70vh] top-[25vh] left-[5vw]  w-[265.12px] sm:w-[773px] h-[25px] sm:h-[44px] flex justify-between">
                            <div className="w-[87px] sm:w-[175px] h-[25px] sm:h-[44px] flex gap-[8px] sm:gap-[10px]">
                                <button className="sm:gap-[10px] sm:flex sm:justify-center sm:items-center bg-[#0F1E93] w-[55px] sm:w-[121px] h-[25px] sm:h-[42px] rounded-[48px] text-[16px] font-bold">Mulai</button>            
                                <button className="sm:w-[44px] sm:h-[44px] sm:rounded-[24px] sm:border-1 sm:border-[#C1C2C4] justify-center items-center  bg-no-repeat w-[24px] h-[24px] rounded-[16px] border-[0.34px] gap-[4px] flex">
                                    <img src={plusIcon} alt="plus" className="w-[24px] h-[24px]" />
                                </button>            
                            </div> 
                            <button className="sm:w-[44px] sm:h-[44px] sm:rounded-[24px] sm:border-[1px] sm:border-[#C1C2C4] sm:p-[10px] p-[4px] flex w-[25px] h-[25px] rounded-[16px] border-[0.34px] border-[#C1C2C4] gap-[3.43px] sm:gap-[10px] bg-no-repeat ">
                                <img src={muteIcon} alt="mute" />
                            </button>            
                        </div>
                </div>
            </div>
            {/* </div> */}

            {/* Information */}
            <div className=" flex flex-col text-white bg-[#181A1C] w-[320px] sm:w-[933px] h-[188px] sm:h-[224px] px-[20px] sm:px-[80px] py-[10px] sm:py-[24px] gap-[16px] sm:gap-[10px]">
             
              {/* Mobile Screen */}
              <div className="sm:hidden">
                <div className="flex flex-col w-[280px] h-[66.74px] gap-[8px]">
                   <div className="flex w-[120px] h-[16.74px] py-[1.37px] gap-[5.49px]">
                        <p className="text-[10px] font-semibold">2030</p>
                        <p className="text-[10px] font-semibold">10 episode</p>
                        {/* age circle */}
                        <div className="text-[5px] justify-center items-center flex w-[13.72px] h-[13.72px] border-1 border-white rounded-[50%]">16+</div>
                   </div>
                 <p className="w-[280px] h-[42px] text-[10px] font-normal">Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond,
                     tim sepak bola Liga Utama Inggris yang kesulitan.</p>
                </div>
               
                {/* Cast , genre, pembuat film content */}
                <div className=" w-[280px] h-[72px] gap-[8px] flex-col flex">
                    <div className="flex  w-[280px] h-[28px] text-[10px] gap-[2px] font-normal">
                        <p className="text-[10px] font-normal w-[64px] h-[14px]">Cast</p>
                        <p className="text-[10px] font-normal w-[3px] h-[14px]">:</p>
                        <div className="flex">
                            <p className="text-[10px] font-normal w-[280px] h-[28px]">Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain</p>
                        </div>
                    </div> 
                    <div className="flex  w-[280px] h-[28px] text-[10px] gap-[2px] font-normal">
                        <p className="text-[10px] font-normal w-[64px] h-[14px]">Genre</p>
                        <p className="text-[10px] font-normal w-[3px] h-[14px]">:</p>
                        <div className="flex">
                            <p className="text-[10px] font-normal w-[280px] h-[28px]">Komedi, Drama, Olahraga</p>
                        </div>
                    </div>
                    <div className="flex w-[350px] h-[28px] text-[10px] gap-[2px] font-normal">
                        <p className="flex text-[10px] font-normal w-[64px] h-[14px]">Pembuat Film</p>
                        <p className="text-[10px] font-normal w-[3px] h-[14px]">:</p>
                        <p className="text-[10px] font-normal w-[280px] h-[28px]">Brendan Hunt, Joe Killy, Bill Lawrence</p>
                    </div>
                </div>
              </div>

                {/* Fullscreen */}

                <div className="max-sm:hidden flex">
                    <div className="flex flex-col w-[381.5px] h-[140px] gap-[4px]">
                        <div className="flex w-[190px] h-[48px] py-[4px] gap-[16px]">
                            <p className="text-[16px] font-semibold">2030</p>
                            <p className="text-[16px] font-semibold">10 episode</p>
                            {/* age circle */}
                        <div className="text-[14px] font-normal justify-center items-center flex w-[40px] h-[40px] border-1 border-white rounded-[24px]">16+</div>
                    </div>
                    <p className="w-[381.5px] h-[86px] text-[16px] font-normal">
                        Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond,
                        tim sepak bola Liga Utama Inggris yang kesulitan.</p>
                    </div>
                
                    {/* Cast , genre, pembuat film content */}
                    <div className=" w-[361.5px] h-[176px] px-[10px] py-[4px] flex-col flex">
                        <div className="flex w-[361.5px] h-[74px] gap-[4px] px-[10px] py-[4px]">
                            <p className="text-[16px] font-normal w-[100px] h-[22px]">Cast</p>
                            <p className="text-[16px] font-normal w-[4px] h-[22px]">:</p>
                            <div className="flex">
                                <p className="text-[16px] font-normal w-[229.5px] h-[66px]">Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain</p>
                            </div>
                        </div> 
                        <div className="flex  w-[361.5px] h-[30px] gap-[4px] px-[10px] py-[4px]">
                            <p className="text-[16px] font-normal w-[100px] h-[22px]">Genre</p>
                            <p className="text-[16px] font-normal w-[4px] h-[22px]">:</p>
                            <div className="flex">
                                <p className="text-[16px] font-normal w-[229.5px] h-[22px]">Komedi, Drama, Olahraga</p>
                            </div>
                        </div>
                        <div className="flex w-[361.5px] h-[74px] gap-[4px] px-[10px] py-[4px]">
                            <p className="flex text-[16px] font-normal w-[100px] h-[22px]">Pembuat Film</p>
                            <p className="text-[16px] font-normal w-[4px] h-[22px]">:</p>
                            <p className="text-[16px] font-normal w-[229.5px] h-[44psx]">Brendan Hunt, Joe Killy, Bill Lawrence</p>
                        </div>
                    </div>
                </div>


            </div>



            {/* Episode */}
             <div className="rounded-b-xl text-white bg-[#181A1C] w-[320px] sm:w-[933px] h-[306px] sm:h-[1200px] px-[19px] sm:px-[80px] py-[10px] sm:py-[24px] gap-[8px] sm:gap-[28px] flex flex-col">
                <h2 className="sm:w-[85px] sm:h-[29px] text-[24px] font-bold">Episode</h2>
                <CardEpisode />
            </div>
    </div>
        
        
        </>

    )
}

    export default Modal


// list movie epsisode
    const episodeData = [
        {
            id: 1,
            name: 'Pilot',
            desc: "American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond",
            time: '30 min',        
            image: imgEps1
        },

        {
            id: 2,
            name: 'Biscuits',
            desc: "Its Teds first day of coaching, and fans aren t happy. He makes little headway but remains undeterred as the team play their first match.",
            time: '29 min',        
            image: imgEps2
        },

        {
            id: 3,
            name: 'Trent Crimm: Independent',
            desc: "To arrange an in-depth exposé, Rebecca pairs cynical journalist Trent Crimm with Ted for a day. Ted and Roy venture into the community.",
            time: '30 min',        
            image: imgEps3
        },

        {
            id: 4,
            name: 'For The Children',
            desc: "Rebecca hosts the teams annual charity benefit, where Ted stages a reconciliation between Roy and Jamie.",
            time: '33 min',        
            image: imgEps4
        },

        {
            id: 5,
            name: 'Tan Lines',
            desc: "With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match.",
            time: '31 min',        
            image: imgEps5
        }
    ]


export const CardEpisode = () => {
        const {movie, setMovie } = storeMovie()

        useEffect(() => {
            setMovie(episodeData)
        }, [movie])

        return  (
            <>
            
            {episodeData.map((eps) => (
            <div className="w-[282px] h-[262px] sm:w-[773px] sm:h-[685px] p-5">
                <div className="hover:bg-amber-300 flex w-[282px] sm:w-[773px] h-[52px] sm:h-[137px] rounded-[1.37px] sm:rounded-[4px] px-[8.23px] sm:px-[24px] py-[5.49px] sm:py-[20px] gap-[8.23px] sm:gap-[24px]">
                    <h2 className="text-[10px] font-normal sm:text-[18px] sm:font-semibold">{eps.id}</h2>
                    <img src={eps.image} alt="eps" className="w-[58.31px] sm:w-[170px] h-[32.93px] sm:h-[96px] border-b-[1.03px] sm:border-b-[3px] border-[#FF0000] "/>
                    <div className="text-white flex flex-col w-[184.77px] h-[41.29px] p-[3.43px] gap-[3.43px] sm:w-[496px] sm:h-[105px] sm:p-[10px] sm:gap-[10px]"> 
                        <div className="flex w-[178px] h-[14px] justify-between sm:w-[500px] sm:h-[25px]">
                            <h2 className="text-[16px] sm:text-[18px] font-semibold w-[120px] h-[14px] sm:w-[220px] sm:h-[25px]">{eps.name}</h2>
                            <p className="text-[10px] font-normal sm:text-[14px] sm:w-[44px] sm:h-[20px] ">{eps.time}</p>
                        </div>
                        <p className="max-sm:truncate text-[10px] font-normal w-[178px] h-[17px] sm:text-[16px] sm:w-[500px] sm:h-[50px]">{eps.desc}</p>
                    </div>
                </div>
            </div>
            
            ))}
            </>
        )
        }

        
