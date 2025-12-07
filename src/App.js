import "./App.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Add from "./components/Add";
import Show from "./components/Show";

function App() {
  const [todoName, setTodoName] = useState("");
  const [ToDoList, setToDoList] = useState([]);

  const addTodo = () => {

    if(todoName === '') return

    let onj = {
      task: todoName,
      status: false,
    };
    setToDoList([onj, ...ToDoList]);
    setTodoName("");
  };

  const handleChangeToDoName = (e) => {
    let data = e.target.value;
    // console.log(data);
    setTodoName(data);
  };


  const deleteToDo = (index) => {
    setToDoList(ToDoList.filter((value,idx)=> index !== idx ))
  }

  const finisToDo = (index) => {
    let cloneToDo = [...ToDoList]
    cloneToDo[index].status = !cloneToDo[index].status
    setToDoList(cloneToDo)
  }

  // console.log(ToDoList);

  return (
    <Container>
      <Add
        handleChangeToDoName={handleChangeToDoName}
        todoName={todoName}
        addTodo={addTodo}
      />

      <Show ToDoList={ToDoList} deleteToDo={deleteToDo} finisToDo={finisToDo} />
    </Container>
  );
}

export default App;
