import axios from 'axios';
import React, { useEffect, useState } from 'react';
import lodash from "lodash"
import useDebounce from '../hooks/useDebounce';
import LoadingSkeleton from './loading/LoadingSkeleton';
const MovieSearchApp = () => {
    const [movie, setMovie] = useState([])
    const [loading,setLoading] = useState(true)
    const [query,setQuery] = useState("")
    const debouncevalue = useDebounce(query,300)
    useEffect(()=>{
        async function fetchData() {
            // if(!debouncevalue) return;
            setLoading(true)
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=46fc0be5658f5f38950ada201f57a245&query=${debouncevalue}`)
            setMovie([respone.data]);
            setLoading(false)
        }
    fetchData()
    },[debouncevalue])
    return (
        <div className='p-10'>
            <div className='w-full max-w-[500px] mx-auto mb-10'>
                <input onChange={(e)=>{setQuery(e.target.value)}} type='text' className='w-full p-5 rounded-lg border border-solid border-purple-500 shadow-[0px_0px_3px_rgba(125,_106,_255,_0.2)' placeholder='Search movie...'></input>
            </div>
            {loading && <div className='grid grid-cols-3 gap-10'>
               <MovieLoading></MovieLoading>
               <MovieLoading></MovieLoading>
               <MovieLoading></MovieLoading>
            </div>}
            <div className='grid grid-cols-3 gap-10'>
                {!loading && movie.length > 0  && movie.map((item,index)=>(
                    <MovieItem key={item.id} data={item}></MovieItem>
                ))}
            </div>
        </div>
    );
};


const MovieLoading = ()=>{
    return (
        <div className='bg-white p-3 rounded-2xl shadow-sm'>
            <div className='h-[297px]'>
            <LoadingSkeleton height="100%" width="100%"></LoadingSkeleton>
            </div>
            <div className='p-7'>
                <h3 className='text-base text-black font-semibold mb-4'>
                    <LoadingSkeleton height="30px" width="100%"></LoadingSkeleton>
                </h3>
                <p className='text-[#999] text-sm mb-6'><LoadingSkeleton height="10px"></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton></p>
            </div>
        </div>
    )
}

const MovieItem = (props)=>{
    return (
        <div className='bg-white p-3 rounded-2xl shadow-sm'>
            <div className='h-[297px]'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`} className='w-full h-full object-cover rounded-lg'></img>
            </div>
            <div className='p-7'>
                <h3 className='text-base text-black font-semibold mb-4'>{props.data.title}</h3>
                <p className='text-[#999] text-sm mb-6'>{props.data.overview}</p>
            </div>
        </div>
    )
}

export default MovieSearchApp;