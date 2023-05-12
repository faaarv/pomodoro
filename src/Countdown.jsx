import React from "react";
import { useState , useEffect } from "react";
export default function Countdown(props){
    const { task, timeS } = props;
    const [completedTaskVisibility, setcompletedTaskVisibility] = useState(false)
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
}
    return (
      <div className="timer">
        <h2>{task}</h2>
        <p>
          Time left: {minutes}m {seconds}s
        </p> 
      </div>
    );

}