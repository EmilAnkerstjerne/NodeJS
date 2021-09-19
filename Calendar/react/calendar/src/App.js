import './App.css';
import React, {useState} from 'react';

function App() {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [month, setMonth] = useState("");

  const getDayFromApi = async () => {
    fetch('http://localhost:8080/day')
      .then((response) => response.json())
      .then((json) => {
        setDay(json.day);
      })
      .catch((error) => {
        console.error(error);
      });
    
    fetch('http://localhost:8080/time')
      .then((response) => response.json())
      .then((json) => {
        setTime(json.time);
      })
      .catch((error) => {
        console.error(error);
      });
    
    fetch('http://localhost:8080/month')
      .then((response) => response.json())
      .then((json) => {
        setMonth(json.month);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // getDayFromApi();

  return (
    <div>
      <button onClick={getDayFromApi} className="button">Click to fetch information from the API</button>
      <p>Today it is: {day}</p>
      <p>Right now, the time is: {time}</p>
      <p>We are in the month of: {month}</p>
      
    </div>
  );
}

export default App;
