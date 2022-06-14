import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Todo } from "../models/models"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
// import { FaCheckCircle } from "react-icons/fa"
// import { ImCheckboxChecked } from "react-icons/im"
import "./styles.css"
// import TodoList from './TodoList'

import { GrCheckbox as Box }  from 'react-icons/gr'
import { GrCheckboxSelected as BoxTwo } from 'react-icons/gr' 

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const [tick, setTick] = useState(false)
  
// usual status - done, middle cross
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo)=>todo.id === id?{...todo, isDone: !todo.isDone} : todo
      )
    )
    // to toggle that tick(done) icon
    setTick(!tick)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // SECTION to edit the todo intuitively, by pressing icon
  const handleEdit = (e: React.FormEvent, id:number) => {
    e.preventDefault()

    setTodos(
      todos.map((todo) => (todo.id === id? { ...todo, todo: editTodo }: todo))
      )
      setEdit(false)
  }


// address 'focus' : to target a specific DOM (after submitting text from input)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)

  // entire single todo box - container <start>
  return (
    // EDIT IN PROGRESS SECTION - TO TAKE IN EFFECT AFTER EDITING TARGETED TODO
    // set and design for edit mode - link to client side
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input 
          ref={inputRef}
          value={editTodo} 
          onChange={(e) => setEditTodo(e.target.value)} 
          className="todos_single--text" 
        />
        // DONE THE EDIT
        // todo - let it marked as down or normal status
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
          <span className="todos__single--text">{todo.todo}</span>
      )}

        {/* ICON SECTION */}
        {/* Side menu, intuitive in icon - edit, delete, cross(done) */}
        <div className="icon__container">
          {/* edit - to control the icon */}
          {/* ATTENTION - THIS MAY BE THE PLACE TO WORK ON (LEFT CLICK TO CONFIRM ACTION TO EDIT a generated instance(single todo)) */}
          <span 
            className="icon"
            onClick={() => {
            if(!edit && !todo.isDone){
              setEdit(!edit)
            }
            }}
            >
            <AiFillEdit />  
          </span> 
          {/* delete - to control the icon */}
          <span 
            className="icon" 
            onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          {/* cross middle, marked as done - control the icon */}
          <span 
            className="iconDone" 
            onClick={() => handleDone(todo.id)}>
              {tick ? (
                  <BoxTwo className="tickIcon" />
                  ) : (
                  <Box className="tickFillIcon" />
              )}
          </span>

      </div>

      </form>
  )
}

export default SingleTodo