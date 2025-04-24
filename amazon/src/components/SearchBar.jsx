const SearchBar = ({ searchQuery, handleSearch }) => {
    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;