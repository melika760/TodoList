import Card from "./UI/Card"
import classes from "./TasksList.module.css"
import TasksItem from "./TasksItem"
export default function TasksList(props){
  
    return(
<Card className={classes.users}>
         
            {props.users.map(user=>{
               return (<TasksItem name={user.name} key={user.id}/>)
            })}
        
</Card>
    )
}