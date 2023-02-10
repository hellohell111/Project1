
import React from 'react'
import style from './Home.module.css'
import Image from './Dp.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';




function Home() {
  

    const Navoption=[
       {Option: 'Home', path : ''},
      {Option: 'log' ,path:'./Login' },
      {Option: 'About' ,path:'./About' },
      {Option: 'Registration' ,path:'./Registration' }
    ]
    
  return (
    <>
    <div className={style.Wrapper}>
    
      <img className={style.ProfileImg}  src={Image} alt='ProfileImg'/>

      <div className={style.Dropdown}>
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Home">Home</Dropdown.Item>
        <Dropdown.Item href="/Login">Login</Dropdown.Item>
        <Dropdown.Item href="/About">About</Dropdown.Item>
        <Dropdown.Item href="/Registration">Registration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    {Navoption.map(({Option ,path})=>
    <Link to={path}>
        <p className={style.option}>{Option}</p>
        </Link>
   ) }
    
   </div>
   <br/>
   {/* <h1 className={style.opt}> Hello</h1> */}
    </>
  )
   
}

export default Home