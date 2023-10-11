import { useState } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';


function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);
  const addItem = (addTodo) => {
    const addItem = {
      id : todoItems.length + 1,
      title : addTodo.title,
      done: false
    }
    setTodoItems([...todoItems, addItem])
    // setTodoItems((data) => {
    //   data.push({ 
    //     id : todoItems.length+1, 
    //     title : addTodo.title, 
    //     done : false
    //   })
    //   return [...data]
    // })
  }
  const deleteItem = (id) => {
    // setTodoItems((data) => {
    //   return data.filter((item) => {return item.id !== id})
    // })
    const newTodoItems = todoItems.filter((item) => item.id !== id)
    setTodoItems([...newTodoItems])
  }
  return (
    <div className="App">
      <AddTodo 
        addItem={addItem}
      />
      {
        todoItems.map((todo, idx) => 
          <Todo
            key={idx}
            todo={todo}
            deleteItem={deleteItem}
          />
        )
      }
      
    </div>
  );
}

export default App;
