import Input from "./Input"
const TodoList=({todoList,setTodoList})=>{
    return(
        <div>{todoList.map((todoItem)=>(
            <Input setTodoList={setTodoList} todoList={todoList} key = {todoItem.id} todoItem={todoItem}></Input>
        ))}</div>
    )
}

export default TodoList