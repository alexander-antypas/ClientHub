import Input from "./Input"
const TodoList=({todoList})=>{
    return(
        <div>{todoList.map((todoItem)=>(
            <Input todoItem={todoItem}></Input>
        ))}</div>
    )
}

export default TodoList