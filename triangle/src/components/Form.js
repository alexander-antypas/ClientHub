import styles from '../style.module.css';
const Form=({todo,setTodo,todoList,setTodoList})=>{
    const inputChange=(event)=>{
        setTodo(event.target.value)
        console.log(todo)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setTodoList([...todoList,{name:todo}])
        console.log(todoList)
    }
    return (
        <div className={styles.triangleForm}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={inputChange} className = {styles.formInput} placeholder='Add input item'></input>
                <button type="submit" className={styles.formButton} >Add</button>
            </form>
        </div>
    )
}

export default Form;