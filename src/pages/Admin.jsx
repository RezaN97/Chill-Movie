import React, { useState, useEffect } from 'react'
import { getData, postData, updateData, deleteData } from '../service/api/apiCRUD'
import { NavLink } from 'react-router'

const Admin = () => {
    const [movie, setMovie] = useState([])
    const [formData, setFormData] = useState({title:'', genre:'', description:'', rating:''})
    const [editID, setEditID] = useState(null)

    // Fetch data
    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async () => {
        try {
            const {data} = await getData('movies')
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
                    await updateData('movies',`${editID}`, formData)
                    alert("Film berhasil di Update")
                } else {
                    await postData('movies', formData)
                    alert("Berhasil menambahkan film")
                }
                fetchAPI()
                setFormData({title:'', genre:'', description:'', rating:''})
                setEditID(null)

        } catch (error) {
            console.log("Error :", error)
        }
    }

    // Delete product
    const handleDelete = async (id) => {
        if (confirm("Ingin menghapus?")){
            await deleteData(`${id}`,'movies')
            fetchAPI()
        }
    }

    // Edit data
    const handleEdit = (movie) => {
        setFormData({
            title: movie.title,
            genre: movie.genre,
            description: movie.description,
            rating: movie.rating
        })
        setEditID(movie.id)
    }



    return (
        
        <>
        <div className=" border-5 rounded-xl pt-2 px-5 w-[120vw] h-110 container mx-auto my-10 text-white  bg-[#2F3334] justify-center items-center">
            <div className="flex gap-10">
                <h1 className=' text-2xl font-bold mb-10'>Admin Dashboard - Chill Movie</h1>
                <button className="absolute right-80 top-14 bg-red-600 hover:bg-red-900 font-semibold w-10 h-10 rounded-3xl align-top text-2xl flex justify-center"> <NavLink to={'/home'}>x</NavLink></button>
            </div>
            <div className="flex gap-5">
                {/* form input */}
                <form className='flex flex-col gap-4 'onSubmit={handleSubmit}>
                    <input value={formData.title} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="title"  placeholder="Masukan Nama Film "/>
                    <input value={formData.genre} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="genre"  placeholder="Masukan Genre Film "/>
                    <input value={formData.description} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="text" name="description"  placeholder="Masukan Deskripsi Film"/>
                    <input value={formData.rating} onChange={handleChange} className='focus:bg-amber-950 p-3 bg-[#181A1C] w-50 h-10 rounded-xl' type="number" name="rating"  placeholder="Masukan Rating Film"/>
                    {/* button */}
                    <div className="flex w-auto">
                        <button type='submit' className="cursor-pointer w-30 h-9 font-semibold rounded-3xl bg-blue-700 hover:bg-blue-900">Tambah Data</button>
                    </div>
                </form>

            {/* Display result from MOCKAPI */}
            <div className="rounded-xl p-3 w-[80vw] h-80 border-2 overflow-y-scroll">
                
                {/* header result*/}
                <div className="flex gap-15 px-2 bg-red-600 mb-2">
                    <p className='font-semibold text-xl'>Title</p>
                    <p className='font-semibold text-xl'>Genre</p>
                    <p className='font-semibold text-xl ml-[8vw]'>Desc</p>
                    <p className='font-semibold text-xl ml-[7vw]'>Rating</p>

                </div>
                {movie.map(prop => (
                    <ol className='px-2'>
                        {/* content */}
                        <li key={prop.key} className='flex gap-3 text-[12px]'>
                            <p>{prop.title}</p>
                            <p>{prop.genre}</p>
                            <p>{prop.description}</p>
                            <p>{prop.rating}</p>
                            <button onClick={handleEdit} className='rounded-xl w-[5vw] h-[4vh] bg-amber-500 cursor-pointer'>Edit</button>
                            <button onClick={handleDelete} className='rounded-xl w-[5vw] h-[4vh] bg-red-500 cursor-pointer'>Hapus</button>
                        </li>
                    </ol>
                ))}
                
            </div>



                
            </div>
          

        </div>
        
        
        
        </>
    )
}

export default Admin