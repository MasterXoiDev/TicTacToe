// import axios from 'axios';
// import React, { useReducer, useState } from 'react';
// // import lodash from "lodash"

// const Hacker = () => {

//     const initialState = {
//         query: "",
//         errorMasage: "",
//         data: [],
//         loading: true,
//         url: "https://hn.algolia.com/api/v1/search?query=''"
//     }
//     const reducer = (state,action)=>{
//         return state;
//     }
//     const [state,dispatch] = useReducer(reducer,initialState)
//     React.useEffect(()=>{
//         handleFecth()
//     }, [])
//     const handleFecth = async ()=>{
//         try{
//             // setLoading(true)
//             // const respone = await axios.get(url)
//             // setData(respone.data.hits)
//             // setLoading(false)
//         }catch(error){
//             // setLoading(false)
//             // setError(`we have Error: ${error}`)
//         }
//     }
//     // const handleReloadAPI = () =>{
//     //    setUrl(`https://hn.algolia.com/api/v1/search?query=${state.query}`)
//     // }
//     return (
//         <div className='bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4'>
//            <div className='flex'>
//            <input className='border border-gray-200 p-5 block w-full text-black rounded-md transition-all focus:border-blue-400' placeholder='typing your keyword' defaultValue={query} onChange={(e)=>{setQuery(e.target.value)}}></input>
//            <button onClick={handleReloadAPI} className='bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0'>Fetching</button>
//            </div>
//             {state.loading && (<div className='loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10'></div>)}
//             {!state.loading && state.errorMasage && (<p className='text-red-400 my-5'>{errorMasage}</p>)}
//             <div className='flex flex-wrap gap-5'> {!state.loading && data.length > 0 && data.map((item)=>(
//                 <h3 className='bg-gray-100 rounded-md p-3'>{item.title}</h3>
//            ))}</div>
          
//         </div>
//     );
// };
// export default Hacker;