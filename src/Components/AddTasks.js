import React,{useState} from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddTasks.module.css"
import ErrorModal from "./UI/ErrorModal";
export default function AddTasks(props){
    const[Tasks,SetTasks]=useState("")
    const[Error,SetError] = useState()
    function SubmitHandler(event){
        event.preventDefault();
        if(Tasks.trim().length===0){
            SetError({
                title:"Invalid Type",
                message:"Please Enter your Tasks"
            })
            return;
        }
        props.onAddUser(Tasks)
        SetTasks("")
    }
    function AddNewTasks(event){
SetTasks(event.target.value)
    }
    function errorHandler(){
        SetError(null)
    }
return(
    <div>
    {Error && (
      <ErrorModal
        title={Error.title}
        message={Error.message}
        onConfirm={errorHandler}
      />
    )}
    <Card className={classes.input}>
    <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Enter new Tasks" onChange={AddNewTasks} value={Tasks}/>
<Button type="submit" className={classes.button}>Submit</Button>
    </form>
    </Card>
    </div>
)
}