import React,{useState} from "react"
import Emojis from "./Emojis"
export default function TasksItem(props){
let List =<ul>
<li key={props.id}>{props.name}<span><Emojis/><button onClick={DeletItem}>🗑️</button></span></li>
</ul>
let [Result,SetResult] = useState(List)
function DeletItem(){
    SetResult("")
}
    return(<div>{Result}</div>)
            
    
}