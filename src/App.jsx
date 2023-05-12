import React, { useState } from "react";
import Countdown from './Countdown';
import './App.css';
export default function App(){
    let [taskName,setTaskName]=useState('')
    let [taskTime ,setTaskTime]=useState('')
    const handleTaskChange = (event) => {setTaskName(event.target.value);}
    const handleTaskTimeChange = (event) => {setTaskTime(event.target.value);}
    const [timerComponentVisibility, settimerComponentVisibility] = useState(false)

    function handleNewTask(event){
        // console.log(`the ${taskName} takes ${taskTime}`)
        event.preventDefault()
       settimerComponentVisibility(true) 
       return taskName , taskTime
    }
    function handleReset() {
        setTaskName('');
        setTaskTime('');
        window.location.reload()
      }
      
 return(

        <>
        <div className="container">
            <form className="taskInputs" onSubmit={handleNewTask}>
                {/* <label htmlFor="taskName">Task Name:</label> */}
                <input className='input' type="text" id="taskName" value={taskName} onChange={handleTaskChange} placeholder="Task name" required/>
                {/* <label htmlFor="taskTime">Task Time:</label> */}
                <input className='input' type="number" id="taskTime" value={taskTime} onChange={handleTaskTimeChange} placeholder="Time to Focus" required/>
                {/* <button onClick={handleNewTask}> Start Your Task </button>               */}
                <input className="button" type="submit" value="Start Your Task"/>
            </form>
            
            <div className="counteDown">
                {timerComponentVisibility && <Countdown task={taskName} timeS={taskTime}/>}
            </div>
            <div className="resetWrapper">
                <button className="resetButton" onClick={handleReset}>Reset</button>
            </div>


        </div>
        </>
    )
}