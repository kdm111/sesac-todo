import React, {useState} from 'react'

export default function AddTodo({addItem}) {
  const [todoItem, setTodoItem] = useState({
    title : ""
  })
  const addClick = () => {
    addItem(todoItem)
    setTodoItem({title : ""})
  }
  return (
    <form className='add-todo-form'>
      <input 
        type='text'
        placeholder='add todo'
        value={todoItem.title}
        onChange={(e) => {
          setTodoItem({title : e.target.value})
        }}
      />
      <button
        type='button'
        onClick={addClick}
      >add</button>
    </form>
  )
}
