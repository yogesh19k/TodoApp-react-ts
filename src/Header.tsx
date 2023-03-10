import React from "react";
import "./header.css"

interface HeaderProps{
    editText:string
    createTask:(taskName:string)=>void
}

export default function Header(props:HeaderProps){
    const [inputText, setInputText] = React.useState<string>("")
    const [editText,setEditText] = React.useState<string>("")
    if(props.editText != editText){
        setEditText(props.editText)
    }
    React.useEffect(()=>{
        setInputText(editText)
    },[editText])


    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const text:string=event.target.value;
        setInputText((text[0]?text[0].toUpperCase():"")+text.slice(1))
    }
    return(
        <header className="Header">
            <h3>Todo App</h3>
            <div className="Header--addItems">
                <input 
                    className="Header--addItems--text" 
                    onChange={handleChange}
                    type="text"
                    placeholder="Add your new todo"
                    value={inputText}
                    />
                <button onClick={() => {setInputText("")
                                        props.createTask(inputText)
                                        }} 
                        className="Header--addItems--button">
                    +
                </button>
            </div>
        </header>
    )
}