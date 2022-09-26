import React from "react";

function CategoryFilter({categories, selected = 'All', setSelected = null}) {

  const categoryButtons = categories.map((category) => {
    return <button
      key={category}
      onClick={() => setSelected(category) }
      className={selected == category ? 'selected' : ''}
      >{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
