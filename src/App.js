import './index.css'
import Task from './Components/Task';
import AddTask from './Components/AddTask';
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
    // {
    //   id:1,
    //   title:'Birthday',
    //   day:'Feb 5th',
    //   reminder: true,
    // },
    // {
    //   id:2,
    //   title:'Interview',
    //   day:'Feb 18th',
    //   reminder: true,
    // },
    // {
    //   id:3,
    //   title:'Wedding',
    //   day:'March 5th',
    //   reminder: true,
    // }
  ])
  
  function Toggle(id){
    setTodo(todo.map((data) => data.id === id ? {...data, reminder:!data.reminder} : data))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTodo = { id, ...task}
    setTodo([...todo,newTodo])
  }

  const deleteTask = (id) => {
      console.log(id)
      setTodo(todo.filter((todo)=>todo.id !== id))
  }

  const [ showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="border-2 border-cyan-600 p-5 m-5 rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl">Task Tracker</h1>
          <button className={`${showAdd? "bg-red-500" : "bg-green-500"} rounded-lg p-4 pr-6 pl-6 font-bold`} onClick={()=>setShowAdd(!showAdd)}>{showAdd ? "Close" : "Add"}</button>
        </div>
        {showAdd ? <AddTask onAdd={addTask}/> : ""}
        {todo.length > 0 ? <div>
           {todo.map((data) => (
            <Task title={data.title} reminder={data.reminder} time={data.day} onToggle={()=>Toggle(data.id)} onDelete={()=>deleteTask(data.id)}/>
          ))}
          </div> : <div className="font-semibold p-3 text-blue-800">No To-Do's to show. Add a Task!</div>}
      <About/>
      </div>
    </div>
  );
}

export default App;
