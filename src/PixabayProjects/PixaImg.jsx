import React, { useContext } from 'react'
import PixabayContext from './SetContextAPI/PixabayContext'
import './PixaImg.css'

const PixaImg = () => {
    const { pixaImg } = useContext(PixabayContext)

  return (
    <>
       <div className="container">
        <div className="contain">
            {pixaImg.map((data)=>
                <div key={data.id}>
                    <div className="item">
                    <img src={data.largeImageURL} alt="Pixabay images" />
                    </div>
                </div>
                )}
        </div>
       </div>
    </>
  )
}

export default PixaImg
