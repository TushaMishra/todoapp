import styles from "./todoitems.module.css"

export default function TodoItems({item, todos, setTodos}) {
  function handleOnclick(item){
    setTodos(todos.filter((todo) => todo.name != item));
  }
  function handleClick(name){
    setTodos(todos.map((todo)=>
      todo.name === name ? {...todo, done: !todo.done} : todo
    ))
  }
  const className = item.done ? styles.completed : ""

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={()=>handleOnclick(item.name)} className={styles.deleteButton}>X</button>
        </span>
      </div>
      <hr className={styles.line}/>
    </div>
  )
}
