import { useState } from "react";
import "./App.css";
import FormTask from "./components/FormTask";
import { v4 } from "uuid";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";

function App() {
  const [alltasks, setalltasks] = useState([]);
  const addTodo = (singletask) => {
    setalltasks([
      ...alltasks,
      { id: v4(), task: singletask, completed: false },
    ]);
    console.log(alltasks);
  };

  const isCompleted = (id) => {
    setalltasks(
      alltasks.map((singletask) =>
        singletask.id === id
          ? { ...singletask, completed: !singletask.completed }
          : singletask
      )
    );
  };

  const editTask = (id) => {
    setalltasks(
      alltasks.map((singletask) =>
        singletask.id === id
          ? { ...singletask, isEditing: !singletask.isEditing }
          : singletask
      )
    );
  };

  const deleteTask = (id) => {
    setalltasks(alltasks.filter((singletask) => singletask.id !== id));
  };

  const editBox = (task, id) => {
    setalltasks(
      alltasks.map((singletask) =>
        singletask.id === id
          ? { ...singletask, task, isEditing: !singletask.isEditing }
          : singletask
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1 className="heading-style">To-Do Cards</h1>
      </header>
      <FormTask
        className="addtask-style"
        placeholder="Add Task"
        addTodo={addTodo}
      />
      {alltasks.map((singletask, index) =>
        singletask.isEditing ? (
          <EditTask editTodo={editBox} task={singletask} />
        ) : (
          <Tasks
            classname="centered-div"
            task={singletask}
            key={index}
            isCompleted={isCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        )
      )}
    </div>
  );
}

export default App;
