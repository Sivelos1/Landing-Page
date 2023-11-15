import { useState } from 'react';
import './Dropdown.css';

function Dropdown(props) {
  const [input, setInput] = useState('');
  return (<div className="dropdown">
        <button className={`dropbtn`}>
            {props.text || ''}
            <ion-icon name={props.icon || ''}></ion-icon>
        </button>
        <div className="dropdown-content">
            {props.choices.map((d) => {
                if(d.type){
                    if(d.type.toLowerCase() == 'link'){
                        return <a className = "dropdown-content-element" href = {d.link || "#"} key={props.choices.indexOf(d)}>{d.text}</a>
                    }
                }
                return <p className = "dropdown-content-element" onClick={()=>d.onClick()} key={props.choices.indexOf(d)}>{d.text}</p>
            } )}
        </div>
    </div>)
}
export default Dropdown;
