import React from 'react';

const Tasklist = ({tasks}) => {
    return (
    <div className={"list"}>
        {
            tasks.map(task => <TaskItems task = {task}/>)
        }
    </div>
    )
};

const TaskItems = ({task}) =>{
    return <div className={"task"}>
        <p className={"taskTitle"}>{task}</p>
    </div>
}

export default Tasklist;