import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Todo } from "../models/models"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
// import { ImCheckboxChecked } from "react-icons/im"
import "./styles.css"
import TodoList from './TodoList'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


// usual status - done, middle cross
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo)=>todo.id === id?{...todo, isDone: !todo.isDone} : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id? { ...todo, todo: editTodo }: todo))
      )
      setEdit(false)
  }



  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)

  // entire single todo box - container <start>
  return (
    // set and design for edit mode - link to client side
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input 
          ref={inputRef}
          value={editTodo} 
          onChange={(e) => setEditTodo(e.target.value)} 
          className="todos_single--text" 
        />
        // display : text - marked is done, cross middle line.
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        // display : text - normal
        // <div className="iconDone">
        //   <span 
        //     className="icon" 
        //     onClick={() => handleDone(todo.id)}>
        //     <FiCircle />
        //   </span>
        //   {/* done - linkage */}
          <span className="todos__single--text">{todo.todo}</span>
      // {/* </div> */}
      )}

        {/* Side menu - edit, delete, cross(done) */}
        <div className="icon__container">
        {/* <div> */}
          {/* edit */}
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
        {/* </div> */}
        {/* <div> */}
          {/* delete */}
          <span 
            className="icon" 
            onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
        
        {/* </div> */}
          {/* cross middl, done */}
        {/* <div className="iconDone"> */}
          <span 
            className="iconDone" 
            onClick={() => handleDone(todo.id)}>
            <FaCheckCircle />
          </span>
        {/* </div> */}
      </div>

      </form>
  )
}

export default SingleTodo