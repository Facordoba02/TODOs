import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoForm() {
    const { setOpenModal, addTodo } = useContext(TodoContext);
    const [todoValue, setTodoValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(todoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    return (
        <form
            onSubmit={onSubmit}
            className="todoForm"
        >
            <label>Escribir nueva tarea</label>
            <textarea 
                required
                value={todoValue}
                onChange={onChange}
                className="todoForm-txt" 
            />
            <div className="todoForm-btn-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="todoForm-btn todoForm-btn--cancel"
                >
                    cancelar
                </button>
                <button
                    type="submit"
                    className="todoForm-btn todoForm-btn--submit"
                >
                    crear
                </button>
            </div>
        </form>
    );
}

export default TodoForm;
