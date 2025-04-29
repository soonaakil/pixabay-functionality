import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
    const [pixaImg, setPixaImg] = useState([])
    const [query, setQuery] = useState([])

    const api_key = "49902416-eceaab140c6ca59322d1afa71";
    
    useEffect(() => {
        const fetchPixabay = async ()=> {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true`);
            const data = await api.json();
            setPixaImg(data.hits);
            console.log(data.hits);
        };
        fetchPixabay();
    }, [query])

    const fetchImgByCat = async (cat)=> {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true`);
        const data = await api.json();
        setPixaImg(data.hits);
        console.log(data.hits);
    }

  return (
    <PixabayContext.Provider value={{
        pixaImg,
        fetchImgByCat,
        setQuery,
    }}>
        {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState


