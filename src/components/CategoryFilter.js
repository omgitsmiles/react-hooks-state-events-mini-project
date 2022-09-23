import React from "react";

function CategoryFilter({ categories, handleClick, catFilter }) {

  //pass down catChange to filter to set selected class

  const renderCategory = categories.map(category => {
    const className = category === catFilter ? "selected" : null
    return <button className={className} key={category} onClick={handleClick}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategory}
    </div>
  );
}

export default CategoryFilter;
