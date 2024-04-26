import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://0.0.0.0:8000/")
        .then((res) => res.json())
        .then((data) => {
          setCurrentTime(data.time);
          setCurrentDate(data.date);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>
        The date is {currentDate} and the time is {currentTime}.
      </p>
      <br />
      <p>
        If you notice the time consistently updating, it signifies that the
        connection to the backend API is operating correctly.
      </p>
    </>
  );
}

export default App;
