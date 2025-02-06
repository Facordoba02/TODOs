import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoHeader = () => {
	const {completedTodos, todos } =
		useContext(TodoContext);
    return (
        <header className="todoHeader glass">
            <h1 className="todoTitle">
				{
					todos.length == 0 ? (
						<>
							No hay tareas <span className="enf">activas</span>.
						</>
					) : (
						<>
							Tareas completadas{" "}
							<span className="enf">{completedTodos}</span> de{" "}
							<span className="enf">{todos.length}</span>.
						</>
					)
				}
            </h1>
        </header>
    );
};

export default TodoHeader;
