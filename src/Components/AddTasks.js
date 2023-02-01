import React,{useState} from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddTasks.module.css"
export default function AddTasks(props){
    const[Tasks,SetTasks]=useState("")
    function SubmitHandler(event){
        event.preventDefault();
        if(Tasks.trim().length===0){
            return;
        }
        props.onAddUser(Tasks)
        SetTasks("")
    }
    function AddNewTasks(event){
SetTasks(event.target.value)
    }
return(
    <Card className={classes.input}>
    <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Enter new Tasks" onChange={AddNewTasks} value={Tasks}/>
<Button type="submit">Submit</Button>
    </form>
    </Card>
)
}