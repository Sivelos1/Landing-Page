import { useState } from 'react';

export default function Icon(props) {
  
  return (
    <div className={'icon '+(props.largeIcon ? 'icon-big' : '')}>
        <a href={props.link || '#'} target='_blank'>
            <img src={props.path || '#'}></img>
        </a>
    </div>
  );
}