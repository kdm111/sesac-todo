import React from 'react'

export default function todo({todo}) {
  const {id, title, done} = todo

  return (
    <div>
      <input 
        type="checkbox" 
        name={`todo${id}`} 
        id={`todo${id}`} 
        value={done}
        defaultChecked = {done}
      />
      <label htmlFor={`todo${id}`} >{title}</label>
    </div>
  )
}
