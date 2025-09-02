import posterAnime from '../../img/poster/poster14.png'
import posterJurassic from '../../img/poster/poster25.png'
import posterSonic from '../../img/poster/poster29.png'
import posterAllofus from '../../img/poster/poster9.png'
import posterBighero from '../../img/poster/poster12.png'
import posterWar from '../../img/poster/poster7.png'
import posterAntman from '../../img/poster/poster16.png'
import posterGuardian from '../../img/poster/poster30.png'
import posterOtto from '../../img/poster/poster10.png'
import posterMermaid from '../../img/poster/poster6.png'
import posterMissing from '../../img/poster/poster13.png'
import posterDuty from '../../img/poster/poster17.png'
import { LabelEpisode, LabelTopMovie, BtnArrowLeft, BtnArrowRight } from '../LabelMovie.jsx'

const CardPoster = () => {
    return (
    <>
    <BtnArrowLeft />
    <TopMovie />
    <BtnArrowRight />

    <BtnArrowLeft />
    <TrendingMovie />
    <BtnArrowRight />

    <BtnArrowLeft />
    <NewMovie />
    <BtnArrowRight />
    
    

    </>
    )
}
    export default CardPoster




export const TopMovie = () => {
    return (
    <>
            {/* Mobile Screen */}
    <div className="sm:hidden px-[5vw]  w-[428px] h-[189px] gap-[20px]">
        <h2 className='w-[303px] h-[24px] text-white font-bold text-[20px] '>Top Rating Film dan Series Hari ini</h2>
     
        {/* Card */}
        <div className='mt-2 w-[428px] h-[145px] gap-[16px] flex'>
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterAnime} alt="anime" />
            </div>
            
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterJurassic} alt="dino" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterAllofus} alt="allofus" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterSonic} alt="sonic" />
            </div>
        </div>

    </div>

    {/* fullscreen */}
    <div className=" max-sm:hidden  w-full h-[512px] px-[80px] py-[40px] gap-[32px]">
        <h2 className='w-[520px] h-[35px] font-bold text-white text-[32px]'>Top Rating Film dan Series Hari ini</h2>
         {/* card fullscreen */}
         <div className="w-[1280px] h-[385px] gap-[28px] flex mt-5">
           <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="relative left-[2vw] top-[3vh]">
                    <LabelEpisode/>
                </div>
                <img src={posterAnime} alt="anime"/>
            </div>
            
            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterJurassic} alt="dino" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterSonic} alt="sonic" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterAllofus} alt="allofus" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterBighero} alt="bighero" />
            </div>
         </div>
    </div>
    </>
    )
}

export const TrendingMovie = () => {
    return (
    <>
                {/* Mobile Screen */}
    <div className="sm:hidden px-[5vw]  w-[428px] h-[189px] gap-[20px]">
        <h2 className='w-[303px] h-[24px] text-white font-bold text-[20px] '>Film Trending</h2>
     
        {/* Card */}
        <div className='mt-2 w-[428px] h-[145px] gap-[16px] flex'>
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterWar} alt="war" />
            </div>
            
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterAntman} alt="antman" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterGuardian} alt="gog" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterSonic} alt="sonic" />
            </div>
        </div>

    </div>

    {/* fullscreen */}
    <div className="max-sm:hidden  w-full h-[512px] px-[80px] py-[40px] gap-[32px]">
        <h2 className='w-[485px] h-[35px] font-bold text-white text-[32px]'>Film Trending</h2>
         {/* card fullscreen */}
         <div className="w-[1280px] h-[385px] gap-[28px] flex mt-5">
           <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterWar} alt="war" />
            </div>
            
            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterAntman} alt="antman" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterGuardian} alt="guardian" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterOtto} alt="otto" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterMermaid} alt="mermaid" />
            </div>
         </div>
    </div>

    </>
    )
}

export const NewMovie = () => {
    return (
    <>
                   {/* Mobile Screen */}
    <div className="sm:hidden px-[5vw]  w-[428px] h-[189px] gap-[20px]">
        <h2 className='w-[303px] h-[24px] text-white font-bold text-[20px] '>Rilis Baru</h2>
     
        {/* Card */}
        <div className='mt-2 w-[428px] h-[145px] gap-[16px] flex'>
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterMermaid} alt="mermaid" />
            </div>
            
            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterDuty} alt="duty" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterBighero} alt="bighero" />
            </div>

            <div className="w-[95px] h-[145px] gap-[4px]">
                <img src={posterMissing} alt="missing" />
            </div>
        </div>

    </div>

    {/* fullscreen */}
    <div className="max-sm:hidden  w-full h-[512px] px-[80px] py-[40px] gap-[32px]">
        <h2 className='w-[485px] h-[35px] font-bold text-white text-[32px]'>Rilis Baru</h2>
         {/* card fullscreen */}
         <div className="w-[1280px] h-[385px] gap-[28px] flex mt-5">
           <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="flex relative left-[15vw]">
                    <LabelTopMovie />
                </div>
                <img src={posterMermaid} alt="mermaid" />
            </div>
            
            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="relative left-[2vw] top-[3vh]">
                    <LabelEpisode/>
                </div>
                <img src={posterDuty} alt="duty" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterBighero} alt="bighero" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <div className="relative left-[2vw] top-[3vh]">
                    <LabelEpisode/>
                </div>
                <img src={posterAllofus} alt="allofus" />
            </div>

            <div className="flex w-[234px] h-[365px] gap-[10px]">
                <img src={posterMissing} alt="missing" />
            </div>
         </div>
    </div>
    </>
    )
}


























































































































































































































































































































































































































































































































































































































































































































































