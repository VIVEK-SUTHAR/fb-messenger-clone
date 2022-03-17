import { Button, FormHelperText, Input, InputLabel, FormControl, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import fs from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './App.css';
import Message from './Message';
import db from './Firebase';
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {

        setMessage(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name:'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: fs.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src='https://scontent.famd1-1.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=qPNb_b7myvAAX8qe_MD&_nc_ht=scontent.famd1-1.fna&oh=00_AT_EaQmpncNznhz2cb3GRpwoxricfvJmlPf0fMN7M8rShw&oe=623654BD'></img>
      <h1>Welcome To Messenger</h1>
      <h1>Hello {username}</h1>
      <form className='app_form'>
        <FormControl className='app_formControl' fullWidth>
          {/* <InputLabel>Enter a message</InputLabel> */}
          <Input className='app_input' placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          <FormHelperText />
          {/* <Button variant='contained' disabled={!input} color='primary' type='submit' onClick={sendMessage}>Send your message</Button> */}
        </FormControl>
      </form>
      <FlipMove>
        {
          message.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
