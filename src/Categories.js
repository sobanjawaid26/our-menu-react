import React from "react";

const Categories = ({categories, filterItem}) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => { // category, index are props passed to Categories comnponent
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItem(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;