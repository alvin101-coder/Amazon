const FilterBar = ({ categories, handleFilter }) => {
    return (
        <div className="filter-bar">
            <label>Select Category:</label>
            <select onChange={(e) => handleFilter(e.target.value)}>
                <option value="All">All Categories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterBar;