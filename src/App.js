import React, {useState, useEffect} from 'react';
import { FormControl, Input } from '@material-ui/core';
import firebase from 'firebase';
import './App.css';
import './Messege.css';
import Messege from './Messege.jsx';
import db from './Firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messege, setMessege] = useState([]); 
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messege')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessege(snapshot.docs.map(doc => ({id: doc.id, messege: doc.data()})))
    });
      
  }, [] )
  
useEffect(() => {
  setUsername(prompt('Please Enter Your Name'))
    
}, [] )

  const sendMessege = (event) => {
    event.preventDefault();

    db.collection('messege').add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    
    setInput('');

  }
  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' alt='facebook-messenger-logo'></img>
      <h1>facebook-messenger-clone</h1>
      <h3>by--- Avinash</h3>
      <h2>Welcome {username}</h2>
      
      <form className='app__form'>
        <FormControl className='app_formControl'>
          <Input className='app__input' placeholder="Enter Your Messege..." value={input} onChange={event => {setInput(event.target.value)}}/>

          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessege}          
          >
            <SendIcon/>
          </IconButton>
        </FormControl>            
      </form>  
      <FlipMove>   
        {
          messege.map(({id, messege}) => (
            <Messege key={id} username={username} messege={messege}></Messege>            
            ) 
            )
        }
    </FlipMove>
    </div>
    
  );
}

export default App;
