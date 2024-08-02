import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPhotos = (page) => {
    return axios
        .get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        })
}
const Photos2 = () => {
    const [arrPhoto, SetArrPhoto] = useState([])
    // const [nextPage, SetNextPage] = useState(6)
    const [page, SetPage] = useState(1)
    useEffect(() => {
       handleLoadmore()
    }, [])
    const handleLoadmore = ()=>{
        SetPage(page + 1) 
        GetPhotos(page).then((item) => {
            const NewPhotos = [...arrPhoto, ...item]
            SetArrPhoto(NewPhotos)
            console.log(NewPhotos)
        })
    }
    return (
        <div>
            <div className='grid grid-cols-3 bg-white'>
                {arrPhoto.map((item,index)=>(
                    <div key={index} className='gap-4 rounded-lg px-4 py-7'>
                        <img className='w-full object-cover h-[400px] rounded-lg ' src={item.download_url}></img>
                    </div>
                ))}
        </div>
        <div className='text-center bg-white'>
        <buton onClick={handleLoadmore} className="bg-purple-600 inline-block p-8 rounded-lg font-bold text-white cursor-pointer hover:bg-purple-400">Load More</buton>
        </div>
        </div>
    );
};

export default Photos2;