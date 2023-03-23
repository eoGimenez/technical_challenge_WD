import PhoneList from './components/PhoneList';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const API_URL = "http://localhost:5005/api"
  const [phones, setPhones] = useState([])

  const getPhones = () => {
    axios.get(API_URL + "/phones")
      .then(response => {
        console.log("RESPONSE BACK", response.data)
        setPhones(response.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPhones()
  }, [])

  return (
    <div className="App">
      {phones.map(phone => {
        return (
          <PhoneList key={phone.id} phone={phone} />
        )
      })}
    </div>
  );
}

export default App;
