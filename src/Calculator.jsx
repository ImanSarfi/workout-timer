import { memo, useEffect, useState } from 'react';
import clickSound from '../public/ClickSound.m4a';
import { SiEndeavouros } from 'react-icons/si';


const Claculator = function Calculator({ allowSound, workouts }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setduration] = useState(0);

  useEffect(() => {
    setduration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, speed, sets, durationBreak]);
  
  function handleInc() {
    setduration((duration) => Math.floor(duration) + 1 );
  }
  
  useEffect(function() {
    const playSound = function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    }
    playSound();
  },[duration, allowSound]);
  

  function handleDic(){
    setduration((duration) => (duration > 1 ? Math.ceil(duration) - 1 : 0));
  }


  // useEffect(
  //   function () {
  //     console.log(duration, sets);
  //     document.title = `Your ${number}-exercise workout`;
  //   },
  //   [number, duration, sets]
  // );

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;



  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> How many sets</label>
          <input
            type="range"
            min={1}
            max={5}
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast Are you</label>
          <input
            type="range"
            min="30"
            max="180"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDic}>-</button>
        <p>
          {mins < 10 && '0'}
          {mins} : {seconds < 10 && '0'}
          {seconds}
        </p>
        <button onClick={handleInc}>+</button>
      </section>
    </>
  );
};

export default memo(Claculator);
