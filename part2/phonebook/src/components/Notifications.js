import React from 'react'
import '../style.css'

const Notifications = ({message})=> {
    if (message) {
        return(
        <div className='message'>{message}</div>
        )}

    else if (message === null) {
        return null
    }
}

export default Notifications