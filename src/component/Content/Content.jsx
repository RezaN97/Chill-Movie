import CardSlideshow from "../Card/CardSlideshow"
import CardWatch from "../Card/CardWatch"
import CardPoster from "../Card/CardPoster"
import arwLeft from '/src/img/arrow-left.png'
import arwRight from '/src/img/arrow-right.png'
import './Content-style.css'



const Content = () =>{
    return(
        <>
        <div>
            <CardSlideshow />
            <CardWatch />
            <CardPoster />
        </div>
        </>

    )
}

export default Content


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

export const ArrowLeftTop = () => {
  return (
      <div  className='bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] left-[5vw] top-[200vh] absolute rounded-[24px] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
        <div className="bg-[url('/src/img/arrow-left.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
      </div>
  )
}

export const ArrowRightTop = () => {
  return (
  <div  className=' bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] right-[-7vw] top-[200vh] absolute  ${className}  rounded-[50%] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
    <div className="bg-[url('/src/img/arrow-right.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
  </div>

  )
}
export const ArrowLeftTrending = () => {
  return (
      <div  className='bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] left-[5vw] bottom-[-198vh] absolute rounded-[24px] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
        <div className="bg-[url('/src/img/arrow-left.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
      </div>
  )
}

export const ArrowRightTrending = () => {
  return (
  <div  className=' bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] right-[-7vw] bottom-[-200vh] absolute  ${className}  rounded-[50%] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
    <div className="bg-[url('/src/img/arrow-right.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
  </div>

  )
}
export const ArrowLeftNew = () => {
  return (
      <div  className='bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] left-[5vw] bottom-[-285vh] absolute rounded-[24px] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
        <div className="bg-[url('/src/img/arrow-left.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
      </div>
  )
}

export const ArrowRightNew = () => {
  return (
  <div  className=' bg-[#2F3334] max-sm:hidden w-[40px] h-[40px] right-[-7vw] bottom-[-288vh] absolute  ${className}  rounded-[50%] border-[1px] p-[10px] gap-[10px]  border-[#E7E3FC3B]'>
    <div className="bg-[url('/src/img/arrow-right.png')]  bg-no-repeat w-[16px] h-[16px]"></div>
  </div>

  )
}

export const BlueLabel = ({className}) => {
  return (
    <>
     {/* mobile */}
        <div className={`sm:hidden text-white absolute ${className} w-[44.56px] h-[14px] rounded-[12px] bg-[#0F1E93] border-[0.48px] py-[1.91px] px-[4.78px] gap-[1.91px]`}>
            <p>Episode Baru</p>
        </div>
        
        {/* Fullscreen */}
        <div className={`max-sm:hidden font-bold text-[14px] absolute items-center justify-center ${className} text-white flex w-[120px] h-[28px] rounded-[24px] bg-[#0F1E93]  px-[10px] py-[4px] gap-[4px] `}>Episode Baru</div>
   
    </>
  )
}




