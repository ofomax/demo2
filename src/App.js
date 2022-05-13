import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState([])

  const newMessage = (text) =>{
    setMessage([...message,text])
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter a Message</h1>
        <Form newMessage={newMessage}/>
        <Display message={message}/>
      </header>
    </div>
  );
}

export default App;
