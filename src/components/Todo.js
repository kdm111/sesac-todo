import React from 'react'

export default function todo({todo, deleteItem}) {
  const {id, title, done} = todo
  const deleteClick = () => {
    deleteItem(id)
  }
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
      <button
        onClick={deleteClick}
      >
        delete
      </button>
    </div>
  )
}
