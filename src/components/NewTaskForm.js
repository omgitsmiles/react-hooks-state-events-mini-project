import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("Code")

  const renderCategories = categories.map((category, index) => {
    return category !==  "All" ? <option key={index}>{category}</option> : false
  })

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleDetails(e) {
    setDetails(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {text: details, category: category}
    onTaskFormSubmit(newTask)
    setDetails("")
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
