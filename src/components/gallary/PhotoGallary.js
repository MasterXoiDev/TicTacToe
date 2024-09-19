import React from 'react';
import { useGalary } from '../../contexts/GalaryContext';
import PropTypes from 'prop-types';

const PhotoGallary = () => {
    const { photos, cardItems } = useGalary()
    // console.log(photos)
    // console.log(cardItems);
    
    

    return (
        <div className='px-5 py-10'>
            <div className='grid grid-cols-4 gap-10'>
                {photos.length > 0 && photos.map((item) => <PhotoItem key={item.id} info={item}></PhotoItem>)}
            </div>
        </div>
    );
};


const PhotoItem = ({ info: { url, id, isFavorite } }) => {
    const {toggleFavorite , addToCart} = useGalary()
    
    // console.log(isFavorite);

    const item = {url, id, isFavorite}
    // console.log(id);
    
    
    return (
        <div className='relative h-[300px] cursor-pointer group'>
            <img src={url} alt="" className='object-cover w-full h-full' />
            <span className='absolute z-10 visible w-8 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible' onClick={()=>toggleFavorite(id)}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M4.16663 17.5C4.16611 14.4798 5.37993 11.5863 7.53499 9.47045C9.69005 7.35458 12.6053 6.19405 15.625 6.24998C19.2027 6.23098 22.6166 7.74826 25 10.4166C27.3833 7.74826 30.7972 6.23098 34.375 6.24998C37.3946 6.19405 40.3099 7.35458 42.4649 9.47045C44.62 11.5863 45.8338 14.4798 45.8333 17.5C45.8333 28.6583 32.5437 37.0833 25 43.75C17.4729 37.0271 4.16663 28.6666 4.16663 17.5Z" fill={isFavorite ? "#ff6bcb" : "#eee"}/>
</svg>
</span>
            <button className='absolute visible p-4 px-6 py-3 font-medium text-black transition-all bg-white rounded-lg opacity-0 bottom-5 left-2/4 -translate-x-2/4 group-hover:opacity-100 group-hover:visible ' onClick={()=>{addToCart(item)}}>Add to cart</button>
        </div>
    )
}

PhotoItem.prototype = {
    url: PropTypes.string,
    id: PropTypes.number,
    isFavorite: PropTypes.bool

}
export default PhotoGallary;