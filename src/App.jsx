import React from 'react'
import PixaImg from './PixabayProjects/PixaImg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './PixabayProjects/Navbar';
import './PixabayProjects/PixaImg.css'

const App = () => {
  return (
    <>
     <div className='body'>
          <Navbar />
          <PixaImg />
        </div>
    </>
  )
}

export default App