import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './PixaImg.css'
import PixabayContext from './SetContextAPI/PixabayContext';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const { fetchImgByCat, setQuery } = useContext(PixabayContext)

  return (
    <>
        <div className='nav-container'>
            <Button onClick={()=> fetchImgByCat('education')} variant="outline-primary">Education</Button>
            <Button onClick={()=> fetchImgByCat('health')} variant="outline-secondary">Health</Button>
            <Button onClick={()=> fetchImgByCat('industry')} variant="outline-success">Industry</Button>
            <Button onClick={()=> fetchImgByCat('food')} variant="outline-warning">Food</Button>
            <Button onClick={()=> fetchImgByCat('sports')} variant="outline-danger">Sports</Button>
            <Button onClick={()=> fetchImgByCat('business')} variant="outline-info">Business</Button>
            <Button onClick={()=> fetchImgByCat('animals')} variant="outline-light">Animals</Button>
            <Button onClick={()=> fetchImgByCat('buildings')} variant="outline-dark">Buildings</Button>
        </div>
        <div className="search-con">
            <InputGroup className="search mb-3">
                <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e)=>setQuery(e.target.value)}
                />
            </InputGroup>
       </div>
    </>
  )
}

export default Navbar
