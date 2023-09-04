// import Header from "./components/Header";
// import Form from "./components/Form";
// import Input from "./components/Input";
// import { useState } from "react";
// import TodoList from "./components/TodoList";
// import FragmentComponent from "./components/FragmentComponent";
// import Table from "./components/Table";
import Modal from "./components/Modal";
import Parent from "./components/Parent";
// function App() {
//   const [todo,setTodo]= useState('')
//   const [todoList,setTodoList] = useState([])
//   return (
//     <div className="App">
//         <Header/>
//         <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
//         <TodoList setTodoList={setTodoList} todoList={todoList}/>
//     </div>
//   );
// }
function App(){
  return(
    <div className="App">
      <Modal></Modal>
      <Parent></Parent>
    </div>
  )
}
export default App;
