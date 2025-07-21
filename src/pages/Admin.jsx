import React, { useState, useEffect } from 'react'
import { getData, postData, updateData, deleteData } from '../service/api/apiCRUD'
import { NavLink } from 'react-router'

const Admin = () => {
    const [movie, setMovie] = useState([])
    const [formData, setFormData] = useState({title:'', release:'', genre:[], rating:''}) //form input
    const [editID, setEditID] = useState(null)
    const [endpoint, setEndPoint] = useState('info')
    

    // Fetch data
    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async () => {
        try {
            const {data} = await getData(endpoint)
            setMovie(data)
            console.log(movie)
        } catch (error) {
            console.error("Error getting data:", error)
        }
    }



    // Handle input form
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
                if(editID) {
                    await updateData(endpoint,`${editID}`, formData)
                    alert("Film berhasil di Update")
                } else {
                    await postData(endpoint, formData)
                    alert("Berhasil menambahkan film")
                }
                fetchAPI()
                setFormData({title:'', release:'',  genre:[], rating:''})
                setEditID(null)

        } catch (error) {
            console.log("Error :", error)
        }
    }

    // Delete product
    const handleDelete = async (id) => {
        if (confirm("Ingin menghapus?")){
            await deleteData( endpoint,`${id}`)
            fetchAPI()
        }
    }

    // Edit data
    const handleEdit = (movie) => {
        setFormData({
            title: movie.title,
            release: movie.release,
            genre: movie.genre,
            rating: movie.rating
        })
        setEditID(movie.id)
    }



    return (
    <>
    {/* Full Screen */}
    <div className="max-sm:hidden border-5 rounded-xl pt-2 px-5 w-[120vw] h-110 container mx-auto my-10 text-white  bg-[#2F3334] justify-center items-center">
        <div className="flex gap-10">
                <h1 className=' text-2xl font-bold mb-10'>Admin Dashboard - Chill Movie</h1>
                <button className="absolute right-80 top-14 bg-red-600 hover:bg-red-900 font-semibold w-10 h-10 rounded-3xl align-top text-2xl flex justify-center"> <NavLink to={'/home'}>x</NavLink></button>
            </div>
            <div className="flex gap-5">
                {/* form input */}
                <form className='flex flex-col gap-4 'onSubmit={handleSubmit}>
                    <input value={formData.title} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="title"  placeholder="Masukan Nama Film "/>
                    <input value={formData.release} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="release"  placeholder="Waktu Release Film"/>
                    <input value={formData.genre} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="genre"  placeholder="Masukan Genre Film "/>
                    <input value={formData.rating} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="rating"  placeholder="Masukan Rating Film"/>
                    {/* button */}
                    <div className="flex w-auto">
                        <button type='submit' className="cursor-pointer w-30 h-9 font-semibold rounded-3xl bg-blue-700 hover:bg-blue-900">Tambah Data</button>
                    </div>
                </form>

            {/* Display result from MOCKAPI */}
            <div className="rounded-xl p-3 w-[80vw] h-80 border-2 overflow-y-scroll">
                
                {/* header result*/}
                <div className="flex gap-30 px-2 bg-red-600 mb-2">
                    <p className='pl-10 w-[2vw] font-semibold text-xl'>Title</p>
                    <p className='pl-6 w-[2vw] font-semibold text-xl'>Release</p>
                    <p className='w-[2vw] font-semibold text-xl'>Genre</p>
                    <p className='pl-7 w-[2vw] font-semibold text-xl'>Rating</p>
                </div>

                {/* Data Film */}
                <ul className='py-2 font-semibold flex flex-col gap-2'>
                    {movie.map(prop => (
                        <>
                            {/* content */}
                            <li key={prop.id} className='flex justify-between text-[12px]'>
                                <div className="flex gap-10">
                                    <p className='w-[1vw]'>{prop.id}</p>
                                    <p className='w-[8vw] font-normal '>{prop.title}</p>
                                    <p className='w-[5vw]'>{prop.release}</p>
                                    <p className='w-[12vw]'>{prop.genre}</p>
                                    <p className='w-[4vw]'>{prop.rating}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(prop)} className='rounded-xl w-[5vw] h-[4vh] bg-amber-500 cursor-pointer'>Edit</button>
                                    <button onClick={() => handleDelete(prop.id)} className='rounded-xl w-[5vw] h-[4vh] bg-red-500 cursor-pointer'>Hapus</button>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    
    {/* Mobile Screen */}
       <div className="sm:hidden border-2 rounded-xl pt-2 pb-3 px-2 w-[120vw] h-full container mx-auto my-10 text-white  bg-[#2F3334] justify-center items-center">
        <div className="flex gap-10">
                <h1 className=' text-[1.25rem] font-bold mb-10'>Admin Dashboard - Chill Movie</h1>
                <button className="absolute left-83 top-14 bg-red-600 hover:bg-red-900 font-semibold w-7 h-7 rounded-3xl  text-2xl flex justify-center items-center pb-2"> <NavLink to={'/home'}>x</NavLink></button>
            </div>
            <div className="flex flex-col gap-4">
                {/* form input */}
                <form className='flex flex-col gap-4 'onSubmit={handleSubmit}>
                    <input value={formData.title} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-full h-10 rounded-xl' type="text" name="title"  placeholder="Masukan Nama Film "/>
                    <input value={formData.release} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-full h-10 rounded-xl' type="text" name="release"  placeholder="Waktu Release Film"/>
                    <input value={formData.genre} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-full h-10 rounded-xl' type="text" name="genre"  placeholder="Masukan Genre Film "/>
                    <input value={formData.rating} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-full h-10 rounded-xl' type="text" name="rating"  placeholder="Masukan Rating Film"/>
                    {/* button */}
                    <div className="flex w-auto">
                        <button type='submit' className="cursor-pointer w-28 h-9 font-semibold rounded-3xl bg-blue-700 hover:bg-blue-900">Tambah Data</button>
                    </div>
                </form>

            {/* Display result from MOCKAPI */}
            <div className="rounded-xl w-full h-80 border-2 overflow-scroll">
                
                {/* header result*/}
                <div className="flex w-[165vw] gap-12 px-2 bg-red-600  mb-2">
                    <p className='w-10 pl-9 font-semibold text-20'>Title</p>
                    <p className='w-10 pl-18 font-semibold text-20 '>Release</p>
                    <p className='w-10 pl-16 font-semibold text-20'>Genre</p>
                    <p className='w-10 pl-15 font-semibold text-20 '>Rating</p>
                </div>
                

                {/* Data Film */}
                <ul className='py-2 flex flex-col gap-2'>
                    {movie.map(prop => (
                        <>
                            {/* content */}

                            <li key={prop.id} className='justify-between flex gap-3 text-[12px] '>
                                <div className="flex gap-10">
                                    <p className='w-1'>{prop.id}</p>
                                    <p className='w-20'>{prop.title}</p>
                                    <p className='w-16'>{prop.releaseDate}</p>
                                    <p className='w-25'>{prop.genre}</p>
                                    <p className='w-15'>{prop.rating}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(prop)} className='rounded-xl w-[10vw] h-[4vh] bg-amber-500 cursor-pointer'>Edit</button>
                                    <button onClick={() => handleDelete(prop.id)} className='rounded-xl w-[10vw] h-[4vh] bg-red-500 cursor-pointer'>Hapus</button>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    </div>
        

        
        </>
    )
}

export default Admin