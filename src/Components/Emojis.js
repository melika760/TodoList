import React,{useState} from "react"
import classes from "./Emojis.module.css"
export default function Emojis(){
    const[Done,SetDone]= useState("Done")
    const[Progress,SetProgress]= useState("In Progress")
    function DoneHandler(){
        SetDone("😉")
        SetProgress("")
    }
    function ProgressHandler(){
        SetProgress("🤔")
    }
    function Recover(){
        SetDone("Done")
        SetProgress("In Progress")
    }
    return(
        <span>
             <button onClick={DoneHandler} onDoubleClick={Recover} className={classes.button}>{Done}</button>
             <button onClick={ProgressHandler} className={classes.button} onDoubleClick={Recover}>{Progress}</button>
        </span>
    )
}