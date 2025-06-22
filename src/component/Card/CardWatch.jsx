import {BtnArrowLeft, BtnArrowRight} from '../Content/Content.jsx'

const CardWatch = () => {
    return (
        <>
        {/* Mobile Screen */}
       <div className='sm:hidden pl-4 flex flex-col w-[634px] h-[235px] py-[20px] gap-[20px]'>
           <h2 className='w-[250px] h-[24px] font-bold text-[20px] text-white'>Melanjutkan Tonton Film</h2>
            <div className='flex w-[634px] h-[151px] gap-[16px]'>

                    {/* Card 1 mobile */}
                <div className='flex items-end pb-5 pr-3 text-white w-[309px] h-[165px] gap-[24px] bg-[url("/src/img/slider/Type=31.png")] bg-no-repeat '>
                   <div className="w-[320px] h-[52px] p-[16px] flex justify-between">
                        <div className="w-[100px] h-[20px] text-[14px] font-bold">Don't Look Up</div>
                        <div className="w-[60px] h-[17px] gap-[4px]"> &#9733; 4.9/5</div>
                   </div>
                </div>
                    {/* Card 2 Mobile */}
                <div className='flex items-end pb-5 pr-3 text-white w-[309px] h-[165px] gap-[24px] font-bold bg-[url("/src/img/slider/Type=27.png")] bg-no-repeat bg-cover'>
                   <div className="w-[320px] h-[52px] p-[16px] flex justify-between">
                        <div className="w-[100px] h-[20px] text-[14px] font-bold">Dr.Strange Madness</div>
                        <div className="w-[46px] h-[17px] gap-[4px]"> &#9733; 4.5/5</div>
                   </div>
                </div>
            </div>
        </div>



        {/* FullScreen */}
        <section className="max-sm:hidden font-Lato flex flex-col top-[681px] md:w-[1440px] md:h-[309px] px-[80px] py-[40px] gap-[32px]">
                <h2 className="text-white text-[32px] font-bold">Melanjutkan Tonton Film</h2>
                <div id="image-slider" className="flex flex-row gap-[24px] text-white">
                    
                    <div id="img-look" className="">
                        <div id="txt-nama-film" className="flex text bg-[url('/src/img/slider/Type=31.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">Don't Look Up</div>
                                <div id="txt-rate-film"> &#9733; 4.5/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-all">
                           <div id="txt-nama-film" className="flex text bg-[url('/src/img/slider/Type=17.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">All of us are dead</div>
                                <div id="txt-rate-film"> &#9733; 4.2/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-blue">
                        <div id="txt-nama-film" className="flex text bg-[url('/src/img/slider/Type=5.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">Blue Lock</div>
                                <div id="txt-rate-film"> &#9733; 4.6/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-otto">
                           <div id="txt-nama-film" className="flex text bg-[url('/src/img/slider/Type=9.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">A Man Called Otto</div>
                                <div id="txt-rate-film"> &#9733; 4.4/5</div>
                            </div>
                        </div>
                    </div>
                </div>

            <BtnArrowLeft />
            <BtnArrowRight />

               
        </section>
        </>

    )
}

    export default CardWatch


