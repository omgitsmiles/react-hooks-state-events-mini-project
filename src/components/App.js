import React,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [catFilter, setCatFilter] = useState("All")

  function handleDelete(deleteTask){
    const deleted = taskArray.filter(task => task.text !== deleteTask)
    setTaskArray(deleted)
  }

  function handleClick(e) {
    setCatFilter(e.target.innerText)
  }

  const handleFilterCat = 
    taskArray.filter(task => {
      return catFilter === "All" ? true : task.category === catFilter
    })

  function onTaskFormSubmit(task) {
    setTaskArray([...taskArray, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} catFilter={catFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={handleFilterCat} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;


// First, we'll want to display all the tasks in our app. Pass down the task data
// from `App` to `TaskList`, and display each task using the `Task` component. Make
// sure to use a `key` prop!

//pass down data from app to tasklist and map over single comp from array to task
//DONE

// _When the delete button is clicked_, the task should be removed from the list.

//create State on App bc array needs to be shre with newtaskform

//create a handle delete function in App pass down to Task, pass in the task as  CB to filter out in App

// Pass the list of categories to this component from `App`. Then, update this
// component to display `<button>` elements for each category. In order to pass the test,
//  the buttons will need a key prop equal to the category.

// _When a button is clicked_, the following should happen:

// - Whichever button was clicked should have a class of `selected`. The other
//   buttons should not have any class assigned.
//  State should be set to track change of category in App to filter array

// The list of tasks being displayed should be filtered, so that only tasks that
//   match the category that was clicked are displayed.

// Pass the list of categories to this component from `App`. Then, update this
// component to display `<option>` elements for each category inside of the
// `<select>` element **except** the "All" category, so that the user can select a
// category when adding a new task.

// Next, update this form to be a _controlled component_, so that all form inputs
// are captured in state.

// _When the form is submitted_, add a new task to the list with the text and
// category from the form. For the tests for this feature to pass, you'll need a
// callback prop named `onTaskFormSubmit` that takes a task object as an argument.
