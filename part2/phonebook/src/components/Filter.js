import React from 'react'

const Filter = ({handleFilter, newFilter, handleFilterClick}) => {
    return (
    <>  
    Find Persons: <input onChange={handleFilter} value={newFilter}/>
      <p></p>
      <button type='submit' onClick={handleFilterClick}>Filter</button>
    </>)
}   
export default Filter