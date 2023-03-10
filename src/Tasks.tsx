import React from "react";
import "./task.css"
import {HiPencilSquare} from "react-icons/hi2"
import {ImBin} from "react-icons/im"

interface Task {
    taskID:string,
    taskName:string,
    completed:boolean,
    markComplete:(taskID:string)=>void,
    delTask:(taskID:string)=>void,
    editTask:(taskID:string)=>void
}

export default function Tasks(props:Task){
    return (
        <div className="tasks-elements">
            <input 
                className="tasks-elements--input"
                onClick={()=>props.markComplete(props.taskID)}
                checked={props.completed}
                type="radio" 
                id={props.taskID}
                value="Buy a new gaming laptop">
            </input>
            <label 
                htmlFor={props.taskID}
                className="tasks-elements--Text">
                {props.completed ? 
                <s>{props.taskName}</s>:
                props.taskName}
            </label>
            <HiPencilSquare 
                className="tasks-elements--edit"
                onClick={()=>props.editTask(props.taskID)}
                />
            <ImBin
                className="tasks-elements--delete"
                onClick={()=>props.delTask(props.taskID)}
            />
                
            
        </div>
    )
}