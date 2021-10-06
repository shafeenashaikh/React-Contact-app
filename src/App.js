import React, { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {

  const[contacts,setContacts]=useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
