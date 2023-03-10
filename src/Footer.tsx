import React from "react";
import "./footer.css"

interface footer{
    taskLeft:number
    delAllTask:()=>void
}

export default function Footer(props:footer){
    return(
        <footer >
            <p>You have {props.taskLeft?props.taskLeft:"0"} pending task{props.taskLeft>1?"s":""}</p>
            <button
                onClick={()=>props.delAllTask()}>
            Clear All
            </button>
        </footer>
    )
}