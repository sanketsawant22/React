import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/Todos'
import { TodoForm, TodoItem } from './Components'

function App() {

  const [Todos, setTodos] = useState([])

  const addTodo = (Todo) => {
    setTodos((prev) => [{...Todo }, ...prev])
  }

  const updateTodo = (id, Todo) => {
    setTodos((prev) => prev.map((each) => (each.id === id ? Todo : each )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((each) => each.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((each) => each.id === id ? {...each, Completed: !each.Completed} : each))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(Todos))

  }, [Todos])

  return (
    <TodoProvider value={{Todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#212121] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </ div>
            ))}
          </div>
        </div>
      </div>
    </ TodoProvider>
  )
}

export default App
