import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import CardSlideshow from "../component/Card/CardSlideshow"
import CardPoster from "../component/Card/CardPoster"
import CardWatch from "../component/Card/CardWatch"
import {HomeSlide} from "../component/Content/Content"
const Home = () => {


    
    return(
    <>
        <Navbar/>
        <CardSlideshow {...HomeSlide}/>
        <CardWatch />
        <CardPoster />

        <Footer/>

    </>
    )
}

export default Home


