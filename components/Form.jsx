import styles from './form.module.css'
import { useState } from "react"

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name:"", done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done:false});
    }
  return (
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            <input className={styles.morderninput} onChange={(e) => setTodo({name:e.target.value, done:false})} placeholder='Enter todo item...' type="text" value={todo.name}/>
            <button className={styles.mordernbutton}>Add</button>
        </div>
      </form>
  );
}
