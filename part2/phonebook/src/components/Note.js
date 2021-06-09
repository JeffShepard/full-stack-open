import React from 'react'
import noteService from '../services/notes'



const Note = ({person}) => {

    let id = person.id

    const deleteHandleClick = () => {
        
        if (window.confirm(`Delete ${person.name}?`)) {
        noteService.deleteNote(id)
        }
    }

  return(
    <>
    <li>{person.name}  {person.number}
    <button onClick={deleteHandleClick}>Delete</button>
    </li>
    </>)
}

export default Note