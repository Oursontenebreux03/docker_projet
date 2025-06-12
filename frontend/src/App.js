import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(data => setTime(data.time));
  }, []);

  return (
    <div>
      <h1>Time from backend: {time}</h1>
    </div>
  );
}

export default App;
