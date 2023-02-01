import React,{useState} from 'react';
import './App.css';
import TasksList from './Components/TasksList';
import Majik from "./majik.jpg"
import AddTasks from './Components/AddTasks';
import Today from './Components/Today';
function App() {
  
  const[FreshTask,SetAddFreshTask]=useState([]);
  const[Load,SetLoad]=useState(false)
  function AddUserHandler(NewTask){
    SetLoad(true)
    SetAddFreshTask((prevFreshTask=>{
      return[...prevFreshTask,{
        name:NewTask,
        id:Math.random().toString()
      }]
    }))
  }
if(Load){ return (
  <div className="App">
    <img src={Majik} alt="headerPic" className='Majik'/>
    <h5 className='Unimage'>The goal without plan is just Dream</h5>
  <AddTasks onAddUser={AddUserHandler}/>
  <TasksList users={FreshTask}/>
  </div>
);}
else{
  return(
    <div className="App">
    <img src={Majik} alt="headerPic" className='Majik'/>
    <Today/>
    <h5 className='Unimage'>The goal without plan is just Dream</h5>
  <AddTasks onAddUser={AddUserHandler}/>
  <p className='Unimage'>Please Add Your Tasks</p>
  </div>
  )
}
 
}

export default App;
