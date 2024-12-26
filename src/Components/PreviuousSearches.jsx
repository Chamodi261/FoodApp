import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PreviuousSearches = () => {
    const searches = ['Pizza', 'Burger', 'Cookies', 'Ice Cream', 'Salad', 'Biriyani', 'Pudding', 'Soup', 'Sandwiches'];

    return (
        <div>
        <div className='previous-searches section'>
                    <h2>Previous Searches</h2>
                    <div className='previous-search-container'>
                        {searches.map((search, index) => (
                            <div key={index} style={{animationDelay: index * 0.1 + "s"}} className='search-item'>
                                {search}
                            </div>
                        ))}
                    </div>

                    {/* Search Box */}
                    <div className='search-box'>
                        <input type="search" placeholder='Search...'/>
                        <button className='btn'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

        </div>
    )
}

export default PreviuousSearches
