import { IoIosCreate } from "react-icons/io";

function EmptySkeleton() {
	return (
		<div className="empty">
			<p>Crea tu primer tarea!</p>
			<IoIosCreate className="empty-icon"/>
		</div>
	);
}

export default EmptySkeleton;
