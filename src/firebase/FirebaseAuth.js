import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase-config';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from  "firebase/auth"
import { addDoc, collection } from 'firebase/firestore';
const FirebaseAuth = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [userInfo, setUserInfo] = useState()

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // console.log(values);
    useEffect(()=>{
        onAuthStateChanged(auth, (curentvalue) =>{
            setUserInfo(curentvalue)
            // console.log(curentvalue);
        })
        
    },[])
    

    const handelSightOut = ()=>{
        signOut(auth)
    }

    const handleCreateUser = async (e)=>{
        e.preventDefault()
        try {
            const cred = await createUserWithEmailAndPassword(auth, values.email, values.password)
            await updateProfile(auth.currentUser, {
                displayName: "xoiminhnhat"
            })
            console.log("succesfully");
            setUserInfo({ ...auth.currentUser });
            console.log(userInfo);
            const userRef = collection(db, "users");
            await addDoc(userRef, {
            email: values.email,
            password: values.password,
            id: cred.user.uid,
            });
                 
        } catch (error) {
            console.log(error);
            
        }
       
    }

    const handleLogin = async(e)=>{
        e.preventDefault()

        const cred = await signInWithEmailAndPassword(auth, values.email, values.password)
        setUserInfo(cred)
        console.log("login succesfully!!");
        
    }

    return (
        <>
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
          <form onSubmit={handleCreateUser}>
            <input
              type="email"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            <input
              type="password"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              SignUp
            </button>
          </form>
          <div className="flex items-center mt-10 gap-x-5">
            <span>{userInfo?.displayName}</span>
            <button
              className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
              onClick={handelSightOut}
            >
              SignOut
            </button>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            <input
              type="password"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="w-full p-3 text-sm font-medium text-white bg-pink-500 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
};

export default FirebaseAuth;