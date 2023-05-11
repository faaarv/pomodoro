import React from "react";
import { useState , useEffect } from "react";
import DoneTasks from './DoneTasks'
export default function Countdown(props){
    const { task, timeS } = props;
    // console.log(props)
    // console.log(timeS)
    const [completedTaskVisibility, setcompletedTaskVisibility] = useState(false)

    let rrrrr = Number(timeS) * 60
    const [timeLeft, setTimeLeft] = useState(Number(timeS) * 60);
    /////
    useEffect(() => {
      if (timeLeft > 0) {
        setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      }
    }, [timeLeft]);
///
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
if (timeLeft ===0 ) {
  // play an audion and notify user
  const audio = new Audio('src/assets/sound.mp3');
  audio.play();
  if (Notification.permission === "granted") {
    new Notification('Countdown finished', { body: `Task ${task} is done!` });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification('Countdown finished', { body: `Task ${task} is done!` });
      }
    });}
    setcompletedTaskVisibility(true)
}
    return (
      <div>
        <h2>{task}</h2>
        <p>
          Time left: {minutes}m {seconds}s
        </p>
        {completedTaskVisibility &&     <DoneTasks completedTask={task} focusTime={time}/>
 }
      </div>
    );

}