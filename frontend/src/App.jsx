import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
    fetch(' http://0.0.0.0:8000/').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
        setCurrentDate(data.date)
      });
    }, []);
  return (
    <>
      <p>The date is {currentDate} and the time is {currentTime}.</p>
    </>
  )
}

export default App
