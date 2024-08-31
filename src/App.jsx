import { useEffect, useState } from 'react';
import Calculator from './Calculator';
import ToggleSound from './ToggleSound';



function App() {
  const[allowSound, setAllowSound] = useState(true);
  const[time , setTime] = useState(formatTime(new Date()));

  const partOfDay = time.slice(-2);

  const workouts = [
    {
      name : "Full-body workout ",
      numExercises : partOfDay === "AM" ? 9 : 8 
    },
    {
      nmber : "Arms + Legs",
      nomExercises : 6
    },
    {
      nmber : "Arms Only",
      nomExercises : 3
    },
    {
      nmber : "Legs only",
      nomExercises : 4
    },
    {
      nmber : "Core Only",
      nomExercises : partOfDay === "AM" ? 5 : 4,
    },
  ];

  

  function formatTime(date) {
    return new Intl.DateTimeFormat("en" ,{
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(date);
  }

  useEffect(function(){
    const id = setInterval(function(){
      setTime(formatTime(new Date()))
    },1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>workOut Timer</h1>
      <time>FOR YOUR WORKOUT ON {time}</time>
      <ToggleSound allowSound={allowSound} setAllowSound={setAllowSound}/>
      <Calculator workouts={workouts} allowSound={allowSound}/>
    </main>
  );
}

export default App;
