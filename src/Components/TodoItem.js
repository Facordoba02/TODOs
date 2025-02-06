import { FaCheck, FaTimes } from "react-icons/fa";

const TodoItem = (props) => {
  return (
    <li className={`todoItem glass ${props.completed && 'todoItem--active'} `}>
      <span style={{display:"flex", alignItems:"center", gap:"8px"}}>
        <FaCheck onClick={props.onComplete} className={`todoItemCheck enf`}  />
        <p className={`Item-p Item-p--complete`}>{props.text}</p>
      </span>
      <span 
        className={`todoItemCheck enf ${props.completed && 'checked'}`}
      >
        <FaTimes onClick={props.onDelete} className="deleteTask"/>
      </span>
    </li>
  )
}

export default TodoItem;
