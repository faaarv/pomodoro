import React, { useState } from "react";
import Countdown from './Countdown'
export default function App(){
    let [taskName,setTaskName]=useState('')
    let [taskTime ,setTaskTime]=useState('')
    const handleTaskChange = (event) => {setTaskName(event.target.value);}
    const handleTaskTimeChange = (event) => {setTaskTime(event.target.value);}
    const [timerComponentVisibility, settimerComponentVisibility] = useState(false)

    function handleNewTask(){
        // console.log(`the ${taskName} takes ${taskTime}`)
       settimerComponentVisibility(true) 
       return taskName , taskTime
    }
 return(

        <>
        <div className="Container">
            <div className="taskName">

                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" value={taskName} onChange={handleTaskChange} placeholder="Write the name of yor task" />
                <label htmlFor="taskTime">Task Time:</label>
                <input type="number" id="taskTime" value={taskTime} onChange={handleTaskTimeChange} placeholder="Write the name of yor task"/>
                <button onClick={handleNewTask}> Start Your Task </button>

            </div>

            
            <div className="counteDown">
                {timerComponentVisibility && <Countdown task={taskName} timeS={taskTime}/>}
            </div>
            <div className="completedTasks">
                
            </div>

        </div>
        </>
    )
}