import React from "react";
import "./App.css";
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import Header from "./Header";

const App = () => {
  const footer = "Made by   ";
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
          <span className="footer">
            {footer}
            <a
              className="twitter"
              href="https://twitter.com/whysokara"
              target="_blank"
            >
              Kara
            </a>
            👾
          </span>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
