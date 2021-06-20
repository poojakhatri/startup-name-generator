import react from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="search-container">
            <input placeholder="Type keywords" className="search-input" />
        </div>
    )
}

export default SearchBox;