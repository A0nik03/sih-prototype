import React from 'react'
import './Header.css'
import Logo from './Logo'
import Searchbar from './Searchbar';
import Nav from './Nav';
const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Logo/>
      <Searchbar/>
      <Nav/>
    </header>
  )
}

export default Header