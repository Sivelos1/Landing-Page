import { useState } from 'react';
import '../App.css';
import Dropdown from './Dropdown'

function Header() {
  
  return (
    <div className='header color-bg-container d-flex justify-content-between align-items-center'>
        <a><h1>Sivelos</h1></a>
        <div className='header-navigation'>
          <a className='header-navigation'>About Me</a>
          <a className='header-navigation'>Portfolio</a>
          <a className='header-navigation'>Resume</a>
          <a className='header-navigation'>Contact Me</a>
        </div>
        
    </div>)
}

export default Header;
