import { useState } from 'react';
import '../App.css';
import Icon from './Icon'
import email from '../assets/icons/email.png'
import github from '../assets/icons/github.png'
import linkedIn from '../assets/icons/linkedin.png'
import discord from '../assets/icons/discord.png'

function Footer() {
  
  return (
    <div className='footer color-bg-container d-flex justify-content-center align-items-center'>
        <div className='p-1'>
            <Icon path = {email} link = 'mailto:devinamlen@gmail.com'/>
        </div>
        <div className='p-1'>
            <Icon path = {github} link = 'https://github.com/Sivelos1'/>
        </div>
        <div className='p-1'>
            <Icon path = {linkedIn} link = 'https://www.linkedin.com/in/devinamlen/'/>
        </div>
        <div className='p-1'>
            <Icon path = {discord} link = 'https://www.discordapp.com/users/sivelos'/>
        </div>
        
    </div>)
}

export default Footer;
