import React, { useRef } from 'react'
import "./styles.css"
import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input" 
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
        >
            <input
                ref={inputRef} 
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Input only what you can do today." 
                className="input__box">
            </input>
            <button className="input_submit" type="submit">
                <AiOutlinePlus />
            </button>
        </form>
    )
}

export default InputField