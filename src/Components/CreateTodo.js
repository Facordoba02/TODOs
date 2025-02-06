import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { IoMdAddCircle } from "react-icons/io";

const CreateTodo = () => {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <IoMdAddCircle
      className="createButton"
      onClick={() => setOpenModal(true)}
    />
  );
};

export default CreateTodo;
