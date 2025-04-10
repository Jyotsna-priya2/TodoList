import { useState } from "react"
import Todoip from "./components/todoip"
import Todolist from "./components/Todolist"

function App() {
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

function handleAddTodos(newTodo){
const newTodoList = [...todos, newTodo]
setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  setTodos(newTodoList)

}

function handleEditTodo(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}

  return (
    <>
      <Todoip todoValue={todoValue} 
      setTodoValue={setTodoValue} 
      handleAddTodos={handleAddTodos} />
      <Todolist handleEditTodo={handleEditTodo}
      handleDeleteTodo={handleDeleteTodo}
       todos={todos} />

    </>
  )
}

export default App
