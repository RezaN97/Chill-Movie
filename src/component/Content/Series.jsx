import { ChevronDownIcon } from "@heroicons/react/solid"
import { LabelPremium } from "../LabelMovie"
import CardSlideshow from "../Card/CardSlideshow"
import Navbar from "../Navbar"
import imgSlideSeries from "../../img/bg/bg_series.png"

const Series = () =>{
    const [slideSeries, setSlideSeries] = useState({
        title : "Happiness",
        textSlide: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
        image: imgSlideSeries
    })
    

    return(
    <>
    <Navbar />
    <div className="container ">
        <CardSlideshow />
    </div>
    

    </>

    )
}

export default Series