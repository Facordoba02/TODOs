import { createContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);
	const [searchValue, setSearchValue] = useState("");
	const [openModal, setOpenModal] = useState(false);

	const completedTodos = todos.filter((t) => !!t.completed).length;
	const searchedTodos = todos.filter((t) => {
		return t.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
	});

	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((t) => t.text == text);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((t) => t.text == text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed: false
		})
		saveTodos(newTodos);
	}

	return (
		<TodoContext.Provider
			value={{
				completedTodos,
				todos,
				searchValue,
				setSearchValue,
				searchedTodos,
				completeTodo,
				deleteTodo,
				loading,
				error,
				openModal,
				setOpenModal,
				addTodo
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
