import { useNavigate } from "react-router"

const NotFound = () =>  {

    const navigate = useNavigate()

return(

    <>
        <h1 className="text-white text-5xl text-center font-800">Pages is Not Found!</h1>
       <div className="w-full h-auto flex justify-center mt-9 items-center">
        <button onClick= {() => navigate('/')} className="cursor-pointer  w-40 h-10 bg-amber-700 text-white font-medium">Back</button>

       </div>
    </>
)

}

    export default NotFound