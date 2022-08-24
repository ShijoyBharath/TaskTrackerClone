import React from 'react';

import { useState } from 'react';

const AddTask = ( {onAdd }) => {

  const [title,setTitle] = useState("")
  const [day,setDay] = useState("")
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()

      if(!title) {
        alert('Plead add a To-Do')
        return
      }

      onAdd({ title, day, reminder })

      setTitle('')
      setDay('')
      setReminder(false)
  }
  return (
    <form className="m-2 p-24 font-semibold grid grid-rows-4 grid-cols-1" onSubmit={onSubmit}>
            <label className="p-5">To-Do</label>
            <input className="rounded-sm p-2 border-2 m-2" type="title" placeholder="Add To-Do" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
            <label className="p-5">Day</label>
            <input className="rounded-sm p-2 border-2 m-2" type="title" placeholder="Add Day" value={day} onChange={(e)=>setDay(e.target.value)}/>
            <div>
            <label className="p-5"> Set Reminder</label>
            <input className="m-2" type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
       

        <input className="hover:bg-green-600 font-semibold bg-green-500 p-3 rounded-lg m-3"type="submit" value="Save To-Do"/>
    </form>
  )
}

export default AddTask