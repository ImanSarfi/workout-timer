import { useState } from 'react';
import Calculator from './Calculator';
import ToggleSound from './ToggleSound';



function App() {
  const[allowSound, setAllowSound] = useState("false");

  return (
    <>
    <main>
      <h1>workOut Timer</h1>
      <time>FOR YOUR WORKOUT ON %%%SEPTEMBER 22 12:21 pm%%</time>
      <Calculator />
      <ToggleSound allowSound={allowSound} setAllowSound={setAllowSound}/>
    </main>
    </>
  );
}

export default App;
