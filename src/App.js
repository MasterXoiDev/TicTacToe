
import { createContext, Fragment, useContext, useState } from 'react';
import './App.css';
import DropdownPortal from './components/dropdown/DropdownPortal';
import Modal from './components/modal/Modal';
import { CounterProvider, useCount } from './contexts/CounterContext';
import HeaderAuth from './components/HeaderAuth';
import { AuthProvider } from './contexts/AuthContext';
import { Galaryprovider } from './contexts/GalaryContext';
import PhotoGallary from './components/gallary/PhotoGallary';
import CardList from './components/gallary/CardList';
import { Routes, Route } from "react-router-dom"
import Blog from './components/Blog';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Nav from './components/Nav';
import FetchingData from './components/advanced-react/hoc/FetchingData';


// const Counter = ()=>{
//   const [,setCount] = useCount()
//   const handleSetCount = ()=>{
//     setCount(c => c + 1)
//   }
//   return(
//     <button onClick={handleSetCount} className='p-5 text-white bg-blue-500 rounded-lg'>Incre</button>
//   )
// }
// const CounterDisplay = ()=>{
//   const [count] = useCount()
//   return(
//     <div className=''>
//     this is :{count}
//     </div>
//   )
// }

function App() {
  return (
    <div>

      {/* <AuthProvider>
        <Galaryprovider>
            <HeaderAuth></HeaderAuth>
            <PhotoGallary></PhotoGallary>
            <CardList></CardList>
        </Galaryprovider>
       </AuthProvider> */}

      {/* <Routes>
        <Route path='/' element={<Nav></Nav>}> 
          <Route path='/' element={<>This Home Page</>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Route>
        <Route path='*' element={<>Error: 404 Not Found Page</>}></Route>
      </Routes> */}

      <FetchingData></FetchingData>
    </div>


  );
}



export default App;
