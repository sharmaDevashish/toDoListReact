import "./styles.css";
import ToDoListHead from "./todoListHead.component";
import ToDoList from "./todoList.component";
import { useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToList = (val: string) => {
    console.log(val);
    let newList = [...toDoList];
    newList.push(val);
    setToDoList(newList);
  };

  const editEntry = (val: string, index: number) => {
    let newList = [...toDoList];
    newList.forEach((item, lIndex) => {
      if (lIndex === index) {
        newList.splice(index, 1, val);
      }
    });
    setToDoList(newList);
  };

  const deleteEntry = (val: string) => {
    let newList = [...toDoList];
    newList.forEach((item, index) => {
      if (item === val) {
        newList.splice(index, 1);
      }
    });
    setToDoList(newList);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToDoListHead addToList={addToList} />
      <ToDoList
        toDoList={toDoList}
        editEntry={editEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}
