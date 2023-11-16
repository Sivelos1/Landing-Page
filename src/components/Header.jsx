import { useState } from 'react';
import '../App.css';
import Dropdown from './Dropdown'

function Header() {
  
  return (
    <div className='header color-bg-container d-flex justify-content-between align-items-center'>
        <a><h1>Sivelos</h1></a>
        <div className=''>
          <Dropdown text = 'please' choices = {[
            {text:"Choice 1", type: "link", link: "#"}, 
            {text:"Choice 2", onClick: function(){
              console.log("hello world")
            }}, 
            {text:"Choice 3", onClick: function(){}}]}/>
          <a>Contact Me</a>
        </div>
        
    </div>)
}

export default Header;
