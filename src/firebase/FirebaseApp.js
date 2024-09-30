import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './firebase-config';

const FirebaseApp = () => {
    const colRef = collection(db,"posts")
    // let posts = []
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [postId,setPostId] = useState()
    const [post, setPost] = useState([])
    useEffect(()=>{
        // {not real time}
        // getDocs(colRef).then((snapshot)=>{
        //     snapshot.docs.forEach((doc)=>{
        //         posts.push({
        //             id: doc.id,
        //             ...doc.data()
        //     })
        //     })
        //     setPost(posts)
        //     console.log(post);
            
        // }).catch((error)=>{
        //     console.log(error);
        // })
        // use onSnapshot is realtime
        onSnapshot(colRef, (snapshot) => {
            let posts = [];
            snapshot.docs.forEach((doc) => {
              posts.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setPost(posts);
            // update dữ liệu qua id 
            // const docRefSigle = doc(db,"posts", "lq8ctVJfpZrE8DFlStFi")
            // getDoc(docRefSigle).then((doc)=>{
            //   console.log(doc.id, doc.data());
            // })
          }) }, []);
    const handleUpdatePost = (e)=>{
        e.preventDefault()
        addDoc(colRef, {
            title: title,
            author: author,
            create : serverTimestamp()
        }).then(()=>{
            console.log("success");  
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleRemovePost = async(e)=>{
        e.preventDefault()
        const conRefDelete = await doc(db,"posts", postId)
        deleteDoc(conRefDelete)
        console.log("success");
    }

    useEffect(()=>{
      // firebase queries
      const q = query(colRef, where("author","==","xoiminhnhat"),  limit(2))
      onSnapshot(q, (snapshot)=>{
        const posts = [];
        snapshot.docs.forEach((doc)=>{
          posts.push({
            id: doc.id,
           ...doc.data()
          })
        })
        console.log(posts);
      })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e)=>{setAuthor(e.target.value)}}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>

        {/* remove post */}
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e)=>{setPostId(e.target.value)}}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>

      {/* posts */}
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {post.length > 0 && post.map((item)=>(
            <div key={item.id}>
                {item.title} - {item.author}
            </div>
        ))}
      </div>
    </div>
    );
};

export default FirebaseApp;