import styles from '../style.module.css';
const Input=({todoItem,todoList, setTodoList})=>{

    const deleteTodo=()=>{
        setTodoList(todoList.filter(item=>item.id !==todoItem.id))
    }

    return(
        <div>
            <div className={styles.inputItem}>
                <h3 className={styles.inputName}>{todoItem.name}</h3>
                <button onClick = {deleteTodo} className={styles.deleteButton}>Delete</button>
            </div>
        </div>
    )
}

export default Input