import { ChevronDownIcon } from "@heroicons/react/solid"
import { LabelPremium } from "../component/LabelMovie"
// import imgSlideSeries from "../../img/bg/bg_series.png"
import CardPoster from "../component/Card/CardPoster"
import CardSlideshow from "../component/Card/CardSlideshow"
import CardWatch from "../component/Card/CardWatch"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Series = () =>{
    //content slideshow
    // const [slideSeries, setSlideSeries] = useState({
    //     title : "Happiness",
    //     textSlide: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
    //     image: imgSlideSeries
    // })
    

    return(
    <>
    <Navbar/>
    <CardSlideshow/>
    <CardWatch/>
    <CardPoster/>
    <Footer />

    </>

    )
}

export default Series