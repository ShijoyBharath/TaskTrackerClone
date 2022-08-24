import React from 'react'

const Task = ({title,reminder,time,onToggle,onDelete}) => {
  return (
    <div className={`bg-slate-300 shadow-sm border-l-4 ${reminder ? "border-green-500" : "border-slate-300"} m-3 p-3 flex justify-between`} onDoubleClick={onToggle}>
        <div>
        <h1 className="font-bold">{title}</h1>
        <h3>{time}</h3>
        </div>
        <button className="font-bold text-red-500" onClick={onDelete}>X</button>
    </div>
  )
}

export default Task