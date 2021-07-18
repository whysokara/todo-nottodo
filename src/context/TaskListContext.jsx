import React, { useState, createContext } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read a book", id: 1 },
    { title: "Tree Plantation", id: 2 },
    { title: "Code", id: 3 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
