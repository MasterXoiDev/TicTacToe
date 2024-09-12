import React, { useState ,useEffect } from 'react';
import axios from 'axios';

const getPhotos  = (page) =>{
  return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
  .then(function (response) {
    console.log(response.data);
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  }) 
}
const Photos2 = () => {
    const [page, setPage] =  useState(1)
    const [arrPhotos, SetArrPhotos] =  useState([])
    useEffect(() => {
        handleLoadMore()
      }, [])
    const handleLoadMore = () =>{
        getPhotos(page).then((image)=>{
            const newPhotos = [...arrPhotos, ...image]
            SetArrPhotos(newPhotos)
        })
        setPage(page + 1)
    }
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 '>
        {arrPhotos.map((item, index) => (
          <div key={index} className='bg-white rounded-lg p-3'>
            <img className=' m-auto rounded-lg w-full object-cover h-[200px]' src={item.download_url}></img>
          </div>
        ))}
      </div>
      <div className='mt-10 text-center'>
        <button onClick={handleLoadMore} className='inline-block px-4 py-4 bg-purple-600 text-white rounded-lg'>Load More</button>
      </div>
        </div>
    );
};

export default Photos2;