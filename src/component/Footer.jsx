import logoChill from '../img/logo-full.png'
import footerArrow from '../img/arrow-footer.png'


const Footer = () => {
    return(
    <>
    <footer className='bg-[#181A1C] border-t-1 p-[20px] sm:py-[60px] sm:px-[80px] gap-[40px] sm:gap-[20px] text-white flex flex-col w-[360px] sm:w-[1440px] h-[193.75px] sm:h-[284px] ' >
      
      {/* Mobile Screen  */}

        {/* <!-- footer copyright mobile--> */}
        <div className="sm:hidden">
            <img src={logoChill} alt="logo" className='w-[84px] h-[24.75px] gap-[3px]' />
            <p className='text-[12px] font-normal'>&copy; 2023 Chill All Rights Reserved</p>
        </div>

        {/* Navigasi mobile*/}
        <div className='sm:hidden flex flex-col w-[320px] h-[56px] gap-[8px] items-center'>
           
            {/* genre mobile */}
            <div className="flex w-[320px] h-[24px] items-center justify-between">
                <span>Genre</span>
                <div className=''>
                    <img src={footerArrow} alt="arrowfooter" />
                </div>
            </div>


            {/* bantuan mobile */}
            <div className='flex w-[320px] h-[24px] items-center justify-between '>
                <span>Bantuan</span>
                <div className="">
                    <img src={footerArrow} alt="arrowFooter" />
                </div>
            </div>

        </div>

        {/* End Mobile Screen */}

        {/* Full Screen */}
        <div className="max-sm:hidden w-full h-[164x] flex justify-between">
            {/* <!--  copyright full screen --> */}
            <div className="w-[251px] h-[91px] gap-[26px]">
                <img src={logoChill} alt="logo" className='w-[163px] h-[44px] gap-[4px]' />
                <p className='w-[251px] h-[21px] font-Poppins font-normal text-[16px]'>&copy; 2023 Chill All Rights Reserved</p>
            </div>

            {/* container genre dan bantuan full screen*/}
            <div className="w-[814px] h-[164px] flex gap-[160px]">

                {/* genre */}
                <div className='w-[514px] h-[164px]'>
                    <p className='w-[45px] h-[22px] font-bold text-[16px] mb-1'>Genre</p>
                    <div className="grid grid-cols-4 grid-rows-4 gap-[5px]">
                        <div>Aksi</div>
                        <div>Drama</div>
                        <div>Komedi</div>
                        <div>Sains & Alam</div>
                        <div>Anak-anak</div>
                        <div>Fantasi Ilmiah & Fantasi</div>
                        <div>Petualangan</div>
                        <div>Thriller</div>
                        <div>Anime</div>
                        <div>Kejahatan</div>
                        <div>Perang</div>
                        <div>Britania</div>
                        <div>KDrama</div>
                        <div>Romantis</div>
                    </div>
                
                </div>

                {/* bantuan */}
                <div className="w-[140px] h-[164px] flex flex-col gap-[15px]">
                    <p className='w-[61px] h-[22px] font-bold text-[16px]'>Bantuan</p>
                    <div>FAQ</div>
                    <div>Kontak Kami</div>
                    <div>Privasi</div>
                    <div>Syarat & Ketentuan</div>
                </div>

            </div>
            
    
        </div>    
       
    </footer>
    </>
    )
}


export default Footer 