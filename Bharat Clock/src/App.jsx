import { useEffect, useRef, useState } from "react";

export default function App() {
  const getDayDateTime = () => {
    const now = new Date();
    // Get the day name
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[now.getDay()];
    // Get date components
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = now.getFullYear();
    // Get time components
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    // Format date and time
    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return `${dayName}, ${formattedDate} ${formattedTime}`;
  };

  // const dayDateTime = useRef(getDayDateTime());
  const [dayDateTime, setDayDateTime] = useState(getDayDateTime());

  useEffect(() => {
    const intervalId = setInterval(()=> setDayDateTime(getDayDateTime()), 1000);
    return () => {
        clearInterval(intervalId);
    }
  }, []);

  return (
    <center>
      <h1>Bharat Clock</h1>
      <p>This is Bharat Clock.</p>
      <p>{dayDateTime}</p>
    </center>
  );
}
