import React from 'react';
import AppUI from './Components/AppUI';
import { TodoProvider } from './Context/TodoContext';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
