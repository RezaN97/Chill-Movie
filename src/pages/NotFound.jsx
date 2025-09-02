import { useNavigate } from "react-router"
import Modal from "../component/Modal"
import { BearsCounter } from "../Store/zustand"
import { useEffect } from "react"
// import React, {useEffect, useState} from "react"
// import { useMovieStore } from "../Store/zustand"

const NotFound = () =>  {
    




    const navigate = useNavigate()

    return(

    <>
    
        <h1 className="text-white text-5xl text-center font-800">Pages is Not Found!</h1>
       <div className="w-full h-auto flex justify-center mt-9 items-center">
        <button onClick= {() => navigate('/')} className="cursor-pointer  w-40 h-10 bg-amber-700 text-white font-medium">Back</button>
   
       </div>
       <BearsCounter/>



    </>
    )
}

    export default NotFound

// ERROR CODE
// export const MockAPI = () => {

//     const { movies , getMockAPI ,loading, error } = useMovieStore()
//     useEffect(() => {
//         getMockAPI()
//     }, [])

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error}</p>

//     return (
//     <>
    
//     <ul>
//         {movies.map (prop => (
//             <li key={prop.id}>{prop.title}</li>
//         ))}

//     </ul>
    
//     </>
// )}
    
    

// export const ApiTest = () => {
//     const [ userData, setUser ] = useState([])
//     const [ newData, setNewData ] = useState('') 

//     useEffect(()=>{
//         getData('profile_data').then(response => setUser(response.data))
//     }, [])

//     const handleUpdate = (id) => {
//         updateData( id,'profile_data', { username: newData })
//             .then(() => { console.log('Data berhasil update')})

//     }

//     const handleDelete = (id) => {
//         deleteData(id, 'profile_data')
//             .then(() => {console.log('Data Berhasil di Hapus')})
//     }

//     return (
//         <>
//         <div className="w-30 h-15   font-semibold">
//             {userData.map(user =>(
//                 <div key={user.id} className="text-white">
//                     <h1>TEST API</h1>
//                     <hr />
//                     <p>Username: {user.name}</p>
//                     <div className="flex gap-10 w-[20vw] h-[20vh] font-bold">
//                         <button className="bg-blue-400 text-[12px]  w-[15vw] h-[7vh]" onClick={() => handleUpdate(user.id)}>Add Data</button>
//                         <button className="bg-red-400 text-[12px]  w-[15vw] h-[7vh]" onClick={() => handleDelete(user.id)}>Delete Data</button>

//                     </div>
                    
//                 </div>
//             ))}


//         </div>
        
        
        
//         </>

//     )
// }

