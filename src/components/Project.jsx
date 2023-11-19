import { useState } from 'react';

export default function Project(props) {
  
  return (
    <div className='project-container'>
        <a href = {props.link || '#'}>
            <div className = 'project-thumbnail'><img src = {props.thumbnail || '#'}></img></div>
            <div className='d-flex p-3 justify-content-left align-items-center'><h3>{props.title}</h3></div>
        </a>
        
    </div>
  );
}