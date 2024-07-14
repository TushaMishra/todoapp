import Header from "../components/Header"
import ItemsList from "../../inotebook/src/components/ItemsList"
import Todo from "../components/Todo"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
    </div>
  )
}

export default App