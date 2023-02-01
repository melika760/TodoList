import React,{useState} from "react"
import Emojis from "./Emojis"
import classes from "./Emojis.module.css"
export default function TasksItem(props){
let List =<ul>
<li key={props.id}><span>{props.name}</span><span><Emojis/><button onClick={DeletItem} className={classes.button}>🗑️</button></span></li>
</ul>
let [Result,SetResult] = useState(List)
function DeletItem(){
    SetResult("")
}
    return(<div>{Result}</div>)
            
    
}