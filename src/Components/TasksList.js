import Card from "./UI/Card"
import classes from "./TasksList.module.css"
export default function TasksList(props){
    console.log(props)
    return(
<Card className={classes.users}>
           <ul>
            {props.users.map(user=>{
               return <li key={user.id}>{user.name}</li>
            })}
        </ul>
</Card>
    )
}