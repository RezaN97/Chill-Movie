import React, { useState, useEffect } from 'react'
import { useFormState } from 'react-dom'

const Testing = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitData, setSubmit] = useState(null)



    const handleSubmit = (e) => {
        // save local
        localStorage.setItem('username')
        localStorage.setItem('password')

        // set submit data
        setSubmit({ username, password})

    }
 

    return(
        <>
        <div className="text-white flex-col flex justify-center items-center">
            <h1 className="text-5xl font-black">Unit Testing</h1>
            <p>Belajar react</p>
        </div>
        
        <div className="text-amber-500 flex flex-col gap-2">
                <label className='block'>
                    Enter username:
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className='ml-2 border rounded px-2 py-1' />
                </label>
                <label className="">
                    Enter Password:
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='ml-2 border rounded px-2 py-1' />

                </label>
                
            {/* <br /> */}
            {/* Display section */}
            <button type='submit' onClick={handleSubmit} className='w-[10vw] ml-10 bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
       
            {submitData && (
                <div className="pt-4 text-sm text-gray-800">
                    <p><strong>Halo saya: </strong> {submitData.username}</p>
                    <p><strong>Password saya: </strong> {submitData.password}</p>
                </div>
            )}
       
        </div>



    
        
        </>

    )
}

    export default Testing