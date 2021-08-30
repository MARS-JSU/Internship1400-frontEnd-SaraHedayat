import React , {useState} from 'react';
import Tasklist from './Tasklist';
import './style.css';

const App = () => {

    const [newTaskText , setNewTaskText] = useState("");

    const [tasks , setTasks] = useState([ "do a task" , "do" , "just do"]);
    
    const addTask = () =>{
        if(!newTaskText)
        {
            return;
        }

        setTasks( currentTasks=>{
            return [...currentTasks, newTaskText];
        });
        setNewTaskText(" ");
    };

    const onChangeInput = (e) =>{
        const value = e.target.value;
        setNewTaskText(value);
    };

    return (
        <div className={"container"}>
            <input className="input" value={newTaskText} onChange={onChangeInput} placeholder={"Type something!"}/>
            <button className="btn" onClick={addTask}>add</button>
            <Tasklist tasks={tasks}/>
        </div>
    );
};

export default App;