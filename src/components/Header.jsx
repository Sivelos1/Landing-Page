import { useState } from 'react';
import '../App.css';
import Icon from './Icon'
import portrait from '../assets/1619200446503.jpg'
import { Link } from 'react-router-dom';

function Header(props) {
  
  return (
    <div className='header color-bg-container d-flex justify-content-between align-items-center'>
        <a href = '#home' onClick={() => props.handlePageChange('Home')} className='d-flex align-items-center'><Icon path ={portrait}/><h1 className='p-1'>Devin "Sivelos" Amlen</h1></a>
        <div className='header-navigation'>
          <a href = '#aboutme' className='header-navigation' onClick={() => props.handlePageChange('AboutMe')}>About Me</a>
          <a href = '#portfolio'className='header-navigation' onClick={() => props.handlePageChange('Portfolio')}>Portfolio</a>
          <a href = '#resume'className='header-navigation' onClick={() => props.handlePageChange('Resume')}>Resume</a>
          <a href = '#contact' className='header-navigation' onClick={() => props.handlePageChange('Contact')}>Contact Me</a>
        </div>
        
    </div>)
}

export default Header;
