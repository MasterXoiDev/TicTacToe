import React, {  useEffect, useState } from 'react';

const withLoading = (Components, url) => {
    return (props) =>{
        const [news, setNews] = useState([])
        useEffect(()=>{
            async function fetchData() {
                const respone = await fetch(url)
                const data = await respone.json()
                console.log("data", data);
                setNews(data.hits)
            
            }

            fetchData()
        },[])
        if(!news || news.length === 0 ) return <div>loading....</div>
        return <Components data={news} {...props}></Components>
    }
};

export default withLoading;