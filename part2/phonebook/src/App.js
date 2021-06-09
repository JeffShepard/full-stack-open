import React, {useState, useEffect} from 'react'
import Filter from '../src/components/Filter'
import PersonForm from '../src/components/PersonForm'
import Persons from '../src/components/Persons'
import noteService from './services/notes'
import Notifications from './components/Notifications'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [temp,setTemp] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
    .getNotes()
    .then(allNotes => setPersons(allNotes))
  },[])

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  } 

  const handleClick = (e) => {
    e.preventDefault();
    const toAdd = {
      name:newName,
      number:newNumber
    }
    const dupe = persons.find(person => (person.name === newName  && person.number=== newNumber))
    const dupeNumber = persons.find(person => (person.name === newName  && person.number !== newNumber))
    
    if (dupe) {
      alert(`${newName} is already added to the phonebook`)
    }
    else if (dupeNumber) {
      if (window.confirm(`${newName} is already listed with telephone number ${dupeNumber.number}.  Do you wish to change the number?`)) {
        noteService.changeNumber(toAdd,dupeNumber.id)
        .catch(error => setErrorMessage(`${toAdd.name} has been deleted from the directory. Bye-Bye`))
      }
    }
    else {
      setErrorMessage(`${newName} has been added to the Phonebook`)
      noteService.postNotes(toAdd).then(person => setPersons(persons.concat(person)))
    }
    setNewName('')
    setNewNumber('')
    setTimeout(() => {
      setErrorMessage(null)},5000
    )
  }


  const handleFilterClick = (e) => {
    e.preventDefault();
    let tempTemp=[]
    persons.map(person => {
      return (
       (person.name.match(newFilter) ? tempTemp=tempTemp.concat(person) : console.log('No'))
       )})
    setTemp(tempTemp)
    setNewFilter('')
  }

  return (
    <div>
      <Notifications message={errorMessage} />
      <h2>Phonebook</h2>
    <Filter handleFilter={handleFilter} newFilter={newFilter} handleFilterClick={handleFilterClick} />
      <h2>Add a New:</h2>
    <PersonForm handleClick={handleClick} handleChange={handleChange} handleNumber={handleNumber} newNumber={newNumber} newName={newName} /> 
      <h2>Numbers</h2>
      <Persons temp={temp}/>
    </div>
  )

}

export default App
