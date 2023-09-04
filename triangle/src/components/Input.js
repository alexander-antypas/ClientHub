import styles from '../style.module.css';
const Input=({todoItem})=>{
    return(
        <div>
            <div className={styles.inputItem}>
                <h3 className={styles.inputName}>{todoItem}</h3>
                <button className={styles.deleteButton}>Delete</button>
            </div>
        </div>
    )
}

export default Input