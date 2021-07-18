import React, { useState, createContext } from "react";
// import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read a book", id: 1 },
    { title: "Tree Plantation", id: 2 },
    { title: "Code", id: 3 },
  ]);

  const addTask = (title) => {
    //Add key:uuid()
    setTasks([...tasks, { title }]);
    //Add key:uuid()
  };
  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
