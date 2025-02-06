import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoSearch = () => {
  const {setSearchValue, searchValue } = useContext(TodoContext);
    return (
    <div className="todoSearch glass">
      <input 
        placeholder='🔍 Buscar tarea...'
        value={searchValue}
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}  
      />
    </div>
  )
};

export default TodoSearch;
