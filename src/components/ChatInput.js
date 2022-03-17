import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault(); //Prevents refresh
    if (!channelId) return;
    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Kunga Tashi',
      userImage:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFyckwtLiJGFQ/profile-displayphoto-shrink_800_800/0/1639677175481?e=1652918400&v=beta&t=K0ocTaOpgjbrSoqkZc5eoquY7RQlYegxTwNVkNif9EM',
    });

    setInput('');
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName ? channelName : ''}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    outline: none;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    position: fixed;
    padding: 20px;
  }

  > form > button {
    display: none !important;
  }
`;
