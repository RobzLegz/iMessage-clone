import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import Imessage from './Imessage';
import Login from './Login';

function App() {

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        
      }else{

      }
    })
  }, [user])

  return (
    <div className="app">
      {user ? (
        <Imessage />
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
