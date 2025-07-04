import { create } from 'zustand'
import { getAPI, movieAPI, postAPI } from '../service/api/movieAPI'
import { movieAPI } from '../service/api/movieAPI'

const newStore = create((set) => ({
    bears: 0, 
    species: 'Polar Bears',
    incrasePopulation: () => set((state) => ({bears: state.bears + 1}))
    
}))

export const storeMovie = create((set) => ({
    movie: [],
    setMovie: (data) => set({ movie: data}),
    addMovie: (data) => set((state) => ({
        movie: [...state.movie, data]
    }))
}))

export const useStoreAPI = create((set) => ({
    movieAPI:[],
    fetchAPI: async () => {
        try{
            const res = await axios.get(movieAPI)
        } catch (err)  {
            console.log('Gagak memuat data ')
        }
    }

}))


// TESTING USING ZUSTAND
export const BearsCounter = () => {
    const bearsSpecies = newStore((state) => state.species)
    const valueBears = newStore((state) => state.bears)
    const addBears = newStore((state) => state.incrasePopulation)

    const condition = valueBears > 5 ? <p className='text-white'>You have more than 5 bears</p> : <p className='text-white'>You bears are alone</p>
    return (
       <>
       <div className="px-5">
            <h1 className='text-2xl font-bold text-white'>Zustand Result</h1>
            <hr className='text-white'/>
            <h2 className="text-white font-bold text-xl ">Bears Species is : {bearsSpecies}</h2>
            <h2 className="text-white font-bold text-xl ">Bears now is : {valueBears}</h2>
            <br />
            <button onClick={addBears} className="cursor-pointer bg-amber-600 w-20 h-9 text-white font-semibold">Add Bears</button>
            <br />
            {condition}
            <hr className='text-white my-5'/>
       </div>


       </> 
    )
}








