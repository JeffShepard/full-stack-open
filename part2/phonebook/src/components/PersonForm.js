import React from 'react'

const PersonForm = ({handleChange, newName, handleNumber, newNumber, handleClick} ) => {
    return(
      <form>
      <div>
        Name: <input onChange={handleChange} value={newName} />
      <p></p>
      Number: <input onChange={handleNumber} value={newNumber} />
      </div>
      <p></p>
      <div>
        <button type="submit" onClick={handleClick}>Add</button>
      </div>
    </form>
    )}

    export default PersonForm