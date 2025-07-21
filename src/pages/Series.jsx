import { ChevronDownIcon } from "@heroicons/react/solid"
import { LabelPremium } from "../component/LabelMovie"
import CardPoster from "../component/Card/CardPoster"
import CardSlideshow from "../component/Card/CardSlideshow"
import CardWatch from "../component/Card/CardWatch"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import {SeriesSlide} from "../component/Content/Content"

const Series = () =>{



    return(
    <>
    <Navbar/>
    <CardSlideshow {...SeriesSlide}/>
    <CardWatch/>
    <CardPoster/>
    <Footer />

    </>

    )
}

export default Series