import { useState } from 'react';
import Calculator from './Calculator';
import ToggleSound from './ToggleSound';



function App() {
  const[allowSound, setAllowSound] = useState(true);
  const[time , setTime] = useState(formatTime(new Date()));

  function formatTime(date) {
    return new Intl.DateTimeFormat("en" ,{
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(date);
  }

  return (
    <>
    <main>
      <h1>workOut Timer</h1>
      <time>FOR YOUR WORKOUT ON {time}</time>
      <Calculator />
      <ToggleSound allowSound={allowSound} setAllowSound={setAllowSound}/>
    </main>
    </>
  );
}

export default App;
