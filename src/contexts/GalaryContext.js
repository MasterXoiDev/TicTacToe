import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GalaryContext = createContext()


const fakeData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1517098343-2547f8016001?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFavorite : false
    },
    {
        id: 2,
        url: "https://plus.unsplash.com/premium_photo-1676037259364-548bffad01c0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFavorite : false
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1466338323166-f93e7299d3dd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFavorite : false
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1495420233471-7ff3f397d22f?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFavorite : false
    },

]
function Galaryprovider(props){
    const { storedValue, setValue } =  useLocalStorage("photos", fakeData)
    const { storedValue: storedCart, setValue: setStoredCart } =  useLocalStorage("cardItems", [])
    const [photos, setPhotos] = useState(storedValue)
    const [cardItems, setCarditems] = useState(storedCart)
    const [favoriteList, setFavoriteList] = useState([])
    
    function toggleFavorite(photoId){
        // console.log(photoId);
        const updateArray = photos.map((photo)=>{
            if(photo.id === photoId){
                // console.log("work");
                return  {...photo, isFavorite :!photo.isFavorite}
            }
            return photo
        })
        setPhotos(updateArray)
        setValue(updateArray)
        // console.log("work")
    }

    function addToCart(newItem){
        setCarditems((preItem)=>{

            const isExisted = preItem.some(item=> item.id === newItem.id)
            if(isExisted) {
                setCarditems([...preItem])
                return [...preItem]
            }
            setStoredCart([...preItem, newItem]);
            return [...preItem,newItem]
            // if (!preItem.some(item => item.id === newItem.id)) {
            //     return [...preItem, newItem];
            //   }
            //    setCarditems([...preItem])
            //   return preItem;
        })
    }

    function removeCart(photoId){
        setCarditems(prevItems => prevItems.filter(item=> item.id !== photoId))
        setStoredCart(prevItems => prevItems.filter(item=> item.id !== photoId))
    }

    const value = {photos, cardItems, favoriteList,removeCart, setPhotos, setCarditems , setFavoriteList, toggleFavorite, addToCart}

    return <GalaryContext.Provider value={value} {...props}></GalaryContext.Provider>
}

function useGalary(){
    const context = useContext(GalaryContext)
    if(typeof context  === "undefined"){
        throw new Error("plase close your tag in provider")
    }
    return context;
}

export {Galaryprovider, useGalary}