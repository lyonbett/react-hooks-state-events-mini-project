import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter(props) {
  const { selectedCategory, onSelectCategory } = props;

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : null}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;