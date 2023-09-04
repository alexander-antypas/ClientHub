import Header from "./components/Header";
import Form from "./components/Form";
import Input from "./components/Input";
import { useState } from "react";
import TodoList from "./components/TodoList";
function App() {
  const [todo,setTodo]= useState('')
  const [todoList,setTodoList] = useState([])
  return (
    <div className="App">
        <Header/>
        <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
