import React from 'react';
import {Link , NavLink ,Outlet} from "react-router-dom"
const Nav = () => {
    const Navdata = [
        {   
            id: 1,
            to: "/",
            title: "Home" 
        },
        {   
            id: 2,
            to: "/ProFile",
            title: "ProFile" 
        },
        {   
            id: 3,
            to: "/Blog",
            title: "Blog" 
        },
        {   
            id: 4,
            to: "/Contact",
            title: "Contact" 
        },
    ]
    return (
        
        <>
        <div className='flex items-center justify-center gap-5 p-5 shadow-md'>
            {Navdata.map((item)=>(
                <NavLink key={item.id} className={({isActive}) =>(isActive ? "text-green-400" : "")} to={item.to}>{item.title}</NavLink>
            ))}
            {/* <NavLink className={({isActive}) =>(isActive ? "text-green-400" : "")} to={"/ProFile"}>ProFile</NavLink>
            <NavLink className={({isActive}) =>(isActive ? "text-green-400" : "")} to={"/Blog"}>Blog</NavLink>
            <NavLink className={({isActive}) =>(isActive ? "text-green-400" : "")} to={"/Contact"}>Contact</NavLink> */}
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Nav;