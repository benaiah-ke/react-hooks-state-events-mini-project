import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: '',
    category: ''
  })

  const categoryList = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleTextChange(event){
    setFormData({
      ...formData,
      text: event.target.value
    })
  }

  function handleCategoryChange(event){
    setFormData({
      ...formData,
      category: event.target.value
    })
  }

  function createTask(event){
    event.preventDefault();

    onTaskFormSubmit(formData);
    setFormData({
      text: '',
      category: ''
    })
  }

  return (
    <form className="new-task-form" onSubmit={createTask}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleCategoryChange}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
