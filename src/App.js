import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {

  const contacts = [
    {
      id:"1",
      name:"john",
      email:"john@gmail.com"
    },
    {
      id:"2",
      name:"jai",
      email:"jai@gmail.com"
    }
  ];

  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
