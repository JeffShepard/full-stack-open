import axios from 'axios'

const baseUrl = 'http://localhost:3005/persons'

const getNotes = () =>
    axios.get(baseUrl)
    .then(response => response.data)

const postNotes = (toAdd) => 
    axios.post(baseUrl,toAdd)
    .then(response => response.data)

const deleteNote = (id) => {
    return(
    axios.delete(`${baseUrl}/${id}`)
    .then(response => response.data)
    )}

const changeNumber = (toAdd,id) => {
    return (
    axios.put(`${baseUrl}/${id}`, toAdd)
    .then(response => response.data)
    )}

const noteService = {getNotes, postNotes, deleteNote, changeNumber}



export default noteService