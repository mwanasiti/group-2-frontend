import React from 'react'

function Search({handleChange}) {
    
  return (
    <div>
        <input placeholder='Search'  onChange={handleChange}/>
    </div>
  )
}

export default Search