import React from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Nav/>
        <TodoProvider>
          <AddTodo/>
          <TodoList/>
        </TodoProvider>
      </div>
    </div>
    
  );
}

export default App;
