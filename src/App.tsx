import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tasks  from "./Tasks"
import {nanoid} from "nanoid";
import "./App.css";

interface Task {
    taskID:string,
    taskName:string,
    completed:boolean
}

export default function App(){
    const [tasks,setTasks] = React.useState<Task[]>([])
    const [editText,setEditText] = React.useState<string>("") 
    const taskLeft:number = tasks.reduce((sum:any,val:any) => { 
                    if(!val.completed)
                        return sum+1;
                    },0)
    function createTask(taskName:string){
        if(taskName){
            setTasks(oldTasks => ([...oldTasks,{ 
                                    taskID:nanoid(),
                                    taskName:taskName,
                                    completed:false
                                    }
                                    ]))
            setEditText("")
        }
    }

    function markComplete(taskID:string){
        setTasks(oldTasks =>{
            return oldTasks.map(task => {
                if (task.taskID===taskID){
                    return {...task,completed:!task.completed}
                }
                else{
                    return task
                }
            })
        })
    }

    function delTask(taskID:string){
        const newTaskList:Task[] = []
        tasks.map(task => task.taskID!==taskID ? newTaskList.push(task):undefined)
        setTasks(newTaskList)   
    }

    function delAllTask(){
        setTasks([])
    }

    function editTask(taskID:string){
        const newTaskList:Task[] = []
        tasks.map(task => task.taskID!==taskID ? newTaskList.push(task):setEditText(task.taskName))
        setTasks(newTaskList)   
    }

    const tasksElements = tasks.map(task =>(
                                    <Tasks 
                                        key={task.taskID}
                                        taskID={task.taskID}
                                        taskName={task.taskName}
                                        completed={task.completed}
                                        markComplete={markComplete}
                                        delTask={delTask}
                                        editTask={editTask}
                                    />
    ) )
    return(
        <div className="outerBox">
            <Header
                editText={editText}
                createTask={createTask}
            />
            <main className="Main">
                {tasksElements}
            </main>
            <Footer
                taskLeft={taskLeft}
                delAllTask={delAllTask}
            />
        </div>
    )
}