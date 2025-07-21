import arwLeft from '/src/img/arrow-left.png'
import arwRight from '/src/img/arrow-right.png'


export const LabelEpisode = () => {
    return (
        <>
        <div className="flex  justify-center items-center absolute w-[44.56px] sm:w-[104px] h-[14px] sm:h-[28px]  rounded-[12px] sm:rounded-[24px] bg-[#0F1E93] ">
            <p className="w-[38px] sm:w-[86px] h-[8px] sm:h-[20px] text-[5.74px] sm:text-[14px] font-bold text-[#ffffff]">Episode Baru</p>
        </div>
        </>
        
    )

}

export const LabelTopMovie = () => {
    return (
        <>
        <div className="absolute justify-center w-[14.82px] sm:w-[31px] h-[21.82px] sm:h-[48px] rounded-tr-[1.91px] sm:rounded-tr-[4px] rounded-bl-[1.91px] sm:rounded-bl-[4px] flex gap-[4.78px] sm:gap-[10px] bg-[#B71F1D]">
            <p className="text-white w-[11px] sm:w-[23px] h-[18px] sm:h-[40px] font-normal text-[6.69px] sm:text-[14px]">Top 10</p>
        </div>
        </>
    )
}


export const LabelPremium = () => {
    return (
        <>
        <div className="bg-[#B7A207] w-[37.56px] h-[14px] rounded-[12px] px-[4.78px] py-[1.91px] sm:w-[78px] sm:h-[28px] sm:rounded-[24px] sm:border-[1px] sm:px-[10px] sm:py-[4px]">
            <p className="text-white w-[28px] h-[9px] sm:w-[58px] sm:h-[20px]  font-bold text-[6.88px] sm:text-[14px]">Premium</p>
        </div>
        
        
        </>

    )
} 


export const BtnArrowLeft = () => {
  return (
      <div id="btn-arrow-left" className='bg-[#2F3334] max-sm:hidden absolute bottom-[-54vh] left-14 w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
        <img src={arwLeft} className='w-[16px] h-[16px]  absolute right-[12px] top-[13px] ' />
      </div>
  )
}

export const BtnArrowRight = () => {
  return (
  <div id="btn-arrow-right" className=' bg-[#2F3334] max-sm:hidden w-[44px] h-[44px] absolute right-[-9vw] bottom-[-54vh] rounded-[50%] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
    <img src={arwRight} alt="right" className='w-[16px] h-[16px] absolute right-[12px] top-[13px]' />
  </div>

  )
}
