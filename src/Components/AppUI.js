import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import CreateTodo from "./CreateTodo";
import EmptySkeleton from "./Skeletons/EmptySkeleton";
import LoadingSkeleton from "./Skeletons/LoadingSkeleton";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import Modal from "./Modal/Modal";
import TodoForm from "./TodoForm";

function AppUI() {
	const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
		useContext(TodoContext);
	return (
		<>
			<TodoHeader />
			<TodoSearch />
			<TodoList>
				{loading && <LoadingSkeleton />}
				{error && <p>Error...</p>}
				{!loading && searchedTodos.length === 0 && <EmptySkeleton />}
				{searchedTodos.map((toDo) => (
					<TodoItem
						key={toDo.text}
						text={toDo.text}
						completed={toDo.completed}
						onComplete={() => completeTodo(toDo.text)}
						onDelete={() => deleteTodo(toDo.text)}
					/>
				))}
			</TodoList>

			<CreateTodo />

			{openModal && <Modal><TodoForm/></Modal>}
		</>
	);
}

export default AppUI;
