import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import TaskContainer from "./components/TaskContainer";
import Task from "./components/Task";

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true },
  { id: "task2", title: "Read a book", isComplete: false },
  { id: "task3", title: "Early morning run", isComplete: false },
  { id: "task4", title: "Drink water", isComplete: false },
  { id: "task5", title: "Visit the puppy shelter", isComplete: true },
  { id: "task6", title: "Watch Bad Sisters", isComplete: false },
];

function App() {
  function sortFunction(a, b) {
    if (a.isComplete == true && b.isComplete == false) {
      return 1;
    }
    if (a.isComplete == false && b.isComplete == true) {
      return -1;
    }
    return 0;
  }
  // source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

  return (
    <Fragment>
      <h1 key="heading">Task List</h1>
      <TaskContainer>
        {/* Task: Nesting Components - Add you tasks here: */}
        {/* <Task id="task1" title="Buy Milk" isComplete={true} />
        <Task id="task2" title="Read a book" isComplete={false} />
        <Task id="task3" title="Early Morning run" isComplete={false} /> */}

        {taskList.sort(sortFunction).map((task) => (
          <Task id={task.id} title={task.title} isComplete={task.isComplete} />
        ))}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
