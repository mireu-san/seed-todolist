import React, { useState } from "react"
import "./App.css"
import InputField from "./components/InputField"
import TodoList from "./components/TodoList"
import { Todo } from "./models/models"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Welcome back, master.</span>
      <span className="subHeading">What problem would you solve before going to bed tonight?</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <span className="subHeading">Remember, your health is top priority to utilise your work efficiency as well.</span>
      
    </div>
  )
}

export default App
