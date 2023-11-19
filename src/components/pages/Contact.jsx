import { useState } from 'react';

export default function Contact() {
  const [sentMessage, setSentMessage] = useState('false');

  const setDisplay = (val) => setSentMessage(val);

  const regexp =   /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const validateMessage = (event) => {
    event.preventDefault();
    const name = document.getElementById('message-name').value;
    if(name && name === ''){
      alert('Please enter your name!');
      return;
    }
    const email = document.getElementById('message-email').value;
    if(email && email.match(regexp)){
      const message = document.getElementById('message-body').value;
      if(message){
        setDisplay('true');
        return;
      }
      else{
        alert('You\'re not even going to say anything?');
        return;
      }
    }
    else{
      alert('Please enter a valid email!');
    }
  }

  const renderPage = (sentMessage) => {
    if (sentMessage === 'true') {
      return (<div><h2>Thanks! I'll get back to you when I can.</h2></div>);
    }
    return (<div>
      <h3>Want to get in touch? Shoot me an email, or reach me on my social media!</h3>
          <form className='contact'>
            <div className = 'd-flex'><h5>Name: </h5><input id='message-name' className = 'text-input text-main'></input></div>
            <div className = 'd-flex'><h5>Email: </h5><input id='message-email' className = 'text-input text-main'></input></div>
            <div><textarea id = 'message-body' className = 'text-input text-input-message text-main'></textarea></div>
            <button onClick={(e) => validateMessage(e)}>Submit</button>
          </form>
      </div>);
  };
  return (
    <div className='col-12'>
      <div className='container-l bg-main text-main p-5'>
        {renderPage(sentMessage)}
        
      </div>
    </div>
  );
}