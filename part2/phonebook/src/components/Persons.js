import React from 'react'
import Note from './Note'

const Persons = ({temp}) => {
    return (
        <>
        <ul>
        {temp.map(person => <Note person={person} key={person.id}/>)}
        </ul>
        </>
    )
}

export default Persons