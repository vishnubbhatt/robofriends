import React from 'react'

export default function SearchBox({searchField, searchChange}) {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue' 
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange} 
            />
        </div>
    )
}
