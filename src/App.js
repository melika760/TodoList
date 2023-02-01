import './App.css';
import Majik from "./majik.jpg"
import AddTasks from './Components/AddTasks';
function App() {
  return (
    <div className="App">
      <img src={Majik} alt="headerPic" className='Majik'/>
    <AddTasks/>
    </div>
  );
}

export default App;
