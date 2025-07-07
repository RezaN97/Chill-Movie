import React,{useState,useEffect} from 'react'
import api from '../service/api/apiConfig'
import { getData, postData, updateData, deleteData, putData } from '../service/api/apiCRUD'
import { NavLink } from 'react-router'
// set api
const URL = api

const Admin = () => {
    const [movie, setMovie] = useState([])
    const [isValid, setIsValid] = useState(false)
    const [formData, setFormData] = useState({ nama:"", genre: "", deskripsi: "", rating: "" })
    const [editID, setEditID] = useState(null)

    // Fetch data
    // useEffect(() => {
    //     fetchAPI()
    // }, [])

    // const fetchAPI = async () => {
    //     try {
    //         const {data} = await axios.get(URL)
    //         setMovie(data)
    //     } catch (error) {
    //         console.error("Error getting data:", error)
    //     }
    // }

    // Handle input form
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }


    // Handle submit
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         await putData(id, endpoint)
    //         alert('Data success update')
    //     } catch (error) {
    //         console,log('Error fetch data:', error)
    //     }

    // }

    return (

        <>
        <div className="border-5 rounded-xl pt-2 px-10 w-2xl h-110 container mx-auto my-10 text-white  bg-amber-500 justify-center items-center">
            <h1 className=' text-2xl font-bold mb-10'>Admin Dashboard</h1>

           <div className="flex justify-center">
                <form className='flex flex-col gap-9'>
                    <input className='focus:bg-amber-950 p-3 bg-amber-600 w-xl h-10 rounded-xl' type="text" name="nama"  placeholder="Masukan Nama Film "/>
                    <input className='focus:bg-amber-950 p-3 bg-amber-600 w-xl h-10 rounded-xl' type="text" name="genre"  placeholder="Masukan Genre Film"/>
                    <input className='focus:bg-amber-950 p-3 bg-amber-600 w-xl h-10 rounded-xl' type="text" name="deskripsi"  placeholder="Masukan Deskripsi Film"/>
                    <input className='focus:bg-amber-950 p-3 bg-amber-600 w-xl h-10 rounded-xl' type="number" name="rating"  placeholder="Masukan Rating Film"/>
                      <div className="flex justify-between">
                        <button className="cursor-pointer w-30 h-9 font-semibold rounded-3xl bg-green-700">Tambah Data</button>
                        <NavLink to={'/home'} className="flex justify-center items-center w-30 h-9 font-semibold rounded-3xl bg-blue-700">Kembali</NavLink>
                      </div>
                </form>

           </div>

            {/* Display result from MOCKAPI */}
            <ol>
                <li></li>
            </ol>

        </div>
        
        
        
        </>
    )
}

export default Admin